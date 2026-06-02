---
name: umwelt-practice
description: Builds sensory-augmentation exercises for perceiving-as-other and extending the sensorium, with grounding. Sensitive: use when the user wants to explore other-than-human perception or sensory expansion. Do NOT use with dissociative disorders; keep grounding present and stop on derealization.
---

# Umwelt Practice

Sensory augmentation exercises for perceiving-as-other and extending the sensorium. CONTRAINDICATED for dissociative disorders.

**Trigger:** `/umwelt-practice`  ·  **Category:** consciousness

## When to use

Builds sensory-augmentation exercises for perceiving-as-other and extending the sensorium, with grounding. Sensitive: use when the user wants to explore other-than-human perception or sensory expansion. Do NOT use with dissociative disorders; keep grounding present and stop on derealization.

## Agents this skill coordinates

- [`hyperhumanism-researcher`](../research/hyperhumanism-researcher.md)
- [`umwelt-facilitator`](../content/umwelt-facilitator.md)
- [`content-writer`](../content/content-writer.md)
- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** [`content/umwelt-workflow.yaml`](../content/umwelt-workflow.yaml)

**Templates:**

- [`content/templates/umwelt-exercise.md`](../content/templates/umwelt-exercise.md)

**Outputs:** `umwelt-practice.md`, `sensory-map.md`, `grounding-guide.md`

## Example usage

```bash
/umwelt-practice "forest sensing" --level perceiving_as_other
```

## Safety

> This is a **sensitive** skill. Do not auto-launch it from loose conversational cues; wait for an explicit request, offer it gently, and honor the guards in the description above.

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
