# Agent Listing

> An "Agent" = Persona + Skill + Avatar packaged together, so users get a complete character product in one install.

This folder is the blank template for Agent listings. **The incubator's output aligns 1:1 with this structure** — what the incubator hands you looks just like this, except `avatar/` defaults to empty and you'll need to drop in your own `avatar.png` to ship as an Agent.

---

## Agent vs Standalone

| | Agent (this folder) | Standalone |
|---|---|---|
| Content | Persona + Skill + Avatar (all three required) | Persona, Skill, or Avatar — pick one |
| Bidirectional binding | Pre-bound; users install all at once | Not applicable |
| Best for | You built a complete character (personality + signature skill + visual) | You only have one piece and want to test the water |
| Template location | `agents/YOUR_AGENT_NAME/` | `personas/YOUR_AGENT_NAME/`, `skills/YOUR_SKILL_NAME/` |

---

## How to start

### 1. Copy the whole folder and rename

```
Copy:   agents/YOUR_AGENT_NAME/
Rename: agents/your_agent_name/    ← lowercase English + underscores
```

For example: `agents/night_wolf_strategist/`

### 2. Update IDs across the three files (must match)

- `persona_id` in `persona.md`
- `skill_id` in `SKILL.md`
- `avatar_id` in `avatar/metadata.json`

**Use the same base name as a prefix** so the three look like one set:

| File | Example ID |
|------|---------|
| `persona.md` | `persona_id: night_wolf_strategist` |
| `SKILL.md` | `skill_id: night_wolf_strategist_skill` |
| `avatar/metadata.json` | `avatar_id: night_wolf_strategist_001` |

### 3. Bidirectional binding — pre-filled, sync both sides when you change IDs

`persona.md`'s `agent_skills:` and `SKILL.md`'s `compatible_personas:` must mirror each other. Portal verifies — one side off, and it rejects.

```yaml
# persona.md
persona_id: night_wolf_strategist
agent_skills:
  - night_wolf_strategist_skill   ← matches SKILL.md's skill_id

# SKILL.md
skill_id: night_wolf_strategist_skill
compatible_personas:
  - night_wolf_strategist          ← matches persona.md's persona_id
```

### 4. Drop in the Avatar

The `avatar/` folder ships with only a `metadata.json` placeholder, **no image**.

- Put your `avatar.png` (at least 512×512, 1024×1024 recommended, PNG) into `avatar/`
- Edit `avatar/metadata.json` to fill in `traits`, `universe`, `realm`, `rights`, etc.
- Full spec in [`docs/avatar-creation-spec.md`](../../docs/avatar-creation-spec.md)

### 5. Fill in content, verify, submit

- Fill in content in each of the three files
- Tone, setting, worldview must be consistent — all three should read like the same character
- Submit through Creator Portal

---

## Incubator-generated Agents

If you got an Agent prototype from the incubator:

1. Unzip into `agents/<your_agent_name>/`
2. The main fields (behavior descriptions, sentence examples, dialogues, workflow) are pre-filled — you only need to adjust the tone to make it more like "your" character
3. `avatar/` is empty; you must drop in `avatar.png`
4. Bidirectional binding is pre-written; you only need to change the IDs to your own lowercase English names

No Avatar yet but want to test the water? Move `persona.md` and `SKILL.md` into the `personas/` and `skills/` folders separately and publish as standalones.
