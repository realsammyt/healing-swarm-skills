---
name: healing-deploy
description: "Deploys and maintains a healing app: static hosting, monitoring, and content updates. Use when the user wants to ship, host, or update a built healing application."
license: CC-BY-NC-SA-4.0
---

# Healing Deploy

Deploy and maintain healing applications. Static hosting, monitoring, content updates.

## When to use

Deploys and maintains a healing app: static hosting, monitoring, and content updates. Use when the user wants to ship, host, or update a built healing application.

## How to run

Follow the phases in [`workflow.yaml`](references/deploy/workflow.yaml). Run each phase inline, one after another. Each phase writes its result to a file (for example `brief.md`, then `design.md`) and the next phase reads it, so a run can be resumed. If your agent supports subagents, you may hand a phase to one; the files stay the handoff.

Roles (open the brief for the role you are playing):

- [`devops-specialist`](references/deploy/devops-specialist.md)
- [`content-manager`](references/deploy/content-manager.md)

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
