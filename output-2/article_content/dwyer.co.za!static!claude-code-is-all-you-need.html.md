---
title: "Claude Code Is All You Need"
lang: "en"
---

# Claude Code Is All You Need

## Claude Code  
Is All You  
Need

How I use Claude Code for work, fun, and as a text editor

![Claude Code](https://dwyer.co.za/static/img/claude-code-header.png)

I installed Claude Code in June. I'd tried Cursor and Cline and Zed and a few others, but all of them felt clunky to me because I'm used to doing nearly everything in vanilla vim and my terminal. Claude Code was the first tool I tried that felt like it fit into my workflows perfectly rather than needing me to adapt to new tools.

It also worked really, really well.

I quickly cancelled my GPT subscription and put the $20/month towards Anthropic instead. Losing GPT advanced voice mode and dealing with the extra UI lag and lack of polish in Claude Desktop and Mobile apps was a bit of an adjustment to make but the terminal tool was fun enough that I didn't care.

Within a few days I'd upgraded to the $100/month MAX plan to try out Opus and to stop hitting limits.

Here's a description of some of the things I've used it for so far. Mainly fun stuff while I figure out how to use it, but I'm starting to use it more and more for 'real' work stuff too.

![Autonomous startup demo](https://dwyer.co.za/static/img/micromonitor.png)

![SmartSplit demo](https://dwyer.co.za/static/img/smartsplit-php-demo.png)

![Poster maker demo](https://dwyer.co.za/static/img/poster-maker.png)

![HN plugin demo](https://dwyer.co.za/static/img/hn-plugin-demo.png)

![AWTP project](https://dwyer.co.za/static/img/awtp.png)

![Bank renaming tool](https://dwyer.co.za/static/img/bank-statements.png)

Some projects include an experimental 'autonomous startup builder', a (one shot) SplitWise replacement, an AI poster maker, a browser plugin to rate HN comments, a basic trello alternative, and some well organized bank statements

I'll describe most of these in more detail below but my main takeaways from the last few weeks are:

1) Have faith (always run it with 'dangerously skip permissions', even on important resources like your production server and your main dev machine. If you're from infosec, you might want to stop reading now—the rest of this article isn't going to make you any happier. Keep your medication close at hand if you decide to continue).

2) Give it a lot of input. The more input you give it, the better its output is. It's a magic tool, but you'd still better be damn good at communicating, either by typing thousands of words into text files or the interactive window, or using TTS (I haven't tried this because I hate the sound of my own voice, but others have reported great results).

3) It's surprisingly good at UI design given that it's mainly a text model.

[

## #Let's vibe code  
some CRUD

](#vibe-code)

Let's try some vibe coding.

**Aside:** The definition of vibe coding is still in flux, but to me it means creating software without looking at or editing code. You don't really care what languages or frameworks are used under the hood and develop the code only by chatting with a model.

We're going to put Claude Code through its paces by developing a basic SplitWise clone. A lot of people use Trello or a Todo list as the basic example of a CRUD app. I like using Splitwise because it's simple enough but it's a bit less cliched and probably not as deeply embedded in the models themselves.

Building a basic splitwise clone is still mainly 'regurgitation' from some people's point of view, but it has some interesting edge cases that people and models tend to get wrong. Specifically around inviting new users, but letting previous users already start adding expenses and assigning them to users with a pending invitation.

The simplest form of vibe coding is 'one-shot vibe coding' where you want the model to generate a fully working application after only a single prompt, without needing to give it any further inputs about what to fix, add, remove or change.

I cheated a bit because the prompt I used to one-shot this is based a bit on earlier attempts where the model did things that I didn't want, but the app shown below and at [smartsplit.verysmall.site](https://smartsplit.verysmall.site/) is the output of `claude -p "Read the SPEC.md file and implement it"` My SPEC.md file is about 500 words (shown in full a bit later).

![Working Smartsplit PHP demo](https://dwyer.co.za/static/img/smartsplit-php-demo.png)

Depending on how much you've been using LLMs for coding in the last few weeks or months, you'll probably either be surprised or unimpressed that we can get a fully working CRUD application with moderately complicated functionality in one prompt. You can see in the screenshot above that it has some nice touches like filling in names automatically for registered users, but falling back to their email address for non-registered ones.

I haven't extensively tested it, but the few cases I tried and spot checked worked flawlessly.

If you're surprised that it works this well, then you should know that a) these models are still inconsistent — they can perform wildly differently based on the same or similar inputs, and b) they're very sensitive to the quality and quantity of input.

For example, here's a version that's completely broken, with not even basic registration working. The prompt I used for this version was nearly identical, but contained a bit less guidance about what technology stack to use, so the model decided to go overboard and overcomplicate everything to the point where it couldn't even build basic functionality.

![Failed SmartSplit JavaScript version](https://dwyer.co.za/static/img/smartsplit-js-fail.png)

[

## #A tale of two vibe-coded codebases

](#tale-two-codebases)

Let's take a look at these two projects and the prompt that created them. The working version is a 900 line index.php file that contains the entire app. The broken version is a NodeJS project split into a client and a server. It's not much longer in terms of lines of code - about a 1000 lines of non-dependency code split up over 15 files. But after you run `npm i` on the broken version it pulls in 500MB (!!) of dependencies.

![SmartSplit project structure comparison](https://dwyer.co.za/static/img/smartsplit-tree.png)

Here's the full SPEC.md. This prompt I gave Claude Code is a SPEC.md file. It's nearly the same in both cases, except for the PHP one I tell it to keep things simple, stay away from frameworks, and just write raw SQL. In the broken version, I let it do whatever it wants.

smartsplit-php \[master+\] $ cat SPEC.md
SmartSplit is a basic CRUD application like SplitWise that lets users split expenses and figure out who needs to pay what to who.

Specifically it has the following features

\* A user can sign up with a name, email address, and password
\* A user can create a new SmartSplit and give it a name
\* A user can add expenses which have a name, an optional description, and an amount
\* When adding an expense, a user can specify who paid for it, and who it should be split with
\* IMPORTANT: a user can specify that other users are the person who paid, not only the logged in user
\* IMPORTANT A user can add others users as the payer or as people to split with even if they haven't joined yet
\* For users who haven't joined yet, the user can select them by the invited email address
\* Invites are not sent by email, there is no email. THey're just used for unique usernames to manage access
\* Once they've joined and added their name, the name should be shown everywhere instead of the email address
\* When adding a new expense, the default is that it's split between all users (joined and invited)
\* The adder can remove some users if some of them did not take part in that expense
\* All splits are always even for simplicity, divided equally between all people specified for that expense
\* A user can invite another user to a SmartSplit by specifying their email address.
\* Each SmartSplit gets a unique 8-digit alphanumeric code that makes easy to share URLs
\* Any user can create a new smartsplit, or join an existing one if they're logged in with an email address that was invited
\* Even if that user doesn't yet have an aaccount on SmartSplit, they'll have access to any SmartSplits they're added to after signing up (This bit is important). If the invitee has added their email address, they should have access automatically.
\* Any user can add, remove, or edit any expenses within a SmartSplit that they have access to
\* Any user can press 'Tally up' which should calculate who needs to make what payments to who to split everything

## Implementation details

\* Email addresses are usernames, all registration and login is done with only an email and password
\* Passwords are hashed but no extra secrutiy like length or weak passwords or confirmed passwords is applied
\* Once a user has registered, they are automatically logged in
\* The login and register flow is the same, but the user is registered if they don't have an account and logged in if they do

\## Techncial details

\* Use a single index.php script for the entire app.
\* SQLite for all database functionality.
\* No frameworks, just vanilla javascript and css
\* No ORMs, use raw SQL
\* use a clean minimalist elegant design that's mobile responsive

Those last five bullet points are the only difference between the two prompts, so in some sense they represent a transformation of 500MB of broken code into 30KB of working code.

Yes, it's a toy example and some people will say that the JavaScript one scales better or something. I'm not here to fight. I hate PHP too, but I'm using it more often for fully vibe coded apps because LLMs are very good at it. Frameworks and abstractions are for humans in the end of the day, not robots, and often they get in the way of Vibecoding instead of being helpful.

![Levels.io tweet about simple tech stacks](https://dwyer.co.za/static/img/levels-simple.png)

[@levelsio on keeping things simple](https://x.com/levelsio/status/1945125163793609032)

[

## #Building an  
Autonomous Startup

](#autonomous-startup)

The thing about Claude Code is that it isn't really a magic model. It's still using Sonnet or Opus under the hood, which are great, but they're not going to do the things that Claude Code can do. Claude Code's magic is like a magician's trick—it looks incredible, but it's surprisingly simple once you see how it's done.

I've always told people that coding is just conditional logic and looping (which is just conditional logic). So if you want to be a programmer, learn what an if statement is and build stuff.

It's an exaggeration but it's also kind of true. And Claude Code demonstrates this well. What makes it work much better than other tools I've tried seems to be a clever but simple combination of looping and conditionals, repeated calls to an LLM with context-specific instructions. This lets it run in a useful loop with limited human input between prompts.

[

## #Giving a root VPS to a robot and saying 'go fetch'

](#root-vps)

The first thing I thought of doing was extending that loop—maybe infinitely? How far could Claude Code go if it was given a few resources, like a root VPS, and some minimal instructions to never terminate and to just go forever?

![Micromonitor startup](https://dwyer.co.za/static/img/micromonitor.png)

Spoilers: this is what it built. You can visit the startup it built at [claude.dwyer.co.za](https://claude.dwyer.co.za/) or see the GitHub project at [github.com/sixhobbits/claude-experiments](https://github.com/sixhobbits/claude-experiments).

I fired up a cheap VPS on Hetzner, installed and authenticated Claude Code and messed around for a while trying to get it to write its own prompt about building an autonomous startup and its own looping logic to keep running forever without my input.

I had some issues getting it to understand that it wasn't meant to terminate, so I instead told it to write a basic bash script that calls claude with the `-p` flag and "please continue" whenever it detects its not running.

Here's the script:

![Claude monitoring](https://dwyer.co.za/static/img/monitor-claude.png)

**Aside:** I hit a small snag where Anthropic decides that running Claude as root with --dangerously-skip-permissions / yolo-mode is not allowed. You can get past this dumb nanny-state stuff by running:

`export IS_SANDBOX=1 && claude --dangerously-skip-permissions`

_Not financial advice_

It wrote its own prompt ([link](https://github.com/sixhobbits/claude-experiments/blob/main/CLAUDE.md)) (I can't remember the exact prompt I gave it to write this file, but it was a lot shorter and just outlined the basic goals of building an autonomous startup), [evaluated a bunch of startup ideas](https://github.com/sixhobbits/claude-experiments/blob/main/IDEAS.md), rated them, and got to work.

I watched it code for a while by looking at the new commits coming through to GitHub. I realised I still needed a way to steer it a bit as it was coding without giving me any way to run the app. I added the idea of a HUMAN\_INPUT file which it needs to check on each loop, and told it to make sure the app was available and working before continuing with more feature development.

The idea it came up with (server monitoring) doesn't make any sense at all and it never realised it. It's a web app, so the only server it can monitor is the one it's running on, but from the copy it seems to think it's a SaaS tool you can sign up to and monitor your own servers. You can't.

BUT this is still seriously impressive stuff. It configured a fully working full stack web application, including Nginx, certificates, etc etc. It's doing real (if misguided) development work, with nearly no input from me at all.

**Aside:** Most people I know would criticize this in the same way that AI has always been criticized. "It's not real bro, it's just pattern matching. It's seen stuff like that before. It's not even working properly. An intern could do that with a bit of time."

The thing about these criticisms is I've been hearing them since I got into character-based neural networks in 2015. The criticisms never change, it's just the line that moves.

**AI (noun)** – something that can do whatever humans can do, but AI can't do

Or

**AI (noun)** – something that doesn't possess abstract human qualities like 'consciousness', 'creativity', or 'a soul' – anything about humans that we can't make any falsifiable claims about.

Whatever, I don't want to get into the debate too much here, but a) I am impressed. b) I would never have predicted an artificial system that could do this 10 years ago or even 6 months ago, and c) anyone else who claims otherwise is likely lying or has ulterior motives. Have a nice day.

[

## #Hitting a Snag: the model builders are also the police now

](#hitting-snag)

Most of the time I could interact with my startup builder just by:

*   Seeing the changes it made to the production website
*   Seeing the outputs it added to GitHub in the various note files and what human help it asked for
*   Adding stuff to HUMAN\_INPUT.md

I never needed to SSH into the VPS until it stopped working. After 6 hours of no commits I had to login to check what was happening:

\[Fri 25 Jul 2025 02:29:41 AM UTC\] Starting Claude process...
API Error: Claude Code is unable to respond to this request,
which appears to violate our Usage Policy
(https://www.anthropic.com/legal/aup). Please double press esc
to edit your last message or start a new session for Claude Code
to assist with a different task.
\[Fri 25 Jul 2025 02:29:47 AM UTC\] Claude process exited with
status: 1
Waiting 3 hours before restart..

Uh oh. We're getting blocked again and I've heard Anthropic has a reputation for shutting down even paid accounts with very few or no warnings.

I read the User policy and saw that my recent inputs telling it to go ahead and market the startup to get users had probably tripped some big brother switch. The user policy (which obviously I had also read before when I signed up. I always read all small print before using software and you should too. But somehow I had forgotten this bit) states that automatically published content needs a human-in-the-loop and Claude was trying to promote the startup on Hackernews without my sign off. (I'm not sure if it would have the motivation or capability to actually go create an HN account and start posting, but it wasn't willing to try.)

![Anthropic usage policy](https://dwyer.co.za/static/img/aup-human.png)

So I tweaked the prompt a bit to say that it must follow those regulations, and it needs to ask me to approve and post stuff instead of trying to do it itself.

Then I posted its stuff to [Hacker News](https://news.ycombinator.com/item?id=44689210) and Reddit. Luckily I didn't get banned by either for spamming but I did get ignored by both.

I watched the autonomous startup builder a bit more. It started talking a lot about user acquisition and conversion metrics, which I think were mainly hallucinated though it was taking some stuff from the nginx logs and the database.

It got lost trying to monetize through a free trial and social proof stuff, which was directionally correct even if completely non-sensical in context and then decided to turn it off so I could save my (still limited, even under the max plan) usage for some more useful stuff.

The project has 100 commits, so if you want to see exactly what it did, you can take a look at [each of those](https://github.com/sixhobbits/claude-experiments/commits/main/).

(More in a later section, but it's also my text editor. Look at me writing this article in Claude Code.)

![Writing in Claude Code](https://dwyer.co.za/static/img/editor.png)

[

## #Migrating a Real  
Production Project

](#production-migration)

The first opportunity I had to try Claude Code on something where the stakes were a bit higher was when I got a DM from my friend [Nic](http://n1c.dev/) on Slack.

> "You have any luck with a place to host Sboj?"

I'd recently taken over the ZATech.co.za Slack community from Nic. A related project was Sboj - a reverse job board (squint at the name a bit) that was integrated into the Slack community for recruitment.

[![ZATech Slack community](https://dwyer.co.za/static/img/zatech.png)](https://zatech.co.za/) [![Sboj reverse job board](https://dwyer.co.za/static/img/sboj.png)](https://sboj.dev/)

[ZATech](https://zatech.co.za/) and [Sboj](https://sboj.dev/), two projects I'd taken over and was battling to find the time to give them the attention they deserved.

It's a Laravel/PHP app with MySQL and a bunch of other helper stuff that I had little-to-no familiarity with (my choice of poison is usually Python and Postgres), and it was running on an expensive hosting service that was overkill for the amount of traffic and users.

I wanted to migrate it to my standard set up of a cheap hetzner VPS with nginx and lets encrypt, but Nic had been the founder and solo dev of this project so it didn't have a detailed README of how someone else could get started with it, and I didn't have the time to go spelunking into this code base and figure out all the dependencies and set up steps.

Claude Code? Yes please.

Because this isn't an experiment anymore we need to be a bit more careful. A safe step was to clone the code base locally and ask Claude to generate a README file of dependencies and set up instructions.

![Generated README](https://dwyer.co.za/static/img/readme.png)

It was great at analysing the code base and telling me about the dependencies that I need to check I have access to.

It listed things I expected (like some worker queue stuff) and stuff I didn't (like Cloudflare Turnstyle that I'd never even heard of).

I spot checked the dependencies it mentioned and the rest of the README. It seemed accurate enough, so I decided Claude Code had earned the right to try actually set up and run this project. Once again, my starting point was a brand new VPS.

I manually installed and authorized Claude, cloned the repo, and got a database dump file. Then I fired up Claude and told it to get started.

`lfg` I said.

Command not found. Oh yeah, VPS, no shortcuts. `export IS_SANDBOX=1 && claude --dangerously-skip-permissions` it is.

It set up everything I needed, and got the app running at a temporary domain. In the meantime I had to do some old-fashioned non-AI work in the background getting access to the various accounts and switching 2FA to mine.

It had a few issues restoring the database and I was glad I was watching more closely now as it tried to manually create new SQL dump files that were only excerpts of the actual dump I'd given it to get around not having the correct permissions. After telling it to rather just give itself super admin permissions on the SQL database and restoring the dump from there, it was fine.

**Aside:** It _did_ drop the soon-to-be production database once when I really wasn't expecting it to and it was not the appropriate thing to do based on what it was trying to do. Remember before when I said you needed faith? That also means expecting stuff like this to happen and forgiving, forgetting and moving on instead of trying to hype up the internet and the media about ['AI GOING ROGUE'](https://www.reddit.com/r/OpenAI/comments/1m4lqvh/replit_ai_went_rogue_deleted_a_companys_entire/).

I haven't done this migration manually so I have no idea how much time I saved, but I'd guess at least 16-32 hours of learning enough about a new stack to get everything running and have confidence that it was doing what I thought it was doing.

I certainly saved a lot of time in leaning on Claude Code to find relevant logs, debug Turnstyle errors, turn off Turnstyle temporarily while we figured out how to migrate a Cloudflare account, and starting up the Laravel worker processes to do the background analytics stuff. It also migrated the email sending to Resend and then when I hit the 100 emails/day free limit, it was another easy migration to Brevo which offers 300 emails/day for free. (If you're hiring technical people and are able to hire from South Africa, check out Sboj.dev, we've got some great talent and hopefully a bunch of upgrades and QOL improvements coming to the platform soon).

[

## #You can just build things

](#build-things)

These are only a few things I've built with Claude Code since using it. Most of them are experimental and I've read some reports of it not doing as well on massive real-world code bases, but from what I've seen I'd be surprised it wasn't still useful in those contexts given enough guidance. I'm still surprised by how much better it is as a tool when given a lot of context and input. Here are a few other toy projects I've had it spit out - all things that I've wanted to build for months or years but never found the time. Now you can do stuff like this in a few minutes or hours instead of days or weeks.

### Building a HackerNews comment ranker plugin

I've often been annoyed by comments on HackerNews that are not at all about the article they're commenting on. "Bitcoin adopts a new FlibbityGippity Protocol and can now handle 2.3 transactions per day" and someone will comment that all Crypto projects are scams or something. Note that I don't care about the quality of the comment, or whether or not I agree with it, but I'd wanted a visual way to skip over the 'noise' comments that aren't actually about the article at all.

I tried to build this before but got distracted by more important stuff, so I figured I'd start over with Claude Code.

![HackerNews comment ranking plugin demo](https://dwyer.co.za/static/img/hn-plugin-demo.png)

It took a few tries before it could actually display the badges correctly within HN's (pretty simple) HTML structure, but after a few rounds of 'no try again' or 'add more debugging so I can paste the errors to you', it created almost exactly what I had envisioned.

I was surprised by how good it looked (much better than my normal hacky frontends), and the details it had added unprompted (like the really nice settings page, even with a nod to the HN orange theme).

![HackerNews plugin settings page](https://dwyer.co.za/static/img/hn-plugin-settings.png)

The actual ranking (which I'm using OpenAI for, not Anthropic) is not that good. It could probably be improved with a better prompt and some more examples of what I think is a '1' comment or a '5' comment, but it works and looks at least directionally accurate so far.

### Building Poster Maker - A Minimal Canva Replacement

AI is getting good at graphic design, and I knew people who were using it to generate basic posters. They liked that the AI could choose good background images, and generally make things look nice with well-sized fonts etc, but they were frustrated that the AI was still only 80% good at generating images of text, and often had spelling errors or other artifacts.

I was going to tell them to use Canva or Slides.new or another alternative. I tried them out so I could do a quick tutorial on how to use them and realised they were all kinda bad. Either enshittified to death, or lacking the basic AI features, or too complicated for non-technical people to use.

LFG!

This was the project that felt a bit more like engineering and less like vibe coding than the others. I knew what I wanted: a really simple interface to combine images and text and get an A4 PDF out. I'd tried to build something like this before and looked at different PDF creation libraries, HTML→PDF flows, and seen that it's not the easiest problem to solve.

Last time I solved a similar problem (in 2018) [I ended up hacking in Google Docs](https://www.codementor.io/@garethdwyer/create-pdf-files-from-templates-with-python-and-google-scripts-p63kal1vb) to create A4 PDFs, but that was more of a templating problem and Google Docs isn't great for layout stuff.

So I built [posters.dwyer.co.za](https://posters.dwyer.co.za/) - it lets you generate the background image with AI (I used Claude Code to build everything, but I told it to use GPT for image generation as that's what I'd used before and I think it's better? I don't even know if Anthropic has image generation APIs to be honest and it seemed easier to just use what I knew).

![Poster Maker interface](https://dwyer.co.za/static/img/poster-maker.png)

**Aside:** Another small snag, it seems like OpenAI blocks Anthropic crawlers so Claude couldn't go read the OpenAI API docs and figure out how to image gen. I had to save the file locally and tell it to reference that.

This project took a few hours of back and forth. I was really impressed with some of Claude's UI knowledge (it one shotted the font selection when I told it what I wanted) and also saw the limitations in other aspects (it kept overlaying elements in a very un-userfriendly way, sidebar would hide and show and move everything around, it clearly has no idea what it's like to be a human and use something like this).

But after telling it exactly where to put elements and what they should do, I got more or less exactly what I had envisioned. I was surprised at how well the PDF export worked after the 6th or 7th attempt of blank files or cut off files - now it seems really great at giving me a PDF that is exactly like the preview version which for anyone not in tech seems like a really basic piece of functionality and anyone who has actually tried to do it before knows is like the XKCD bird problem:

[![XKCD: Tasks](https://imgs.xkcd.com/comics/tasks.png)](https://xkcd.com/1425/)

XKCD #1425: Why seemingly simple tasks can be surprisingly hard for computers

### Doing admin with Claude Code

This isn't really a project I built, but I'm using Claude Code more and more to do non-coding related tasks. I needed to upload bank statements for my accountant, but my (shitty) South African banks don't name the files well. I can download each month from the web app, but it calls them all "Unknown (5)" or whatever with no extension so it's a pain to go and name them correctly.

I asked Claude to rename all the files and I could go do something else while it churned away, reading the files and figuring out the correct names.

I then took it a step further and told it to merge them all into a single CSV file (which also involved extracting random header tabs off the badly formatted XLSX files that my bank provides), and classifying all expenses into broad and specific categories. I told it a few things like the roles of specific people in the team and I think it one-shotted that too. I'm not going to fire my bookkeepers yet, but if I were a bookkeeper I'd definitely make sure to be upskilling with AI tooling right now.

![Bank statements renaming tool](https://dwyer.co.za/static/img/bank-statements.png)

#### Using Claude Code as my Text Editor

I'm a die-hard vanilla vim user for all writing, coding, configuration and anything else that fits. I've tried nearly every IDE and text editor out there, and I was certainly happy to have a real IDE when I was pushing production Java for AWS, but vim is what I've always come back to.

Switching to Claude Code has opened a lot of new design possibilities. Before (did I mention I suck at front end coding), I was restricted to whatever output was produced by static site generators or pandoc templates. Now I can just tell Claude to write an article (like the one you're currently reading) and give it some pointers regarding how I want it to look, and it can generate any custom HTML and CSS and JavaScript I want on the fly.

![This article being written](https://dwyer.co.za/static/img/this-article.png)

I wrote this entire article in the Claude Code interactive window. The TUI flash (which I've read is a problem with the underlying library that's hard to fix) is really annoying, but it's a really nice writing flow to type stream of consciousness stuff into an editor, mixing text I want in the article, and instructions to Claude, and having it fix up the typos, do the formatting, and build the UX on the fly.

Nearly every word, choice of phrase, and the overall structure is still manually written by me, a human. I'm still on the fence about whether I'm just stuck in the old way by preferring to hand-craft my words, or if models are generally not good at writing.

When I read answers to questions I've asked LLMs, or the long research-style reports they create, the writing style is pretty good and I've probably read more LLM-generated words than human-generated words in the last few months.

But whenever I try to get them to produce the output I want to produce, they fail hard unless I spend as much effort on the prompt as I would have on writing the output myself.

Simon Willison calls them ['word calculators'](https://simonwillison.net/2023/Apr/2/calculator-for-words/) and this is still mainly how I think of them. Great at moving content around (if you want a summary of this now very long article, an LLM will probably do a great job) but pretty useless at generating new stuff.

Maybe us writers will be around for a while still - let's see, and lfg.