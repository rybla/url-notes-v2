*   **Issue:** A `gpt-oss 20b` GGUF model fails to run in Ollama, while the original model works.
*   **Error:** `gguf_init_from_file_impl: tensor 'blk.0.ffn_down_exps.weight' has invalid ggml type 39 (NONE)`.
*   **Hypothesis:** The issue may be due to outdated `ggml` dependencies within Ollama.
*   **Context:** The user notes the model runs successfully in `llama.cpp` and references a `llama.cpp` pull request that might contain the necessary updates.
