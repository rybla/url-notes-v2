---
title: "Faster substring search with SIMD in Zig"
pubDate: "2025-08-10T00:00:00+00:00"
lang: "en"
---

# Faster substring search with SIMD in Zig

Published 10.08.2025

I’ve been learning a lot about low-level programming languages lately, and for a long time there has been one thing that has interested me: SIMD (or ‘single instruction, multiple data’) code. I’ve seen a lot of articles about having massive performance gains by utilizing SIMD and wanted to learn how to do it myself.

This article is a journey into implementing ~60% faster substring searching compared to Zig’s `std.mem.indexOf` using a SIMD-friendly algorithm.

## Baseline [#](#baseline)

This is the baseline function that we will be comparing against:

    fn find_substr(needle: []const u8, haystack: []const u8) ?usize {
        return std.mem.indexOf(u8, haystack, needle);
    }
    

It’s the closest thing to a substring search function from Zig’s standard library. It returns the first index of a subsequence – or `null` if not found.

## SIMD algorithm [#](#simd-algorithm)

This algorithm is taken directly from Wojciech Muła’s fantastic article [SIMD-friendly algorithms for substring searching](http://0x80.pl/notesen/2016-11-28-simd-strfind.html#algorithm-1-generic-simd), which seems to have the best algorithms for finding substrings in a large body of text.

Here’s how the algorithm works: say that we want to find the index of the word “blue” (the `needle`) in “It was a beautiful, bounteous, blue day” (the `haystack`). First, we extract the first and last character of the `needle` (‘b’ and ’e’) and store them in a variable.

Then we will loop through all of the characters in `haystack`, loading the next 32 characters (bytes) from memory into a SIMD register and comparing each character (byte) in the register with ‘b’. This will result in a mask containing 32 bytes, `1` if the character is ‘b’ and `0` in all other cases.

We will do the same with the last character, but load the characters with an offset (`needle.len - 1`).

> Without the offset, any match that starts in one 32‑byte chunk and ends in the next would be missed. With this method, we can also check for `needles` that are longer than 32 characters.

The result will be two bit masks, `First` and `Last`, where we can use bit-wise AND (`Result = First & Last`) to figure out potential substring occurrences.

`Result` will be `1` only when there is a ‘b’ at index `i` followed by an ’e’ at index `i+3`. We still need to check if those positions actually contain the value “blue”, but this still dramatically reduces the number of checks (= individual memory accesses) that are necessary. We’ll see how this works in practice in the next section.

## Implementation in Zig [#](#implementation-in-zig)

First, to properly use SIMD, let’s assume that the CPU supports AVX2 (Advanced Vector Extensions 2) and has 256-bit wide registers.

> All desktop processors less than 10 years old support AVX2, with newer ones also supporting AVX-512 with 512-bit wide registers.

This allows us to use Zig’s [@Vector](https://ziglang.org/documentation/0.14.1/#Vectors) function to make a type:

    const Block = @Vector(32, u8); // number of elements, element type (32*8=256)
    

By using `Block`, we are telling the compiler that the operations on this datatype should use SIMD instructions where possible.

Next, we take the first and last letters of the search word (’needle’) and load them into two SIMD registers, so that every byte of the register is filled with the character. This is handled by another built-in function, `@splat`:

    const first_letter: Block = @splat(needle[0]);
    const last_letter: Block = @splat(needle[needle.len - 1]);
    

In the main loop, we check that there is enough characters left in `haystack` so that we can read the next `32 + needle.len` characters. Inside the block, we load the blocks that we’re going to compare `first_letter` and `last_letter` with.

    const n = haystack.len;
    const k = needle.len;
    var i: usize = 0;
    while (i + k + 32 <= n) : (i += 32) {
        const first_block: Block = haystack[i..][0..32].*;
        const last_block: Block = haystack[i + k - 1 ..][0..32].*;
    

Now we can make the comparisons and combine them into a mask:

    	// ...
        const eq_first = first_letter == first_block;
        const eq_last = last_letter == last_block;
        var mask: std.bit_set.IntegerBitSet(32) = .{ .mask = @bitCast(eq_first & eq_last) };
    

Here we can use an `IntegerBitSet` from Zig’s standard library. We construct it by casting the result of `eq_first & eq_last` into a 32-bit integer. If the resulting mask is non-zero, there are candidates in the current block.

    	// ...
        while (mask.findFirstSet()) |bitpos| {
            if (std.mem.eql(u8, haystack[i + bitpos + 1 ..][0 .. k - 1], needle[1..])) {
                return i + bitpos;
            }
            _ = mask.toggleFirstSet();
        }
    

The first and last characters of the substring are checked already, so we don’t need to check their equality again.

Finally, if there are leftover characters, we can fall back to `std.mem.IndexOf`.

    	// ...
    	// Fallback to scalar search for the tail
    	if (i < n) {
    	    if (std.mem.indexOf(u8, haystack[i..], needle)) |rel_idx| {
    	        return i + rel_idx;
    	    }
    	}
    	return null; // no substring found
    }
    

### Benchmarks [#](#benchmarks)

To properly show the effects of our SIMD algorithm, we’re going to need a large haystack. For this, I’ve chosen to use [the entirety Moby Dick](https://www.gutenberg.org/ebooks/2701) in plain text, and a search word ’newsletter’, which appears at the very end of the text.

> The code is available [on GitHub](https://github.com/aarol/substr)

To compile the code, I ran `zig build` with `-Doptimize=ReleaseFast`:

    > zig build -Doptimize=ReleaseFast
    

> Support for [bitwise operations on boolean vectors](https://github.com/ziglang/zig/pull/24131) was added in Zig 0.15, which is unreleased as of now (August 2025). If you want to run the code on your system, you need to build Zig from the master branch.

To measure performance and compare against baseline, I’ll use one of my favorite CLI tools, [poop](https://github.com/andrewrk/poop):

    > poop -d 10000 "./zig-out/bin/substr" "./zig-out/bin/substr --simd"
    

Benchmark 1 (6361 runs): ./zig-out/bin/substr
  measurement          mean ± σ            min … max           outliers         delta
  wall\_time          1.22ms ±  185us     903us … 5.33ms        242 ( 4%)        0%
  peak\_rss           1.20MB ±  290      1.18MB … 1.20MB          2 ( 0%)        0%
  cpu\_cycles         2.15M  ± 40.5K     2.10M  … 2.71M         312 ( 5%)        0%
  instructions       1.85M  ± 0.75      1.85M  … 1.85M          56 ( 1%)        0%
  cache\_references   43.8K  ±  620      38.3K  … 44.9K           9 ( 0%)        0%
  cache\_misses       19.0K  ± 10.3K     4.08K  … 33.6K           0 ( 0%)        0%
  branch\_misses      48.1   ± 17.4        20   …  104           97 ( 2%)        0%

Benchmark 2 (10000 runs): ./zig-out/bin/substr --simd
  measurement          mean ± σ            min … max           outliers         delta
  wall\_time           500us ± 96.9us     397us … 4.23ms        840 ( 8%)        ⚡\- 58.9% ±  0.4%
  peak\_rss           1.20MB ±  164      1.18MB … 1.20MB          1 ( 0%)          +  0.0% ±  0.0%
  cpu\_cycles          369K  ± 36.1K      340K  … 1.10M        1167 (12%)        ⚡\- 82.8% ±  0.1%
  instructions        578K  ± 0.53       578K  …  578K           6 ( 0%)        ⚡\- 68.8% ±  0.0%
  cache\_references   38.8K  ±  545      34.1K  … 40.5K           6 ( 0%)        ⚡\- 11.4% ±  0.0%
  cache\_misses       5.62K  ± 4.97K     2.11K  … 27.9K        1529 (15%)        ⚡\- 70.3% ±  1.2%
  branch\_misses      2.88K  ± 23.4      2.81K  … 3.09K         453 ( 5%)        💩+5879.8% ±  1.4%

(Scroll right to see more data)

As you can see, for a large body of text, the speedup is noticeable: 59% faster with 80% less CPU cycles!

> The SIMD version only took 500 microseconds to complete on average, including the overhead of loading the program into memory and printing the result. 500 microseconds is half a millisecond. That’s how fast my laptop searches through a whole book, **200 000 words**, cover to cover. This is why computers are so powerful! How long would it take for a human to do that?

This is quite a large improvement, and proves that the SIMD code is actually working (otherwise the reduction in CPU cycles wouldn’t be so massive). Can we do even better though?

## Character selection [#](#character-selection)

You may notice from the output of `poop` that the number of branch misses has absolutely blown up – from 48 on average to 2.88k !

Why does this happen? Well, if you were to count how many times the inner while loop is entered when the mask is non-zero:

        var i: usize = 0;
        var count: usize = 0;
        while (i + k + 32 <= n) : (i += 32) {
            const block_first: Block = haystack[i..][0..32].*;
            const block_last: Block = haystack[i + k - 1 ..][0..32].*;
            const eq_first = first == block_first;
            const eq_last = last == block_last;
            var mask: std.bit_set.IntegerBitSet(32) = .{ .mask = @bitCast(eq_first & eq_last) };
            while (mask.findFirstSet()) |bitpos| {
                count += 1;
                if (std.mem.eql(u8, haystack[i + bitpos + 1 ..][0 .. k - 1], needle[1..])) {
                    std.debug.print("found match with count: {}\n", .{count});
                    return i + bitpos;
                }
                _ = mask.toggleFirstSet();
            }
        }
    

    found match with count: 2792
    

The fact that `count` is so close to the number of mispredictions suggests that each time the mask is non‑zero we incur a branch miss.

Unfortunately, there is no obvious way to prevent this with the current algorithm. The state-of-the-art seems to be choosing two bytes in the needle that occur less frequently according to a pre-calculated frequency distribution. This is used in the [`memchr` crate](https://github.com/BurntSushi/memchr) in Rust, as explained by the author in [this comment on Hacker News](https://news.ycombinator.com/item?id=44275934).

For example, the needle `newsletter` has the rarest characters `w` at index `2` and `l` at index `4`.

The function in `memchr` can be found [here](https://github.com/BurntSushi/memchr/blob/3962118774ac511580c5b40fd14323e31629fa52/src/arch/all/packedpair/mod.rs#L163). I’ve ported it into Zig, and you can see it [here](https://github.com/aarol/substr/blob/9392f9557de735929dfb79efa4fc88115341c65d/src/main.zig#L100).

        const needle_index_pair = find_rarest(needle);
    
        const first_letter: Block = @splat(needle[needle_index_pair[0]]);
        const first_offset = needle_index_pair[0];
        const second_letter: Block = @splat(needle[needle_index_pair[1]]);
        const second_offset = needle_index_pair[1];
    

The algorithm is the exact same, but the index for `first_letter` and `second_letter` now varies according to the pre-calculated frequency distribution.

### Benchmarks [#](#benchmarks)

Benchmark 1 (10000 runs): ./zig-out/bin/substr --simd
  measurement          mean ± σ            min … max           outliers         delta
  wall\_time           472us ± 62.9us     400us … 1.62ms        735 ( 7%)        0%
  peak\_rss           1.20MB ±    0      1.20MB … 1.20MB          0 ( 0%)        0%
  cpu\_cycles          376K  ± 44.7K      347K  … 1.46M        1213 (12%)        0%
  instructions        578K  ± 0.54       578K  …  578K          10 ( 0%)        0%
  cache\_references   38.7K  ±  715      28.3K  … 40.6K          96 ( 1%)        0%
  cache\_misses       7.37K  ± 5.83K     2.78K  … 27.7K        1608 (16%)        0%
  branch\_misses      2.88K  ± 23.4      2.82K  … 3.08K         415 ( 4%)        0%

Benchmark 2 (10000 runs): ./zig-out/bin/substr --simdv2
  measurement          mean ± σ            min … max           outliers         delta
  wall\_time           429us ± 75.5us     369us … 3.85ms        393 ( 4%)        ⚡\-  9.1% ±  0.4%
  peak\_rss           1.20MB ±    0      1.20MB … 1.20MB          0 ( 0%)          -  0.0% ±  0.0%
  cpu\_cycles          304K  ± 28.4K      282K  … 1.07M        1140 (11%)        ⚡\- 19.2% ±  0.3%
  instructions        561K  ± 0.52       561K  …  561K           5 ( 0%)        ⚡\-  2.9% ±  0.0%
  cache\_references   38.7K  ±  610      29.9K  … 40.3K          25 ( 0%)          -  0.1% ±  0.0%
  cache\_misses       5.21K  ± 3.53K     2.57K  … 27.3K        1306 (13%)        ⚡\- 29.3% ±  1.8%
  branch\_misses      1.07K  ± 14.0      1.02K  … 1.17K         275 ( 3%)        ⚡\- 62.8% ±  0.0%

Comparing to the previous SIMD version, the number of branch misses has dropped by 60%, and it’s 9% faster too. Nice!

> The number of branch misses is lower, which can cause faster execution, but I suspect that a much bigger impact is the fact that there are less false positives, which means less byte-by-byte memory accesses and comparisons.

## AVX-512 [#](#avx-512)

Since AMD [Zen 4](https://en.wikipedia.org/wiki/Zen_4) and Intel [Cannon Lake](https://en.wikipedia.org/wiki/Cannon_Lake_%28microprocessor%29), there has been a new SIMD instruction set, AVX-512 with 512-bit instructions – double the size of AVX2. I don’t have a computer that has AVX-512 right now, but I suspect that changing the Zig code to process 64 characters at once would lead to even better results.

## A smaller haystack [#](#a-smaller-haystack)

It’s clear that with a very large haystack, the SIMD version is much faster. But what about a tiny input, like less than a hunder characters?

I did a bit of benchmarking with `poop`, but I found that I couldn’t accurately measure the speed, since both versions finish extremely very quickly. I decided to use [zBench](https://github.com/hendriknielaender/zBench) to do a microbenchmark. I decided to use a snippet from Moby Dick as seen [here](https://github.com/aarol/substr/blob/main/src/haystack-small.txt).

+- run test stderr
benchmark              runs     total time     time/run (avg ± σ)    (min ... max)                p75        p99        p995      
-----------------------------------------------------------------------------------------------------------------------------
find\_substr            100000   424.368ms      4.243us ± 740ns       (3.964us ... 107.923us)      4.187us    7.075us    7.245us   
find\_substr\_simd\_v2    100000   147.883ms      1.478us ± 186ns       (1.417us ... 21.354us)       1.483us    1.539us    1.548us   

I was surprised to see that even when processing less than a hundred characters, the SIMD algorithm is still faster! The difference between 4μs vs 1μs is extremely small, but it’s slightly faster nonetheless.

## Conclusion [#](#conclusion)

As you can see, SIMD can be used to make substring searching dramatically faster, for both very large and very small strings.

But if it’s so much better, then why haven’t I made a pull request to change `std.mem.indexOf` to use SIMD? Well, the reason is that

1.  `std.mem.indexOf` is generic over element size, and having a size larger than `u8` makes the algorithm much slower
2.  The [algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore%E2%80%93Horspool_algorithm) used in `stdmem.indexOf` is cross-platform, while the SIMD code wouldn’t be. (not all platforms have SIMD registers at all, Arm has only 128-bit)

Substring searching is rarely the bottleneck in programs, especially ones written in a fast language like Zig. That’s why I don’t personally think it would be worth it to add it to the standard library.

Still, it was great to learn about this advanced optimization technique and see some concrete performance measurements from it!

The full code is available on GitHub [here](https://github.com/aarol/substr/).

## Further reading [#](#further-reading)

*   SIMD with Zig [https://www.openmymind.net/SIMD-With-Zig/](https://www.openmymind.net/SIMD-With-Zig/)
*   SIMD-friendly algorithms for substring searching: [http://0x80.pl/notesen/2016-11-28-simd-strfind.html](http://0x80.pl/notesen/2016-11-28-simd-strfind.html)
*   `memchr` source code: [https://github.com/BurntSushi/memchr](https://github.com/BurntSushi/memchr)