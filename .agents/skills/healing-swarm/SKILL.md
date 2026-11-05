---
name: healing-swarm
description: Orchestrates the whole swarm through research, design, content, build, quality, and deployment to produce a complete healing app. Use when the user wants an end-to-end build rather than a single artifact. For one stage only, call that stage's skill directly.
license: CC-BY-NC-SA-4.0
---

# Healing Swarm

Complete healing application development lifecycle. Orchestrates all agents through research, design, content, build, quality, and deployment phases.

## When to use

Orchestrates the whole swarm through research, design, content, build, quality, and deployment to produce a complete healing app. Use when the user wants an end-to-end build rather than a single artifact. For one stage only, call that stage's skill directly.

## How to run

Follow the phases in [`workflow.yaml`](references/orchestrator/workflow.yaml). Run each phase inline, one after another. Each phase writes its result to a file (for example `brief.md`, then `design.md`) and the next phase reads it, so a run can be resumed. If your agent supports subagents, you may hand a phase to one; the files stay the handoff.

Roles (open the brief for the role you are playing):

- [`swarm-conductor`](references/orchestrator/swarm-conductor.md)

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
