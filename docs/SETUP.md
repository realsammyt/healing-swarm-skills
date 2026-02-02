# Setup Guide

> Get started with Healing Swarm Skills in under 15 minutes.

---

## Prerequisites

Before you begin, ensure you have the following installed:

| Requirement | Minimum Version | Check Command |
|-------------|-----------------|---------------|
| Node.js | 18.0.0+ | `node --version` |
| Git | 2.30.0+ | `git --version` |
| Claude Code | Latest | `claude --version` |

### Installing Prerequisites

**Node.js:**
- Download from [nodejs.org](https://nodejs.org/) (LTS recommended)
- Or use a version manager like [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm)

**Git:**
- Download from [git-scm.com](https://git-scm.com/)

**Claude Code:**
```bash
# Install Claude Code CLI
npm install -g @anthropic-ai/claude-code
```

---

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/realsammyt/healing-swarm-skills.git
cd healing-swarm-skills
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Validate Installation

```bash
npm run validate
```

You should see output confirming all skills are valid:

```
✓ Validating skill structure...
✓ Checking ethics guardrails...
✓ Verifying workflows...
✓ All 44 skill files validated successfully
```

### Step 4: Copy Skills to Claude Code

Skills must be in your Claude Code configuration directory:

**macOS/Linux:**
```bash
cp -r .claude/skills/healing-swarm ~/.claude/skills/
```

**Windows (PowerShell):**
```powershell
Copy-Item -Recurse .claude\skills\healing-swarm $env:USERPROFILE\.claude\skills\
```

**Windows (Command Prompt):**
```cmd
xcopy /E /I .claude\skills\healing-swarm %USERPROFILE%\.claude\skills\healing-swarm
```

### Step 5: Verify Skills Are Available

Open Claude Code and check that the skills are loaded:

```bash
claude
```

Type `/` and you should see healing swarm skills in the autocomplete:
- `/healing-research`
- `/healing-design`
- `/healing-content`
- `/healing-build`
- `/healing-review`
- `/healing-deploy`
- `/healing-swarm`

---

## Directory Structure

```
healing-swarm-skills/
├── .claude/skills/healing-swarm/   # Main skills directory
│   ├── manifest.yaml               # Skill definitions
│   ├── shared/                     # Shared resources
│   │   ├── ethics-guardrails.md    # REQUIRED: Ethics constraints
│   │   ├── terminology.md          # Standard vocabulary
│   │   ├── citation-format.md      # Citation requirements
│   │   ├── voice-guide.md          # Writing voice guidelines
│   │   └── design-tokens.json      # Design system tokens
│   ├── research/                   # Research agents
│   │   ├── traditions-scholar.md   # Traditional healing research
│   │   ├── clinical-researcher.md  # Clinical evidence research
│   │   ├── mechanisms-neuroscientist.md  # Science-tradition bridges
│   │   └── workflow.yaml           # Research workflow
│   ├── design/                     # Design agents
│   │   ├── ux-architect.md         # UX design
│   │   ├── visual-designer.md      # Visual design
│   │   └── workflow.yaml           # Design workflow
│   ├── content/                    # Content creation
│   │   ├── content-writer.md       # Content agent
│   │   ├── workflow.yaml           # Content workflow
│   │   └── templates/              # Content templates
│   │       ├── prayer.md
│   │       ├── evidence-box.md
│   │       ├── visualization.md
│   │       └── ...
│   ├── build/                      # Development agents
│   │   ├── app-developer.md        # App development
│   │   ├── workflow.yaml           # Build workflow
│   │   └── components/             # Component specs
│   │       ├── meditation-timer.md
│   │       ├── journal-entry.md
│   │       └── ...
│   ├── quality/                    # Quality assurance
│   │   ├── ethics-guardian.md      # Ethics review
│   │   ├── clinical-reviewer.md    # Clinical accuracy
│   │   ├── cultural-reviewer.md    # Cultural sensitivity
│   │   ├── accessibility-auditor.md # WCAG compliance
│   │   └── workflow.yaml           # Quality workflow
│   ├── deploy/                     # Deployment
│   │   ├── devops-specialist.md    # Infrastructure
│   │   ├── content-manager.md      # Content deployment
│   │   └── workflow.yaml           # Deploy workflow
│   └── orchestrator/               # Orchestration
│       ├── swarm-conductor.md      # Main orchestrator
│       └── workflow.yaml           # Full lifecycle workflow
├── docs/                           # Documentation
├── scripts/                        # Utility scripts
├── templates/                      # Starter templates
├── examples/                       # Working examples
├── CONTRIBUTING.md                 # Contribution guidelines
├── README.md                       # Project overview
└── package.json                    # Project configuration
```

---

## First Skill Exploration

Let's explore the research skill to understand how skills work.

### 1. Examine a Workflow

Open `.claude/skills/healing-swarm/research/workflow.yaml`:

```yaml
stages:
  - name: intake
    description: Parse research request and determine scope
    agent: orchestrator

  - name: traditions_research
    description: Research traditional healing practices
    agent: traditions-scholar
    parallel: true

  - name: clinical_research
    description: Systematic review of clinical evidence
    agent: clinical-researcher
    parallel: true

  # ... more stages
```

This workflow shows how multiple agents coordinate to produce comprehensive research.

### 2. Examine an Agent Prompt

Open `.claude/skills/healing-swarm/research/traditions-scholar.md`:

Key sections include:
- **Identity**: Who the agent is and their expertise
- **Core Responsibilities**: What the agent does
- **Research Methodology**: How the agent works
- **Output Formats**: What the agent produces
- **Integration**: How it connects with other agents

### 3. Understand Shared Resources

The `shared/` directory contains resources that ALL agents must use:

- **ethics-guardrails.md**: Absolute safety requirements (NEVER do, ALWAYS do)
- **terminology.md**: Standard vocabulary to use consistently
- **voice-guide.md**: How to write healing content
- **design-tokens.json**: Visual design standards

### 4. Try a Skill

In Claude Code, try the research skill:

```bash
claude> /healing-research "breathwork for stress relief"
```

Watch how the skill:
1. Parses your query
2. Coordinates multiple research agents
3. Produces a comprehensive research brief
4. Applies ethics review

---

## Troubleshooting

### Skills Not Appearing

**Problem:** Skills don't show up in Claude Code autocomplete.

**Solutions:**
1. Verify skills are in the correct location:
   ```bash
   ls ~/.claude/skills/healing-swarm/
   ```
2. Restart Claude Code
3. Check for syntax errors in manifest.yaml:
   ```bash
   npm run validate
   ```

### Validation Fails

**Problem:** `npm run validate` reports errors.

**Solutions:**
1. Read the error message carefully - it indicates which file has issues
2. Check YAML syntax (indentation matters!)
3. Ensure all referenced files exist
4. Run: `npm run validate -- --verbose` for detailed output

### Permission Errors on Windows

**Problem:** Cannot copy files to `.claude` directory.

**Solutions:**
1. Run PowerShell as Administrator
2. Check if `.claude` directory exists:
   ```powershell
   Test-Path $env:USERPROFILE\.claude
   ```
3. Create it if missing:
   ```powershell
   New-Item -ItemType Directory -Path $env:USERPROFILE\.claude\skills
   ```

### Node Version Issues

**Problem:** Scripts fail with syntax errors.

**Solutions:**
1. Check Node version: `node --version`
2. Update to Node 18+
3. If using nvm: `nvm use 18`

---

## Next Steps

Now that you're set up, you can:

1. **[Create your first skill](guides/creating-skills.md)** - Learn to build custom healing skills
2. **[Test skills locally](guides/testing-skills.md)** - Validate before contributing
3. **[Read the API reference](api/skills-reference.md)** - Quick lookup for all skills
4. **[Understand the architecture](architecture/overview.md)** - How the swarm works

---

## Getting Help

- **Documentation Issues**: Open an issue on GitHub
- **Skill Questions**: Start a Discussion
- **Security Concerns**: Email maintainers directly
- **Ethics Questions**: Contact the ethics-guardian team

---

*"The setup is the first step on the healing path. Welcome to the swarm."*
