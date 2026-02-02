# Shared Resources Reference

> Quick reference for all shared resources used across the healing swarm.

---

## Overview

| Resource | Purpose | Required By |
|----------|---------|-------------|
| [ethics-guardrails.md](#ethics-guardrails) | Absolute safety constraints | **All agents** |
| [terminology.md](#terminology) | Standard vocabulary | Most agents |
| [voice-guide.md](#voice-guide) | Writing style | Content agents |
| [citation-format.md](#citation-format) | Citation requirements | Research agents |
| [design-tokens.json](#design-tokens) | Design system | Design/build agents |

---

## ethics-guardrails.md

**Path:** `shared/ethics-guardrails.md`
**Required By:** ALL agents

### Purpose

Defines absolute safety constraints that every agent must follow. This is the most critical shared resource.

### Key Sections

**NEVER Do (Absolute Prohibitions):**

```yaml
Medical Safety:
  - NEVER diagnose medical conditions
  - NEVER recommend stopping medications
  - NEVER claim to cure diseases
  - NEVER advise delaying emergency care
  - NEVER provide dosage recommendations

Psychological Safety:
  - NEVER shame users for not healing
  - NEVER suggest illness is punishment
  - NEVER create dependency
  - NEVER dismiss suicidal ideation
  - NEVER promise emotional outcomes

Cultural Integrity:
  - NEVER use closed practices without permission
  - NEVER present unsourced "ancient secrets"
  - NEVER strip practices from context
  - NEVER claim universal applicability

Data Privacy:
  - NEVER transmit health data without consent
  - NEVER store identifiable health info externally
  - NEVER use health data for advertising
```

**ALWAYS Include:**

```yaml
Medical Disclaimers:
  - "Does NOT replace professional medical care"
  - "Consult healthcare provider"
  - "Continue prescribed treatments"
  - "Seek immediate care for [red flags]"

Psychological Safety:
  - Grounding techniques for intensive practices
  - Permission to stop
  - Crisis resources
  - Self-compassion messaging

Cultural Attribution:
  - Name tradition specifically
  - Provide dates/eras
  - Cite primary sources
  - Note adaptations
  - Express gratitude

Evidence Honesty:
  - "Research suggests..." not "proves"
  - Sample sizes and limitations
  - "Results vary"
  - Distinguish correlation from causation
```

### Usage

Every agent MUST include in Loaded Context:
```markdown
## Loaded Context

Before beginning work, load and follow:
- `shared/ethics-guardrails.md` - Absolute safety constraints
```

---

## terminology.md

**Path:** `shared/terminology.md`
**Required By:** Most agents (especially content and research)

### Purpose

Standard vocabulary for consistent, appropriate communication about healing.

### Key Terms

**Use This → Not This:**

| Preferred | Avoid |
|-----------|-------|
| "practice" | "treatment" (implies medical) |
| "may help" | "will cure" |
| "research suggests" | "science proves" |
| "traditionally used for" | "ancient cure for" |
| "support" | "fix" |
| "explore" | "treat" |

**Evidence Language:**

| Evidence Level | Language |
|----------------|----------|
| Strong (meta-analyses, multiple RCTs) | "Research demonstrates..." |
| Moderate (some RCTs) | "Studies suggest..." |
| Preliminary (small studies) | "Early research indicates..." |
| Traditional (historical only) | "Traditionally used for..." |

**Tradition-Specific Terms:**

Include proper terminology for each tradition with correct transliteration and context.

### Usage

```markdown
## Loaded Context

Before beginning work, load and follow:
- `shared/terminology.md` - Standard vocabulary
```

---

## voice-guide.md

**Path:** `shared/voice-guide.md`
**Required By:** Content agents, any agent producing user-facing text

### Purpose

Writing style guide for consistent voice across all healing content.

### Voice Characteristics

**Tone:**
- Warm but not saccharine
- Grounded but not clinical
- Inviting but not pushy
- Authoritative but humble
- Encouraging but realistic

**Sentence Structure:**
- Varied length
- Active voice preferred
- Clear and direct
- 8th grade reading level maximum

### Language Patterns

**Use This:**
```
"You might notice..."
"Some people find..."
"Research suggests..."
"In this tradition..."
"You're welcome to..."
"Consider..."
```

**Avoid This:**
```
"You will feel..."
"This will cure..."
"Science proves..."
"Ancient secrets..."
"You must..."
"Obviously..."
```

### Content-Specific Guidelines

**For Prayers:**
- Non-coercive ("may" not "will")
- Inclusive language
- Complete closure

**For Visualizations:**
- Invitational guidance
- Sensory details
- Always include exit ramps

**For Instructions:**
- Sequential steps
- Multiple modifications
- Clear stopping signals

### Usage

```markdown
## Loaded Context

Before beginning work, load and follow:
- `shared/voice-guide.md` - Writing style
```

---

## citation-format.md

**Path:** `shared/citation-format.md`
**Required By:** Research agents, any agent citing sources

### Purpose

Citation requirements for consistent, verifiable sourcing.

### Citation Formats

**Academic/Clinical:**
```
Author(s), "Title," Journal, Volume(Issue), Pages, Year.
DOI/PMID if available.
```

**Traditional Texts:**
```
Title (Original language title), Author if known, Era/Date,
Translation/edition used.
```

**Primary Source:**
```
Document name, Archive/Collection, Location, Date.
```

### Evidence Documentation

```yaml
claim: "Statement being made"
evidence_type: clinical | traditional | mechanistic
evidence_level: strong | moderate | preliminary | traditional
sources:
  - citation: "Full citation"
    relevant_finding: "What this source shows"
    limitations: "Key limitations"
```

### Attribution Template

```markdown
**Tradition**: [Specific name]
**Era**: [Time period]
**Primary Sources**: [List]
**Adaptations**: [Notes on changes]
```

### Usage

```markdown
## Loaded Context

Before beginning work, load and follow:
- `shared/citation-format.md` - Citation requirements
```

---

## design-tokens.json

**Path:** `shared/design-tokens.json`
**Required By:** Design agents, build agents

### Purpose

Design system tokens for consistent visual design across applications.

### Token Categories

**Colors:**
```json
{
  "colors": {
    "primary": {
      "healing-green": "#4A7C59",
      "calm-blue": "#5B8FB9"
    },
    "semantic": {
      "success": "#4A7C59",
      "warning": "#D4A574",
      "error": "#C75050"
    },
    "neutral": {
      "background": "#FAFAF8",
      "surface": "#FFFFFF",
      "text": "#2D2D2D"
    },
    "dark": {
      "background": "#1A1A1A",
      "surface": "#2D2D2D",
      "text": "#FAFAF8"
    }
  }
}
```

**Typography:**
```json
{
  "typography": {
    "font-display": "system-ui, sans-serif",
    "font-readable": "Georgia, serif",
    "font-mono": "monospace",
    "scale": {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem"
    }
  }
}
```

**Spacing:**
```json
{
  "spacing": {
    "xs": "0.25rem",
    "sm": "0.5rem",
    "md": "1rem",
    "lg": "1.5rem",
    "xl": "2rem",
    "2xl": "3rem"
  }
}
```

**Animation:**
```json
{
  "animation": {
    "ease-calm": "cubic-bezier(0.4, 0, 0.2, 1)",
    "duration-fast": "150ms",
    "duration-normal": "300ms",
    "duration-slow": "500ms"
  }
}
```

**Accessibility:**
```json
{
  "accessibility": {
    "touch-target-min": "48px",
    "focus-ring": "2px solid var(--color-primary)",
    "contrast-ratio-min": "4.5"
  }
}
```

### Usage

```markdown
## Loaded Context

Before beginning work, load and follow:
- `shared/design-tokens.json` - Design system tokens
```

---

## Resource Dependencies

```
All Agents
    └── ethics-guardrails.md (REQUIRED)

Research Agents
    ├── terminology.md
    └── citation-format.md

Content Agents
    ├── terminology.md
    └── voice-guide.md

Design Agents
    └── design-tokens.json

Build Agents
    └── design-tokens.json

Quality Agents
    └── (ethics-guardrails.md only)
```

---

## See Also

- [Skills Reference](skills-reference.md) - All skills
- [Agents Reference](agents-reference.md) - All agents
- [Workflows Reference](workflows-reference.md) - Workflow patterns
