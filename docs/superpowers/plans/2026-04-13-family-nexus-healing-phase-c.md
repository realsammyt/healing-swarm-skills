# Family Nexus Healing — Phase C Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a local-first PWA delivering the Phase B protocols through three mode-entries (Family · Father · Mother), installable to home screen, working offline, with WCAG AAA target for Father mode. Content written using the Quadriga+ nine-dimension framework.

**Architecture:** Single-page application with vanilla HTML/CSS/JS (no framework dependency — simplicity for longevity), service worker for offline capability, IndexedDB for local persistence, a build step that parses Phase B markdown protocols into structured JSON. Three color-coded modes with explicit mode-switching. Archetype role-pack architecture for future variant support.

**Tech Stack:**
- HTML5, CSS3 (custom properties for mode theming), vanilla JavaScript (ES modules)
- Service Worker API for offline/PWA
- IndexedDB (via idb-keyval or similar tiny wrapper) for local data
- Markdown → JSON build script (Node.js, runs at build time)
- No React, no Vue, no framework — deliberate choice for longevity, simplicity, accessibility, and zero-dependency offline operation

**Reference spec:** `docs/superpowers/specs/2026-04-11-family-nexus-healing-design.md` §5
**Reference protocols:** `examples/family-nexus-healing/phase-b/` (42 files, the content source of truth)
**Content writing method:** Quadriga+ nine-dimension framework for all user-facing text

**Quadriga+ integration note:** Every piece of user-facing text in the app operates on nine dimensions simultaneously. The literal layer must always land first — a tired person at 10pm must be able to use the app without noticing the deeper layers. The deeper layers (allegorical, moral, anagogical) and the five consciousness capacities (entrainment, apophasis, temporal architecture, recursive self-reference, irreducibility) are present but invisible. The app is a technology of consciousness, not just an information delivery system.

---

## File Structure (Phase C)

```
examples/family-nexus-healing/phase-c/
├── index.html                    ← single-page app entry point
├── manifest.json                 ← PWA manifest
├── sw.js                         ← service worker
├── css/
│   ├── base.css                  ← reset, typography, shared
│   ├── modes.css                 ← mode-specific themes (green/blue/purple)
│   └── a11y.css                  ← WCAG AAA overrides for Father mode
├── js/
│   ├── app.js                    ← main app logic, routing, mode switching
│   ├── content.js                ← content loading from JSON, protocol rendering
│   ├── storage.js                ← IndexedDB wrapper for local data
│   ├── today.js                  ← "today" screen logic (time/day-based protocol surfacing)
│   └── felt.js                   ← "what I felt today" log functionality
├── data/
│   └── protocols.json            ← built from Phase B markdown (generated, not hand-edited)
├── assets/
│   ├── icons/                    ← PWA icons (192, 512)
│   └── favicon.ico
├── build/
│   └── build-content.js          ← Node.js script: markdown → protocols.json
├── README-parent.md              ← parent-facing: local-first guarantees, installation
└── README-clinician.md           ← clinician-facing: "what this app is and isn't"
```

---

## Task 1: Content Pipeline (markdown → JSON)

**Files:**
- Create: `phase-c/build/build-content.js`
- Create: `phase-c/data/protocols.json` (generated)

The content pipeline is the foundation — everything else consumes its output.

- [ ] **Step 1: Write the build script**

Node.js script that:
1. Reads all `.md` files from `phase-b/` recursively
2. Parses each protocol's frontmatter-like header (Title, Configuration, Duration, Energy cost)
3. Extracts the "Why this practice" section as a summary
4. Extracts the "The practice" section as numbered steps
5. Extracts "When NOT to use this" as contraindications
6. Extracts "Signals to slow down or stop" as signals
7. Extracts "Modifications" as variants
8. Tags each protocol with its configuration and level (entry/middle/deepening)
9. Outputs `protocols.json` as a structured array

The JSON schema per protocol:
```json
{
  "id": "01-beginning-ritual-quiet-arrival",
  "title": "Beginning Ritual — Quiet Arrival",
  "configuration": "father-with-kids-supervised",
  "level": "entry",
  "duration": "2–4 minutes",
  "energyCost": "low",
  "summary": "...",
  "steps": ["...", "..."],
  "contraindications": ["...", "..."],
  "signals": { "father": "...", "child": "...", "self": "..." },
  "modifications": ["...", "..."],
  "traditions": "...",
  "crossReferences": ["..."]
}
```

- [ ] **Step 2: Run the build and verify output**

```bash
node phase-c/build/build-content.js
```

Verify: `protocols.json` contains all 36 protocols, each with complete fields.

- [ ] **Step 3: Commit**

---

## Task 2: PWA Shell (HTML + CSS + Service Worker)

