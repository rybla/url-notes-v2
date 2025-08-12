---
title: "Evaluating LLMs Playing Text Adventures"
author: "kqr"
---

# Evaluating LLMs Playing Text Adventures

When we first [set up the llm such that it could play text adventures](https://entropicthoughts.com/getting-an-llm-to-play-text-adventures.html), we noted that none of the models we tried to use with it were any good at it. We dreamed of a way to compare them, but all I could think of was setting a goal far into the game and seeing how long it takes them to get there. I just realised there’s a better way to do it.

## Evaluation against achievments

What we’ll do is set a low-ish turn limit and see how much they manage to accomplish in that time.11 Another alternative for more linear games is running them multiple times with a turn limit and seeing how often they get past a particular point within that turn limit.

Given how much freedom is offered to players of text adventures, this is a difficult test. It’s normal even for a skilled human player to immerse themselves in their surrounding rather than make constant progress. I wouldn’t be surprised if I got a score of zero if someone plopped me down in front of this test. But still, maybe it’s the best we can do with limited resources.22 Another idea is to give them a far-off goal and then somehow have them request hints when they are stuck, and count how many hints they need to get there. However, given how little they used hints given in the previous article, I doubt this would work very well either.

What we’ll do is define a set of achievements for a game. These achievements will be clustered around the first few turns of the game, because we’ll only give the llm a few turns to earn them. Here’s an example for 9:05.

TURN\_LIMIT          40
ANSWER\_PHONE        Click.
EXIT\_BED            You get out of bed.
OPEN\_DRESSER        revealing some clean
ENTER\_BATHROOM      far from luxurious
REMOVE\_SOILED       You take off the soiled
REMOVE\_WATCH        You take off the watch
ENTER\_SHOWER        dawdle
WEAR\_CLEAN          You put on the clean
OPEN\_FRONT          You open the front
UNLOCK\_CAR          Unlocked.
ENTER\_CAR           Las Mesas
OPEN\_WALLET         open the wallet
CARD\_SLOT           green LED lights

It should be fairly clear how this works: the `TURN_LIMIT` specifies how many turns the llm has to collect achievements. Every line other than that specifies an achievement: the name is on the left, and it counts as earned when the game prints the text on the right. The llm knows nothing of these achievements. It tries to get through the game and in the background we use the achievements to count how far it gets.

It might seem like the turn limit must be calibrated such that a score of 100 % is possible, but that’s not the case. Many of the games we are going to test with have branching already at the start, such that the achievements need to cover multiple branches, and it’s impossible to go through all branches within the turn limit. What we do need to be careful about is making sure the number of achievements in each branch is roughly the same, otherwise models that are lucky and go down an achievement-rich path will get a higher score. Thanks to this, the score we get out of this test is a relative comparison between models, not an absolute measure of how well the llms play text adventures. We have already established that they don’t do it very well, and we can’t be more nuanced than that without paying for a lot of eval tokens.

We might consider making some moves not count toward the turn limit, for example erroneous commands, or examining things – the latter because more powerful models are more methodical and examine more things, and it seems odd to penalise them for this. However, in the end, examining things is probably part of what allows the more powerful models to make further progress (and typing valid commands is part of being good at text adventures), so we won’t give away any moves for free.

## Evaluating many popular models

We register for OpenRouter to get convenient access to more models and then let them whirr away with the Perl script, which is updated to cut the llm off at the turn limit. At that point it reports to us how many achievements were earned. We get the following results, ordered roughly by decreasing performance. (The result tables in this article are wide; on narrow viewports you may have to scroll sideways.)

    

Model

9:05

Lockout

Dreamhold

Lost Pig

Grok 4

86 %

15 %

46 %

33 %

Claude 4 Sonnet

80 %

30 %

53 %

46 %

Gemini 2.5 Flash

80 %

30 %

33 %

46 %

Gemini 2.5 Pro

80 %

30 %

40 %

40 %

DeepSeek R1 0528

80 %

23 %

33 %

33 %

Claude 4 Opus

73 %

30 %

60 %

46 %

gpt\-5 Chat

73 %

15 %

53 %

33 %

DeepSeek V3

66 %

23 %

20 %

33 %

gpt\-4o

53 %

23 %

40 %

40 %

Qwen3 Coder

53 %

23 %

40 %

33 %

Kimi K2

53 %

30 %

46 %

40 %

glm 4.5

53 %

23 %

33 %

53 %

Claude 3.5 Haiku

38 %

15 %

26 %

26 %

Llama 3 Maverick

33 %

30 %

40 %

33 %

gpt\-o3-mini

20 %

15 %

26 %

26 %

Mistral Small 3

20 %

15 %

0 %

20 %

gpt\-4o-mini

13 %

23 %

20 %

40 %

Ideally, these should be run multiple times to account for random variation in performance33 For example, in 9:05, Opus thought it did not carry the wallet when it did, so it jumped into the car again to go back for it. Clever, but wasted enough turns to lose to Sonnet thanks to a silly mistake!, but given that the Opus sessions cost around $4, I’m not going to do that. I was close to not even running Opus for all four games!

## Adjusting model ranking for game difficulty

Some models appear to perform better in some games than others, so it’s hard to rank the models. We could take the average of their scores, but that’s unfair because some of the games are harder than others: a 40 % in _Lockout_ should be considered more impressive than a 40 % in _Dreamhold_. What we will do, which may or may not be valid, is run a linear regression using models and games as predictors. This gives us coefficients for the games (telling us how difficult the games are), but also coefficients for the models, and these are the ones we want, because the coefficients for the models are adjusted for game difficulty.

This regression is performed with the baseline being 9:05 played by gpt\-5 Chat. Most of the model coefficients are not statistically significant (because four games is not enough to figure out statistical significance unless the model is truly terrible), but they might serve as a first-order estimation for ranking models.

In this table, cost is per million output tokens.44 The design of the script ensures that output and input are similar in size – O(1) to be specific – so output is what is going to drive the cost. The table is divided into three categories: performance better than gpt\-5 Chat, cheaper models with performance that is nearly there, and models that suck.

  

Model

Coefficient

Cost ($/Mt)

Claude 4 Opus

+0.09

75

Claude 4 Sonnet

+0.09

15

Gemini 2.5 Pro

+0.04

10

Gemini 2.5 Flash

+0.04

0.7

Grok 4

+0.02

15

gpt\-5 Chat (baseline)

0.00

10

Kimi K2

\-0.01

2.5

DeepSeek R1 0528

\-0.01

0.7

glm 4.5

\-0.03

0.8

gpt\-4o

\-0.05

0.1

Qwen3 Coder

\-0.06

0.8

DeepSeek V3

\-0.08

0.7

Llama 3 Maverick

\-0.10

0.6

Claude 3.5 Haiku

\-0.17

4

gpt\-4o-mini

\-0.20

0.6

gpt\-o3-mini

\-0.22

4.4

Mistral Small 3

\-0.30

0.1

Some comments:

*   I find it interesting that the top-tier models (Claude Opus, Gemini Pro) don’t seem to significantly outperform their cheaper siblings (Claude Sonnet, Gemini Flash) in these tests.55 This might be because we are hand-holding the models so much in the prompt. More powerful models may be better at directing themselves.
*   I’m very impressed by Gemini 2.5 Flash. At that cost, it is performing admirably. It is hard to argue for using models like DeepSeek’s R1 when we better performance at the same cost from the Google model.
*   The small models really aren’t good general problem solvers. I think Haiku costs so much because it is good at language, not reasoning.

It would be super interesting to toss these at more games to work out the finer differences (e.g. is there _really_ a difference between Gemini Pro and Flash, or was that just down to sampling error in the small sample of games I had them play?) but such a comparison gets expensive in part due to the cost of eval tokens (the above table cost something like $34), but mainly because it would require me to sit down and create sets of achievements for these games. I have only played so many z-code games, so I cannot do this for very many games. If someone wants to support me, please reach out!

## Testing the top models on more games

I have played three more games, though, so let’s continue the evaluation with the five top models on these games also. Their performances on the three new games are

   

Model

For a Change

Plundered Hearts

So Far

Claude 4 Sonnet

11 %

19 %

28 %

Gemini 2.5 Pro

16 %

28 %

28 %

GPT-5 Chat

44 %

33 %

0 %

Grok 4

22 %

28 %

28 %

Gemini 2.5 Flash

28 %

33 %

14 %

Using the same methodology as before (combining data from both trial run sets), we arrive at new coefficients for the evaluated models.66 I did also investigate how Gemini 2.0 Flash compared against Gemini 2.5 Flash, because the former is significantly cheaper and the latter was surprisingly good. Unfortunately, Gemini 2.0 Flash was not very good. Its performance relative to its younger sibling was -15 %pt.,77 I was also tempted to compare o3-mini against o3-mini-high to see the effect of the `reasoning_effort` parameter but since o3-mini was such a crappy model anyway it was hard to justify the effort.

  

Model

Coefficient

Cost ($/Mt)

Claude 4 Sonnet

+0.02

15

Gemini 2.5 Pro

+0.02

10

Gemini 2.5 Flash

+0.02

0.7

GPT-5 Chat (baseline)

0.00

10

Grok 4

\-0.01

15

On the one hand, it’s a little odd that the performance of Claude 4 Sonnet dropped. On the other hand, I calibrated the prompt using Claude 4 Sonnet against 9:05, so by adding more games we are effectively diluting the training set within the test set; we probably _should_ expect a performance drop at that point.

Noting the cost column, Gemini 2.5 Flash is a clear winner for running text adventures. It’s also fast compared to the others.

## Evaluating score variation

Given that I’ve already sunk some money into this article series, and a few additional sessions with Gemini 2.5 Flash cannot hurt that much, let’s splurge and do that thing we wanted to do in the first place: run the same model against the same game a few times to figure out the size of the sampling error. All of the scores in the table below comes from Gemini 2.5 Flash. The first column is the standard deviation of the remaining columns.

       

Game

St. dev.

Run 1

Run 2

Run 3

Run 4

Run 5

Run 6

9:05

14 %pt

73 %

86 %

86 %

80 %

53 %

60 %

Lockout

11 %pt

30 %

46 %

46 %

38 %

23 %

23 %

Dreamhold

10 %pt

53 %

40 %

46 %

46 %

53 %

26 %

Lost Pig

3 %pt

46 %

40 %

40 %

40 %

46 %

40 %

For a Change

6 %pt

16 %

11 %

16 %

5 %

0 %

11 %

Plundered Hearts

4 %pt

19 %

19 %

19 %

23 %

28 %

28 %

So Far

32 %pt

14 %

57 %

71 %

71 %

71 %

0 %

In case it is not obvious, this is not so much an evalutaion of Gemini 2.5 Flash as it is a judgment of the quality of the testing protocol. It is clear, for example, that using _So Far_ to evaluate llms is a mistake: the same model has large variation between runs, and the difference between runs of different models is not so large. It would be more informative to replace the run of _So Far_ with another run of one of the other games – maybe _Plundered Hearts_ or _Lost Pig_, which start out more linearly.88 _For a Change_ might look like a good game for evaluation, but I think that’s a mistake. It’s not that the model makes consistent progress, but that it fails to make almost any progress at all, thanks to how open the game is right from the gate.

## Conclusions

I’m not sure what conclusions to draw from this article series.

*   [We can drive z-code text adventures through Perl](https://entropicthoughts.com/interacting-with-text-adventures-through-perl.html), which lets us connect it to an llm in a controlled way. It turned out more complicated than one would think, but definitely doable.
*   llms are still not great at playing text adventures. [Giving them leading questions to keep them on track helps a lot](https://entropicthoughts.com/getting-an-llm-to-play-text-adventures.html). Giving them hints helps them surprisingly little.
*   The variation in how much they accomplish can be large for some games with lots of distracting details, such as _Lockout_ and _So Far_. The games that are easiest to evaluate with are those with a relatively linear beginning, such as _Lost Pig_ and _Plundered Hearts_.
*   There is one cheap model that is about as good as llm models get at playing text adventures: Gemini 2.5 Flash. Many of the other cheap models might have performance worse than gpt\-5 Chat, and probably also worse than Gemini 2.5 Flash. Claude 4 Sonnet might seem like the best model if costs be damned, but that is probably because the prompt was calibrated against Claude 4 Sonnet.
*   Running llms in agentic type applications really burns through api credits like nothing else. I’d really like to complement this analysis with the “how many turns does the model need to get to point X” test, but I cannot motivate spending the money for it.