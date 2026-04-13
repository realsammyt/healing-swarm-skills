/**
 * app.js — Main entry point for Family Nexus Healing PWA
 *
 * Loads protocol data, initializes the router, and wires up
 * rendering in response to navigation events.
 */

import { initRouter, onNavigate, navigate } from './router.js';
import { renderModeScreen, renderProtocolDetail } from './render.js';

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

let protocols = [];
let protocolsById = {};
let protocolsByMode = { family: [], father: [], mother: [] };

// Track the current mode so protocol detail can navigate back correctly
let currentMode = 'family';

// ---------------------------------------------------------------------------
// Data Loading
// ---------------------------------------------------------------------------

async function loadProtocols() {
  try {
    const response = await fetch('data/protocols.json');
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    protocols = data.protocols || [];

    // Index by ID
    protocolsById = {};
    for (const p of protocols) {
      protocolsById[p.id] = p;
    }

    // Group by mode
    protocolsByMode = { family: [], father: [], mother: [] };
    for (const p of protocols) {
      if (protocolsByMode[p.mode]) {
        protocolsByMode[p.mode].push(p);
      }
    }

    console.log(`[App] Loaded ${protocols.length} protocols`);
  } catch (err) {
    console.error('[App] Failed to load protocols:', err);
    protocols = [];
  }
}

// ---------------------------------------------------------------------------
// Mode Button Handlers
// ---------------------------------------------------------------------------

function bindModeButtons() {
  document.querySelectorAll('.mode-btn[data-mode]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.mode;
      navigate(mode);
    });
  });
}

// ---------------------------------------------------------------------------
// Route Handler
// ---------------------------------------------------------------------------

function handleRoute(route) {
  const { screen, mode, protocolId } = route;

  // Track current mode for back-navigation from protocol detail
  if (mode !== 'landing' && !protocolId) {
    currentMode = mode;
  }

  // Render mode screens on first visit
  if (screen === 'family-screen' || screen === 'father-screen' || screen === 'mother-screen') {
    currentMode = mode;
    const container = document.getElementById(screen);
    if (container) {
      renderModeScreen(container, mode, protocolsByMode[mode] || []);
    }
  }

  // Render protocol detail
  if (screen === 'protocol-view' && protocolId) {
    const container = document.getElementById('protocol-view');
    const protocol = protocolsById[protocolId] || null;

    // Set mode from the protocol itself if available
    if (protocol && protocol.mode) {
      currentMode = protocol.mode;
      document.body.dataset.mode = protocol.mode;
    }

    if (container) {
      renderProtocolDetail(container, protocol, currentMode);
    }
  }
}

// ---------------------------------------------------------------------------
// Initialization
// ---------------------------------------------------------------------------

async function init() {
  // Load data first
  await loadProtocols();

  // Bind landing page buttons
  bindModeButtons();

  // Set up routing
  onNavigate(handleRoute);
  initRouter();
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
