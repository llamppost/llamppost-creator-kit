# llamppost Creator Kit

<img src="assets/llamppost_webicon.svg" alt="llamppost" width="96" />

Build and publish your Persona, Skill, and Avatar on the llamppost marketplace.

---

## Important: folder and ID names must be English

Our system **only understands English identifiers**. Even if you write your persona and skill content in Traditional Chinese, Japanese, or any other language, the following fields MUST always be English:

- All `*_id` fields (`skill_id`, `persona_id`, `avatar_id`, `creator`, etc.)
- All folder names (`personas/<folder>`, `skills/<folder>`, `avatars/<folder>`)
- Format: **lowercase English letters + digits + underscores (`_`)** — no spaces, no uppercase, no hyphens, no non-English characters

**Examples:**

| Correct | Wrong |
|---------|---------|
| `persona_id: pi_lang` | `persona_id: 派狼` |
| `skills/weekly_report_writer/` | `skills/週報生成器/` |
| `avatar_id: night_wolf_001` | `avatar_id: Night-Wolf-001` |

Your persona's **display name** (the `name` field, e.g., `name: 派狼`), all body content, dialogues, sentence examples, Voice Fingerprint signature phrases — these CAN and SHOULD be in your persona's actual operating language. The system only uses folder names and `*_id` fields for identification and routing, so those must be English.

**Reserved prefixes**: This kit has two reserved prefixes. Your real listings MUST NOT use either — Portal will reject them:

- **`EXAMPLE_`**: reference example files, read-only (e.g., `EXAMPLE_pi_lang`, `EXAMPLE_social_marketing_post_ideas`) — do NOT copy folders with this prefix.
- **`YOUR_`**: blank templates designed to be copied and renamed (e.g., `YOUR_AGENT_NAME`, `YOUR_SKILL_NAME`) — after copying, you MUST rename both the folder and the `*_id` to your own English lowercase ID.

---

## Language

- English: This page
- 繁體中文: [README.md](https://github.com/illushane/llamppost-creator-kit/tree/zh-TW)
- 简体中文: [README.md](https://github.com/illushane/llamppost-creator-kit/tree/zh-CN)
- 日本語: [README.md](https://github.com/illushane/llamppost-creator-kit/tree/ja)

---

## New here? Start here

**[→ Listing Guide v1](docs/listing-ready-v1.md)**

This guide explains the three core concepts, which one to start with, and how to complete each step.

**[→ AI Prompts for writing templates](docs/ai-prompts.md)**

If you want to use Claude, ChatGPT, or another AI assistant to help you fill out templates, this file provides four ready-to-use prompts — Avatar-only / Skill-only / Persona-only / full Agent — copy and paste to use.

---

## Quick Navigation

| I want to… | Go here |
|-----------|--------|
| Understand the difference between Skill / Persona / Avatar | [Listing Guide](docs/listing-ready-v1.md) |
| Create a new Skill (standalone) | Copy `skills/YOUR_SKILL_NAME/`, see [Skill Template Docs](docs/skill-template.md) |
| Create a new Persona (standalone) | Copy `personas/YOUR_AGENT_NAME/`, see [Persona Template Docs](docs/persona-template.md) |
| Upload an Avatar image and metadata | See [Avatar Spec & Policy](docs/avatar-creation-spec.md) |
| Publish a full Agent (Persona + Skill + Avatar) | Copy `agents/YOUR_AGENT_NAME/` — bidirectional binding pre-filled |
| Use AI to help me write templates | [AI Prompts](docs/ai-prompts.md) (copy-paste ready) |
| See what a buyer gets after purchase | [Delivery Prompt](docs/delivery-prompt.md) (soul onboarding A/B/C) |
| Read the platform rules | [Platform Policy](policy/policy.en.md) |

---

## Standalone vs Agent

- **Standalone**: publish a Persona, Skill, or Avatar on its own. Best when you want to test the water or only have one piece ready.
- **Agent**: publish Persona + Skill + Avatar packaged together. Bidirectional binding is pre-filled so users get the complete character in one install. **The incubator's output aligns 1:1 with the Agent template** — drop in an Avatar and it's ready to ship.

---

## On the marketplace (Portal, not Kit files)

These happen in the Creator Portal when you publish — no Kit file changes needed:

- **Product thumbnail**: upload an optional thumbnail (PNG, 16:10 recommended) shown on the marketplace card and detail page. No upload = an auto-generated lettered placeholder.
- **Public content page**: your SKILL.md body sections render as the live content page buyers read on the detail page. Write them well.
- **Edit anytime + skill packs**: edit a published listing's content page, thumbnail, name, and description at any time, and group several published skills into a **skill pack** — all in Studio → My listings.

See the [Listing Guide](docs/listing-ready-v1.md) for details.

---

## Folder Structure

```
creator-kit/
├── docs/
│   ├── listing-ready-v1.md      # Listing guide (start here)
│   ├── ai-prompts.md            # AI prompts for writing templates
│   ├── skill-template.md        # Skill template documentation
│   ├── persona-template.md      # Persona template documentation
│   ├── delivery-prompt.md       # What buyers copy into their runtime after purchase
│   └── avatar-creation-spec.md  # Avatar spec & policy
├── personas/                                # Standalone Persona
│   ├── YOUR_AGENT_NAME/                    # Blank template — copy and rename to create your own Persona
│   │   └── persona.md
│   └── EXAMPLE_pi_lang/                    # Reference example (do NOT copy this folder name)
│       └── persona.md
├── skills/                                  # Standalone Skill
│   ├── YOUR_SKILL_NAME/                    # Blank template — copy and rename to create your own Skill
│   │   ├── SKILL.md
│   │   └── examples/
│   └── EXAMPLE_social_marketing_post_ideas/  # Reference example (do NOT copy this folder name)
│       └── SKILL.md
├── agents/                                  # Agent (Persona + Skill + Avatar in one)
│   └── YOUR_AGENT_NAME/                    # Agent template — bidirectional binding pre-filled
│       ├── README.md                       # Agent usage notes
│       ├── persona.md                      # Persona (binding points to same-folder SKILL.md)
│       ├── SKILL.md                        # Skill (binding points to same-folder persona.md)
│       └── avatar/                         # Avatar (required)
│           ├── README.md
│           └── metadata.json               # Pre-filled placeholder — drop in your avatar.png
├── policy/
│   └── policy.en.md             # Platform policy
└── assets/
    └── llamppost_webicon.svg
```

---

## License

All rights reserved.
