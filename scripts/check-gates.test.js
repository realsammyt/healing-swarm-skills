import { describe, it, expect } from 'vitest';
import { extractGates, evaluateGates, VETO_GATES } from './check-gates.js';

const block = (obj) => '```json\n' + JSON.stringify(obj, null, 2) + '\n```';

describe('extractGates', () => {
  it('pulls a gate object out of a fenced json block', () => {
    const text = `prose\n${block({ gate: 'ethics', status: 'pass', blocking: true })}\nmore`;
    const gates = extractGates(text);
    expect(gates).toHaveLength(1);
    expect(gates[0].gate).toBe('ethics');
  });

  it('ignores non-gate json and invalid json', () => {
    const text = `${block({ hello: 'world' })}\n\`\`\`json\n{not valid}\n\`\`\``;
    expect(extractGates(text)).toHaveLength(0);
  });

  it('accepts an array of gates in one block', () => {
    const text = block([
      { gate: 'clinical', status: 'pass' },
      { gate: 'cultural', status: 'fail', blocking: true },
    ]);
    expect(extractGates(text)).toHaveLength(2);
  });
});

describe('evaluateGates', () => {
  it('passes when everything passes', () => {
    expect(evaluateGates([{ gate: 'ethics', status: 'pass', blocking: true }]).halt).toBe(false);
  });

  it('halts on a failed veto gate even if blocking is not set', () => {
    const r = evaluateGates([{ gate: 'ethics', status: 'veto' }]);
    expect(r.halt).toBe(true);
    expect(r.halts[0].gate).toBe('ethics');
  });

  it('halts on accessibility fail (veto gate)', () => {
    expect(evaluateGates([{ gate: 'accessibility', status: 'fail' }]).halt).toBe(true);
  });

  it('does NOT halt on a non-veto gate that is advisory (blocking false)', () => {
    expect(evaluateGates([{ gate: 'clinical', status: 'fail', blocking: false }]).halt).toBe(false);
  });

  it('halts on a non-veto gate that declares blocking true', () => {
    expect(evaluateGates([{ gate: 'clinical', status: 'fail', blocking: true }]).halt).toBe(true);
  });

  it('exposes ethics and accessibility as the veto gates', () => {
    expect(VETO_GATES).toContain('ethics');
    expect(VETO_GATES).toContain('accessibility');
  });

  it('halts on an uppercase FAIL status for a veto gate', () => {
    expect(evaluateGates([{ gate: 'ethics', status: 'FAIL' }]).halt).toBe(true);
  });

  it('halts on a capitalized Ethics gate name with status fail', () => {
    expect(evaluateGates([{ gate: 'Ethics', status: 'fail' }]).halt).toBe(true);
  });
});
