---
layout: page
title: Contribute
description: How to participate in the healing swarm - for code and non-code contributors.
permalink: /contribute/
---

**Your contribution matters.** Whether you're a healer with centuries of tradition behind you, a developer who just learned to code, or someone who simply noticed something that could be better---you have something to offer.

---

## Ways to Contribute

### Without Code

| Contribution | Impact |
|--------------|--------|
| **Document a tradition** | Preserve and share healing wisdom |
| **Report issues** | Make the framework more robust |
| **Ask questions** | Reveal assumptions we missed |
| **Share your use case** | Inspire others |
| **Help translate** | Make content accessible globally |
| **Review content** | Catch errors, improve clarity |

### With Code

| Contribution | Impact |
|--------------|--------|
| **Add a new skill** | Extend the swarm's capabilities |
| **Create examples** | Help others learn |
| **Improve tooling** | Better developer experience |
| **Improve documentation** | Help others learn faster |
| **Fix bugs** | Make the framework more robust |
| **Add tests** | Increase reliability |

---

## Non-Code Contributions

### Document a Healing Tradition

Have knowledge of a healing tradition? Help us document it properly:

1. **Open an issue** describing the tradition
2. **Provide sources** --- primary texts, lineage teachers
3. **Note what's open vs. closed** --- what can be shared publicly?
4. **Include historical context** --- era, geography, development

We'll work with you to create proper documentation that honors the tradition.

### Report Issues or Suggestions

Found a problem? Have an idea?

1. **Check existing issues** --- [GitHub Issues](https://github.com/realsammyt/healing-swarm-skills/issues)
2. **Open a new issue** with:
   - What you expected
   - What happened
   - Steps to reproduce (for bugs)
   - Your suggestion (for improvements)

### Share Your Use Case

Built something with the healing swarm? Let us know:

1. **Open a Discussion** --- [GitHub Discussions](https://github.com/realsammyt/healing-swarm-skills/discussions)
2. **Describe your use case**
3. **Share what worked and what didn't**
4. **Inspire others** with your story

---

## Code Contributions

### Quick Start

```bash
# Fork the repository on GitHub

# Clone your fork
git clone https://github.com/YOUR-USERNAME/healing-swarm-skills.git
cd healing-swarm-skills

# Install dependencies
npm install

# Create a branch
git checkout -b feature/your-feature-name

# Make your changes
# ...

# Validate before committing
npm run validate
npm run check:ethics

# Commit with clear message
git commit -m "Add: [brief description]"

# Push to your fork
git push origin feature/your-feature-name

# Open a Pull Request on GitHub
```

### Create a New Skill

The easiest way to contribute a new skill:

```bash
npm run create-skill
```

The interactive CLI walks you through:
- Skill name and trigger
- Template selection
- Agent configuration
- Workflow setup

### Templates

Use our starter templates:

| Template | When to Use |
|----------|-------------|
| **minimal-skill** | Simple single-agent skills |
| **research-skill** | Multi-source research skills |
| **content-skill** | Content creation skills |
| **quality-skill** | Review and audit skills |

```bash
cp -r templates/minimal-skill .claude/skills/healing-swarm/your-skill
```

### Pull Request Guidelines

**PR Title Format:**
- `Add: [feature]` --- New features or content
- `Fix: [issue]` --- Bug fixes
- `Update: [what]` --- Updates to existing content
- `Docs: [what]` --- Documentation changes

**PR Description Must Include:**
- What changes were made
- Why the changes are needed
- How the changes were tested
- Any ethical considerations

**PR Checklist:**
- [ ] Follows code/content style guidelines
- [ ] Passes all automated tests (`npm run validate`)
- [ ] Ethics guardrails respected (`npm run check:ethics`)
- [ ] Includes appropriate documentation
- [ ] Accessibility requirements met
- [ ] Attribution complete (for traditional content)

---

## Contribution Guidelines

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

### Code Standards

- TypeScript with strict mode
- WCAG AA accessibility minimum
- No external tracking
- Local-first data storage
- Comprehensive tests

---

## Review Process

All contributions go through review:

1. **Automated checks** --- Linting, tests, ethics validation
2. **Peer review** --- Code/content quality
3. **Specialist review** (if applicable):
   - Clinical content -> Clinical reviewer
   - Traditional content -> Cultural reviewer
   - UI changes -> Accessibility auditor
4. **Ethics review** --- For significant changes

---

## Getting Help

- **Questions**: [Open a Discussion](https://github.com/realsammyt/healing-swarm-skills/discussions)
- **Bugs**: [Open an Issue](https://github.com/realsammyt/healing-swarm-skills/issues)
- **Security**: Email maintainers directly
- **Ethics Questions**: Contact the ethics-guardian team

---

## Community Guidelines

### Communication

- Be respectful and constructive
- Assume good intent
- Focus on the work, not the person
- Welcome newcomers

### Recognition

- All contributors credited in releases
- Significant contributions acknowledged in README
- Co-author commits where appropriate

---

## License

By contributing, you agree that your contributions will be licensed under [CC-BY-NC-SA-4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) (Attribution-NonCommercial-ShareAlike).

---

*"We build tools that support what life already knows how to do. Your contribution helps extend that support to more people."*
