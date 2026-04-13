#!/usr/bin/env node

/**
 * build-content.js
 *
 * Content pipeline for Family Nexus Healing PWA.
 * Reads Phase B protocol markdown files, parses them into structured data,
 * and outputs data/protocols.json for the PWA to consume.
 *
 * Usage: node build-content.js
 * No npm dependencies — uses only Node.js built-in modules.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PHASE_B_DIR = path.resolve(__dirname, '..', '..', 'phase-b');
const OUTPUT_DIR = path.resolve(__dirname, '..', 'data');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'protocols.json');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Recursively collect all .md files from a directory tree.
 */
function collectMarkdownFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectMarkdownFiles(full, files);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(full);
    }
  }
  return files;
}

/**
 * Should this file be excluded from the content build?
 *   - 00-* orchestration / reference files
 *   - quality-review/ and quality-gate-* files
 */
function shouldExclude(filePath) {
  const basename = path.basename(filePath);
  const relative = path.relative(PHASE_B_DIR, filePath);
  const parts = relative.split(path.sep);

  // Exclude 00-prefixed orchestration files
  if (basename.startsWith('00-')) return true;

  // Exclude quality-review directories and quality-gate files
  if (parts.some(p => p === 'quality-review')) return true;
  if (basename.startsWith('quality-gate')) return true;

  return false;
}

/**
 * Generate a unique ID from the filename.
 * e.g. "01-beginning-ritual-quiet-arrival.md" -> "01-beginning-ritual-quiet-arrival"
 */
function idFromFilename(filePath) {
  return path.basename(filePath, '.md');
}

/**
 * Determine the mode(s) this protocol belongs to based on its configuration
 * and directory path.
 */
function mapConfigToMode(config, filePath) {
  const relative = path.relative(PHASE_B_DIR, filePath);
  const parts = relative.split(path.sep);
  const topDir = parts[0];

  // Direct directory mapping takes priority
  switch (topDir) {
    case 'father-alone':
      return 'father';
    case 'mother-alone':
      return 'mother';
    case 'father-with-kids-supervised':
    case 'mother-with-kids':
    case 'each-child-alone':
    case 'family-together':
      return 'family';
  }

  // Fallback: parse from configuration string
  if (!config) return 'family';

  const lower = config.toLowerCase();
  if (lower.includes('father-alone')) return 'father';
  if (lower.includes('mother-alone')) return 'mother';
  // Everything else is family mode
  return 'family';
}

/**
 * Split the markdown content into sections by ## headings.
 * Returns a map of heading text (lowercase, trimmed) -> section body text.
 */
