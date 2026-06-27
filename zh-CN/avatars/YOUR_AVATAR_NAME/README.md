# Avatar (standalone)

A blank Avatar template. **Copy this folder** to publish an Avatar on its own — no Persona or Skill required.

> An Avatar is a standalone product. You do **not** need a `persona.md` or `SKILL.md` to list one. Those are only required when you publish a full **Agent** (Persona + Skill + Avatar in one).

## Steps

1. Copy this folder and rename it to your own English lowercase `avatar_id`
   (e.g. `avatars/night_wolf_001/`). The folder name MUST match `avatar_id`.
2. Add your image as `avatar.png` — at least 512×512, 1024×1024 recommended, PNG, 1:1.
3. Edit `metadata.json` — fill in every required field and rename `avatar_id`
   from the `YOUR_AVATAR_NAME_001` placeholder to your own.
4. Submit through the Creator Portal.

## Required files

- `avatar.png` — the image (filename is fixed)
- `metadata.json` — pre-filled placeholder, please edit

Full schema, enum values, and rights policy in
[`docs/avatar-creation-spec.md`](../../docs/avatar-creation-spec.md).

## Want to ship it as a full character instead?

Bundle this Avatar with a Persona and a Skill as an **Agent** —
copy `agents/YOUR_AGENT_NAME/` and drop your `avatar.png` + `metadata.json`
into its `avatar/` subfolder.
