---
name: sound-consciousness
description: Builds a Museum-of-Consciousness style audio sequence with Milliere six-dimension self-assessment between samples. Use when the user wants short consciousness-shifting sound samples with self-assessment. Frame state claims as subjective.
---

# Sound Consciousness

Museum of Consciousness-style audio experiences with Milliere 6D self-assessment. Short consciousness samples with assessment between each.

**Trigger:** `/sound-consciousness`  ·  **Category:** sound

## When to use

Builds a Museum-of-Consciousness style audio sequence with Milliere six-dimension self-assessment between samples. Use when the user wants short consciousness-shifting sound samples with self-assessment. Frame state claims as subjective.

## Agents this skill coordinates

- [`hyperhumanism-researcher`](../healing-swarm/research/hyperhumanism-researcher.md)
- [`archaeoacoustic-guide`](../healing-swarm/content/archaeoacoustic-guide.md)
- [`content-writer`](../healing-swarm/content/content-writer.md)
- [`ethics-guardian`](../healing-swarm/quality/ethics-guardian.md)

**Workflow:** [`content/sound-consciousness-workflow.yaml`](../healing-swarm/content/sound-consciousness-workflow.yaml)

**Templates:**

- [`content/templates/consciousness-exhibit.md`](../healing-swarm/content/templates/consciousness-exhibit.md)

**Safety context (load before generating output):**

- [`shared/crisis-response.md`](../healing-swarm/shared/crisis-response.md)
- [`shared/contraindications.md`](../healing-swarm/shared/contraindications.md)

**Outputs:** `consciousness-exhibit.md`, `self-assessment-form.md`, `evidence-brief.md`

## Example usage

```bash
/sound-consciousness "mindfulness samples" --duration 20
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
