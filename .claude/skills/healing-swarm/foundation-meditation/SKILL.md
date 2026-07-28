---
name: foundation-meditation
description: Builds a plain, framework-neutral meditation — breath awareness, body scan, or loving-kindness — at 5, 10, or 20 minutes, with honest notes on what practice does and does not do and what difficulty can look like. Use when the user asks for a simple meditation, a breathing practice, a body scan, or a loving-kindness practice without naming a specific tradition or framework. This is the plain default. For Grinberg-style whole-brain work use coherence-meditation; for Wilber's gross/subtle/causal state training use spectrum-meditation; for reflective questioning on a theme use contemplative-inquiry; for practice while moving use walking-meditation; for toning, chant, or humming use sound-healing; for four-quadrant reflection on a situation use aqal-check-in. Do NOT layer any framework or cosmology onto the instructions, and do NOT present it as therapy.
---

# Foundation Meditation

Plain, framework-neutral meditation: breath awareness, body scan, and loving-kindness at 5, 10, or 20 minutes. No Integral, Grinberg, or hyperhumanism framing and no tradition-specific cosmology. The default starting point when someone simply wants to sit down and meditate.

**Trigger:** `/foundation-meditation`  ·  **Category:** meditation

## When to use

Builds a plain, framework-neutral meditation — breath awareness, body scan, or loving-kindness — at 5, 10, or 20 minutes, with honest notes on what practice does and does not do and what difficulty can look like. Use when the user asks for a simple meditation, a breathing practice, a body scan, or a loving-kindness practice without naming a specific tradition or framework. This is the plain default. For Grinberg-style whole-brain work use coherence-meditation; for Wilber's gross/subtle/causal state training use spectrum-meditation; for reflective questioning on a theme use contemplative-inquiry; for practice while moving use walking-meditation; for toning, chant, or humming use sound-healing; for four-quadrant reflection on a situation use aqal-check-in. Do NOT layer any framework or cosmology onto the instructions, and do NOT present it as therapy.

## Agents this skill coordinates

- [`meditation-guide`](../content/meditation-guide.md)
- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** standalone — agent-driven, no orchestrated workflow.

**Templates:**

- [`content/templates/practice-instruction.md`](../content/templates/practice-instruction.md)

**Safety context (load before generating output):**

- [`shared/contraindications.md`](../shared/contraindications.md)
- [`shared/crisis-response.md`](../shared/crisis-response.md)

**Outputs:** `practice-instruction.md`

## Example usage

```bash
/foundation-meditation "breath awareness" --duration 10
/foundation-meditation "body scan" --duration 20
/foundation-meditation "loving-kindness" --duration 5
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
