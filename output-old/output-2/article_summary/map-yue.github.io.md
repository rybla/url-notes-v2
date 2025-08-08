*   **Model:** YuE (乐) is a family of open foundation models for music generation, built on the LLaMA2 architecture.
*   **Primary Task:** Solves the lyrics-to-song problem for long-form music (up to 5 minutes), focusing on lyrical alignment, musical coherence, and vocal quality.
*   **Core Techniques:**
    *   **Track-decoupled next-token prediction:** Overcomes dense audio mixture signals.
    *   **Structural progressive conditioning:** Ensures long-context lyrical alignment.
    *   **Multitask, multiphase pre-training:** Improves convergence and generalization.
    *   **Redesigned in-context learning:** Enables style transfer and bidirectional generation.
*   **Performance:**
    *   Matches or surpasses proprietary systems in musicality and vocal performance.
    *   Learned representations achieve state-of-the-art results on the MARBLE music understanding benchmark.
*   **Capabilities:**
    *   Generates music across diverse genres (e.g., Metal, Jazz, Pop, Rock) and languages (English, Mandarin, Cantonese, Japanese, Korean), including code-switching.
    *   Models advanced and spontaneous vocal techniques like scatting, death growls, mixed voice, and Beijing Opera styles.
    *   Supports fine-tuning for additional control, voice cloning, and style transfer.
