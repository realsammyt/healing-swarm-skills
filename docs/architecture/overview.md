# Architecture Overview

> How the Healing Swarm Skills system is designed.

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           USER INTERFACE                                     │
│                         (Claude Code CLI)                                    │
└────────────────────────────────┬────────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          SKILL TRIGGERS                                      │
│  /healing-research  /healing-design  /healing-content  /healing-swarm       │
└────────────────────────────────┬────────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          ORCHESTRATION LAYER                                 │
│                                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   Intake    │→ │  Routing    │→ │  Execution  │→ │   Output    │        │
│  │   Parser    │  │   Engine    │  │  Controller │  │  Formatter  │        │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘        │
└────────────────────────────────┬────────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           AGENT SWARMS                                       │
│                                                                              │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐             │
│  │  RESEARCH SWARM │  │   BUILD SWARM   │  │  QUALITY SWARM  │             │
│  │                 │  │                 │  │                 │             │
│  │ • traditions-   │  │ • ux-architect  │  │ • ethics-       │             │
│  │   scholar       │  │ • visual-       │  │   guardian      │             │
│  │ • clinical-     │  │   designer      │  │ • clinical-     │             │
│  │   researcher    │  │ • content-      │  │   reviewer      │             │
│  │ • mechanisms-   │  │   writer        │  │ • cultural-     │             │
│  │   neuroscientist│  │ • app-developer │  │   reviewer      │             │
│  │                 │  │                 │  │ • accessibility-│             │
│  │                 │  │                 │  │   auditor       │             │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘             │
└────────────────────────────────┬────────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         SHARED RESOURCES                                     │
│                                                                              │
│  ┌──────────────────┐  ┌────────────────┐  ┌────────────────┐              │
│  │ ethics-          │  │ terminology.md │  │ design-        │              │
│  │ guardrails.md    │  │                │  │ tokens.json    │              │
│  │ ★ REQUIRED ★     │  │ voice-guide.md │  │                │              │
│  │                  │  │                │  │ citation-      │              │
│  │                  │  │                │  │ format.md      │              │
│  └──────────────────┘  └────────────────┘  └────────────────┘              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Core Design Principles

### 1. Ethics First

Every component in the system is built with ethics as the foundation:

```
                    ┌─────────────────────┐
                    │   ETHICS LAYER      │
                    │  (Always Present)   │
                    └──────────┬──────────┘
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
        ▼                      ▼                      ▼
  ┌───────────┐         ┌───────────┐         ┌───────────┐
  │  Research │         │   Build   │         │  Deploy   │
  │   Layer   │         │   Layer   │         │   Layer   │
  └───────────┘         └───────────┘         └───────────┘
```

The ethics guardrails are not optional. Every agent must reference and follow them.

### 2. Quality Gate Architecture

Quality is enforced at multiple checkpoints:

```
  Input → [Gate 1] → Process → [Gate 2] → Review → [Gate 3] → Output
           ↑                    ↑                   ↑
           │                    │                   │
     Input Validation    Process Quality      Output Review
```

### 3. Parallel + Sequential Execution

Workflows combine parallel research with sequential quality review:

```
  Intake
    │
    ├──────┬──────┐
    │      │      │        (Parallel)
    ▼      ▼      ▼
  Agent   Agent  Agent
    A       B      C
    │      │      │
    └──────┼──────┘
           │               (Sequential)
           ▼
      Synthesis
           │
           ▼
    Quality Review
           │
           ▼
       Output
```

### 4. Local-First Privacy

Data architecture prioritizes user privacy:

```
  ┌─────────────────────────────────────────┐
  │              USER DEVICE                 │
  │  ┌─────────────────────────────────┐    │
  │  │       LOCAL STORAGE             │    │
  │  │  • Healing progress             │    │
  │  │  • Journal entries              │    │
  │  │  • Practice history             │    │
  │  │  • Preferences                  │    │
  │  └─────────────────────────────────┘    │
  │                                          │
  │  ┌─────────────────────────────────┐    │
  │  │       APPLICATION               │    │
  │  │  • All processing local         │    │
  │  │  • No external health data      │    │
  │  │  • User controls everything     │    │
  │  └─────────────────────────────────┘    │
  └─────────────────────────────────────────┘
              │
              │  (Only with explicit consent)
              ▼
  ┌─────────────────────────────────────────┐
  │           EXTERNAL SERVICES              │
  │  • Anonymous analytics only              │
  │  • No PII transmitted                    │
  │  • User can opt out                      │
  └─────────────────────────────────────────┘
```

