# Plan: Migrate to Docusaurus with Tool UI Integration

## Objective

Replace the Jekyll-based GitHub Pages site with Docusaurus, enabling direct integration of tool-ui React components for interactive documentation and live component demos.

---

## Why Docusaurus?

| Feature | Jekyll (Current) | Docusaurus (Proposed) |
|---------|------------------|----------------------|
| React components | No | Yes (MDX) |
| Interactive demos | No | Yes |
| Search | Plugin required | Built-in (Algolia or local) |
| Versioning | Manual | Built-in |
| Dark mode | Custom CSS | Built-in |
| i18n | Plugin | Built-in |
| TypeScript | No | Yes |

---

## Architecture

```
healing-swarm-skills/
├── website/                    # Docusaurus site
│   ├── docs/                   # Documentation (MDX)
│   │   ├── getting-started.mdx
│   │   ├── skills/
│   │   ├── architecture/
│   │   ├── ethics/
│   │   └── api/
│   ├── src/
│   │   ├── components/         # Custom + healing-ui components
│   │   │   ├── healing/        # Healing-specific components
│   │   │   │   ├── EvidenceCitation.tsx
│   │   │   │   ├── TraditionAttribution.tsx
│   │   │   │   ├── HealingProgress.tsx
│   │   │   │   ├── PracticeSelector.tsx
│   │   │   │   └── SafetyConsent.tsx
│   │   │   └── HomepageFeatures.tsx
│   │   ├── css/
│   │   │   └── custom.css      # Healing design tokens
│   │   └── pages/
│   │       └── index.tsx       # Landing page
│   ├── static/
│   │   └── img/
│   ├── docusaurus.config.ts
│   ├── sidebars.ts
│   ├── tailwind.config.js
│   ├── package.json
│   └── tsconfig.json
├── .github/workflows/
│   └── pages.yml               # Updated for Docusaurus
└── ... (existing project files)
```

---

## Implementation Steps

### Phase 1: Scaffold Docusaurus

#### 1.1 Initialize Docusaurus in `website/` directory

```bash
npx create-docusaurus@latest website classic --typescript
```

#### 1.2 Configure for GitHub Pages

**docusaurus.config.ts:**
```typescript
const config: Config = {
  title: 'Healing Swarm Skills',
  tagline: 'AI-assisted tools for ethical healing applications',
  url: 'https://realsammyt.github.io',
  baseUrl: '/healing-swarm-skills/',
  organizationName: 'realsammyt',
  projectName: 'healing-swarm-skills',
  // ...
};
```

#### 1.3 Add Tailwind CSS

```bash
cd website
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

#### 1.4 Install tool-ui dependencies

```bash
npm install @radix-ui/react-popover @radix-ui/react-dialog lucide-react zod
npm install -D @types/react
```

### Phase 2: Integrate Tool UI Components

#### 2.1 Copy relevant tool-ui components

From tool-ui repository, copy to `website/src/components/tool-ui/`:
- `citation/`
- `progress-tracker/`
- `option-list/`
- `plan/`
- `approval-card/`
- `chart/`
- `shared/`

#### 2.2 Create adapter for shadcn/ui primitives

**`src/components/tool-ui/_adapter.tsx`:**
```typescript
// Re-export Radix primitives with Tailwind styling
export { cn } from '@/lib/utils';
export * from '@radix-ui/react-popover';
// ... other primitives
```

#### 2.3 Create healing-specific variants

**EvidenceCitation** - extends Citation with evidence levels:
```typescript
interface EvidenceCitationProps extends CitationProps {
  evidenceLevel: 'strong' | 'moderate' | 'preliminary' | 'traditional';
  sampleSize?: number;
  limitations?: string[];
}
```

**TraditionAttribution** - for cultural attribution:
```typescript
interface TraditionAttributionProps {
  tradition: string;
  era?: string;
  sources: string[];
  isOpenPractice: boolean;
}
```

**HealingProgress** - for journey tracking:
```typescript
interface HealingProgressProps {
  steps: Array<{
    id: string;
    label: string;
    status: 'completed' | 'current' | 'upcoming';
  }>;
  showEncouragement?: boolean;
}
```

### Phase 3: Migrate Content

#### 3.1 Content mapping

| Jekyll File | Docusaurus Location |
|-------------|---------------------|
| `index.md` | `src/pages/index.tsx` (React component) |
| `about.md` | `docs/about.mdx` |
| `getting-started.md` | `docs/getting-started.mdx` |
| `skills/index.md` | `docs/skills/index.mdx` |
| `examples/index.md` | `docs/examples/index.mdx` |
| `architecture/index.md` | `docs/architecture/index.mdx` |
| `ethics/index.md` | `docs/ethics/index.mdx` |
| `contribute.md` | `docs/contributing.mdx` |
| `docs/index.md` | Sidebar navigation |

#### 3.2 Convert static diagrams to interactive components

**Before (Jekyll markdown):**
```markdown
## Skill Lifecycle

