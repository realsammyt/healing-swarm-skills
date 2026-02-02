# ADR-001: Ethics-First Architecture

**Status:** Accepted
**Date:** 2024-01-01
**Deciders:** Healing Swarm Collective

---

## Context

We are building a system that creates healing content and applications. This content will be used by people who may be:
- Physically injured or ill
- Experiencing mental health challenges
- Grieving or in crisis
- Seeking help for themselves or loved ones

The potential for harm is significant. Misleading medical claims, inappropriate psychological content, or cultural appropriation could cause real damage to real people.

---

## Decision

We will implement an **ethics-first architecture** where:

1. **Ethics guardrails are mandatory** for all agents
2. **Ethics review is required** before deployment of any healing content
3. **Ethics-guardian agent has veto power** over content
4. **Guardrails are loaded before any other context**

Specifically:
- Every agent MUST include `shared/ethics-guardrails.md` in their Loaded Context
- Every workflow MUST include an ethics review stage
- Critical ethics violations BLOCK deployment (no exceptions)
- Validation scripts VERIFY ethics references

---

## Alternatives Considered

### Alternative 1: Ethics as Optional Layer

**Description:** Make ethics review optional or advisory.

**Rejected because:**
- Vulnerable users could be harmed by unreviewed content
- Inconsistent quality across contributions
- No guarantee of safety
- Would undermine trust in the system

### Alternative 2: Post-hoc Ethics Review

**Description:** Create content first, review for ethics later.

**Rejected because:**
- Wasted effort when content is rejected
- Risk of content slipping through
- Ethics should inform creation, not just audit
- Harder to fix embedded problems

### Alternative 3: Human-Only Ethics Review

**Description:** Have humans review all content for ethics.

**Rejected because:**
- Doesn't scale with contributions
- Humans have biases and blind spots
- Automated guardrails provide consistent baseline
- Human review can supplement, not replace, systematic checks

---

## Consequences

### Positive

- **User safety protected** by systematic checks
- **Consistent quality** across all content
- **Clear requirements** for contributors
- **Trust** from users and healing communities
- **Defensible decisions** with documented reasoning

### Negative

- **More complex** contribution process
- **Slower** content production
- **Some valid content rejected** due to false positives
- **Ongoing maintenance** of guardrails needed

### Mitigations

- Clear documentation of requirements
- Templates that include required elements
- Validation scripts catch issues early
- Human escalation path for edge cases

---

## Implementation

### In Agents

```markdown
## Loaded Context

Before beginning work, load and follow:
- `shared/ethics-guardrails.md` - Absolute safety constraints
```

### In Workflows

```yaml
stages:
  - name: ethics_review
    description: Review for safety and ethics
    agent: orchestrator
    invokes:
      - quality/ethics-guardian
```

### In Validation

```bash
npm run check:ethics
# Verifies all agents reference guardrails
```

### In CI/CD

```yaml
- name: Check ethics references
  run: npm run check:ethics
```

---

## Related ADRs

- [ADR-002: Local-First Data Storage](002-local-first-data.md)
- [ADR-003: Multi-Agent Quality Review](003-multi-agent-quality.md)

---

## Notes

This decision is foundational. Changing it would require rethinking the entire system architecture and potentially rebuilding most components.

The phrase "First, do no harm" appears throughout the system intentionally—it's the guiding star for all decisions.