---

## Agent Architecture

### Agent Responsibilities

Each agent has clearly defined responsibilities:

```
┌─────────────────────────────────────────────────────────────────┐
│                        AGENT STRUCTURE                           │
│                                                                  │
│  ┌──────────────┐                                               │
│  │   Identity   │  Who the agent is, expertise areas            │
│  └──────────────┘                                               │
│         │                                                        │
│         ▼                                                        │
│  ┌──────────────┐                                               │
│  │ Loaded       │  Required resources (ethics, terminology)     │
│  │ Context      │  ★ MUST include ethics-guardrails.md          │
│  └──────────────┘                                               │
│         │                                                        │
│         ▼                                                        │
│  ┌──────────────┐                                               │
│  │Responsibilities│  What the agent does                        │
│  └──────────────┘                                               │
│         │                                                        │
│         ▼                                                        │
│  ┌──────────────┐                                               │
│  │ Methodology  │  How the agent works                          │
│  └──────────────┘                                               │
│         │                                                        │
│         ▼                                                        │
│  ┌──────────────┐                                               │
│  │   Outputs    │  What the agent produces                      │
│  └──────────────┘                                               │
└─────────────────────────────────────────────────────────────────┘
```

### Agent Communication

Agents communicate through structured handoffs:

```
  Agent A                          Agent B
     │                                │
     │  ┌────────────────────────┐   │
     ├──│ Output: research.md    │──►│
     │  │ Format: Markdown       │   │
     │  │ Contains: findings,    │   │
     │  │   sources, limitations │   │
     │  └────────────────────────┘   │
     │                                │
```

---

## Workflow Architecture

### Workflow Execution Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                     WORKFLOW EXECUTION                           │
│                                                                  │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐     │
│  │ Parse   │───►│ Validate│───►│ Execute │───►│ Format  │     │
│  │ Trigger │    │ Inputs  │    │ Stages  │    │ Output  │     │
│  └─────────┘    └─────────┘    └────┬────┘    └─────────┘     │
│                                      │                          │
│                                      ▼                          │
│                              ┌──────────────┐                   │
│                              │   Quality    │                   │
│                              │   Gates      │                   │
│                              └──────┬───────┘                   │
│                                     │                           │
│                    ┌────────────────┼────────────────┐          │
│                    │                │                │          │
│                    ▼                ▼                ▼          │
│               [PASS]           [WARN]           [FAIL]          │
│                  │                │                │            │
│                  │                │                │            │
│             Continue        Continue w/      Stop &             │
│                              notes           remediate          │
└─────────────────────────────────────────────────────────────────┘
```

### Stage Types

```
┌─────────────────────────────────────────────────────────────────┐
│                        STAGE TYPES                               │
│                                                                  │
│  INTAKE            PARALLEL           SEQUENTIAL                 │
│  ┌─────┐          ┌─────┐            ┌─────┐                    │
│  │Parse│          │  A  │            │  1  │                    │
│  │Input│          ├─────┤            │  ↓  │                    │
│  └─────┘          │  B  │            │  2  │                    │
│                   ├─────┤            │  ↓  │                    │
│                   │  C  │            │  3  │                    │
│                   └─────┘            └─────┘                    │
│                                                                  │
│  CONDITIONAL      REVIEW             FINALIZE                    │
│  ┌─────┐          ┌─────┐            ┌─────┐                    │
│  │ if  │          │Check│            │Apply│                    │
│  │cond.│          │Gate │            │Fixes│                    │
│  │then │          │     │            │     │                    │
│  └─────┘          └─────┘            └─────┘                    │
└─────────────────────────────────────────────────────────────────┘
```

---

## Quality Architecture

### Multi-Layer Quality Review

```
┌─────────────────────────────────────────────────────────────────┐
│                    QUALITY REVIEW LAYERS                         │
│                                                                  │
│  Layer 1: AUTOMATED                                              │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ • Syntax validation                                        │ │
│  │ • Required sections check                                  │ │
│  │ • Ethics reference check                                   │ │
│  └────────────────────────────────────────────────────────────┘ │
│                              │                                   │
│                              ▼                                   │
│  Layer 2: AGENT REVIEW                                           │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ • Ethics guardian review                                   │ │
│  │ • Clinical accuracy check                                  │ │
│  │ • Cultural sensitivity review                              │ │
│  │ • Accessibility audit                                      │ │
│  └────────────────────────────────────────────────────────────┘ │
│                              │                                   │
│                              ▼                                   │
│  Layer 3: FINAL APPROVAL                                         │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ • Synthesis of all reviews                                 │ │
│  │ • Final go/no-go decision                                  │ │
│  │ • Required modifications list                              │ │
│  └────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### Quality Gate Severity

