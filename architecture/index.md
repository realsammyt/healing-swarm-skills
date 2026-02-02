---
layout: page
title: Architecture
description: How the Healing Swarm Skills system is designed.
permalink: /architecture/
---

The healing swarm is built on principles of ethics-first design, multi-agent coordination, and local-first privacy.

---

## System Overview

```
+-----------------------------------------------------------------------+
|                           USER INTERFACE                               |
|                         (Claude Code CLI)                              |
+-------------------------------+---------------------------------------+
                                |
                                v
+-----------------------------------------------------------------------+
|                          SKILL TRIGGERS                                |
|  /healing-research  /healing-design  /healing-content  /healing-swarm |
+-------------------------------+---------------------------------------+
                                |
                                v
+-----------------------------------------------------------------------+
|                          ORCHESTRATION LAYER                           |
|                                                                        |
|  +-------------+  +-------------+  +-------------+  +-------------+   |
|  |   Intake    |->|  Routing    |->|  Execution  |->|   Output    |   |
|  |   Parser    |  |   Engine    |  |  Controller |  |  Formatter  |   |
|  +-------------+  +-------------+  +-------------+  +-------------+   |
+-------------------------------+---------------------------------------+
                                |
                                v
+-----------------------------------------------------------------------+
|                           AGENT SWARMS                                 |
|                                                                        |
|  +---------------+     +---------------+     +---------------+        |
|  | RESEARCH SWARM|     |  BUILD SWARM  |     | QUALITY SWARM |        |
|  |               |     |               |     |               |        |
|  | - traditions  |     | - ux-architect|     | - ethics      |        |
|  |   scholar     |     | - visual      |     |   guardian    |        |
|  | - clinical    |     |   designer    |     | - clinical    |        |
|  |   researcher  |     | - content     |     |   reviewer    |        |
|  | - mechanisms  |     |   writer      |     | - cultural    |        |
|  |   neuro       |     | - app         |     |   reviewer    |        |
|  |               |     |   developer   |     | - a11y        |        |
|  +---------------+     +---------------+     +---------------+        |
+-------------------------------+---------------------------------------+
                                |
                                v
+-----------------------------------------------------------------------+
|                         SHARED RESOURCES                               |
|                                                                        |
|  +----------------+  +----------------+  +----------------+            |
|  | ethics-        |  | terminology.md |  | design-        |            |
|  | guardrails.md  |  | voice-guide.md |  | tokens.json    |            |
|  | *** REQUIRED ***|  |               |  | citation-fmt   |            |
|  +----------------+  +----------------+  +----------------+            |
+-----------------------------------------------------------------------+
```

---

## Core Design Principles

### 1. Ethics First

Every component is built with ethics as the foundation:

```
                    +---------------------+
                    |   ETHICS LAYER      |
                    |  (Always Present)   |
                    +---------+-----------+
                              |
        +---------------------+---------------------+
        |                     |                     |
        v                     v                     v
  +-----------+         +-----------+         +-----------+
  |  Research |         |   Build   |         |  Deploy   |
  |   Layer   |         |   Layer   |         |   Layer   |
  +-----------+         +-----------+         +-----------+
```

The ethics guardrails are **not optional**. Every agent must reference and follow them.

### 2. Quality Gate Architecture

Quality is enforced at multiple checkpoints:

```
  Input > [Gate 1] > Process > [Gate 2] > Review > [Gate 3] > Output
            ^                    ^                   ^
            |                    |                   |
      Input Validation    Process Quality      Output Review
```

### 3. Parallel + Sequential Execution

Workflows combine parallel research with sequential quality review:

```
  Intake
    |
    +------+------+
    |      |      |        (Parallel)
    v      v      v
  Agent   Agent  Agent
    A       B      C
    |      |      |
    +------+------+
           |               (Sequential)
           v
      Synthesis
           |
           v
    Quality Review
           |
           v
       Output
```

### 4. Local-First Privacy

Data architecture prioritizes user privacy:

```
  +-----------------------------------------+
  |              USER DEVICE                 |
  |  +-----------------------------------+  |
  |  |       LOCAL STORAGE               |  |
  |  |  - Healing progress               |  |
  |  |  - Journal entries                |  |
  |  |  - Practice history               |  |
  |  |  - Preferences                    |  |
  |  +-----------------------------------+  |
  |                                          |
  |  +-----------------------------------+  |
  |  |       APPLICATION                 |  |
  |  |  - All processing local           |  |
  |  |  - No external health data        |  |
  |  |  - User controls everything       |  |
  |  +-----------------------------------+  |
  +-----------------------------------------+
              |
              |  (Only with explicit consent)
              v
  +-----------------------------------------+
  |           EXTERNAL SERVICES              |
  |  - Anonymous analytics only              |
  |  - No PII transmitted                    |
  |  - User can opt out                      |
  +-----------------------------------------+
```

---

## Agent Architecture

### Agent Structure

Each agent has clearly defined responsibilities:

