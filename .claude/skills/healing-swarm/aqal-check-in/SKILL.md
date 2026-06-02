---
name: aqal-check-in
description: Guides a four-quadrant (AQAL) self-inquiry across interior/exterior and individual/collective views of a situation. Use when the user wants a structured reflection on a decision, a day, or a life situation through Wilber's quadrants. Do NOT present it as a clinical assessment.
---

# Aqal Check In

Structured four-quadrant self-inquiry based on Wilber's AQAL framework. Guides users through interior/exterior and individual/collective perspectives on any situation.

**Trigger:** `/aqal-check-in`  ·  **Category:** integral

## When to use

Guides a four-quadrant (AQAL) self-inquiry across interior/exterior and individual/collective views of a situation. Use when the user wants a structured reflection on a decision, a day, or a life situation through Wilber's quadrants. Do NOT present it as a clinical assessment.

## Agents this skill coordinates

- [`integral-researcher`](../research/integral-researcher.md)
- [`integral-guide`](../content/integral-guide.md)
- [`content-writer`](../content/content-writer.md)
- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** [`content/aqal-checkin-workflow.yaml`](../content/aqal-checkin-workflow.yaml)

**Templates:**

- [`content/templates/aqal-checkin.md`](../content/templates/aqal-checkin.md)

**Outputs:** `aqal-checkin.md`, `integration-notes.md`, `evidence-brief.md`

## Example usage

```bash
/aqal-check-in "navigating a career change"
/aqal-check-in "start of day" --depth brief
/aqal-check-in "managing chronic illness" --depth deep
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
