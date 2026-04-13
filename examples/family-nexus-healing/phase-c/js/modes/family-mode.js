/**
 * family-mode.js — Family mode orchestration
 *
 * Combines today.js, felt.js, and protocol rendering.
 * Tab navigation: Today | Practices | How We Feel
 * Emergency button: always visible in fixed footer.
 */

import { navigate } from '../router.js';
import { renderTodayScreen } from '../today.js';
import { renderFeltLog } from '../felt.js';

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

let activeTab = 'today';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(String(text)));
  return div.innerHTML;
}

// ---------------------------------------------------------------------------
// Protocol List (Practices tab)
// ---------------------------------------------------------------------------

function renderPracticesList(protocols) {
  // Group by category
  const groups = {};
  for (const p of protocols) {
    const cat = p.category || 'general';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(p);
  }

  let html = '<div class="protocol-list">';

  for (const [category, items] of Object.entries(groups)) {
    const catDisplay = category
      .split('/')
      .filter(p => p)
      .map(p => p.replace(/-/g, ' '))
      .map(p => p.charAt(0).toUpperCase() + p.slice(1))
      .join(' / ');

    html += `
      <div class="category-group">
        <div class="category-group-title">${escapeHtml(catDisplay)}</div>
    `;

    for (const p of items) {
      const summaryText = (p.summary && p.summary[0]) || '';
      const truncated = summaryText.length > 140
        ? summaryText.slice(0, 140) + '...'
        : summaryText;

      html += `
        <div class="protocol-card"
             tabindex="0"
             role="button"
             aria-label="Open practice: ${escapeHtml(p.title)}"
             data-protocol-id="${escapeHtml(p.id)}">
          <div class="protocol-card-title">${escapeHtml(p.title)}</div>
          <div class="protocol-card-meta">
            ${p.duration ? `<span>${escapeHtml(p.duration)}</span>` : ''}
            ${p.energyCost ? `<span>${escapeHtml(p.energyCost)} energy</span>` : ''}
          </div>
          <div class="protocol-card-summary">${escapeHtml(truncated)}</div>
        </div>
      `;
    }

    html += '</div>';
  }

  html += '</div>';
  return html;
}

// ---------------------------------------------------------------------------
// Main Render
// ---------------------------------------------------------------------------

/**
 * Render the family mode screen.
 * @param {HTMLElement} container - The screen container
 * @param {Array} protocols - Family-mode protocols
 */
export async function renderFamilyMode(container, protocols) {
  let html = '';

  // Navigation bar
  html += `
    <nav class="nav-bar">
      <button class="nav-back" onclick="window.location.hash='#/'" aria-label="Back to home">
        <span aria-hidden="true">&larr;</span> Home
      </button>
      <span class="nav-title">Family</span>
    </nav>
  `;

  // Tab bar
  html += `
    <div class="mode-tabs" role="tablist" aria-label="Family mode sections">
      <button class="mode-tab ${activeTab === 'today' ? 'mode-tab-active' : ''}"
              role="tab" aria-selected="${activeTab === 'today'}"
              data-family-tab="today">Today</button>
      <button class="mode-tab ${activeTab === 'practices' ? 'mode-tab-active' : ''}"
              role="tab" aria-selected="${activeTab === 'practices'}"
              data-family-tab="practices">Practices</button>
      <button class="mode-tab ${activeTab === 'felt' ? 'mode-tab-active' : ''}"
              role="tab" aria-selected="${activeTab === 'felt'}"
              data-family-tab="felt">How We Feel</button>
    </div>
  `;

  // Tab content area
  html += '<div class="mode-tab-content" role="tabpanel" id="family-tab-content"></div>';

  // Spacer for fixed footer
  html += '<div class="emergency-spacer"></div>';

  // Emergency button (fixed footer)
  html += `
    <div class="emergency-footer" role="complementary" aria-label="Emergency help">
      <a href="tel:988" class="emergency-btn" aria-label="Call 988 Suicide and Crisis Lifeline">
        <span class="emergency-icon" aria-hidden="true">&#9829;</span>
        <span class="emergency-text">Need help now? Tap to call 988</span>
      </a>
    </div>
  `;

  container.innerHTML = html;

  // Render the active tab content
  const contentArea = container.querySelector('#family-tab-content');
  await renderTabContent(contentArea, protocols);

  // Bind tab switching
  container.querySelectorAll('[data-family-tab]').forEach(tab => {
    tab.addEventListener('click', async () => {
      activeTab = tab.dataset.familyTab;

      // Update tab active states
      container.querySelectorAll('.mode-tab').forEach(t => {
        t.classList.remove('mode-tab-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('mode-tab-active');
      tab.setAttribute('aria-selected', 'true');

      await renderTabContent(contentArea, protocols);
    });
  });
}

async function renderTabContent(contentArea, protocols) {
  switch (activeTab) {
    case 'today':
      await renderTodayScreen(protocols, contentArea);
      break;

    case 'practices':
      contentArea.innerHTML = renderPracticesList(protocols);
      // Bind protocol card clicks
      contentArea.querySelectorAll('.protocol-card[data-protocol-id]').forEach(card => {
        const id = card.dataset.protocolId;
        const handler = () => navigate(`protocol/${id}`);
        card.addEventListener('click', handler);
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handler();
          }
        });
      });
      break;

    case 'felt':
      await renderFeltLog(contentArea);
      break;
  }
}

/**
 * Reset the active tab (for when navigating away and back).
 */
export function resetFamilyMode() {
  activeTab = 'today';
}
