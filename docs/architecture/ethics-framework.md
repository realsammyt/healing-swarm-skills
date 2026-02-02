# Ethics Framework

> Deep dive into the ethics architecture of the healing swarm.

---

## Core Philosophy

The healing swarm operates under a single guiding principle:

> **"First, do no harm."**

Every component, every agent, every piece of content is built with the understanding that our users may be **vulnerable**—injured, ill, anxious, desperate, or grieving. Our responsibility is sacred.

---

## Ethics Architecture

### Layer 1: Foundational Guardrails

The `shared/ethics-guardrails.md` file defines absolute constraints:

```
┌─────────────────────────────────────────────────────────────────┐
│                    ABSOLUTE PROHIBITIONS                         │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    MEDICAL SAFETY                        │   │
│  │  • No diagnosis                                          │   │
│  │  • No medication recommendations                         │   │
│  │  • No cure claims                                        │   │
│  │  • No delaying emergency care                            │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                 PSYCHOLOGICAL SAFETY                     │   │
│  │  • No shame/blame                                        │   │
│  │  • No illness-as-punishment                              │   │
│  │  • No dependency creation                                │   │
│  │  • No outcome promises                                   │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                  CULTURAL INTEGRITY                      │   │
│  │  • No closed practice disclosure                         │   │
│  │  • No misattribution                                     │   │
│  │  • No context stripping                                  │   │
│  │  • No cultural appropriation                             │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    DATA PRIVACY                          │   │
│  │  • No external health data transmission                  │   │
│  │  • No identifiable storage                               │   │
│  │  • No advertising use                                    │   │
│  │  • No required accounts                                  │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

### Layer 2: Required Elements

Every piece of healing content MUST include:

```
┌─────────────────────────────────────────────────────────────────┐
│                     REQUIRED ELEMENTS                            │
│                                                                  │
│  MEDICAL DISCLAIMERS                                             │
│  ├── "Does NOT replace professional medical care"               │
│  ├── "Consult your healthcare provider"                         │
│  ├── "Continue prescribed treatments"                           │
│  └── "Seek immediate care for [red flags]"                      │
│                                                                  │
│  PSYCHOLOGICAL SAFETY                                            │
│  ├── Grounding techniques (for intensive practices)             │
│  ├── Permission to stop ("You can stop anytime")                │
│  ├── Crisis resources (for mental health content)               │
│  └── Self-compassion messaging                                  │
│                                                                  │
│  CULTURAL ATTRIBUTION                                            │
│  ├── Specific tradition named                                   │
│  ├── Era/dates provided                                         │
│  ├── Primary sources cited                                      │
│  ├── Adaptations noted                                          │
│  └── Gratitude expressed                                        │
│                                                                  │
│  EVIDENCE HONESTY                                                │
│  ├── "Research suggests" (not "proves")                         │
│  ├── Sample sizes and limitations                               │
│  ├── "Results vary"                                             │
│  └── Distinguish correlation/causation                          │
└─────────────────────────────────────────────────────────────────┘
```

### Layer 3: Ethics Guardian

The ethics-guardian agent has special authority:

```
┌─────────────────────────────────────────────────────────────────┐
│                    ETHICS GUARDIAN POWERS                        │
│                                                                  │
│  ★ Can BLOCK any content from deployment                        │
│  ★ Can REQUIRE modifications before approval                    │
│  ★ Has FINAL word on ethics questions                           │
│  ★ Can ESCALATE to human review                                 │
│                                                                  │
│  Reports to: Human maintainers (for edge cases)                 │
│  Authority: Absolute within ethics domain                        │
└─────────────────────────────────────────────────────────────────┘
```

---

## Ethical Principles

### 1. Autonomy

**Principle:** Users have the right to make informed decisions.

**Implementation:**
- Provide information, don't prescribe
- No coercive language
- Clear about limitations
- User controls their data

```
DO:    "You might consider..."
DON'T: "You must do this..."

DO:    "Research suggests this may help with..."
DON'T: "This will cure your..."
```

### 2. Beneficence

**Principle:** Primary purpose is to support genuine healing.

**Implementation:**
- Every feature should plausibly benefit users
- No dark patterns
- No engagement maximization at expense of wellbeing
- Healing focus over metrics

### 3. Non-maleficence

**Principle:** Do not cause harm through action or inaction.

**Implementation:**
- When uncertain, err toward caution
- Include safety information
- Provide exit ramps
- Document contraindications

### 4. Justice

**Principle:** Healing wisdom should be accessible to all.

**Implementation:**
- No cost gatekeeping of essential content
- Accessibility as requirement, not afterthought
- Design for most vulnerable users
- No exploitation of vulnerability

### 5. Fidelity

**Principle:** Be honest about what we know and don't know.

**Implementation:**
- Evidence levels clearly stated
- Limitations acknowledged
- No promises we can't keep
- Transparent about uncertainty

### 6. Cultural Respect

**Principle:** Honor the traditions whose wisdom we share.

**Implementation:**
- Proper attribution always
- Context preserved
- Closed practices protected
- Give back to communities

---

## Harm Assessment Framework

### Severity Matrix

```
           Low Probability    High Probability
         ┌─────────────────┬─────────────────┐
   High  │    CAUTION      │     BLOCK       │
Severity │  Extra review   │ Do not proceed  │
         ├─────────────────┼─────────────────┤
   Low   │    PROCEED      │    CAUTION      │
Severity │  Standard gates │ Additional review│
         └─────────────────┴─────────────────┘
```

### Assessment Questions

For any content, ask:

**Physical Harm:**
- Could this cause physical injury?
- Could this delay necessary medical care?
- Are contraindications documented?

**Psychological Harm:**
- Could this cause emotional distress?
- Could this exacerbate mental health conditions?
- Are grounding techniques provided?

**Cultural Harm:**
- Could this harm source communities?
- Is attribution complete and respectful?
- Are closed practices protected?

**Privacy Harm:**
- Could this expose sensitive user data?
- Is consent explicit?
- Is data minimized?

---

## Escalation Triggers

Immediately escalate to ethics-guardian if:

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

## Evidence Language Scale

Match language to evidence strength:

| Evidence Level | Sources | Language |
|----------------|---------|----------|
| Strong | Multiple high-quality RCTs, meta-analyses | "Research demonstrates..." |
| Moderate | Some RCTs, consistent observational | "Studies suggest..." |
| Preliminary | Small studies, case series | "Early research indicates..." |
| Traditional | Historical use, no clinical | "Traditionally used for..." |
| Unknown | No evidence either way | "The mechanism is not understood..." |

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

## Continuous Improvement

Ethics is not static. The framework should evolve:

1. **Learn from incidents** - When something goes wrong, update guardrails
2. **Stay current** - Monitor emerging research and best practices
3. **Seek feedback** - From users, practitioners, communities
4. **Regular review** - Annual ethics audit of entire system

---

## See Also

- [Architecture Overview](overview.md)
- [Quality Gates](quality-gates.md)
- [Shared Resources: ethics-guardrails.md](../api/shared-resources.md#ethics-guardrails)
