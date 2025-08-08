---
title: "Introducing GPT‑5 for developers"
lang: "en-US"
---

# Introducing GPT‑5 for developers

## Introduction

Today, we’re releasing GPT‑5 in our API platform—our best model yet for coding and agentic tasks.

GPT‑5 is state-of-the-art (SOTA) across key coding benchmarks, scoring 74.9% on SWE-bench Verified and 88% on Aider polyglot. We trained GPT‑5 to be a true coding collaborator. It excels at producing high-quality code and handling tasks such as fixing bugs, editing code, and answering questions about complex codebases. The model is steerable and collaborative—it can follow very detailed instructions with high accuracy and can provide upfront explanations of its actions before and between tool calls.  The model also excels at front-end coding, beating OpenAI o3 at frontend web development 70% of the time in internal testing.

We trained GPT‑5 on real-world coding tasks in collaboration with early testers across startups and enterprises. **Cursor** says GPT‑5 is “the smartest model \[they’ve\] used” and “remarkably intelligent, easy to steer, and even has a personality \[they\] haven’t seen in other models.” **Windsurf** shared GPT‑5 is SOTA on their evals and “has half the tool calling error rate over other frontier models.” **Vercel** says “it’s the best frontend AI model, hitting top performance across both the aesthetic sense and the code quality, putting it in a category of its own.”

GPT‑5 also excels at long-running agentic tasks—achieving SOTA results on τ2\-bench telecom (96.7%), a tool-calling benchmark released just 2 months ago. GPT‑5’s improved tool intelligence lets it reliably chain together dozens of tool calls—both in sequence and in parallel—without losing its way, making it far better at executing complex, real-world tasks end to end. It also follows tool instructions more precisely, is better at handling tool errors, and excels at long-context content retrieval. **Manus** says GPT‑5 “achieved the best performance \[they’ve\] ever seen from a single model on \[their\] internal benchmarks.” **Notion** says “\[the model’s\] rapid responses, especially in low reasoning mode, make GPT‑5 an ideal model when you need complex tasks solved in one shot.” **Inditex** shared “what truly sets \[GPT‑5\] apart is the depth of its reasoning: nuanced, multi-layered answers that reflect real subject-matter understanding.”

We’re introducing new features in our API to give developers more control over model responses. GPT‑5 supports a new `verbosity` parameter (values: `low`, `medium`, `high`) to help control whether answers are short and to the point or long and comprehensive. GPT‑5’s `reasoning_effort` parameter can now take a minimal value to get answers back faster, without extensive reasoning first. We’ve also added a new tool type—custom tools—to let GPT‑5 call tools with plaintext instead of JSON. Custom tools support constraining by developer-supplied context-free grammars.

We’re releasing GPT‑5 in three sizes in the API—`gpt-5`, `gpt-5-mini`, and `gpt-5-nano`—to give developers more flexibility to trade off performance, cost, and latency. While GPT‑5 in ChatGPT is a system of reasoning, non-reasoning, and router models, GPT‑5 in the API platform is the reasoning model that powers maximum performance in ChatGPT. Notably, GPT‑5 with minimal reasoning is a different model than the non-reasoning model in ChatGPT, and is better tuned for developers. The non-reasoning model used in ChatGPT is available as `gpt-5-chat-latest`.

