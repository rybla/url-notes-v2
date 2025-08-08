---
title: "MCCC: Quasi-Monte Carlo"
byline: "Max Slater"
lang: "en-us"
---

# MCCC: Quasi-Monte Carlo

## Monte Carlo Crash Course

*   [Continuous Probability](https://thenumb.at/Probability)
*   [Exponentially Better Integration](https://thenumb.at/Monte-Carlo)
*   [Sampling](https://thenumb.at/Sampling)
*   [Case Study: Rendering](https://thenumb.at/Rendering)
*   **[Quasi-Monte Carlo](https://thenumb.at/QMC)**
*   _Coming Soon…_

* * *

We’ve learned how to define and apply Monte Carlo integration—fundamentally, it’s the only tool we need. In the remaining chapters, we’ll explore ways to reduce variance and successfully sample difficult distributions.

*   [Variance & Correlation](#variance--correlation)
*   [Stratified Sampling](#stratified-sampling)
*   [Adaptive Sampling](#adaptive-sampling)
*   [Latin Hypercube](#latin-hypercube)
*   [Quasi-Monte Carlo](#quasi-monte-carlo-1)
*   [Low-Discrepancy Sequences](#low-discrepancy-sequences)

## Variance & Correlation

In [chapter two](https://thenumb.at/Monte-Carlo/#escaping-the-curse), we determined that the variance of a Monte Carlo estimator is inversely proportional to its sample count. Empirically, we confirmed that our integrators’ expected error scaled with $$\\frac{1}{\\sqrt{N}}$$ in any dimension.

Although dramatically faster than _exponential_, if we want a very accurate result, $$\\frac{1}{\\sqrt{N}}$$ may still be too slow. In practice, we can only scale sample count quadratically so many times.

![](https://thenumb.at/QMC/error.svg)

We also assumed that our samples are independent, so their variance is additive. However, our proof that Monte Carlo integration is unbiased didn’t rely on independence—so what if we relaxed that assumption?

\\\[\\begin{align\*} \\mathrm{Var}\[X + Y\] = \\mathrm{Var}\[X\] + \\mathrm{Var}\[Y\] + 2\\mathrm{Cov}\[X,Y\] \\end{align\*}\\\]

If $$X$$ and $$Y$$ are _negatively_ correlated, $$\\mathrm{Cov}\[X,Y\] < 0$$, decreasing the variance of $$X+Y$$. If we can assure that our samples are negatively correlated, our Monte Carlo estimator might converge faster than $$\\frac{1}{\\sqrt{N}}$$.

### Poisson Disk Sampling

Perceptually, negatively correlated samples look “more random” than uncorrelated samples.

![](https://thenumb.at/QMC/uncorrelated.svg)

![](https://thenumb.at/QMC/ncorrelated.svg)

That’s because uncorrelated samples often appear in clusters and may leave significant chunks of the domain entirely unsampled. Negative correlation causes the opposite behavior: the more samples an area contains, the less likely it is to be sampled, and vice versa.

So, how can we generate negatively correlated samples? One approach is rejection sampling: simply discard samples that fall too close to any previous sample. This algorithm is known as _Poisson disk sampling_.[1](#fn:1)

Poisson disk sampling is useful for pre-generating samples with a minimum separation distance, but isn’t always applicable to Monte Carlo integration, where we need a progressive sampler that eventually covers the entire domain.

## Stratified Sampling

If we don’t need a minimum separation distance, a faster way to generate negatively correlated samples is _stratified sampling_. Stratification will let us combine the strengths of [quadrature](https://thenumb.at/Monte-Carlo/#bias-and-consistency) and Monte Carlo integration.

Instead of generating $$N$$ independent samples of the entire domain, a stratified sampler partitions the domain into $$M$$ equal-sized regions and takes $$\\frac{N}{M}$$ independent samples of each one. Since no more than $$\\frac{N}{M}$$ samples can occur in any particular region, the samples are negatively correlated.[2](#fn:2)

Let’s consider a Monte Carlo estimator that uses $$N$$ stratified samples of $$\\Omega$$. Grouping samples by region lets us rearrange the estimator into a collection of $$\\frac{N}{M}$$-sample estimators for each region $$\\Omega\_m$$:

\\\[\\begin{align\*} F\_\\text{Stratified} &= \\sum\_{n=0}^N \\frac{f(\\Omega\_n)}{p(\\Omega\_n)}\\\\ &= \\sum\_{m=0}^M \\sum\_{n=0}^\\frac{N}{M} \\frac{f(\\Omega\_{m,n})}{p(\\Omega\_{m,n})}\\\\ &= \\sum\_{m=0}^M F\_{\\Omega\_m} \\end{align\*}\\\]

Intuitively, stratification partitions our integral across the regions $$\\Omega\_m$$ and computes an independent $$\\frac{N}{M}$$-sample estimate of each term. Hence, linearity of expectation implies that our stratified estimator is unbiased.

\\\[\\begin{align\*} \\mathbb{E}\[F\_\\text{Stratified}\] &= \\mathbb{E}\[F\_{\\Omega\_0} + F\_{\\Omega\_1} + \\dots\]\\\\ &= \\mathbb{E}\[F\_{\\Omega\_0}\] + \\mathbb{E}\[F\_{\\Omega\_1}\] + \\dots\\\\ &= \\int\_{\\Omega\_0} f(\\omega)\\, d\\omega + \\int\_{\\Omega\_1} f(\\omega)\\, d\\omega + \\dots\\\\ &= \\int\_\\Omega f(\\omega)\\, d\\omega \\end{align\*}\\\]

But did stratification reduce variance? Let’s try dividing our familiar circular estimator into $$M=64$$ regions:

We’ll find that the stratified estimator has fairly low error, especially when $$N$$ is small.[3](#fn:3)

Precisely how much stratification decreases variance depends on the behavior of $$f$$, but we may prove that stratification at least never _increases_ variance.

### Why Stratify?

Let’s compare an $$N$$-sample uniform estimator on $$\\Omega$$ against a stratified estimator that uniformly samples partitions $$A$$ and $$B$$. Recalling [chapter two](https://thenumb.at/Monte-Carlo/#escaping-the-curse), we can compute these estimators’ variances:

\\\[\\begin{align\*} \\mathrm{Var}\[F\_\\text{Uniform}\] &= \\vphantom{\\Bigg|}\\frac{|\\Omega|^2}{N}\\mathrm{Var}\[f(\\Omega)\]\\\\ \\mathrm{Var}\[F\_\\text{Stratified}\] &= \\mathrm{Var}\[F\_A\] + \\mathrm{Var}\[F\_B\] \\tag{$F\_A,F\_B$ indep.}\\\\ &= \\frac{|\\Omega|^2}{2N}\\left(\\vphantom{\\big|}\\mathrm{Var}\[f(A)\]+\\mathrm{Var}\[f(B)\]\\right) \\end{align\*}\\\]

\\\[\\begin{align\*} \\mathrm{Var}\[F\_\\text{Uniform}\] &= \\vphantom{\\Bigg|}\\frac{|\\Omega|^2}{N}\\mathrm{Var}\[f(\\Omega)\]\\\\ \\mathrm{Var}\[F\_\\text{Stratified}\] &= \\mathrm{Var}\[F\_A\] + \\mathrm{Var}\[F\_B\] \\\\&\\tag{$F\_A,F\_B$ indep.}\\\\ &= \\frac{|\\Omega|^2}{2N}\\left(\\vphantom{\\big|}\\mathrm{Var}\[f(A)\]+\\mathrm{Var}\[f(B)\]\\right) \\end{align\*}\\\]

To relate these quantities, we may condition $$\\mathrm{Var}\[f(\\Omega)\]$$ on the sampled region. We will write $$\\mu\_\\mathcal{X}$$ to denote the expected value $$\\mathbb{E}\[f(\\mathcal{X})\]$$.

\\\[\\begin{align\*} \\mathrm{Var}\[f(\\Omega)\] &= \\mathrm{Var}\[f(\\Omega)\\ |\\ A\]\\cdot\\mathbb{P}\\{A\\} + \\mathrm{Var}\[f(\\Omega)\\ |\\ B\]\\cdot\\mathbb{P}\\{B\\}\\\\ &= \\frac{1}{2}\\left(\\mathbb{E}\[(f(\\Omega)-\\mu\_\\Omega)^2\\ |\\ A\] + \\mathbb{E}\[(f(\\Omega)-\\mu\_\\Omega)^2\\ |\\ B\]\\right)\\\\ &= \\frac{1}{2}\\left(\\mathbb{E}\[f(A)\]^2+\\mathbb{E}\[f(B)\]^2-2\\left(\\frac{\\mu\_A+\\mu\_B}{2}\\right)^2\\right)\\\\ &= \\frac{1}{2}\\left(\\mathbb{E}\[f(A)\]^2-\\mu\_A^2+\\mathbb{E}\[f(B)\]^2-\\mu\_B^2+\\frac{1}{2}\\left(\\mu\_A^2-2\\mu\_A\\mu\_B+\\mu\_B^2\\right)\\right)\\\\ &= \\frac{\\mathrm{Var}\[f(A)\]+\\mathrm{Var}\[f(B)\]}{2}+\\frac{(\\mu\_A-\\mu\_B)^2}{4}\\\\ &\\ge \\frac{\\mathrm{Var}\[f(A)\]+\\mathrm{Var}\[f(B)\]}{2}\\\\ \\end{align\*}\\\]

The squared term is never negative, so we know that $$\\mathrm{Var}\[f(A)\] + \\mathrm{Var}\[f(B)\]$$ is at most $$2\\cdot\\mathrm{Var}\[f(\\Omega)\]$$. Hence, $$F\_\\text{Stratified}$$ cannot have higher variance than $$F\_\\text{Uniform}$$, and has lower variance when $$\\mu\_A \\neq \\mu\_B$$.

![](https://thenumb.at/QMC/avg.svg)

This result makes some intuitive sense—if $$f$$ has a different average on $$A$$ and $$B$$, samples constrained to $$A$$ or $$B$$ must have locally lower variance than $$f$$ as a whole.

### Dynamic Stratification

So, should we be using stratified sampling everywhere? Often, yes—partitioning the domain can only reduce variance—but note that stratifying across a fixed $$64$$ regions did not reduce variance _asymptotically_.

Even when $$f$$ is [sufficiently nice](https://en.wikipedia.org/wiki/Bounded_variation), stratification only reduces error in inverse proportion to the regions’ volume. In a $$d$$-dimensional domain, we should expect our estimator to converge with the following expression:[4](#fn:4)

![](https://thenumb.at/QMC/curse.svg)

\\\[\\begin{align\*} \\sigma\_\\text{Stratified} &\\propto \\frac{1}{\\sqrt{N}\\sqrt\[d\]{M}} \\\\ &= N^{-\\frac{1}{2}}M^{-\\frac{1}{d}} \\end{align\*}\\\]

That is, $$M$$ is subject to the [curse of dimensionality](https://thenumb.at/Monte-Carlo/#the-curse-of-dimensionality). Plus, we can’t use more regions than our sample count, so $$M \\le N$$. Nonetheless, we can find an algorithmic improvement by dynamically scaling $$M \\propto \\sqrt{N}$$:[5](#fn:5)

\\\[\\begin{align\*} \\sigma\_\\text{Stratified} &\\propto N^{-\\frac{1}{2}}{\\sqrt{N}}^{-\\frac{1}{d}} \\\\ &= N^{-\\frac{d+1}{2d}} \\end{align\*}\\\]

In one dimension ($$d = 1$$), dynamic stratification produces $$\\sigma \\propto N^{-1}$$. Back in [chapter two](https://thenumb.at/Monte-Carlo/#quadrature), we used quadrature to integrate $$\\sqrt{x}$$ with error proportional to $$N^{-1}$$. Using dynamic stratification, we get an _unbiased_ estimator with the same convergence rate!

In two dimensions, dynamic stratification results in $$\\sigma \\propto N^{-\\frac{3}{4}}$$, which converges faster than naive Monte Carlo, but in higher dimensions, we rapidly approach our existing result of $$\\sigma \\propto N^{-\\frac{1}{2}}$$. Hence, dynamic stratification is usually only worthwhile in a small number of dimensions.

## Adaptive Sampling

Another extension of stratified sampling is _adaptive sampling_. Instead of assigning the same number of samples to each region, adaptive sampling uses more samples in regions with higher variance.

Above, we determined that the variance of a stratified estimator is a weighted sum, where $$N\_A+N\_B=N$$:

\\\[\\begin{align\*} \\mathrm{Var}\[F\_\\text{Stratified}\] &= \\mathrm{Var}\[F\_A\] + \\mathrm{Var}\[F\_B\]\\\\ &\\propto \\frac{\\sigma\_A^2}{N\_A} + \\frac{\\sigma\_B^2}{N\_B} \\end{align\*}\\\]

We also assumed $$N\_A = N\_B$$, but that wasn’t required to show that our stratified estimator was unbiased. So, if $$\\sigma\_A^2>\\sigma\_B^2$$, using $$N\_A>N\_B$$ would decrease the total. To find the optimal sample distribution, we may minimize this sum using a [Lagrange multiplier](https://en.wikipedia.org/wiki/Lagrange_multiplier):

\\\[\\begin{align\*} &&& \\min\_{N\_A+N\_B=N} \\left\\{\\frac{\\sigma\_A^2}{N\_A} + \\frac{\\sigma\_B^2}{N\_B}\\right\\}\\\\ &\\implies&& \\begin{cases} \\frac{\\partial}{\\partial N\_A}\\left(\\frac{\\sigma\_A^2}{N\_A} + \\frac{\\sigma\_B^2}{N\_B} - \\lambda(N\_A+N\_B-N)\\right) = 0 \\\\ \\frac{\\partial}{\\partial N\_B}\\left(\\frac{\\sigma\_A^2}{N\_A} + \\frac{\\sigma\_B^2}{N\_B} - \\lambda(N\_A+N\_B-N)\\right) = 0 \\end{cases}\\\\ &\\implies&& N\_A = N\\cdot\\frac{\\sigma\_A}{\\sigma\_A+\\sigma\_B} \\\\ &&& N\_B = N\\cdot\\frac{\\sigma\_B}{\\sigma\_A+\\sigma\_B} \\tag{Algebra} \\end{align\*}\\\]

As you might expect, we should partition samples between $$F\_A$$ and $$F\_B$$ in proportion to their standard deviation. Let’s attempt to implement this improvement in our circular estimator. Intuitively, we should be able to ignore regions where $$f$$ is constant (i.e. $$F$$ has zero deviation):

![](https://thenumb.at/QMC/adapt.svg)

However, we can’t assume to know the standard deviation of each region beforehand, so we must estimate it during integration. To guide adaptive sampling, each region $$\\Omega\_m$$ will track its sample count $$N\_m$$, as well as estimates of $$\\mathbb{E}\[f(\\Omega\_m)\]$$ and $$\\mathbb{E}\[f(\\Omega\_m)^2\]$$.[6](#fn:6)

\\\[\\begin{align\*} \\sigma\_{\\Omega\_m} &= \\sqrt{\\mathrm{Var}\[F\_{\\Omega\_m}\]} \\\\ &= \\sqrt{\\frac{\\mathbb{E}\[f(\\Omega\_m)^2\] - \\mathbb{E}\[f(\\Omega\_m)\]^2}{N\_m}} \\end{align\*}\\\]

Unfortunately, this estimate can be very imprecise, so using it for adaptive sampling isn’t always easy. One approach is to randomly select the next region to sample weighted by estimated deviation (drawn in red):

This strategy works, but even when a region has zero estimated deviation, we must choose it with non-zero probability, since the true value may not be zero. We can see this situation play out when our estimator discovers that a mostly-covered region actually has non-zero variance.

The core ideas of adaptive sampling and dynamic stratification—assigning samples where they’re needed and progressively refining the sampling pattern—can be combined to form the [multi-level Monte Carlo](https://en.wikipedia.org/wiki/Multilevel_Monte_Carlo_method) method, which we won’t explore in this chapter.

## Latin Hypercube

Any way we slice it, stratified sampling will eventually run up against the curse of dimensionality. In practice, we may need computationally cheaper methods of generating negatively correlated samples. One such method is known as _Latin hypercube_ sampling.[7](#fn:7)

Instead of attempting to distribute samples across an exponential number of regions, a Latin hypercube sampler stratifies each dimension _independently_. For example, in two dimensions, we start by generating two lists of one-dimensional samples stratified across $$D$$ regions:

![](https://thenumb.at/QMC/indep.svg)

We then shuffle $$\\mathbf{x}$$ and $$\\mathbf{y}$$, randomizing their order. Finally, to produce samples of $$\\Omega$$, we simply take each pair $$(\\mathbf{x}\_i,\\mathbf{y}\_i)$$ from the shuffled lists.[8](#fn:8) This procedure is typically performed in batches of $$D$$ samples.[9](#fn:9)

Since we’re implicitly partitioning $$\\Omega$$ into $$D^d$$ regions, we can think of a Latin hypercube sampler as a sparse approximation of a stratified sampler over this much larger space. However, perfect stratification would require placing at most $$\\frac{N}{D^d}$$ samples in each region, which our sampler does not achieve.

Given any particular region, we know exactly $$\\frac{N}{D}$$ samples have a matching position along each dimension, so up to $$\\frac{N}{D}$$ samples could occur in this region. This bound is exponentially weaker than full stratification, but still leads to negative correlation.

Note that regardless of correlation, Latin hypercube samples are uniform, and by similar logic as stratified sampling, may be used for Monte Carlo integration.

In our circular estimator, we’ll find that Latin hypercube samples tend to reduce error at small $$N$$, but they’re clearly less effective than stratified samples. Latin hypercube samples become more useful when full stratification is infeasible, e.g. in four or more dimensions.

The Latin hypercube approach can also be combined with stratified sampling to create multi-level samplers, such as [correlated multi-jittered sampling](https://graphics.pixar.com/library/MultiJitteredSampling/paper.pdf).

## Quasi-Monte Carlo

All of the sampling algorithms we’ve examined so far are fundamentally random, but with additional restrictions that introduce negative correlation. Alternatively, if we’re willing to introduce [bias](https://thenumb.at/Monte-Carlo/#bias-and-consistency), we can do away with randomness entirely!

In [chapter three](https://thenumb.at/Sampling/#pseudo-random-numbers), we discussed pseudo-random number generators (PRNGs), which deterministically compute a sequence of samples that “look uniformly random.” Our only source of non-determinism was the seed: given the same initial state, a PRNG always produces the same sequence. Hence, for a **fixed seed**, a PRNG is just a particular sequence of numbers $$x\_i$$—but we can still use it for Monte Carlo integration.

\\\[ F\_\\text{QMC} = \\frac{1}{N} \\sum\_{i=1}^N f(x\_i) \\\]

The result is known as a _Quasi-Monte Carlo_ estimator.[10](#fn:10) QMC estimators are [biased](https://thenumb.at/Monte-Carlo/#bias-and-consistency): they always return the same value, so averaging multiple runs does not increase accuracy. Fortunately, they are also [consistent](https://thenumb.at/Monte-Carlo/#bias-and-consistency): increasing the sample count $$N$$ causes the estimator to converge to the exact result.[11](#fn:11)

![](https://thenumb.at/QMC/consistent.svg)

### Discrepancy

Empirically, we’ve already confirmed that QMC estimators are consistent—most of the interactive figures use a PRNG with a fixed seed. But what is it about pseudo-random sequences that make QMC work? Lacking the tools of probability, how can we relate the accuracy of an estimator to the quantity and quality of its samples?

This is the purpose of the _Koksma–Hlawka inequality_, which we will present without proof:

\\\[ \\Bigg|\\, \\frac{1}{N}\\sum\_{i=1}^N f(x\_i) - \\int\_\\Omega f(\\omega)\\, d\\omega\\, \\Bigg| \\le V(f) D^\*\_N(x\_1,\\dots,x\_N) \\\]

Here, $$x\_i$$ is our sample sequence, $$f$$ has [bounded variation](https://en.wikipedia.org/wiki/Bounded_variation) $$V(f)$$, and $$D^\*\_N$$ is the “star-discrepancy” of $$x$$. Bounded variation is morally the same constraint that our Monte Carlo estimator for $$f$$ had finite variance.

Importantly, our estimator’s error is (at worst) proportional to this property $$D^\*\_N$$, which only depends on $$x$$.

\\\[ \\bigg|\\, F\_\\text{QMC} - \\int\_\\Omega f(\\omega)\\, d\\omega\\, \\bigg| \\propto D^\*\_N(x\_1,\\dots,x\_N) \\\]

Intuitively, we can think of star-discrepancy as a deterministic equivalent of negative correlation. Taking $$\\Omega$$ to be the unit square, $$D^\*\_N$$ is defined as the worst-case difference between the ratio of samples falling inside a rectangle $$\\mathcal{R}$$ and the volume of $$\\mathcal{R}$$. $$\\mathcal{R}$$ must also include the origin as its bottom-left corner.[12](#fn:12)

\\\[ D^\*\_N(x\_1,\\dots,x\_N) = \\sup\_{\\mathcal{R}\\in\\Omega} \\Bigg|\\, \\frac{\\text{Samples}(\\mathcal{R})}{N} - ||\\mathcal{R}|| \\,\\Bigg| \\\]

We can see that discrepancy penalizes regions that have more (or fewer) samples than they should:

![](https://thenumb.at/QMC/discrepancy.svg)

Uniformly random point sets—as well as those produced by PRNGs—have the property that $$D^\*\_N$$ tends to zero with increasing sample count. Hence, using such sequences in a QMC estimator will cause it to converge for all $$f$$ with bounded variation.

## Low-Discrepancy Sequences

To justify using a biased estimator, it should exhibit a faster convergence rate than unbiased alternatives. But simply fixing a PRNG seed surely doesn’t accelerate convergence, right? Indeed, in $$d$$ dimensions, the star-discrepancy of a uniformly random point set only converges with the following expression:

\\\[ D^\*\_N(\\text{Uniform}) \\propto \\sqrt{\\frac{\\log^dN}{N}} \\\]

The Koksma–Hlawka inequality therefore doesn’t tell us anything—we already knew uniform Monte Carlo converges with $$\\frac{1}{\\sqrt{N}}$$. However, there’s no reason we have to use uniformly random points. Instead, we can make use of certain _low-discrepancy sequences_, which provide near-linear convergence.

\\\[ D^\*\_N(\\text{Low-Discrepancy}) \\propto \\frac{\\log^dN}{N} \\\]

While this convergence rate is always asymptotically faster than $$\\frac{1}{\\sqrt{N}}$$, in high dimensions, the associated constant factor (which depends on $$d$$) can still make the approach impractical.

### The Halton Sequence

There are many low-discrepancy sequences, each making use of different mathematical tools. One popular choice is the [Halton sequence](https://en.wikipedia.org/wiki/Halton_sequence). To compute a one-dimensional Halton sequence $$g\_b(n)$$, first choose a base $$b$$ and find the base-$$b$$ digits of $$n$$:

\\\[ n = \\sum\_k \\text{Digit}\_k(n)b^k \\\]

Then mirror the digits about the decimal place. In base ten, we would have $$g\_{10}(1234) = 0.4321$$.

\\\[ g\_b(n) = \\sum\_k \\text{Digit}\_k(n)b^{-k-1} \\\]

This operation is also known as the _radical inverse_ $$\\Psi\_b(n)$$. To create a $$d$$-dimensional Halton sequence, simply join several one-dimensional sequences with co-prime bases $$b\_1\\dots b\_d$$.

\\\[ g(n) = (g\_{b\_1}(n),\\dots,g\_{b\_d}(n)) \\\]

Halton sequences exhibit star-discrepancy proportional to $$\\frac{\\log^d N}{N}$$, but proving this result is beyond the scope of this chapter. Instead, let’s examine the two-dimensional $$(2,3)$$ Halton sequence:

Naturally, we can use Halton samples in our circular estimator:

We’ll find that convergence is effectively linear, significantly outpacing our earlier estimators.[13](#fn:13)

Does this result imply we should abandon randomness and use low-discrepancy sequences for everything? In few dimensions, QMC can be ideal—but working with high-dimensional low-discrepancy sequences turns out to be difficult.

### Scrambling

By definition, a $$d$$-dimensional Halton sequence uses $$d$$ different co-prime bases. To illustrate the difficulties encountered in higher dimensions, let’s consider only the points generated by bases 29 and 31.

\\\[ g(n) = (\\dots,g\_{29}(n),g\_{31}(n),\\dots) \\\]

Note $$g\_{29}(n),g\_{31}(n)$$ is also the projection of $$g(n)$$ onto the corresponding axes. Although this sequence is still “low-discrepancy,” its absolute discrepancy starts out quite high:

Using sequences like $$(29,31)$$ in QMC estimators can be fraught, since reducing bias to an acceptable level requires many samples. This problem gets worse as we increase dimensionality.

Fortunately, there’s another technique (known as _scrambling_) that makes higher-dimensional bases significantly more usable. Scrambling introduces an extra step to the radical inverse:

\\\[ g\_b(n) = \\sum\_k \\rho(\\text{Digit}\_k(n))b^{-k-1} \\\]

Where $$\\rho$$ is a permutation of the digits $$0\\dots b$$, typically chosen randomly. Scrambling dramatically reduces discrepancy at low sample counts, making the resulting bias less objectionable.

The Halton sequence succinctly exemplifies the benefits and pitfalls of QMC, but it’s certainly not the only useful low-discrepancy sequence. In particular, [Sobol’ sequences](https://pbr-book.org/3ed-2018/Sampling_and_Reconstruction/\(0,_2\)-Sequence_Sampler) are widely used in practice, as they can achieve a kind of optimal discrepancy while admitting an efficient implementation.

* * *

## Footnotes

* * *

1.  Note checking for sample intersection can be done in constant time using a background grid. In fact, generating $$N$$ samples can be done in (more or less) [linear work](https://www.cs.ubc.ca/~rbridson/docs/bridson-siggraph07-poissondisk.pdf). [↩︎](#fnref:1)
    
2.  Technically, sample $$i$$ is positively correlated with sample $$i+M$$, but it’s negatively correlated with all of the samples in between, so the overall effect is negative. [↩︎](#fnref:2)
    
3.  But not when $$N$$ is _too_ small: using fewer than $$M$$ samples would result in a biased estimate. [↩︎](#fnref:3)
    
4.  Precisely explaining this point is beyond the scope of this chapter, but intuitively, if $$f$$ has bounded variation (and is not a constant), there’s some resolution at which $$f$$ must have a different average in different regions, and this resolution may be required along every dimension. [↩︎](#fnref:4)
    
5.  To see why $$\\sqrt{N}$$ is a good choice, compute the convergence rate for $$M = \\log N$$ and $$M = N$$. [↩︎](#fnref:5)
    
6.  Also known as the first and second moments of $$f(\\Omega\_m)$$. Interestingly, in stochastic optimization problems (such as [inverse rendering](https://rgl.epfl.ch/publications)), the [Adam](https://arxiv.org/pdf/1412.6980) optimizer naturally estimates these moments, which can be used for adaptive sampling. [↩︎](#fnref:6)
    
7.  In two dimensions, the Latin hypercube pattern is also known as _N-rooks_: if each batch of samples were rooks on a chessboard, they wouldn’t threaten each other. [↩︎](#fnref:7)
    
8.  Joining one sample from each dimension can also be interpreted as picking a vertex of a dimension-$$d$$ length-$$N$$ lattice, leading to the “hypercube” name. The “Latin” part comes from [Latin squares](https://en.wikipedia.org/wiki/Latin_square). [↩︎](#fnref:8)
    
9.  Allowing batch sizes linear in $$D$$ is another benefit of Latin hypercube sampling: for full stratification to be unbiased, we must use at least $$D^d$$ samples, which may be infeasible in of itself. [↩︎](#fnref:9)
    
10.  Technically, QMC also implies the use of a low-discrepancy sequence, since (outside of pedagogy) it’s not particularly useful to consider PRNG-based estimators part of the QMC framework. [↩︎](#fnref:10)
    
11.  This distinction may sound academic, but it also has computational implications. To increase accuracy, we must use additional samples _from the same sequence_, so we can’t easily parallelize sample generation. [↩︎](#fnref:11)
    
12.  In other words, $$D^\*\_N$$ measures how well $$x\_i$$ integrates all possible rectangular indicator functions. [↩︎](#fnref:12)
    
13.  These error plots should be log-log; they’re difficult to interpret otherwise. Maybe they will be someday. [↩︎](#fnref:13)
    

Written on August 2, 2025