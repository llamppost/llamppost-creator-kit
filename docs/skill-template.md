# Skill Template Docs (v1.5)

Language: English | [繁體中文](https://github.com/illushane/llamppost-creator-kit/blob/zh-TW/docs/skill-template.md) | [简体中文](https://github.com/illushane/llamppost-creator-kit/blob/zh-CN/docs/skill-template.md) | [日本語](https://github.com/illushane/llamppost-creator-kit/blob/ja/docs/skill-template.md)

This doc explains how to fill out the Skill template. Which file you actually edit depends on how you publish:

- **Standalone**: copy `skills/YOUR_SKILL_NAME/` → rename → fill in `SKILL.md` inside it
- **Bundle** (Persona + Skill + Avatar packaged): copy `bundles/YOUR_BUNDLE_NAME/` → its `SKILL.md` already has bidirectional binding pre-filled

For a fully filled-in example, see `skills/EXAMPLE_social_marketing_post_ideas/`.

---

## Important: folder and skill_id must be English

Our system **only understands English identifiers**. Even if you write your skill content in Traditional Chinese, Japanese, or any other language (`What this skill does`, `Workflow`, `Known limitations`, etc.), the following MUST always be English:

- The `skill_id` field
- The folder name you create (`skills/<your_skill_id>/`)
- Format: **lowercase English letters + digits + underscores (`_`)** — no spaces, no uppercase, no hyphens, no non-English characters

**Examples:**

| Correct | Wrong |
|---------|---------|
| `skill_id: weekly_report_writer` | `skill_id: 週報生成器` |
| `skills/code_review_zh/` | `skills/Code-Review-中文/` |

Your skill's `title` (display name, e.g., `title: 週報自動生成器`), `one_liner`, and all body content CAN and SHOULD be in your target users' language. The system only uses `skill_id` and the folder name for identification and routing — those must be English.

**Reserved prefixes**: This kit has two reserved prefixes. Your real listings MUST NOT use either — Portal will reject them:

- **`EXAMPLE_`**: reference example files, read-only (e.g., `EXAMPLE_social_marketing_post_ideas`) — do NOT copy folders with this prefix.
- **`YOUR_`**: blank templates (`YOUR_SKILL_NAME/`, `YOUR_BUNDLE_NAME/`) designed to be copied and renamed — after copying, you MUST rename both the folder and the `skill_id` to your own English lowercase ID.

---

## Quick reference

| Field | Location | Required | Description |
|-------|----------|----------|-------------|
| `skill_id` | YAML | Yes | Unique ID, lowercase + underscores |
| `title` | YAML | Yes | Display name, under 40 chars |
| `version` | YAML | Yes | Start at `"1.0"` |
| `category` | YAML | Yes | Up to 2 categories |
| `one_liner` | YAML | Yes | One-sentence pitch, under 60 chars |
| `languages` | YAML | Yes | BCP-47 codes for the skill's operating language |
| `base_price` | YAML | Yes | NT$, either `0` (free) or `≥100` |
| `script_mode` | YAML | Yes | See details below |
| `compatible_personas` | YAML | Required for bundles, optional for standalone | Bound Persona ID |
| What this skill does | Body | Yes | 3–5 sentence description |
| Workflow | Body | Yes | 3–7 steps |
| What User needs to provide | Body | Yes | Bullet list |
| What User will receive | Body | Yes | Bullet list |
| Known limitations | Body | Yes | Bullet list |
| Script | Body | Optional | Only when script_spec / script_provided |
| `tested_runtimes` / `tested_models` / `test_level` | YAML | deprecated | Portal will auto-fill via testing later |

---

## Field-by-field

### `skill_id`

Your skill's unique identifier in the system.

Rules:
- Lowercase English letters, digits, and underscores (`_`) only
- No spaces or special characters
- Cannot be changed after publishing (affects existing subscribers)

```yaml
# Good
skill_id: social_post_ideas
skill_id: weekly_report_writer
skill_id: code_review_zh

# Bad
skill_id: Social Post Ideas   # uppercase + spaces
skill_id: my-skill            # uses a hyphen
```

---

### `title`

The name users see in search results and on the product page.

- Under 40 chars
- Make it obvious what it does — don't be clever
- Can include the language or target audience

```yaml
# Good
title: Social Marketing: Post Ideas Pack
title: Weekly Report Auto-Generator
title: Code Review Assistant (Traditional Chinese)
```

---

### `category`

Pick up to 2 from the list below. The first is the primary category, the second is secondary.

Available categories:

| Category ID | Description |
|------------|-------------|
| `writing` | Writing, drafting, editing |
| `research` | Information gathering, organizing, analysis |
| `coding` | Development, debugging, code review |
| `data` | Data processing, charts, reports |
| `strategy` | Strategic planning, proposals, decks |
| `ops` | Process automation, SOPs, scheduling |
| `sales` | Sales development, proposals, customer comms |
| `marketing` | Marketing campaigns, ad copy, SEO |
| `design` | Visual direction, design specs, UI/UX |
| `learning` | Teaching, explanation, knowledge synthesis |

```yaml
# Good (up to 2)
category:
  - marketing
  - writing
```

---

### `one_liner`

The first sentence users see in search results. This decides whether they click through.

- Under 60 chars
- Write "what the user can achieve," not "what this tool is"
- Avoid vague words like "AI" or "advanced model"

```yaml
# Good
one_liner: Input brand info, instantly get 20 on-brand post ideas with opening hooks

# Bad
one_liner: A smart, AI-powered social post generator skill
```

---

### `languages`

List the languages this skill actually operates in, using BCP-47 codes. The platform uses this field for search filtering and dispatch — a user searching in `zh-TW` won't see a skill that only outputs `en`.

```yaml
languages:
  - zh-TW
  - en
```

> **Key point:** "the language the skill's output uses" is not the same as "the language the doc is written in." Always declare what language the *output* will be.

---

### `base_price` (required)

The price of this skill on the marketplace, in **NT$**.

| Value | Meaning |
|----|------|
| `0` | Free listing (Hatchling trial — anyone can install) |
| `≥100` | Paid listing (set your own price, no cap) |

```yaml
base_price: 0       # Free
base_price: 180     # NT$ 180
```

> **Rule:** `base_price` only allows `0` or integers `≥100`. `1`–`99` will be rejected by Portal.

---

### `compatible_personas` (required for bundles, optional for standalone)

If this skill is meant to be bundled with a specific Persona, list the `persona_id` it pairs with here. Portal verifies that each persona's `bundled_skills` field also lists this skill — both sides must match.

```yaml
compatible_personas:
  - kai_weekly_coach
```

If this skill is sold standalone, the field can be omitted or set to `[]`.

> **Bundle template:** If you're publishing a complete bundle (Persona + Skill + Avatar), use the `bundles/YOUR_BUNDLE_NAME/` template — bidirectional binding is pre-filled, which is much easier than keeping two standalone folders in sync.

---

### `script_mode`

Whether this skill ships with an executable script:

| Value | Description |
|-------|-------------|
| `workflow_only` | Workflow description only, no script |
| `script_spec` | Script specification (implemented by platform or user) |
| `script_provided` | Executable script file included |

For most skills, start with `workflow_only`.

---

### `tested_runtimes` / `tested_models` / `test_level` (deprecated, manual fill)

> **These three fields are marked deprecated in v1.5 (manual fill).** Portal will later run cross-model QA automatically and produce test_level, compatible model list, and every other test-related field.
>
> You can leave them out for now, or fill in defaults. If filled, the platform uses your claim as an initial reference, but all test labels will ultimately be set by Portal's automatic test results.

If you still want to fill them manually (transitional support):

```yaml
# tested_runtimes:
#   - claude                       # claude | claude_code | gpt | codex |
#                                  # gemini | grok | kimi | llama | deepseek | seeddance
# tested_models:
#   - claude-opus-4-6
# test_level: smoke                # smoke | qa | prod_ready
```

---

## Filling in the body

### "What this skill does"

In 3–5 sentences, describe:
1. The skill's core function
2. Who it's best for
3. What problem it solves and what value it provides

No need to mention AI or technical details.

---

### "Workflow"

List 3–7 steps explaining how the skill operates. One sentence each, starting with a verb.

```markdown
1. Ask for the user's brand info and target platform
2. Confirm post tone and content constraints
3. Generate 20 post ideas grouped by angle
4. If requested, produce 3 ready-to-publish full drafts
```

---

### "What User needs to provide" and "What User will receive"

**What's needed:** List what the user should have ready before starting. Mark optional items clearly.

**What they get:** Use numbers and formats to describe the concrete output. "20 ideas" is far more convincing than "lots of ideas."

---

### "Known limitations"

Honestly list current limitations. This protects both you and the user.

Common limitation types:
- Language support (only tested in Chinese / English)
- Input length limits
- Situations the skill doesn't fit

---

## Full example

Here's a complete Skill fill-out for reference:

```yaml
---
skill_id: social_post_ideas
title: Social Marketing: Post Ideas Pack
version: "1.0"
category:
  - marketing
  - writing
one_liner: Input brand info, instantly get 20 on-brand post ideas with opening hooks

languages:
  - zh-TW
  - en

base_price: 0

script_mode: workflow_only

compatible_personas: []
---
```

```markdown
# Social Marketing: Post Ideas Pack

> Input brand info, instantly get 20 on-brand post ideas with opening hooks

---

## What this skill does

Helps marketers quickly generate on-brand social post ideas with eye-catching hooks and multiple creative angles.
Perfect for solo entrepreneurs and small marketing teams — people who need frequent content but often run dry on ideas.
Input your brand info and goals, and get 20 ready-to-use post directions in minutes.

---

## Workflow

1. Ask for brand name, product/service overview, and target platform (Instagram / LinkedIn / X, etc.)
2. Confirm post goals and content constraints (must-include messaging, competitors to avoid mentioning, etc.)
3. Generate 20 post ideas grouped by angle (each with an opening hook + development direction)
4. If requested, provide 3 ready-to-publish full post drafts

---

## What User needs to provide

- Brand name and a short intro (2–3 sentences)
- Target audience description
- Target platform(s) (multi-select)
- Post tone (professional / casual / humorous / inspirational, etc.)
- Keywords/topics to include or avoid (optional)

---

## What User will receive

- 20 post ideas (each with: opening hook + development angle)
- (Optional) 3 ready-to-publish full post drafts

---

## Known limitations

- Draft quality depends on how detailed the user's brand examples are
- No guarantee all ideas align with a specific platform's current algorithm preferences
```
