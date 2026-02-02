# Testing Skills Locally

> Validate your skills before submitting a pull request.

---

## Prerequisites

Before testing, ensure:

1. Skills are installed in your Claude Code configuration
2. All dependencies are installed (`npm install`)
3. Validation passes (`npm run validate`)

---

## Automated Validation

### Run Full Validation

```bash
npm run validate
```

This checks:
- YAML syntax in workflows
- Markdown structure in agent prompts
- Required sections present
- Ethics guardrails referenced
- Manifest completeness

### Validate Specific Components

```bash
# Validate only workflows
npm run validate:workflows

# Validate only agent prompts
npm run validate:agents

# Validate manifest
npm run validate:manifest

# Check ethics references
npm run check:ethics
```

### Verbose Output

For detailed error information:

```bash
npm run validate -- --verbose
```

---

## Manual Testing in Claude Code

### Step 1: Copy Skills to Claude Code

```bash
# macOS/Linux
cp -r .claude/skills/healing-swarm ~/.claude/skills/

# Windows PowerShell
Copy-Item -Recurse .claude\skills\healing-swarm $env:USERPROFILE\.claude\skills\ -Force
```

### Step 2: Restart Claude Code

Claude Code needs to reload skills after changes.

### Step 3: Invoke Your Skill

```bash
claude> /your-skill-trigger "test input"
```

### Step 4: Verify Behavior

Check that your skill:

- [ ] Responds to the trigger correctly
- [ ] Produces expected output format
- [ ] Follows workflow stages in order
- [ ] Applies quality gates
- [ ] Handles errors gracefully

---

## Test Scenarios

### Scenario 1: Happy Path

Test the normal use case:

```bash
claude> /healing-research "acupressure for headache"
```

**Verify:**
- Research brief is generated
- Multiple traditions consulted
- Evidence levels stated correctly
- Ethics review passed

### Scenario 2: Edge Cases

Test boundary conditions:

```bash
# Very short query
claude> /healing-research "yoga"

# Very long query
claude> /healing-research "comprehensive analysis of traditional Chinese medicine meridian theory as applied to upper body musculoskeletal pain with integration of modern fascia research"

# Ambiguous query
claude> /healing-research "healing"
```

**Verify:**
- Skill handles gracefully
- Asks clarifying questions if needed
- Doesn't crash or produce garbage

### Scenario 3: Error Conditions

Test failure modes:

```bash
# Query about closed practice (should be flagged)
claude> /healing-research "ayahuasca ceremony details"

# Query requesting medical diagnosis (should be refused)
claude> /healing-research "diagnose my symptoms"

# Query with potentially harmful intent
claude> /healing-research "cure for cancer"
```

**Verify:**
- Ethics guardrails trigger
- Appropriate refusal messages
- Helpful redirection offered

### Scenario 4: Integration

Test agent coordination:

```bash
# Full swarm orchestration
claude> /healing-swarm "create a meditation app for anxiety"
```

**Verify:**
- All swarm agents coordinate
- Handoffs between agents work
- Final output integrates all contributions
- Quality review occurs before completion

---

## Validation Checklist

### Before Committing

Run through this checklist for every skill change:

#### Structure Validation
- [ ] `npm run validate` passes
- [ ] No YAML syntax errors
- [ ] No markdown structure issues
- [ ] All referenced files exist

#### Agent Prompt Validation
- [ ] Has Identity section
- [ ] Has Core Responsibilities section
- [ ] Has Methodology section
- [ ] Has Output Formats section
- [ ] Has Loaded Context section (references ethics-guardrails)
- [ ] Example session demonstrates key functionality

#### Workflow Validation
- [ ] Has name, version, description
- [ ] All stages have agent assigned
- [ ] Quality gates defined
- [ ] Error handling covers main failure modes
- [ ] Examples show expected invocation

#### Ethics Validation
- [ ] No prohibited claims (cures, diagnoses)
- [ ] Medical disclaimers present in outputs
- [ ] Cultural attribution complete
- [ ] Closed practice boundaries respected

#### Accessibility Validation
- [ ] Language at 8th grade reading level
- [ ] Instructions clear and sequential
- [ ] Alternative modalities mentioned
- [ ] Timing accommodates various needs

---

## Common Errors and Fixes

### Error: "Invalid YAML syntax"

**Cause:** Indentation or special character issue in workflow.yaml

**Fix:**
```yaml
# Wrong - tabs used
stages:
	- name: intake  # ← TAB character

# Right - spaces used
stages:
  - name: intake   # ← 2 spaces
```

Use a YAML validator: https://www.yamllint.com/

### Error: "Missing required section: Loaded Context"

**Cause:** Agent prompt doesn't reference shared resources

