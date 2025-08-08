*   **Framework:** `notte` is a Python-based, full-stack framework for building and deploying AI agents that interact with websites.
*   **Hybrid Model:** It integrates AI-driven agents with traditional scripting (Playwright-compatible primitives) to optimize for cost and reliability. Deterministic tasks can be scripted, while dynamic tasks use AI.
*   **Execution Modes:**
    *   **Open-source:** Local execution using a user's own LLM API keys.
    *   **API Service:** Hosted, managed browser sessions with additional features.
*   **Core Agent Features:**
    *   **Structured Output:** Defines data extraction schemas using Pydantic models.
    *   **Agent Vault:** Securely stores and automatically uses credentials (logins, MFA tokens).
    *   **Agent Persona:** Creates digital identities with unique emails/phones and handles 2FA for account creation workflows.
*   **Session Management Features:**
    *   **Stealth:** Provides managed browser sessions with built-in proxy rotation, CAPTCHA solving, and anti-detection measures.
    *   **State Management:** Supports session-scoped file uploads/downloads and cookie injection/extraction.
    *   **CDP Compatibility:** Allows integration with any Chrome DevTools Protocol (CDP) compatible browser provider.
*   **Dedicated Scraping Endpoint:** A managed service for fast data extraction with options for structured output and stealth capabilities, accessible via SDK or cURL.
*   **License:** Server Side Public License v1 (SSPL-1.0).
