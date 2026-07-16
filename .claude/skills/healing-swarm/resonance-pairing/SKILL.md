---
name: resonance-pairing
description: "Designs paired or small-group meditation protocols from Grinberg's transferred-potential work, with consent and boundary frameworks. Sensitive: use only when the user explicitly asks for a paired, dyad, or group resonance practice. Do NOT auto-launch from general relationship talk, and keep the consent framework. For everyday relationship practices use relational-practice instead."
---

# Resonance Pairing

Paired and group meditation protocols based on Grinberg's transferred potential research. Consent and safety are paramount. Ethics review is CRITICAL for all outputs.

**Trigger:** `/resonance-pairing`  ·  **Category:** consciousness

## When to use

Designs paired or small-group meditation protocols from Grinberg's transferred-potential work, with consent and boundary frameworks. Sensitive: use only when the user explicitly asks for a paired, dyad, or group resonance practice. Do NOT auto-launch from general relationship talk, and keep the consent framework. For everyday relationship practices use relational-practice instead.

## Agents this skill coordinates

- [`consciousness-researcher`](../research/consciousness-researcher.md)
- [`resonance-facilitator`](../content/resonance-facilitator.md)
- [`content-writer`](../content/content-writer.md)
- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** [`content/resonance-workflow.yaml`](../content/resonance-workflow.yaml)

**Templates:**

- [`content/templates/resonance-pairing.md`](../content/templates/resonance-pairing.md)

**Safety context (load before generating output):**

- [`shared/crisis-response.md`](../shared/crisis-response.md)
- [`shared/contraindications.md`](../shared/contraindications.md)

**Outputs:** `pairing-protocol.md`, `participant-guide.md`, `consent-framework.md`, `boundary-guidelines.md`

## Example usage

```bash
/resonance-pairing "first session" --group dyad --level first_time
/resonance-pairing "group meditation" --group small_group --level experienced
```

## Safety

> This is a **sensitive** skill. Do not auto-launch it from loose conversational cues; wait for an explicit request, offer it gently, and honor the guards in the description above.

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
