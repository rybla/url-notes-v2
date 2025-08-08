*   **Standard Monte Carlo Integration:** Error converges at a rate of $$O(1/\sqrt{N})$$. Introducing negative correlation between samples can reduce variance and accelerate convergence.
*   **Stratified Sampling:**
    *   Partitions the domain into sub-regions and draws a fixed number of samples from each, ensuring a more even distribution.
    *   Guaranteed to not increase variance compared to unstratified sampling.
    *   In $$d$$ dimensions with $$M$$ regions, error scales as $$O(N^{-1/2}M^{-1/d})$$, making it susceptible to the curse of dimensionality.
*   **Adaptive Sampling:**
    *   A variant of stratified sampling that allocates more samples to regions with higher variance.
    *   Optimal sample distribution is proportional to the standard deviation in each region.
    *   Requires estimating variance on-the-fly, which can be imprecise.
*   **Latin Hypercube Sampling:**
    *   Stratifies each dimension independently, then randomly pairs the 1D samples to form $$d$$-dimensional points.
    *   A computationally cheaper method for generating negatively correlated samples, particularly in higher dimensions where full stratification is impractical.
*   **Quasi-Monte Carlo (QMC):**
    *   Employs deterministic, low-discrepancy sequences instead of pseudo-random numbers.
    *   The resulting estimator is biased (for a fixed sequence) but consistent (converges as sample count increases).
    *   Error is bounded by the sequence's *star-discrepancy* ($$D^*_N$$), a deterministic measure of uniformity.
*   **Low-Discrepancy Sequences:**
    *   Sequences specifically constructed to minimize discrepancy.
    *   Enable a faster convergence rate, approaching $$O((\log^d N)/N)$$.
    *   **Halton Sequence:** A common example constructed using the *radical inverse* operation in co-prime bases for each dimension.
    *   **Scrambling:** A technique to permute the digits of a low-discrepancy sequence, which improves its properties and reduces error, especially in higher dimensions.
