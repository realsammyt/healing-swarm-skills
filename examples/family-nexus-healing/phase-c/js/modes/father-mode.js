/**
 * father-mode.js — Father mode orchestration
 *
 * The one-thing-at-a-time interface.
 * Must pass the "could he use this on a confused day" test:
 *   - No menus
 *   - No nested navigation
 *   - Huge text (WCAG AAA via a11y.css)
 *   - One thing on screen at a time
 *   - "Begin" is the largest element on screen
 */

import { navigate } from '../router.js';
import { getNextVisit, getSetting, saveSetting } from '../storage.js';

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

let currentView = 'home'; // 'home' | 'step' | 'settings'
let selectedProtocol = null;
let currentStepIndex = 0;
let protocolList = [];
let currentCardIndex = 0;
let caregiverAssist = false;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(String(text)));
  return div.innerHTML;
}

function getTimeOfDay() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 21) return 'evening';
  return 'night';
}

function getGreeting() {
  const tod = getTimeOfDay();
  switch (tod) {
    case 'morning': return 'Good morning';
    case 'afternoon': return 'Good afternoon';
    case 'evening': return 'Good evening';
    default: return 'Hello';
  }
}

// ---------------------------------------------------------------------------
// Protocol Selection (most relevant right now)
// ---------------------------------------------------------------------------

