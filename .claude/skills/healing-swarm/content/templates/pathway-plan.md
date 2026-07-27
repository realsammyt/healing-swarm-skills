# Pathway-Plan Template

> Template for a sequenced, multi-week practice plan assembled from skills that
> already exist in this library. Each week names its practices, the skill
> trigger that delivers them, and the observable condition for moving on. Rest
> weeks, adaptation rules, and stop rules are part of the plan, not appendices.
> Serves the practice-pathway skill.

---

## Structure

```markdown
# [Focus]: Practice Pathway

**Archetype:** [Which pathway archetype, or the named blend]
**Horizon:** [X weeks, including N rest weeks]
**Time per day:** [Realistic minutes the person actually has]
**Screening status:** [Cleared via /practice-screening on DATE / Cleared with modifications / Items pending]
**Date:** [Date]

---

## Why This Pathway

[2-3 sentences. Which archetype this plan follows and why it fits what you
described. Written so you can disagree with it. If two archetypes were blended,
say which two and what each contributes.]

> **Evidence note:** This sequence is a practice framework drawn from
> complementary mechanisms and traditional practice combinations. It is not a
> clinically validated protocol, and it promises no outcome. Each practice
> carries its own evidence level, stated where that practice appears. Evidence
> does not compound when practices are combined.

> **A note on boundaries:** A pathway is a map, not a mandate. You can skip a
> phase, repeat one, combine elements from elsewhere, set your own pace, and
> pause or stop at any point. None of that is doing it wrong.

---

## Before You Begin

**Screening:** [What /practice-screening returned, per practice. Cleared,
cleared with modifications (state them), or excluded. An excluded practice does
not appear anywhere below.]

**Prerequisites:** [Provider clearance, an established foundation practice, or
none. State which ones are already met and which are still open.]

**What you need:** [Time, space, and anything physical. Keep it short. A plan
that needs equipment on week one usually doesn't start.]

---

## Week-by-Week Plan

### Phase 1: [Name] (Weeks [X]-[Y])

**Purpose of this phase:** [One sentence.]

| Practice | Skill | Duration and frequency | What to notice |
| -------- | ----- | ---------------------- | -------------- |
| [Practice] | `/[trigger]` | [e.g. 5 min, 2x daily] | [An observation, not a target] |
| [Practice] | `/[trigger]` | [e.g. 10 min, evenings] | [An observation, not a target] |

**Ready for the next phase when:** [An observable condition, for example "the
evening practice happens on most days without much effort." Never a performance
threshold, and never a feeling the person is supposed to have arrived at.]

**Foundation note:** [If any later practice is gated on this phase, say which
one and how long the foundation runs. For example: WHM breathwork is gated on
2 weeks of daily breath observation, which is what this phase builds.]

---

### Phase 2: [Name] (Weeks [X]-[Y])

[Same structure. Practices, skills, duration, what to notice, readiness
condition, foundation note.]

---

### Rest Week (Week [X])

Practice drops to the one piece you'd keep if you could only keep one.
[Name it.] Nothing else is expected.

Rest weeks are part of the plan. An unplanned one, taken because life happened,
counts exactly the same.

---

### Phase 3: [Name] (Weeks [X]-[Y])

[Same structure.]

---

## Practices Waiting on Something

| Practice | Waiting on | When it could enter |
| -------- | ---------- | ------------------- |
| [Practice] | [Screening / provider clearance / a foundation period] | [Condition, not a date] |

These are listed so you know they exist, not scheduled. Nothing here enters the
plan until what it is waiting on has actually happened.

---

## Adaptation Rules

- **Low-capacity day:** [The 2-minute version of the day's practice. Doing it
  counts.]
- **Flare-up or illness:** [What drops, what stays, and for how long.]
- **Missed a week:** Resume where you left off. Restarting from week one is not
  required and usually isn't useful.
- **A practice stops fitting:** [How to swap it, and which skill to ask.]
  A practice that once helped and now feels wrong has done its work.
- **Going slower:** Extending a phase is a valid plan. So is repeating one.

---

## Stop Rules and Crisis Resources

Stop the practice and check in if any of these show up:

- [Practice-specific signal, for example dizziness, chest symptoms, or tingling
  that doesn't settle during breath practice]
- [Practice-specific signal, for example numbness or shivering that stops during
  cold exposure]
- [Practice-specific signal, for example derealization or depersonalization
  during perception or transpersonal work]
- Mood, sleep, or functioning getting worse across four or more weeks
- Any sense that the practice is making things harder rather than easier

**If you are in crisis:** Call or text **988** (988 Suicide & Crisis Lifeline),
text **HOME** to **741741** (Crisis Text Line), or call your local emergency
number (911 in the US). These are here whether or not you are following any
plan.

---

## Measuring, If You Want To

[Optional. What could be tracked, at what cadence, handed to /outcome-tracking.
For example: WHO-5 weekly, plus a pre/post rating on the evening practice.]

Declining to measure changes nothing about this pathway. Tracking is for your
own awareness, not for proving the plan works.

---

## What Comes After

[Where this plan points next, framed as an invitation. For example: "If the
coherent breathing held, you might explore pranayama practices from the Vedic
tradition that deepen this work." Include the checkpoint: come back at week
[X] and the plan gets extended from where you actually are, not from where the
schedule said you'd be.]

---

*This practice complements but does not replace medical care.
Continue all prescribed treatments. Consult your healthcare provider
before beginning any new health practice.*
```

