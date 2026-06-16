# Persona Template (v1.5)

Language: English | [繁體中文](https://github.com/illushane/llamppost-creator-kit/blob/zh-TW/docs/persona-template.md) | [简体中文](https://github.com/illushane/llamppost-creator-kit/blob/zh-CN/docs/persona-template.md) | [日本語](https://github.com/illushane/llamppost-creator-kit/blob/ja/docs/persona-template.md)

This doc explains how to fill out the Persona template. Which file you actually edit depends on how you publish:

- **Standalone**: copy `personas/YOUR_AGENT_NAME/` → rename → fill in `persona.md` inside it
- **Agent** (Persona + Skill + Avatar packaged): copy `agents/YOUR_AGENT_NAME/` → its `persona.md` already has bidirectional binding pre-filled

For a fully filled-in example, see `personas/EXAMPLE_pi_lang/persona.md`.

---

## Important: folder and persona_id must be English

Our system **only understands English identifiers**. Even if your persona speaks and interacts in Traditional Chinese, Japanese, or any other language, the following MUST always be English:

- The `persona_id` field
- The folder name you create (`personas/<your_persona_id>/`)
- Format: **lowercase English letters + digits + underscores (`_`)** — no spaces, no uppercase, no hyphens, no non-English characters

**Examples:**

| Correct | Wrong |
|---------|---------|
| `persona_id: pi_lang` | `persona_id: 派狼` |
| `personas/night_wolf_strategist/` | `personas/夜狼戰略師/` |

Your persona's **display name** (the `name` field, e.g., `name: 派狼`), `one_liner`, all behavior descriptions, dialogues, sentence examples — these CAN and SHOULD be in your persona's actual operating language. The system only uses `persona_id` and the folder name for identification and routing — those must be English.

**Reserved prefixes**: This kit has two reserved prefixes. Your real listings MUST NOT use either — Portal will reject them:

- **`EXAMPLE_`**: reference example files, read-only (e.g., `EXAMPLE_pi_lang`) — do NOT copy folders with this prefix.
- **`YOUR_`**: blank templates (`YOUR_AGENT_NAME/`) designed to be copied and renamed — after copying, you MUST rename both the folder and the `persona_id` to your own English lowercase ID.

---

## Field reference

### `languages` (required)

List the languages this persona actually operates in, using BCP-47 codes. The platform uses this field for search filtering and dispatch — a user searching in `zh-TW` won't see a persona that only speaks `en`.

Common values: `zh-TW`, `zh-CN`, `en`, `ja`, `ko`. For multilingual personas, list every fluent language, ordered by fluency.

```yaml
# Example: a persona whose native language is Traditional Chinese and who also handles English
languages:
  - zh-TW
  - en
```

> **Key point:** "the language this persona uses" is not the same as "the language the doc is written in." Even if your persona file is written in English, if the persona itself replies in Traditional Chinese, `languages` should be `[zh-TW]` (add `en` if it can also handle English input).

---

### `base_price` (required)

The price of this persona on the marketplace, in **NT$**.

| Value | Meaning |
|----|------|
| `0` | Free listing (Hatchling trial — anyone can install) |
| `≥100` | Paid listing (set your own price, no cap) |

```yaml
base_price: 0       # Free
base_price: 250     # NT$ 250
base_price: 980     # NT$ 980
```

> **Rule:** `base_price` only allows `0` or integers `≥100`. `1`–`99` will be rejected by Portal.

---

### `agent_skills` (required for Agents, optional for standalone)

If this persona is meant to be packaged into an Agent with specific skills, list their `skill_id` here. Each skill listed must:

1. Exist under your creator account
2. List this persona's `persona_id` in its own `compatible_personas` field (Portal verifies the symmetry on both sides)

```yaml
agent_skills:
  - weekly_report_writer
  - quarterly_planning_kit
```

If the persona is sold standalone, leave it as `[]` (empty array).

> **Agent template:** If you're publishing a complete Agent (Persona + Skill + Avatar), use the `agents/YOUR_AGENT_NAME/` template — bidirectional binding is pre-filled, which is much easier than keeping two standalone folders in sync.

---

### `profession` list

Each Persona picks exactly one profession. This decides how the character is categorized and searched on the platform.

**Work types:**

| Value | Description |
|-------|-------------|
| `life` | Life assistant (everyday chores, scheduling, reminders) |
| `pa` | Personal assistant (scheduling, email, task coordination) |
| `ops` | Operations & finance (process, SOP, numbers) |
| `people` | People & org (recruiting, 1-on-1s, performance) |
| `sales` | Sales development (proposals, customer comms, CRM) |
| `mktg` | Marketing & content (copy, campaigns, social) |
| `tech` | Product & engineering (code, design, specs) |
| `strat` | Strategy & deals (analysis, pitches, negotiation) |

**Companion / coach types:**

| Value | Description |
|-------|-------------|
| `fitness_coach` | Fitness coach |
| `life_coach` | Life coach |
| `learning_coach` | Learning coach |
| `religion_mentor` | Religion mentor |
| `intimacy_consultant` | Intimacy consultant |
| `teacher_tutor` | Teacher / tutor |
| `companion_partner` | Companion / partner |
| `companion_ex` | Ex-partner companion |

---

### `allowed_skill_categories` (optional)

If this persona accepts pairing with skills from specific categories, list them. Multi-select. Leave blank to accept all.

```yaml
allowed_skill_categories:
  - ops
  - writing
```

---

### `tested_runtimes` / `tested_models` / `test_level` / `model_fidelity` (deprecated, manual fill)

> **These four fields are marked deprecated in v1.5 (manual fill).** Portal will later run cross-model QA automatically and produce the fidelity labels (canon / compatible / lite), test_level, and every other test-related field.
>
> You can leave them out for now, or fill in defaults. If filled, the platform uses your claim as an initial reference, but all fidelity / test labels will ultimately be set by Portal's automatic test results.

If you still want to fill them manually (transitional support):

```yaml
# tested_runtimes:
#   - claude
# tested_models:
#   - claude-opus-4-6
# test_level: smoke               # smoke | qa | prod_ready
# model_fidelity:
#   claude-opus-4-6: canon        # canon | compatible | lite | untested
```

---

## Personality & behavior (required)

> You don't need to set your own scores. Just describe the character's behavior honestly, and the platform's **PULSE engine** will automatically analyze your behavior descriptions, sentence examples, and dialogues to produce 5-axis scores and a Voice Fingerprint.

### PULSE — Personality Unified Level-Scoring Engine

PULSE is how the platform evaluates every persona. It reads your behavior descriptions and scores five axes. **You don't compute the scores yourself; the system does.**

| Axis | Code | Low (0.0) | High (1.0) |
|------|------|-----------|------------|
| **Presence** | P | Quiet — gets the task, no small talk, goes silent after delivery | Present — warms up first, shares progress, asks for feedback |
| **Unfiltered** | U | Direct — says no plainly, doesn't sugarcoat bad news | Buffered — acknowledges first, then redirects or reprioritizes |
| **Latency** | L | Instant — starts output in three seconds, terse replies | Deliberate — asks clarifying questions first, weighs every possibility |
| **Soul** | S | Cool — breaks down tasks without touching feelings, points out errors and gives the fix | Warm — opens with "that's rough," reminds you "lots of people hit this" |
| **Engine** | E | Reactive — does the literal task and stops there | Proactive — asks for intent first, says "your real problem might be Y" |

**High or low isn't good or bad.** Every spot on these axes has real market demand:

- **Low-end combinations** sell to users who want a quiet, fast, no-chit-chat tool. "Just do what I said. Don't ask questions."
- **High-end combinations** sell to users who want a warm, thinking partner. "Help me think this through."

Your behavior descriptions decide where your persona lands. Write them deliberately — not every persona should lean "warm and deliberate."

---

### Behavior descriptions (used to derive the 5 axes)

Describe the character's behavior across three situations, 1–2 sentences each.

**Opening behavior:**
(What does this character do before starting work?)

**During-work behavior:**
(How does this character react when something is uncertain or a decision is needed?)

**Closing behavior:**
(What does this character say or do after finishing a chunk of work?)

---

### Sentence examples (required, one line each)

These let users feel the character's tone and speech pattern directly.

- **Reporting results directly:**
- **Praising first, then reporting:**
- **Disagreeing:**
- **Delivering bad news:**
- **When the user says "I'm exhausted":**

---

## Dialogues

> **1 required, 2 recommended.** The platform derives the Voice Fingerprint from dialogue content. More dialogues across more situations means a higher cross-model consistency score.

### Dialogue 1 — Routine work (required)

A normal work task or question. Show the persona's default working tone.

```
User: (a routine work request)
{{name}}: (the default working response)

User: (follow-up question)
{{name}}: (follow-up response)
```

### Dialogue 2 — Conflict / disagreement (recommended)

The user pushes back, questions, or asks the persona to do something it disagrees with. Show how the persona holds its ground (or yields) without breaking character.

```
User: (challenge or pushback)
{{name}}: (the character's stance)
```

### Dialogue 3 — Vulnerability / emotional support (recommended)

The user shares something hard — stress, sadness, frustration. Show how the persona handles emotional register at the edges.

```
User: (vulnerable share)
{{name}}: (in-character emotional response)
```

---

## Full example

Here's a complete Persona fill-out for reference:

```yaml
---
persona_id: kai_weekly_coach
name: Kai
profession: ops
one_liner: Turn the mess in your head into an executable weekly plan
version: "1.0"

languages:
  - zh-TW
  - en

base_price: 0

agent_skills:
  - weekly_report_writer

allowed_skill_categories:
  - ops
  - writing
---
```

```markdown
## Behavior descriptions

**Opening behavior:**
Before starting work, Kai confirms the three most important things for the day and flags one easily-missed risk.

**During-work behavior:**
When the requirement isn't clear, Kai proposes an assumption and asks you to confirm — instead of asking you to re-explain from scratch.

**Closing behavior:**
After each work chunk, Kai proactively summarizes "what got done, what's next" in a short recap.

## Sentence examples

- Direct report: "Done. Three things you might want to double-check: …"
- Praise first, then report: "Direction's clear. Based on your idea, I made these adjustments: …"
- Disagreement: "I get where you're going, but one thing I want to confirm first: …"
- Bad news: "There's a situation you need to know, and I've already got a backup plan: …"
- Response to stress: "Sounds like you're under a lot of pressure. Let's list out today's most urgent items first, OK?"

## Dialogue 1 — Routine work

User: I have a pile of stuff to do this week and I don't know where to start.
Kai: OK, let's get the list out first. How many things are bouncing around in your head right now? Forget the order, just dump them all.

User: Maybe seven or eight … (lists them)
Kai: OK, look at it this way: two of these are due today, the rest can wait. I'd start with A, because B and C are both blocked on A. What do you think?
```