Research → Content → Quality → Deployment
```

**After (Docusaurus MDX):**
```mdx
import { HealingProgress } from '@site/src/components/healing';

## Skill Lifecycle

<HealingProgress
  steps={[
    { id: 'research', label: 'Research', status: 'completed' },
    { id: 'content', label: 'Content', status: 'current' },
    { id: 'quality', label: 'Quality', status: 'upcoming' },
    { id: 'deploy', label: 'Deployment', status: 'upcoming' },
  ]}
/>
```

#### 3.3 Add live component demos

Each component gets an interactive demo section:
```mdx
## Evidence Citation

Display clinical evidence with appropriate confidence levels.

<Tabs>
  <TabItem value="demo" label="Demo">
    <EvidenceCitation
      title="Effects of Slow Breathing on HRV"
      href="https://pubmed.ncbi.nlm.nih.gov/example"
      domain="pubmed.gov"
      author="Zaccaro et al."
      publishedAt="2018-01-15"
      evidenceLevel="moderate"
      snippet="Review of 15 studies showing consistent improvements..."
    />
  </TabItem>
  <TabItem value="code" label="Code">
    ```tsx
    <EvidenceCitation
      title="Effects of Slow Breathing on HRV"
      evidenceLevel="moderate"
      // ...
    />
    ```
  </TabItem>
</Tabs>
```

### Phase 4: Styling with Healing Design Tokens

#### 4.1 Create Tailwind config with healing tokens

**tailwind.config.js:**
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        healing: {
          primary: '#2dd284',
          dark: '#1fa865',
          light: '#86efac',
          ghost: 'rgba(45, 210, 132, 0.1)',
        },
        calm: {
          primary: '#38bdf8',
          dark: '#0ea5e9',
        },
        sacred: {
          gold: '#fbbf24',
        },
        grounding: {
          darkest: '#0f172a',
          dark: '#1e293b',
          medium: '#334155',
        },
      },
    },
  },
};
```

#### 4.2 Custom CSS for Docusaurus theming

**src/css/custom.css:**
```css
:root {
  --ifm-color-primary: #2dd284;
  --ifm-color-primary-dark: #1fa865;
  --ifm-color-primary-light: #86efac;
  --ifm-background-color: #0f172a;
  /* ... */
}

[data-theme='dark'] {
  --ifm-background-color: #0f172a;
  /* Dark mode is our default */
}
```

### Phase 5: Update Deployment

#### 5.1 Update GitHub Actions workflow

**.github/workflows/pages.yml:**
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [master]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: website
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: website/package-lock.json

      - name: Install dependencies
        run: npm ci

      - name: Build website
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: website/build

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Phase 6: Cleanup

#### 6.1 Remove Jekyll files

```bash
rm -rf _config.yml _data/ _includes/ _layouts/ Gemfile
rm index.md about.md getting-started.md contribute.md
rm -rf skills/ architecture/ ethics/
# Keep docs/ as it has API reference content
```

