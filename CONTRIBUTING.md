# Contributing to Healing Swarm Skills

Thank you for your interest in contributing to the Healing Swarm Skills project.
This document provides guidelines for contributing in a way that aligns with
our ethical foundation and quality standards.

---

## Quick Start for Contributors

1. **[Read the Setup Guide](docs/SETUP.md)** - Get your environment ready
2. **[Read the Ethics Guardrails](/.claude/skills/healing-swarm/shared/ethics-guardrails.md)** - Understand our constraints
3. **[Create a Skill](docs/guides/creating-skills.md)** - Follow the step-by-step guide
4. **[Test Your Skill](docs/guides/testing-skills.md)** - Validate before submitting
5. **[Submit a PR](#pull-request-guidelines)** - Follow PR guidelines below

### Use Our Tooling

```bash
# Create a new skill with interactive CLI
npm run create-skill

# Validate your changes
npm run validate

# Check ethics references
npm run check:ethics
```

---

## Our Ethical Foundation

Before contributing, please familiarize yourself with our core ethical principles:

1. **First, do no harm** - Medical and psychological safety are absolute priorities
2. **Honor all traditions** - No appropriation; proper attribution always
3. **Evidence with humility** - "May help" not "will cure"
4. **Empower, don't control** - User autonomy is sacred
5. **Privacy as sanctuary** - Healing data stays with the healer
6. **Accessible to all** - Design for the most vulnerable users
7. **Continuous improvement** - Learn from outcomes, update with evidence

All contributions must align with these principles.

---

## Ways to Contribute

### 1. Research Contributions

Help expand our research base:

- **Tradition research**: Document healing practices with proper attribution
- **Clinical evidence**: Find and summarize relevant studies
- **Mechanism mapping**: Bridge traditional and scientific understanding

**Requirements:**
- Primary sources cited
- Dates and origins documented
- Clear distinction between evidence levels
- Respect for closed/initiatory practices

### 2. Content Contributions

Create healing content:

- Prayers and invocations (with proper attribution)
- Guided visualizations
- Practice instructions
- Evidence boxes
- Journal prompts

**Requirements:**
- Follow templates in `content/templates/`
- Adhere to `shared/voice-guide.md`
- Pass ethics review before merge
- Include all required metadata

### 3. Design Contributions

Improve user experience:

- UX improvements
- Visual design enhancements
- Accessibility improvements
- Component designs

**Requirements:**
- Follow design tokens in `shared/design-tokens.json`
- Meet WCAG AA accessibility standards
- Support one-handed operation
- Include dark mode support

### 4. Code Contributions

Improve the technical foundation:

- Bug fixes
- New components
- Performance improvements
- Accessibility enhancements

**Requirements:**
- TypeScript with strict mode
- Full accessibility compliance
- Privacy-first architecture
- Comprehensive tests

### 5. Documentation

Help others understand and use the swarm:

- Usage guides
- API documentation
- Examples and tutorials
- Translation/localization

---

## Contribution Process

### 1. Before You Start

- **Check existing issues** - Someone may already be working on it
- **Open an issue** - Discuss your idea before major work
- **Read the ethics guardrails** - `shared/ethics-guardrails.md`

### 2. Development Workflow

```bash
# Fork the repository
# Clone your fork
git clone https://github.com/YOUR-USERNAME/healing-swarm-skills.git
cd healing-swarm-skills

# Install dependencies
npm install

# Create a branch
git checkout -b feature/your-feature-name

# Create a new skill (recommended)
npm run create-skill

# Or use a template
cp -r templates/minimal-skill .claude/skills/healing-swarm/your-skill

# Make your changes
# ...

# Validate before committing
npm run validate
npm run check:ethics

# Commit with clear message
git commit -m "Add: [brief description]

[Longer description if needed]

Co-Authored-By: Your Name <your@email.com>"

# Push to your fork
git push origin feature/your-feature-name

# Open a Pull Request
```

### Using Templates

We provide starter templates for common skill types:

| Template | Use When |
|----------|----------|
| [minimal-skill](templates/minimal-skill/) | Learning, simple single-agent skills |
| [research-skill](templates/research-skill/) | Multi-source research skills |
| [content-skill](templates/content-skill/) | Content creation skills |
| [quality-skill](templates/quality-skill/) | Review and audit skills |

See [Creating Skills Guide](docs/guides/creating-skills.md) for detailed instructions.

### 3. Pull Request Guidelines

**PR Title Format:**
- `Add: [feature]` - New features or content
- `Fix: [issue]` - Bug fixes
- `Update: [what]` - Updates to existing content
- `Docs: [what]` - Documentation changes

**PR Description Must Include:**
- What changes were made
- Why the changes are needed
- How the changes were tested
- Any ethical considerations

**PR Checklist:**
- [ ] Follows code/content style guidelines
- [ ] Passes all automated tests
- [ ] Includes appropriate documentation
- [ ] Ethics guardrails respected
- [ ] Accessibility requirements met
- [ ] Attribution complete (for traditional content)

### 4. Review Process

All contributions go through review:

1. **Automated checks** - Linting, tests, accessibility
2. **Peer review** - Code/content quality
3. **Specialist review** (if applicable):
   - Clinical content → Clinical reviewer
   - Traditional content → Cultural reviewer
   - UI changes → Accessibility auditor
4. **Ethics review** - For significant changes

---

## Content Contribution Guidelines

### Traditional Content

When contributing content from healing traditions:

**Required:**
- Name the specific tradition (not vague "Eastern wisdom")
- Provide era/dates when documented
- Cite primary sources where available
- Note any adaptations from traditional form
- Acknowledge lineage holders

**Not Allowed:**
- Closed/initiatory practices without explicit permission
- Misattributed or fabricated "traditions"
- Commercialization of sacred content
- Stripping context from practices

### Evidence-Based Content

When contributing clinical evidence:

**Required:**
- Valid PMID/DOI for all citations
- Language matching evidence level
- Limitations acknowledged
- Sample sizes noted

**Evidence Language:**
- Strong evidence: "Research demonstrates..."
- Moderate evidence: "Studies suggest..."
- Preliminary evidence: "Early research indicates..."
- Traditional only: "Traditionally used for..."

### Safety Content

All content must include appropriate safety information:

- Medical disclaimers where needed
- Contraindications noted
- "Complements, doesn't replace medical care"
- Crisis resources for psychological content
- Exit ramps in visualizations

---

## Code Contribution Guidelines

### Technology Stack

- **Language**: TypeScript (strict mode)
- **Framework**: React (or as specified)
- **Styling**: Tailwind CSS + design tokens
- **Testing**: Vitest + Testing Library

### Code Standards

```typescript
// Example component structure
interface Props {
  // Props documented
}

/**
 * Component description
 *
 * @accessibility Keyboard, screen reader notes
 */
export function Component({ prop }: Props) {
  // Implementation
}
```

### Accessibility Requirements

Every UI contribution must:

- Support keyboard navigation
- Work with screen readers
- Meet WCAG AA contrast ratios
- Support reduced motion preference
- Have 48px minimum touch targets
- Work one-handed

### Privacy Requirements

- No external tracking
- Local-first data storage
- No PII in logs
- Explicit consent for any data transmission

---

## Review Criteria

### For Content

| Criterion | Requirement |
|-----------|-------------|
| Attribution | Complete and accurate |
| Evidence level | Correctly assessed |
| Language | Appropriate for evidence |
| Safety | Disclaimers present |
| Accessibility | Multiple sensory modes |
| Ethics | Guardrails respected |

### For Code

| Criterion | Requirement |
|-----------|-------------|
| Type safety | TypeScript strict |
| Accessibility | WCAG AA minimum |
| Privacy | No tracking |
| Performance | Lighthouse > 90 |
| Testing | Adequate coverage |
| Documentation | JSDoc/comments |

---

## Community Guidelines

### Communication

- Be respectful and constructive
- Assume good intent
- Focus on the work, not the person
- Welcome newcomers

### Disagreements

- Discuss technical disagreements professionally
- Escalate ethical concerns to maintainers
- Accept maintainer decisions gracefully

### Recognition

- All contributors credited in releases
- Significant contributions acknowledged in README
- Co-author commits where appropriate

---

## Getting Help

- **Questions**: Open a Discussion
- **Bugs**: Open an Issue
- **Security**: Email maintainers directly
- **Ethics concerns**: Contact ethics-guardian

---

## License

By contributing, you agree that your contributions will be licensed under
CC-BY-NC-SA-4.0 (Attribution-NonCommercial-ShareAlike).

---

*"We build tools that support what life already knows how to do. Your contribution helps extend that support to more people."*
