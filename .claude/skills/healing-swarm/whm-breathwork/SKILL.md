---
name: whm-breathwork
description: Builds a Wim Hof Method breathing session with round structure, retention guidance, and medical safety framing. Use when the user asks for WHM, Wim Hof, or power-breathing protocols. Always keep the safety guards (never in water, never while driving) and screen for cardiovascular conditions and pregnancy.
---

# Whm Breathwork

Wim Hof Method breathing protocols with comprehensive safety framing. Produces guided breathing sessions with round structures, retention guidance, and progressive training plans. Coordinates research, protocol design, and safety review.

**Trigger:** `/whm-breathwork`  ·  **Category:** breathwork

## When to use

Builds a Wim Hof Method breathing session with round structure, retention guidance, and medical safety framing. Use when the user asks for WHM, Wim Hof, or power-breathing protocols. Always keep the safety guards (never in water, never while driving) and screen for cardiovascular conditions and pregnancy.

## Agents this skill coordinates

- [`breathwork-coach`](../content/breathwork-coach.md)
- [`traditions-scholar`](../research/traditions-scholar.md)
- [`clinical-researcher`](../research/clinical-researcher.md)
- [`content-writer`](../content/content-writer.md)
- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** [`content/breathwork-workflow.yaml`](../content/breathwork-workflow.yaml)

**Templates:**

- [`content/templates/breathwork-protocol.md`](../content/templates/breathwork-protocol.md)

**Outputs:** `breathwork-protocol.md`, `session-timing.json`, `quick-reference.md`, `audio-script.md`

## Example usage

```bash
/whm-breathwork "first session" --level beginner
/whm-breathwork "week 4 training" --level intermediate
/whm-breathwork "deep practice" --level advanced
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
