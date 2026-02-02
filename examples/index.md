---
layout: page
title: Examples
description: Working demonstrations of the healing swarm in action.
permalink: /examples/
---

Learn by example. Each example walks through a complete skill lifecycle.

---

## Simple Meditation

A minimal working example demonstrating the complete healing swarm skill lifecycle.

### What This Example Shows

1. **Research** --- Gathering traditional and clinical background
2. **Content** --- Writing the meditation script
3. **Quality Review** --- Ethics and accessibility checks
4. **Deployment** --- Final output ready for use

### The Skill

| Property | Value |
|----------|-------|
| **Name** | `simple-breathing` |
| **Purpose** | 5-minute guided breathing meditation |
| **Traditions** | Pranayama (yogic breathing), 4-7-8 technique |
| **Evidence** | Moderate (HRV and anxiety studies) |

---

## Step 1: Research

Before creating content, we research the practice.

### Traditional Background

```
Tradition: Pranayama (Yogic Breathing)
Origin: Vedic tradition, Yoga Sutras of Patanjali (c. 400 CE)
Core Concept: Prana (life force/breath) as bridge between body and mind

Key Techniques:
- Nadi Shodhana (Alternate nostril breathing)
- Ujjayi (Victorious breath)
- Sama Vritti (Equal breathing)

Adaptation for Modern Use:
The 4-7-8 technique adapts traditional pranayama principles:
- Inhale 4 counts
- Hold 7 counts
- Exhale 8 counts

Attribution: This adaptation draws on classical pranayama as
documented in the Hatha Yoga Pradipika and Yoga Sutras.
```

### Clinical Evidence

```
Evidence Level: Moderate

Key Findings:
- Slow breathing (6 breaths/min) increases HRV
- Controlled breathing reduces state anxiety
- Effects appear within single session

Representative Studies:
- Zaccaro et al. (2018) - Review of 15 studies on slow breathing
- Ma et al. (2017) - Diaphragmatic breathing and stress (n=40)

Limitations:
- Most studies have small sample sizes
- Protocol variations make comparison difficult
- Mechanism pathways not fully established

Safety:
- Generally safe for healthy adults
- Contraindications: severe respiratory conditions
- Stop if lightheaded
```

---

## Step 2: Content Creation

Based on research, the content is created:

```markdown
# 5-Minute Calm Breath

**Type:** Guided Breathing Meditation
**Duration:** 5 minutes
**Tradition:** Adapted from yogic pranayama principles
**Evidence Level:** Moderate

---

## Before You Begin

Find a comfortable position---sitting or lying down.
This practice is gentle and you can stop at any time.

**Note:** If you have respiratory conditions, consult
your healthcare provider before practicing.

---

## The Practice

### Settling In (30 seconds)

Let your eyes close gently, or soften your gaze downward.
Take a moment to arrive.

### Natural Breath (1 minute)

Begin by simply noticing your natural breath.
You don't need to change anything. Just observe.

### Extending the Exhale (2.5 minutes)

**Inhale** through your nose for a count of 4.
**Hold** gently for a count of 7.
**Exhale** slowly through your mouth for a count of 8.

Repeat 3-4 times.

If the counts feel too long, shorten them proportionally.
The ratio matters more than the numbers.

### Returning (1 minute)

Let go of the counting.
Allow your breath to return to its natural rhythm.
When ready, let your eyes open gently.

---

## If You Feel Lightheaded

Stop the counted breathing and breathe normally.
This means you should shorten your counts next time.

---

## Background

This practice adapts extended exhale principles from yogic
pranayama (Yoga Sutras, c. 400 CE). Research suggests slow
breathing activates the parasympathetic nervous system.

---

## Disclaimer

This practice is for informational purposes only and does
not replace professional medical or psychological care.
```

---

## Step 3: Quality Review

The content passes through multi-agent review:

### Ethics Review: **PASS**

| Check | Status |
|-------|--------|
| No medical claims | Uses "may help", "suggests" |
| No cure claims | Clearly complementary |
| Medical disclaimer | Present at start and end |
| Grounding technique | Lightheadedness guidance |
| Exit permission | "You can stop at any time" |
| No fear-based motivation | Invitational tone |

### Clinical Accuracy: **PASS**

| Check | Status |
|-------|--------|
| Evidence level accurate | "Moderate" matches research |
| Language appropriate | "Research suggests..." |
| Limitations acknowledged | Small sample note |
| Contraindications noted | Respiratory conditions |

### Cultural Attribution: **PASS**

| Check | Status |
|-------|--------|
| Tradition named | "Yogic pranayama" |
| Era provided | "c. 400 CE" |
| Adaptation noted | "Adapted from..." |
| Not closed practice | Basic pranayama is open |

### Accessibility: **PASS**

| Check | Status |
|-------|--------|
| Reading level | ~6th grade |
| Works when read aloud | Suitable for audio |
| Modifications offered | Shortened counts noted |

---

## Step 4: Final Output

The content is ready for use in:
- Web applications
- Mobile apps
- Audio recordings
- Printed guides

---

## What We Demonstrated

### Complete Skill Lifecycle

```
Research > Content > Quality > Deployment
   |          |         |          |
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

Use this example as a template:

```bash
mkdir my-healing-skill
cp -r examples/simple-meditation/* my-healing-skill/
```

### 2. Modify for Your Focus

- Research your tradition and evidence
- Write content following templates
- Run through quality review
- Iterate until approved

### 3. Use the Full Swarm

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

## More Examples

We're building more examples. Want to contribute one?

- [Read the Contributing Guide](/contribute/)
- [Create a new skill](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/guides/creating-skills.md)
- [Submit a PR](https://github.com/realsammyt/healing-swarm-skills/pulls)

---

*"Start small. Build with care. Let the swarm grow."*
