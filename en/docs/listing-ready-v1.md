# Listing Guide v1.5

Language: English | [繁體中文](../../zh-TW/docs/listing-ready-v1.md) | [简体中文](../../zh-CN/docs/listing-ready-v1.md) | [日本語](../../ja/docs/listing-ready-v1.md)

This guide walks you step by step through publishing your first listing. You don't need everything ready at once — **just pick one and start**.

> **Want AI to help fill out the templates?** Copy a ready-made prompt from [docs/ai-prompts.md](ai-prompts.md) into Claude / ChatGPT / Gemini — Avatar / Skill / Persona / full Agent, all four are there.

---

## Important: folder and ID names must be English

Read this before you start — there are no exceptions to this rule.

Our system **only understands English identifiers**. Even if you write your persona and skill content in Traditional Chinese, Japanese, or any other language, the following MUST always be English:

- All `*_id` fields (`skill_id`, `persona_id`, `avatar_id`, `creator`, etc.)
- All folder names (`personas/<folder>`, `skills/<folder>`, `agents/<folder>`, `avatars/<folder>`)
- Format: **lowercase English letters + digits + underscores (`_`)** — no spaces, no uppercase, no hyphens, no non-English characters

**Examples:**

| Correct | Wrong |
|---------|---------|
| `persona_id: pi_lang` | `persona_id: 派狼` |
| `skills/weekly_report_writer/` | `skills/週報生成器/` |
| `agents/night_wolf_strategist/` | `agents/夜狼戰略師/` |
| `avatar_id: night_wolf_001` | `avatar_id: Night-Wolf-001` |

Your persona's **display name** (the `name` field, e.g., `name: 派狼`), all body content, dialogues, sentence examples — these CAN and SHOULD be in your persona's actual operating language. The system only uses folder names and `*_id` fields for identification and routing, so those must be English.

**Reserved prefixes**: This kit has two reserved prefixes. Your real listings MUST NOT use either — Portal will reject them:

- **`EXAMPLE_`**: reference example files, read-only (e.g., `EXAMPLE_pi_lang`, `EXAMPLE_social_marketing_post_ideas`) — do NOT copy folders with this prefix.
- **`YOUR_`**: blank templates (e.g., `YOUR_AGENT_NAME`, `YOUR_SKILL_NAME`) designed to be copied and renamed — after copying, you MUST rename both the folder and the `*_id` to your own English lowercase ID.

---

## Two ways to publish

### Standalone

| | |
|---|---|
| **For** | You have just one of Persona, Skill, or Avatar to test the water |
| **Template** | `personas/YOUR_AGENT_NAME/` or `skills/YOUR_SKILL_NAME/` |
| **Notes** | All three can ship independently; users install one at a time |

### Agent (Persona + Skill + Avatar in one)

| | |
|---|---|
| **For** | You built a complete character (personality + signature skill + visual) and want to package it all together |
| **Template** | `agents/YOUR_AGENT_NAME/` (contains three files with bidirectional binding pre-filled + an `avatar/` subfolder) |
| **Notes** | Single publish, binding pre-filled, Avatar required (no Avatar = must split into standalones) |
| **Incubator output** | Aligns 1:1 with the Agent template — drop in an Avatar and it's ready |

---

## Three core concepts

Before you start, here are the three product types you can publish on llamppost:

### Persona
Describes "what kind of person this is" — personality, tone, values, limits, and the kind of work it fits. Users decide whether to interact with your character based on the Persona.

### Skill
Describes "what this person can specifically do" — workflow, what the user provides, what they receive. Skills can be sold standalone or packaged into an Agent with a Persona.

### Avatar
Describes "what this person looks like" — image spec and `metadata.json`, which decide how the character is visually presented on the platform.

For standalone listings, you can publish **just one** of these. For Agent listings, all three are required.

---

## Which one should I start with?

