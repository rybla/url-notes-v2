*   **Problem**: The standard FreeBSD ULE scheduler is not optimized for modern hybrid CPUs (e.g., Intel P-cores and E-cores, ARM big.LITTLE), which have cores with different performance and power characteristics.
*   **Objective**: Enhance the ULE scheduler to be "hybrid-aware," allowing administrators to implement policies that balance performance, energy efficiency, and latency. The initial focus is on Intel's amd64 architecture.
*   **Policy Design**:
    *   Policies will be attached to `cpuset` structures but managed independently of cpuset masks to avoid propagation issues and allow for more flexible core selection logic than simple allow/deny masks.
    *   A proposed "efficiency control value" (e.g., a 0-100 scale) would allow users to tune the trade-off between maximum performance (prioritizing P-cores) and maximum efficiency (prioritizing E-cores).
*   **Scheduler Impact & Challenges**:
    *   **Fairness**: A fixed time quantum results in unequal work completion on different core types. The scheduler must compensate, possibly by calculating a "virtual" runtime weighted by core performance, a significant change from the current ULE model.
    *   **Thread Migration**: The existing long-term balancer is too slow for hybrid systems, potentially causing unacceptable performance fluctuations for interactive applications. More frequent migration between core types is needed, but risks introducing overhead.
*   **Intel Architecture Details**:
    *   **Detection**: P-cores and E-cores can be identified via CPUID leaf `0x1a`. Detecting Meteor Lake's ultra-low-power LP-E cores is more complex and lacks a standard method.
    *   **Intel Thread Director**: A hardware feature that provides real-time feedback on thread instruction mix. The scheduler can use this data to make more intelligent placement decisions (e.g., moving compute-intensive threads to P-cores), but this must be balanced against fairness requirements.
