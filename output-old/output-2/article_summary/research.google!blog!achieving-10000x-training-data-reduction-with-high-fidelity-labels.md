*   **Problem:** Fine-tuning Large Language Models (LLMs) for complex, evolving tasks like ad safety classification is bottlenecked by the need for massive, high-quality, and expensive-to-curate training datasets.
*   **Objective:** Reduce the required training data volume by orders of magnitude while maintaining or improving model performance, measured by alignment with human experts.
*   **Method:** An iterative active learning process:
    *   An initial LLM (zero/few-shot) labels a vast, imbalanced dataset.
    *   Embeddings of the labeled data are clustered by class (e.g., "benign" vs. "unsafe").
    *   The system identifies pairs of examples with different labels that are close to each other in overlapping cluster regions, representing areas of model confusion at the decision boundary.
    *   These highly informative, "confusable" examples are sent to human experts for high-fidelity labeling.
    *   The expert-labeled data is used to fine-tune the next model iteration and for evaluation.
    *   The process repeats until model-human alignment plateaus.
*   **Metric:** Cohen's Kappa is used to measure alignment between annotators (model-human and human-human) as a proxy for quality, avoiding the need for an absolute ground truth in ambiguous domains.
*   **Experiments & Results:**
    *   Compared a baseline (fine-tuning on ~100K crowdsourced labels) with the curated approach (< 500 expert labels).
    *   Used two models: Gemini Nano-1 (1.8B params) and Nano-2 (3.25B params).
    *   The smaller Nano-1 model showed no significant performance change.
    *   The larger Nano-2 model's alignment (Kappa score) improved by 55-65% using over 99% less data.
    *   Production systems using larger models achieved up to a 10,000x reduction in training data.
*   **Conclusion:** This curation process dramatically reduces data requirements for fine-tuning larger LLMs by focusing expert annotation efforts on the most informative examples along the model's decision boundary. The method's effectiveness is contingent on achieving very high inter-expert label quality (target > .8 Cohen's Kappa).
