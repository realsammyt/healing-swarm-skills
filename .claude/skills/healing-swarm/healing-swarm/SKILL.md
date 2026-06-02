---
name: healing-swarm
description: Orchestrates the whole swarm through research, design, content, build, quality, and deployment to produce a complete healing app. Use when the user wants an end-to-end build rather than a single artifact. For one stage only, call that stage's skill directly.
---

# Healing Swarm

Complete healing application development lifecycle. Orchestrates all agents through research, design, content, build, quality, and deployment phases.

**Trigger:** `/healing-swarm`  ·  **Category:** orchestration

## When to use

Orchestrates the whole swarm through research, design, content, build, quality, and deployment to produce a complete healing app. Use when the user wants an end-to-end build rather than a single artifact. For one stage only, call that stage's skill directly.

**Orchestrator:** [`swarm-conductor`](../orchestrator/swarm-conductor.md)

**Workflow:** [`orchestrator/workflow.yaml`](../orchestrator/workflow.yaml)

## Example usage

```bash
/healing-swarm "Sacred Healing Journey" --focus "ligament healing"
/healing-swarm "Meditation Guide" --focus "anxiety reduction" --simple
```

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