```
  CRITICAL           HIGH              MEDIUM            LOW
  ┌─────┐           ┌─────┐           ┌─────┐          ┌─────┐
  │BLOCK│           │FIX  │           │FIX  │          │MAY  │
  │NOW  │           │FIRST│           │SOON │          │FIX  │
  └─────┘           └─────┘           └─────┘          └─────┘
    │                 │                 │                │
    │ Safety risk     │ Significant     │ Quality        │ Minor
    │ Ethics          │ quality issue   │ improvement    │ enhancement
    │ violation       │                 │ needed         │
```

---

## File System Architecture

```
healing-swarm-skills/
│
├── .claude/skills/healing-swarm/     # CORE: Skill definitions
│   ├── manifest.yaml                 # Skill registry
│   ├── shared/                       # Shared resources
│   │   ├── ethics-guardrails.md      # ★ REQUIRED by all
│   │   ├── terminology.md
│   │   ├── voice-guide.md
│   │   ├── citation-format.md
│   │   └── design-tokens.json
│   │
│   ├── research/                     # Research agents
│   ├── design/                       # Design agents
│   ├── content/                      # Content agents
│   ├── build/                        # Build agents
│   ├── quality/                      # Quality agents
│   ├── deploy/                       # Deploy agents
│   └── orchestrator/                 # Orchestration
│
├── docs/                             # Documentation
│   ├── SETUP.md
│   ├── guides/
│   ├── api/
│   └── architecture/
│
├── scripts/                          # Tooling
│   ├── create-skill.js
│   ├── validate-skills.js
│   └── ...
│
├── templates/                        # Starter templates
│   ├── minimal-skill/
│   ├── research-skill/
│   ├── content-skill/
│   └── quality-skill/
│
└── examples/                         # Working examples
```

---

## Security Architecture

### Trust Boundaries

```
┌─────────────────────────────────────────────────────────────────┐
│                    TRUST BOUNDARY: USER                          │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                  TRUST BOUNDARY: LOCAL                     │ │
│  │                                                            │ │
│  │  ┌─────────────────┐  ┌─────────────────┐                │ │
│  │  │   User Input    │  │   Local Data    │                │ │
│  │  │   (validated)   │  │   (encrypted)   │                │ │
│  │  └─────────────────┘  └─────────────────┘                │ │
│  │                                                            │ │
│  │  ┌─────────────────────────────────────────────────────┐ │ │
│  │  │               APPLICATION LOGIC                      │ │ │
│  │  │  • Input sanitization                               │ │ │
│  │  │  • Output encoding                                  │ │ │
│  │  │  • No external calls without consent                │ │ │
│  │  └─────────────────────────────────────────────────────┘ │ │
│  │                                                            │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## See Also

- [Quality Gates](quality-gates.md) - All quality checkpoints
- [Ethics Framework](ethics-framework.md) - Ethics architecture
- [API Reference](../api/) - Skills, agents, workflows
