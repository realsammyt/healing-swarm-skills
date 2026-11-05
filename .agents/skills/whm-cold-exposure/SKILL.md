---
name: whm-cold-exposure
description: Builds a graduated cold-exposure plan, from cold-shower finishes to immersion, with safety review. Use when the user asks for cold exposure, cold showers, or ice-bath training. Screen for cardiovascular conditions and never recommend unsupervised open-water immersion.
license: CC-BY-NC-SA-4.0
---

# Whm Cold Exposure

Progressive cold exposure protocols as part of the Wim Hof Method. Produces safe, graduated cold training plans from cold shower finishes through full cold immersion. Safety review is CRITICAL for all outputs.

## When to use

Builds a graduated cold-exposure plan, from cold-shower finishes to immersion, with safety review. Use when the user asks for cold exposure, cold showers, or ice-bath training. Screen for cardiovascular conditions and never recommend unsupervised open-water immersion.

## Safety core (read this before anything else)

These rules apply even if you load nothing else from this skill.

**Crisis comes first.** If the person mentions suicidal thoughts, self-harm, wanting to die, or a medical emergency, stop the practice and give crisis resources before anything else:

- 988 Suicide & Crisis Lifeline: call or text **988** (US)
- Crisis Text Line: text HOME to **741741** (US)
- Medical emergency: call the local emergency number (911 in the US).

These are US numbers. Give the person's local equivalent if you know their region; otherwise say they're US defaults. Never treat suicidal thoughts as only a spiritual crisis.

**If a practice goes wrong:** stop, ground (feet on the floor, eyes open, name five things you can see), then assess. Loss of consciousness, chest pain, or inability to reorient means emergency care now. Never say "push through." Never frame stopping as failure.

**Screen before any practice.** Ask about medical conditions, medications, pregnancy, surgery in the last 6 weeks, heart or blood pressure problems, breathing conditions, and seizures. Before intensive or transpersonal practices also ask about mental health diagnoses, dissociation, trauma, and psychosis history. If a contraindication shows up, offer a gentler alternative or recommend talking to a clinician first. Breath-holding, hyperventilation and deep-trance practices are never done in or near water (bath, pool, open water) or while driving: fainting there can kill.

**Never:** diagnose; tell anyone to stop or change prescribed medication; claim a practice cures a disease or replaces treatment; promise outcomes or timelines; blame or shame someone for not improving; use fear to motivate.

Full protocols: [`crisis-response.md`](references/shared/crisis-response.md), [`contraindications.md`](references/shared/contraindications.md), [`ethics-guardrails.md`](references/shared/ethics-guardrails.md).

## How to run

Follow the phases in [`breathwork-workflow.yaml`](references/content/breathwork-workflow.yaml). Run each phase inline, one after another. Each phase writes its result to a file (for example `brief.md`, then `design.md`) and the next phase reads it, so a run can be resumed. If your agent supports subagents, you may hand a phase to one; the files stay the handoff.

Roles (open the brief for the role you are playing):

- [`cold-exposure-guide`](references/content/cold-exposure-guide.md)
- [`clinical-researcher`](references/research/clinical-researcher.md)
- [`traditions-scholar`](references/research/traditions-scholar.md)
- [`content-writer`](references/content/content-writer.md)
- [`ethics-guardian`](references/quality/ethics-guardian.md)

**Templates:** [`cold-exposure-protocol.md`](references/content/templates/cold-exposure-protocol.md)

**Outputs** (write to `./healing-output/`): `cold-exposure-protocol.md`, `weekly-progression.md`, `environment-guide.md`, `safety-checklist.md`

Before releasing output, review it against the safety core above and [`ethics-guardrails.md`](references/shared/ethics-guardrails.md). Block anything that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
