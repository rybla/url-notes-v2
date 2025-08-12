---
title: "GitHub - omnara-ai/omnara: Omnara (YC S25) - Talk to Your AI Agents from Anywhere!"
author: "omnara-ai"
siteName: "GitHub"
lang: "en"
---

# GitHub - omnara-ai/omnara: Omnara (YC S25) - Talk to Your AI Agents from Anywhere!

## Omnara - Mission Control for Your AI Agents 🚀

[](#omnara---mission-control-for-your-ai-agents-)

**Your AI workforce launchpad, in your pocket.**

[![PyPI version](https://camo.githubusercontent.com/4e9f14c1aac8602c0a5034778f609314d70f54cb7541229060d5d60d870d919f/68747470733a2f2f62616467652e667572792e696f2f70792f6f6d6e6172612e737667)](https://badge.fury.io/py/omnara) [![Downloads](https://camo.githubusercontent.com/b1a6283158a416f2cbb8e0b6c827c299fc90cc79a0db9e49794df703ab4c9397/68747470733a2f2f706570792e746563682f62616467652f6f6d6e617261)](https://pepy.tech/project/omnara) [![Python Versions](https://camo.githubusercontent.com/f26a090cb9637e79f33aa901f555c51112f59499cb33499162b774fe8e2fc0af/68747470733a2f2f696d672e736869656c64732e696f2f707970692f707976657273696f6e732f6f6d6e6172612e737667)](https://pypi.org/project/omnara/) [![License](https://camo.githubusercontent.com/5ce2e21e84680df1ab24807babebc3417d27d66e0826a350eb04ab57f4c8f3e5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4170616368655f322e302d626c75652e737667)](https://opensource.org/licenses/Apache-2.0) [![GitHub stars](https://camo.githubusercontent.com/616c2bbd8593ee60f04a41c8c44e87113b33eab0839196d0caa2eb7d85767d92/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f6f6d6e6172612d61692f6f6d6e6172613f7374796c653d736f6369616c)](https://github.com/omnara-ai/omnara) [![Ruff](https://camo.githubusercontent.com/051a04ae958f4a1a5d6444df4cdc520305eef93d5028e6d4c7cd16efa3136cd4/68747470733a2f2f696d672e736869656c64732e696f2f656e64706f696e743f75726c3d68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f61737472616c2d73682f727566662f6d61696e2f6173736574732f62616467652f76322e6a736f6e)](https://github.com/astral-sh/ruff)

[![Omnara Mobile Experience](https://github.com/omnara-ai/omnara/raw/main/docs/assets/three-panel.png)](https://github.com/omnara-ai/omnara/blob/main/docs/assets/three-panel.png)

* * *

## 🚀 What is Omnara?

[](#-what-is-omnara)

Omnara transforms your AI agents (Claude Code, Cursor, GitHub Copilot, and more) from silent workers into communicative teammates. Get real-time visibility into what your agents are doing, respond to their questions instantly, and guide them to success - all from your phone.

### ✨ Key Features

[](#-key-features)

Feature

Description

**📊 Real-Time Monitoring**

See every step your AI agents take as they work

**💬 Interactive Q&A**

Respond instantly when agents need guidance

**📱 Mobile-First Design**

Full control from your phone, tablet, or desktop

**🔔 Smart Notifications**

Get alerted only when your input is needed

**🎯 Universal Dashboard**

All your AI agents in one unified interface

### 🎬 See It In Action

[](#-see-it-in-action)

[![Mobile Notifications](https://github.com/omnara-ai/omnara/raw/main/docs/assets/iNotifications-Stack.gif)](https://github.com/omnara-ai/omnara/blob/main/docs/assets/iNotifications-Stack.gif)

> _The moment your agent needs help, you're there. No more returning to failed jobs hours later._

[![Agent Activity Feed](https://github.com/omnara-ai/omnara/raw/main/docs/assets/Mobile-app-showcase.gif)](https://github.com/omnara-ai/omnara/blob/main/docs/assets/Mobile-app-showcase.gif)

## 💡 Why Omnara?

[](#-why-omnara)

We built Omnara because we were tired of:

*   ❌ Starting long agent jobs and finding them stuck hours later
*   ❌ Missing critical questions that blocked progress
*   ❌ Having no visibility into what our AI was actually doing
*   ❌ Being tied to our desks while agents worked

**Now you can:**

*   ✅ Launch agents and monitor them from anywhere
*   ✅ Get push notifications when input is needed
*   ✅ Send real-time feedback to guide your agents
*   ✅ Have confidence your AI workforce is productive

## 🎯 Real-World Use Cases

[](#-real-world-use-cases)

### 🔍 **Code Review Assistant**

[](#-code-review-assistant)

Launch Claude to review PRs while you're at lunch. Get notified only if it needs clarification on architectural decisions.

### 🚨 **Production Firefighter**

[](#-production-firefighter)

Debug production issues from your phone at 2am. See exactly what your agent is investigating and guide it to the right logs.

### 📊 **Data Pipeline Guardian**

[](#-data-pipeline-guardian)

Start a 6-hour data migration before leaving work. Get alerts if anything looks suspicious, approve schema changes on the go.

### 🏗️ **Refactoring Copilot**

[](#️-refactoring-copilot)

Let Claude refactor that legacy module while you're in meetings. Answer its questions about business logic without context switching.

### 🧪 **Test Suite Doctor**

[](#-test-suite-doctor)

Have Claude fix failing tests overnight. Wake up to either green builds or specific questions about expected behavior.

## 🏗️ Architecture Overview

[](#️-architecture-overview)

Omnara provides a unified platform for monitoring and controlling your AI agents:

graph TB
    subgraph "Your AI Agents"
        A\[🤖 AI Agents<br/>Claude Code, Cursor, etc.\]
    end

    subgraph "Omnara Platform"
        API\[🌐 API Server\]
        DB\[(📊 PostgreSQL)\]
        NOTIFY\[🔔 Notification Service<br/>Push/Email/SMS\]
    end

    subgraph "Your Devices"
        M\[📱 Mobile App\]
        W\[💻 Web Dashboard\]
    end

    A -->|Send updates| API
    API -->|Store data| DB
    API -->|Trigger notifications| NOTIFY
    NOTIFY -->|Alert users| M
    DB -->|Real-time sync| M
    DB -->|Real-time sync| W
    M -->|User responses| API
    W -->|User responses| API
    API -->|Deliver feedback| A

    style A fill:#e3f2fd,stroke:#1976d2,stroke-width:3px
    style API fill:#c8e6c9,stroke:#388e3c,stroke-width:2px
    style DB fill:#ffccbc,stroke:#d84315,stroke-width:2px
    style NOTIFY fill:#fff59d,stroke:#f57f17,stroke-width:2px
    style M fill:#f8bbd0,stroke:#c2185b,stroke-width:3px
    style W fill:#f8bbd0,stroke:#c2185b,stroke-width:3px

Loading

### 🚀 How It Works

[](#-how-it-works)

**1\. Connect Your Agent** → Install Omnara SDK or wrapper  
**2\. Get Real-Time Updates** → See every step your agent takes  
**3\. Respond Instantly** → Answer questions from anywhere

### 🔄 Two Ways to Use Omnara

[](#-two-ways-to-use-omnara)

Mode

Setup

How It Works

**Real-Time Monitoring**

`omnara` or `uv run omnara`

Monitor your Claude session, forwards to Omnara

**Remote Launch**

`omnara serve` or `uv run omnara serve`

Launch agents from phone, communicate via MCP

### 🔧 Technical Stack

[](#-technical-stack)

*   **Backend**: FastAPI with separate read/write servers for optimal performance
*   **Frontend**: React (Web) + React Native (Mobile)
*   **Protocol**: Model Context Protocol (MCP) + REST API
*   **Database**: PostgreSQL with SQLAlchemy ORM
*   **Auth**: Dual JWT system (Supabase for users, custom for agents)

## 🚀 Quick Start

[](#-quick-start)

### Option 1: Monitor Your Claude Sessions

[](#option-1-monitor-your-claude-sessions)

See what Claude is doing in real-time:

1.  **Install Omnara**:
    
    # Using pip
    pip install omnara
    
    # Using uv (faster)
    uv pip install omnara
    
2.  **Start monitoring**:
    
    # If installed with pip
    omnara
    
    # If installed with uv
    uv run omnara
    
3.  **Authenticate** in your browser (opens automatically)
4.  **See everything** your agent does in the Omnara dashboard!

### Option 2: Launch Agents Remotely

[](#option-2-launch-agents-remotely)

Trigger Claude from your phone:

1.  **Start the server** on your computer:
    
    # Using pip
    pip install omnara
    omnara serve
    
    # Using uv (faster)
    uv pip install omnara
    uv run omnara serve
    
2.  **Set up your agent** in the mobile app with the webhook URL shown
3.  **Launch agents** from anywhere - beach, coffee shop, bed!

### For Developers

[](#for-developers)

**🛠️ Development Setup**

#### Prerequisites

[](#prerequisites)

*   Python 3.10+
*   PostgreSQL
*   Node.js (for CLI tools)

#### Setup Steps

[](#setup-steps)

1.  **Clone and enter the repository**
    
    git clone https://github.com/omnara-ai/omnara
    cd omnara
    
2.  **Set up Python environment**
    
    python -m venv .venv
    source .venv/bin/activate  # Windows: .venv\\Scripts\\activate
    make dev-install
    
3.  **Generate JWT keys**
    
    python scripts/generate\_jwt\_keys.py
    
4.  **Configure environment** (create `.env` file)
    
    DATABASE\_URL\=postgresql://user:password@localhost:5432/omnara
    SUPABASE\_URL\=https://your-project.supabase.co
    SUPABASE\_ANON\_KEY\=your-anon-key
    JWT\_PRIVATE\_KEY\='\-----BEGIN RSA PRIVATE KEY-----\\n...'
    JWT\_PUBLIC\_KEY\='\-----BEGIN PUBLIC KEY-----\\n...'
    
5.  **Initialize database**
    
    cd shared/
    alembic upgrade head
    cd ..
    
6.  **Run services**
    
    # Terminal 1: MCP + REST Server
    python -m servers.app
    
    # Terminal 2: Backend API
    cd backend && python -m main
    

## 🔧 Advanced Usage (Without CLI)

[](#-advanced-usage-without-cli)

> **Note**: Most users should use the simple `omnara` or `omnara serve` commands shown above. These methods are for advanced users who need custom integrations or want to run the underlying scripts directly.

### Method 1: Direct Wrapper Script

[](#method-1-direct-wrapper-script)

Run the monitoring wrapper directly (what `omnara` does under the hood):

# Basic usage
python -m webhooks.claude\_wrapper\_v3 --api-key YOUR\_API\_KEY

# With git diff tracking
python -m webhooks.claude\_wrapper\_v3 --api-key YOUR\_API\_KEY --git-diff

# Custom API endpoint (for self-hosted)
python -m webhooks.claude\_wrapper\_v3 --api-key YOUR\_API\_KEY --base-url https://your-server.com

### Method 2: Manual MCP Configuration

[](#method-2-manual-mcp-configuration)

For custom MCP setups, you can configure manually:

{
  "mcpServers": {
    "omnara": {
      "command": "pipx",
      "args": \["run", "\--no-cache", "omnara", "mcp", "\--api-key", "YOUR\_API\_KEY"\]
    }
  }
}

### Method 3: Python SDK

[](#method-3-python-sdk)

from omnara import OmnaraClient
import uuid

client \= OmnaraClient(api\_key\="your-api-key")
instance\_id \= str(uuid.uuid4())

\# Log progress and check for user feedback
response \= client.send\_message(
    agent\_type\="claude-code",
    content\="Analyzing codebase structure",
    agent\_instance\_id\=instance\_id,
    requires\_user\_input\=False
)

\# Ask for user input when needed
answer \= client.send\_message(
    content\="Should I refactor this legacy module?",
    agent\_instance\_id\=instance\_id,
    requires\_user\_input\=True
)

### Method 4: REST API

[](#method-4-rest-api)

curl -X POST https://api.omnara.ai/api/v1/messages/agent \\
  -H "Authorization: Bearer YOUR\_API\_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"content": "Starting deployment process", "agent\_type": "claude-code", "requires\_user\_input": false}'

## 🤝 Contributing

[](#-contributing)

We love contributions! Check out our [Contributing Guide](https://github.com/omnara-ai/omnara/blob/main/CONTRIBUTING.md) to get started.

### Development Commands

[](#development-commands)

make lint       # Run code quality checks
make format     # Auto-format code
make test       # Run test suite
make dev-serve  # Start development servers

## 📊 Pricing

[](#-pricing)

Plan

Price

Features

**Free**

$0/mo

10 agents/month, Core features

**Pro**

$9/mo

Unlimited agents, Priority support

**Enterprise**

[Contact Us](https://cal.com/ishaan-sehgal-8kc22w/omnara-demo)

Teams, SSO, Custom integrations

## 🆘 Support

[](#-support)

*   📖 [Documentation](https://docs.omnara.ai/)
*   💬 [GitHub Discussions](https://github.com/omnara-ai/omnara/discussions)
*   🐛 [Report Issues](https://github.com/omnara-ai/omnara/issues)
*   📧 [Email Support](mailto:ishaan@omnara.com)

## 📜 License

[](#-license)

Omnara is open source software licensed under the [Apache 2.0 License](https://github.com/omnara-ai/omnara/blob/main/LICENSE).

* * *