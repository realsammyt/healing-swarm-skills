# Quality Gates

> All quality checkpoints in the healing swarm system.

---

## Overview

Quality gates are mandatory checkpoints that content and code must pass before proceeding. They exist at multiple levels:

```
Level 1: Input Validation
Level 2: Process Quality
Level 3: Output Review
Level 4: Deployment Approval
```

---

## Gate Categories

### 1. Ethics Gates

**Enforced by:** ethics-guardian
**Severity:** Critical (blocking)

| Check | Requirement | Failure Action |
|-------|-------------|----------------|
| No medical diagnosis | Content doesn't diagnose conditions | Block |
| No cure claims | Content doesn't claim to cure | Block |
| Medical disclaimers | Required disclaimers present | Block |
| Psychological safety | No harmful framing | Block |
| Cultural respect | Traditions properly attributed | Block |
| Closed practice protection | No disclosure of closed practices | Block |

**Standard Ethics Checklist:**
- [ ] No medical diagnosis claims
- [ ] No recommendation to stop medications
- [ ] No cure/treatment claims
- [ ] No fear-based motivation
- [ ] Medical disclaimer present (if health content)
- [ ] Grounding technique provided (if intensive content)
- [ ] Exit ramp included (if guided practice)
- [ ] Crisis resources included (if mental health content)
- [ ] Tradition specifically named
- [ ] Adaptations noted
- [ ] Closed practices not disclosed

---

### 2. Clinical Accuracy Gates

**Enforced by:** clinical-reviewer
**Severity:** High (requires fix)

| Check | Requirement | Failure Action |
|-------|-------------|----------------|
| Citation verification | All sources exist and are accurate | Require fix |
| Evidence level accuracy | Claims match evidence strength | Require fix |
| Limitation acknowledgment | Study limitations noted | Require fix |
| Safety information | Contraindications documented | Block |

**Evidence-Claim Matching:**

| Evidence Level | Allowed Language |
|----------------|------------------|
| Strong (meta-analyses) | "demonstrates", "shows" |
| Moderate (some RCTs) | "suggests", "indicates" |
| Preliminary (small studies) | "may", "might", "early research" |
| Traditional (no clinical) | "traditionally used", "in [tradition]" |

---

### 3. Cultural Sensitivity Gates

**Enforced by:** cultural-reviewer
**Severity:** High (requires fix)

| Check | Requirement | Failure Action |
|-------|-------------|----------------|
| Attribution completeness | Tradition, era, sources named | Require fix |
| Context preservation | Cultural context maintained | Require fix |
| Closed practice respect | Initiatory content protected | Block |
| Language appropriateness | Correct terminology used | Require fix |

**Attribution Checklist:**
- [ ] Specific tradition named (not "Eastern" or "ancient")
- [ ] Era/date provided
- [ ] Primary sources cited where possible
- [ ] Adaptations from traditional form noted
- [ ] Acknowledgment of lineage holders
- [ ] Closed/initiatory status identified

---

### 4. Accessibility Gates

**Enforced by:** accessibility-auditor
**Severity:** High (requires fix)

| Check | Requirement | Failure Action |
|-------|-------------|----------------|
| WCAG AA compliance | Meets accessibility standard | Require fix |
| Keyboard navigation | Full keyboard access | Require fix |
| Screen reader support | ARIA labels correct | Require fix |
| Touch targets | Minimum 48x48dp | Require fix |
| Color contrast | 4.5:1 minimum ratio | Require fix |
| Reading level | 8th grade maximum | Require fix |

**WCAG Checklist:**
- [ ] Text alternatives for images
- [ ] Color contrast meets 4.5:1
- [ ] Information not conveyed by color alone
- [ ] Keyboard navigable
- [ ] Touch targets 48x48dp minimum
- [ ] Reduced motion respected
- [ ] Reading level accessible
- [ ] Instructions clear
- [ ] Error messages helpful
- [ ] Works with screen readers

---

### 5. Content Quality Gates

**Enforced by:** content-editor
**Severity:** Medium (should fix)

