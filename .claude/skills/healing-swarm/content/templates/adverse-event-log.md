# Adverse Event Log Template

> Template for the adverse-event-log artifact: what happened, which practice,
> the severity per the assess table in `shared/crisis-response.md`, the action
> taken, the referral level, the adapt-or-retire decision, and the follow-up
> plan. Produced by the `adverse-response` skill after a distressing or adverse
> reaction to a practice. The log belongs to the person it happened to — it is
> theirs, it stays local, and its only job is to make the next screening better
> than the last one.

---

## Structure

```markdown
# Adverse Event Log

**Date of event:** [YYYY-MM-DD] · **Logged:** [YYYY-MM-DD]
**Practice:** [What was being done]
**Severity:** [Mild / Moderate / Severe]
**Referral level:** [Self-managed / same-day consultation / scheduled consultation / emergency care]
**Practice decision:** [Adapted / Retired]

> **This log is yours.** It is stored on your device, it is not sent anywhere,
> and nobody else holds a copy. It is not a medical record and it is not a
> diagnosis. It exists so that the next time you are screened for a practice,
> this is already known. You can delete it at any time.

---

## The Practice

| Item | Detail |
| ---- | ------ |
| Practice | [Skill name or what the person was doing] |
| Level or intensity | [Beginner / round three / 30-minute silent sit / etc.] |
| Duration before onset | [X minutes into the practice] |
| Setting | [Alone / with someone / group / facilitated] |
| Anything unusual that day | [Sleep, food, hydration, illness, stress, first attempt] |

---

## Timeline

| Point | Detail |
| ----- | ------ |
| Onset | [During practice / immediately after / delayed by X hours] |
| Peak | [When it was most intense] |
| Duration | [How long the acute phase lasted] |
| Current status | [Resolved / easing / unchanged / worsening] |
| Time since onset | [X hours or days] |

---

## What Happened

**In the person's words:**

> [Their description, quoted, not paraphrased into clinical language]

**Catalog match:** [Reaction name from the per-modality catalog in
shared/crisis-response.md — hyperventilation, syncope, panic response, tetany,
cold shock, dissociation, depersonalization/derealization, anxiety spike,
trauma resurfacing, kundalini-type activation, spiritual emergency,
psychotic-like experience, boundary violation, emotional flooding, attachment
disruption, acute injury, pain escalation, autonomic dysregulation]

*Offered as a match, confirmed by the person. A catalog name describes a
reaction; it does not diagnose anyone.*

---

## Severity Assessment

**Rated:** [Mild / Moderate / Severe]

| Criterion | Present | Note |
| --------- | ------- | ---- |
| Conscious, alert, oriented | [Yes / No] | |
| No chest pain or breathing difficulty | [Yes / No] | |
| No psychotic features | [Yes / No] | |
| No suicidal or self-harm ideation | [Yes / No] | |
| Symptoms improving with grounding and rest | [Yes / No] | |
| Able to articulate the experience | [Yes / No] | |
| Does not feel emergency care is needed | [Yes / No] | |

*All seven must hold for self-managed recovery. One "No" raises the referral
level. When in doubt, err toward professional care.*

---

## Action Taken

1. **Stop:** [How and when the practice ended]
2. **Ground:** [Which technique from the grounding library, and the response to it]
3. **Respond:** [What was done for this severity level]
4. **Check-in:** [What the person reported after grounding — better, same, worse]

---

## Referral Level

**[Self-managed / same-day consultation / scheduled consultation / emergency care]**

[One or two sentences on why this level, tied to the criteria above.]

**Escalate if:** [The specific signs that would change the level, named
concretely — not "if it gets worse."]

**Crisis resources, if needed:**

- Medical emergency or danger to self or others: call your local emergency number (911 in the US)
- Suicidal ideation, severe emotional crisis, or self-harm urges: 988 (Suicide & Crisis Lifeline), call or text
- Text-based crisis support: text HOME to 741741 (Crisis Text Line)

---

## Professional Referral

**Made:** [Yes / no / recommended, not yet made]
**Type:** [Primary care / cardiologist / pulmonologist / neurologist / psychiatrist / trauma-informed therapist / other]

**What to bring:**

- The practice involves [brief description]
- The session had run [duration] when symptoms began
- The symptoms were [description], lasting [duration]
- [Any relevant history already known]

---

## Practice Decision

**[ADAPTED / RETIRED]**

**If adapted:**

| Change | Detail |
| ------ | ------ |
| Pause before resuming | [How long, minimum] |
| Duration | [Reduced to X] |
| Position | [Seated / lying / eyes open] |
| Components removed | [Breath holds, retention, silence, etc.] |
| Support | [Someone else present, earlier in the day, etc.] |
| Re-screen before resuming | Required — via the `practice-screening` skill |

**If retired:**

| Item | Detail |
| ---- | ------ |
| Practice not to resume | [Name] |
| Reason | [Absolute contraindication surfaced / severe reaction / second occurrence / person's choice] |
| Offered instead | [Alternative practice, described concretely] |

*No immediate retry, in either case. Resumption always routes back through
screening with this event carried as a flag.*

---

## Screening Update

What this event adds to future screening:

- **New flag:** [Condition or reaction, and the practice families it affects]
- **Question to add:** [What Tier 1, 2, or 3 should have asked and did not]
- **Standing restriction:** [Any practice now treated as absolute for this person]

---

## Follow-Up Plan

| When | What |
| ---- | ---- |
| [24 hours] | [Check-in question, and what a concerning answer looks like] |
| [1 week] | [Whether symptoms fully settled; whether sleep and mood returned to baseline] |
| [Before resuming] | [Re-screen, and the conditions that must hold first] |

---

*Adverse reactions happen and they are not your fault. This log complements but
does not replace medical care — continue all prescribed treatments and consult
your healthcare provider if symptoms persist or return.*
```

