# Quality Skill Template

> Template for skills that review and audit healing content and applications.

---

## What This Template Includes

```
quality-skill/
├── README.md               # This file
├── manifest-entry.yaml     # Add to main manifest
├── quality-lead.md         # Primary quality agent
├── checklist-auditor.md    # Systematic checklist reviewer
└── workflow.yaml           # Quality workflow
```

---

## When to Use This Template

Use this template when your skill needs to:

- Review content for safety and ethics compliance
- Audit applications for accessibility
- Check clinical accuracy of health content
- Verify cultural sensitivity and attribution
- Perform systematic quality assessments

---

## Key Features

### Comprehensive Checklists

Built-in review checklists for:
- Ethics guardrails compliance
- Accessibility standards (WCAG)
- Clinical accuracy
- Cultural respect

### Structured Reports

Standardized output including:
- Pass/fail assessments
- Specific issues identified
- Recommended fixes
- Severity levels

### Integration Ready

Designed to work with:
- Research skills (verify evidence claims)
- Content skills (review drafts)
- Build skills (audit implementations)

---

## How to Use

### Step 1: Copy the Template

```bash
mkdir -p .claude/skills/healing-swarm/my-quality-skill
cp templates/quality-skill/*.md .claude/skills/healing-swarm/my-quality-skill/
cp templates/quality-skill/*.yaml .claude/skills/healing-swarm/my-quality-skill/
```

### Step 2: Customize

1. Define your specific quality criteria
2. Create domain-specific checklists
3. Set severity levels appropriate to your context
4. Add specialized reviewers if needed

### Step 3: Integrate

1. Add manifest entry
2. Validate: `npm run validate`
3. Test in Claude Code

---

*"Quality is not optional. It's how we protect people."*
