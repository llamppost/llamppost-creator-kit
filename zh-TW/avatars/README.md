# avatars

Each Avatar is a **package folder** holding an image and its metadata.

An Avatar describes *what a character looks like*. It is a standalone product —
you can publish one on its own, with **no `persona.md` and no `SKILL.md`**.
Those files are only needed for a full **Agent** (Persona + Skill + Avatar).

## Structure

```
avatars/
  YOUR_AVATAR_NAME/      ← blank template, copy this

  <your_avatar_id>/      ← after you copy and rename to your English lowercase ID
    avatar.png
    metadata.json
```

Start by copying `avatars/YOUR_AVATAR_NAME/`. After copying, you MUST rename both
the folder AND the `avatar_id` inside `metadata.json` to your own English lowercase
identifier (they must match exactly).

Full schema, enum values, image specs, and rights policy in
[`docs/avatar-creation-spec.md`](../docs/avatar-creation-spec.md).
