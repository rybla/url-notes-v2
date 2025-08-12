*   **Core Tool:** The article focuses on "Claude Code," a terminal-based AI assistant from Anthropic, which the author integrates into a `vim` and terminal-centric workflow.
*   **"Vibe Coding" Methodology:** The author advocates for "vibe coding"—developing software via conversational prompts without directly writing code. The key is providing detailed, high-quality input, often in the form of a `SPEC.md` file.
*   **Frameworks vs. Vanilla Code:** A central argument is that LLMs perform better with simple, vanilla code (e.g., single-file PHP, raw SQL) than with complex frameworks and abstractions. An experiment building a SplitWise clone yielded a working 900-line PHP app from a constrained prompt, while an unconstrained prompt produced a broken 1000-line NodeJS project with 500MB of dependencies.
*   **Autonomous Agent Experiment:**
    *   Claude Code was given root access to a VPS with instructions to build an autonomous startup.
    *   It wrote its own prompts, evaluated ideas, and built a full-stack server monitoring application, including Nginx configuration and SSL certificates.
    *   The process was eventually halted by Anthropic's usage policy when it attempted to autonomously market the service on social media.
*   **Production Migration:**
    *   Successfully migrated a production Laravel/PHP/MySQL application ("Sboj") to a new server.
    *   Claude Code analyzed the unfamiliar codebase, generated a `README` with dependencies, set up the new environment, restored the database, and handled subsequent debugging and service migrations (e.g., email providers).
*   **Other Projects:**
    *   **HN Comment Ranker:** A browser extension to analyze and rate Hacker News comments for relevance, with a model-designed UI.
    *   **Poster Maker:** A simple Canva alternative that combines AI-generated images (from GPT) with text and handles the complex HTML-to-PDF export.
    *   **File System & Data Tasks:** Used to automatically rename, parse, merge, and categorize unstructured bank statement files (XLSX/PDF to a single CSV).
*   **Development Environment:** The author uses Claude Code's interactive TUI as a primary text editor, writing prose and instructions to have the model generate formatted articles with custom HTML/CSS.
