---
name: expressive-healing
description: Builds creative healing practices (Pennebaker expressive writing, art-as-process, bibliotherapy). Use when the user wants to process through writing, art, or reading. For extended multi-day writing sequences, use healing-journaling.
---

# Expressive Healing

Creative healing practices (therapeutic writing, art-as-process, bibliotherapy)

**Trigger:** `/expressive-healing`  ·  **Category:** expressive

## When to use

Builds creative healing practices (Pennebaker expressive writing, art-as-process, bibliotherapy). Use when the user wants to process through writing, art, or reading. For extended multi-day writing sequences, use healing-journaling.

## Agents this skill coordinates

- [`expressive-guide`](../content/expressive-guide.md)
- [`traditions-scholar`](../research/traditions-scholar.md)
- [`clinical-researcher`](../research/clinical-researcher.md)
- [`content-writer`](../content/content-writer.md)
- [`ethics-guardian`](../quality/ethics-guardian.md)

**Workflow:** standalone — agent-driven, no orchestrated workflow.

**Templates:**

- [`content/templates/expressive-protocol.md`](../content/templates/expressive-protocol.md)

**Outputs:** `expressive-protocol.md`, `journal-prompts.md`

## Example usage

```bash
/expressive-healing "healing writing" --method pennebaker
```

## Safety

> Outputs require ethics approval before release. The `ethics-guardian` review applies, and it can block content that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
