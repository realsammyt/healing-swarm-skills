---
name: consciousness-audit
description: "A periodic check-in that reviews a person's practice history and maps their current consciousness-literacy level across the somatic, perceptual, relational, and attentional clusters, tracking development over weeks and months. Use when the user wants a longitudinal review of how their practice is progressing or where to focus next. Do NOT use for a single-session state assessment: for one sitting use sound-consciousness with its Milliere six-dimension self-assessment, since this skill tracks cumulative change over time rather than a single session."
---

# Consciousness Audit

Periodic consciousness-literacy check-in. Reviews practice history and maps the current literacy level per modality cluster over weeks and months.

**Trigger:** `/consciousness-audit`  ·  **Category:** consciousness

## When to use

A periodic check-in that reviews a person's practice history and maps their current consciousness-literacy level across the somatic, perceptual, relational, and attentional clusters, tracking development over weeks and months. Use when the user wants a longitudinal review of how their practice is progressing or where to focus next. Do NOT use for a single-session state assessment: for one sitting use sound-consciousness with its Milliere six-dimension self-assessment, since this skill tracks cumulative change over time rather than a single session.

## Agents this skill coordinates

- [`hyperhumanism-researcher`](../research/hyperhumanism-researcher.md)
- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** standalone — agent-driven, no orchestrated workflow.

**Safety context (load before generating output):**

- [`shared/consciousness-literacy-levels.md`](../shared/consciousness-literacy-levels.md)
- [`shared/outcome-measurement.md`](../shared/outcome-measurement.md)

**Outputs:** `literacy-audit.md`

## Example usage

```bash
/consciousness-audit "8-week check-in on my daily practice"
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
