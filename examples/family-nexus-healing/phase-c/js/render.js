/**
 * render.js — Rendering functions for Family Nexus Healing PWA
 *
 * Pure rendering: takes data, returns HTML strings or populates DOM nodes.
 * No state management, no routing — just presentation.
 */

import { navigate } from './router.js';

/**
 * Render a protocol list screen (family, father, or mother).
 */
export function renderModeScreen(container, mode, protocols) {
  const modeLabels = {
    family: 'Family',
    father: 'Father',
    mother: 'Mother'
  };

  const modeDescriptions = {
    family: 'For when you are together.',
    father: 'One thing at a time. No rush.',
    mother: 'This is yours.'
  };

  // Group protocols by category
  const groups = {};
  for (const p of protocols) {
    const cat = p.category || 'general';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(p);
  }

  let html = '';

  // Navigation bar
  html += `
    <nav class="nav-bar">
      <button class="nav-back" onclick="window.location.hash='#/'" aria-label="Back to home">
        <span aria-hidden="true">&larr;</span> Home
      </button>
      <span class="nav-title">${modeLabels[mode]}</span>
    </nav>
  `;

  // Header
  html += `
    <div class="protocol-list-header">
      <h2>${modeLabels[mode]}</h2>
      <p>${modeDescriptions[mode]}</p>
    </div>
  `;

  // Protocol list grouped by category
  html += '<div class="protocol-list">';

  for (const [category, items] of Object.entries(groups)) {
    // Clean category name for display
    const catDisplay = category
      .split('/')
      .filter(p => p)
      .map(p => p.replace(/-/g, ' '))
      .map(p => p.charAt(0).toUpperCase() + p.slice(1))
      .join(' / ');

    html += `
      <div class="category-group">
        <div class="category-group-title">${catDisplay}</div>
    `;

    for (const p of items) {
      const summaryText = (p.summary && p.summary[0]) || '';
      const truncatedSummary = summaryText.length > 160
        ? summaryText.slice(0, 160) + '...'
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
            ${p.level ? `<span>${escapeHtml(p.level)}</span>` : ''}
          </div>
          <div class="protocol-card-summary">${escapeHtml(truncatedSummary)}</div>
        </div>
      `;
    }

    html += '</div>'; // category-group
  }

  html += '</div>'; // protocol-list

  container.innerHTML = html;

  // Attach click/keypress handlers to protocol cards
  container.querySelectorAll('.protocol-card').forEach((card) => {
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
}

/**
 * Render a single protocol's detail view.
 */
export function renderProtocolDetail(container, protocol, mode) {
  if (!protocol) {
    container.innerHTML = `
      <nav class="nav-bar">
        <button class="nav-back" onclick="window.location.hash='#/${mode}'" aria-label="Back to list">
          <span aria-hidden="true">&larr;</span> Back
        </button>
      </nav>
      <div class="protocol-detail">
        <h1>Practice not found</h1>
        <p>This practice could not be loaded.</p>
      </div>
    `;
    return;
  }

  let html = '';

  // Navigation bar
  html += `
    <nav class="nav-bar">
      <button class="nav-back" onclick="window.location.hash='#/${mode}'" aria-label="Back to ${mode} protocols">
        <span aria-hidden="true">&larr;</span> Back
      </button>
      <span class="nav-title">${escapeHtml(protocol.title)}</span>
    </nav>
  `;

  html += '<div class="protocol-detail">';

  // Title
  html += `<h1>${escapeHtml(protocol.title)}</h1>`;

  // Meta tags
  html += '<div class="protocol-detail-meta">';
  if (protocol.duration) {
    html += `<span class="tag">${escapeHtml(protocol.duration)}</span>`;
  }
  if (protocol.energyCost) {
    html += `<span class="tag">${escapeHtml(protocol.energyCost)} energy</span>`;
  }
  if (protocol.level) {
    html += `<span class="tag">${escapeHtml(protocol.level)}</span>`;
  }
  if (protocol.configuration) {
    html += `<span class="tag">${escapeHtml(protocol.configuration)}</span>`;
  }
  html += '</div>';

  // Summary
  if (protocol.summary && protocol.summary.length > 0) {
    html += '<div class="protocol-section">';
    html += '<h2>Why this helps</h2>';
    for (const para of protocol.summary) {
      html += `<p>${escapeHtml(para)}</p>`;
    }
    html += '</div>';
  }

  // Steps
  if (protocol.steps && protocol.steps.length > 0) {
    html += '<div class="protocol-section">';
    html += '<h2>The steps</h2>';
    for (const step of protocol.steps) {
      html += `
        <div class="step">
          <div class="step-number" aria-hidden="true">${step.number}</div>
          <div class="step-title">${escapeHtml(step.title)}</div>
          ${step.body ? `<div class="step-body">${escapeHtml(step.body)}</div>` : ''}
        </div>
      `;
    }
    html += '</div>';
  } else if (protocol.practiceText) {
    // Protocols without numbered steps but with raw practice text
    // (e.g. protocols using sub-headings like "Option A / Option B")
    html += '<div class="protocol-section">';
    html += '<h2>The steps</h2>';
    const paragraphs = protocol.practiceText.split(/\n\n+/);
    for (const para of paragraphs) {
      const trimmed = para.trim();
      if (!trimmed) continue;

      // Detect sub-heading patterns, with or without ### prefix
      const subHeadingMatch = trimmed.match(/^(?:#{1,4}\s+)?(Step \d+:.*|Option [A-Z]:.*)/i);
      if (subHeadingMatch) {
        const lines = trimmed.split('\n');
        const headingText = lines[0].replace(/^#{1,4}\s+/, '');
        html += `<h3>${escapeHtml(headingText)}</h3>`;
        if (lines.length > 1) {
          html += renderPracticeBlockDetail(lines.slice(1).join('\n').trim());
        }
      } else {
        html += renderPracticeBlockDetail(trimmed);
      }
    }
    html += '</div>';
  }

  // Contraindications
  if (protocol.contraindications && protocol.contraindications.length > 0) {
    html += '<div class="protocol-section">';
    html += '<h2>Not the right time if</h2>';
    html += '<div class="warning-list">';
    for (const item of protocol.contraindications) {
      html += `<p>${escapeHtml(item)}</p>`;
    }
    html += '</div></div>';
  }

  // Signals
  if (protocol.signals && protocol.signals.length > 0) {
    html += '<div class="protocol-section">';
    html += '<h2>Pause or stop if</h2>';
    html += '<div class="signal-list">';
    for (const item of protocol.signals) {
      html += `<p>${escapeHtml(item)}</p>`;
    }
    html += '</div></div>';
  }

  // Modifications
  if (protocol.modifications && protocol.modifications.length > 0) {
    html += '<div class="protocol-section">';
    html += '<h2>On a hard day</h2>';
    html += '<ul class="modification-list">';
    for (const item of protocol.modifications) {
      html += `<li>${escapeHtml(item)}</li>`;
    }
    html += '</ul></div>';
  }

  // Traditions
  if (protocol.traditions && protocol.traditions.length > 0) {
    html += '<div class="protocol-section">';
    html += '<h2>Where this comes from</h2>';
    html += '<div class="tradition-list">';
    for (const item of protocol.traditions) {
      html += `<p>${escapeHtml(item)}</p>`;
    }
    html += '</div></div>';
  }

  html += '</div>'; // protocol-detail

  container.innerHTML = html;
}

/**
 * Render a block of practice text — handles bullet lists and plain paragraphs.
 * Used by renderProtocolDetail for protocols with practiceText instead of steps.
 */
function renderPracticeBlockDetail(text) {
  if (!text) return '';

  const lines = text.split('\n');
  let html = '';
  let inList = false;
  let plainLines = [];

  function flushPlain() {
    if (plainLines.length > 0) {
      html += `<p>${escapeHtml(plainLines.join(' ').trim())}</p>`;
      plainLines = [];
    }
  }

  for (const line of lines) {
    const bulletMatch = line.match(/^-\s+(.+)/);
    if (bulletMatch) {
      flushPlain();
      if (!inList) {
        html += '<ul>';
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
 * Escape HTML special characters to prevent XSS.
 */
function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(String(text)));
  return div.innerHTML;
}
