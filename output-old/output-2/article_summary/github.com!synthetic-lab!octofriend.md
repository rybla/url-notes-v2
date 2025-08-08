*   **Core Functionality:** An open-source, command-line coding assistant.
*   **LLM Compatibility:** Works with any OpenAI-compatible or Anthropic-compatible LLM API, allowing for mid-conversation model switching.
*   **Autofix Models:** Optionally uses custom-trained, open-source models to automatically correct tool call and code edit failures from the primary LLM.
*   **Privacy:** Features zero telemetry and can be used with local LLMs or privacy-focused API providers.
*   **Configuration:** Behavior is customized via `OCTO.md`, `CLAUDE.md`, or `AGENTS.md` instruction files. It searches for these files from the current directory up to the user's home directory, merging all found files to allow for global and project-specific rules.
*   **Unchained Mode:** Includes an `--unchained` flag to bypass all tool and edit confirmations for fully autonomous operation.
*   **MCP Integration:** Can connect to Multi-Component Protocol (MCP) servers for extended functionality by defining server connections in `~/.config/octofriend/octofriend.json5`.
