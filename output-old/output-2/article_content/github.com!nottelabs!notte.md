---
title: "GitHub - nottelabs/notte: 🔥 Reliable Browser AI agents (YC S25)"
byline: "nottelabs"
siteName: "GitHub"
lang: "en"
---

# GitHub - nottelabs/notte: 🔥 Reliable Browser AI agents (YC S25)

## Rapidly build reliable web automation agents

[](#rapidly-build-reliable-web-automation-agents)

[![Notte Logo](https://github.com/nottelabs/notte/raw/main/docs/logo/bgd.png)](https://github.com/nottelabs/notte/blob/main/docs/logo/bgd.png)

[![GitHub stars](https://camo.githubusercontent.com/de061b770d8fe4085a2a2d8b308c31d350416a7673895b03c780c2bffded3509/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f6e6f7474656c6162732f6e6f7474653f7374796c653d736f6369616c)](https://github.com/nottelabs/notte/stargazers) [![License: SSPL-1.0](https://camo.githubusercontent.com/85eba832602a0d4cbad7914a0e44a20d91f2d59671127a3b9abd090baf0cc7cb/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d5353504c253230312e302d626c75652e737667)](https://spdx.org/licenses/SSPL-1.0.html) [![Python 3.11+](https://camo.githubusercontent.com/1e5852941fcfe768cdba62e1ef6b1db0d9c87c4f9017432c39ad06853f6d4df9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2d332e31312b2d626c75652e737667)](https://www.python.org/downloads/) [![PyPI version](https://camo.githubusercontent.com/d243e132b3ff202aa1c308a871fd1cea713f564e88cfc2ba64098824706aa4a1/68747470733a2f2f696d672e736869656c64732e696f2f707970692f762f6e6f7474653f636f6c6f723d626c7565)](https://pypi.org/project/notte/) [![PyPI Downloads](https://camo.githubusercontent.com/64ded76d1d75ced9dd2398b5b484928cff2460a9fe9455fff5491bcc860a7f74/68747470733a2f2f7374617469632e706570792e746563682f62616467652f6e6f7474653f636f6c6f723d626c7565)](https://pepy.tech/projects/notte)

* * *

## What is Notte?

[](#what-is-notte)

Notte provides all the essential tools for building and deploying AI agents that interact seamlessly with the web. Our full-stack framework combines AI agents with traditional scripting for maximum efficiency - letting you script deterministic parts and use AI only when needed, cutting costs by 50%+ while improving reliability. We allow you to develop, deploy, and scale your own agents and web automations, all with a single API. Read more in our documentation [here](https://docs.notte.cc/) 🔥

**Opensource Core:**

*   **[Run web agents](#using-python-sdk-recommended)** → Give AI agents natural language tasks to complete on websites
*   **[Structured Output](#structured-output)** → Get data in your exact format with Pydantic models
*   **[Site Interactions](#scraping)** → Observe website states, scrape data and execute actions using Playwright compatible primitives and natural language commands

**API service (Recommended)**

*   **[Stealth Browser Sessions](#session-features)** → Browser instances with built-in CAPTCHA solving, proxies, and anti-detection
*   **[Hybrid Workflows](#workflows)** → Combine scripting and AI agents to reduce costs and improve reliability
*   **[Secrets Vaults](#agent-vault)** → Enterprise-grade credential management to store emails, passwords, MFA tokens, SSO, etc.
*   **[Digital Personas](#agent-persona)** → Create digital identities with unique emails, phones, and automated 2FA for account creation workflows

## Quickstart

[](#quickstart)

    pip install notte
    patchright install --with-deps chromium
    

### Run in local mode

[](#run-in-local-mode)

Use the following script to spinup an agent using opensource features (you'll need your own LLM API keys):

import notte
from dotenv import load\_dotenv
load\_dotenv()

with notte.Session(headless\=False) as session:
    agent \= notte.Agent(session\=session, reasoning\_model\='gemini/gemini-2.5-flash', max\_steps\=30)
    response \= agent.run(task\="doom scroll cat memes on google images")

### Using Python SDK (Recommended)

[](#using-python-sdk-recommended)

We also provide an effortless API that hosts the browser sessions for you - and provide plenty of premium features. To run the agent you'll need to first sign up on the [Notte Console](https://console.notte.cc/) and create a free Notte API key 🔑

from notte\_sdk import NotteClient

cli \= NotteClient(api\_key\="your-api-key")

with cli.Session(headless\=False) as session:
    agent \= cli.Agent(session\=session, reasoning\_model\='gemini/gemini-2.5-flash', max\_steps\=30)
    response \= agent.run(task\="doom scroll cat memes on google images")

Our setup allows you to experiment locally, then drop-in replace the import and prefix `notte` objects with `cli` to switch to SDK and get hosted browser sessions plus access to premium features!

## Benchmarks

[](#benchmarks)

Rank

Provider

Agent Self-Report

LLM Evaluation

Time per Task

Task Reliability

🏆

[Notte](https://github.com/nottelabs/notte)

**86.2%**

**79.0%**

**47s**

**96.6%**

2️⃣

[Browser-Use](https://github.com/browser-use/browser-use)

77.3%

60.2%

113s

83.3%

3️⃣

[Convergence](https://github.com/convergence-ai/proxy-lite)

38.4%

31.4%

83s

50%

Read the full story here: [https://github.com/nottelabs/open-operator-evals](https://github.com/nottelabs/open-operator-evals)

## Agent features

[](#agent-features)

## Structured output

[](#structured-output)

Structured output is a feature of the agent's run function that allows you to specify a Pydantic model as the `response_format` parameter. The agent will return data in the specified structure.

from notte\_sdk import NotteClient
from pydantic import BaseModel
from typing import List

class HackerNewsPost(BaseModel):
    title: str
    url: str
    points: int
    author: str
    comments\_count: int

class TopPosts(BaseModel):
    posts: List\[HackerNewsPost\]

cli \= NotteClient()
with cli.Session(headless\=False, browser\_type\="firefox") as session:
    agent \= cli.Agent(session\=session, reasoning\_model\='gemini/gemini-2.5-flash', max\_steps\=15)
    response \= agent.run(
        task\="Go to Hacker News (news.ycombinator.com) and extract the top 5 posts with their titles, URLs, points, authors, and comment counts.",
        response\_format\=TopPosts,
    )
print(response.answer)

## Agent vault

[](#agent-vault)

Vaults are tools you can attach to your Agent instance to securely store and manage credentials. The agent automatically uses these credentials when needed.

from notte\_sdk import NotteClient

cli \= NotteClient()

with cli.Vault() as vault, cli.Session(headless\=False) as session:
    vault.add\_credentials(
        url\="https://x.com",
        username\="your-email",
        password\="your-password",
    )
    agent \= cli.Agent(session\=session, vault\=vault, max\_steps\=10)
    response \= agent.run(
      task\="go to twitter; login and go to my messages",
    )
print(response.answer)

## Agent persona

[](#agent-persona)

Personas are tools you can attach to your Agent instance to provide digital identities with unique email addresses, phone numbers, and automated 2FA handling.

from notte\_sdk import NotteClient

cli \= NotteClient()

with cli.Persona(create\_phone\_number\=False) as persona:
    with cli.Session(browser\_type\="firefox", headless\=False) as session:
        agent \= cli.Agent(session\=session, persona\=persona, max\_steps\=15)
        response \= agent.run(
            task\="Open the Google form and RSVP yes with your name",
            url\="https://forms.google.com/your-form-url",
        )
print(response.answer)

## Session features

[](#session-features)

## Stealth

[](#stealth)

Stealth features include automatic CAPTCHA solving and proxy configuration to enhance automation reliability and anonymity.

from notte\_sdk import NotteClient
from notte\_sdk.types import NotteProxy, ExternalProxy

cli \= NotteClient()

\# Built-in proxies with CAPTCHA solving
with cli.Session(
    solve\_captchas\=True,
    proxies\=True,  \# US-based proxy
    browser\_type\="firefox",
    headless\=False
) as session:
    agent \= cli.Agent(session\=session, max\_steps\=5)
    response \= agent.run(
        task\="Try to solve the CAPTCHA using internal tools",
        url\="https://www.google.com/recaptcha/api2/demo"
    )

\# Custom proxy configuration
proxy\_settings \= ExternalProxy(
    server\="http://your-proxy-server:port",
    username\="your-username",
    password\="your-password",
)

with cli.Session(proxies\=\[proxy\_settings\]) as session:
    agent \= cli.Agent(session\=session, max\_steps\=5)
    response \= agent.run(task\="Navigate to a website")

## File download / upload

[](#file-download--upload)

File Storage allows you to upload files to a session and download files that agents retrieve during their work. Files are session-scoped and persist beyond the session lifecycle.

from notte\_sdk import NotteClient

cli \= NotteClient()
storage \= cli.FileStorage()

\# Upload files before agent execution
storage.upload("/path/to/document.pdf")

\# Create session with storage attached
with cli.Session(storage\=storage) as session:
    agent \= cli.Agent(session\=session, max\_steps\=5)
    response \= agent.run(
        task\="Upload the PDF document to the website and download the cat picture",
        url\="https://example.com/upload"
    )

\# Download files that the agent downloaded
downloaded\_files \= storage.list(type\="downloads")
for file\_name in downloaded\_files:
    storage.download(file\_name\=file\_name, local\_dir\="./results")

## Cookies / Auth Sessions

[](#cookies--auth-sessions)

Cookies provide a flexible way to authenticate your sessions. While we recommend using the secure vault for credential management, cookies offer an alternative approach for certain use cases.

from notte\_sdk import NotteClient
from notte\_sdk.types import Cookie

cli \= NotteClient()

\# Upload cookies for authentication
cookies \= \[
    Cookie(
        name\="sb-db-auth-token",
        value\="base64-cookie-value",
        domain\="github.com",
        path\="/",
        expires\=9778363203.913704,
        httpOnly\=False,
        secure\=False,
        sameSite\="Lax"
    )
\]

with cli.Session() as session:
    session.set\_cookies(cookies\=cookies)  \# or cookie\_file="path/to/cookies.json"
    
    agent \= cli.Agent(session\=session, max\_steps\=5)
    response \= agent.run(
        task\="go to nottelabs/notte get repo info",
    )
    
    \# Get cookies from the session
    cookies\_resp \= session.get\_cookies()

## CDP Browser compatibility

[](#cdp-browser-compatibility)

You can plug in any browser session provider you want and use our agent on top. Use external headless browser providers via CDP to benefit from Notte's agentic capabilities with any CDP-compatible browser.

from notte\_sdk import NotteClient

cli \= NotteClient()
cdp\_url \= "wss://your-external-cdp-url"

with cli.Session(cdp\_url\=cdp\_url) as session:
    agent \= cli.Agent(session\=session)
    response \= agent.run(task\="extract pricing plans from https://www.notte.cc/")

## Workflows

[](#workflows)

Notte's close compatibility with Playwright allows you to mix web automation primitives with agents for specific parts that require reasoning and adaptability. This hybrid approach cuts LLM costs and is much faster by using scripting for deterministic parts and agents only when needed.

from notte\_sdk import NotteClient
import time

cli \= NotteClient()

with cli.Session(headless\=False, perception\_type\="fast") as page:
    \# Script execution for deterministic navigation
    page.execute(type\="goto", value\="https://www.quince.com/women/organic-stretch-cotton-chino-short")
    page.observe()

    \# Agent for reasoning-based selection
    agent \= cli.Agent(session\=page)
    agent.run(task\="just select the ivory color in size 6 option")

    \# Script execution for deterministic actions
    page.execute(type\="click", selector\="internal:role=button\[name=\\"ADD TO CART\\"i\]")
    page.observe()
    page.execute(type\="click", selector\="internal:role=button\[name=\\"CHECKOUT\\"i\]")
    page.observe()
    time.sleep(5)

## Scraping

[](#scraping)

For fast data extraction, we provide a dedicated scraping endpoint that automatically creates and manages sessions. You can pass custom instructions for structured outputs and enable stealth mode.

from notte\_sdk import NotteClient
from pydantic import BaseModel

cli \= NotteClient()

\# Simple scraping
response \= cli.scrape(
    url\="https://notte.cc",
    scrape\_links\=True,
    only\_main\_content\=True
)

\# Structured scraping with custom instructions
class Article(BaseModel):
    title: str
    content: str
    date: str

response \= cli.scrape(
    url\="https://example.com/blog",
    response\_format\=Article,
    instructions\="Extract only the title, date and content of the articles"
)

Or directly with cURL

curl -X POST 'https://api.notte.cc/scrape' \\
  -H 'Authorization: Bearer <NOTTE-API-KEY>' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "url": "https://notte.cc",
    "only\_main\_content": false,
  }'

**Search:** We've built a cool demo of an LLM leveraging the scraping endpoint in an MCP server to make real-time search in an LLM chatbot - works like a charm! Available here: [https://search.notte.cc/](https://search.notte.cc/)

## License

[](#license)

This project is licensed under the Server Side Public License v1. See the [LICENSE](https://github.com/nottelabs/notte/blob/main/LICENSE) file for details.

## Citation

[](#citation)

If you use notte in your research or project, please cite:

@software{notte2025,
  author = {Pinto, Andrea and Giordano, Lucas and {nottelabs-team}},
  title = {Notte: Software suite for internet-native agentic systems},
  url = {https://github.com/nottelabs/notte},
  year = {2025},
  publisher = {GitHub},
  license = {SSPL-1.0}
  version = {1.4.4},
}

Copyright © 2025 Notte Labs, Inc.