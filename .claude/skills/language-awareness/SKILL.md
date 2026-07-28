---
name: language-awareness
description: "Builds progressive cognitive-deautomatization practices for noticing how language shapes perception, with grounding. Sensitive: use when the user asks to observe labeling, un-name experience, or work with Zen/Dzogchen-style perception. Do NOT auto-launch from loose mentions of language or perception; wait for an explicit request for this practice. Do NOT push past grounding; stop if depersonalization or derealization shows up."
---

# Language Awareness

Cognitive deautomatization and language awareness protocols. Produces progressive practices for observing how language shapes perception, from label delay to extended un-naming. Based on contemplative traditions (Zen, Dzogchen, Phenomenology) and Chase Hughes' research. Ethics review is CRITICAL for psychological safety.

**Trigger:** `/language-awareness`  ·  **Category:** perception

## When to use

Builds progressive cognitive-deautomatization practices for noticing how language shapes perception, with grounding. Sensitive: use when the user asks to observe labeling, un-name experience, or work with Zen/Dzogchen-style perception. Do NOT auto-launch from loose mentions of language or perception; wait for an explicit request for this practice. Do NOT push past grounding; stop if depersonalization or derealization shows up.

## Agents this skill coordinates

- [`language-awareness-guide`](../healing-swarm/content/language-awareness-guide.md)
- [`traditions-scholar`](../healing-swarm/research/traditions-scholar.md)
- [`clinical-researcher`](../healing-swarm/research/clinical-researcher.md)
- [`content-writer`](../healing-swarm/content/content-writer.md)
- [`ethics-guardian`](../healing-swarm/quality/ethics-guardian.md)

**Workflow:** [`content/language-awareness-workflow.yaml`](../healing-swarm/content/language-awareness-workflow.yaml)

**Templates:**

- [`content/templates/language-awareness-protocol.md`](../healing-swarm/content/templates/language-awareness-protocol.md)

**Safety context (load before generating output):**

- [`shared/crisis-response.md`](../healing-swarm/shared/crisis-response.md)
- [`shared/contraindications.md`](../healing-swarm/shared/contraindications.md)

**Outputs:** `language-awareness-protocol.md`, `grounding-guide.md`, `practice-journal-prompts.md`

## Example usage

```bash
/language-awareness "first practice" --level observation
/language-awareness "full program" --duration 8 --progressive
/language-awareness "meaning collapse" --level interruption
```

## Safety

> This is a **sensitive** skill. Do not auto-launch it from loose conversational cues; wait for an explicit request, offer it gently, and honor the guards in the description above.

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
