---
name: outcome-tracking
description: Builds a pre/post measurement plan from validated self-report instruments (WHO-5, PSS-10, PSQI, VAS) with a privacy-first local record and an honest reading of a single-person time series. Use when the user wants to track wellbeing, stress, sleep, or pain alongside a practice, or asks whether a practice is doing anything. This is measurement, not clinical assessment, and no score is a diagnosis. Do NOT use for consciousness-literacy levels across modality clusters (use consciousness-audit, which tracks ordered self-rated levels rather than validated instruments). For the plan being measured, use practice-pathway.
---

# Outcome Tracking

Pre/post measurement plans built from validated self-report instruments (WHO-5, PSS-10, PSQI, VAS). Privacy-first local records, honest reading of a single-person time series, no causal claims. Not clinical assessment.

**Trigger:** `/outcome-tracking`  ·  **Category:** quality

## When to use

Builds a pre/post measurement plan from validated self-report instruments (WHO-5, PSS-10, PSQI, VAS) with a privacy-first local record and an honest reading of a single-person time series. Use when the user wants to track wellbeing, stress, sleep, or pain alongside a practice, or asks whether a practice is doing anything. This is measurement, not clinical assessment, and no score is a diagnosis. Do NOT use for consciousness-literacy levels across modality clusters (use consciousness-audit, which tracks ordered self-rated levels rather than validated instruments). For the plan being measured, use practice-pathway.

## Agents this skill coordinates

- [`outcome-tracker`](../healing-swarm/content/outcome-tracker.md)
- [`ethics-guardian`](../healing-swarm/quality/ethics-guardian.md)

**Workflow:** standalone — agent-driven, no orchestrated workflow.

**Templates:**

- [`content/templates/outcome-log.md`](../healing-swarm/content/templates/outcome-log.md)

**Safety context (load before generating output):**

- [`shared/outcome-measurement.md`](../healing-swarm/shared/outcome-measurement.md)
- [`shared/crisis-response.md`](../healing-swarm/shared/crisis-response.md)

**Outputs:** `measurement-plan.md`, `outcome-log.md`

## Example usage

```bash
/outcome-tracking "8 weeks of stress practice, is it doing anything?"
/outcome-tracking "track sleep alongside my evening practice"
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
