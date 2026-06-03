<!--
  Instructions:
  1. Copy the entire personas/YOUR_AGENT_NAME/ folder
  2. Rename the folder to your persona_id — **must be lowercase English + underscores**
     (e.g., personas/night_wolf_strategist/)
  3. Change the persona_id in the YAML below to match the folder name exactly
  4. Fill in the other YAML fields and remove all lines starting with #
  5. Fill in the sections below
  6. Delete this instruction block, then submit through Creator Portal

  Important:
  - persona_id and folder name **must always be English** (lowercase letters + digits + underscores)
  - YOUR_AGENT_NAME is a reserved prefix; Portal will reject listings using it
  - The display name (name), one_liner, all body content, dialogues, and sentence examples can be in any language
  - For full field reference, see docs/persona-template.md
  - For a complete example, see personas/EXAMPLE_pi_lang/persona.md
-->
---
persona_id: YOUR_AGENT_NAME       # Change to your persona ID (must be lowercase English + underscores, e.g., night_wolf_strategist)
name: Your Persona Display Name   # The name users see (can be in any language)
profession: ops                   # Pick exactly 1 (see profession list in docs/persona-template.md)
one_liner: One sentence describing this character's personality or role (under 40 chars)
version: "1.0"

languages:                        # The languages this persona actually operates in (BCP-47, required)
  - zh-TW
  # - en

# ── Pricing ───────────────────────────────────────
# base_price unit: NT$
# 0     = free listing (Hatchling trial)
# ≥100  = paid listing (set your own price, no cap)
base_price: 0

# ── The fields below will be auto-filled by Portal testing later ─
# You can leave them out for now, or fill in defaults. If filled, the platform uses
# your claim as an initial reference, but all fidelity / test labels will ultimately
# be set by Portal's automatic test results.
# deprecated (manual fill) → will be overwritten by Portal cross-model QA
# tested_runtimes:
#   - claude
# tested_models:
#   - claude-opus-4-6
# test_level: smoke               # smoke | qa | prod_ready
# model_fidelity:
#   claude-opus-4-6: canon        # canon | compatible | lite | untested

bundled_skills: []                # Skills bundled with this persona — leave [] if standalone

allowed_skill_categories:         # Skill categories this persona pairs well with (multi-select)
  - ops
---

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
