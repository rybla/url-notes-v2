---
title: "gpt-oss 20b gguf model fail to run"
author: "VictorWangwz"
siteName: "GitHub"
pubDate: "2025-08-06T03:43:23.000Z"
lang: "en"
---

# gpt-oss 20b gguf model fail to run

### What is the issue?

The original model coudl run without problem, but the gguf model fail to run for below errors

May need an update of ggml dependencies like llama.cpp [ggml-org/llama.cpp#15091](https://github.com/ggml-org/llama.cpp/pull/15091)

Note: Running gguf on llama.cpp without problem.

### Relevant log output

Aug 06 03:40:33 ml-machine-1 ollama\[2649079\]: gguf\_init\_from\_file\_impl: tensor 'blk.0.ffn\_down\_exps.weight' has invalid ggml type 39 (NONE)
Aug 06 03:40:33 ml-machine-1 ollama\[2649079\]: gguf\_init\_from\_file\_impl: failed to read tensor info

### OS

_No response_

### GPU

_No response_

### CPU

_No response_

### Ollama version

_No response_