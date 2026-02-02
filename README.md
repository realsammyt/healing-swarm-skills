# Healing Swarm Skills

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
│   ══════════════════════════════════════════                    │
│           ETHICAL HEALING APPLICATIONS                          │
│   ══════════════════════════════════════════                    │
└─────────────────────────────────────────────────────────────────┘
```

## Vision

To democratize access to holistic healing wisdom by synthesizing rigorously validated ancient practices with modern clinical evidence, delivered through beautiful, intuitive digital experiences that empower individuals to actively participate in their healing journey.

## What This Repository Contains

### Skills (`/.claude/skills/healing-swarm/`)

A comprehensive swarm of specialized AI agents for healing application development:

| Skill | Trigger | Purpose |
|-------|---------|---------|
| `healing-research` | `/healing-research` | Deep research into healing traditions and clinical evidence |
| `healing-design` | `/healing-design` | Design healing application UX and visuals |
| `healing-content` | `/healing-content` | Write prayers, evidence boxes, visualizations |
| `healing-build` | `/healing-build` | Develop accessible, privacy-first applications |
| `healing-review` | `/healing-review` | Quality review (ethics, clinical, cultural, a11y) |
| `healing-deploy` | `/healing-deploy` | Deploy and maintain applications |
| `healing-swarm` | `/healing-swarm` | Full orchestrated development lifecycle |

### Packages (`/packages/`)

- **core**: Shared utilities, design tokens, component primitives
- **cli**: Command-line tools for healing app development
- **web**: Web component library for healing interfaces

### Templates (`/templates/`)

- **web-app**: Full-featured healing web application template
- **mobile-app**: React Native healing app template
- **content-only**: Content-focused healing guide template

### Documentation (`/docs/`)

- Guides for using the swarm
- API documentation
- Example applications

## Quick Start

### 1. Install the Skills

```bash
# Clone the repository
git clone https://github.com/yourusername/healing-swarm-skills.git

# Copy skills to your Claude Code configuration
cp -r healing-swarm-skills/.claude/skills/healing-swarm ~/.claude/skills/
```

### 2. Use Individual Skills

```bash
# Research a healing modality
claude> /healing-research "acupressure for hand injuries"

# Design a healing application
claude> /healing-design

# Write healing content
claude> /healing-content --type prayer --tradition "Vedic"

# Review for quality
claude> /healing-review ./my-healing-app/
```

### 3. Run Full Development Cycle

```bash
claude> /healing-swarm "Sacred Healing Journey" \
  --focus "ligament healing" \
  --users "injured individual, healing partner"
```

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

## Applications Built With This Swarm

- **Sacred Healing Journey** - 21-day integrated healing protocol
- *More coming soon...*

## Contributing

We welcome contributions that align with our ethical foundation. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting.

## License

This project is licensed under CC-BY-NC-SA-4.0 (Attribution-NonCommercial-ShareAlike).

- ✅ Use for personal healing applications
- ✅ Adapt and share with attribution
- ✅ Use in non-commercial contexts
- ❌ Commercial use without permission
- ❌ Remove attribution

## Acknowledgments

This swarm integrates wisdom from:
- Traditional Chinese Medicine (4,000+ years)
- Vedic/Ayurvedic healing traditions
- Jewish mystical healing practices
- Western contemplative traditions
- Modern clinical research

We honor the lineage holders and practitioners who have preserved and transmitted this wisdom.

---

*"The capacity for healing is intrinsic to consciousness. We build tools that support what life already knows how to do."*
