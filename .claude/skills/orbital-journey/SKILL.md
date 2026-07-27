---
name: orbital-journey
description: "Designs a multi-day transpersonal journey through Grinberg's consciousness orbitals, with screening and safety architecture. Sensitive: use only when the user explicitly asks for a multi-day consciousness journey or orbital program. Do NOT auto-launch, and screen for crisis, psychosis risk, or dissociation first."
---

# Orbital Journey

Progressive multi-day journeys through Grinberg's consciousness orbitals. Ethics review is CRITICAL for transpersonal content. Includes comprehensive safety architecture and screening.

**Trigger:** `/orbital-journey`  ·  **Category:** consciousness

## When to use

Designs a multi-day transpersonal journey through Grinberg's consciousness orbitals, with screening and safety architecture. Sensitive: use only when the user explicitly asks for a multi-day consciousness journey or orbital program. Do NOT auto-launch, and screen for crisis, psychosis risk, or dissociation first.

## Agents this skill coordinates

- [`consciousness-researcher`](../healing-swarm/research/consciousness-researcher.md)
- [`orbital-architect`](../healing-swarm/content/orbital-architect.md)
- [`coherence-guide`](../healing-swarm/content/coherence-guide.md)
- [`content-writer`](../healing-swarm/content/content-writer.md)
- [`ethics-guardian`](../healing-swarm/quality/ethics-guardian.md)

**Workflow:** [`content/orbital-workflow.yaml`](../healing-swarm/content/orbital-workflow.yaml)

**Templates:**

- [`content/templates/orbital-day.md`](../healing-swarm/content/templates/orbital-day.md)

**Safety context (load before generating output):**

- [`shared/crisis-response.md`](../healing-swarm/shared/crisis-response.md)
- [`shared/contraindications.md`](../healing-swarm/shared/contraindications.md)

**Outputs:** `journey-map.md`, `daily-practices/`, `orbital-guide.md`, `safety-protocols.md`, `progress-tracker.md`

## Example usage

```bash
/orbital-journey --duration 7 --level beginner
/orbital-journey --duration 21 --level intermediate
/orbital-journey --duration 28 --level advanced
```

## Safety

> This is a **sensitive** skill. Do not auto-launch it from loose conversational cues; wait for an explicit request, offer it gently, and honor the guards in the description above.

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
