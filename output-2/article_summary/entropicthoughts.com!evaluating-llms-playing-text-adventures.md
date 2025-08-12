*   **Objective**: Develop a quantitative method to evaluate and compare the performance of various LLMs in playing text-based adventure games.
*   **Methodology**:
    *   An achievement-based scoring system was created. Achievements are defined by specific text strings appearing in the game's output.
    *   Each LLM is given a fixed number of turns (`TURN_LIMIT`) to play a game and accumulate achievements.
    *   The final score is the percentage of achievements earned. This provides a relative performance comparison, not an absolute skill measure.
*   **Ranking Normalization**:
    *   To account for varying game difficulty, a linear regression was performed using models and games as predictors.
    *   This yielded difficulty-adjusted performance coefficients for each model, enabling a fairer ranking.
*   **Key Findings**:
    *   **Cost-Performance**: Cheaper models like Gemini 2.5 Flash and Claude 4 Sonnet performed comparably to or better than more expensive models like Gemini 2.5 Pro and Claude 4 Opus. Gemini 2.5 Flash was identified as the most cost-effective model for the task.
    *   **Evaluation Reliability**: The evaluation protocol itself was tested by running the same model (Gemini 2.5 Flash) multiple times. Results showed high score variance in games with open, non-linear beginnings (e.g., *So Far*), indicating they are poor benchmarks. Games with more linear paths (e.g., *Lost Pig*) produced more consistent results.
*   **Conclusion**: The achievement-based system is a viable method for relative LLM evaluation in this domain, but benchmark game selection is critical for reliable results. LLMs are not yet proficient at text adventures without significant prompting, and Gemini 2.5 Flash offers the best performance-to-cost ratio among the tested models.
