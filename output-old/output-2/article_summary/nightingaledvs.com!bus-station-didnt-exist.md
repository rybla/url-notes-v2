*   **Data Fitness:** A dataset's utility is determined by its schema and definitions, not just its raw contents. A lack of appropriate data structures (e.g., grouping individual bus stops into a "bus station") can render it unfit for certain applications. Data collection and management processes must anticipate and accommodate diverse use cases.
*   **Data Completeness & Bias:**
    *   When data is incomplete, proxies (e.g., Google Places "busy times" as a proxy for foot traffic) can provide informative, if not exhaustive, results.
    *   Missing data can signal systemic bias (e.g., underrepresentation of darker skin tones in medical image datasets). Building models on such data is unethical; the priority should be to create an unbiased dataset.
*   **Data Authority & Usability:**
    *   "Official" or "authoritative" data is not inherently superior. Third-party, more usable versions of data are often preferred in practice (e.g., scraped parliamentary data vs. the difficult-to-use official source).
    *   Authoritative data can be inaccurate or misleading due to real-world complexities like disputed borders, which are difficult to represent definitively.
*   **Data Communication & Neutrality:**
    *   Effective data communication requires explicit clarification of statistical definitions (e.g., geometric vs. arithmetic mean) which may conflict with common understanding.
    *   Data presentation is not neutral. The choice of visualization and narrative framing can lead to different interpretations of the same underlying data (e.g., an election map showing a "divided" vs. a "confused" country).
*   **Productionalized Data Models:**
    *   In live data-driven services, models decay over time and require pipelines for continuous retraining to maintain predictive accuracy.
    *   A model's predictive accuracy is irrelevant without a clear, actionable application for its users. Successful data-driven services require multidisciplinary co-creation with subject matter experts and end-users to ensure the model's output translates into meaningful action.
