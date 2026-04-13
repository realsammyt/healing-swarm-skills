/**
 * app.js — Main entry point for Family Nexus Healing PWA
 *
 * Loads protocol data, initializes storage, sets up the router,
 * and wires up mode-specific rendering.
 */

import { initRouter, onNavigate, navigate } from './router.js';
import { renderProtocolDetail } from './render.js';
import { initDB, saveSetting, getSetting } from './storage.js';
import { renderFamilyMode, resetFamilyMode } from './modes/family-mode.js';
import { renderFatherMode, resetFatherMode } from './modes/father-mode.js';
import { renderMotherMode, resetMotherMode } from './modes/mother-mode.js';

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
    btn.addEventListener('click', async () => {
      const mode = btn.dataset.mode;
      // Save last-used mode
      try {
        await saveSetting('last-mode', mode);
      } catch (e) {
        // Storage not critical for navigation
      }
      navigate(mode);
    });
  });
}

// ---------------------------------------------------------------------------
// Route Handler
// ---------------------------------------------------------------------------

async function handleRoute(route) {
  const { screen, mode, protocolId } = route;

  // Track current mode for back-navigation from protocol detail
  if (mode !== 'landing' && !protocolId) {
    currentMode = mode;
  }

  // Render mode screens using mode-specific orchestrators
  if (screen === 'family-screen') {
    currentMode = 'family';
    const container = document.getElementById(screen);
    if (container) {
      await renderFamilyMode(container, protocolsByMode.family || []);
    }
  }

  if (screen === 'father-screen') {
    currentMode = 'father';
    const container = document.getElementById(screen);
    if (container) {
      await renderFatherMode(container, protocolsByMode.father || []);
    }
  }

  if (screen === 'mother-screen') {
    currentMode = 'mother';
    const container = document.getElementById(screen);
    if (container) {
      await renderMotherMode(container, protocolsByMode.mother || []);
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

  // Reset mode state when navigating to landing
  if (screen === 'landing') {
    resetFamilyMode();
    resetFatherMode();
    resetMotherMode();
  }
}

// ---------------------------------------------------------------------------
// Initialization
// ---------------------------------------------------------------------------

async function init() {
  // Initialize storage
  try {
    await initDB();
    console.log('[App] Storage initialized');
  } catch (err) {
    console.warn('[App] Storage initialization failed (app will still work):', err);
  }

  // Load data
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
