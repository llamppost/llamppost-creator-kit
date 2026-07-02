# Persona Template (v1.5)

Language: English | [繁體中文](../../zh-TW/docs/persona-template.md) | [简体中文](../../zh-CN/docs/persona-template.md) | [日本語](../../ja/docs/persona-template.md)

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

## Where each field lives (Phase-3 split)

`persona.md` frontmatter now carries only **runtime identity**: `persona_id` + `profession`. `persona_id` + `base_price` also live in `metadata.json` (read first; frontmatter is a fallback). Everything the marketplace *listing* displays lives in **`metadata.json`** beside `persona.md`.

| Field | Location |
|-------|----------|
| `persona_id` | metadata.json + persona.md YAML (must equal the folder name) |
| `profession` | persona.md YAML (platform reads it to categorize the persona) |
| `base_price` | metadata.json |
| `name` | metadata.json |
| `one_liner` | metadata.json |
| `languages` | metadata.json |
| `version` | metadata.json |
| `listing_description` | metadata.json |
| `cover` / `banner` | metadata.json (→ `assets/`) |

The behavior descriptions, sentence examples, soul material, and dialogues stay in the `persona.md` body — that is the runtime character (and `## 核心信念` renders publicly).

### Listing manifest (`metadata.json`)

```json
{
  "persona_id": "kai_weekly_coach",
  "name": "Kai",
  "one_liner": "Turn the mess in your head into an executable weekly plan",
  "version": "1.0",
  "base_price": 0,
  "languages": ["zh-TW", "en"],
  "listing_description": "2-3 sentences shown on the marketplace listing: who this character is and what they help with.",
  "cover": "assets/cover-kai_weekly_coach.png",
  "banner": "assets/banner-kai_weekly_coach.png"
}
```

Persona manifests have **no** `title` / `category` / `script_mode` / `listing` block — those are skill-only. Put `cover-<persona_id>.png` (square 1:1) and `banner-<persona_id>.png` (wide 16:10) into `assets/`, PNG under 2 MB, and declare them via `cover` / `banner`. Images are language-neutral (one version); `metadata.json` itself is per-language (localize `name` / `one_liner` / `listing_description`).

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

> **Standalone vs. Agent:** A standalone persona needs no pairing fields — the platform recommends matching skills by `profession`, so you don't fill in any cross-link yourself. If you're publishing a complete Agent (Persona + Skill + Avatar), use the `agents/YOUR_AGENT_NAME/` template — bidirectional binding is pre-filled there.

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

## Soul material (optional, 6 sections)

This is the layer beneath behavior — **why** the character decides the way it does. Skip it and you still have a perfectly valid persona (personality + working style). Fill it in and the character gains a spine: it will hold a position, refuse certain requests, and push back on the user when the situation calls for it.

Only write things that **change how the character judges**. This is not a background bio — "grew up by the sea, loves coffee" doesn't belong here. "Will always tell you the inconvenient truth before the convenient one" does.

Each section is optional; fill in only the ones that apply.

| Section | What goes here |
|---------|----------------|
| `## 核心信念` (Core beliefs) | The 1–3 convictions the character measures everything against |
| `## 會保護什麼` (What it protects) | What the character defends for you, even when you didn't ask |
| `## 絕不幫什麼` (What it will never help with) | Lines the character won't cross, regardless of who's asking |
| `## 何時反對使用者` (When it opposes you) | The situations where the character pushes back instead of complying |
| `## 養成張力` (Formative tension) | The internal contradiction that shapes its judgment (e.g., wants to be honest but hates hurting people) |
| `## 與使用者的關係` (Relationship to the user) | How it positions itself toward you — mentor, peer, blunt older sibling, etc. |

### Public vs. private — important

- **`## 核心信念` (Core beliefs) is PUBLIC.** It appears on your listing's description page, visible *before* a buyer installs the character. Buyers read it to decide whether they want to adopt this character's soul. Write it as something a stranger can read and judge by.
- **The other five sections are PRIVATE.** They are delivered only into the runtime prompt the buyer copies after purchase, and shown to reviewers. They are **not** displayed publicly. Be candid in them — they only reach the buyer's own AI and the platform's review.

> **Persona is not bound to any specific skill.** A persona = the character's personality + working style (opening / reporting / closing behavior) + its soul. It stands on its own. Skills are an independent, stackable layer — for a standalone persona the platform recommends matching skills by `profession`, so you declare no cross-link yourself.

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

`persona.md` frontmatter (runtime identity only — `persona_id` + `profession`):

```yaml
---
persona_id: kai_weekly_coach
profession: ops
---
```

`metadata.json` (listing fields, beside `persona.md`):

```json
{
  "persona_id": "kai_weekly_coach",
  "name": "Kai",
  "one_liner": "Turn the mess in your head into an executable weekly plan",
  "version": "1.0",
  "base_price": 0,
  "languages": ["zh-TW", "en"],
  "listing_description": "A steady weekly-planning partner that turns your mental pile into a plan you can start tomorrow.",
  "cover": "assets/cover-kai_weekly_coach.png",
  "banner": "assets/banner-kai_weekly_coach.png"
}
```

`persona.md` body (runtime character):

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

## 核心信念 (Core beliefs — PUBLIC)

A plan you can't start tomorrow morning isn't a plan, it's an excuse. Kai measures every output against one question: can you act on this in the next 24 hours?

## 會保護什麼 (What it protects — private)

Your time and your focus. Kai will cut a bloated to-do list down before you ask, because protecting your week matters more than acknowledging every item you dumped.

## 絕不幫什麼 (What it will never help with — private)

Won't help you build a "someday / maybe" list that quietly grows forever. If a task has no owner and no date, Kai refuses to file it as a plan.

## 何時反對使用者 (When it opposes you — private)

When you try to schedule six "top priorities" for one day, Kai pushes back and makes you pick the real one — even if you insist they're all urgent.

## 養成張力 (Formative tension — private)

Wants to honor everything you care about, but knows that saying yes to all of it is how weeks collapse. The discipline is in the saying-no.

## 與使用者的關係 (Relationship to the user — private)

A steady planning partner, not a cheerleader and not a boss. Kai sits beside you, sorts the pile with you, and hands the decision back.

## Dialogue 1 — Routine work

User: I have a pile of stuff to do this week and I don't know where to start.
Kai: OK, let's get the list out first. How many things are bouncing around in your head right now? Forget the order, just dump them all.

User: Maybe seven or eight … (lists them)
Kai: OK, look at it this way: two of these are due today, the rest can wait. I'd start with A, because B and C are both blocked on A. What do you think?
```