```
+-------------------------------------------------------------+
|                        AGENT STRUCTURE                        |
|                                                               |
|  +--------------+                                            |
|  |   Identity   |  Who the agent is, expertise areas         |
|  +--------------+                                            |
|         |                                                     |
|         v                                                     |
|  +--------------+                                            |
|  | Loaded       |  Required resources (ethics, terminology)  |
|  | Context      |  *** MUST include ethics-guardrails.md     |
|  +--------------+                                            |
|         |                                                     |
|         v                                                     |
|  +--------------+                                            |
|  |Responsibilities|  What the agent does                     |
|  +--------------+                                            |
|         |                                                     |
|         v                                                     |
|  +--------------+                                            |
|  | Methodology  |  How the agent works                       |
|  +--------------+                                            |
|         |                                                     |
|         v                                                     |
|  +--------------+                                            |
|  |   Outputs    |  What the agent produces                   |
|  +--------------+                                            |
+-------------------------------------------------------------+
```

### Agent Communication

Agents communicate through structured handoffs:

```
  Agent A                          Agent B
     |                                |
     |  +------------------------+   |
     +-->| Output: research.md   |-->|
        | Format: Markdown       |   |
        | Contains: findings,    |   |
        |   sources, limitations |   |
        +------------------------+   |
```

---

## Workflow Execution

### Stage Types

```
+-------------------------------------------------------------+
|                        STAGE TYPES                            |
|                                                               |
|  INTAKE            PARALLEL           SEQUENTIAL              |
|  +-----+          +-----+            +-----+                 |
|  |Parse|          |  A  |            |  1  |                 |
|  |Input|          +-----+            |  |  |                 |
|  +-----+          |  B  |            |  2  |                 |
|                   +-----+            |  |  |                 |
|                   |  C  |            |  3  |                 |
|                   +-----+            +-----+                 |
|                                                               |
|  CONDITIONAL      REVIEW             FINALIZE                 |
|  +-----+          +-----+            +-----+                 |
|  | if  |          |Check|            |Apply|                 |
|  |cond.|          |Gate |            |Fixes|                 |
|  |then |          |     |            |     |                 |
|  +-----+          +-----+            +-----+                 |
+-------------------------------------------------------------+
```

### Quality Gate Severity

```
  CRITICAL           HIGH              MEDIUM            LOW
  +-----+           +-----+           +-----+          +-----+
  |BLOCK|           |FIX  |           |FIX  |          |MAY  |
  |NOW  |           |FIRST|           |SOON |          |FIX  |
  +-----+           +-----+           +-----+          +-----+
    |                 |                 |                |
    | Safety risk     | Significant     | Quality        | Minor
    | Ethics          | quality issue   | improvement    | enhancement
    | violation       |                 | needed         |
```

---

## File System Structure

```
healing-swarm-skills/
|
+-- .claude/skills/healing-swarm/     # CORE: Skill definitions
|   +-- manifest.yaml                 # Skill registry
|   +-- shared/                       # Shared resources
|   |   +-- ethics-guardrails.md      # *** REQUIRED by all
|   |   +-- terminology.md
|   |   +-- voice-guide.md
|   |   +-- citation-format.md
|   |   +-- design-tokens.json
|   |
|   +-- research/                     # Research agents
|   +-- design/                       # Design agents
|   +-- content/                      # Content agents
|   +-- build/                        # Build agents
|   +-- quality/                      # Quality agents
|   +-- deploy/                       # Deploy agents
|   +-- orchestrator/                 # Orchestration
|
+-- docs/                             # Documentation
|   +-- SETUP.md
|   +-- guides/
|   +-- api/
|   +-- architecture/
|
+-- scripts/                          # Tooling
|   +-- create-skill.js
|   +-- validate-skills.js
|
+-- templates/                        # Starter templates
|   +-- minimal-skill/
|   +-- research-skill/
|   +-- content-skill/
|   +-- quality-skill/
|
+-- examples/                         # Working examples
```

---

## Security Architecture

### Trust Boundaries

```
+-------------------------------------------------------------+
|                    TRUST BOUNDARY: USER                       |
|                                                               |
|  +--------------------------------------------------------+ |
|  |                  TRUST BOUNDARY: LOCAL                  | |
|  |                                                         | |
|  |  +-----------------+  +-----------------+              | |
|  |  |   User Input    |  |   Local Data    |              | |
|  |  |   (validated)   |  |   (encrypted)   |              | |
|  |  +-----------------+  +-----------------+              | |
|  |                                                         | |
|  |  +---------------------------------------------------+ | |
|  |  |               APPLICATION LOGIC                    | | |
|  |  |  - Input sanitization                             | | |
|  |  |  - Output encoding                                | | |
|  |  |  - No external calls without consent              | | |
|  |  +---------------------------------------------------+ | |
|  |                                                         | |
|  +--------------------------------------------------------+ |
|                                                               |
+-------------------------------------------------------------+
```

---

## Decision Records

Key architectural decisions are documented:

- **[ADR-001: Ethics-First Architecture](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/adr/001-ethics-first-architecture.md)** --- Why ethics is enforced at every layer
- **[ADR-002: Local-First Data](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/adr/002-local-first-data.md)** --- Why all health data stays local
- **[ADR-003: Multi-Agent Quality](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/adr/003-multi-agent-quality.md)** --- Why multiple agents review everything

---

## Learn More

- [Full Architecture Documentation](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/architecture/overview.md)
- [Quality Gates](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/architecture/quality-gates.md)
- [Ethics Framework](/ethics/)
