---
name: cyberdelic-research
description: Researches consciousness technologies and endo-technology science, including archaeoacoustics and Smith's hyperhumanism evidence base. Use when the user wants the evidence or models behind cyberdelic or endo-technology claims. Do NOT use to build an experience stack (use holotechnica-stack).
license: CC-BY-NC-SA-4.0
---

# Cyberdelic Research

Deep research into consciousness technologies and endo-technology science. Covers evidence base, archaeoacoustics, consciousness models.

## When to use

Researches consciousness technologies and endo-technology science, including archaeoacoustics and Smith's hyperhumanism evidence base. Use when the user wants the evidence or models behind cyberdelic or endo-technology claims. Do NOT use to build an experience stack (use holotechnica-stack).

## How to run

Follow the phases in [`cyberdelic-research-workflow.yaml`](references/research/cyberdelic-research-workflow.yaml). Run each phase inline, one after another. Each phase writes its result to a file (for example `brief.md`, then `design.md`) and the next phase reads it, so a run can be resumed. If your agent supports subagents, you may hand a phase to one; the files stay the handoff.

Roles (open the brief for the role you are playing):

- [`hyperhumanism-researcher`](references/research/hyperhumanism-researcher.md)
- [`traditions-scholar`](references/research/traditions-scholar.md)
- [`clinical-researcher`](references/research/clinical-researcher.md)
- [`ethics-guardian`](references/quality/ethics-guardian.md)

**Outputs** (write to `./healing-output/`): `research-brief.md`, `evidence-synthesis.md`, `technology-assessment.md`

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
