---
name: archaeoacoustic-toning
description: Builds a vocal toning practice tuned to the resonant frequencies of ancient sacred sites, structured listen-hum-tone-harmonics-silence. Use when the user asks about sacred-site frequencies, archaeoacoustics, or resonant toning. For general vocal toning without the sacred-site framing, use sound-healing. Frame frequency claims honestly.
---

# Archaeoacoustic Toning

Guided vocal toning practices based on resonant frequencies of ancient sacred sites. Progressive structure: listen, hum, tone, harmonics, silence.

**Trigger:** `/archaeoacoustic-toning`  ·  **Category:** sound

## When to use

Builds a vocal toning practice tuned to the resonant frequencies of ancient sacred sites, structured listen-hum-tone-harmonics-silence. Use when the user asks about sacred-site frequencies, archaeoacoustics, or resonant toning. For general vocal toning without the sacred-site framing, use sound-healing. Frame frequency claims honestly.

## Agents this skill coordinates

- [`hyperhumanism-researcher`](../healing-swarm/research/hyperhumanism-researcher.md)
- [`archaeoacoustic-guide`](../healing-swarm/content/archaeoacoustic-guide.md)
- [`content-writer`](../healing-swarm/content/content-writer.md)
- [`ethics-guardian`](../healing-swarm/quality/ethics-guardian.md)

**Workflow:** [`content/archaeoacoustic-toning-workflow.yaml`](../healing-swarm/content/archaeoacoustic-toning-workflow.yaml)

**Templates:**

- [`content/templates/archaeoacoustic-toning.md`](../healing-swarm/content/templates/archaeoacoustic-toning.md)
- [`content/templates/resonance-body-map.md`](../healing-swarm/content/templates/resonance-body-map.md)

**Safety context (load before generating output):**

- [`shared/contraindications.md`](../healing-swarm/shared/contraindications.md)

**Outputs:** `toning-practice.md`, `resonance-body-map.md`, `evidence-brief.md`

## Example usage

```bash
/archaeoacoustic-toning "117 Hz King's Chamber" --depth standard
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