| Check | Requirement | Failure Action |
|-------|-------------|----------------|
| Voice consistency | Follows voice-guide.md | Require revision |
| Template compliance | Follows content templates | Require revision |
| Completeness | All required sections present | Require revision |
| Clarity | Clear, sequential, actionable | Suggest revision |

**Voice Checklist:**
- [ ] Warm but not saccharine
- [ ] Grounded but not clinical
- [ ] Inviting not commanding
- [ ] Authoritative but humble
- [ ] No outcome promises
- [ ] No "you will feel" language

---

### 6. Technical Quality Gates

**Enforced by:** automated validation
**Severity:** Varies

| Check | Requirement | Failure Action |
|-------|-------------|----------------|
| YAML syntax | Valid YAML | Block |
| Markdown structure | Valid Markdown | Block |
| Required sections | All required sections present | Block |
| Ethics reference | Ethics guardrails referenced | Block |
| File exists | All referenced files exist | Block |

---

## Gate Workflow

### Pre-Creation

```
User Request → Input Validation Gate
                     │
              ┌──────┴──────┐
              │             │
           [VALID]      [INVALID]
              │             │
              ▼             ▼
         Continue      Clarification
                        Request
```

### During Creation

```
Draft Content → Process Quality Gate
                      │
              ┌───────┴───────┐
              │               │
           [PASS]          [FAIL]
              │               │
              ▼               ▼
         Continue       Revision Loop
              │               │
              └───────┬───────┘
                      ▼
              Quality Review Gate
```

### Pre-Deployment

```
Final Content → Ethics Gate
                    │
              ┌─────┴─────┐
              │           │
           [PASS]      [FAIL]
              │           │
              ▼           ▼
      Accessibility    Block &
          Gate         Remediate
              │
              ▼
      Deployment Gate
              │
              ▼
         DEPLOYED
```

---

## Gate Severity Levels

### Critical

**Definition:** Safety risk or ethics violation
**Response:** Immediate block, cannot proceed
**Resolution:** Must fix before any further action

**Examples:**
- Cure claims
- Missing medical disclaimer
- Closed practice disclosure
- Safety information absent

### High

**Definition:** Significant quality issue
**Response:** Fix required before deployment
**Resolution:** Must fix in this release

**Examples:**
- Evidence overclaims
- Missing attribution
- Accessibility failure
- Keyboard navigation broken

### Medium

**Definition:** Quality improvement needed
**Response:** Fix in next iteration
**Resolution:** Should fix soon

**Examples:**
- Voice inconsistency
- Reading level slightly high
- Missing modifications
- Minor attribution gaps

### Low

**Definition:** Minor enhancement
**Response:** Optional fix
**Resolution:** Nice to have

**Examples:**
- Tone refinement
- Additional examples
- Documentation improvement

---

## Gate Implementation

### In Workflows

```yaml
quality_gates:
  stage_name:
    - "Requirement 1"
    - "Requirement 2"
    - "Requirement 3"
```

### In CI/CD

```yaml
# .github/workflows/validate-pr.yml
jobs:
  validate:
    steps:
      - name: Validate skill structure
        run: npm run validate
      - name: Check ethics references
        run: npm run check:ethics
      - name: Lint agent prompts
        run: npm run lint:prompts
```

### In Agent Prompts

```markdown
## Quality Standards

Every output must:
- Meet ethics guardrails
- Include appropriate disclaimers
- Use accessible language
- Attribute sources properly
```

---

## Bypassing Gates

### When Allowed

Gates can ONLY be bypassed with:
1. Explicit documented justification
2. Approval from relevant guardian (ethics-guardian for ethics gates)
3. Time-limited exception with remediation plan

### Never Allowed

These gates can NEVER be bypassed:
- Critical ethics gates
- Safety information requirements
- Closed practice protection

---

## Gate Metrics

Track these metrics for quality improvement:

| Metric | Target | Action if Below |
|--------|--------|-----------------|
| First-pass rate | >80% | Improve templates/guidance |
| Critical failure rate | <5% | Training/process review |
| Time to resolution | <24h | Streamline review process |
| Repeat failures | <10% | Root cause analysis |

---

## See Also

- [Architecture Overview](overview.md)
- [Ethics Framework](ethics-framework.md)
- [Testing Skills Guide](../guides/testing-skills.md)