| If you have… | Start here |
|-------------|-----------|
| A clear workflow or service | **Standalone Skill** |
| A distinctive character tone or personality | **Standalone Persona** |
| A finished character illustration | **Standalone Avatar** |
| Personality + signature skill + visual, all three | **Agent (`agents/`)** |
| An incubator-generated prototype | **Agent** (drop in an Avatar and you're done) |

---

## Publishing a standalone Skill

### Step 1: Copy the template folder

```
Copy:   skills/YOUR_SKILL_NAME/
Rename: skills/your_skill_id/      ← lowercase English + underscores, e.g., skills/weekly_report_writer/
```

There's one `SKILL.md` inside the folder — that's the only file you need to fill in. After renaming, make sure the `skill_id` inside `SKILL.md` matches the folder name.

### Step 2: Fill in the YAML frontmatter

```yaml
---
skill_id: weekly_report_writer      ← change to your skill ID (lowercase + underscores)
title: Weekly Report Auto-Generator ← change to your skill name
version: "1.0"
category:
  - writing                         ← primary category (see category list)
  - ops                             ← secondary category (optional)
one_liner: Input your weekly task list, get a structured weekly report draft

languages:
  - zh-TW
  - en

base_price: 0                       ← NT$. 0 = free; ≥100 = paid (your choice)

script_mode: workflow_only          ← keep as-is unless you ship a script
---
```

> **Category list:** writing, research, coding, data, strategy, ops, sales, marketing, design, learning

### Step 3: Fill in the body sections

Below the YAML are five sections, each with an HTML comment explaining what to write (`<!-- gray text -->`). Delete the comments once you're done.

**These five sections become your public content page** — they render live on the product detail page, and they're what buyers read before they buy. Write them well.

**The two most important sections:**

"**What User needs to provide**" — be specific so users know what to prepare.
"**What User will receive**" — use numbers. "3 report drafts" is more convincing than "report content."

### Step 4: Remove template comments, check formatting, submit

```
- [ ] All required YAML fields are filled
- [ ] All five body sections have real content (not template defaults)
- [ ] No leftover comments or instructions
- [ ] Folder name matches skill_id
- [ ] base_price is 0 or ≥100
```

Submit through Creator Portal. During submission you can upload an optional **product thumbnail** (PNG, 16:10 recommended) — it shows on the marketplace card and the detail page. Skip it and the card shows an auto-generated lettered placeholder instead.

---

## Publishing a standalone Persona

### Step 1: Copy the template folder

```
Copy:   personas/YOUR_AGENT_NAME/
Rename: personas/your_persona_id/  ← lowercase English + underscores
```

For full field reference, see [persona-template.md](persona-template.md); for a fully filled-in example, see `personas/EXAMPLE_pi_lang/persona.md`.

### Step 2: Fill in the YAML frontmatter

```yaml
---
persona_id: kai_weekly_coach
name: Kai
profession: ops                    ← pick exactly 1 (see profession list)
one_liner: Turn the mess in your head into an executable weekly plan
version: "1.0"

languages:
  - zh-TW
  - en

base_price: 0                      ← NT$. 0 = free; ≥100 = paid
---
```

> **Profession list:** life, pa, ops, people, sales, mktg, tech, strat, fitness_coach, life_coach, learning_coach, religion_mentor, intimacy_consultant, teacher_tutor, companion_partner, companion_ex

### Step 3: Fill in personality behavior, sentence examples, and dialogues

This is the heart of the Persona. The platform automatically derives 5-axis PULSE scores and a Voice Fingerprint from your behavior descriptions and dialogues — users can filter and match by these, and the platform uses them to verify the persona stays in character across different AI engines.

**You don't need to compute the scores or fingerprint yourself — just describe the interaction behavior honestly. 1 dialogue is required, the other 2 are recommended** (the more you fill in, across more situations, the higher the platform's "cross-model consistency" score). For the full structure, see [persona-template.md](persona-template.md).

Reference format:

```markdown
## Opening behavior
Before starting work, Kai confirms the three most important things for the day and flags one easily-missed risk.

## During-work behavior
When the requirement isn't clear, Kai proposes an assumption and asks you to confirm — instead of asking you to re-explain from scratch.

## Closing behavior
After each work chunk, Kai proactively summarizes "what got done, what's next" in a short recap.

## Sentence examples
- Direct report: "Done. Three things you might want to double-check: …"
- Praise first, then report: "Direction's clear. Based on your idea, I adjusted these spots: …"
- Disagreement: "I get where you're going, but one thing I want to confirm first: …"
- Bad news: "There's a situation you need to know, and I've already got a backup plan: …"
- Response to stress: "Sounds like you're under a lot of pressure right now. Let's list out today's most urgent items first, OK?"
```

### Step 4: Submit through Creator Portal

---

## Publishing a standalone Avatar

