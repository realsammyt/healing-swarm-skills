import { describe, it, expect } from 'vitest';
import { findClaimViolations } from './lint-prompts.js';

const flags = (line) => findClaimViolations(line).length > 0;

describe('findClaimViolations — overclaim probes (must flag)', () => {
  const probes = [
    "This breathing will heal the body's inflammation.",
    'This will heal you, and it does not replace medical care.',
    'The practice heals trauma at the cellular level.',
    'Daily cold exposure cures depression.',
    'This protocol will reverse chronic pain.',
    'Sound therapy will eliminate anxiety permanently.',
    'Clinically proven to restore nervous system balance.',
    'Ten minutes of toning will cure your insomnia.',
    'Toning will treat your tinnitus.',
    // Review-round additions:
    'The practice will completely heal the nervous system.', // adverb between modal and verb
    'This treatment cures insomnia, as the "sleep gate" opens.', // unrelated quote later on the line
    'Never let go — this will cure your insomnia.', // "never" alone is not a teaching marker
  ];
  for (const p of probes) {
    it(`flags: ${p}`, () => expect(flags(p)).toBe(true));
  }
});

describe('findClaimViolations — negative controls (must NOT flag)', () => {
  const controls = [
    '- "This meditation will eliminate your depression"', // quoted teaching example
    '✗ "This app will heal your injury."', // anti-pattern marker
    'Do not say the practice will cure anxiety.', // explicit negation
    'Avoid claims that toning will treat tinnitus.', // avoid marker
    'Use "may support" instead of "will fix" framing.', // instead-of teaching
    'The protocol treats the breath as an anchor.', // benign third-person, no symptom object
    'Writing may help with emotional processing.', // sanctioned phrasing
  ];
  for (const c of controls) {
    it(`passes: ${c}`, () => expect(flags(c)).toBe(false));
  }
});
