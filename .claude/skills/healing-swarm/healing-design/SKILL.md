---
name: healing-design
description: "Produces UX and visual design for a healing app: journeys, wireframes, and a design system tuned for vulnerable users. Use when the user wants to design a healing application's experience or interface. For UX only, use healing-ux; for visuals only, use sacred-visuals."
---

# Healing Design

Design healing application UX and visuals. Creates user journeys, wireframes, design systems optimized for vulnerable users and therapeutic contexts.

**Trigger:** `/healing-design`  ·  **Category:** design

## When to use

Produces UX and visual design for a healing app: journeys, wireframes, and a design system tuned for vulnerable users. Use when the user wants to design a healing application's experience or interface. For UX only, use healing-ux; for visuals only, use sacred-visuals.

## Agents this skill coordinates

- [`ux-architect`](../design/ux-architect.md)
- [`visual-designer`](../design/visual-designer.md)

**Workflow:** [`design/workflow.yaml`](../design/workflow.yaml)

**Outputs:** `design-system.json`, `wireframes.md`, `component-specs.md`, `user-journeys.md`

## Example usage

```bash
/healing-design --input research-brief.md
/healing-design --focus "meditation timer" --accessibility high
```

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
