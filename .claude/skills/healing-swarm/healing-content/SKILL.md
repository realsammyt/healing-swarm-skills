---
name: healing-content
description: Writes healing content: prayers, invocations, evidence boxes, historical notes, guided visualizations, practice instructions, and journal prompts. Use when the user wants written healing material with proper attribution and honest evidence framing.
---

# Healing Content

Write content for healing applications. Prayers, invocations, evidence boxes, historical notes, guided visualizations, practice instructions, journal prompts.

**Trigger:** `/healing-content`  ·  **Category:** content

## When to use

Writes healing content: prayers, invocations, evidence boxes, historical notes, guided visualizations, practice instructions, and journal prompts. Use when the user wants written healing material with proper attribution and honest evidence framing.

## Agents this skill coordinates

- [`content-writer`](../content/content-writer.md)

**Workflow:** [`content/workflow.yaml`](../content/workflow.yaml)

**Templates:**

- [`content/templates/prayer.md`](../content/templates/prayer.md)
- [`content/templates/evidence-box.md`](../content/templates/evidence-box.md)
- [`content/templates/historical-note.md`](../content/templates/historical-note.md)
- [`content/templates/visualization.md`](../content/templates/visualization.md)
- [`content/templates/practice-instruction.md`](../content/templates/practice-instruction.md)
- [`content/templates/journal-prompt.md`](../content/templates/journal-prompt.md)

**Outputs:** `content-library/`

## Example usage

```bash
/healing-content --type prayer --tradition "Jewish mystical" --angel Raphael
/healing-content --type evidence-box --topic "visualization and healing"
/healing-content --type visualization --focus "hand healing"
```

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
