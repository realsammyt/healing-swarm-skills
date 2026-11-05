---
name: archaeoacoustic-toning
description: Builds a vocal toning practice tuned to the resonant frequencies of ancient sacred sites, structured listen-hum-tone-harmonics-silence. Use when the user asks about sacred-site frequencies, archaeoacoustics, or resonant toning. For general vocal toning without the sacred-site framing, use sound-healing. Frame frequency claims honestly.
license: CC-BY-NC-SA-4.0
---

# Archaeoacoustic Toning

Guided vocal toning practices based on resonant frequencies of ancient sacred sites. Progressive structure: listen, hum, tone, harmonics, silence.

## When to use

Builds a vocal toning practice tuned to the resonant frequencies of ancient sacred sites, structured listen-hum-tone-harmonics-silence. Use when the user asks about sacred-site frequencies, archaeoacoustics, or resonant toning. For general vocal toning without the sacred-site framing, use sound-healing. Frame frequency claims honestly.

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

Full protocols: [`contraindications.md`](references/shared/contraindications.md), [`ethics-guardrails.md`](references/shared/ethics-guardrails.md).

## How to run

Follow the phases in [`archaeoacoustic-toning-workflow.yaml`](references/content/archaeoacoustic-toning-workflow.yaml). Run each phase inline, one after another. Each phase writes its result to a file (for example `brief.md`, then `design.md`) and the next phase reads it, so a run can be resumed. If your agent supports subagents, you may hand a phase to one; the files stay the handoff.

Roles (open the brief for the role you are playing):

- [`hyperhumanism-researcher`](references/research/hyperhumanism-researcher.md)
- [`archaeoacoustic-guide`](references/content/archaeoacoustic-guide.md)
- [`content-writer`](references/content/content-writer.md)
- [`ethics-guardian`](references/quality/ethics-guardian.md)

**Templates:** [`archaeoacoustic-toning.md`](references/content/templates/archaeoacoustic-toning.md), [`resonance-body-map.md`](references/content/templates/resonance-body-map.md)

**Outputs** (write to `./healing-output/`): `toning-practice.md`, `resonance-body-map.md`, `evidence-brief.md`

Before releasing output, review it against the safety core above and [`ethics-guardrails.md`](references/shared/ethics-guardrails.md). Block anything that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
