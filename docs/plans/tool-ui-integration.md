# Plan: Tool UI Integration for Healing Swarm Skills

## Executive Summary

Integrate [tool-ui](https://github.com/assistant-ui/tool-ui) components to enhance both the GitHub Pages documentation site and healing applications built with the swarm. This creates a consistent, accessible, and professional UI layer across the ecosystem.

---

## Background

### What is Tool UI?

A React/TypeScript component library for AI interfaces:
- 17+ accessible, responsive components
- Built on shadcn/ui + Tailwind CSS
- Zod schemas for type-safe serialization
- MIT licensed (compatible with our CC-BY-NC-SA-4.0)

### Why Integrate?

1. **Citation Component** - Perfect for evidence sources and tradition attributions (critical for ethics compliance)
2. **Question Flow** - Ideal for healing assessments and practice selection
3. **Progress Tracker** - Healing journey visualization
4. **Plan Component** - Skill workflow display
5. **Consistent Design Language** - Professional, accessible UI patterns

---

## Integration Approach

### Phase 1: Design Pattern Extraction (GitHub Pages)
*For the static Jekyll site*

Extract and adapt CSS patterns and design principles from tool-ui for use in our existing Jekyll site without requiring React.

### Phase 2: Component Library for Healing Apps
*For applications built with `/healing-build`*

Create healing-specific variants of tool-ui components for use in React-based healing applications.

### Phase 3: Interactive Documentation
*Optional future enhancement*

Consider migrating documentation to a React-based framework (Next.js/Docusaurus) to enable live component demos.

---

## Phase 1: Design Pattern Extraction

### Objective
Enhance the GitHub Pages site with tool-ui design patterns without changing the Jekyll architecture.

### Tasks

#### 1.1 Extract CSS Patterns
- [ ] Study tool-ui's Tailwind configuration and design tokens
- [ ] Map tool-ui tokens to our existing `design-tokens.json`
- [ ] Create CSS equivalents of key component styles

#### 1.2 Create Static Component Variants

**Citation Card (for evidence/attribution)**
```html
<!-- Static HTML version for Jekyll -->
<article class="citation-card">
  <div class="citation-header">
    <span class="citation-icon">📚</span>
    <span class="citation-domain">pubmed.gov</span>
    <span class="citation-meta">Zaccaro et al., 2018</span>
  </div>
  <h3 class="citation-title">Effects of Slow Breathing on HRV</h3>
  <p class="citation-snippet">Review of 15 studies showing consistent improvements...</p>
</article>
```

**Progress Tracker (for skill lifecycle)**
```html
<div class="progress-tracker">
  <div class="progress-step completed">
    <span class="step-number">1</span>
    <span class="step-label">Research</span>
  </div>
  <div class="progress-step current">
    <span class="step-number">2</span>
    <span class="step-label">Content</span>
  </div>
  <!-- ... -->
</div>
```

#### 1.3 Update Existing Pages

| Page | Enhancement |
|------|-------------|
| `/examples/` | Add progress tracker showing skill lifecycle |
| `/skills/` | Add visual skill cards with triggers |
| `/ethics/` | Add citation cards for evidence sources |
| `/architecture/` | Add plan visualization for workflows |

#### 1.4 CSS Additions to `style.css`

```css
/* Citation Card - inspired by tool-ui */
.citation-card { ... }

/* Progress Tracker - inspired by tool-ui */
.progress-tracker { ... }

/* Option List - inspired by tool-ui */
.option-list { ... }

/* Plan Steps - inspired by tool-ui */
.plan-steps { ... }
```

### Deliverables
- Updated `assets/css/style.css` with new component styles
- New Jekyll includes: `_includes/citation-card.html`, `_includes/progress-tracker.html`
- Updated example pages showcasing new components

---

## Phase 2: Component Library for Healing Apps

### Objective
Create React components that extend tool-ui for healing-specific use cases.

### Tasks

#### 2.1 Setup Component Package

```
packages/
└── healing-ui/
    ├── package.json
    ├── tsconfig.json
    ├── src/
    │   ├── components/
    │   │   ├── EvidenceCitation/
    │   │   ├── TraditionAttribution/
    │   │   ├── HealingProgress/
    │   │   ├── PracticeSelector/
    │   │   ├── SafetyConsent/
    │   │   └── JourneyTracker/
    │   ├── schemas/
    │   └── index.ts
    └── README.md
```

#### 2.2 Core Components

**EvidenceCitation**
Extends tool-ui's Citation with:
- Evidence level indicator (Strong/Moderate/Preliminary/Traditional)
- Proper medical disclaimer integration
- Study metadata (sample size, limitations)

```typescript
interface EvidenceCitationProps extends CitationProps {
  evidenceLevel: 'strong' | 'moderate' | 'preliminary' | 'traditional';
  sampleSize?: number;
  limitations?: string[];
  disclaimer?: boolean;
}
```

**TraditionAttribution**
For properly crediting healing traditions:
- Tradition name and era
- Primary sources
- Adaptation notes
- Cultural respect indicators

```typescript
interface TraditionAttributionProps {
  tradition: string;
  era?: string;
  sources: string[];
  adaptations?: string[];
  isOpenPractice: boolean;
}
```

**PracticeSelector**
Extends tool-ui's QuestionFlow for healing intake:
- Multi-step healing assessment
- Contraindication checks
- Personalized practice recommendations
- Safety acknowledgment integration

**HealingProgress**
Extends tool-ui's ProgressTracker for healing journeys:
- Daily practice tracking
- Phase completion (40-day cycles, etc.)
- Milestone celebrations
- Gentle, non-judgmental completion states

**SafetyConsent**
Extends tool-ui's ApprovalCard for informed consent:
- Medical disclaimer acknowledgment
- Contraindication review
- Crisis resource display
- Clear "I understand" confirmation

#### 2.3 Integration with `/healing-build`

Update the app-developer agent to:
- Reference healing-ui components
- Include component usage in generated code
- Ensure proper accessibility and ethics compliance

#### 2.4 Storybook Documentation

Create Storybook stories for each component showing:
- Basic usage
- All variants
- Accessibility features
- Ethics-compliant patterns

### Deliverables
- `packages/healing-ui` npm package
- Storybook documentation
- Updated `/healing-build` agent prompts
- Integration examples

---

## Phase 3: Interactive Documentation (Optional)

### Objective
Migrate from Jekyll to a React-based documentation framework to enable live component demos.

### Options Considered

| Framework | Pros | Cons |
|-----------|------|------|
| **Docusaurus** | MDX support, versioning, search | Heavier build |
| **Next.js + MDX** | Full control, App Router | More setup |
| **Astro** | Islands architecture, fast | Newer ecosystem |

### Recommendation
**Docusaurus** - best balance of features and simplicity for documentation with live React demos.

### Tasks (if pursued)

- [ ] Scaffold Docusaurus site
- [ ] Migrate existing markdown content
- [ ] Add live component playgrounds
- [ ] Configure GitHub Pages deployment
- [ ] Set up search (Algolia or local)

### Deliverables
- Docusaurus-based documentation site
- Live component demos
- Interactive code examples
- Search functionality

---

## Implementation Order

### Immediate (Phase 1)
1. Extract CSS patterns from tool-ui
2. Create static citation card component
3. Create static progress tracker component
4. Update examples page with progress visualization
5. Update skills page with enhanced cards

### Short-term (Phase 2)
1. Create `packages/healing-ui` structure
2. Implement EvidenceCitation component
3. Implement TraditionAttribution component
4. Implement SafetyConsent component
5. Add Storybook documentation
6. Update `/healing-build` agent

### Future (Phase 3 - if needed)
1. Evaluate documentation site traffic and feedback
2. Decide on React framework
3. Plan migration

---

## Success Criteria

### Phase 1
- [ ] GitHub Pages site has visually consistent component patterns
- [ ] Citation cards properly display evidence sources
- [ ] Progress tracker visualizes skill lifecycle
- [ ] Lighthouse accessibility score remains > 90

### Phase 2
- [ ] healing-ui package published to npm
- [ ] All 5 core components implemented
- [ ] Storybook documentation complete
- [ ] `/healing-build` generates code using healing-ui

### Phase 3 (if pursued)
- [ ] Documentation site migrated without content loss
- [ ] Live component demos functional
- [ ] Search implemented
- [ ] Build time < 2 minutes

---

## Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| tool-ui breaking changes | Pin to specific version, fork if needed |
| Design inconsistency | Create design token mapping document |
| Accessibility regression | Automated Lighthouse CI checks |
| Scope creep | Strict phase boundaries, MVP first |

---

## Resources

- [tool-ui Repository](https://github.com/assistant-ui/tool-ui)
- [tool-ui Components](https://tool-ui.com/components)
- [tool-ui Design Guidelines](https://tool-ui.com/docs/design-guidelines)
- [shadcn/ui](https://ui.shadcn.com/)
- [Our Design Tokens](/.claude/skills/healing-swarm/shared/design-tokens.json)

---

## Appendix: Component Mapping

| tool-ui Component | Healing Variant | Primary Use |
|-------------------|-----------------|-------------|
| Citation | EvidenceCitation | Clinical evidence display |
| Citation | TraditionAttribution | Cultural attribution |
| QuestionFlow | PracticeSelector | Healing intake/assessment |
| ProgressTracker | HealingProgress | Journey tracking |
| ApprovalCard | SafetyConsent | Informed consent |
| OptionList | ModalityPicker | Practice selection |
| Plan | WorkflowVisualizer | Skill lifecycle display |
| Chart | OutcomeChart | Evidence visualization |

---

*"Beautiful tools for beautiful healing."*
