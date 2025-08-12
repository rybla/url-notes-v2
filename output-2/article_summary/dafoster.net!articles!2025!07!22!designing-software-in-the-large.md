*   **Complexity**: Anything in a software system's structure that impedes understanding and modification.
    *   **Symptoms**:
        *   **Change Amplification**: A simple change requires many modifications.
        *   **High Cognitive Load**: A developer needs to hold extensive information to complete a task.
        *   **Unknown Unknowns**: It's unclear what code to modify or what information is needed for a task.
    *   **Causes**:
        *   **Dependencies**: Code cannot be understood or modified in isolation.
        *   **Obscurity**: Important information is not obvious.

*   **Dependencies**: A primary cause of complexity.
    *   **Contributors**: Code/knowledge duplication, exceptions, implementation inheritance, and temporal decomposition (structuring code by the time-order of operations).
    *   **Antidote**: Design **deep modules** that offer significant functionality through a minimal interface, which promotes cohesion and reduces inter-module dependencies.

*   **Obscurity**: A primary cause of complexity.
    *   **Contributors**: Vague names, inconsistency, poor documentation, and excessive indirection (e.g., listeners, polymorphism, generic containers for structured data).
    *   **Antidote**: Write **obvious code** with precise names, consistency (enforced by linters, formatters, and style guides), and clear documentation.

*   **Development Mindset**:
    *   **Tactical**: Focuses solely on implementing features, leading to an accumulation of complexity ("tactical tornado").
    *   **Strategic**: Intentionally invests time in clean design and refactoring to manage complexity for long-term maintainability.

*   **Core Principle**: Functional code is insufficient; continuous, strategic effort to minimize complexity is essential for a maintainable system.