**Files:**
- Create: `phase-c/index.html`
- Create: `phase-c/manifest.json`
- Create: `phase-c/sw.js`
- Create: `phase-c/css/base.css`
- Create: `phase-c/css/modes.css`
- Create: `phase-c/css/a11y.css`

- [ ] **Step 1: Write index.html**

Single-page HTML with:
- Mode-selection landing screen (three large tap targets: Family · Father · Mother)
- No navigation until a mode is selected
- PWA meta tags, viewport, manifest link, service worker registration
- Semantic HTML throughout (nav, main, section, article)
- Quadriga+ literal layer: the landing page text is warm, plain, and functional. "Who are you right now?" with three mode buttons. Not "Welcome to the Family Nexus Healing Application." The absence of clinical language IS the anagogical layer — the app treats you as a person, not a patient.

- [ ] **Step 2: Write base.css**

Typography and shared styles:
- System font stack (no external font loads — offline-first)
- Responsive fluid typography (clamp-based)
- Touch-target minimum 48px
- Color tokens as CSS custom properties (overridden per mode)
- Entrainment through typography: Father mode uses larger, slower type with more line-height (settling). Mother mode uses warmer, mid-weight type (held). Family mode uses rounded, friendly type (children's register).

- [ ] **Step 3: Write modes.css**

Three mode themes via CSS custom properties:
- **Family (green):** `--mode-bg: #f0f7f0; --mode-accent: #2d8a4e; --mode-text: #1a1a1a;` Warm, natural, daytime feeling.
- **Father (blue):** `--mode-bg: #f0f4f8; --mode-accent: #3a6ea5; --mode-text: #1a1a1a;` Calm, spacious, settled. Largest text sizes, highest contrast, most whitespace.
- **Mother (purple):** `--mode-bg: #f5f0f8; --mode-accent: #7a4fa0; --mode-text: #1a1a1a;` Private, contained, her own. Not visible from other modes.

Mode switching via `data-mode` attribute on `<body>`.

- [ ] **Step 4: Write a11y.css**

WCAG AAA overrides for Father mode specifically:
- Minimum contrast ratio 7:1
- Minimum text size 18px (ideally 20px+)
- Maximum content width 40ch (reduced cognitive load)
- No time-dependent interactions
- Focus indicators highly visible (4px solid)
- Reduced motion by default (`prefers-reduced-motion`)
- One thing on screen at a time (no sidebars, no floating elements)

- [ ] **Step 5: Write manifest.json**

PWA manifest:
```json
{
  "name": "Family Nexus Healing",
  "short_name": "Healing",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#f0f7f0",
  "theme_color": "#2d8a4e",
  "icons": [...]
}
```

- [ ] **Step 6: Write sw.js**

Service worker for offline capability:
- Cache-first strategy for all static assets
- On install: pre-cache index.html, all CSS, all JS, protocols.json, icons
- On fetch: serve from cache, fall back to network
- The app must boot fully offline after first load — this is a privacy AND a court-involvement requirement

- [ ] **Step 7: Verify offline boot**

Open in browser, go offline, reload. The app must function completely.

- [ ] **Step 8: Commit**

---

## Task 3: App Logic — Mode Switching + Content Rendering

**Files:**
- Create: `phase-c/js/app.js`
- Create: `phase-c/js/content.js`
- Create: `phase-c/js/storage.js`

- [ ] **Step 1: Write app.js**

Main app logic:
- Mode selection (landing screen → mode view)
- Mode switching is EXPLICIT — user picks who they are each session
- No cross-mode inference, no automatic switching
- URL hash routing: `#family`, `#father`, `#mother`, `#landing`
- Mode persists in IndexedDB so returning user goes to last mode (but can always switch)
- Apophasis in the mode switch: the app does NOT ask "are you sure?" when switching modes. It trusts.

- [ ] **Step 2: Write content.js**

Content loading and rendering:
- Load `protocols.json` once, store in memory
- Filter protocols by current mode's configuration(s)
- Render a protocol as a card: title, duration, energy cost, summary, expandable steps
- "Begin" button that expands to full practice view
- Temporal architecture: the card shows just enough to decide. The expansion reveals the full practice. The sequence is: see → choose → do → reflect.

- [ ] **Step 3: Write storage.js**

IndexedDB wrapper:
- Store: last-used mode, "what I felt today" entries, visit schedule (if entered), grief-window schedule
- Export function: download all local data as JSON file (for backup)
- Delete function: clear all local data
- NO network calls. EVER. Data never leaves the device unless the user explicitly exports.

- [ ] **Step 4: Commit**

---

## Task 4: Family Mode

**Files:**
- Modify: `phase-c/index.html` (Family mode sections)
- Modify: `phase-c/js/app.js` (Family mode logic)
- Create: `phase-c/js/today.js`
- Create: `phase-c/js/felt.js`

- [ ] **Step 1: "Today" screen**

Time-of-day and day-of-week logic to surface the most relevant protocol:
- Morning (5am-11am): morning anchor from `mother-with-kids/daily-regulation/`
- After school (2pm-5pm): after-school decompression
- Evening (5pm-8pm): visit-day protocol if a visit is scheduled, otherwise bedtime prep
- Night (8pm-10pm): bedtime ritual
- Emergency: co-regulation button always visible

Quadriga+ entrainment: the "Today" screen has a gentle gradient that shifts with time of day — cooler in morning, warmer at night. The children see the app change with the day.

- [ ] **Step 2: "Visit day is coming" feature**

If the user has entered a visit schedule:
- 48h before: surfaces child-prep protocols from `each-child-alone/`
- Same day: surfaces the father-with-kids-supervised entry protocols
- After: surfaces decompression protocols

- [ ] **Step 3: "What I felt today" log**

Each family member (mom, 5yo, 8yo) can drop:
- A word
- A color (from a simple color picker — 8 colors)
- A scribble (canvas finger-drawing, very simple)
- A 10-second voice note (MediaRecorder API, stored locally only)

Entries saved to IndexedDB with timestamp and family-member tag.
Optional review-together feature controlled by the mother.

Quadriga+ recursive self-reference: THIS is the mirror. The family sees themselves seeing. The log is not a diagnostic tool — it is a witnessing practice.

- [ ] **Step 4: Emergency co-regulation button**

Always visible in Family mode. One tap launches the 90-second co-regulation practice (protocol 15). Large, calm, impossible to miss.

Quadriga+ apophasis: the button says "Calm" or "Together" — not "Emergency Co-Regulation Protocol 15." What it DOESN'T say is the point.

- [ ] **Step 5: Commit**

---

## Task 5: Father Mode

**Files:**
- Modify: `phase-c/index.html` (Father mode sections)
- Modify: `phase-c/js/app.js` (Father mode logic)

The hardest mode to build well. Every screen must pass: "could he use this on a confused day?"

- [ ] **Step 1: One-thing-at-a-time interface**

- No menus. No nested screens. No hamburger icons.
- Home screen shows ONE practice that's right for right now, with a giant "Begin" button
- One swipe reveals three alternatives — never more than three
- The practice card: title, duration, one sentence, "Begin"
- "Begin" expands to numbered steps, one at a time, each step on its own screen/card
- Quadriga+ literal layer at maximum strength: the words must be plain enough that a person with shifting cognition can follow them without frustration

- [ ] **Step 2: Visit countdown prep**

If a visit is scheduled:
- 24h before: the app shows the 15-minute centering practice (protocol 23)
- 2h before: gentle reminder, same practice
- 15min before: the centering practice with a warm message

Quadriga+ entrainment: the countdown uses progressively shorter sentences as the visit approaches. The rhythm settles the nervous system through the text itself.

- [ ] **Step 3: "A moment with the kids" card**

During a visit (if the father taps this), surfaces one activity from `father-with-kids-supervised/`, presented as a simple card he can hold and follow. Readable by a supervisor.

- [ ] **Step 4: Daily dignity rhythm**

The father's daily anchor practice (protocol 22). Same one every day, surfaced at the time he chose.

- [ ] **Step 5: Caregiver-assist toggle**

A small settings gear (one of very few UI elements) that activates a mode showing slightly more context without removing his agency. Larger "next step" buttons, optional caregiver notes visible.

- [ ] **Step 6: Commit**

---

## Task 6: Mother Mode

**Files:**
- Modify: `phase-c/index.html` (Mother mode sections)
- Modify: `phase-c/js/app.js` (Mother mode logic)

The mother's private container. Not visible from Family or Father modes.

- [ ] **Step 1: "How are you right now?" check-in**

One-tap check-in. A color pick or a single word. No scales, no scoring. Optional. The app never pressures.

Quadriga+ apophasis: the check-in does NOT ask "how are you doing?" with a smiley-face scale. It asks "how are you right now?" — present tense, specific, unhurried. What it doesn't ask (rate your mood 1-10) is the design.

- [ ] **Step 2: Fast resets**

60s, 3min, 10min regulation practices indexed by "what I need":
- Ground (protocol 33, Option C — hands flat)
- Soften (protocol 33, Option B — three breaths)
- Release (protocol 33, Option A — cold water)
- Fuel up (protocol 30 — rest container, shortened)

- [ ] **Step 3: Grief windows**

She schedules her own grief time. The app holds space during those windows with protocol 29's practice. Outside those windows, the app does NOT surface grief content.

Quadriga+ temporal architecture: the grief window has a beginning (candle screen), a middle (the hour — the app shows only a timer and a gentle background), and an end (the candle-blown-out screen). The sequence IS the container.

- [ ] **Step 4: Peer isolation work**

Expressive-writing prompts from `mother-alone/peer-isolation-work/`. Private. Encrypted at rest via Web Crypto API. Never transmitted.

- [ ] **Step 5: "I'm at the edge" button**

The one feature that ENCOURAGES reaching outside the app.
- 988 link (tel: protocol for one-tap dialing)
- Local crisis line (user-entered, stored locally)
- One trusted contact (user-entered, stored locally)
- Protocol 34's full escalation path, accessible in one tap

Quadriga+ anagogical layer: this button carries the entire project's deepest truth — "reaching out is never weakness; the edge is not the end." The button exists because the app knows it is not enough. The app's acknowledgment of its own limit IS the anagogical move.

- [ ] **Step 6: Commit**

---

## Task 7: Accessibility Audit + Final Quality Gate

- [ ] **Step 1: WCAG AAA audit for Father mode**

Test every screen in Father mode against WCAG 2.1 AAA:
- Contrast ratios (7:1 minimum)
- Text sizing (18px minimum, 20px+ preferred)
- Touch targets (48px minimum)
- No time-dependent interactions
- Keyboard navigable
- Screen reader compatible (proper ARIA, semantic HTML)
- Reduced motion respected
- One thing on screen at a time

- [ ] **Step 2: WCAG AA audit for Family and Mother modes**

Standard AA compliance across both modes.

- [ ] **Step 3: Offline test**

Full session simulation with network disabled:
- Boot the app
- Select each mode
- Navigate through protocols
- Use "what I felt today" log
- Use the "I'm at the edge" button (verify tel: links work offline)
- Export data
- Verify NO network calls in devtools

- [ ] **Step 4: Privacy test**

Network panel audit during full session simulation. Verify zero outbound requests. The app must be a dead end for data — nothing leaves unless the user explicitly exports.

- [ ] **Step 5: Three-reviewer quality gate (Ethics + Clinical + Cultural + a11y)**

Dispatch combined reviewer on the built app:
- Ethics: does the app honor all 7 healing-swarm ethics?
- Clinical: does the crisis path work? Is the "I'm at the edge" button reachable in one tap?
- Cultural: are tradition attributions preserved in the protocol cards?
- Accessibility: does Father mode pass AAA?

- [ ] **Step 6: Apply revisions, commit**

---

## Task 8: Package Deliverable

- [ ] **Step 1: Write README-parent.md**

Parent-facing document (~500 words):
- What the app is and isn't
- How to install (add to home screen)
- Local-first guarantees (data never leaves the device)
- How to export/backup
- How to switch modes
- Where to find help (crisis card, trusted contact)

- [ ] **Step 2: Write README-clinician.md**

Clinician-facing document (~300 words):
- What this app is and isn't (mirrors the one-page handoff)
- That data is local-only
- That the app does NOT pose as treatment
- How to observe the family using it

- [ ] **Step 3: Create deployable package**

Zip the `phase-c/` directory. The mother can:
- Open `index.html` from a file:// URL on any device
- Or host on any static server (GitHub Pages, Netlify, a USB stick)
- Or install as a PWA to home screen

- [ ] **Step 4: Final commit**

```bash
git add examples/family-nexus-healing/phase-c/
git commit -m "feat(family-nexus): Phase C PWA — three-mode healing companion app"
```

---

## Self-Review

### Spec coverage
- ✅ §5.1 Purpose — local-first PWA delivering Phase B protocols
- ✅ §5.2 Core architecture — IndexedDB, single-page PWA, offline, no telemetry
- ✅ §5.3 Family Mode — today screen, visit-day prep, felt-today log, bedtime, emergency button
- ✅ §5.4 Father Mode — one-thing-at-a-time, visit countdown, dignity rhythm, caregiver-assist
- ✅ §5.5 Mother Mode — check-in, fast resets, grief windows, peer work, edge button
- ✅ §5.6 Agent roster — simplified to direct implementation (no separate UX/Visual/App agents needed for vanilla HTML/CSS/JS)
- ✅ §5.7 Deliverable — zipped PWA, parent README, clinician README
- ✅ Quadriga+ integration — nine-dimension framework applied to all user-facing text
- ✅ Archetype role-pack — mode labels read from data, not hardcoded

### Placeholder scan
No TBDs. Color values are specific. File paths are exact. The build script's parsing requirements are specified.

### Scope
One coherent plan producing one testable artifact (the PWA). Eight tasks, sequenced logically (pipeline → shell → logic → modes → audit → package).