#### 6.2 Update root README

Add instructions for local development:
```markdown
## Documentation Site

```bash
cd website
npm install
npm start
```

Visit http://localhost:3000
```

---

## File Creation Checklist

### Docusaurus Core
- [ ] `website/package.json`
- [ ] `website/docusaurus.config.ts`
- [ ] `website/sidebars.ts`
- [ ] `website/tsconfig.json`
- [ ] `website/tailwind.config.js`
- [ ] `website/postcss.config.js`

### Styling
- [ ] `website/src/css/custom.css`

### Pages
- [ ] `website/src/pages/index.tsx` (landing page)

### Components
- [ ] `website/src/components/tool-ui/` (copied from tool-ui)
- [ ] `website/src/components/healing/EvidenceCitation.tsx`
- [ ] `website/src/components/healing/TraditionAttribution.tsx`
- [ ] `website/src/components/healing/HealingProgress.tsx`
- [ ] `website/src/components/healing/PracticeSelector.tsx`
- [ ] `website/src/components/healing/SafetyConsent.tsx`
- [ ] `website/src/components/healing/index.ts`
- [ ] `website/src/components/HomepageFeatures.tsx`

### Documentation (MDX)
- [ ] `website/docs/intro.mdx`
- [ ] `website/docs/getting-started.mdx`
- [ ] `website/docs/about.mdx`
- [ ] `website/docs/skills/index.mdx`
- [ ] `website/docs/skills/research.mdx`
- [ ] `website/docs/skills/design.mdx`
- [ ] `website/docs/skills/content.mdx`
- [ ] `website/docs/skills/build.mdx`
- [ ] `website/docs/skills/review.mdx`
- [ ] `website/docs/skills/deploy.mdx`
- [ ] `website/docs/skills/swarm.mdx`
- [ ] `website/docs/examples/index.mdx`
- [ ] `website/docs/examples/simple-meditation.mdx`
- [ ] `website/docs/architecture/index.mdx`
- [ ] `website/docs/ethics/index.mdx`
- [ ] `website/docs/contributing.mdx`
- [ ] `website/docs/components/index.mdx` (component showcase)
- [ ] `website/docs/components/evidence-citation.mdx`
- [ ] `website/docs/components/tradition-attribution.mdx`
- [ ] `website/docs/components/healing-progress.mdx`

### Deployment
- [ ] `.github/workflows/pages.yml` (updated)

### Cleanup
- [ ] Remove Jekyll files from root

---

## Success Criteria

- [ ] Site deploys to same URL: https://realsammyt.github.io/healing-swarm-skills/
- [ ] All existing content migrated
- [ ] tool-ui components render correctly
- [ ] Healing-specific components working
- [ ] Dark mode as default (matches healing aesthetic)
- [ ] Search functional
- [ ] Mobile responsive
- [ ] Lighthouse accessibility > 90
- [ ] Build time < 2 minutes

---

## Timeline Estimate

| Phase | Tasks | Estimate |
|-------|-------|----------|
| 1 | Scaffold Docusaurus | ~30 min |
| 2 | Integrate tool-ui | ~1 hour |
| 3 | Migrate content | ~1 hour |
| 4 | Styling | ~30 min |
| 5 | Deployment | ~15 min |
| 6 | Cleanup | ~15 min |

**Total: ~3.5 hours**

---

## Risks

| Risk | Mitigation |
|------|------------|
| tool-ui component issues | Fork and fix, or create simplified versions |
| Build failures | Test locally before pushing |
| Broken links | Use Docusaurus broken link checker |
| SEO regression | Configure proper meta tags, redirects |

---

## Next Steps

1. Approve this plan
2. Implement Phase 1-6
3. Test locally
4. Deploy
5. Verify all pages work
6. Remove Jekyll files

---

*Ready to implement on approval.*
