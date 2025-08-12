*   **Model:** Claude Sonnet 4
*   **Feature:** Context window increased 5x to 1 million tokens, now in public beta.
*   **Capacity:** Can process ~75,000 lines of code or extensive document sets in a single request.
*   **Use Cases:** Large-scale code analysis, multi-document synthesis, and stateful agentic workflows.
*   **Availability:** Accessible via Anthropic API (Tier 4+ customers), Amazon Bedrock, with Google Cloud Vertex AI integration planned.
*   **Pricing:** A tiered model is used. Prompts over 200K tokens are priced higher ($6/MTok input, $22.50/MTok output) than those below the threshold ($3/MTok input, $15/MTok output).
*   **Optimizations:** Costs and latency can be reduced via prompt caching and batch processing (which offers a 50% cost reduction).
