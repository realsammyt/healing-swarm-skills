# Healing Components

Specialized React components for the Healing Swarm Skills documentation site. These components follow the healing design system with appropriate color schemes, accessibility features, and user-friendly interactions.

## Components

### EvidenceCitation

Displays clinical evidence with appropriate evidence level badging and metadata.

**Props:**
- `level`: Evidence level (`'strong' | 'moderate' | 'preliminary' | 'traditional'`)
- `title`: Citation title
- `author?`: Author name
- `date?`: Publication date
- `domain?`: Research domain/field
- `snippet`: Quote or summary text
- `sampleSize?`: Study sample size
- `limitations?`: Known limitations
- `sourceUrl?`: Link to source
- `className?`: Additional CSS classes

**Example:**
```tsx
<EvidenceCitation
  level="strong"
  title="Mindfulness Meditation Reduces Anxiety"
  author="Smith et al."
  date="2023"
  domain="Clinical Psychology"
  snippet="Meta-analysis of 47 studies found significant anxiety reduction..."
  sampleSize={5000}
  limitations="Most studies were 8 weeks or less"
  sourceUrl="https://example.com/study"
/>
```

### TraditionAttribution

Credits healing traditions with appropriate context and practice status.

**Props:**
- `traditionName`: Name of the tradition
- `era?`: Historical era or time period
- `primarySources`: Array of source texts/practitioners
- `adaptationNotes?`: How the practice has been adapted
- `isOpenPractice`: Whether practice is open or closed
- `className?`: Additional CSS classes

**Example:**
```tsx
<TraditionAttribution
  traditionName="Vipassana Meditation"
  era="Circa 6th century BCE"
  primarySources={[
    "Theravada Buddhist texts",
    "S.N. Goenka lineage",
    "Mahasi Sayadaw tradition"
  ]}
  adaptationNotes="Adapted for secular contexts while preserving core technique"
  isOpenPractice={true}
/>
```

### HealingProgress

Visualizes user progress through healing steps/practices.

**Props:**
- `steps`: Array of step objects with `id`, `label`, and `status`
- `encouragementMessage?`: Optional encouragement text
- `className?`: Additional CSS classes

**Step Status:**
- `'completed'`: Healing green with checkmark
- `'current'`: Calm blue with pulse animation
- `'upcoming'`: Grounded gray

**Example:**
```tsx
<HealingProgress
  steps={[
    { id: '1', label: 'Complete safety assessment', status: 'completed' },
    { id: '2', label: 'Learn grounding technique', status: 'current' },
    { id: '3', label: 'Practice daily for one week', status: 'upcoming' },
    { id: '4', label: 'Reflect on experience', status: 'upcoming' }
  ]}
  encouragementMessage="You're doing great! Take your time with each step."
/>
```

### PracticeSelector

Multi-option selection for choosing practices or preferences.

**Props:**
- `title`: Selector title
- `description?`: Helper text
- `options`: Array of option objects with `id`, `label`, `description`
- `mode?`: Selection mode (`'single' | 'multi'`, default: `'single'`)
- `onSelect`: Callback with selected IDs array
- `defaultSelected?`: Initially selected IDs
- `className?`: Additional CSS classes

**Example:**
```tsx
<PracticeSelector
  title="Choose Your Focus Area"
  description="Select the area you'd like to work on first"
  mode="single"
  options={[
    {
      id: 'anxiety',
      label: 'Anxiety Relief',
      description: 'Techniques for calming the nervous system'
    },
    {
      id: 'sleep',
      label: 'Sleep Improvement',
      description: 'Practices to support restful sleep'
    },
    {
      id: 'focus',
      label: 'Mental Clarity',
      description: 'Methods to enhance focus and concentration'
    }
  ]}
  onSelect={(selectedIds) => console.log('Selected:', selectedIds)}
/>
```

### SafetyConsent

Informed consent card with acknowledgment checkbox.

**Props:**
- `title`: Consent title
- `body`: Full consent text (supports `\n\n` for paragraphs)
- `checkboxLabel?`: Acknowledgment text (default provided)
- `confirmLabel?`: Confirm button text (default: "I Consent")
- `cancelLabel?`: Cancel button text (default: "Cancel")
- `onConfirm`: Called when user confirms
- `onCancel?`: Called when user cancels
- `className?`: Additional CSS classes

**Example:**
```tsx
<SafetyConsent
  title="Safety Notice"
  body={`This practice involves deep breathing and may cause dizziness.

If you have respiratory conditions, please consult your healthcare provider first.

Stop immediately if you feel uncomfortable.`}
  onConfirm={() => startPractice()}
  onCancel={() => navigateBack()}
/>
```

## Design Patterns

### Color Usage

- **Healing Green** (`healing-*`): Success, completion, affirmation
- **Calm Blue** (`calm-*`): Current state, active elements, information
- **Sacred Gold** (`sacred-*`): Traditional knowledge, reverence
- **Grounding Gray** (`grounding-*`): Base UI, upcoming states, structure

### Accessibility

All components include:
- ARIA labels and roles
- Keyboard navigation support
- Screen reader announcements
- Focus visible states
- Semantic HTML

### Animations

Purposeful animations enhance healing context:
- `animate-pulse-slow`: Current step attention
- `animate-breathe`: Rhythmic scaling for calm
- `shadow-glow-*`: Soft glows for sacred/healing elements

## Integration

Import components from the barrel export:

```tsx
import {
  EvidenceCitation,
  TraditionAttribution,
  HealingProgress,
  PracticeSelector,
  SafetyConsent
} from '@site/src/components/healing';
```

Use in MDX files:

```mdx
import { EvidenceCitation } from '@site/src/components/healing';

# Research on Meditation

<EvidenceCitation
  level="strong"
  title="..."
  snippet="..."
/>
```

## Styling

Components use Tailwind CSS with the healing design tokens. All styles are scoped and won't conflict with Docusaurus themes (preflight disabled).

Custom utilities available:
- `cn()`: Merge Tailwind classes safely (from `@site/src/lib/utils`)

## TypeScript

Full TypeScript support with exported types:

```tsx
import type {
  EvidenceLevel,
  HealingStep,
  PracticeOption,
  // ... etc
} from '@site/src/components/healing';
```
