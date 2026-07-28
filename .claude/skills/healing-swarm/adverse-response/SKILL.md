---
name: adverse-response
description: "Guides the response after a practice went wrong: stabilize, ground, assess severity against the crisis-response table, choose a referral level, adapt or retire the practice, and log the event. Sensitive: Do NOT auto-launch for ordinary practice questions or as therapy; DO use when a user reports a distressing or adverse reaction to a practice, during it or in the hours and days after. This is not crisis care — for active crisis follow shared/crisis-response.md escalation. For screening before a practice, use practice-screening; to rebuild an adapted protocol afterward, return to the practice skill itself (whm-breathwork, coherence-meditation, language-awareness, and so on)."
---

# Adverse Response

Response flow after a distressing or adverse reaction to a practice: stabilize, ground, assess the referral level, adapt or retire the practice, and log the event. Built on the crisis-response six-step protocol and its per-modality reaction catalog.

**Trigger:** `/adverse-response`  ·  **Category:** quality

## When to use

Guides the response after a practice went wrong: stabilize, ground, assess severity against the crisis-response table, choose a referral level, adapt or retire the practice, and log the event. Sensitive: Do NOT auto-launch for ordinary practice questions or as therapy; DO use when a user reports a distressing or adverse reaction to a practice, during it or in the hours and days after. This is not crisis care — for active crisis follow shared/crisis-response.md escalation. For screening before a practice, use practice-screening; to rebuild an adapted protocol afterward, return to the practice skill itself (whm-breathwork, coherence-meditation, language-awareness, and so on).

## Agents this skill coordinates

- [`adverse-response-guide`](../content/adverse-response-guide.md)
- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** standalone — agent-driven, no orchestrated workflow.

**Templates:**

- [`content/templates/adverse-event-log.md`](../content/templates/adverse-event-log.md)

**Safety context (load before generating output):**

- [`shared/crisis-response.md`](../shared/crisis-response.md)
- [`shared/contraindications.md`](../shared/contraindications.md)

**Outputs:** `adverse-event-log.md`

## Example usage

```bash
/adverse-response "the breathing made me panic"
/adverse-response "I feel strange since yesterday's practice"
```

## Safety

> This is a **sensitive** skill. Do not auto-launch it from loose conversational cues; wait for an explicit request, offer it gently, and honor the guards in the description above.

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
