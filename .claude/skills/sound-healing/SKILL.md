---
name: sound-healing
description: Builds a vocal sound-healing practice (toning, mantra, chanting, humming) with timing and safety notes. Use when the user wants a sound, chant, toning, or humming practice. For toning tuned to ancient-site frequencies, use archaeoacoustic-toning. Do NOT use for the research behind sound (use sound-research).
---

# Sound Healing

Sound-based healing protocols (vocal toning, mantra, chanting, humming)

**Trigger:** `/sound-healing`  ·  **Category:** sound

## When to use

Builds a vocal sound-healing practice (toning, mantra, chanting, humming) with timing and safety notes. Use when the user wants a sound, chant, toning, or humming practice. For toning tuned to ancient-site frequencies, use archaeoacoustic-toning. Do NOT use for the research behind sound (use sound-research).

## Agents this skill coordinates

- [`sound-healing-guide`](../healing-swarm/content/sound-healing-guide.md)
- [`traditions-scholar`](../healing-swarm/research/traditions-scholar.md)
- [`clinical-researcher`](../healing-swarm/research/clinical-researcher.md)
- [`content-writer`](../healing-swarm/content/content-writer.md)
- [`ethics-guardian`](../healing-swarm/quality/ethics-guardian.md)

**Workflow:** standalone — agent-driven, no orchestrated workflow.

**Templates:**

- [`content/templates/sound-protocol.md`](../healing-swarm/content/templates/sound-protocol.md)

**Outputs:** `sound-protocol.md`, `session-timing.json`, `quick-reference.md`

## Example usage

```bash
/sound-healing "humming practice" --level beginner
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
