*   **Core Idea**: Provides ballpark costs for common CPU operations on modern x86/x64 architectures, measured in clock cycles, to help avoid "premature pessimization." The scale is logarithmic.

*   **ALU/FPU Operations**:
    *   **Simple Integer (ADD, MOV, OR)**: < 1 cycle (due to out-of-order execution).
    *   **Integer Multiplication**: ~1-7 cycles.
    *   **Integer Division**: ~12-44 cycles.
    *   **Floating-Point Add/Mul (Scalar)**: ~1-5 cycles.
    *   **Floating-Point Division (Scalar)**: ~10-40 cycles.
    *   **Vector (SIMD 128-bit)**: Varies widely, from < 1 cycle for simple integer adds to ~70 cycles for floating-point division.

*   **Branching**:
    *   **Predicted Branch**: ~1-2 cycles.
    *   **Mispredicted Branch**: 10-20 cycle penalty due to pipeline stall.

*   **Memory Access**:
    *   **L1 Cache Read**: ~4 cycles.
    *   **L2 Cache Read**: ~12 cycles.
    *   **L3 Cache Read**: ~44-75 cycles.
    *   **Main Memory Read**: ~60ns (~180 cycles on a 3GHz CPU).
    *   **TLB Miss**: ~7-21 cycle penalty.
    *   **NUMA Remote RAM Access**: ~100ns (~300 cycles).

*   **Atomic Operations**:
    *   **CAS (Compare-And-Swap) on L1 cached data**: ~15-30 cycles.
    *   **CAS on remote NUMA node**: Estimated ~100-300 cycles.

*   **Software Primitives**:
    *   **Function Call**: ~15-30 cycles. Virtual calls are roughly double the cost of direct calls.
    *   **Memory Allocation (e.g., tcmalloc)**: ~200-500 cycles direct cost, but high indirect costs from reduced data locality.
    *   **Kernel Call (syscall)**: ~1000-1500+ cycles due to protection ring switching and overhead.
    *   **C++ Exception (when thrown)**: ~5000+ cycles.
    *   **Thread Context Switch**:
        *   **Direct Cost**: ~2000 cycles.
        *   **Indirect Cost (Cache Invalidation)**: Can reach 1,000,000+ cycles.
