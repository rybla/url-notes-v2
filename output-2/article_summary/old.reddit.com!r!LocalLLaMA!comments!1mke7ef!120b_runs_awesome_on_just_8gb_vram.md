*   **Model:** A 120B parameter Mixture-of-Experts (MoE) model.
*   **Core Technique:** Utilizes `llama.cpp`'s `--cpu-moe` flag to run expert layers on the CPU while offloading only the attention-related components (KV cache, attention weights, routing tables, LayerNorms) to the GPU.
*   **Hardware Requirement:** This method enables the model to run with low VRAM, requiring only 5-8GB.
*   **System Memory:** Requires a minimum of 64GB of system RAM (96GB recommended).
*   **Performance:** Achieves fast inference speeds (e.g., ~18-25 tokens/second) on consumer hardware like an RTX 3060Ti.
*   **Precision:** Non-expert layers run in BF16, while the CPU-based MoE layers use mxfp4.
