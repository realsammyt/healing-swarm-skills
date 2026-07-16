---
name: healing-build
description: "Builds accessible, privacy-first healing app code: meditation timers, journals, trackers, practice guides. Use when the user wants to implement or scaffold a healing application or component. For design first, use healing-design."
---

# Healing Build

Develop healing applications with accessibility and privacy focus. Builds meditation timers, journals, progress trackers, practice guides.

**Trigger:** `/healing-build`  ·  **Category:** build

## When to use

Builds accessible, privacy-first healing app code: meditation timers, journals, trackers, practice guides. Use when the user wants to implement or scaffold a healing application or component. For design first, use healing-design.

## Agents this skill coordinates

- [`app-developer`](../build/app-developer.md)

**Workflow:** [`build/workflow.yaml`](../build/workflow.yaml)

**Outputs:** `application/`

## Example usage

```bash
/healing-build --design design-system.json --content content-library/
/healing-build --component "meditation-timer"
/healing-build --template web-app
```

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
