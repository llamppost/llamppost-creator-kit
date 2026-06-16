---
skill_id: YOUR_AGENT_NAME_skill          # Change to your skill ID (suggested: agent name + _skill suffix)
title: Your Skill Display Name
version: "1.0"
category:
  - writing
  # - research
one_liner: One sentence describing what problem this skill solves for the user (under 60 chars)

languages:
  - zh-TW

# ── Pricing ───────────────────────────────────────
# base_price unit: NT$
# 0     = free listing (Hatchling trial)
# ≥100  = paid listing (set your own price, no cap)
base_price: 0

# ── Bidirectional binding (required for Agents, pre-filled) ──
# When you change the ID, keep this value aligned with persona.md's persona_id
compatible_personas:
  - YOUR_AGENT_NAME                       # ← matches persona.md's persona_id

script_mode: workflow_only

# ── The fields below will be auto-filled by Portal testing later (deprecated, manual fill) ──
# tested_runtimes:
#   - claude
# tested_models:
#   - claude-opus-4-6
# test_level: smoke
---

<!--
  Instructions (Agent template):
  - This SKILL.md is pre-filled with the bidirectional binding to the same-folder persona.md
  - When you change skill_id / persona_id, keep agent_skills and compatible_personas in sync on both sides
  - For full field reference, see docs/skill-template.md
-->

# {{title}}

> {{one_liner}}

---

## What this skill does

(Describe the skill's purpose here, in 3–5 sentences)

---

## Workflow

1. (Step 1)
2. (Step 2)
3. (Step 3)

---

## What User needs to provide

- (Required input 1)
- (Required input 2)
- (Optional input — mark as "optional")

---

## What User will receive

- (Deliverable 1)
- (Deliverable 2)

---

## Known limitations

- (Limitation 1)
- (Limitation 2)
