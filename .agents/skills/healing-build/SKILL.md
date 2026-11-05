---
name: healing-build
description: "Builds accessible, privacy-first healing app code: meditation timers, journals, trackers, practice guides. Use when the user wants to implement or scaffold a healing application or component. For design first, use healing-design."
license: CC-BY-NC-SA-4.0
---

# Healing Build

Develop healing applications with accessibility and privacy focus. Builds meditation timers, journals, progress trackers, practice guides.

## When to use

Builds accessible, privacy-first healing app code: meditation timers, journals, trackers, practice guides. Use when the user wants to implement or scaffold a healing application or component. For design first, use healing-design.

## How to run

Follow the phases in [`workflow.yaml`](references/build/workflow.yaml). Run each phase inline, one after another. Each phase writes its result to a file (for example `brief.md`, then `design.md`) and the next phase reads it, so a run can be resumed. If your agent supports subagents, you may hand a phase to one; the files stay the handoff.

Roles (open the brief for the role you are playing):

- [`app-developer`](references/build/app-developer.md)

**Outputs** (write to `./healing-output/`): `application/`

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