---

## Element Guidelines

### The Privacy Block

**Purpose:** Establish ownership before the details are read

**Required:**

- Near the top, above the account of what happened, never in a footer
- States plainly that the log is local, is not transmitted, and has no other copy
- States that it is not a medical record and not a diagnosis
- States that the person can delete it
- Names the log's actual purpose: better screening next time

### Timeline

**Purpose:** Separate a live situation from a settled one, and catch the
persistence thresholds

**Required:**

- Onset, peak, duration, current status, and time elapsed all present
- Delayed onset recorded as such, since "since yesterday's practice" is the
  common presentation
- Persistence thresholds applied from `shared/crisis-response.md`: dissociation
  or derealization past two hours, depersonalization or derealization past
  twenty-four hours, emotional destabilization past four hours

### What Happened

**Purpose:** Record the experience without translating it into a diagnosis

**Key principles:**

- The person's words quoted, first, in their own register
- The catalog match named second, and confirmed by the person rather than
  assigned to them
- No interpretation of what the reaction means about the person
- Content that surfaced during the event is not recorded in detail — the log
  notes that something surfaced and that it was referred, not what it was

### Severity Assessment

**Purpose:** Make the referral level reproducible rather than intuitive

**Required:**

- All seven self-managed recovery criteria listed and answered
- The rule stated in the artifact: one "No" raises the level
- The rating tied to the criteria, not to how distressed the conversation felt

### Referral Level

**Purpose:** Say what to do, with a timeframe, and what would change it

**Key principles:**

- One of four levels, named plainly
- Escalation signs stated concretely, never "if it gets worse"
- Crisis numbers exact: 988 (Suicide & Crisis Lifeline), text HOME to 741741
  (Crisis Text Line), and "call your local emergency number (911 in the US)"
- Localize emergency numbers to the person's region; the US numbers are
  defaults, not universal

### Practice Decision

**Purpose:** Answer the question the person actually came with

**Required:**

- Adapted or retired, stated explicitly, never left implicit
- Adaptation only for mild events with an identifiable, adjustable mechanism
- Retirement for absolute contraindications, severe reactions, psychotic
  features, trauma resurfacing, dissociative episodes, second occurrences, or
  the person's own preference
- A pause before any resumption, with re-screening required
- No immediate retry, under any circumstances

### Screening Update

**Purpose:** Close the loop that justifies the whole artifact

**Key principles:**

- Name the new flag and the practice families it touches
- Name the question that should have been asked, so screening improves
- Name any practice now treated as absolute for this person, regardless of what
  the general tables say

---

## Accessibility Guidelines

### Cognitive Accessibility

- Plain language, no clinical shorthand
- The header block readable on its own: practice, severity, referral level,
  decision
- One item per row; short sentences in every narrative field
- Follow-up plan written as a table with times, not as prose to parse

### Sensory and Physical Accessibility

- Real headings and real tables so screen readers carry the structure
- Severity and referral level stated as words, never as color or symbol alone
- Crisis resources given as both phone and text options

### Psychological Safety

- "Not your fault" stated in the artifact, not only in conversation
- No language framing the reaction as failure, resistance, or insufficient effort
- No framing of pain as energy releasing or of distress as progress
- Retirement presented as a legitimate outcome, with an alternative attached
- The person's own words preserved rather than overwritten

---

## Privacy Requirements

- Stored locally per ADR-002, alongside the person's screening records
- No identifiable health data transmitted externally, ever
- Used only to improve that individual's future safety screening
- No aggregation, no analytics, no sharing between people or sessions
- Surfaced content from trauma or distress is referred, not transcribed
- Deletable by the person at any time, with no downstream copy
- If shared with a healthcare provider, that is the person's choice and their
  action

---

## Quality Checklist

Before finalizing an adverse event log:

- [ ] Privacy block present, above the account, unshortened
- [ ] Practice, level, duration before onset, and setting all recorded
- [ ] Timeline complete: onset, peak, duration, current status, time elapsed
- [ ] Delayed onset recorded as delayed, with hours elapsed
- [ ] The person's own words quoted before any catalog naming
- [ ] Catalog match drawn from `shared/crisis-response.md` and confirmed, not assigned
- [ ] All seven self-managed recovery criteria listed and answered
- [ ] Severity tied to the criteria rather than to conversational tone
- [ ] Referral level named, with concrete escalation signs
- [ ] Crisis numbers exact and correctly labeled, with the localization note
- [ ] Professional referral section completed, with what to bring
- [ ] Adapt-or-retire decision explicit
- [ ] Adaptation limited to mild events with an identifiable mechanism
- [ ] Pause and mandatory re-screen recorded; no immediate retry anywhere
- [ ] Screening update names the new flag and the missing question
- [ ] Follow-up plan with times and concerning-answer descriptions
- [ ] No diagnosis, no interpretation, no trauma content transcribed
- [ ] "Not your fault" language present
- [ ] "Complements but does not replace medical care" note present
- [ ] Evidence language appropriate throughout — no outcome promises

---

_"The bravest thing a guide can say is: 'Let us stop here.' The log is what
makes that stop worth something the next time."_
