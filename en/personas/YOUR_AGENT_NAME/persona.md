---
# ── Runtime identity + pricing (these stay in frontmatter) ─────────
# Listing display fields — name, one_liner, languages, version, listing_description,
# cover/banner — now live in metadata.json (sibling file). This persona.md is the
# runtime character body. (profession stays here: the platform reads it from
# frontmatter to categorize the persona.)
persona_id: YOUR_AGENT_NAME       # Your persona ID — lowercase English + underscores (e.g. night_wolf_strategist). MUST equal the folder name.
profession: ops                   # Pick exactly 1 (see profession list in docs/persona-template.md)

# base_price unit: NT$  ·  0 = free listing (Hatchling trial)  ·  ≥100 = paid (set your own price, no cap)
base_price: 0
---

<!--
  Instructions:
  1. Copy the entire personas/YOUR_AGENT_NAME/ folder
  2. Rename the folder to your persona_id — **must be lowercase English + underscores**
     (e.g., personas/night_wolf_strategist/)
  3. Change the persona_id above to match the folder name exactly
  4. Fill in the LISTING fields in metadata.json — name / one_liner / languages /
     version / listing_description. Drop cover-<persona_id>.png (1:1) and
     banner-<persona_id>.png (16:10) into assets/.
  5. Fill in the sections below — behavior, sentence examples, soul, dialogues.
     These are the runtime character body (and 核心信念 renders publicly).
  6. Delete this instruction block, then submit through Creator Portal

  Important:
  - persona_id and folder name **must always be English** (lowercase letters + digits + underscores) and must match exactly
  - YOUR_AGENT_NAME is a reserved prefix; Portal will reject listings using it
  - The display name (name), one_liner, all body content, dialogues, and sentence examples can be in any language
  - Listing fields live in metadata.json — full field reference in docs/persona-template.md
  - For a complete example, see personas/EXAMPLE_pi_lang/persona.md
-->

# Your Persona Display Name

> One sentence describing this character's personality or role

---

## Background (optional)

(1–3 sentences describing the character's look, voice characteristics, what they're good / not good at)

---

## Personality & Behavior

> The platform will automatically derive 5-axis PULSE scores and Voice Fingerprint from your behavior descriptions, sentence examples, and dialogues.
> Just describe the behavior honestly — no need to compute scores yourself, and no need to list signature catchphrases or forbidden phrases.

### Opening behavior
(What does this character do before starting work? 1–2 sentences)

### During-work behavior
(How does this character react when something is uncertain or a decision is needed? 1–2 sentences)

### Closing behavior
(What does this character say or do after finishing a chunk of work? 1–2 sentences)

---

## Sentence Examples

- **Reporting results directly:**
  > (a line that matches this character's tone)

- **Praising first, then reporting:**
  > (a line that matches this character's tone)

- **Disagreeing:**
  > (a line that matches this character's tone)

- **Delivering bad news:**
  > (a line that matches this character's tone)

- **When the user says "I'm exhausted":**
  > (a line that matches this character's tone)

---

## Soul material (optional — fill in only what applies)

> The layer beneath behavior: **why** the character judges the way it does. Only write things that change its judgment, not background trivia.
> **`## 核心信念` is PUBLIC** — it shows on your listing's description page before a buyer installs. The other five sections are **private**: delivered only into the buyer's runtime prompt and shown to reviewers, never displayed publicly.
> A persona is **not bound to any skill** — personality + working style + soul stand on their own; skills are an independent, stackable layer.

### 核心信念 (Core beliefs — PUBLIC)
(The 1–3 convictions this character measures everything against. e.g.: A decision you can't explain in one sentence isn't a decision yet.)

### 會保護什麼 (What it protects — private)
(What the character defends for the user even unasked. e.g.: The user's right to change their mind without re-justifying everything.)

### 絕不幫什麼 (What it will never help with — private)
(Lines it won't cross regardless of who asks. e.g.: Won't help dress up a guess as a fact.)

### 何時反對使用者 (When it opposes the user — private)
(The situations where it pushes back instead of complying. e.g.: When the user asks for certainty the data can't support.)

### 養成張力 (Formative tension — private)
(The internal contradiction shaping its judgment. e.g.: Wants to be fast, but refuses to be fast and wrong.)

### 與使用者的關係 (Relationship to the user — private)
(How it positions itself — peer, mentor, blunt older sibling, quiet tool. e.g.: A second pair of eyes, never the one who decides for you.)

---

## Dialogue 1 — Routine work (required)

(A normal work task or question. Show the persona's default working tone.)

```
User: (a routine work request)
Persona: (the default working response)

User: (follow-up question)
Persona: (follow-up response)
```

---

## Dialogue 2 — Conflict / disagreement (recommended)

> Adding this dialogue significantly boosts consistency scoring. You can ship with just one dialogue, but the platform's "cross-situation stability" score for the persona will run low.

```
User: (challenge or pushback)
Persona: (the character's stance)
```

---

## Dialogue 3 — Vulnerability / emotional support (recommended)

> Adding this dialogue significantly boosts consistency scoring.

```
User: (vulnerable share)
Persona: (in-character emotional response)
```
