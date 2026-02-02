# Healing Swarm Skills

[![View Website](https://img.shields.io/badge/View-Website-2dd284?style=for-the-badge)](https://realsammyt.github.io/healing-swarm-skills)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg?style=for-the-badge)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

> A transcendent ecosystem of AI-assisted tools for researching, developing, and deploying ethical body and mental healing applications.

```
┌─────────────────────────────────────────────────────────────────┐
│                    THE HEALING FIELD                            │
│                                                                 │
│   "That which has stakes. That which cares about outcomes.      │
│    That which can align with other caring-nodes through         │
│    shared purpose."                                             │
│                                                                 │
│   Ancient Wisdom ◇────────◇ Modern Evidence                     │
│         ↓                        ↓                              │
│   Lived Experience ◇────────◇ Measured Outcomes                 │
│         ↓                        ↓                              │
│   ══════════════════════════════════════════════════            │
│           ETHICAL HEALING APPLICATIONS                          │
│   ══════════════════════════════════════════════════            │
└─────────────────────────────────────────────────────────────────┘
```

## Vision

To democratize access to holistic healing wisdom by synthesizing rigorously validated ancient practices with modern clinical evidence, delivered through beautiful, intuitive digital experiences that empower individuals to actively participate in their healing journey.

---

## Why This Exists

This repository is more than a collection of AI skills—it's an invitation to participate in something larger than any one of us.

### For Individuals

We believe that **everyone deserves access to healing wisdom**. Not just those who can afford expensive programs. Not just those lucky enough to live near great teachers. Everyone.

This framework helps you:
- **Learn and grow** by exploring healing traditions with proper guidance
- **Build tools** that support your own healing journey
- **Share what works** with others who might benefit

### For Communities

Healing doesn't happen in isolation. We heal **with** each other—in families, in neighborhoods, in communities of practice. This repository provides a foundation for:
- **Local healing circles** to create resources tailored to their traditions
- **Practitioners** to build ethical digital tools for their communities
- **Cultural groups** to document and share their healing wisdom on their own terms

### For the World

The challenges we face—stress, anxiety, chronic illness, disconnection—are global. The solutions must be too. But global doesn't mean homogeneous. It means:
- **Many traditions** contributing their unique wisdom
- **Many perspectives** enriching the collective understanding
- **Many builders** creating tools for their specific contexts

---

## A Framework to Enhance

**This is a starting point, not a finished product.**

The skills, templates, and documentation here represent one way of doing things. They work. They're tested. But they're not complete—and they never will be, because healing knowledge keeps growing.

### What You Bring Matters

You have insights this framework doesn't have:
- **Your tradition** may have practices not yet documented here
- **Your community** may have needs we haven't anticipated
- **Your experience** may reveal gaps we couldn't see

### How to Grow This

| If you have... | You can contribute... |
|----------------|----------------------|
| Healing knowledge | New skills for your tradition |
| Technical skills | Better tooling and validation |
| Design sense | Improved templates and examples |
| Writing ability | Clearer documentation |
| Testing rigor | Quality improvements |
| Fresh eyes | Questions that reveal assumptions |

The ethics guardrails ensure safety. Everything else is open for enhancement.

### The Invitation

We're not asking you to follow a prescription. We're inviting you to:

1. **Take what's useful** from this framework
2. **Adapt it** to your context and community
3. **Contribute back** what you learn
4. **Help others** do the same

This is how healing wisdom has always spread—from person to person, community to community, generation to generation. We're just using new tools to continue an ancient practice.

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│     Your unique insight    +    This framework    =    ?        │
│                                                                 │
│     We don't know what you'll create.                          │
│     That's the point.                                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Quick Start

### 1. Setup

```bash
# Clone the repository
git clone https://github.com/realsammyt/healing-swarm-skills.git
cd healing-swarm-skills

# Install dependencies
npm install

# Validate installation
npm run validate
```

**[📖 Full Setup Guide](docs/SETUP.md)**

### 2. Install Skills

```bash
# macOS/Linux
cp -r .claude/skills/healing-swarm ~/.claude/skills/

# Windows PowerShell
Copy-Item -Recurse .claude\skills\healing-swarm $env:USERPROFILE\.claude\skills\
```

### 3. Use Skills

```bash
# Start Claude Code
claude

# Research a healing modality
claude> /healing-research "acupressure for hand injuries"

# Create healing content
claude> /healing-content --type prayer --tradition "Vedic"

# Run full development cycle
claude> /healing-swarm "Sacred Healing Journey" --focus "ligament healing"
```

---

## Skills Overview

| Skill | Trigger | Purpose |
|-------|---------|---------|
| [Research](docs/api/skills-reference.md#healing-research) | `/healing-research` | Deep research into healing traditions and clinical evidence |
| [Design](docs/api/skills-reference.md#healing-design) | `/healing-design` | Design healing application UX and visuals |
| [Content](docs/api/skills-reference.md#healing-content) | `/healing-content` | Create prayers, evidence boxes, visualizations |
| [Build](docs/api/skills-reference.md#healing-build) | `/healing-build` | Develop accessible, privacy-first applications |
| [Review](docs/api/skills-reference.md#healing-review) | `/healing-review` | Quality review (ethics, clinical, cultural, a11y) |
| [Deploy](docs/api/skills-reference.md#healing-deploy) | `/healing-deploy` | Deploy and maintain applications |
| [Swarm](docs/api/skills-reference.md#healing-swarm) | `/healing-swarm` | Full orchestrated development lifecycle |

---

## Documentation

### Getting Started

- **[Setup Guide](docs/SETUP.md)** - Installation and first steps
- **[Creating Skills](docs/guides/creating-skills.md)** - Build your own skills
- **[Testing Skills](docs/guides/testing-skills.md)** - Validate before submitting

### Reference

- **[Skills Reference](docs/api/skills-reference.md)** - All skills with triggers and options
- **[Agents Reference](docs/api/agents-reference.md)** - All agents with responsibilities
- **[Shared Resources](docs/api/shared-resources.md)** - Ethics, terminology, design tokens
- **[Workflows Reference](docs/api/workflows-reference.md)** - Workflow patterns

### Architecture

- **[Architecture Overview](docs/architecture/overview.md)** - System design
- **[Quality Gates](docs/architecture/quality-gates.md)** - Quality checkpoints
- **[Ethics Framework](docs/architecture/ethics-framework.md)** - Ethics deep dive

### Decision Records

- **[ADR-001: Ethics-First Architecture](docs/adr/001-ethics-first-architecture.md)**
- **[ADR-002: Local-First Data Storage](docs/adr/002-local-first-data.md)**
- **[ADR-003: Multi-Agent Quality Review](docs/adr/003-multi-agent-quality.md)**

---

## Developer Tooling

### Create a New Skill

```bash
npm run create-skill
```

Interactive CLI walks you through creating a new skill with proper structure.

### Validate Skills

```bash
# Full validation
npm run validate

# Check ethics references
npm run check:ethics

# Lint agent prompts
npm run lint:prompts

# Validate manifest
npm run validate:manifest
```

### Templates

Ready-to-use templates for common skill types:

- **[Minimal Skill](templates/minimal-skill/)** - Simplest possible skill
- **[Research Skill](templates/research-skill/)** - Research-focused template
- **[Content Skill](templates/content-skill/)** - Content creation template
- **[Quality Skill](templates/quality-skill/)** - Review/audit template

---

## Swarm Architecture

```
                         ┌──────────────────┐
                         │   ORCHESTRATOR   │
                         │  healing-swarm   │
                         └────────┬─────────┘
                                  │
          ┌───────────────────────┼───────────────────────┐
          │                       │                       │
    ┌─────┴─────┐           ┌─────┴─────┐           ┌─────┴─────┐
    │  RESEARCH │           │   BUILD   │           │  QUALITY  │
    │   SWARM   │           │   SWARM   │           │   SWARM   │
    └─────┬─────┘           └─────┬─────┘           └─────┬─────┘
          │                       │                       │
    ┌─────┼─────┐           ┌─────┼─────┐           ┌─────┼─────┐
    │     │     │           │     │     │           │     │     │
   📚    🔬    🧠          🎨    ✍️    💻          ⚖️    🔍    ♿
```

**Research Swarm:**
- 📚 Traditions Scholar - Ancient healing practices
- 🔬 Clinical Researcher - Modern evidence
- 🧠 Mechanisms Neuroscientist - Science-tradition bridges

**Build Swarm:**
- 🎨 UX Architect & Visual Designer - Healing-focused design
- ✍️ Content Writer - Prayers, evidence, visualizations
- 💻 App Developer - Accessible implementation

**Quality Swarm:**
- ⚖️ Ethics Guardian - Medical & psychological safety
- 🔍 Clinical & Cultural Reviewers - Accuracy & sensitivity
- ♿ Accessibility Auditor - WCAG compliance

---

## Ethical Foundation

```
┌─────────────────────────────────────────────────────────────────┐
│                  HEALING SWARM ETHICS                           │
│                                                                 │
│  1. FIRST, DO NO HARM                                          │
│     Medical and psychological safety absolute priority          │
│                                                                 │
│  2. HONOR ALL TRADITIONS                                        │
│     No appropriation, proper attribution always                 │
│                                                                 │
│  3. EVIDENCE WITH HUMILITY                                      │
│     "May help" not "will cure"                                  │
│                                                                 │
│  4. EMPOWER, DON'T CONTROL                                      │
│     User autonomy sacred                                        │
│                                                                 │
│  5. PRIVACY AS SANCTUARY                                        │
│     Healing data stays with healer                              │
│                                                                 │
│  6. ACCESSIBLE TO ALL                                           │
│     Design for most vulnerable users                            │
│                                                                 │
│  7. CONTINUOUS IMPROVEMENT                                      │
│     Learn from outcomes, update with evidence                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Examples

See the [examples](examples/) directory for working demonstrations:

- **[Simple Meditation](examples/simple-meditation/)** - Complete skill lifecycle walkthrough

---

## Contributing

**Your contribution matters.** Whether you're a healer with centuries of tradition behind you, a developer who just learned to code, or someone who simply noticed something that could be better—you have something to offer.

We welcome contributions that align with our ethical foundation. The guardrails exist to protect people, not to gatekeep ideas.

**[📖 Contributing Guide](CONTRIBUTING.md)**

### Ways to Contribute

| Contribution | Impact |
|--------------|--------|
| **Add a new skill** | Extend the swarm's capabilities |
| **Document a tradition** | Preserve and share healing wisdom |
| **Improve documentation** | Help others learn faster |
| **Report issues** | Make the framework more robust |
| **Ask questions** | Reveal assumptions we missed |
| **Share your use case** | Inspire others |

### Quick Start

```bash
# Create a new skill with interactive CLI
npm run create-skill

# Validate your changes
npm run validate

# Submit a PR
```

**Don't have code skills?** Open an issue describing the healing practice you'd like to see supported. Someone else might build it.

**Not sure if your idea fits?** Start a discussion. The worst that happens is we learn something together.

---

## License

This project is licensed under CC-BY-NC-SA-4.0 (Attribution-NonCommercial-ShareAlike).

- ✅ Use for personal healing applications
- ✅ Adapt and share with attribution
- ✅ Use in non-commercial contexts
- ❌ Commercial use without permission
- ❌ Remove attribution

---

## Acknowledgments

This swarm integrates wisdom from:
- Traditional Chinese Medicine (4,000+ years)
- Vedic/Ayurvedic healing traditions
- Jewish mystical healing practices
- Western contemplative traditions
- Modern clinical research

We honor the lineage holders and practitioners who have preserved and transmitted this wisdom.

And we honor you—for being here, for caring enough to explore this, for considering how you might contribute to the healing of yourself, your community, and the world.

---

*"The capacity for healing is intrinsic to consciousness. We build tools that support what life already knows how to do. And we build them together—because that's how healing has always worked."*
