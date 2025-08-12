---
title: "120B runs awesome on just 8GB VRAM!"
author: "Wrong-Historian"
siteName: "reddit"
lang: "en"
---

# 120B runs awesome on just 8GB VRAM!

Here is the thing, the expert layers run amazing on CPU (~17T/s 25T/s on a 14900K) and you can force that with this new llama-cpp option: --cpu-moe .

You can offload just the attention layers to GPU (requiring about 5 to 8GB of VRAM) for fast prefill.

*   KV cache for the sequence
*   Attention weights & activations
*   Routing tables
*   LayerNorms and other “non-expert” parameters

No giant MLP weights are resident on the GPU, so memory use stays low.

This yields an amazing snappy system for a 120B model! Even something like a 3060Ti would be amazing! GPU with BF16 support would be best (RTX3000+) because all layers except the MOE layers (which are mxfp4) are BF16.

64GB of system ram would be minimum, and 96GB would be ideal. (linux uses mmap so will keep the 'hot' experts in memory even if the whole model doesn't fit in memory)

> prompt eval time = 28044.75 ms / 3440 tokens ( 8.15 ms per token, 122.66 tokens per second)
> 
> eval time = 5433.28 ms / 98 tokens ( 55.44 ms per token, 18.04 tokens per second)

with 5GB of vram usage!

Honestly, I think this is the biggest win of this 120B model. This seems an amazing model to run fast for GPU-poor people. You can do this on a 3060Ti and 64GB of system ram is cheap.

edit: with this latest PR: [https://github.com/ggml-org/llama.cpp/pull/15157](https://github.com/ggml-org/llama.cpp/pull/15157)

    ~/build/llama.cpp/build-cuda/bin/llama-server \
        -m $LLAMA_MODEL_DIR/gpt-oss-120b-mxfp4-00001-of-00003.gguf \
        --n-cpu-moe 36 \    #this model has 36 MOE blocks. So cpu-moe 36 means all moe are running on the CPU. You can adjust this to move some MOE to the GPU, but it doesn't even make things that much faster.
        --n-gpu-layers 999 \   #everything else on the GPU, about 8GB
        -c 0 -fa \   #max context (128k), flash attention
        --jinja --reasoning-format none \
        --host 0.0.0.0 --port 8502 --api-key "dummy" \
    
    
    
    prompt eval time =   94593.62 ms / 12717 tokens (    7.44 ms per token,   134.44 tokens per second)
           eval time =   76741.17 ms /  1966 tokens (   39.03 ms per token,    25.62 tokens per second)
    

Hitting above 25T/s with only 8GB VRAM use!

Compared to running 8 MOE layers also on the GPU (about 22GB VRAM used total) :

    ~/build/llama.cpp/build-cuda/bin/llama-server \
        -m $LLAMA_MODEL_DIR/gpt-oss-120b-mxfp4-00001-of-00003.gguf \
        --n-cpu-moe 28 \
        --n-gpu-layers 999 \
        -c 0 -fa \
        --jinja --reasoning-format none \
        --host 0.0.0.0 --port 8502 --api-key "dummy" \
    
    prompt eval time =   78003.66 ms / 12715 tokens (    6.13 ms per token,   163.01 tokens per second)
           eval time =   70376.61 ms /  2169 tokens (   32.45 ms per token,    30.82 tokens per second)
    

Honestly, this 120B is the perfect architecture for running at home on consumer hardware. Somebody did some smart thinking when designing all of this!