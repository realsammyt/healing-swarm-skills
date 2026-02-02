#!/usr/bin/env node

/**
 * Healing Swarm Skills - Create Skill CLI
 *
 * Interactive CLI for scaffolding new skills with proper structure,
 * ethics guardrails, and validation.
 *
 * Usage:
 *   npm run create-skill
 *   node scripts/create-skill.js
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const SKILLS_DIR = path.join(__dirname, '..', '.claude', 'skills', 'healing-swarm');
const TEMPLATES_DIR = path.join(__dirname, '..', 'templates');

// ANSI colors for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  red: '\x1b[31m',
};

function print(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function printHeader() {
  console.log('');
  print('╔══════════════════════════════════════════════════════════════╗', 'cyan');
  print('║            Healing Swarm Skills - Create Skill               ║', 'cyan');
  print('╚══════════════════════════════════════════════════════════════╝', 'cyan');
  console.log('');
}

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(`${colors.yellow}${question}${colors.reset} `, (answer) => {
      resolve(answer.trim());
    });
  });
}

function askWithOptions(question, options) {
  return new Promise(async (resolve) => {
    console.log(`\n${colors.yellow}${question}${colors.reset}`);
    options.forEach((opt, i) => {
      console.log(`  ${colors.cyan}${i + 1}${colors.reset}) ${opt}`);
    });
    const answer = await ask('Enter number: ');
    const index = parseInt(answer, 10) - 1;
    if (index >= 0 && index < options.length) {
      resolve(options[index]);
    } else {
      print('Invalid selection, using first option', 'yellow');
      resolve(options[0]);
    }
  });
}

function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

function toPascalCase(str) {
  return str
    .split(/[-\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

// Templates
function generateManifestEntry(config) {
  return `# Add this to .claude/skills/healing-swarm/manifest.yaml under 'skills:'

  - name: healing-${config.name}
    trigger: /healing-${config.name}
    description: ${config.description}
    category: ${config.category}
    agents:
      - ${config.agents.join('\n      - ')}
    workflow: ${config.name}/workflow.yaml
    inputs:
      - query: string
${config.inputs.map((i) => `      - ${i}: string`).join('\n')}
    outputs:
      - ${config.name}-output.md
    requires:
      - ethics-guardrails
      - voice-guide
      - terminology
`;
}

function generateAgentPrompt(config, agentName) {
  const pascalName = toPascalCase(agentName);
  return `# ${pascalName} Agent

> ${config.description}

---

## Identity

You are a **${pascalName}**, specializing in ${config.category} for healing applications. Your expertise spans:

- **Expertise Area 1**: Description
- **Expertise Area 2**: Description
- **Expertise Area 3**: Description

You approach your work with:
- **Safety first**: Always prioritize user wellbeing
- **Evidence grounding**: Distinguish proven from traditional claims
- **Accessibility**: Make content available to all users
- **Cultural respect**: Honor traditions and attribute properly

---

## Core Responsibilities

### 1. Primary Responsibility

Description of the main task this agent performs.

1. Step one
2. Step two
3. Step three

### 2. Secondary Responsibility

Description of secondary task.

1. Step one
2. Step two

---

## Methodology

### Process Overview

When handling a request:

1. **Parse**: Understand what the user needs
2. **Assess**: Check for any safety concerns
3. **Execute**: Perform the main task
4. **Review**: Verify output meets quality standards
5. **Deliver**: Provide the result with appropriate context

### Quality Standards

Every output must:
- Meet ethics guardrails
- Include appropriate disclaimers
- Use accessible language
- Attribute sources properly

---

## Output Formats

### Standard Output

\`\`\`markdown
# [Title]

## Overview
[Brief summary]

## Main Content
[Primary content]

## Safety Information
[Relevant disclaimers]

## Sources
[Citations]
\`\`\`

---

## Integration with Other Agents

### Inputs From
- **Orchestrator**: User query and context

### Outputs To
- **Quality agents**: For ethics and accessibility review
- **User**: Final deliverable

---

## Loaded Context

Before beginning work, load and follow:
- \`shared/ethics-guardrails.md\` - Absolute safety constraints
- \`shared/terminology.md\` - Standard vocabulary
- \`shared/voice-guide.md\` - Writing style

---

## Example Session

**User Query**: "Example request"

**Process**:
1. Parse query
2. Check for contraindications
3. Create output
4. Apply safety disclaimers
5. Deliver

**Output**:
\`\`\`markdown
# Example Output

## Overview
This provides [description].

## Content
[Example content]

## Note
This is for informational purposes only.
\`\`\`

---

## Guiding Principles

1. **User safety comes first** - Never compromise on safety
2. **Honesty over comfort** - Be truthful about limitations
3. **Accessibility matters** - Design for vulnerable users
4. **Attribution is respect** - Always cite sources

---

*"[Closing quote relevant to your skill]"*
`;
}

function generateWorkflow(config) {
  const agentName = config.agents[0];
  return `# ${toPascalCase(config.name)} Workflow
# ${config.description}

name: ${config.name}-workflow
version: 1.0.0
description: |
  ${config.description}

# ═══════════════════════════════════════════════════════════════════════════════
# WORKFLOW STAGES
# ═══════════════════════════════════════════════════════════════════════════════

stages:
  - name: intake
    description: Parse request and validate inputs
    agent: ${agentName}
    actions:
      - parse_request
      - validate_inputs
      - check_contraindications
    outputs:
      - request_plan

  - name: execute
    description: Perform the main skill task
    agent: ${agentName}
    inputs:
      - request_plan
    outputs:
      - draft-output.md

  - name: quality_review
    description: Review output for safety and quality
    agent: orchestrator
    invokes:
      - quality/ethics-guardian
    inputs:
      - draft-output.md
    outputs:
      - review_status
      - required_modifications

  - name: finalize
    description: Apply modifications and deliver
    agent: ${agentName}
    inputs:
      - draft-output.md
      - required_modifications
    outputs:
      - ${config.name}-output.md

# ═══════════════════════════════════════════════════════════════════════════════
# OUTPUT STRUCTURE
# ═══════════════════════════════════════════════════════════════════════════════

output_structure:
  ${config.name}-output.md:
    sections:
      - overview
      - main_content
      - safety_information
      - sources

# ═══════════════════════════════════════════════════════════════════════════════
# QUALITY GATES
# ═══════════════════════════════════════════════════════════════════════════════

quality_gates:
  execute:
    - Output addresses user request
    - Content is accurate and complete
    - Language is accessible (8th grade level)
    - Sources are cited

  quality_review:
    - Ethics guardrails respected
    - No prohibited medical claims
    - Appropriate disclaimers present
    - Cultural attribution complete (if applicable)

  finalize:
    - All quality issues resolved
    - Output format correct

# ═══════════════════════════════════════════════════════════════════════════════
# ERROR HANDLING
# ═══════════════════════════════════════════════════════════════════════════════

error_handling:
  invalid_input:
    action: clarify
    message: "Please provide more specific information."
    continue: false

  out_of_scope:
    action: redirect
    message: "This request is outside what I can help with safely."
    continue: false

  ethics_concern:
    action: halt
    message: "This request requires ethics review."
    continue: false
    require: ethics-guardian approval

# ═══════════════════════════════════════════════════════════════════════════════
# EXAMPLE INVOCATIONS
# ═══════════════════════════════════════════════════════════════════════════════

examples:
  - name: Basic usage
    invocation: /healing-${config.name} "example query"
    expected_output:
      - Appropriate response
      - Safety information included
      - Sources cited

  - name: Edge case
    invocation: /healing-${config.name} "edge case query"
    expected_output:
      - Graceful handling
      - Clarification or appropriate refusal
`;
}

async function main() {
  printHeader();

  print('This tool will help you create a new healing swarm skill.', 'blue');
  print('Press Ctrl+C at any time to cancel.\n', 'blue');

  // Gather information
  const name = await ask('Skill name (e.g., "breathwork", "journaling"):');
  if (!name) {
    print('Skill name is required.', 'red');
    rl.close();
    return;
  }

  const skillName = toKebabCase(name);
  const skillDir = path.join(SKILLS_DIR, skillName);

  // Check if skill already exists
  if (fs.existsSync(skillDir)) {
    print(`\nSkill "${skillName}" already exists at ${skillDir}`, 'red');
    const overwrite = await ask('Overwrite? (y/N):');
    if (overwrite.toLowerCase() !== 'y') {
      print('Cancelled.', 'yellow');
      rl.close();
      return;
    }
  }

  const description = await ask('Brief description (1 sentence):');

  const category = await askWithOptions('Skill category:', [
    'research',
    'design',
    'content',
    'build',
    'quality',
    'deploy',
    'other',
  ]);

  print('\nHow many agents does this skill need?', 'yellow');
  print('  (Most skills need 1-2. Start simple, add more later.)', 'blue');
  const agentCountStr = await ask('Number of agents (1-5):');
  const agentCount = Math.min(5, Math.max(1, parseInt(agentCountStr, 10) || 1));

  const agents = [];
  for (let i = 0; i < agentCount; i++) {
    const defaultName = i === 0 ? `${skillName}-agent` : `${skillName}-helper-${i}`;
    const agentName = await ask(`Agent ${i + 1} name (default: ${defaultName}):`);
    agents.push(toKebabCase(agentName || defaultName));
  }

  print('\nAny additional inputs besides "query"? (comma-separated, or leave blank)', 'yellow');
  const inputsStr = await ask('Additional inputs:');
  const inputs = inputsStr
    ? inputsStr.split(',').map((s) => toKebabCase(s.trim())).filter(Boolean)
    : [];

  // Confirm
  console.log('\n');
  print('═══════════════════════════════════════════════════════════════', 'cyan');
  print('                        SKILL SUMMARY                          ', 'cyan');
  print('═══════════════════════════════════════════════════════════════', 'cyan');
  console.log(`  Name:        ${skillName}`);
  console.log(`  Trigger:     /healing-${skillName}`);
  console.log(`  Category:    ${category}`);
  console.log(`  Description: ${description}`);
  console.log(`  Agents:      ${agents.join(', ')}`);
  console.log(`  Inputs:      query${inputs.length ? ', ' + inputs.join(', ') : ''}`);
  console.log(`  Directory:   ${skillDir}`);
  print('═══════════════════════════════════════════════════════════════\n', 'cyan');

  const confirm = await ask('Create this skill? (Y/n):');
  if (confirm.toLowerCase() === 'n') {
    print('Cancelled.', 'yellow');
    rl.close();
    return;
  }

  // Create skill
  const config = { name: skillName, description, category, agents, inputs };

  print('\nCreating skill...', 'blue');

  // Create directory
  fs.mkdirSync(skillDir, { recursive: true });
  print(`  ✓ Created directory: ${skillDir}`, 'green');

  // Generate agent prompts
  for (const agent of agents) {
    const agentPath = path.join(skillDir, `${agent}.md`);
    fs.writeFileSync(agentPath, generateAgentPrompt(config, agent));
    print(`  ✓ Created agent: ${agent}.md`, 'green');
  }

  // Generate workflow
  const workflowPath = path.join(skillDir, 'workflow.yaml');
  fs.writeFileSync(workflowPath, generateWorkflow(config));
  print(`  ✓ Created workflow: workflow.yaml`, 'green');

  // Generate manifest entry
  const manifestPath = path.join(skillDir, 'manifest-entry.yaml');
  fs.writeFileSync(manifestPath, generateManifestEntry(config));
  print(`  ✓ Created manifest entry: manifest-entry.yaml`, 'green');

  // Success message
  console.log('\n');
  print('╔══════════════════════════════════════════════════════════════╗', 'green');
  print('║                    SKILL CREATED SUCCESSFULLY                 ║', 'green');
  print('╚══════════════════════════════════════════════════════════════╝', 'green');

  print('\nNext steps:', 'yellow');
  console.log('  1. Edit the agent prompt(s) to customize behavior');
  console.log('  2. Update the workflow stages as needed');
  console.log('  3. Add the manifest entry to manifest.yaml:');
  console.log(`     ${path.join(SKILLS_DIR, 'manifest.yaml')}`);
  console.log('  4. Run validation: npm run validate');
  console.log('  5. Copy to Claude Code and test:');
  console.log('     cp -r .claude/skills/healing-swarm ~/.claude/skills/');
  console.log(`     claude> /healing-${skillName} "test query"`);

  print('\nDocumentation:', 'yellow');
  console.log('  - Creating Skills: docs/guides/creating-skills.md');
  console.log('  - Testing Skills: docs/guides/testing-skills.md');

  rl.close();
}

// Run
main().catch((err) => {
  print(`\nError: ${err.message}`, 'red');
  process.exit(1);
});
`;
