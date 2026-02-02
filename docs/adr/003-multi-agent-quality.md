# ADR-003: Multi-Agent Quality Review

**Status:** Accepted
**Date:** 2024-01-01
**Deciders:** Healing Swarm Collective

---

## Context

Healing content requires review across multiple dimensions:
- **Medical safety** - No harmful health claims
- **Psychological safety** - No triggering or shaming content
- **Cultural sensitivity** - Proper attribution, no appropriation
- **Clinical accuracy** - Evidence claims match evidence
- **Accessibility** - Works for users with disabilities

No single reviewer can be expert in all areas. Human review doesn't scale. Different aspects require different expertise.

---

## Decision

We will implement **multi-agent quality review** where:

1. **Specialized agents** review specific quality dimensions
2. **Reviews run in parallel** where possible
3. **All findings synthesized** into unified report
4. **Clear severity levels** determine action required
5. **Blocking issues must be fixed** before deployment

Specifically:
- **ethics-guardian** - Safety and ethics compliance
- **clinical-reviewer** - Evidence accuracy
- **cultural-reviewer** - Attribution and sensitivity
- **accessibility-auditor** - WCAG compliance

---

## Alternatives Considered

### Alternative 1: Single Comprehensive Reviewer

**Description:** One agent reviews all quality dimensions.

**Rejected because:**
- Too much expertise required for one agent
- Reviews would be superficial across all areas
- Easier to miss specialized concerns
- Harder to maintain and update

### Alternative 2: Human-Only Review

**Description:** Human experts review all content.

**Rejected because:**
- Doesn't scale with contributions
- Humans have inconsistent standards
- Expensive and slow
- Bottleneck for development

### Alternative 3: Checklist-Only Review

**Description:** Automated checklists without agent judgment.

**Rejected because:**
- Can't catch nuanced issues
- False sense of security
- Misses context-dependent problems
- Too rigid for complex content

---

## Consequences

### Positive

- **Specialized expertise** in each review area
- **Parallel execution** for speed
- **Comprehensive coverage** across dimensions
- **Clear responsibility** for each concern
- **Scalable** with contributions

### Negative

- **Coordination overhead** between reviewers
- **Potential conflicts** in recommendations
- **More complex workflows**
- **Possible redundant checks**

### Mitigations

- Quality-lead agent synthesizes findings
- Clear severity hierarchy resolves conflicts
- Well-defined boundaries between reviewers
- Optimization of parallel execution

---

## Implementation

### Quality Agents

```yaml
# quality/ethics-guardian.md
Expertise:
  - Medical ethics
  - Psychological safety
  - Cultural respect
  - Privacy protection
Authority:
  - Can block deployment
  - Final word on ethics

# quality/clinical-reviewer.md
Expertise:
  - Evidence evaluation
  - Citation verification
  - Safety information
Focus:
  - Accuracy of claims
  - Appropriate language

# quality/cultural-reviewer.md
Expertise:
  - Cultural competency
  - Attribution practices
  - Closed practice identification
Focus:
  - Proper attribution
  - Context preservation

# quality/accessibility-auditor.md
Expertise:
  - WCAG guidelines
  - Assistive technology
  - Inclusive design
Focus:
  - Compliance verification
  - Remediation guidance
```

### Workflow Pattern

```yaml
stages:
  - name: content_creation
    agent: content-creator

  # Parallel quality reviews
  - name: ethics_review
    agent: ethics-guardian
    parallel: true

  - name: clinical_review
    agent: clinical-reviewer
    parallel: true
    condition: has_clinical_claims

  - name: cultural_review
    agent: cultural-reviewer
    parallel: true
    condition: has_traditional_content

  - name: accessibility_review
    agent: accessibility-auditor
    parallel: true
    condition: is_ui_content

  # Synthesis
  - name: quality_synthesis
    agent: quality-lead
    inputs:
      - all review outputs
    outputs:
      - unified quality report
      - required actions

  - name: remediation
    agent: content-creator
    condition: has_required_fixes

  - name: final_approval
    agent: quality-lead
```

### Severity Resolution

When reviewers disagree:

| Conflict Type | Resolution |
|---------------|------------|
| Different severities for same issue | Use highest severity |
| Contradictory recommendations | Ethics-guardian decides |
| Scope disagreement | Quality-lead arbitrates |

### Output Format

```markdown
# Quality Review Report

## Summary
- Overall Status: PASS / CONDITIONAL / FAIL
- Critical Issues: N
- High Issues: N
- Medium Issues: N

## Ethics Review
[Ethics guardian findings]

## Clinical Review
[Clinical reviewer findings]

## Cultural Review
[Cultural reviewer findings]

## Accessibility Review
[Accessibility auditor findings]

## Unified Actions
1. [Critical fix required]
2. [High priority fix]
3. [Recommended improvement]
```

---

## Quality Agent Boundaries

```
┌─────────────────────────────────────────────────────────────────┐
│                    QUALITY AGENT DOMAINS                         │
│                                                                  │
│  ETHICS GUARDIAN              CLINICAL REVIEWER                  │
│  • Medical claims             • Evidence accuracy                │
│  • Psychological safety       • Citation validity                │
│  • Cultural appropriation     • Appropriate language             │
│  • Privacy concerns           • Safety information               │
│  • Guardrail compliance       • Study quality assessment         │
│                                                                  │
│  CULTURAL REVIEWER            ACCESSIBILITY AUDITOR              │
│  • Attribution completeness   • WCAG compliance                  │
│  • Context preservation       • Keyboard navigation              │
│  • Closed practice protection • Screen reader support            │
│  • Terminology accuracy       • Color contrast                   │
│  • Lineage acknowledgment     • Touch targets                    │
└─────────────────────────────────────────────────────────────────┘
```

---

## Related ADRs

- [ADR-001: Ethics-First Architecture](001-ethics-first-architecture.md)
- [ADR-002: Local-First Data Storage](002-local-first-data.md)

---

## Notes

This architecture enables specialized depth while maintaining comprehensive coverage. The parallel execution model means reviews don't bottleneck on each other.

The ethics-guardian has final authority to ensure safety is never compromised by other considerations.
