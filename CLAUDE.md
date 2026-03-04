# Healing Swarm Skills — Project Instructions

## Timeline Update Workflow (MANDATORY)

**Whenever new features, skills, workflows, templates, agents, or shared resources are added to this project, you MUST update the timeline in BOTH locations before committing:**

### 1. Website Timeline (`website/docs/changelog.mdx`)

Add a new dated section at the TOP of the timeline (below the header), following this format:

```markdown
## YYYY-MM-DD — Short Description

**PR #N | Context sentence**

### Skills Added (N)

| Skill      | Trigger    | Category |
| ---------- | ---------- | -------- |
| Skill Name | `/trigger` | Category |

### Agents Added (N)

- **Agent Name** — One-line description

### Workflows Added (N)

- `filename.yaml` — One-line description

### Templates Added (N)

- `filename.md` — One-line description

### Shared Resources Updated

- `filename.md` — What changed

### Documentation

- What doc pages were added/updated
```

Only include sections that apply (skip empty sections).

### 2. README.md Development Timeline

Add the same date entry to the "Development Timeline" section in README.md, using the condensed format:

```markdown
### YYYY-MM-DD — Short Description

- **N skills:** Skill1, Skill2, Skill3
- **N agents:** Agent1, Agent2
- **N workflows:** workflow1, workflow2
- Key infrastructure or documentation changes
```

### 3. Update Cumulative Totals

Update the "Cumulative Totals" table at the bottom of `website/docs/changelog.mdx` and the totals in the README timeline section with the new counts.

### 4. Update CHANGELOG.md

If the changes warrant a version bump, update `CHANGELOG.md` following Keep a Changelog format. Otherwise, add entries under the current `[Unreleased]` section.

---

## Project Structure

- **Skills directory:** `.claude/skills/healing-swarm/`
- **Manifest:** `.claude/skills/healing-swarm/manifest.yaml`
- **Website:** `website/` (Docusaurus)
- **Validation:** `npm run validate` (checks all YAML + agent prompts)
- **Website build:** `cd website && npm run build`

## YAML Authoring Rules

Strings containing embedded double quotes MUST be wrapped in single quotes. Example:

- WRONG: `- "word" more text`
- RIGHT: `- '"word" more text'`

Always run `npm run validate` before committing YAML changes.

## Subagent Limitations

Background implementer subagents may be denied Write tool permissions. When this happens, extract content from agent output and write files directly from the main conversation.

## Commit Workflow

1. Create feature branch
2. Make changes
3. **Update timeline in BOTH README.md and website/docs/changelog.mdx**
4. Run `npm run validate` (if YAML changed)
5. Run `cd website && npm run build` (if website changed)
6. Commit with descriptive message
7. Push and create PR
8. Merge