To read about GPT‑5 in ChatGPT, and learn more about other ChatGPT improvements, see our [research blog](https://openai.com/index/introducing-gpt-5/). For more on how enterprises are excited to use GPT‑5, see our [enterprise blog⁠](https://openai.com/index/gpt-5-new-era-of-work/).

GPT‑5 is the strongest coding model we’ve ever released. It outperforms o3 across coding benchmarks and real-world use cases, and has been fine-tuned to shine in agentic coding products like Cursor, Windsurf, GitHub Copilot, and Codex CLI. GPT‑5 impressed our alpha testers, setting records on many of their private internal evals. 

### Early feedback on GPT-5 for real-world coding tasks

On SWE-bench Verified, an evaluation based on real-world software engineering tasks, GPT‑5 scores 74.9%, up from o3’s 69.1%. Notably, GPT‑5 achieves its high score with greater efficiency and speed: relative to o3 at high reasoning effort, GPT‑5 uses 22% fewer output tokens and 45% fewer tool calls.

In [SWE-bench Verified⁠](https://openai.com/index/introducing-swe-bench-verified/), a model is given a code repository and issue description, and must generate a patch to solve the issue. Text labels indicate the reasoning effort. Our scores omit 23 of 500 problems whose solutions did not reliably pass on our infrastructure. GPT‑5 was given a short prompt that emphasized verifying solutions thoroughly; the same prompt did not benefit o3.

On Aider polyglot, an evaluation of code editing, GPT‑5 sets a new record of 88%, a one-third reduction in error rate compared to o3.

In [Aider polygot⁠(opens in a new window)](https://aider.chat/2024/12/21/polyglot.html#the-polyglot-benchmark) (diff), a model is given a coding exercise from Exercism and must write its solution as a code diff. Reasoning models were run with high reasoning effort.

We’ve also found GPT‑5 to be excellent at digging deep into codebases to answer questions about how various pieces work or interoperate. In a codebase as complicated as OpenAI’s reinforcement learning stack, we’re finding that GPT‑5 can help us reason about and answer questions about our code, accelerating our own day-to-day work. 

When producing frontend code for web apps, GPT‑5 is more aesthetically-minded, ambitious, and accurate. In side-by-side comparisons with o3, GPT‑5 was preferred by our testers 70% of the time.

Here are some fun, cherry-picked examples of what GPT‑5 can do with a single prompt:

GPT‑5 is a better collaborator, particularly in agentic coding products like Cursor, Windsurf, GitHub Copilot, and Codex CLI. While it works, GPT‑5 can output plans, updates, and recaps in between tool calls. Relative to our past models, GPT‑5 is more proactive at completing ambitious tasks without pausing for your go-ahead or balking at high complexity.

Here’s an example of how GPT‑5 can look while tackling a complex task (in this case, creating a website for a restaurant):

After the user asks for a website for their restaurant, GPT‑5 shares a quick plan, scaffolds the app, installs dependencies, creates the site content, runs a build to check for compilation errors, summarizes its work, and suggests potential next steps. This video has been sped up ~3x to save you the wait; the full duration to create the website was about three minutes.

Beyond agentic coding, GPT‑5 is better at agentic tasks generally. GPT‑5 sets new records on benchmarks of instruction following (69.6% on Scale MultiChallenge, as graded by o3‑mini) and tool calling (96.7% on τ2\-bench telecom). Improved tool intelligence allows GPT‑5 to more reliably chain together actions to accomplish real-world tasks.

### Early feedback on GPT-5 for agentic tasks

GPT‑5 follows instructions more reliably than any of its predecessors, scoring highly on COLLIE, Scale MultiChallenge, and our internal instruction following eval.

In [COLLIE⁠(opens in a new window)](https://arxiv.org/pdf/2307.08689), models must write text that meets various constraints. In [Scale MultiChallenge⁠(opens in a new window)](https://arxiv.org/abs/2501.17399), models are challenged on multi-turn conversations to properly use four types of information from previous messages. Our scores come from using o3‑mini as a grader, which was more accurate than GPT‑4o. In our internal OpenAI API instruction following eval, models must follow difficult instructions derived from real developer feedback. Reasoning models were run with high reasoning effort.

We worked hard to improve tool calling in the ways that matter to developers. GPT‑5 is better at following tool instructions, better at dealing with tool errors, and better at proactively making many tool calls in sequence or in parallel. When instructed, GPT‑5 can also output preamble messages before and between tool calls to update users on progress during longer agentic tasks.

Two months ago, τ2\-bench telecom was published by Sierra.ai as a challenging tool use benchmark that highlighted how language model performance drops significantly when interacting with an environment state that can be changed by users. In their [publication⁠(opens in a new window)](https://arxiv.org/pdf/2506.07982), no model scored above 49%. GPT‑5 scores 97%.

In [τ2-bench⁠(opens in a new window)](https://arxiv.org/pdf/2506.07982), a model must use tools to accomplish a customer service task, where there may be a user who can communicate and can take actions on the world state. Reasoning models were run with high reasoning effort.

GPT‑5 shows strong improvements to long-context performance as well. On OpenAI-MRCR, a measure of long-context information retrieval, GPT‑5 outperforms o3 and GPT‑4.1, by a margin that grows substantially at longer input lengths.

In [OpenAI-MRCR⁠(opens in a new window)](https://huggingface.co/datasets/openai/mrcr) (multi-round co-reference resolution), multiple identical “needle” user requests are inserted into long “haystacks” of similar requests and responses, and the model is asked to reproduce the response to i-th needle. Mean match ratio measures the average string match ratio between the model’s response and the correct answer. The points at 256k max input tokens represent averages over 128k–256k input tokens, and so forth. Here, 256k represents 256 \* 1,024 = 262,114 tokens. Reasoning models were run with high reasoning effort.

We’re also open sourcing [BrowseComp Long Context⁠(opens in a new window)](https://huggingface.co/datasets/openai/BrowseCompLongContext), a new benchmark for evaluating long-context Q&A. In this benchmark, the model is given a user query, a long list of relevant search results, and must answer the question based on the search results. We designed BrowseComp Long Context to be realistic, difficult, and have reliably correct ground truth answers. On inputs that are 128K–256K tokens, GPT‑5 gives the correct answer 89% of the time.

In the API, all GPT‑5 models can accept a maximum of 272,000 input tokens and emit a maximum of 128,000 reasoning & output tokens, for a total context length of 400,000 tokens.

GPT‑5 is more trustworthy than our prior models. On prompts from LongFact and FactScore benchmarks, GPT‑5 makes ~80% fewer factual errors than o3. This makes it better suited for agentic use cases where correctness matters—especially in code, data, and decision-making.

Higher scores are worse. [LongFact⁠(opens in a new window)](https://arxiv.org/abs/2403.18802) and [FActScore⁠(opens in a new window)](https://arxiv.org/abs/2305.14251) consist of open-ended fact-seeking questions. We use an LLM-based grader with browsing to fact-check responses on prompts from these benchmarks and measure the fraction of factually incorrect claims. Implementation and grading details can be found in the [system card⁠](https://openai.com/index/gpt-5-system-card/). Reasoning models used high reasoning effort. Search was not enabled.

Generally, GPT‑5 has been trained to be more self-aware of its own limitations and better able to handle unexpected curveballs. We also trained GPT‑5 to be much more accurate on health questions (read more in our [research blog)](https://openai.com/index/introducing-gpt-5/). As with all language models, we recommend you verify GPT‑5’s work when the stakes are high.

## New features

Developers can control GPT‑5’s thinking time via the `reasoning_effort` parameter in the API. In addition to the prior values—`low`, `medium` (default), and `high`—GPT‑5 also supports `minimal`, which minimizes GPT‑5’s reasoning to return an answer quickly.

Higher `reasoning_effort` values maximize quality and lower values maximize speed. Not all tasks benefit equally from additional reasoning, so we recommend experimenting to see which works best for the use cases you care about.

For example, reasoning above `low` adds little to relatively simple long-context retrieval, but adds quite a few percentage points to [CharXiv Reasoning⁠(opens in a new window)](https://arxiv.org/abs/2406.18521), a visual reasoning benchmark.

GPT‑5’s reasoning effort yields different benefits on different tasks. For CharXiv Reasoning, GPT‑5 was given access to a python tool.

To help steer the default length of GPT‑5’s answers, we’ve introduced a new API parameter `verbosity`, which takes values of `low`, `medium` (default), and `high`. If explicit instructions conflict with the verbosity parameters, explicit instructions take precedent. For example, if you ask GPT‑5 to “write a 5 paragraph essay”, the model’s response should always be 5 paragraphs regardless of the verbosity level (however, the paragraphs themselves may be longer or shorter).

If instructed, GPT‑5 will output user-visible preamble messages before and between tool calls. Unlike hidden reasoning messages, these visible messages allow GPT‑5 to communicate plans and progress to the user, helping end users understand its approach and intent behind the tool calls.

We’re introducing a new tool type—custom tools—that allows GPT‑5 to call a tool with plaintext instead of JSON. To constrain GPT‑5 to follow custom tool formats, developers can supply a regex, or even a more fully specified [context-free grammar⁠(opens in a new window)](https://platform.openai.com/docs/guides/function-calling#context-free-grammars).

Previously, our interface for developer-defined tools required them to be called with JSON, a common format used by web APIs and developers generally. However, outputting valid JSON requires the model to perfectly escape all quotation marks, backslashes, newlines, and other control characters. Although our models are well-trained to output JSON, on long inputs like hundreds of lines of code or a 5-page report, the odds of an error creep up. With custom tools, GPT‑5 can write tool inputs as plaintext, without having to escape all of the characters that require escaping.

On SWE-bench Verified using custom tools instead of JSON tools, GPT‑5 scores about the same.

## Safety

GPT‑5 advances the frontier on safety and is a more robust, reliable, and helpful model. GPT‑5 is significantly less likely to hallucinate than our previous models, more honestly communicates its actions and capabilities to the user and provides the most helpful answer where possible while still staying within safety boundaries. You can read more in our [research blog](https://openai.com/index/introducing-gpt-5/).

## Availability & pricing

GPT‑5 is available now in the API platform in three sizes: `gpt-5`, `gpt-5-mini`, and `gpt-5-nano`. It’s available on the Responses API, Chat Completions API, and is the default in Codex CLI. GPT‑5 is priced at $1.25/1M input tokens and $10/1M output tokens, GPT‑5 mini is priced at $0.25/1M input tokens and $2/1M output tokens, and GPT‑5 nano is priced at $0.05/1M input tokens and $0.40/1M output tokens.

These models  support the `reasoning_effort` and `verbosity` API parameters, as well as custom tools. They also support parallel tool calling, built-in tools (web search, file search, image generation, and more), core API features (streaming, Structured Outputs, and more), and cost-saving features such as prompt caching and Batch API.

The non-reasoning version of GPT‑5 used in ChatGPT is available in the API as `gpt-5-chat-latest`, also priced at $1.25/1M input tokens and $10/1M output tokens.

GPT‑5 is also launching across Microsoft platforms, including Microsoft 365 Copilot, Copilot, GitHub Copilot, and Azure AI Foundry.

## Detailed benchmarks

##### Intelligence

GPT-5(high)

GPT-5 mini(high)

GPT-5 nano(high)

OpenAI o3(high)

OpenAI o4-mini(high)

GPT-4.1

GPT-4.1 mini

GPT-4.1 nano

AIME ’25(no tools)

94.6%

91.1%

85.2%

86.4%

92.7%

46.4%

40.2%

\-

FrontierMath(with python tool only)

26.3%

22.1%

9.6%

15.8%

15.4%

\-

\-

\-

GPQA diamond(no tools)

85.7%

82.3%

71.2%

83.3%

81.4%

66.3%

65.0%

50.3%

HLE\[1\](no tools)

24.8%

16.7%

8.7%

20.2%

14.7%

5.4%

3.7%

\-

HMMT 2025(no tools)

93.3%

87.8%

75.6%

81.7%

85.0%

28.9%

35.0%

\-

\[1\] There is a small discrepancy with numbers reported in our previous blog post, as those were run on a former version of HLE.

##### Multimodal

GPT-5(high)

GPT-5 mini(high)

GPT-5 nano(high)

OpenAI o3(high)

OpenAI o4-mini(high)

GPT-4.1

GPT-4.1 mini

GPT-4.1 nano

MMMU

84.2%

81.6%

75.6%

82.9%

81.6%

74.8%

72.7%

55.4%

MMMU-Pro(avg across standard and vision sets)

78.4%

74.1%

62.6%

76.4%

73.4%

60.3%

58.9%

33.0%

CharXiv reasoning(python enabled)

81.1%

75.5%

62.7%

78.6%

72.0%

56.7%

56.8%

40.5%

VideoMMMU, max frame 256

84.6%

82.5%

66.8%

83.3%

79.4%

60.9%

55.1%

30.2%

ERQA

65.7%

62.9%

50.1%

64.0%

56.5%

44.3%

42.3%

26.5%

##### Coding

GPT-5(high)

GPT-5 mini(high)

GPT-5 nano(high)

OpenAI o3(high)

OpenAI o4-mini(high)

GPT-4.1

GPT-4.1 mini

GPT-4.1 nano

SWE-Lancer: IC SWE Diamond Freelance Coding Tasks

$112K

$75K

$49K

$86K

$66K

$34K

$31K

$9K

SWE-bench Verified\[2\]

74.9%

71.0%

54.7%

69.1%

68.1%

54.6%

23.6%

\-

Aider polyglot(diff)

88.0%

71.6%

48.4%

79.6%

58.2%

52.9%

31.6%

6.2%

\[2\] We omit 23/500 problems that could not run on our infrastructure. The full list of 23 tasks omitted are 'astropy\_\_astropy-7606', 'astropy\_\_astropy-8707', 'astropy\_\_astropy-8872', 'django\_\_django-10097', 'django\_\_django-7530', 'matplotlib\_\_matplotlib-20488', 'matplotlib\_\_matplotlib-20676', 'matplotlib\_\_matplotlib-20826', 'matplotlib\_\_matplotlib-23299', 'matplotlib\_\_matplotlib-24970', 'matplotlib\_\_matplotlib-25479', 'matplotlib\_\_matplotlib-26342', 'psf\_\_requests-6028', 'pylint-dev\_\_pylint-6528', 'pylint-dev\_\_pylint-7080', 'pylint-dev\_\_pylint-7277', 'pytest-dev\_\_pytest-5262', 'pytest-dev\_\_pytest-7521', 'scikit-learn\_\_scikit-learn-12973', 'sphinx-doc\_\_sphinx-10466', 'sphinx-doc\_\_sphinx-7462', 'sphinx-doc\_\_sphinx-8265', and 'sphinx-doc\_\_sphinx-9367'.

##### Instruction Following

GPT-5(high)

GPT-5 mini(high)

GPT-5 nano(high)

OpenAI o3(high)

OpenAI o4-mini(high)

GPT-4.1

GPT-4.1 mini

GPT-4.1 nano

Scale multichallenge\[3\](o3-mini grader)

69.6%

62.3%

54.9%

60.4%

57.5%

46.2%

42.2%

31.1%

Internal API instruction following eval(hard)

64.0%

65.8%

56.1%

47.4%

44.7%

49.1%

45.1%

31.6%

COLLIE

99.0%

98.5%

96.9%

98.4%

96.1%

65.8%

54.6%

42.5%

\[3\] Note: we find that the default grader in MultiChallenge (GPT-4o) frequently mis-scores model responses. We find that swapping the grader to a reasoning model, like o3-mini, improves accuracy on grading significantly on samples we’ve inspected.

##### Function Calling

GPT-5(high)

GPT-5 mini(high)

GPT-5 nano(high)

OpenAI o3(high)

OpenAI o4-mini(high)

GPT-4.1

GPT-4.1 mini

GPT-4.1 nano

Tau2\-bench airline

62.6%

60.0%

41.0%

64.8%

60.2%

56.0%

51.0%

14.0%

Tau2\-bench retail

81.1%

78.3%

62.3%

80.2%

70.5%

74.0%

66.0%

21.5%

Tau2\-bench telecom

96.7%

74.1%

35.5%

58.2%

40.5%

34.0%

44.0%

12.1%

##### Long Context

GPT-5(high)

GPT-5 mini(high)

GPT-5 nano(high)

OpenAI o3(high)

OpenAI o4-mini(high)

GPT-4.1

GPT-4.1 mini

GPT-4.1 nano

OpenAI-MRCR: 2 needle 128k

95.2%

84.3%

43.2%

55.0%

56.4%

57.2%

47.2%

36.6%

OpenAI-MRCR: 2 needle 256k

86.8%

58.8%

34.9%

\-

\-

56.2%

45.5%

22.6%

Graphwalks bfs <128k

78.3%

73.4%

64.0%

77.3%

62.3%

61.7%

61.7%

25.0%

Graphwalks parents <128k

73.3%

64.3%

43.8%

72.9%

51.1%

58.0%

60.5%

9.4%

BrowseComp Long Context 128k

90.0%

89.4%

80.4%

88.3%

80.0%

85.9%

89.0%

89.4%

BrowseComp Long Context 256k

88.8%

86.0%

68.4%

\-

\-

75.5%

81.6%

19.1%

VideoMME(long, with subtitle category)

86.7%

78.5%

65.7%

84.9%

79.5%

78.7%

68.4%

55.2%

##### Hallucinations

GPT-5(high)

GPT-5 mini(high)

GPT-5 nano(high)

OpenAI o3(high)

OpenAI o4-mini(high)

GPT-4.1

GPT-4.1 mini

GPT-4.1 nano

LongFact-Concepts hallucination rate(no tools)\[lower is better\]

1.0%

0.7%

1.0%

5.2%

3.0%

0.7%

1.1%

\-

LongFact-Objects hallucination rate(no tools)\[lower is better\]

1.2%

1.3%

2.8%

6.8%

8.9%

1.1%

1.8%

\-

FActScore hallucination rate(no tools)\[lower is better\]

2.8%

3.5%

7.3%

23.5%

38.7%

6.7%

10.9%

\-