*   **Model Family & Structure:**
    *   **ChatGPT:** A hybrid system that routes prompts to a smart/fast model, a deeper reasoning model, or a mini version based on complexity and intent.
    *   **API:** Offered as three distinct models: `gpt-5` (regular), `gpt-5-mini`, and `gpt-5-nano`.
    *   Each API model can be run at four reasoning levels: minimal, low, medium, or high.

*   **Technical Specifications:**
    *   **Context Window:** 272,000 input tokens.
    *   **Output Limit:** 128,000 tokens (includes invisible reasoning tokens).
    *   **Modalities:** Supports text and image input; text-only output.
    *   **Knowledge Cutoff:** GPT-5: September 30th, 2024; Mini/Nano: May 30th, 2024.

*   **API Pricing (per million tokens):**
    *   **GPT-5:** $1.25 input / $10.00 output.
    *   **GPT-5 Mini:** $0.25 input / $2.00 output.
    *   **GPT-5 Nano:** $0.05 input / $0.40 output.
    *   A 90% discount is available for cached input tokens.

*   **Key Improvements & Features:**
    *   **Performance:** Significant reductions in hallucinations, sycophancy, and improved instruction following, with a focus on writing, coding, and health tasks.
    *   **Safety:** Implements "safe-completions," an output-centric safety approach that moderates responses to be helpful within safety constraints, rather than issuing binary refusals.
    *   **Deception:** Trained to honestly admit when a task is infeasible rather than hallucinating a completed action.
    *   **Prompt Injection:** Attack success rate reduced to 56.8% (k=10), an improvement over prior models, but prompt injection remains an unsolved problem.

*   **API Functionality:**
    *   The API provides access to model "thinking traces" via the `reasoning: {"summary": "auto"}` parameter.
    *   A `reasoning_effort=minimal` option is available to reduce latency by minimizing internal reasoning steps.
