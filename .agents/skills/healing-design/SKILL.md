---
name: healing-design
description: "Produces UX and visual design for a healing app: journeys, wireframes, and a design system tuned for vulnerable users. Use when the user wants to design a healing application's experience or interface. For UX only, use healing-ux; for visuals only, use sacred-visuals."
license: CC-BY-NC-SA-4.0
---

# Healing Design

Design healing application UX and visuals. Creates user journeys, wireframes, design systems optimized for vulnerable users and therapeutic contexts.

## When to use

Produces UX and visual design for a healing app: journeys, wireframes, and a design system tuned for vulnerable users. Use when the user wants to design a healing application's experience or interface. For UX only, use healing-ux; for visuals only, use sacred-visuals.

## How to run

Follow the phases in [`workflow.yaml`](references/design/workflow.yaml). Run each phase inline, one after another. Each phase writes its result to a file (for example `brief.md`, then `design.md`) and the next phase reads it, so a run can be resumed. If your agent supports subagents, you may hand a phase to one; the files stay the handoff.

Roles (open the brief for the role you are playing):

- [`ux-architect`](references/design/ux-architect.md)
- [`visual-designer`](references/design/visual-designer.md)

**Outputs** (write to `./healing-output/`): `design-system.json`, `wireframes.md`, `component-specs.md`, `user-journeys.md`

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
