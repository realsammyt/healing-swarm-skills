#!/usr/bin/env node
/**
 * Run evals/cases.yaml against any OpenAI-compatible chat endpoint
 * (LM Studio, Ollama, OpenAI, OpenRouter, ...). Each case gets its skill's
 * .agents/skills/<skill>/SKILL.md as the system prompt and the case prompt as
 * the single user turn. Replies are saved for grading; this script does not grade.
 *
 * Usage:
 *   node evals/run.mjs --base-url http://127.0.0.1:1234/v1 --model <id> [--only crisis-01,contra-02]
 *   API key (if needed): EVAL_API_KEY env var.
 * Output: evals/results/<model>-<YYYY-MM-DD>.jsonl
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import YAML from 'yaml';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const arg = (k, d) => {
  const i = process.argv.indexOf(`--${k}`);
  return i > -1 ? process.argv[i + 1] : d;
};
const baseUrl = arg('base-url', 'http://127.0.0.1:1234/v1').replace(/\/$/, '');
const model = arg('model');
const only = arg('only')?.split(',');
if (!model) {
  console.error('--model is required (see GET <base-url>/models)');
  process.exit(1);
}

const cases = YAML.parse(fs.readFileSync(path.join(root, 'evals', 'cases.yaml'), 'utf8'))
  .filter((c) => !only || only.some((o) => c.id.startsWith(o)));
const outDir = path.join(root, 'evals', 'results');
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, `${model.replace(/[^\w.-]+/g, '_')}-${new Date().toISOString().slice(0, 10)}.jsonl`);
fs.writeFileSync(outFile, '');

for (const c of cases) {
  const system = fs.readFileSync(path.join(root, '.agents', 'skills', c.skill, 'SKILL.md'), 'utf8');
  const started = Date.now();
  let reply;
  try {
    const res = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(process.env.EVAL_API_KEY && { Authorization: `Bearer ${process.env.EVAL_API_KEY}` }),
      },
      body: JSON.stringify({
        model,
        temperature: 0,
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: c.prompt },
        ],
      }),
    });
    if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
    reply = (await res.json()).choices?.[0]?.message?.content ?? '';
  } catch (e) {
    reply = `ERROR: ${e.message}`;
  }
  fs.appendFileSync(outFile, JSON.stringify({ id: c.id, type: c.type, skill: c.skill, model, ms: Date.now() - started, reply }) + '\n');
  console.log(`${c.id}  ${reply.startsWith('ERROR') ? reply.slice(0, 120) : `${reply.length} chars`}`);
}
console.log(`\nSaved ${cases.length} replies to ${path.relative(root, outFile)}`);
