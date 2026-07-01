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
    SKILL.md             (runtime skill body — frontmatter: skill_id + base_price)
    metadata.json        (listing fields — title / one_liner / category / … / listing.* / cover / banner)
    assets/              cover-<id>.png (1:1) + banner-<id>.png (16:10) — language-neutral, one version
    scripts/             (optional — create when needed)
    examples/            (optional)
```

Start by copying `skills/YOUR_SKILL_NAME/`. After copying, you MUST rename both the folder AND the `skill_id` inside `SKILL.md` to your own English lowercase identifier (they must match exactly).

## Listing manifest (`metadata.json`)

The marketplace listing fields — `title`, `one_liner`, `category`, `languages`, `version`, `script_mode`, `listing_description`, and the nested `listing.{what_it_does, what_you_get, limitations}` — live in `metadata.json` beside `SKILL.md`. `SKILL.md` frontmatter keeps only runtime identity + pricing (`skill_id` + `base_price`). Drop your listing images into `assets/` as `cover-<skill_id>.png` (square 1:1) and `banner-<skill_id>.png` (wide 16:10), PNG under 2 MB, and declare them via `cover` / `banner` in `metadata.json`. Images are language-neutral — one version, not one per language. Full field reference in [`docs/skill-template.md`](../docs/skill-template.md).

> **Filename note:** `SKILL.md` is uppercase. This matches Claude Code, OpenClaw, and Anthropic's "Skills" convention so the same file works as a drop-in skill on those platforms without any rename. **Do not lowercase the filename** — case-sensitive filesystems (e.g. Linux deployments) will fail to discover it.
