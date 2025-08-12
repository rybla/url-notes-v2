---
title: "Undefined behavior in C and C++"
lang: "en"
---

# Undefined behavior in C and C++

February 3, 2024

![Puzzle blocks](https://russellw.github.io/jonathan-kemper-9tamF4J0vLk-unsplash.jpg)

Photo by [Jonathan Kemper](https://unsplash.com/@jupp?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/brown-wooden-blocks-on-blue-textile-9tamF4J0vLk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)

Working in C or C++ requires some awareness of _undefined behavior_: what it is, what its effects are, and how to avoid tripping over it. For simplicity, I will just talk about C, but everything in this article also applies to C++ except where otherwise noted.

*   [What is undefined behavior?](#what-is-undefined-behavior?)
*   [What behaviors are undefined?](#what-behaviors-are-undefined?)
    *   [Dereferencing a bad pointer](#dereferencing-a-bad-pointer)
    *   [Uninitialized data](#uninitialized-data)
    *   [Signed integer overflow](#signed-integer-overflow)
    *   [Bit shifting](#bit-shifting)
    *   [Aliasing](#aliasing)
*   [Why?](#why?)
    *   [It's not about unusual hardware](#it-s-not-about-unusual-hardware)
    *   [It is about optimization](#it-is-about-optimization)
    *   [Except when it isn't](#except-when-it-isn-t)
*   [UB is scary](#ub-is-scary)
*   [What to do](#what-to-do)
    *   [Compiler warnings](#compiler-warnings)
    *   [Bounds checking](#bounds-checking)
    *   [Sanitizers](#sanitizers)
    *   [Static analyzers](#static-analyzers)
    *   [Safety flags](#safety-flags)
    *   [Turn off optimization](#turn-off-optimization)
    *   [Use a different language](#use-a-different-language)

## What is undefined behavior?

It is, generally speaking, more difficult to program in C than in the likes of Python.

In some ways, that's because C is a lower-level language, closer to assembly; it just gives you what the underlying machine gives you.

For example, Python integers behave like their mathematical counterparts. They are unbounded; adding integers will always give you the right answer, no matter how large. (Unless, of course, the computer runs out of memory. No language can conjure infinite resources. But it can and does guarantee that you will either get the right answer, or a crash. Never the wrong answer.)

C integers are what fits in a CPU register. The `+` operator performs a single CPU `add` instruction. If that overflows a machine word, it will give something other than the right answer.

int successor(int a) {
    // May or may not be correct
    return a + 1;
}

(The association of C integers with CPU registers, necessarily glosses over complexity for the sake of brevity. For example, compilers targeting 32-bit platforms may provide 64-bit operations, implemented with runtime library support. Conversely, on 64-bit platforms, `int` is still usually 32-bit, for the historical reason that we spent too many years on 32-bit platforms; by the time the upgrade came, assumptions about the size of `int` were baked into too much code. If you want more details, [Wikipedia](https://en.wikipedia.org/wiki/C_data_types) provides a good start. The point here is that C is designed so basic operations compile to a small fixed number of CPU instructions, and that number is usually 1.)

In other ways, less intuitively, the difficulty arises because C is _not_ simply high-level assembly, and does _not_ always give you what the underlying machine gives you.

If you know about machine arithmetic, you might be tempted to write something along the lines of:

void error(const char\* msg);

int successor(int a) {
    if (a + 1 < a)
        error("Integer overflow!");
    return a + 1;
}

The logic is straightforward. If `a` is already the maximum possible int value, adding 1 will (assuming two's complement, a correct assumption on every modern CPU) cause it to wrap around to the minimum possible value.

Pasting this into [Compiler Explorer](https://godbolt.org/z/WhnGj3s4K), x86-64 gcc 13.2 with `-O3` compiles it to:

successor:
        lea     eax, \[rdi+1\]
        ret

That's just unconditional addition. The test has been silently discarded. What's going on?

In C, signed integer overflow is _undefined behavior_. The draft C23 standard describes this as behavior ... for which this document imposes no requirements. The compiler can then reason as follows:

*   By the laws of arithmetic on mathematical integers, `a + 1 < a` must be false.
*   Either the laws hold, or overflow has occurred.
*   If overflow has occurred, that's undefined behavior, so there are no requirements; any result is valid. In particular, there is no requirement to faithfully execute the test; ignoring it, and just blindly continuing on the happy path, is valid.
*   And of course, if overflow has not occurred, the happy path needs to be taken.
*   Therefore, the most efficient code that correctly implements the function, according to the rules of the ISO C language standard, ignores the test and just blindly adds 1.

This kind of logic treats the language standard as a contract. If you, the application programmer, uphold your side by performing only valid operations, the compiler will (in the absence of bugs, and to be fair, modern compilers are thoroughly tested, and highly reliable) uphold its side by generating correct machine code. But if you commit undefined behavior, the contract is broken, and the compiler can no longer be held responsible for anything.

So that's what undefined behavior means.

*   It's not just 'don't do this'.
*   It's not just 'this is not supported; do it at your own risk'.
*   It's not 'this breaks the abstraction, and will give you whatever the underlying hardware happens to give you'.
*   It's 'the compiler is allowed by the language standard to assume you won't do this; if you do, your code may end up doing anything at all'.

## What behaviors are undefined?

There is a sense in which every programming language has some possibility of undefined behavior. In Python, if you write `subprocess.run('foo')` and `foo` turns out to reformat your hard disk, Python will obviously disclaim any responsibility for that result. But usually we expect such complete absence of constraints to be a result of calling external code, or the operating system, or at least diving into the dark corners of race conditions between threads. C is unusual in that incorrect use of many ordinary, core language constructs, constitutes UB.

The draft C23 standard, annex J.2, lists 218 kinds of UB, and #1 is A "shall" or "shall not" requirement that appears outside of a constraint is violated, so the effective number is even greater. However, most of them are more or less obscure. For example, #218 is The `towctrans` function is called using a different `LC_CTYPE` category from the one in effect for the call to the `wctrans` function that returned the description, which as a source of bugs is at least highly situational.

The following are the kinds most likely to be sources of bugs in practice, though it should be emphasized that this list is far from exhaustive.

### Dereferencing a bad pointer

This is the big one, the bugbear of C programming. It has many subcategories (null pointer, array index overrun, double free, use after free...), but they all boil down to 'must only read from something that points to valid data; must only write to something that points to valid writable memory'.

An edge case (literally): it is perfectly valid to construct a pointer to just after the end of an array:

int a\[10\];
int\* end = a + 10;

Provided one does not dereference it. This is explicitly allowed because such pointers are often useful to mark the end of an array.

### Uninitialized data

Intuitively, the following should be correct: `n` is uninitialized, so its value cannot be relied on—presumably it contains whatever junk happens to be in the appropriate register or stack location—but no matter what that value happens to be, if C is just portable high-level assembly, then bitwise AND with 0, should give 0.

int zero(void) {
    int n;
    return n & 0;
}

Actually, by the rules of the language, it's undefined behavior. It might return zero, it might make the [proverbial demons](http://www.catb.org/jargon/html/N/nasal-demons.html) fly out of your nose, it might do the former with the current version of a compiler, and the latter with the next version.

### Signed integer overflow

As we have seen, overflow in signed integer arithmetic doesn't just yield machine-word wraparound; it's UB.

Left-shifting a 1 into the sign bit is also UB. Think of it as generating overflow by multiplying by a power of two.

Unsigned overflow is defined to give machine-word wraparound. One reason is that cases where you actually want such wraparound, like hash functions, tend to be cases where unsigned makes more sense in the first place.

Unsurprisingly, any integer division by zero, signed or not, is UB.

An edge case: dividing the minimum signed integer value by -1 generates overflow.

Floating-point overflow is not necessarily UB. In general, floating-point arithmetic is its own topic, that would need a separate article.

### Bit shifting

Separate from the question of sign bits, even for unsigned numbers, shifting by an amount greater than _or equal to_ the size of the number, is UB.

### Aliasing

A more subtle way to trip up with pointers: if you have an object of type A, and you cast its address to a pointer of type B, it is undefined behavior to dereference the latter. (The cast itself is fine; it's the dereference that's forbidden.) This rule is sometimes called strict aliasing, and is discussed at greater length [here](https://stackoverflow.com/questions/34074496); it's a deep topic, but some of the important highlights are:

*   `char*` gets a special exemption.
*   Transferring bits unmodified from one type to another (e.g. if you want to examine the bits of a floating-point number, so you want to transfer them unmodified to an integer, instead of converting the value), cannot be validly done by just type-punning pointers, but can be done with `memcpy`.
*   Type-punning through a union, is valid in C but not C++.

## Why?

Code manifesting undefined behavior can do anything, because the standard says so, and compilers take advantage of that freedom. But why does the standard say so, and why do compilers take advantage of it?

### It's not about unusual hardware

It has sometimes been said that UB exists because C dates back to the 70s and is designed to be suitable for embedded systems. In other words, because there were already multiple implementations doing different things, and it was necessary for the standard (whose purpose is more to codify existing practice than invent new practice) to acknowledge all of them.

It is true that C has over its life, needed to support a wide variety of platforms.

For example, the PDP-11/20 (minicomputer on which UNIX was initially developed), Intel 8088 (used in the original IBM PC) and Motorola 68000 (used in the original Mac and most of the early workstations) lacked memory management units. Dereferencing a null pointer was still invalid (in the sense of being unsupported and unlikely to do anything useful), but could not be trapped by the hardware, so the C standard could not mandate such trapping. (Doing it in software would have involved littering the code with conditional branches, which would have been unacceptably inefficient for many applications.)

![Ken Thompson and Dennis Ritchie in front of DEC PDP-11](https://russellw.github.io/102685442.03.01.lg.jpg)

DEC - PDP-11 - Ken Thompson and Dennis Ritchie, 1970 ca., Gwen Bell artifact and book collection, Lot X7413.2015, Catalog 102685442, Computer History Museum

But that would be grounds for making the result of dereferencing a null pointer, _implementation-defined_, which means A conforming implementation is required to document its choice of behavior. Implementations on chips that have an MMU, could trap null pointer dereference, and document that fact. Others could just give whatever happens to be in memory at that address, and document that fact. The requirement to support different platforms, justifies different implementations doing different things. It does not in any way whatsoever justify the 'anything goes' nature of undefined behavior.

Likewise for signed integer overflow. The VAX offers a processor status bit that causes integer arithmetic to automatically trap on overflow. Compilers on this architecture would like to at least optionally enable this mode, so the standard cannot specify wraparound. But it could say implementation-defined. Then a VAX implementation could trap on overflow, and document that fact. X86, ARM, RISC-V etc could wrap around, and document that fact. (Or optionally also trap. [As will be seen](#safety-flags), the lack of automatic hardware trap, is no obstacle to a compiler providing documented trap on overflow anyway.)

### It is about optimization

Criticism of this aspect of the C standard, and the interpretation thereof by compilers, sometimes takes the form of a wish for a version of C with no undefined behavior at all. Unfortunately, this is not feasible. Consider:

int foo\_or\_bar(int which) {
    // Assumes you don't mind both functions being called
    int x = foo();
    int y = bar();
    return \*(&x + which);
}

On the face of it, if you think of C as portable high-level assembly, and go by a model that local variables are allocated on the stack, the above should work. And if you compile with `-O0`, the generated code even [looks right](https://godbolt.org/z/ErWPqdnr4).

Of course, as soon as you turn on optimization, it [falls apart](https://godbolt.org/z/84161PhGc), because the compiler has kept `y` in a register instead of spilling it to the stack. Should it do so? From within the rules as written, the answer is simple. Dereferencing a pointer outside the bounds of the object it was constructed to point to, is UB, so the compiler is entitled to assume you didn't do it, and based on that assumption, proceed with the transformation. But from a policy viewpoint, we can step back and ask, should the rules be written that way in the first place?

Yes! Keeping things in registers, is in practice the most basic and important of optimizations. Failure to do it well, was the main reason for the remaining performance shortfall of early C over assembly. Good register allocation was the key advance that made it largely unnecessary to write assembly anymore, even in performance-critical code. Omitting register allocation would only be acceptable when you don't care about performance, and then you should probably be using something higher-level, safer and more comfortable, than C.

In general, any language that allows pointer arithmetic and is meant for practical use on mainstream hardware, _must_ have a rule more or less equivalent to C's, that dereferencing a pointer outside the bounds of the object it was constructed to point to, is undefined behavior. That rule is necessary for optimization, and if you don't care about performance, there is no practical reason to allow pointer arithmetic. The only exception is assembly, where everything is defined, but in exchange, you have to allocate registers by hand.

Pointers are by far the biggest source of optimizations enabled by UB, but there are also quite a few of them in integer arithmetic and bitwise logic, too many to go into here. If you're interested in a deeper dive into that topic, I recommend [this excellent article](https://blog.llvm.org/2011/05/what-every-c-programmer-should-know.html) by someone who has worked on compilers.

**Undefined behavior exists for the sake of optimization**. The reason some things are UB instead of merely implementation-defined, is that it allows compilers to optimize, because we want fast code.

### Except when it isn't

Among the 218 kinds of UB listed in the draft C23 standard, annex J.2, are:

*   Omitting a newline at the end of a source file.
*   Forgetting to close a block comment.
*   Forgetting to close the quotes on a character or string literal.
*   Unrecognized character in a source file.

These obviously don't contribute to any optimization; they are trivial to recognize at compile time, and every compiler so recognizes them. All purposes would be served at least as well by making them errors requiring diagnostics. Presumably the standard committee got into a 'why not' mindset. That's understandable, but in my opinion, it would be better to dial it back in future versions of the language, to apply the question 'does this UB enable optimization?' as a filter.

## UB is scary

Someone wrote [a web forum engine in assembly language](https://asmbb.org/what-is-asmbb.1/). A fine achievement. It is part of our nature that we sometimes choose to do things the hard way, not because we think it will be easy, but because we know it will be hard. The glory of the world is greater for it.

AsmBB is illustrative in this context, not so much for itself as for [the Hacker News discussion](https://news.ycombinator.com/item?id=38983742), which contains comments like

> I would posit that assembly + Linux kernel ABI is safer than the traditional C/C++ stack because they are not littered with nearly as much "undefined behavior". Signed arithmetic overflows and underflows as expected. Memory allocation with mmap + MAP\_ANONYMOUS initializes it to 0 as expected. Accessing unmapped memory in your address space (including address 0) triggers a SIGSEGV as expected. Your assembler makes much fewer assumptions than your C compiler and doesn't try to be half as clever, so it's more likely to crash and burn on error instead of silently subverting your expectations.

and

> as 10000truths points out in [https://news.ycombinator.com/item?id=38985198](https://news.ycombinator.com/item?id=38985198), in assembly you don't have to deal with undefined behavior, and that helps a lot. occasionally you have behavior that varies by implementations, but there's no nasal demons, and in particular you can add two unknown integers without even hitting implementation-defined behavior. and, in theory, you can never guarantee that a c program won't overflow its stack, and i've had this happen in practice on arduino, where it collided with the heap. and signedness bugs (which are commonly security holes; even qmail had one) are plausibly easier to avoid in assembly than in c, though recent compiler versions help with that

Of course it's not _literally_ safer to program in assembly, as another comment observes:

> ... this project was part of a CTF I played, which just hosted the latest version of this project. At least 8 vulnerabilities were found during the competition.

That's not a criticism of the author of asmBB. It's just not really humanly possible to write complex, security-critical code in assembly without vulnerabilities. There are too many opportunities to make simple mistakes, too few opportunities to obtain a clear view of the design and implementation. It can make sense for core loops of cryptographic algorithms, but not for entire programs or frameworks. That's one reason we use compiled languages in the first place.

But, making due allowances for hyperbole, the first two quoted comments illustrate just how deeply unsettling UB really is.

It can lurk in code that looks perfectly okay, even in code that seems to be explicitly avoiding it.

There is no systematic, reliable way to prevent it, or track it down after the fact.

It can turn the compiler into something that feels like your adversary, a monkey's paw that actively searches for loopholes in what you wrote.

Better compilers can make it worse. Code that was always technically invalid, but worked fine yesterday, can blow up today because the new version of the compiler has smarter dataflow analysis.

It produces [security flaws](https://lwn.net/Articles/342330/). In many contexts, these are the most worrying kind of bugs.

And it creates an endless argument:

*   The compiler shouldn't behave like an adversary, actively looking for loopholes to miscompile my code. This has really bad consequences.
*   The compiler needs license to optimize; if you didn't care about performance, you probably wouldn't use a low-level language in the first place. Your code was always technically incorrect. There is no substitute for thorough knowledge of the rules of the language.

The argument is endless because _both sides have valid points_.

## What to do

Given this state of affairs in which undefined behavior can be neither ignored nor abolished, what can you do about it?

### Compiler warnings

It's usually a good idea to turn on more of these than the default. Each compiler has many flags for this purpose, but some representative (not exhaustive) useful combinations:

GCC

`-Wall -Wextra -Wpedantic -Wconversion -Wdeprecated`

Visual C++

`/Wall /external:anglebrackets /external:W0`

(The GCC line may look odd: why doesn't `-Wall` do what it says? Because there was a problem with some projects using `-Werror` for their own internal builds (perfectly sensible as far as it goes), and shipping source code to users, and supplying their internal build scripts unmodified. Then a compiler upgrade that added new warnings, would fail the build for users, who are not in a position to do anything about it. So if you ship source code to users, it should come with build scripts that don't have `-Werror`. In the meantime, as a workaround for this problem, not all new warnings have been added to `-Wall`, so a combination of flags is needed if you really want them all.)

The above doesn't say what to do if you have inherited a project where every build causes hundreds of warnings to scroll up the screen. At that point, there may well be some true positives among the false ones, but no one knows which, so the aggregate is worse than useless. It ensures any correct warnings triggered by new code you add, will be lost in the noise.

So for concrete advice, I offer:

**The project should always build clean, without warnings.** (Whether this is enforced with `-Werror`, or a rule that warnings shall be cleaned up before sending a pull request, or whatever, is an implementation detail; use whatever method suits your workflow.)

Within that rule, enable as many useful warnings as possible. But if some particular warning is triggering 200 times in each full build, you have investigated the first 20 and confirmed them to be false alarms, and time is short, feel free to disable that one, get rid of the clutter so you can see the other warnings that are more likely to be useful.

### Bounds checking

It would be nice if 'turn on array bounds checking for testing, even if it has to be turned off in production for performance' was a readily available option. Unfortunately, C reduces arrays to simple pointers in a way that looked elegant at the time (and I was among those who thought it elegant, back in the 80s, before typical code had to worry about security, so I'm certainly not blaming anyone for this mistake), but turns out to make it fundamentally difficult to retrofit array bounds checking to the language.

This is one case where C++ is significantly different: most of the time, typical code uses templated containers instead of raw arrays.

Good news: this raises the possibility of bounds checking.

Bad news: `std::vector` makes it depend, not on something that could be switched at compile time, but on the operator name. `v.at(i)` is bounds checked, but `v[i]` is not. Few C++ projects are willing to commit to keeping bounds checks in production, not when such commitment would need to be made well in advance of being able to measure the performance cost.

Good news, sort of: not everyone uses `std::vector` in the first place. Many projects use a homebrew equivalent with a different allocation strategy, such as LLVM's `SmallVector`. If you are doing this, I recommend implementing bounds checking, conditional on `#ifdef DEBUG` or `#ifndef NDEBUG`.

As always, when using bounds or other safety checks in debug builds, measure before turning them off in release builds. Sometimes you get a pleasant surprise: the performance cost is unexpectedly small, enough to be worth paying for increased safety in production.

### Sanitizers

Sanitizers are debugging tools designed to go from 'Well the tests run without any visible errors, it looks okay' to 'Oops, there is actually UB that just didn't happen to produce visible effects during those tests'. (As opposed to debuggers, which are designed to go from 'It crashes' to 'It crashes, but now I have a better view of where that is in the code, and the values of variables at the time'.) That is, they are tools that instrument or otherwise change your code, not in order to change its behavior at runtime, but to make bugs more visible in testing.

Probably the best known is Valgrind, specifically designed for tracking down bugs in dealing with memory. I recommend running your code under it if possible. It is surprising how often it has found things like 'use after free' bugs in code that appeared to be working. Latent bugs like that may be harmless for the moment, but they are time bombs. They can manifest later when you add a field to some structure (fun times debugging when you're looking at the code you just added, resulting in intermittent crashes, and swearing there isn't anything wrong with it, _because there isn't_, it's just triggering a problem that was already lurking). Or worse, when an attacker exploits them with a carefully crafted data packet.

Some compilers have sanitizer features:

This list is not exhaustive.

### Static analyzers

As the name implies, they try to find bugs, not by running the code and seeing what happens, but by analyzing it and reasoning about what might happen. In other words, what sanitizers are to assertions, static analyzers are to compiler warnings: a bigger, more sophisticated version, provided by a purpose-built tool. In my experience, they are infrequently used for a combination of reasons:

1.  They need the same kind of information the compiler does about include paths, `-D` macros etc, so they take significant effort to set up, in the same way that the build procedure does.
2.  They tend to produce too many false positives to be really usable.
3.  Because of 1, people expect the cost of trying one out to be significant. Because of 2, people expect the benefit to likely not be high. Therefore, it doesn't make it to the top of the to-do list.

That having been said, the above are general observations, that may or may not apply to your project and particular choice of static analyzer. If you can spare the time, by all means try one and see if it works for you.

An exception that proves the rule is Klee, interesting because it illustrates _why_ the state of the art is as it is. Instead of heuristics (best guesses for flagging things that look suspicious), Klee uses logical deduction to reason about what the code must do, so there are no false positives; the tool only reports things it has mathematically proven must be bugs. That's wonderful, except logical deduction runs into exponential search space, the practical upshot of which is that Klee can do impressive things with small programs, but is too slow for practical use on large ones. Which is why the practical static analyzers rely on fallible heuristics.

### Safety flags

Sometimes you can use compiler flags to turn off certain kinds of undefined behavior. As far as I know, there is hitherto no name for such, so I'm coining the name _safety flags_.

They may have a small performance cost, or none at all. Before deciding against them for performance reasons, measure. Surprisingly often, things we think will slow down code, turn out to make no measurable difference. (Not that you should necessarily use safety flags. Only that if you choose not to, _assumed_ slowdown shouldn't be the reason.)

They are, in general, not portable. Indeed, if you use them, strictly speaking, you are then programming, not in standard C, but in a slightly nonstandard dialect of C. Whether that's important philosophically, is a matter of opinion. Whether it's important pragmatically, depends among other things on which compilers you need. If you decide to use them in a project, I do recommend documenting your reasoning, e.g. whether you did so as a general precaution or because it fixed a particular bug; that information could be difficult for a future maintainer (including you, a couple of years down the line) to recover after the fact.

`-fwrapv` tells GCC to give signed integer overflow, well-defined wraparound semantics. (Same as Java, basically.)

This is a case where it matters which compiler. Clang generally tries to be compatible with GCC, but what about Visual C++? As far as I know, it doesn't offer any equivalent; the question was raised [eight years ago](https://stackoverflow.com/questions/33480343) at the time of writing, and I'm not aware of any indication that the answer is going to change.

`-ftrapv` is a variant of the above: instead of being UB, or silently wrapping, signed integer overflow deterministically crashes your program.

That sounds bad. Crashing is bad, right? Actually it's good; it makes a bug visible so it can be fixed, while in the meantime making sure it can't cause more serious harm. In particular, wraparound overflow (that can make an integer calculation give the wrong answer) combines badly with lack of array bounds checking (that can turn a wrong integer into a security flaw). In other words, `-ftrapv` _turns potential security flaws into mere denial of service_, which in most practical contexts is a big improvement.

It also has a better portability story than `-fwrapv`. Using it on GCC is helpful instead of harmful if you also need Visual C++; crashes in the former version of your program, help you weed out bugs that might have affected the latter version in unpredictable ways.

It does cost more performance than `-fwrapv`, because not only are UB optimizations lost, but the compiler must explicitly add code to check for overflow and trap if it has occurred. Still, if measurement shows the performance cost is not a problem, I positively recommend this flag for hosted software (i.e. software that runs on a general-purpose computer). And if the performance cost is a problem, I still recommend it for debug builds.

The big caveat is embedded systems. The above discussion assumes denial of service is not as bad as remote code execution, but in some embedded systems, a crash could be a safety hazard in its own right. If that describes your domain, you need to think carefully about the consequences of a crash (or at least, unexpected reset) versus a silent wrong answer.

`-fno-strict-aliasing` tells GCC to turn off strict aliasing.

Again, Visual C++ doesn't offer this flag, but in this case, the consensus seems to be that it [always behaves](https://stackoverflow.com/questions/37176461) as though it were set, i.e. never optimizes based on strict aliasing. However, I have not found any Microsoft documentation guaranteeing this, and there is always the possibility that the next version of the compiler might start implementing such optimization. I think the odds are against it at this stage, but that is after all exactly what happened with integer overflow.

`-fno-delete-null-pointer-checks` disables optimizations of the form 'dereferencing a null pointer cannot happen, so it's okay to move or delete this null pointer check'.

Again, Visual C++ doesn't offer this flag. There is [some evidence](https://developercommunity.visualstudio.com/t/ClangCL-and-MFC-Undefined-Behaviour/1541392) that it always behaves as though the flag were set, but I'm not aware of any documented guarantee of this.

### Turn off optimization

Now to be clear, from a legalistic perspective, this doesn't change anything. UB can have any result, regardless of optimization level, and indeed, compilers sometimes do things that can trip over UB, like recognizing expressions that evaluate to constants, even at `-O0`, by reflex, as it were.

And as observed earlier, in most cases, you don't want to turn off optimization, because you want fast code! If that were not important, you probably wouldn't be using C in the first place.

But.

But suppose you've been given a big pile of code from an embedded system, hitherto compiled on a 68000 using an ancient version of Aztec C, and your job is to get it working on a modern RISC-V microcontroller with GCC. The code is messy, dates from when you could mostly get away with thinking of C as high-level assembly, and is probably riddled with UB. You haven't been given budget or schedule for a thorough overhaul, let alone a rewrite.

What you have been given, is a surplus of computing power. The code was, by hypothesis, fast enough on an 8 MHz 68000 with a not very optimizing compiler. A modern microcontroller is orders of magnitude faster. Okay, maybe now it needs to handle larger data volumes, but even so, it will probably be fast enough unoptimized.

In that situation, part of the best available solution (and yes, "part of" and "best available" are both loadbearing here) might very well be to compile with `-O0`.

### Use a different language

This is usually not a viable option, simply because projects for which it was, have mostly already switched; people have long since realized that when you don't have very hard requirements for performance or low-level control or the ability to work closely with a large existing code base, it's probably easier to use a higher-level language. (The meteoric rise of Java was in large part due to arriving at just the right time to catch the market that was using C++ for business applications, but did not really want a low-level language.) And rewriting an existing project in a different language is expensive and risky. The world is full of C and C++ code doing useful work, and that will remain true for the foreseeable future.

Still, automatic memory management is sometimes more affordable than it looked at first glance, and when it's not, there are other languages that don't need it. (At the time of writing, the most available, understood and proven are Fortran for numbercrunching, Ada and Rust for general code, Wuffs as a domain-specific language for wrangling untrusted file formats safely.) There are times when the option of using one of them should be on the table, so I list it for completeness.