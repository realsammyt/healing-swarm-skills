---
name: group-perception
description: "Designs group and paired perception exercises (collective label delay, meaning-collapse circle, silence sit) with a consent framework. Sensitive: these are the same deautomatization practices as language-awareness, run in a group where facilitators cannot screen individuals. Use when the user is explicitly facilitating a workshop, circle, or team session on perception. Do NOT auto-launch from loose mentions of groups or perception; wait for an explicit facilitation request. Keep the consent, screening, and debrief steps; stop any exercise if a participant shows depersonalization or derealization."
---

# Group Perception

Group and paired perception exercises for collective language awareness. Includes collective label delay, pronoun relay, meaning collapse circle, map-maker's interrogation, conversion drill, and silence sit. Consent framework required for all exercises.

**Trigger:** `/group-perception`  ·  **Category:** perception

## When to use

Designs group and paired perception exercises (collective label delay, meaning-collapse circle, silence sit) with a consent framework. Sensitive: these are the same deautomatization practices as language-awareness, run in a group where facilitators cannot screen individuals. Use when the user is explicitly facilitating a workshop, circle, or team session on perception. Do NOT auto-launch from loose mentions of groups or perception; wait for an explicit facilitation request. Keep the consent, screening, and debrief steps; stop any exercise if a participant shows depersonalization or derealization.

## Agents this skill coordinates

- [`language-awareness-guide`](../content/language-awareness-guide.md)
- [`content-writer`](../content/content-writer.md)
- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** standalone — agent-driven, no orchestrated workflow.

**Templates:**

- [`content/templates/group-perception-protocol.md`](../content/templates/group-perception-protocol.md)

**Safety context (load before generating output):**

- [`shared/crisis-response.md`](../shared/crisis-response.md)
- [`shared/contraindications.md`](../shared/contraindications.md)

**Outputs:** `group-protocol.md`, `facilitator-guide.md`, `consent-framework.md`, `debrief-questions.md`

## Example usage

```bash
/group-perception "team workshop" --exercise collective_label_delay
/group-perception "book club" --exercise meaning_collapse_circle
/group-perception "retreat" --exercise silence_sit --duration 30
```

## Safety

> This is a **sensitive** skill. Do not auto-launch it from loose conversational cues; wait for an explicit request, offer it gently, and honor the guards in the description above.

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
