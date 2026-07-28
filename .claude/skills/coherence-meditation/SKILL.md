---
name: coherence-meditation
description: Produces a guided interhemispheric coherence meditation in Grinberg's self-allusive style, with evidence context. Use when the user wants a coherence, balance, or whole-brain meditation. Do NOT present consciousness-field claims as established fact.
---

# Coherence Meditation

Guided interhemispheric coherence practices based on Grinberg's self-allusive meditation protocol. Produces 20-minute guided meditations with evidence context and safety framing.

**Trigger:** `/coherence-meditation`  ·  **Category:** consciousness

## When to use

Produces a guided interhemispheric coherence meditation in Grinberg's self-allusive style, with evidence context. Use when the user wants a coherence, balance, or whole-brain meditation. Do NOT present consciousness-field claims as established fact.

## Agents this skill coordinates

- [`consciousness-researcher`](../healing-swarm/research/consciousness-researcher.md)
- [`coherence-guide`](../healing-swarm/content/coherence-guide.md)
- [`content-writer`](../healing-swarm/content/content-writer.md)
- [`ethics-guardian`](../healing-swarm/quality/ethics-guardian.md)

**Workflow:** [`research/coherence-workflow.yaml`](../healing-swarm/research/coherence-workflow.yaml)

**Templates:**

- [`content/templates/coherence-practice.md`](../healing-swarm/content/templates/coherence-practice.md)

**Outputs:** `coherence-practice.md`, `evidence-brief.md`, `audio-timing.json`

## Example usage

```bash
/coherence-meditation "morning coherence" --level beginner
/coherence-meditation "healing support" --level advanced --duration 30
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
