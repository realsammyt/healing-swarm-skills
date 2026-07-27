---
name: practice-screening
description: "Runs the contraindication screening before any practice skill produces a protocol: the Tier 1, Tier 2, and Tier 3 question sets, the severity decision tree, and a screening record the user keeps. Use when a user asks for a breathwork, cold-exposure, meditation, transpersonal, paired, sound, or perception practice and has not been screened, or asks whether a practice is safe with their condition, pregnancy, medication, or recent surgery. Hands off to the requested practice skill (whm-breathwork, whm-cold-exposure, orbital-journey, language-awareness, umwelt-practice, and the rest) with any required modifications attached, or offers safe alternatives instead. This is screening, not diagnosis and not medical clearance. For a reaction that has already happened, use adverse-response."
---

# Practice Screening

One front door for contraindication screening, run before any practice skill generates a protocol. Walks the Tier 1/2/3 questions, applies the severity decision tree, then hands off to the requested practice with modifications attached or offers safe alternatives instead.

**Trigger:** `/practice-screening`  ·  **Category:** quality

## When to use

Runs the contraindication screening before any practice skill produces a protocol: the Tier 1, Tier 2, and Tier 3 question sets, the severity decision tree, and a screening record the user keeps. Use when a user asks for a breathwork, cold-exposure, meditation, transpersonal, paired, sound, or perception practice and has not been screened, or asks whether a practice is safe with their condition, pregnancy, medication, or recent surgery. Hands off to the requested practice skill (whm-breathwork, whm-cold-exposure, orbital-journey, language-awareness, umwelt-practice, and the rest) with any required modifications attached, or offers safe alternatives instead. This is screening, not diagnosis and not medical clearance. For a reaction that has already happened, use adverse-response.

## Agents this skill coordinates

- [`screening-guide`](../healing-swarm/content/screening-guide.md)
- [`ethics-guardian`](../healing-swarm/quality/ethics-guardian.md)

**Workflow:** standalone — agent-driven, no orchestrated workflow.

**Templates:**

- [`content/templates/screening-record.md`](../healing-swarm/content/templates/screening-record.md)

**Safety context (load before generating output):**

- [`shared/contraindications.md`](../healing-swarm/shared/contraindications.md)
- [`shared/crisis-response.md`](../healing-swarm/shared/crisis-response.md)

**Outputs:** `screening-record.md`

## Example usage

```bash
/practice-screening "wim hof breathing"
/practice-screening "21-day orbital journey"
/practice-screening "is cold exposure safe with high blood pressure"
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
