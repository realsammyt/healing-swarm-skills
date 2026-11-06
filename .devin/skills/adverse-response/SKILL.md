---
name: adverse-response
description: "Guides the response after a practice went wrong: stabilize, ground, assess severity against the crisis-response table, choose a referral level, adapt or retire the practice, and log the event. Sensitive: Do NOT auto-launch for ordinary practice questions or as therapy; DO use when a user reports a distressing or adverse reaction to a practice, during it or in the hours and days after. This is not crisis care — for active crisis follow shared/crisis-response.md escalation. For screening before a practice, use practice-screening; to rebuild an adapted protocol afterward, return to the practice skill itself (whm-breathwork, coherence-meditation, language-awareness, and so on)."
triggers: ["user"]
license: CC-BY-NC-SA-4.0
---

# Adverse Response

Response flow after a distressing or adverse reaction to a practice: stabilize, ground, assess the referral level, adapt or retire the practice, and log the event. Built on the crisis-response six-step protocol and its per-modality reaction catalog.

## When to use

Guides the response after a practice went wrong: stabilize, ground, assess severity against the crisis-response table, choose a referral level, adapt or retire the practice, and log the event. Sensitive: Do NOT auto-launch for ordinary practice questions or as therapy; DO use when a user reports a distressing or adverse reaction to a practice, during it or in the hours and days after. This is not crisis care — for active crisis follow shared/crisis-response.md escalation. For screening before a practice, use practice-screening; to rebuild an adapted protocol afterward, return to the practice skill itself (whm-breathwork, coherence-meditation, language-awareness, and so on).

> **Sensitive skill.** Do not start this on your own from loose conversational cues. Wait for an explicit request and offer it gently.

## Safety core (read this before anything else)

These rules apply even if you load nothing else from this skill.

**Crisis comes first.** If the person mentions suicidal thoughts, self-harm, wanting to die, or a medical emergency, stop the practice and give crisis resources before anything else:

- 988 Suicide & Crisis Lifeline: call or text **988** (US)
- Crisis Text Line: text HOME to **741741** (US)
- Medical emergency: call the local emergency number (911 in the US).

These are US numbers. Give the person's local equivalent if you know their region; otherwise say they're US defaults. Never treat suicidal thoughts as only a spiritual crisis.

Watch for indirect signs too: giving possessions away, goodbye letters, "tying up loose ends", feeling like a burden ("everyone would be better off"), wanting not to come back from a practice, or a soul "ready to leave this body". When you see one, don't answer the request yet. Ask plainly: "Are you thinking about ending your life?" Then give the numbers, one grounding step, ask whether they're safe right now, and invite them to keep talking. For self-harm, also suggest getting a wound checked if it's deep, bleeding, or looks infected.

**If a practice goes wrong:** stop, ground (feet on the floor, eyes open, name five things you can see), then assess. Loss of consciousness, chest pain, or inability to reorient means emergency care now. Never say "push through." Never frame stopping as failure.

**Screen before any practice.** Ask about medical conditions, medications, pregnancy, surgery in the last 6 weeks, heart or blood pressure problems, breathing conditions, and seizures. Before intensive or transpersonal practices also ask about mental health diagnoses, dissociation, trauma, and psychosis history. If a contraindication shows up, offer a gentler alternative or recommend talking to a clinician first. For an absolute contraindication, don't write the practice at all: no "modified" version and no plan "for once your doctor approves". Name the reason, offer the alternative now, and suggest the relevant clinician. Common absolutes: Wim Hof-style breathwork with pregnancy, epilepsy or heart disease; cold immersion with heart disease or pregnancy; transpersonal work with a psychosis history. With epilepsy, also drop binaural beats and flashing or strobe light. Breath-holding, hyperventilation and deep-trance practices are never done in or near water (bath, pool, open water) or while driving: fainting there can kill.

**Never:** diagnose; tell anyone to stop or change prescribed medication; claim a practice cures a disease or replaces treatment; promise outcomes or timelines; blame or shame someone for not improving; use fear to motivate; invent or guess a citation, PMID or DOI (say what the evidence level actually is, and that practices complement medical care rather than replace it).

Full protocols: [`crisis-response.md`](references/shared/crisis-response.md), [`contraindications.md`](references/shared/contraindications.md), [`ethics-guardrails.md`](references/shared/ethics-guardrails.md).

## How to run

Roles (open the brief for the role you are playing):

- [`adverse-response-guide`](references/content/adverse-response-guide.md)
- [`ethics-guardian`](references/quality/ethics-guardian.md)

**Templates:** [`adverse-event-log.md`](references/content/templates/adverse-event-log.md)

**Outputs** (write to `./healing-output/`): `adverse-event-log.md`

Before releasing output, review it against the safety core above and [`ethics-guardrails.md`](references/shared/ethics-guardrails.md). Block anything that overclaims or risks harm.

---

_Generated from `manifest.yaml` + `skill-discovery.yaml` by `scripts/generate-skills.js`. Do not edit by hand._
