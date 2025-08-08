*   **Problem:** Efficiently query the most recent BlueSky posts within arbitrary 2D spatial boundaries (a "spatio-temporal" query) for a real-time map visualization.
*   **Challenge:** Standard data structures like R-trees don't support sorting by a dimension (e.g., time), and specialized databases like TimescaleDB were considered too complex or costly for this use case.
*   **Solution:** A custom, in-memory data structure called a "quadtree of ring buffers," which leverages the specific constraint that only the top-`k` most recent posts are needed for any given query.
*   **Implementation:**
    *   The core data structure is a quadtree built over user coordinates. Each node in the tree contains a ring buffer of a fixed size (`k`) to store the most recent posts that fall within its spatial bounds.
    *   Inserting a post involves traversing to the appropriate leaf and adding the post to the ring buffer of each node along the path.
    *   Querying involves traversing the tree, collecting posts from all nodes that intersect the query rectangle, and using a min-heap to find the `k` most recent results (identified by monotonic post IDs).
    *   The high-performance core is written in Zig and exposed to a NodeJS service as a native NAPI module, resulting in zero-allocation `observe` and `query` methods.
*   **Result:** The system handles ~100 posts/second and caches ~10 million posts in under 1GB of RAM, with internal query times of 1-3ms.