---

## Element Guidelines

### Archetype and Horizon

**Purpose:** Name the spine of the plan and how far it reaches

**Requirements:**

- One archetype from `shared/practice-pathways.md` as the spine, or an explicitly
  named blend of two
- Horizon stated in weeks, with rest weeks counted inside it
- Daily minutes set from what the person said they have, not from what the
  archetype's source description assumes
- A checkpoint week named, so returning for a re-plan is expected rather than a
  sign of failure

### Screening Status

**Purpose:** Make the safety record visible in the artifact itself

**Requirements:**

- Screening handled by `/practice-screening`, never by the pathway itself
- Per-practice result: cleared, cleared with modifications, or excluded
- Modifications stated concretely (shorter duration, seated variant, no breath
  holds, cool rather than cold)
- Excluded practices absent from the week-by-week plan entirely
- Anything awaiting provider clearance listed under "Practices Waiting on
  Something", never inside a week

### Week-by-Week Plan

**Purpose:** Say what happens, in what order, and which skill delivers it

**Key principles:**

- Every practice row names its skill trigger, so the person can go get the
  actual practice content
- Duration and frequency sized to the stated daily budget
- "What to notice" is an observation, never a target to hit
- Readiness conditions are observable and behavioral ("happens most days without
  much effort"), not performance thresholds and not required feelings
- Foundation notes name the dependency explicitly wherever a later practice is
  gated on this phase
- Minimum foundation periods from `shared/practice-pathways.md` are never
  shortened to fit a smaller horizon; shorten the plan instead

### Rest Weeks

**Purpose:** Build the pause in, rather than treating it as a lapse

**Requirements:**

- At least one scheduled rest week per eight weeks of plan
- The rest week names the single practice that stays
- Unplanned rest explicitly counted as equivalent
- No catch-up language, no making up missed sessions

### Adaptation and Stop Rules

**Purpose:** Plan for the bad weeks, which is where most plans actually fail

**Requirements:**

- A low-capacity variant for each phase, short enough to be plausible
- Explicit permission to resume rather than restart
- Stop rules specific to the practices in this plan, not a generic list
- Crisis resources restated in the artifact: 988, text HOME to 741741, and the
  local emergency number (911 in the US)
- Stop rules phrased as care, not as warnings about doing it wrong

### Evidence Framing

**Purpose:** Keep the plan honest about what a sequence is

**Required:**

- Pathway labeled a practice framework, not a validated protocol
- A statement that evidence does not compound across combined practices
- Per-practice evidence levels wherever a practice appears, phrased per
  `shared/evidence-language.md`
- No outcome promised anywhere, including in the "What Comes After" section
- Standard medical disclaimer present

---

## Accessibility Guidelines

### Physical Accessibility

- Seated, lying, and reduced-range variants named for any movement practice
- Daily minutes kept honest; a plan that needs an hour from someone with fifteen
  minutes is not accessible
- No equipment required in the opening phase

### Sensory Accessibility

- Screen-reader friendly tables, one practice per row
- A silent variant offered wherever a practice depends on sound
- Plain-language practice names, with the skill trigger doing the technical work

### Cognitive Accessibility

- One phase visible at a time; the plan reads week by week
- Short readiness conditions, phrased concretely
- Predictable section order across every plan this template produces
- No requirement to read the whole plan before starting week one

### Psychological Safety

- No hierarchy or "level" language, and no implication that later is better
- Returning to an earlier phase framed as a legitimate plan
- Skipping, pausing, and stopping stated as options in the plan's own voice
- Progression never tied to engagement, streaks, or completion

---

## Quality Checklist

Before finalizing a pathway plan:

- [ ] Archetype named (or the blend named), with a reason the person can dispute
- [ ] Horizon, daily minutes, and checkpoint week stated
- [ ] Screening status recorded per practice, sourced from `/practice-screening`
- [ ] Excluded practices absent from every week
- [ ] Pending items listed as waiting, never scheduled
- [ ] Every practice row carries its skill trigger
- [ ] Minimum foundation periods respected in full
- [ ] Readiness conditions observable, never performance thresholds
- [ ] At least one rest week per eight weeks, with unplanned rest normalized
- [ ] Adaptation rules cover low-capacity days, flare-ups, and missed weeks
- [ ] Stop rules specific to this plan's practices
- [ ] Crisis resources restated: 988, text HOME to 741741, local emergency number
- [ ] Measurement offered as optional, with declining stated as costless
- [ ] Evidence framed per practice, with no compounding across the combination
- [ ] No outcome promised anywhere
- [ ] Medical disclaimer present

---

*"The path of healing is not a ladder to climb but a garden to tend."*
