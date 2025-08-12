*   **Product:** An open-hardware, FPGA-based e-paper monitor and development kit designed for low latency and high refresh rates.
*   **Core Controller:** Utilizes "Caster," an open-source FPGA (Xilinx Spartan-6 LX16) gateware for driving electrophoretic displays.
*   **Performance:**
    *   Achieves up to a 75 Hz refresh rate.
    *   Features latency-optimized driving modes with a processing delay of less than 20 µs.
*   **Connectivity:** Supports video input via USB Type-C (DisplayPort Alt-Mode) and DVI (through a microHDMI connector).
*   **Hardware Features:**
    *   On-board STM32H750 microcontroller for USB communication and standalone applications.
    *   DDR3-800 framebuffer memory.
    *   Hardware-accelerated dithering (Bayer, blue-noise, error-diffusion) with no additional latency.
*   **Customization & Software:**
    *   Provides a C API for direct control over display modes and regional updates.
    *   Supports user-defined driving modes, including a hybrid mode that combines fast binary updates with detailed grayscale rendering.
*   **Compatibility:**
    *   Works with a variety of e-paper panels (6" to 13.3", monochrome and color).
    *   Cross-platform support for Linux, macOS, and Windows.
*   **Objective:** To address the limitations of proprietary, closed-system e-paper devices by offering a flexible, high-performance, and open platform for developers and enthusiasts.