function selectMostRelevant(protocols) {
  if (!protocols || protocols.length === 0) return [];

  const tod = getTimeOfDay();
  const scored = protocols.map(p => {
    let score = 0;
    const text = (p.title + ' ' + (p.summary || []).join(' ')).toLowerCase();

    // Prefer low-energy protocols
    if (p.energyCost === 'low') score += 3;
    if (p.energyCost === 'low-medium' || p.energyCost === 'low–medium') score += 2;

    // Time-of-day relevance
    if (tod === 'morning' && (text.includes('morning') || text.includes('anchor') || text.includes('dignity'))) score += 2;
    if (tod === 'afternoon' && (text.includes('walk') || text.includes('practice') || text.includes('breath'))) score += 2;
    if (tod === 'evening' && (text.includes('evening') || text.includes('close') || text.includes('reflect'))) score += 2;

    // Prefer entry-level
    if (p.level === 'entry') score += 1;

    return { protocol: p, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 4).map(s => s.protocol);
}

// ---------------------------------------------------------------------------
// Visit Countdown
// ---------------------------------------------------------------------------

async function getVisitBanner() {
  let nextVisit;
  try {
    nextVisit = await getNextVisit();
  } catch (e) {
    return '';
  }

  if (!nextVisit) return '';

  const now = Date.now();
  const visitTime = new Date(nextVisit.date + 'T00:00:00').getTime();
  const hoursUntil = (visitTime - now) / (1000 * 60 * 60);

  if (hoursUntil <= 0 || hoursUntil > 48) return '';

  let message = '';
  let urgency = '';

  if (hoursUntil <= 0.25) {
    message = 'Almost time. You are ready.';
    urgency = 'urgent';
  } else if (hoursUntil <= 2) {
    message = 'Visit in about ' + Math.round(hoursUntil * 60) + ' minutes. Breathe.';
    urgency = 'soon';
  } else if (hoursUntil <= 24) {
    message = 'You have a visit today';
    urgency = 'today';
  } else {
    message = 'Visit tomorrow. Today is preparation.';
    urgency = 'tomorrow';
  }

  return `
    <div class="father-visit-banner father-visit-${urgency}" role="alert">
      <div class="father-visit-text">${escapeHtml(message)}</div>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Rendering: Home View
// ---------------------------------------------------------------------------

async function renderHome(container, protocols) {
  protocolList = selectMostRelevant(protocols);
  if (protocolList.length === 0) {
    container.innerHTML = `
      <div class="father-home">
        <h1>${getGreeting()}</h1>
        <p class="father-subtitle">No practices loaded yet.</p>
      </div>
    `;
    return;
  }

  // Clamp card index
  if (currentCardIndex >= protocolList.length) currentCardIndex = 0;
  const p = protocolList[currentCardIndex];

  const visitBanner = await getVisitBanner();
  const summaryText = (p.summary && p.summary[0]) || '';
  const truncated = summaryText.length > 200
    ? summaryText.slice(0, 200) + '...'
    : summaryText;

  let html = '';

  // Visit countdown
  html += visitBanner;

  // Greeting
  html += `
    <div class="father-home">
      <h1>${getGreeting()}</h1>
      <p class="father-subtitle">One thing. No rush.</p>
    </div>
  `;

  // Protocol card (single, centered)
  html += `
    <div class="father-card">
      <div class="father-card-title">${escapeHtml(p.title)}</div>
      <div class="father-card-meta">
        ${p.duration ? `<span>${escapeHtml(p.duration)}</span>` : ''}
        ${p.energyCost ? `<span>${escapeHtml(p.energyCost)} energy</span>` : ''}
      </div>
  `;

  if (caregiverAssist) {
    html += `<div class="father-card-summary">${escapeHtml(truncated)}</div>`;
  }

  html += '</div>';

  // Begin button (the largest element)
  html += `
    <button class="father-begin-btn btn-primary" aria-label="Begin this practice">
      Begin
    </button>
  `;

  // Navigation arrows (subtle, for alternatives)
  if (protocolList.length > 1) {
    html += `
      <div class="father-card-nav" aria-label="Other practices">
        <button class="father-nav-arrow father-nav-prev" aria-label="Previous practice">
          <span aria-hidden="true">&#8592;</span>
        </button>
        <span class="father-card-indicator">${currentCardIndex + 1} of ${protocolList.length}</span>
        <button class="father-nav-arrow father-nav-next" aria-label="Next practice">
          <span aria-hidden="true">&#8594;</span>
        </button>
      </div>
    `;
  }

  // Settings gear (small, bottom-right)
  html += `
    <div class="father-settings-row">
      <button class="father-settings-btn" aria-label="Settings" data-father-view="settings">
        &#9881; ${caregiverAssist ? 'Helper mode: on' : 'Settings'}
      </button>
    </div>
  `;

  // Back home link
  html += `
    <div class="father-home-link">
      <button class="nav-back" onclick="window.location.hash='#/'" aria-label="Back to home">
        <span aria-hidden="true">&larr;</span> Home
      </button>
    </div>
  `;

  container.innerHTML = html;

  // Bind events
  const beginBtn = container.querySelector('.father-begin-btn');
  if (beginBtn) {
    beginBtn.addEventListener('click', () => {
      selectedProtocol = p;
      currentStepIndex = 0;
      currentView = 'step';
      renderFatherMode(container, protocols);
    });
  }

  const prevBtn = container.querySelector('.father-nav-prev');
  const nextBtn = container.querySelector('.father-nav-next');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentCardIndex = (currentCardIndex - 1 + protocolList.length) % protocolList.length;
      renderHome(container, protocols);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentCardIndex = (currentCardIndex + 1) % protocolList.length;
      renderHome(container, protocols);
    });
  }

  const settingsBtn = container.querySelector('.father-settings-btn');
  if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
      currentView = 'settings';
      renderFatherMode(container, protocols);
    });
  }

  // Swipe support
  bindSwipe(container, protocols);
}

// ---------------------------------------------------------------------------
// Rendering: Step-by-Step View
// ---------------------------------------------------------------------------

function renderStep(container, protocols) {
  if (!selectedProtocol) {
    currentView = 'home';
    renderHome(container, protocols);
    return;
  }

  // If this protocol has no numbered steps, show the full practice view instead
  if (!selectedProtocol.steps || selectedProtocol.steps.length === 0) {
    renderFullPractice(container, protocols);
    return;
  }

  const steps = selectedProtocol.steps;
  const step = steps[currentStepIndex];
  const isLast = currentStepIndex >= steps.length - 1;
  const isFirst = currentStepIndex === 0;

  let html = '';

  // Progress indicator
  html += `
    <div class="father-progress">
      <span class="father-progress-text">${step.number || (currentStepIndex + 1)} of ${steps.length}</span>
      <div class="father-progress-bar">
        <div class="father-progress-fill" style="width: ${((currentStepIndex + 1) / steps.length) * 100}%"></div>
      </div>
    </div>
  `;

  // Step content (one step, centered, large)
  html += `
    <div class="father-step">
      <div class="father-step-number">${step.number || (currentStepIndex + 1)}</div>
      <h2 class="father-step-title">${escapeHtml(step.title)}</h2>
  `;

  if (step.body) {
    html += `<p class="father-step-body">${escapeHtml(step.body)}</p>`;
  }

  html += '</div>';

  // Navigation
  html += '<div class="father-step-nav">';

  if (!isFirst) {
    html += `
      <button class="father-step-back btn-primary" aria-label="Go back">
        <span aria-hidden="true">&larr;</span> Back
      </button>
    `;
  } else {
    html += `
      <button class="father-step-exit" aria-label="Leave practice">
        <span aria-hidden="true">&larr;</span> Exit
      </button>
    `;
  }

  if (isLast) {
    html += `
      <button class="father-step-done btn-primary" aria-label="Well done">
        Well done
      </button>
    `;
  } else {
    html += `
      <button class="father-step-next btn-primary" aria-label="Next step">
        Next <span aria-hidden="true">&rarr;</span>
      </button>
    `;
  }

  html += '</div>';

  container.innerHTML = html;

  // Bind step navigation
  const nextBtn = container.querySelector('.father-step-next');
  const backBtn = container.querySelector('.father-step-back');
  const doneBtn = container.querySelector('.father-step-done');
  const exitBtn = container.querySelector('.father-step-exit');

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentStepIndex++;
      renderStep(container, protocols);
    });
  }
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      currentStepIndex--;
      renderStep(container, protocols);
    });
  }
  if (doneBtn) {
    doneBtn.addEventListener('click', () => {
      currentView = 'home';
      selectedProtocol = null;
      currentStepIndex = 0;
      renderHome(container, protocols);
    });
  }
  if (exitBtn) {
    exitBtn.addEventListener('click', () => {
      currentView = 'home';
      selectedProtocol = null;
      currentStepIndex = 0;
      renderHome(container, protocols);
    });
  }
}

// ---------------------------------------------------------------------------
// Rendering: Full Practice View (for protocols without numbered steps)
// ---------------------------------------------------------------------------

/**
 * Render a block of practice text — handles bullet lists and plain paragraphs.
 */
function renderPracticeBlock(text) {
  if (!text) return '';

  const lines = text.split('\n');
  let html = '';
  let inList = false;
  let plainLines = [];

  function flushPlain() {
    if (plainLines.length > 0) {
      html += `<p class="father-practice-paragraph">${escapeHtml(plainLines.join(' ').trim())}</p>`;
      plainLines = [];
    }
  }

  for (const line of lines) {
    const bulletMatch = line.match(/^-\s+(.+)/);
    if (bulletMatch) {
      flushPlain();
      if (!inList) {
        html += '<ul class="father-practice-list">';
        inList = true;
      }
      html += `<li>${escapeHtml(bulletMatch[1].trim())}</li>`;
    } else {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      const trimmed = line.trim();
      if (trimmed) {
        plainLines.push(trimmed);
      } else {
        flushPlain();
      }
    }
  }

  if (inList) html += '</ul>';
  flushPlain();

  return html;
}

/**
 * Render the full practice text as a scrollable card.
 * Used for protocols whose practice section uses sub-headings (e.g. Option A/B/C)
 * instead of numbered steps. The "Begin" button still works — it shows the full
 * practice as one readable view instead of stepping through individual items.
 */
function renderFullPractice(container, protocols) {
  const p = selectedProtocol;
  let html = '';

  // Title
  html += `
    <div class="father-step" style="max-width: 100%;">
      <h2 class="father-step-title">${escapeHtml(p.title)}</h2>
    </div>
  `;

  // Practice text: either the practiceText field or the summary as fallback
  html += '<div class="father-full-practice">';

  if (p.practiceText) {
    // Render practice text with basic structure preservation.
    // Split on double newlines for paragraphs, preserve sub-headings and lists.
    const paragraphs = p.practiceText.split(/\n\n+/);
    for (const para of paragraphs) {
      const trimmed = para.trim();
      if (!trimmed) continue;

      // Check if this paragraph starts with a sub-heading pattern
      // e.g. "### Step 1: Choose..." or "Step 1: Choose..." or "Option A: Breath..."
      const subHeadingMatch = trimmed.match(/^(?:#{1,4}\s+)?(Step \d+:.*|Option [A-Z]:.*)/i);
      if (subHeadingMatch) {
        // Split into heading line and rest
        const lines = trimmed.split('\n');
        // Strip any leading ### from the heading text for display
        const headingText = lines[0].replace(/^#{1,4}\s+/, '');
        html += `<h3 class="father-practice-subheading">${escapeHtml(headingText)}</h3>`;
        if (lines.length > 1) {
          const restLines = lines.slice(1);
          // Check if the rest is a bullet list
          const restText = restLines.join('\n').trim();
          html += renderPracticeBlock(restText);
        }
      } else {
        // Check if the whole paragraph is a bullet list
        html += renderPracticeBlock(trimmed);
      }
    }
  } else if (p.summary && p.summary.length > 0) {
    // Fallback: show summary if no practice text
    for (const para of p.summary) {
      html += `<p class="father-practice-paragraph">${escapeHtml(para)}</p>`;
    }
  } else {
    html += `<p class="father-practice-paragraph">This practice does not have detailed steps. Please refer to the full protocol description.</p>`;
  }

  html += '</div>';

  // Done button
  html += `
    <div class="father-step-nav">
      <button class="father-step-exit" aria-label="Exit practice">
        <span aria-hidden="true">&larr;</span> Exit
      </button>
      <button class="father-step-done btn-primary" aria-label="Finished">
        Done
      </button>
    </div>
  `;

  container.innerHTML = html;

  // Bind navigation
  const doneBtn = container.querySelector('.father-step-done');
  const exitBtn = container.querySelector('.father-step-exit');

  if (doneBtn) {
    doneBtn.addEventListener('click', () => {
      currentView = 'home';
      selectedProtocol = null;
      currentStepIndex = 0;
      renderHome(container, protocols);
    });
  }
  if (exitBtn) {
    exitBtn.addEventListener('click', () => {
      currentView = 'home';
      selectedProtocol = null;
      currentStepIndex = 0;
      renderHome(container, protocols);
    });
  }
}

// ---------------------------------------------------------------------------
// Rendering: Settings View
// ---------------------------------------------------------------------------

async function renderSettings(container, protocols) {
  let dailyAnchorTime = '';
  try {
    dailyAnchorTime = (await getSetting('father-anchor-time')) || '';
  } catch (e) { /* ignore */ }

  let html = '';

  html += `
    <div class="father-settings">
      <h2>Settings</h2>

      <div class="father-setting-group">
        <label for="father-caregiver-toggle" class="father-setting-label">
          Someone is helping me
        </label>
        <p class="father-setting-desc">Shows more detail for each step, so a helper can follow along.</p>
        <button id="father-caregiver-toggle"
                class="father-toggle ${caregiverAssist ? 'father-toggle-on' : ''}"
                role="switch"
                aria-checked="${caregiverAssist}"
                aria-label="Caregiver assist toggle">
          ${caregiverAssist ? 'On' : 'Off'}
        </button>
      </div>

      <div class="father-setting-group">
        <label for="father-anchor-time" class="father-setting-label">
          My anchor time
        </label>
        <p class="father-setting-desc">A time each day for your practice to appear.</p>
        <input type="time" id="father-anchor-time" class="father-time-input"
               value="${escapeHtml(dailyAnchorTime)}"
               aria-label="Daily anchor time">
        <button class="btn-primary father-save-anchor" style="margin-top: var(--space-md);">
          Save
        </button>
      </div>

      <button class="father-settings-back" aria-label="Back to practices">
        <span aria-hidden="true">&larr;</span> Back
      </button>
    </div>
  `;

  container.innerHTML = html;

  // Bind events
  const toggleBtn = container.querySelector('#father-caregiver-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', async () => {
      caregiverAssist = !caregiverAssist;
      try {
        await saveSetting('father-caregiver-assist', caregiverAssist);
      } catch (e) { /* ignore */ }
      renderSettings(container, protocols);
    });
  }

  const anchorSave = container.querySelector('.father-save-anchor');
  const anchorInput = container.querySelector('#father-anchor-time');
  if (anchorSave && anchorInput) {
    anchorSave.addEventListener('click', async () => {
      try {
        await saveSetting('father-anchor-time', anchorInput.value);
      } catch (e) { /* ignore */ }
      currentView = 'home';
      renderHome(container, protocols);
    });
  }

  const backBtn = container.querySelector('.father-settings-back');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      currentView = 'home';
      renderHome(container, protocols);
    });
  }
}

// ---------------------------------------------------------------------------
// Swipe Support
// ---------------------------------------------------------------------------

function bindSwipe(container, protocols) {
  let startX = 0;
  let startY = 0;

  container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  container.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;

    // Only horizontal swipes (not scrolling)
    if (Math.abs(dx) > 60 && Math.abs(dy) < 40 && protocolList.length > 1) {
      if (dx < 0) {
        currentCardIndex = (currentCardIndex + 1) % protocolList.length;
      } else {
        currentCardIndex = (currentCardIndex - 1 + protocolList.length) % protocolList.length;
      }
      renderHome(container, protocols);
    }
  }, { passive: true });
}

// ---------------------------------------------------------------------------
// Main Render
// ---------------------------------------------------------------------------

/**
 * Render the father mode screen.
 * @param {HTMLElement} container
 * @param {Array} protocols - Father-mode protocols
 */
export async function renderFatherMode(container, protocols) {
  // Load saved caregiver preference
  try {
    const saved = await getSetting('father-caregiver-assist');
    if (saved !== null) caregiverAssist = saved;
  } catch (e) { /* ignore */ }

  switch (currentView) {
    case 'step':
      renderStep(container, protocols);
      break;
    case 'settings':
      renderSettings(container, protocols);
      break;
    default:
      await renderHome(container, protocols);
      break;
  }
}

/**
 * Reset the father mode state (for navigating away and back).
 */
export function resetFatherMode() {
  currentView = 'home';
  selectedProtocol = null;
  currentStepIndex = 0;
  currentCardIndex = 0;
}
