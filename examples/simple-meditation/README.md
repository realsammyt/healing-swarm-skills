# Simple Meditation Example

> A minimal working example demonstrating the healing swarm skill lifecycle.

---

## What This Example Shows

This example walks through creating a single skill: a guided breathing meditation. It demonstrates:

1. **Research** - Gathering traditional and clinical background
2. **Content** - Writing the meditation script
3. **Quality Review** - Ethics and accessibility checks
4. **Deployment** - Final output ready for use

---

## The Skill We're Building

**Name:** `simple-breathing`
**Purpose:** A 5-minute guided breathing meditation for stress relief
**Traditions:** Pranayama (yogic breathing), modern 4-7-8 technique
**Evidence:** Moderate (HRV and anxiety studies)

---

## File Structure

```
simple-meditation/
├── README.md                     # This file
├── skill/
│   ├── manifest-entry.yaml       # Skill registration
│   ├── breathing-guide.md        # Agent prompt
│   └── workflow.yaml             # Simple workflow
├── research/
│   ├── traditional-background.md # Pranayama research
│   └── clinical-evidence.md      # Study summary
├── content/
│   └── 5-minute-calm-breath.md   # Final meditation
└── review/
    └── quality-report.md         # Quality review results
```

---

## Step 1: Research

Before creating content, we research the practice.

### Traditional Background

From `research/traditional-background.md`:

```markdown
# Breathing Practice Research: Traditional Background

## Tradition: Pranayama (Yogic Breathing)

**Origin:** Vedic tradition, documented in Yoga Sutras of Patanjali (c. 400 CE)
**Core Concept:** Prana (life force/breath) as bridge between body and mind

### Key Techniques

1. **Nadi Shodhana** (Alternate nostril breathing)
   - Balancing technique
   - Traditional: Balances ida and pingala nadis

2. **Ujjayi** (Victorious breath)
   - Slight throat constriction
   - Traditional: Creates internal heat and focus

3. **Sama Vritti** (Equal breathing)
   - Equal inhale and exhale
   - Foundation for other practices

### Adaptation for Modern Use

The 4-7-8 technique (popularized by Dr. Andrew Weil) adapts
traditional pranayama principles for Western audiences:
- Inhale 4 counts
- Hold 7 counts
- Exhale 8 counts

This maintains the traditional emphasis on extended exhale while
providing accessible timing structure.

**Attribution:** This adaptation draws on classical pranayama as
documented in the Hatha Yoga Pradipika and Yoga Sutras, simplified
for general accessibility.
```

### Clinical Evidence

From `research/clinical-evidence.md`:

```markdown
# Breathing Practice Research: Clinical Evidence

## Evidence Level: Moderate

### Key Findings

**Heart Rate Variability (HRV):**
- Slow breathing (6 breaths/min) increases HRV
- Indicates parasympathetic activation
- Multiple studies with consistent findings

**Anxiety Reduction:**
- Controlled breathing reduces state anxiety
- Effects appear within single session
- Moderate effect sizes in meta-analyses

**Physiological Mechanisms:**
- Vagal tone enhancement
- Baroreceptor stimulation
- CO2 modulation

### Representative Studies

1. Zaccaro et al. (2018) - Review of 15 studies on slow breathing
   - Consistent improvements in HRV, relaxation
   - Limitations: heterogeneous protocols

2. Ma et al. (2017) - Diaphragmatic breathing and stress
   - Significant cortisol reduction
   - n=40, 8-week intervention

### Limitations

- Most studies small sample sizes
- Protocol variations make comparison difficult
- Mechanism pathways not fully established
- Long-term effects under-studied

### Safety

- Generally safe for healthy adults
- Contraindications: severe respiratory conditions
- Hyperventilation risk if done incorrectly
- Stop if lightheaded

### Evidence Statement

"Research suggests that slow, controlled breathing practices may
help reduce anxiety and promote relaxation, likely through
parasympathetic nervous system activation. Evidence is moderate
with consistent findings across multiple small studies."
```

---

## Step 2: Content Creation

Based on research, create the meditation content.

From `content/5-minute-calm-breath.md`:

```markdown
# 5-Minute Calm Breath

**Type:** Guided Breathing Meditation
**Duration:** 5 minutes
**Tradition:** Adapted from yogic pranayama principles
**Evidence Level:** Moderate
**Difficulty:** Beginner

---

## Before You Begin

Find a comfortable position—sitting or lying down. This practice
is gentle and you can stop at any time.

**Note:** If you have respiratory conditions, consult your
healthcare provider before practicing breathing exercises.

---

## The Practice

### Settling In (30 seconds)

Let your eyes close gently, or soften your gaze downward.

Take a moment to arrive. Notice where your body meets what's
supporting it.

There's nothing to do right now except be here.

### Natural Breath (1 minute)

Begin by simply noticing your natural breath.

You don't need to change anything. Just observe:
- Where do you feel the breath?
- Is it shallow or deep?
- Fast or slow?

Whatever you notice is fine. You're just getting acquainted.

### Extending the Exhale (2.5 minutes)

Now, gently begin to slow your breath.

**Inhale** through your nose for a count of 4.
*One... two... three... four...*

**Hold** gently for a count of 7.
*One... two... three... four... five... six... seven...*

**Exhale** slowly through your mouth for a count of 8.
*One... two... three... four... five... six... seven... eight...*

Repeat this cycle 3-4 times.

If the counts feel too long, shorten them proportionally
(3-5-6 or 2-3-4). The ratio matters more than the numbers.

### Returning (1 minute)

Let go of the counting.

Allow your breath to return to its natural rhythm.

Notice how you feel now. You might notice:
- A sense of calm
- Heaviness in your limbs
- Slower thoughts
- Or something else entirely

Whatever you experience is valid.

When you're ready, let your eyes open gently. Take a moment
before returning to your day.

---

## If You Feel Lightheaded

Stop the counted breathing and breathe normally.

This is a sign to shorten your counts next time, or to practice
without the hold.

Lightheadedness is not dangerous, but it means you've pushed
past what's helpful.

---

## Background

This practice adapts the extended exhale principle from yogic
pranayama, documented in classical texts like the Yoga Sutras
of Patanjali (c. 400 CE). The 4-7-8 ratio was popularized by
Dr. Andrew Weil for Western audiences.

Research suggests that slow breathing with extended exhale
activates the parasympathetic nervous system, promoting
relaxation. Studies show improvements in heart rate variability
and reductions in state anxiety, though most research uses
small samples.

---

## Disclaimer

This practice is for informational purposes only and does not
replace professional medical or psychological care. If you have
health concerns, please consult your healthcare provider.

Continue all prescribed treatments. This practice complements
but does not replace professional care.
```

