*   **Objective**: Accelerate substring search in Zig using SIMD, comparing against the standard library's `std.mem.indexOf`.
*   **Core SIMD Algorithm**:
    *   Loads 32-byte (256-bit) chunks of the haystack into an AVX2 vector register.
    *   Creates two bitmasks by comparing all bytes in the chunk against the needle's first character and, separately, against the needle's last character (using an appropriate offset).
    *   A bitwise `AND` on these masks identifies potential match positions, significantly reducing the number of full string comparisons needed.
    *   A final `mem.eql` verifies actual matches at the positions indicated by the final mask.
*   **Initial Benchmark Results**:
    *   The SIMD implementation was ~59% faster than the baseline `std.mem.indexOf` on a large text file.
    *   This came with a ~83% reduction in CPU cycles but a ~5900% increase in branch misses due to frequent false positives.
*   **Optimization**:
    *   To reduce branch misses, the algorithm was modified to use the two *rarest* characters within the needle for the initial SIMD comparison, rather than just the first and last. This is a technique used in Rust's `memchr` library.
*   **Final Benchmark Results**:
    *   The optimized version was an additional ~9% faster than the first SIMD implementation.
    *   Branch misses were reduced by ~63% compared to the initial SIMD version.
    *   The SIMD version remains faster even on very small haystacks (<100 characters).
*   **Limitations**: The author concludes that this implementation is not suitable for the standard library because it is specific to `u8` elements and is not cross-platform (the standard library's Boyer–Moore–Horspool implementation is generic and portable).
