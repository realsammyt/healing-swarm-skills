---
name: group-perception
description: Designs group and paired perception exercises (collective label delay, meaning-collapse circle, silence sit) with a consent framework. Use when the user is facilitating a workshop, circle, or team session on perception. Keep the consent and debrief steps.
---

# Group Perception

Group and paired perception exercises for collective language awareness. Includes collective label delay, pronoun relay, meaning collapse circle, map-maker's interrogation, conversion drill, and silence sit. Consent framework required for all exercises.

**Trigger:** `/group-perception`  ·  **Category:** perception

## When to use

Designs group and paired perception exercises (collective label delay, meaning-collapse circle, silence sit) with a consent framework. Use when the user is facilitating a workshop, circle, or team session on perception. Keep the consent and debrief steps.

## Agents this skill coordinates

- [`language-awareness-guide`](../content/language-awareness-guide.md)
- [`content-writer`](../content/content-writer.md)
- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** standalone — agent-driven, no orchestrated workflow.

**Templates:**

- [`content/templates/group-perception-protocol.md`](../content/templates/group-perception-protocol.md)

**Outputs:** `group-protocol.md`, `facilitator-guide.md`, `consent-framework.md`, `debrief-questions.md`

## Example usage

```bash
/group-perception "team workshop" --exercise collective_label_delay
/group-perception "book club" --exercise meaning_collapse_circle
/group-perception "retreat" --exercise silence_sit --duration 30
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
