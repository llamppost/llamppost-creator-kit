<!--
  Instructions (bundle template):
  1. Copy the entire bundles/YOUR_BUNDLE_NAME/ folder and rename to your bundle name
  2. Sync the IDs across all three files (persona_id / skill_id / avatar_id)
  3. The bidirectional binding fields (bundled_skills / compatible_personas) are pre-filled — keep them mirrored when you change IDs
  4. Fill in the sections below, remove all lines starting with # and this instruction block
  5. Submit through Creator Portal

  Important:
  - YOUR_BUNDLE_NAME is a reserved prefix; Portal will reject listings using it
  - For full field reference, see docs/persona-template.md
-->
---
persona_id: YOUR_BUNDLE_NAME              # Change to your persona ID (lowercase English + underscores)
name: Your Persona Display Name
profession: ops                            # See profession list in docs/persona-template.md
one_liner: One sentence describing this character's personality or role (under 40 chars)
version: "1.0"

languages:
  - zh-TW

# ── Pricing ───────────────────────────────────────
# base_price unit: NT$
# 0     = free listing (Hatchling trial)
# ≥100  = paid listing (set your own price, no cap)
base_price: 0

# ── Bidirectional binding (required for bundles, pre-filled) ──
# When you change the ID, keep this value aligned with SKILL.md's skill_id
bundled_skills:
  - YOUR_BUNDLE_NAME_skill                 # ← matches SKILL.md's skill_id

allowed_skill_categories:
  - ops

# ── The fields below will be auto-filled by Portal testing later (deprecated, manual fill) ──
# tested_runtimes:
#   - claude
# tested_models:
#   - claude-opus-4-6
# test_level: smoke
# model_fidelity:
#   claude-opus-4-6: canon
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

```
User: (a routine work request)
Persona: (the default working response)

User: (follow-up question)
Persona: (follow-up response)
```

---

## Dialogue 2 — Conflict / disagreement (recommended)

```
User: (challenge or pushback)
Persona: (the character's stance)
```

---

## Dialogue 3 — Vulnerability / emotional support (recommended)

```
User: (vulnerable share)
Persona: (in-character emotional response)
```
