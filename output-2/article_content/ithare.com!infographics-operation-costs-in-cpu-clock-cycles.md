---
title: "Infographics: Operation Costs in CPU Clock Cycles - IT Hare on Soft.ware"
author: "Author:"
siteName: "IT Hare on Soft.ware"
pubDate: "2016-09-12T12:10:11+00:00"
lang: "en-US"
---

# Infographics: Operation Costs in CPU Clock Cycles - IT Hare on Soft.ware

_UPDATED: TLB and CAS/atomics (including different NUMA node) added_

[![Operation costs in CPU clock cycles on x86/x64 Platform](http://ithare.com/wp-content/uploads/part101_infographics_v08.png)](http://ithare.com/wp-content/uploads/part101_infographics_v08.png)

_Click to enlarge_  
_NB: scale is logarithmic!_

Premature Pessimization Easy on yourself, easy on the code: All other things being equal, notably code complexity and readability, certain efficient design patterns and coding idioms should just flow naturally from your fingertips and are no harder to write than the pessimized alternatives. This is not premature optimization; it is avoiding gratuitous pessimization.— Herb Sutter, Andrei Alexandrescu —Whenever we need to optimise the code, we should profile it, plain and simple. However, sometimes it makes sense just to know ballpark numbers for relative costs of some popular operations, so you won’t do grossly inefficient things from the very beginning (and hopefully won’t need to profile the program later 🙂 ).

So, here it goes – an infographics which should help to estimate costs of certain operations in CPU clocks cycles – and answer the questions such as “hey, how much L2 read usually costs?”. While answers to all these questions are more or less known, I don’t know of a single place where all of them are listed and put into perspective. Let’s also note that while the listed numbers, strictly speaking, apply only to modern x86/x64 CPUs, similar patterns of relative operation costs are expected to be observed on other modern CPUs with large multi-level caches (such as ARM Cortex A, or SPARC); on the other hand, MCUs (including ARM Cortex M) are different enough so some of the patterns may be different there.

Last but not least, a word of caution: all the estimates here are just indications of the order of magnitude; however, given the scale of differences between different operations, these indications may still be of use (at least to be kept in mind to avoid “premature pessimisation”).

On the other hand, I am still sure that such a diagram is useful to avoid saying things “hey, virtual function calls cost nothing” – which may or may not be true depending on how often you call them. Instead, using the infographics above – you’ll be able to see that

if you call your virtual function 100K times per second on a 3GHz CPU – it probably won’t cost you more than 0.2% of your CPU total; however, if you’re calling the same virtual function 10M times per second – it can easily mean that virtualisation eats up double-digit percentages of your CPU core.

Another way of approaching the same question is to say that “hey, I’m calling virtual function once per piece of code which is like 10000 cycles, so virtualisation won’t eat more than 1% of the program time” – but you still need some kind of way to see an order of magnitude for the related costs – and the diagram above will still come in handy 🙁 .

Preliminaries aside, let’s take a closer look at those items on our infographics above.

## ALU/FPU Operations

For our purposes, when speaking about ALU operations, we will consider only register-register ones. If memory is involved, the costs can be VERY different – and will depend on “how bad the cache miss was” for the memory access, as discussed below.

### “Simple” Operations

These days (and on modern CPUs), “simple” operations such as ADD/MOV/OR/… can easily have costs of less than 1 CPU cycle. This doesn’t mean that the operation will be literally performed in half a cycle. Instead –

while all operations are still performed in a whole number of cycles, some of them can be performed in parallel

In [\[Agner4\]](#rabbitref-Agner4) (which BTW is IMO the best reference guide on CPU operation costs), this phenomenon is represented by each operation having two associated numbers – one is _latency_ (which is always a whole number of cycles), and another is _throughput_. It should be noted, however, that in real-world, when going beyond _order of magnitude_ estimates, exact timing will depend a lot on the nature of your program, and on the order in which the compiler has put seemingly-unrelated instructions; in short – whenever you need something better than an order-of-magnitude guesstimate, you need to profile your specific program, compiled with your specific compiler (and ideally – on a specific target CPU too).

Further discussion of such techniques (known as “out of order execution”), while being Really Interesting, is going to be way too hardware-related (what about “register renaming” which happens under the hood of CPU to reduce dependencies which prevent out-of-order from working efficiently?), and is clearly out of our scope at the moment 🙁 .

### Integer Multiplication/Division

![Surprised hare:](http://ithare.com/wp-content/uploads/BB_emotion_0006b.png)“Integer multiplication/division is quite expensive compared to 'simple' operations above.Integer multiplication/division is quite expensive compared to “simple” operations above. [\[Agner4\]](#rabbitref-Agner4) gives cost of 32/64-bit multiplication (MUL/IMUL in x86/x64 world) at between 1-7 cycles (in practice, I’ve observed more narrow range of values, such as 3-6 cycles), and cost of 32/64-bit division (known as DIV/IDIV on x86/64) – at between 12-44 cycles.

### Floating-Point Operations

Costs of floating-point operations are taken from [\[Agner4\]](#rabbitref-Agner4), and range from 1-3 CPU cycles for addition (FADD/FSUB) and 2-5 cycles for multiplication (FMUL), to 37-39 cycles for division (FDIV).

If using SSE scalar operations (which apparently every compiler and its dog does these days), the numbers will go down to 0.5-5 cycles for multiplication (MULSS/MULSD), and to 1-4o cycles for division (DIVSS/DIVSD); in practice, however, you should expect more like 10-40 cycles for division (1 cycle is “reciprocal throughput”, which is rarely achievable in practice).

### 128-bit Vector Operations

For quite a few years, CPUs are providing “vector” operations (more precisely – Single Instruction Multiple Data a.k.a. SIMD operations); in Intel world they’re known as SSE and AVX and in ARM world – as ARM Neon. One funny thing about them is that they operate on “vectors” of data, with data being of the same size (128 bit for SSE2-SSE4, 256 bit for AVX and AVX2, and 512 bits for upcoming AVX-512) – but interpretations of these bits being different. For example, 128-bit SSE2 register can be interpreted as (a) two doubles, (b) four floats, (c) two 64-bit integers, (d) four 32-bit integers, (e) eight 16-bit integers, (f) 16 8-bit integers.

[\[Agner4\]](#rabbitref-Agner4) gives the costs of integer addition over 128-bit vector at < 1 cycle if the vector is interpreted as 4×32-bit integers, and at 4 cycles if it is 2×64-bit integers; multiplication (4×32 bits) goes at 1-5 cycles – and last time I checked, there were no integer division vector operations in x86/x64 instruction set. For floating-point operations over 128-bit vectors, the numbers go from 1-3 CPU cycles for addition and 1-7 CPU cycles for multiplication, to 17-69 cycles for division.

### Bypass Delays

![Wtf hare:](http://ithare.com/wp-content/uploads/BB_emotion_0027b.png)“switching between integer and floating-point instructions is not freeOne not-so-obvious thing related to calculation costs, is that switching between integer and floating-point instructions is not free. [\[Agner3\]](#rabbitref-Agner3) gives this cost (known as “bypass delay”) at 0-3 CPU cycles depending on the CPU. Actually, the problem is more generic than that, and (depending on CPU) there can also be penalties for switching between vector (SSE) integer instructions and usual (scalar) integer instructions.

_Optimisation hint:_ in performance-critical code, avoid mixing floating-point and integer calculations.

## Branching

The next thing which we’ll be discussing, is branching code. Branch (an _if_ within your program) is essentially a comparison, plus a change in the program counter. While both these things are simple, there can be a significant cost associated with branching. Discussing why it is the case, is once again way too hardware-related (in particular, pipelining and speculative execution are two things involved here), but from the software developer’s perspective it looks as follows:

*   if the CPU guesses correctly where the execution will go (that’s before actually calculating condition of _if)_, then cost of branching operation is about 1-2 CPU cycles.
*   however, if the CPU makes an incorrect guess – it results in CPU effectively “stalling”

The amount of this stall is estimated at 10-20 CPU cycles [\[Wikipedia.BranchPredictor\]](#rabbitref-Wikipedia.BranchPredictor), for recent Intel CPUs – around 15-20 CPU cycles [\[Agner3\]](#rabbitref-Agner3).

![Inquisitive hare:](http://ithare.com/wp-content/uploads/BB_emotion_0010b.png)“on modern Intel CPUs branch prediction is always dynamic (or at least dominated by dynamic decisions)Let’s note that while GCC’s \_\_builtin\_expect() macro is widely believed to affect branch prediction – and it used to work this way just 15 years ago, it is no longer the case at least for Intel CPUs anymore (since Core 2 or so). As described in [\[Agner3\]](#rabbitref-Agner3),  on modern Intel CPUs branch prediction is always dynamic (or at least dominated by dynamic decisions); this in turn, implies that \_\_builtin\_expect()-induced differences in the code are not expected to have any effect on branch prediction (on modern Intel CPUs, that is). However, \_\_builtin\_expect() still has effect on the way code is generated, as described in “Memory Access” section below.

## Memory Access

![Dreaming hare:](http://ithare.com/wp-content/uploads/BB_emotion_0016b.png)“Back in 80s, it was possible to calculate the speed of the program just by looking at assembly.Back in 80s, CPU speed was comparable with memory latency (for example, Z80 CPU, running at 4MHz, spent 4 cycles on a register-register instruction, and 6 cycles on a register-memory instruction). At that time, it was possible to calculate the speed of the program just by looking at assembly.

Since that point, speeds of CPUs have grown by 3 orders of magnitude, while memory latency has improved only 10-30-fold or so. To deal with remaining 30x+ discrepancy, all kinds of caches were introduced. Modern CPU usually has 3 levels of caches. As a result, speed of memory access depends very significantly on the answer to “where the data we’re trying to read, is residing?” The lower the cache level where your request was found – the faster you can get it.

L1 and L2 cache access times can be found in official documents such as [\[Intel.Skylake\]](#rabbitref-Intel.Skylake); it lists access L1/L2/L3 times at 4/12/44 CPU cycles respectively (NB: these numbers vary slightly from one CPU model to another one). Actually, as mentioned in [\[Levinthal\]](#rabbitref-Levinthal), L3 access times can go as high as 75 cycles if the cache line is shared with another core.

However, what is more difficult to find, is information about main RAM access times. [\[Levinthal\]](#rabbitref-Levinthal) gives it at 60ns (~180 cycles if CPU is running at 3GHz).

_Optimisation hint:_ DO improve data locality. For more discussion on it, see, for example, [\[NoBugs\]](#rabbitref-NoBugs).

Besides memory reads, there are also memory writes. While intuitively write is perceived to be more expensive than read, most often it is not; the reason for it is simple – CPU doesn’t need to wait for the write to complete before going forward (instead, it just starts writing – and goes ahead with the other business). This means that most of the time, CPU can perform memory write in ~1 cycle; this is consistent with my experience, and _seems_ to correlate with [\[Agner4\]](#rabbitref-Agner4) reasonably well. On the other hand, if your system happens to be memory-bandwidth-bound, numbers can get EXTREMELY high; still, from what I’ve seen, having memory bandwidth overloaded by _writes_ is a very rare occurrence, so I didn’t reflect it on the diagram.

And besides data, there is also code.

_Another optimisation hint:_ try to improve code locality too. This one is less obvious (and usually has less drastic effects on performance than poor data locality). Discussion on the ways to improve code locality can be found in [\[Drepper\]](#rabbitref-Drepper); these ways include such things as inlining, and \_\_builtin\_expect().

Let’s note that while \_\_builtin\_expect(), as mentioned above, doesn’t have effect on branch prediction on Intel CPUs anymore, it still has an effect on the code layout, which in turn impacts code spatial locality. As a result, \_\_builtin\_expect() doesn’t have effects which are too pronounced on modern Intel CPUs (on ARM – I have no idea TBH), but still can affect a thing or three performance-wise. Also there were reports that under MSVC, swapping _if_ and _else_ branches of _if_ statement has effects which are similar to \_\_builtin\_expect() ones (with “likely” branch being the _if_ branch of two-handed _if_), but make sure to take it with a good pinch of salt.

### NUMA

One further thing which is related to memory accesses and performance, is rarely observed on desktops (as it requires multi-socket machines – not to be confused with multi-core ones). As such, it is mostly server-land; however, it does affect memory access times significantly.

![Hare pointing out:](http://ithare.com/wp-content/uploads/BB_emotion_0008b.png)“When multiple sockets are involved, modern CPUs tend to implement so-called NUMA architecture, with each processor having its own RAMWhen multiple sockets are involved, modern CPUs tend to implement so-called NUMA architecture, with each processor (where “processor” = “that thing inserted into a socket”) having its own RAM (opposed to earlier-age FSB architecture with shared FSB a.k.a. Front-Side Bus, and shared RAM). In spite of each of the CPUs having its own RAM, CPUs share RAM address space – and whenever one needs access to RAM physically located within another one – it is done by sending a request to another socket via ultra-fast protocol such as QPI or Hypertransport.

Surprisingly, this doesn’t take as long as you might have expected – [\[Levinthal\]](#rabbitref-Levinthal) gives the numbers of 100-300 CPU cycles if the data was in the remote CPU L3 cache, and of 100ns (~=300 cycles) if the data wasn’t there, and remote CPU needed to go to its own main RAM for this data.

### CAS

Sometimes (in particular, in non-blocking algorithms and while implementing mutexes), we want to use so-called atomic operations. In academy, only one atomic operation, known as CAS (Compare-And-Swap) is usually considered (on the grounds that everything else can be implemented via CAS); in real-world, there are usually more of them (see, for example, std::atomic in C++11, Interlocked\*() functions in Windows, or \_\_sync\_\*\_and\_\*() in GCC/Linux). These operations are quite weird beasts – in particular, they require special CPU support to work properly. On x86/x64, appropriate ASM instructions are characterised by having LOCK prefix, so CAS on x86/x64 is usually written as LOCK CMPXCHG.

What matters from our current perspective is that these CAS-like operations are going to take significantly longer than usual memory access (to provide atomic guarantees, CPU needs to synchronise things at least between different cores – or in case of multi-socket configurations, also between different sockets).

[\[AlBahra\]](#rabbitref-AlBahra) gives the cost of CAS operations at about 15-30 clock cycles (with little difference between x86 and IBM Power families). Let’s note that this number is valid only when two assumptions stand: (a) we’re working with a single-core configuration, and (b) that CAS-ed memory is already in L1 cache.

As for CAS costs in multi-socket NUMA configurations – I wasn’t able to find the data about CAS, so I will need to speculate for the time being 🙁 . On the one hand, IMO it will be next-to-impossible to have latencies of CAS operation on “remote” memory less than round-trip of HyperTransport between the sockets, which in turn is comparable to the cost of NUMA L3 cache read. On the other hand, I don’t really see the reasons to go higher than that :-). As a result, I am guesstimating the cost of NUMA different-socket CAS (and CAS-like) operations at around 100-300 CPU clock cycles.

### TLB

Whenever we’re working with modern CPUs and modern OS’s, at app-level we are usually dealing with “virtual” address space; in other words – if we run 10 processes, _each_ of these processes can (and probably will) have its own address 0x00000000. To support such isolation, CPUs implement so-called “virtual memory”. In x86 world – it was first implemented via “protected mode” introduced as early as 1982 in 80286.

Usually, “virtual memory” works on per-page basis (for x86 each page is either 4K or 2M or at least in theory – even 1G(!) in size), with CPU being aware of the current process being run (!), and re-mapping virtual addresses into physical addresses – on each memory access, that is. Note that this re-mapping occurs completely behind the scenes, in a sense that all CPU registers (except for those specifically dealing with mapping) contain all the pointers in “virtual memory” format.

And as soon as we said “mapping” – well, the information about this mapping needs to be stored somewhere. Moreover, as this mapping (from virtual addresses into physical addresses) happens _on each and every memory access –_ it needs to be Damn Fast. To help with it, a special kind of cache, known as Translation Lookaside Buffer (TLB) is normally used.

As for any type of cache, there is a cost of missing TLB; for x64 it is reported between 7-21 CPU cycles [\[7cpu\]](#rabbitref-7cpu). Overall, TLBs are quite difficult to affect; however, a few recommendations can still be made in this regard:

*   once again – improving overall memory locality helps to reduce TLB misses too; the more local your data is – the less your chances are to get out of TLB.
*   consider using “huge pages” (those 2M pages on x64). The larger pages are – the less entries in TLB you’ll need; on the other hand, using “huge pages” comes with some caveats, and as a result – is a two-edged sword. Which means that you need to make sure to test it for your specific app.
*   consider turning off ASLR (=”Address Space Layout Randomization”). As discussed in [\[Drepper\]](#rabbitref-Drepper), enabling ASLR, while being good for security, hits performance, and exactly because of TLB misses too 🙁 .

## Software Primitives

Now we’re done with those things which are directly hardware-related, and will be speaking about certain things which are more software-related; still, they’re really ubiquitous, so let’s see how much we spend every time we’re using them.

### C/C++ Function Calls

First, let’s see the cost of C/C++ function call. Actually, C/C++ caller does a damn lot of stuff before making a call – and callee makes another few things too.

[\[Efficient C++\]](#rabbitref-Efficient C++) estimates CPU costs for a function call at 25-250 CPU cycles depending on number of parameters; however, it is quite an old book, and I don’t have a better reference of the same caliber 🙁 . On the other hand, from my experience, for a function with a reasonably small number of parameters, it is more like 15-30 cycles; this also seems to apply to non-Intel CPUs as measured by [\[eruskin\]](#rabbitref-eruskin).

![Hare with hopeless face:](http://ithare.com/wp-content/uploads/BB_emotion_0003b.png)“keep in mind that these days compilers tend to ignore _inline_ specifications more often than not_Optimisation hint:_ Use _inline_ functions where applicable. However, keep in mind that these days compilers tend to ignore _inline_ specifications more often than not 🙁 . Therefore, for really time-critical pieces of code you may want to consider _\_\_attribute\_\_((always\_inline))_ for GCC, and _\_\_forceinline_ for MSVC compilers to make them do what you need. However, do NOT overuse this forced-inline stuff for not-so-critical pieces of code, it can make things worse rather easily.

BTW, in many cases gains from inlining can exceed simple removal of call costs. This happens because inlining enables quite a few additional optimisations (including those related to reordering to achieve the proper use of hardware pipeline). Also let’s not forget that inlining improves spatial locality for the code – which tends to help a bit too (see, for example, [\[Drepper\]](#rabbitref-Drepper)).

#### Indirect and Virtual Calls

Discussion above was related to usual (“direct”) function calls. Costs of indirect and virtual calls are known to be higher, and there is pretty much a consensus on that indirect call causes branching (however, as [\[Agner1\]](#rabbitref-Agner1) notes, as long as you happen to call the same function from the same point in code, branch predictors of modern CPUs are able to predict it pretty good; otherwise – you’ll get a misprediction penalty of 10-30 cycles). As for virtual calls – it is one extra read (reading VMT pointer), so if everything is cached at this point (which it usually is), we’re speaking about additional 4 CPU cycles or so.

On the other hand, practical measurements from [\[eruskin\]](#rabbitref-eruskin) show that the cost of virtual functions is roughly double of the direct call costs for small functions; within our margin of error (which is “an order of magnitude”) this is quite consistent with the analysis above.

[Curiously recurring template pattern](https://en.wikipedia.org/wiki/Curiously_recurring_template_pattern) The curiously recurring template pattern (CRTP) is an idiom in C++ in which a class X derives from a class template instantiation using X itself as template argument— Wikipedia —_Optimisation hint:_ IF your virtual calls are expensive – in C++ you may want to think about using templates instead (implementing so-called compile-time polymorphism); CRTP is one (though not the only one) way of doing it.

### Allocations

These days, allocators as such can be quite fast; in particular, tcmalloc and ptmalloc2 allocators can take as little as 200-500 CPU cycles for allocation/deallocation of a small object [\[TCMalloc\]](#rabbitref-TCMalloc).

However, there is a significant caveat related to allocation – and adding to indirect costs of using allocations: allocation, as a Big Fat rule of thumb, reduces memory locality, which in turn adversely affects performance (due to uncached memory accesses described above). Just to illustrate how bad this can be in practice, we can take a look at a 20-line program in [\[NoBugs\]](#rabbitref-NoBugs); this program, when using _vector<>,_ happens to be from 100x to 780x faster (depending on compiler and specific box) than an equivalent program using _list<>_ – all because of poor memory locality of the latter :-(.

![Hare with an idea:](http://ithare.com/wp-content/uploads/BB_emotion_0023b.png)“In some real-world cases flattening your data structures can speed up your program as much as 5x._Optimisation hint:_ DO think about reducing number of allocations within your programs – especially if there is a stage when lots of work is done on a read-only data. In some real-world cases flattening your data structures (i.e. replacing allocated objects with packed ones) can speed up your program as much as 5x. A real-world story in this regard. Once upon a time, there was a program which used some gigabytes of RAM, which was deemed too much; ok, I rewrote it to a “flattened” version (i.e. each node was first constructed dynamically, and then an equivalent “flattened” read-only object was created in memory); the idea of “flattening” was to reduce memory footprint. When we ran the program, we observed that not only memory footprint was reduced by 2x (which was what we expected), but that also – as a very nice side effect – execution speed went up by 5x.

### Kernel Calls

If our program runs under an operating system,[1](#rabbitfootnote-1) then we have a whole bunch of system APIs. In practice,[2](#rabbitfootnote-2) quite a few of those system calls cause kernel calls, which involve switches to kernel mode and back; this includes switching between different “protection rings” (on Intel CPU – usually between “ring 3” and “ring 0”). While this CPU-level switching back and forth itself takes only ~100 CPU cycles, other related overheads tend to make kernel calls much more expensive, so usual kernel call takes at least 1000-1500 CPU cycles 🙁 [\[Wikipedia.ProtectionRing\]](#rabbitref-Wikipedia.ProtectionRing).

* * *

1 yes, there are still programs which run without it

2 at least if we’re speaking about more or less conventional OS

### C++ Exceptions

These days, C++ exceptions are said to be zero-cost until thrown. Whether it is really zero – is still not 100% clear (IMO it is even unclear whether such a question can be asked at all), but it is certainly very close.

![Hare with omg face:](http://ithare.com/wp-content/uploads/BB_emotion_0005b.png)“these 'zero-cost until thrown' exception implementations come at the cost of a _huge_ pile of work which needs to be done whenever an exception _is_ thrownHowever, these “zero-cost until thrown” implementations come at the cost of a _huge_ pile of work which needs to be done whenever an exception _is_ thrown. Everybody agrees that the cost of exception thrown is huge, however (as usual) experimental data is scarce. Still, an experiment by [\[Ongaro\]](#rabbitref-Ongaro) gives us a ballpark number of around 5000 CPU cycles (sic!). Moreover, in more complicated cases, I would expect it to take even more.

### Return Error and Check

An ages-old alternative to exceptions is returning error codes and checking them at each level. While I don’t have references for performance measurements of this kind of things, we already know enough to make a reasonable guesstimate. Let’s take a closer look at it (we don’t care much about performance in the case when error arises, so will concentrate on costs when everything is fine).

Basically, cost of return-and-check consists of three separate costs. The first one is the cost of conditional jump itself – and we can safely assume that 99+% of the time it will be predicted correctly; which means the cost of conditional jump in this case is around 1-2 cycles. The second cost is the cost of copying the error code around – and as long as it stays within the registers, it is a simple MOV – which is, given the circumstances, is 0 to 1 cycles (0 cycles means that MOV has no additional cost, as it is performed in parallel with some other stuff). The third cost is much less obvious – it is a cost of the extra register necessary to carry the error code; if we’re out of registers – we’ll need PUSH/POP pair (or a reasonable facsimile), which is in turn a write + L1 read, or 1+4 cycles. On the other hand, let’s keep in mind that  chances of PUSH/POP being necessary, vary from one platform to another one; for example, on x86 any realistic function would require them almost for sure; however, on x64 (which has double number of registers) – chances of PUSH/POP being necessary, go down significantly (and in quite a few cases, even if register is not completely free, making it available may be done by compiler cheaper than a dumb PUSH/POP).

Adding all three costs together, I’d guesstimate costs of return-error-code-and-check (in normal case) at anywhere between 1 and 7 CPU cycles. Which in turn means that if we have one exception per 10000 function calls – we’re likely to be better with exceptions; however, if we have one exception per 100 function calls – we’re likely to be better with error codes. In other words, we’ve just reconfirmed a very well-known best practice – “use exceptions only for abnormal situations” 🙂 .

### Thread Context Switches

Last but certainly not least, we need to speak about costs of thread context switches. One problem with estimating them is that, well, it is very difficult to figure them out. Common wisdom tells that they’re “damn expensive” (hey, there should be a reason why nginx outperforms Apache) – but how much this “damn expensive” is?

From my personal observations, the costs were _at least_ 10000 CPU cycles; however, there are lots of sources which are giving MUCH lower numbers. In fact, however, it is all about “what exactly we’re trying to measure”. As noted in [\[LiEtAl\]](#rabbitref-LiEtAl), there are two different costs with relation to context switches.

*   The first cost is direct costs of thread context switching – and these are measured at about 2000 CPU cycles[3](#rabbitfootnote-3)
*   However, the second cost is MUCH higher; it is related to cache invalidation by the thread; according to [\[LiEtAl\]](#rabbitref-LiEtAl), it can be as large as 3M CPU clocks. In theory, with completely random access pattern, modern CPU with 12M of L3 cache (and taking penalty of the order of 50 cycles per access) can take a penalty of up to 10M cycles per context switch; still, in practice the penalties are usually somewhat lower than that, so the number of 1M from [\[LiEtAl\]](#rabbitref-LiEtAl) makes sense. This “much higher” estimate is also consistent with the number of spinlocks on x64 (which defaults to 4000 at least for Windows/x64): if it is usually beneficial to wait for 4000 iterations (amounting _at the very least_ to 15-20K CPU cycles, and more like 40-50K cycles from what I’ve seen) reading that variable-which-is-currently-locked within a busy loop – just _in hope_ that the variable will unlock before 4000 iterations is over, all of this trouble and CPU cycles merely to avoid a context switch – it means that the cost of the context switch is usually _much higher_ than those tens-of-thousands-of-CPU-cycles-we’re-ready-to-spend-in-a-busy-loop-doing-nothing-useful.

* * *

3 that is, if my math is correct when converting from microseconds into cycles

## Wrapping it Up

![Tired hare:](http://ithare.com/wp-content/uploads/BB_emotionM_0001b.png)Phew, it was quite a bit of work to find references for all these more-or-less known observations.

Also please note that while I’ve honestly tried to collect all the related costs in one place (checking 3rd-party findings against my own experiences in the process), it is just a very first attempt at this, so if you find reasonably compelling evidence that certain item is wrong – please let me know, I will be happy to make the diagram more accurate.

Don't like this post? . You do?! Please share: [![...on LinkedIn](http://ithare.com/wp-content/uploads/socialnet_linkedin.png "Spill Some Sarcasm over LinkedIn")](http://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fithare.com%2Finfographics-operation-costs-in-cpu-clock-cycles%2F&title=Infographics%3A+Operation+Costs+in+CPU+Clock+Cycles&summary=Infographics%3A+operation+cost+in+cycles+%28from+%3C1+cycle+for+ADD%2FXOR%2F...+to+up+to+a+million+for+a+thread+context+switch%29)[![...on Reddit](http://ithare.com/wp-content/uploads/socialnet_reddit1.png "Stir Controversy on Reddit")](http://reddit.com/submit?url=http%3A%2F%2Fithare.com%2Finfographics-operation-costs-in-cpu-clock-cycles%2F&title=Infographics%3A+operation+costs+in+CPU+clock+cycles)[![...on Twitter](http://ithare.com/wp-content/uploads/socialnet_twitter1.png "Put your 140 characters worth on Twitter")](http://twitter.com/share?url=http%3A%2F%2Fithare.com%2Finfographics-operation-costs-in-cpu-clock-cycles%2F&text=%23Op+costs+in+%23CPU+%23cycles+%28from+%3C1+for+%23XOR+to+1M+for+%23Thread+%23ContextSwitch%29)[![...on Facebook](http://ithare.com/wp-content/uploads/socialnet_facebook.png "Share Ingenuity (or not) on Facebook")](http://www.facebook.com/sharer.php?u=http%3A%2F%2Fithare.com%2Finfographics-operation-costs-in-cpu-clock-cycles%2F) 

### \[+\]References

### Acknowledgement

Cartoons by Sergey Gordeev[![IRL](http://ithare.com/wp-content/uploads/irl-link.png)](http://ithare.com/real-people-behind-the-hare#sergey-gordeev) from [Gordeev Animation Graphics](http://gagltd.eu/), Prague.