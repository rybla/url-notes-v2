---
title: "q"
byline: "cli"
siteName: "Git"
lang: "en-US"
---

# q

![q logo](https://git.urbach.dev/cli/q/media/branch/main/docs/logo.svg)

## The Q Programming Language

Q is a minimal, dependency-free programming language and compiler targeting x86-64 and arm64 with ultra-fast builds and tiny binaries.

## Features

*   High performance (`ssa` and `asm` optimizations)
*   Fast compilation (<100 μs for simple programs)
*   Tiny executables ("Hello World" is ~600 bytes)
*   Multiple platforms (Linux, Mac and Windows)
*   Zero dependencies (no llvm, no libc)

## Installation

Build from source:

    git clone https://git.urbach.dev/cli/q
    cd q
    go build
    

Install via symlink:

    ln -s $PWD/q ~/.local/bin/q
    

## Usage

Run `hello` example:

    q examples/hello
    

Build an executable:

    q build examples/hello
    

Build for another architecture:

    q build examples/hello --arch arm
    q build examples/hello --arch x86
    

Build for another operating system:

    q build examples/hello --os linux
    q build examples/hello --os mac
    q build examples/hello --os windows
    

Build with verbose output:

    q build examples/hello --verbose
    

## Language specification

The work is currently being focused on the correctness of the compiler and the proper code generation for all architectures and operating systems.

The language syntax is highly volatile at this point but you can take a look at the [examples](https://git.urbach.dev/cli/q/src/branch/main/examples) or the [tests](https://git.urbach.dev/cli/q/src/branch/main/tests) to get a perspective on the current status.

Documentation for all language features will follow once the core systems are stable.

## Source overview

This section is for contributors who want a high-level overview of the source code structure.

### Packages

*   [arm](https://git.urbach.dev/cli/q/src/branch/main/src/arm) - arm64 architecture
*   [asm](https://git.urbach.dev/cli/q/src/branch/main/src/asm) - Generic assembler
*   [ast](https://git.urbach.dev/cli/q/src/branch/main/src/ast) - Abstract syntax tree
*   [cli](https://git.urbach.dev/cli/q/src/branch/main/src/cli) - Command line interface
*   [codegen](https://git.urbach.dev/cli/q/src/branch/main/src/codegen) - SSA to assembly code generation
*   [compiler](https://git.urbach.dev/cli/q/src/branch/main/src/compiler) - Compiler frontend
*   [config](https://git.urbach.dev/cli/q/src/branch/main/src/config) - Build configuration
*   [core](https://git.urbach.dev/cli/q/src/branch/main/src/core) - Defines `Function` and compiles tokens to SSA
*   [cpu](https://git.urbach.dev/cli/q/src/branch/main/src/cpu) - Types to represent a generic CPU
*   [data](https://git.urbach.dev/cli/q/src/branch/main/src/data) - Data container that can re-use existing data
*   [dll](https://git.urbach.dev/cli/q/src/branch/main/src/dll) - DLL support for Windows systems
*   [elf](https://git.urbach.dev/cli/q/src/branch/main/src/elf) - ELF format for Linux executables
*   [errors](https://git.urbach.dev/cli/q/src/branch/main/src/errors) - Error handling that reports lines and columns
*   [exe](https://git.urbach.dev/cli/q/src/branch/main/src/exe) - Generic executable format to calculate section offsets
*   [expression](https://git.urbach.dev/cli/q/src/branch/main/src/expression) - Expression parser generating trees
*   [fs](https://git.urbach.dev/cli/q/src/branch/main/src/fs) - File system access
*   [global](https://git.urbach.dev/cli/q/src/branch/main/src/global) - Global variables like the working directory
*   [linker](https://git.urbach.dev/cli/q/src/branch/main/src/linker) - Frontend for generating executable files
*   [macho](https://git.urbach.dev/cli/q/src/branch/main/src/macho) - Mach-O format for Mac executables
*   [memfile](https://git.urbach.dev/cli/q/src/branch/main/src/memfile) - Memory backed file descriptors
*   [pe](https://git.urbach.dev/cli/q/src/branch/main/src/pe) - PE format for Windows executables
*   [scanner](https://git.urbach.dev/cli/q/src/branch/main/src/scanner) - Scanner that parses top-level instructions
*   [set](https://git.urbach.dev/cli/q/src/branch/main/src/set) - Generic set implementation
*   [sizeof](https://git.urbach.dev/cli/q/src/branch/main/src/sizeof) - Calculates the byte size of numbers
*   [ssa](https://git.urbach.dev/cli/q/src/branch/main/src/ssa) - Static single assignment types
*   [token](https://git.urbach.dev/cli/q/src/branch/main/src/token) - Tokenizer
*   [types](https://git.urbach.dev/cli/q/src/branch/main/src/types) - Type system
*   [verbose](https://git.urbach.dev/cli/q/src/branch/main/src/verbose) - Verbose output
*   [x86](https://git.urbach.dev/cli/q/src/branch/main/src/x86) - x86-64 architecture

### Typical flow

1.  [main](https://git.urbach.dev/cli/q/src/branch/main/main.go)
2.  [cli.Exec](https://git.urbach.dev/cli/q/src/branch/main/src/cli/Exec.go)
3.  [compiler.Compile](https://git.urbach.dev/cli/q/src/branch/main/src/compiler/Compile.go)
4.  [scanner.Scan](https://git.urbach.dev/cli/q/src/branch/main/src/scanner/Scan.go)
5.  [core.Compile](https://git.urbach.dev/cli/q/src/branch/main/src/core/Compile.go)
6.  [linker.Write](https://git.urbach.dev/cli/q/src/branch/main/src/linker/Write.go)

## FAQ

### How tiny is a Hello World?

arm64

x86-64

🐧 Linux

646 bytes

582 bytes

🍏 Mac

49.3 KiB

12.5 KiB

🪟 Windows

1.7 KiB

1.7 KiB

This table often raises the question why Mac builds are so huge compared to the rest. The answer is in [these few lines](https://github.com/apple-oss-distributions/xnu/blob/e3723e1f17661b24996789d8afc084c0c3303b26/bsd/kern/mach_loader.c#L2021-L2027) of their kernel code. None of the other operating systems force you to page-align sections on disk. In practice, however, it's not as bad as it sounds because the padding is a zero-filled area that barely consumes any disk space in [sparse files](https://en.wikipedia.org/wiki/Sparse_file).

### Which platforms are supported?

arm64

x86-64

🐧 Linux

✔️

✔️

🍏 Mac

✔️\*

✔️

🪟 Windows

✔️\*

✔️

Those marked with a star need testing. Please contact me if you have a machine with the marked architectures.

### How is the assembly code quality?

The backend uses an SSA based IR which is also used by well established compilers like `gcc`, `go` and `llvm`. SSA makes it trivial to apply lots of common optimization passes to it. As such, the quality of the generated assembly is fairly high despite the young age of the project.

### Which security features are supported?

#### PIE

All executables are built as position independent executables supporting a dynamic base address.

#### W^X

All memory pages are loaded with either execute or write permissions but never with both. Constant data is read-only.

Read

Execute

Write

Code

✔️

✔️

❌

Data

✔️

❌

❌

### How do I use it for scripting?

The compiler is actually so fast that it's possible to compile an entire script within microseconds.

    #!/usr/bin/env q
    
    import io
    
    main() {
    	io.write("Hello\n")
    }
    

Create a file with the contents above and add permissions via `chmod +x`. Now you can execute it from anywhere. The generated machine code runs directly from RAM if the OS supports it.

### Any editor extensions?

There is one for VS Code but is only has syntax highlighting so far. You can clone the [vscode-q](https://git.urbach.dev/extra/vscode-q) repository into your extensions folder.

Neovim support is planned.

### How do I pronounce the name?

/ˈkjuː/ just like `q` in the English alphabet.

## FAQ: Contributors

### How do I run the test suite?

Run all tests:

    go run gotest.tools/gotestsum@latest
    

Generate coverage:

    go test -coverpkg=./... -coverprofile=cover.out ./...
    

View coverage:

    go tool cover -func cover.out
    go tool cover -html cover.out
    

### How do I run the benchmarks?

Run compiler benchmarks:

    go test ./tests -run='^$' -bench=. -benchmem
    

Run compiler benchmarks in single-threaded mode:

    GOMAXPROCS=1 go test ./tests -run '^$' -bench . -benchmem
    

Generate profiling data:

    go test ./tests -run='^$' -bench=. -benchmem -cpuprofile cpu.out -memprofile mem.out
    

View profiling data:

    go tool pprof --nodefraction=0.1 -http=:8080 ./cpu.out
    go tool pprof --nodefraction=0.1 -http=:8080 ./mem.out
    

### Is there an IRC channel?

[#q](ircs://irc.urbach.dev:6697/#q) on [irc.urbach.dev](https://irc.urbach.dev/).

## License

Please see the [license documentation](https://urbach.dev/license).

## Copyright

© 2025 Eduard Urbach