---

## Step 3: Quality Review

Run the content through quality review.

From `review/quality-report.md`:

```markdown
# Quality Review: 5-Minute Calm Breath

**Date:** [Review Date]
**Reviewer:** Quality Lead + Ethics Guardian + Accessibility Auditor

---

## Summary

**Status:** ✅ APPROVED

| Category | Status |
|----------|--------|
| Ethics | Pass |
| Clinical Accuracy | Pass |
| Cultural Attribution | Pass |
| Accessibility | Pass |

---

## Ethics Review

✅ **Pass**

| Check | Status | Notes |
|-------|--------|-------|
| No medical claims | ✅ | Uses "may help", "suggests" |
| No cure claims | ✅ | Clearly complementary |
| Medical disclaimer | ✅ | Present at start and end |
| Grounding technique | ✅ | Lightheadedness guidance |
| Exit permission | ✅ | "You can stop at any time" |
| No fear-based motivation | ✅ | Invitational tone |
| No outcome promises | ✅ | "You might notice..." |

---

## Clinical Accuracy Review

✅ **Pass**

| Check | Status | Notes |
|-------|--------|-------|
| Evidence level accurate | ✅ | "Moderate" matches research |
| Language appropriate | ✅ | "Research suggests..." |
| Limitations acknowledged | ✅ | Small sample note |
| Contraindications noted | ✅ | Respiratory conditions |
| Sources traceable | ✅ | Studies cited in research |

---

## Cultural Attribution Review

✅ **Pass**

| Check | Status | Notes |
|-------|--------|-------|
| Tradition named | ✅ | "Yogic pranayama" |
| Era provided | ✅ | "c. 400 CE" |
| Adaptation noted | ✅ | "Adapted from..." |
| Context preserved | ✅ | Brief background included |
| Not closed practice | ✅ | Basic pranayama is open |

---

## Accessibility Review

✅ **Pass**

| Check | Status | Notes |
|-------|--------|-------|
| Reading level | ✅ | ~6th grade |
| Instructions clear | ✅ | Sequential, specific |
| Works when read aloud | ✅ | Suitable for audio |
| Multiple modalities | ✅ | Can be heard or read |
| Modifications offered | ✅ | Shortened counts noted |

---

## Recommendations (Optional)

- Consider adding audio version
- Could include visual timer option
- Might benefit from shorter 2-minute version

These are enhancements, not requirements.

---

## Approval

**Approved for use.**

No required changes. Content meets all quality gates.
```

---

## Step 4: Final Output

The content in `content/5-minute-calm-breath.md` is ready for use in:
- Web applications
- Mobile apps
- Audio recordings
- Printed guides

---

## What We Demonstrated

### Complete Skill Lifecycle

```
Research → Content → Quality → Deployment
   ↓         ↓         ↓          ↓
Background  Draft    Review     Ready
gathered   created  passed     to use
```

### Ethics-First Approach

- Started with safety considerations
- Included disclaimers from the beginning
- Built grounding techniques into content
- Never made promises we couldn't keep

### Evidence Grounding

- Matched language to evidence level
- Acknowledged limitations
- Cited traceable sources
- Distinguished traditional from clinical

### Cultural Respect

- Named tradition specifically
- Provided historical context
- Noted adaptations made
- Preserved meaning while adapting form

---

## Try It Yourself

### 1. Create Your Own Skill

Use this example as a template. Copy the structure:

```bash
mkdir my-healing-skill
cp -r examples/simple-meditation/* my-healing-skill/
```

### 2. Modify for Your Focus

Replace breathing with your healing modality:
- Research your tradition and evidence
- Write content following templates
- Run through quality review
- Iterate until approved

### 3. Integrate with Full Swarm

Once comfortable with the manual process, use the full skills:

```bash
# Research
/healing-research "your healing topic"

# Content
/healing-content --type visualization --topic "your topic"

# Review
/healing-review ./your-content.md

# Or full lifecycle
/healing-swarm "Your Project" --focus "your healing area"
```

---

## Resources

- [Creating Skills Guide](../../docs/guides/creating-skills.md)
- [Testing Skills Guide](../../docs/guides/testing-skills.md)
- [Ethics Guardrails](../../.claude/skills/healing-swarm/shared/ethics-guardrails.md)
- [Voice Guide](../../.claude/skills/healing-swarm/shared/voice-guide.md)

---

*"Start small. Build with care. Let the swarm grow."*