function splitSections(content) {
  const sections = {};
  const lines = content.split('\n');
  let currentHeading = null;
  let currentBody = [];

  for (const line of lines) {
    const match = line.match(/^##\s+(.+)$/);
    if (match) {
      // Save previous section
      if (currentHeading !== null) {
        sections[currentHeading] = currentBody.join('\n').trim();
      }
      // Normalize heading: strip emoji, lowercase, trim
      currentHeading = match[1]
        .replace(/[⚠️🚨⛔]/g, '')
        .trim()
        .toLowerCase();
      currentBody = [];
    } else if (currentHeading !== null) {
      currentBody.push(line);
    }
  }
  // Save last section
  if (currentHeading !== null) {
    sections[currentHeading] = currentBody.join('\n').trim();
  }

  return sections;
}

/**
 * Extract the first # heading (title) from the content.
 */
function extractTitle(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : 'Untitled';
}

/**
 * Extract a metadata value from a **Key:** line in the header area.
 */
function extractMeta(content, key) {
  // Match **Key:** value  or  **Key:** value
  const pattern = new RegExp(`\\*\\*${key}:\\*\\*\\s*(.+)`, 'i');
  const match = content.match(pattern);
  return match ? match[1].trim() : null;
}

/**
 * Extract numbered steps from a section body.
 * Returns an array of step objects { number, title, body }.
 */
function extractSteps(sectionText) {
  if (!sectionText) return [];

  const steps = [];
  const lines = sectionText.split('\n');
  let currentStep = null;
  let currentBody = [];

  for (const line of lines) {
    // Match numbered list items: "1. **Title.** rest" or "1. **Title** rest" or "1. Text"
    const stepMatch = line.match(/^(\d+)\.\s+(.+)$/);
    if (stepMatch) {
      // Save previous step
      if (currentStep !== null) {
        steps.push({
          number: currentStep.number,
          title: currentStep.title,
          body: currentBody.join('\n').trim()
        });
      }

      const num = parseInt(stepMatch[1], 10);
      let text = stepMatch[2].trim();

      // Try to extract bold title
      const boldMatch = text.match(/^\*\*(.+?)\*\*\.?\s*(.*)/);
      if (boldMatch) {
        currentStep = { number: num, title: boldMatch[1] };
        currentBody = boldMatch[2] ? [boldMatch[2]] : [];
      } else {
        currentStep = { number: num, title: text };
        currentBody = [];
      }
    } else if (currentStep !== null) {
      // Continuation lines of the current step
      currentBody.push(line);
    }
  }

  // Save last step
  if (currentStep !== null) {
    steps.push({
      number: currentStep.number,
      title: currentStep.title,
      body: currentBody.join('\n').trim()
    });
  }

  return steps;
}

/**
 * Extract bullet-list items from a section body.
 * Returns an array of strings.
 */
function extractBulletItems(sectionText) {
  if (!sectionText) return [];

  const items = [];
  const lines = sectionText.split('\n');
  let currentItem = null;

  for (const line of lines) {
    const bulletMatch = line.match(/^-\s+(.+)$/);
    if (bulletMatch) {
      if (currentItem !== null) {
        items.push(currentItem.trim());
      }
      currentItem = bulletMatch[1];
    } else if (currentItem !== null && line.match(/^\s+/) && line.trim()) {
      // Continuation of current bullet
      currentItem += ' ' + line.trim();
    } else if (line.trim() === '' && currentItem !== null) {
      // Blank line might end the bullet or be within it
      // Keep collecting
    } else if (currentItem !== null && !line.match(/^\s/) && line.trim()) {
      // Non-indented non-bullet line — end current item
      items.push(currentItem.trim());
      currentItem = null;
    }
  }

  if (currentItem !== null) {
    items.push(currentItem.trim());
  }

  return items;
}

/**
 * Clean markdown formatting from a string for JSON output.
 * Strips bold markers, links, backticks — keeps the text content.
 */
function cleanMarkdown(text) {
  if (!text) return '';
  return text
    .replace(/\*\*(.+?)\*\*/g, '$1')   // bold
    .replace(/\*(.+?)\*/g, '$1')        // italic
    .replace(/`(.+?)`/g, '$1')          // inline code
    .replace(/\[(.+?)\]\(.+?\)/g, '$1') // links
    .trim();
}

// ---------------------------------------------------------------------------
// Main parser
// ---------------------------------------------------------------------------

function parseProtocol(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const sections = splitSections(raw);

  const id = idFromFilename(filePath);
  const title = extractTitle(raw);
  const config = extractMeta(raw, 'Configuration');
  const level = extractMeta(raw, 'Level');
  const duration = extractMeta(raw, 'Duration');
  const energy = extractMeta(raw, 'Energy cost');
  const mode = mapConfigToMode(config, filePath);

  // Derive the subfolder path for display grouping
  const relative = path.relative(PHASE_B_DIR, filePath);
  const dirParts = path.dirname(relative).split(path.sep);

  // Summary: paragraphs under "Why this practice"
  const whySection = sections['why this practice'] || '';
  const summary = whySection
    .split('\n\n')
    .map(p => cleanMarkdown(p.replace(/\n/g, ' ')))
    .filter(p => p.length > 0);

  // Steps: numbered list under "The practice"
  const practiceSection = sections['the practice'] || '';
  const steps = extractSteps(practiceSection);

  // Contraindications: "when not to use this"
  const contraSectionKey = Object.keys(sections).find(k =>
    k.includes('when not to use this')
  );
  const contraSection = contraSectionKey ? sections[contraSectionKey] : '';
  const contraindications = extractBulletItems(contraSection);

  // Signals
  const signalsSection = sections['signals to slow down or stop'] || '';
  const signals = signalsSection
    .split('\n\n')
    .map(p => cleanMarkdown(p.replace(/\n/g, ' ')))
    .filter(p => p.length > 0);

  // Modifications
  const modSection = sections['modifications'] || '';
  const modifications = extractBulletItems(modSection);

  // Traditions
  const tradSection = sections['traditions honored'] || '';
  const traditions = tradSection
    .split('\n\n')
    .map(p => cleanMarkdown(p.replace(/\n/g, ' ')))
    .filter(p => p.length > 0);

  return {
    id,
    title,
    configuration: config,
    mode,
    category: dirParts.filter(p => p !== '.').join('/'),
    level: level || null,
    duration: duration || null,
    energyCost: energy || null,
    summary,
    steps,
    contraindications,
    signals,
    modifications,
    traditions
  };
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

function main() {
  // Verify Phase B directory exists
  if (!fs.existsSync(PHASE_B_DIR)) {
    console.error(`Error: Phase B directory not found at ${PHASE_B_DIR}`);
    process.exit(1);
  }

  // Collect and filter files
  const allFiles = collectMarkdownFiles(PHASE_B_DIR);
  const protocolFiles = allFiles.filter(f => !shouldExclude(f));

  console.log(`Found ${allFiles.length} markdown files in Phase B`);
  console.log(`Excluded ${allFiles.length - protocolFiles.length} orchestration/review files`);
  console.log(`Processing ${protocolFiles.length} protocol files...\n`);

  // Parse each protocol
  const protocols = [];
  const byMode = { family: 0, father: 0, mother: 0 };

  for (const file of protocolFiles) {
    try {
      const protocol = parseProtocol(file);
      protocols.push(protocol);
      byMode[protocol.mode]++;
      console.log(`  ✓ ${protocol.id} → ${protocol.mode}`);
    } catch (err) {
      console.error(`  ✗ Error parsing ${path.relative(PHASE_B_DIR, file)}: ${err.message}`);
    }
  }

  // Sort by ID (numeric prefix)
  protocols.sort((a, b) => {
    const numA = parseInt(a.id.match(/^(\d+)/)?.[1] || '99', 10);
    const numB = parseInt(b.id.match(/^(\d+)/)?.[1] || '99', 10);
    return numA - numB;
  });

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Write output
  const output = {
    version: 1,
    generatedAt: new Date().toISOString(),
    totalProtocols: protocols.length,
    byMode,
    protocols
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2), 'utf-8');

  console.log(`\nBuild complete.`);
  console.log(`  Total protocols: ${protocols.length}`);
  console.log(`  Family mode: ${byMode.family}`);
  console.log(`  Father mode: ${byMode.father}`);
  console.log(`  Mother mode: ${byMode.mother}`);
  console.log(`  Output: ${OUTPUT_FILE}`);
}

main();
