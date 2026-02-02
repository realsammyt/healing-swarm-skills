---
layout: page
title: Ethics Framework
description: Deep dive into the ethics architecture of the healing swarm.
permalink: /ethics/
---

The healing swarm operates under a single guiding principle:

> **"First, do no harm."**

Every component, every agent, every piece of content is built with the understanding that our users may be **vulnerable**---injured, ill, anxious, desperate, or grieving. Our responsibility is sacred.

---

## The 7 Principles

### 1. First, Do No Harm

Medical and psychological safety are **absolute priorities**.

- No diagnosis
- No medication recommendations
- No cure claims
- No delaying emergency care

### 2. Honor All Traditions

No appropriation. Proper attribution always.

- Name specific traditions (not vague "Eastern wisdom")
- Provide era/dates when documented
- Cite primary sources
- Protect closed/initiatory practices

### 3. Evidence with Humility

"May help" not "will cure."

- Match language to evidence level
- Acknowledge limitations
- Distinguish correlation from causation
- "Results vary"

### 4. Empower, Don't Control

User autonomy is sacred.

- Provide information, don't prescribe
- No coercive language
- User controls their data
- Clear about limitations

### 5. Privacy as Sanctuary

Healing data stays with the healer.

- Local-first architecture
- No external health data transmission
- No required accounts
- User controls everything

### 6. Accessible to All

Design for the most vulnerable users.

- No cost gatekeeping of essential content
- WCAG AA compliance minimum
- Support reduced motion
- One-handed operation

### 7. Continuous Improvement

Learn from outcomes, update with evidence.

- Regular ethics audits
- Feedback loops
- Stay current with research
- Evolve with understanding

---

## Enforcement Architecture

### Layer 1: Foundational Guardrails

The `ethics-guardrails.md` file defines absolute constraints:

**Medical Safety**
- No diagnosis
- No medication recommendations
- No cure claims
- No delaying emergency care

**Psychological Safety**
- No shame/blame
- No illness-as-punishment
- No dependency creation
- No outcome promises

**Cultural Integrity**
- No closed practice disclosure
- No misattribution
- No context stripping
- No cultural appropriation

**Data Privacy**
- No external health data transmission
- No identifiable storage
- No advertising use
- No required accounts

### Layer 2: Required Elements

Every piece of healing content **MUST** include:

**Medical Disclaimers**
- "Does NOT replace professional medical care"
- "Consult your healthcare provider"
- "Continue prescribed treatments"
- "Seek immediate care for [red flags]"

**Psychological Safety**
- Grounding techniques (for intensive practices)
- Permission to stop ("You can stop anytime")
- Crisis resources (for mental health content)
- Self-compassion messaging

**Cultural Attribution**
- Specific tradition named
- Era/dates provided
- Primary sources cited
- Adaptations noted

**Evidence Honesty**
- "Research suggests" (not "proves")
- Sample sizes and limitations
- "Results vary"
- Correlation/causation distinction

### Layer 3: Ethics Guardian

The ethics-guardian agent has special authority:

- Can **BLOCK** any content from deployment
- Can **REQUIRE** modifications before approval
- Has **FINAL** word on ethics questions
- Can **ESCALATE** to human review

---

## Harm Assessment

### Severity Matrix

|  | Low Probability | High Probability |
|---|---|---|
| **High Severity** | CAUTION (Extra review) | BLOCK (Do not proceed) |
| **Low Severity** | PROCEED (Standard gates) | CAUTION (Additional review) |

### Assessment Questions

For any content, ask:

**Physical Harm**
- Could this cause physical injury?
- Could this delay necessary medical care?
- Are contraindications documented?

**Psychological Harm**
- Could this cause emotional distress?
- Could this exacerbate mental health conditions?
- Are grounding techniques provided?

**Cultural Harm**
- Could this harm source communities?
- Is attribution complete and respectful?
- Are closed practices protected?

**Privacy Harm**
- Could this expose sensitive user data?
- Is consent explicit?
- Is data minimized?

---

## Evidence Language Scale

Match language to evidence strength:

| Evidence Level | Sources | Language |
|----------------|---------|----------|
| **Strong** | Multiple high-quality RCTs, meta-analyses | "Research demonstrates..." |
| **Moderate** | Some RCTs, consistent observational | "Studies suggest..." |
| **Preliminary** | Small studies, case series | "Early research indicates..." |
| **Traditional** | Historical use, no clinical | "Traditionally used for..." |
| **Unknown** | No evidence either way | "The mechanism is not understood..." |

---

## Population Considerations

### Always Consider

- Children
- Pregnant people
- Elderly
- People with serious illness
- People with mental health conditions
- People in crisis

### Design Principle

> **"Assume the most vulnerable possible user."**

If content would be inappropriate for any vulnerable population, it needs additional safeguards or should not be included.

---

## Escalation Triggers

Immediately escalate if:

| Trigger | Action |
|---------|--------|
| User reports worsening symptoms | Advise medical consultation, don't troubleshoot |
| Content approaches prohibited territory | Stop and review before proceeding |
| Cultural appropriation concerns | Get guidance on open/closed practices |
| Evidence claims seem exaggerated | Verify before including |
| Vulnerable population considerations | Get explicit approval |
| Any uncertainty about safety | When in doubt, escalate |

---

## Approval Requirements

| Content Type | Ethics Approval Required? |
|--------------|---------------------------|
| New healing modality | Yes |
| Claims about health conditions | Yes |
| Practices from closed traditions | Yes (usually denied) |
| Content targeting vulnerable populations | Yes |
| Integration with biometric data | Yes |
| Bug fixes and UX improvements | No |
| Modifications to approved content | Case-by-case |

---

## The Why

### Our Users Are Vulnerable

People who seek healing applications are often:

- In physical pain
- Emotionally distressed
- Desperate for solutions
- Willing to try anything
- Susceptible to false promises

This vulnerability creates responsibility. We must not:

- Exploit their desperation
- Make promises we can't keep
- Delay their access to real medical care
- Harm them through negligence

### Healing is Sacred

Across cultures and millennia, healing has been treated as sacred work. The healer accepts responsibility for the well-being of those who come to them.

We inherit this responsibility. Our digital tools carry the same weight as any healing practice. We must be worthy of the trust placed in us.

---

## Continuous Improvement

Ethics is not static. The framework evolves:

1. **Learn from incidents** --- When something goes wrong, update guardrails
2. **Stay current** --- Monitor emerging research and best practices
3. **Seek feedback** --- From users, practitioners, communities
4. **Regular review** --- Annual ethics audit of entire system

---

## Learn More

- [Full Ethics Guardrails](https://github.com/realsammyt/healing-swarm-skills/blob/master/.claude/skills/healing-swarm/shared/ethics-guardrails.md)
- [Quality Gates](https://github.com/realsammyt/healing-swarm-skills/blob/master/docs/architecture/quality-gates.md)
- [Architecture Overview](/architecture/)

---

*"We are building tools for people in their most vulnerable moments. We must be worthy of that trust."*
