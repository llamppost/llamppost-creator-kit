# skills

Each skill is a **package folder**.

Why a package?
- A skill may include scripts.
- A skill may include examples.
- Keeping files together makes review and versioning easier.

## Structure

```
skills/
  YOUR_SKILL_NAME/       ← blank template, copy this
  EXAMPLE_.../           ← reference examples, read-only

  <your_skill_id>/       ← after you copy and rename to your English lowercase ID
    SKILL.md
    scripts/             (optional — create when needed)
    examples/            (optional)
```

Start by copying `skills/YOUR_SKILL_NAME/`. After copying, you MUST rename both the folder AND the `skill_id` inside `SKILL.md` to your own English lowercase identifier (they must match exactly).

> **Filename note:** `SKILL.md` is uppercase. This matches Claude Code, OpenClaw, and Anthropic's "Skills" convention so the same file works as a drop-in skill on those platforms without any rename. **Do not lowercase the filename** — case-sensitive filesystems (e.g. Linux deployments) will fail to discover it.