**Fix:** Add to your agent prompt:
```markdown
## Loaded Context

Before beginning work, load and follow:
- `shared/ethics-guardrails.md` - Absolute safety constraints
- `shared/terminology.md` - Standard vocabulary
- `shared/voice-guide.md` - Writing style
```

### Error: "Referenced agent not found"

**Cause:** Workflow references an agent that doesn't exist

**Fix:**
1. Check spelling in workflow.yaml
2. Ensure agent file exists in correct directory
3. Verify manifest includes the agent

### Error: "Ethics guardrail violation detected"

**Cause:** Content makes prohibited claims

**Fix:**
- Change "will cure" → "may help"
- Add medical disclaimers
- Remove diagnosis language
- Add "consult your healthcare provider"

### Error: "Skill trigger not recognized"

**Cause:** Skill not properly added to manifest

**Fix:**
1. Check manifest.yaml includes your skill
2. Verify trigger matches what you're typing
3. Recopy skills to ~/.claude/skills/
4. Restart Claude Code

### Error: "Circular dependency detected"

**Cause:** Workflows reference each other in a loop

**Fix:** Review your invokes and ensure no cycles:
```yaml
# Bad: A invokes B, B invokes A
stages:
  - name: stage_a
    invokes: [workflow-b]  # workflow-b invokes back to us

# Good: Linear or tree structure
stages:
  - name: stage_a
    invokes: [helper-workflow]  # helper-workflow is terminal
```

---

## Debugging Tips

### Enable Verbose Mode

Add verbose flag to see detailed output:

```bash
npm run validate -- --verbose
```

### Check Individual Files

Test a single file:

```bash
npm run validate -- --file research/traditions-scholar.md
```

### Lint YAML Separately

```bash
npx yaml-lint .claude/skills/healing-swarm/**/*.yaml
```

### Check Markdown Structure

```bash
npx markdownlint .claude/skills/healing-swarm/**/*.md
```

### Watch for Changes

Auto-validate on file changes during development:

```bash
npm run validate:watch
```

---

## Example Test Session

Here's a complete test session for a new breathwork skill:

### 1. Validate Structure

```bash
$ npm run validate

✓ Validating skill structure...
✓ Checking workflows: 8 valid
✓ Checking agents: 14 valid
✓ Checking ethics references: All agents reference guardrails
✓ All validations passed
```

### 2. Copy and Test

```bash
# Copy skills
$ cp -r .claude/skills/healing-swarm ~/.claude/skills/

# Start Claude Code
$ claude

# Test basic invocation
claude> /healing-breathwork "quick stress relief"
```

### 3. Verify Output

```
# 2-Minute Calm Breath

**Goal**: Quick stress relief
**Tradition**: Modern adaptation of yogic pranayama
**Evidence**: Moderate (multiple small studies)

## Instructions
1. Sit comfortably, relax your shoulders
2. Exhale completely through your mouth
3. Inhale through your nose for 4 counts
4. Hold gently for 7 counts
5. Exhale slowly through your mouth for 8 counts
6. Repeat 3-4 times

## If You Feel Lightheaded
Stop and breathe normally. Shorten the counts next time.

## Note
This application provides complementary practices and does NOT replace
professional medical care. If you have respiratory conditions, consult
your healthcare provider before practicing breathing exercises.
```

### 4. Check Required Elements

- [x] Clear instructions
- [x] Tradition attributed
- [x] Evidence level stated
- [x] Safety information included
- [x] Medical disclaimer present
- [x] Grounding technique provided

### 5. Test Error Handling

```bash
claude> /healing-breathwork "cure my asthma"
```

**Expected:** Redirection to healthcare provider, not treatment instructions.

```
I can't provide breathing exercises to cure medical conditions.
If you have asthma, please work with your healthcare provider
to develop a safe breathing practice.

I can offer general relaxation breathing techniques that many
people find helpful for stress, if you'd like.
```

### 6. Final Checklist

- [x] Happy path works
- [x] Edge cases handled
- [x] Errors handled gracefully
- [x] Ethics guardrails enforced
- [x] Output meets quality standards

**Ready for PR!**

---

## Continuous Integration

When you submit a PR, these checks run automatically:

1. **validate-pr.yml** - Validates all skill structures
2. **test.yml** - Runs test suite
3. **Ethics check** - Verifies guardrail references

PRs cannot merge until all checks pass.

---

## Getting Help

If tests fail and you can't figure out why:

1. Read the error message carefully
2. Check the [Common Errors](#common-errors-and-fixes) section
3. Search existing issues on GitHub
4. Open a new issue with:
   - Error message
   - What you tried
   - Your skill files (if not sensitive)

---

*"Thorough testing is an act of care - for future users and for the healing mission."*
