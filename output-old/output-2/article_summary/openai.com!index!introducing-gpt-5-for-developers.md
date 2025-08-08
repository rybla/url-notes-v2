*   **Model Release**: GPT-5 is now available via API, positioned as a state-of-the-art model for coding and agentic tasks.
    *   **Tiers**: Released in three sizes: `gpt-5`, `gpt-5-mini`, and `gpt-5-nano`.
    *   **Context Window**: Supports up to 272,000 input tokens and 128,000 output tokens (400k total).

*   **Core Capabilities**:
    *   **Coding**: Achieves SOTA on benchmarks like SWE-bench Verified (74.9%) and Aider polyglot (88.0%). Excels at bug fixing, code editing, and frontend development.
    *   **Agentic Tasks**: SOTA on tool-calling benchmarks (96.7% on τ2-bench telecom). Can reliably chain dozens of tool calls in sequence or parallel.
    *   **Long-Context**: Strong performance on long-context retrieval (OpenAI-MRCR) and Q&A (new BrowseComp Long Context benchmark).
    *   **Trustworthiness**: ~80% fewer factual errors than `o3` on LongFact and FactScore benchmarks.

*   **New API Features**:
    *   **`reasoning_effort`**: A new `minimal` value has been added to the existing `low`, `medium`, and `high` options to optimize for speed over reasoning quality.
    *   **`verbosity`**: A new parameter (`low`, `medium`, `high`) to control the default length of model responses.
    *   **Custom Tools**: A new tool type allowing plaintext tool calls instead of JSON. Supports constraining output with regex or context-free grammars (CFGs).