> An Avatar publishes on its own. You do **not** need a `persona.md` or `SKILL.md` — those are only for a full Agent.

### Step 1: Copy the template folder

```
Copy:   avatars/YOUR_AVATAR_NAME/
Rename: avatars/your_avatar_id/      ← lowercase English + underscores, e.g., avatars/night_wolf_001/
```

The folder name MUST match the `avatar_id` inside `metadata.json`.

### Step 2: Prepare the image

- Filename: `avatar.png` (fixed)
- Size: at least 512×512, 1024×1024 recommended
- Format: PNG, 1:1

### Step 3: Fill in metadata.json

Edit every required field and rename `avatar_id` from the placeholder. Full schema, enum values, and rights policy in [avatar-creation-spec.md](avatar-creation-spec.md).

### Step 4: Submit through Creator Portal

---

## Publishing an Agent (Persona + Skill + Avatar)

### Step 1: Copy the Agent template folder

```
Copy:   agents/YOUR_AGENT_NAME/
Rename: agents/your_agent_name/   ← lowercase English + underscores
```

Inside, you'll find pre-packaged:

```
agents/your_agent_name/
├── README.md            ← Agent usage notes
├── persona.md           ← agent_skills pre-filled to point at same-folder SKILL.md
├── SKILL.md             ← compatible_personas pre-filled to point at same-folder persona.md
└── avatar/
    ├── README.md        ← Avatar supplementary notes
    └── metadata.json    ← pre-filled placeholder
```

### Step 2: Update IDs across all three files (must match)

| File | Field to change | Example |
|------|-----------|------|
| `persona.md` | `persona_id` | `night_wolf_strategist` |
| `SKILL.md` | `skill_id` | `night_wolf_strategist_skill` |
| `avatar/metadata.json` | `avatar_id` | `night_wolf_strategist_001` |

**Use the same base name as a prefix** — so the three look like a single product set.

### Step 3: Keep the bidirectional binding aligned

`persona.md`'s `agent_skills:` and `SKILL.md`'s `compatible_personas:` must mirror each other. Portal verifies this — one side off, and it rejects. The template is pre-filled, but when you change IDs, update both sides:

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

### Step 4: Drop in the Avatar

The `avatar/` folder ships without an image:

- Put your `avatar.png` (at least 512×512) into `avatar/`
- Edit `avatar/metadata.json` to fill in `traits`, `universe`, `realm`, `rights`, etc.
- Full spec and rights policy in [avatar-creation-spec.md](avatar-creation-spec.md)

> **No Avatar yet but want to test the water?** Move `persona.md` and `SKILL.md` into the `personas/` and `skills/` folders separately and publish each as standalone. Re-publish as an Agent once the Avatar is ready.

### Step 5: Submit through Creator Portal

Final check:

```
- [ ] All three IDs match their folder names
- [ ] Bidirectional binding aligned on both sides (agent_skills ↔ compatible_personas)
- [ ] persona.md / SKILL.md / avatar/metadata.json all complete
- [ ] avatar/ contains avatar.png (not just placeholder)
- [ ] All three files read like the same character (tone, setting, voice)
- [ ] base_price is 0 or ≥100
```

---

## After you publish

These are done in the Portal — there's no Kit file format for them.

### Edit your listing anytime

At **Studio → My listings (我的上架)** you can edit a published product's content page, thumbnail, name, and description at any time. Changes take effect immediately — no re-review.

### Bundle skills into a skill pack

At **Studio → My listings → Create skill pack (建立技能包)** you can group several of your published skills into one **skill pack** — a marketplace product of its own with its own price and thumbnail. The member skills stay individually purchasable.

---

## FAQ

**Q: How much do I need to test before publishing?**
The platform will run cross-model QA later and produce fidelity labels and test levels automatically. For now, you don't need to claim any testing rigor yourself — just ship it.

**Q: Can I publish multiple Skills at once?**
Yes. Each Skill is its own folder and file, they don't interfere with each other.

**Q: Does a Persona need an Avatar?**
Not for standalone listings; required for Agent listings.

**Q: Can I update content after publishing?**
Yes. Re-submit through Creator Portal and bump `version` (e.g., `"1.0"` → `"1.1"`).

**Q: Why can't `base_price` be 1–99?**
To keep the marketplace pricing signal clean. Either free trial (`0`) or at least NT$ 100.
