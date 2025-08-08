*   **Core Concept**: Q is a minimal, dependency-free programming language and compiler for x86-64 and arm64 architectures.
*   **Key Features**:
    *   **Performance**: Utilizes SSA (Static Single Assignment) and assembly-level optimizations.
    *   **Compilation Speed**: Extremely fast, with simple programs compiling in under 100 microseconds.
    *   **Binary Size**: Produces very small executables (e.g., a "Hello World" on Linux is ~600 bytes).
    *   **Portability**: Supports Linux, macOS, and Windows.
    *   **Dependencies**: Zero external dependencies, not relying on LLVM or libc.
*   **Compiler Architecture**:
    *   The frontend parses code into an abstract syntax tree (AST).
    *   An SSA-based Intermediate Representation (IR) is used for optimizations.
    *   The backend generates assembly for target-specific executable formats (ELF for Linux, Mach-O for macOS, PE for Windows).
*   **Security**:
    *   Builds Position Independent Executables (PIE) by default.
    *   Enforces W^X (Write XOR Execute) memory protection, separating writable and executable pages.
*   **Usage**:
    *   Can interpret files directly for scripting via a shebang (`#!/usr/bin/env q`).
    *   Can compile source files into native executables for various OS and architecture targets.
