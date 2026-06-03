---
skill_id: YOUR_SKILL_NAME        # Change to your skill ID (must be lowercase English + underscores, e.g., social_post_ideas)
title: Your Skill Display Name   # The name users see in search results (under 40 chars, can be in any language)
version: "1.0"
category:
  - writing                       # Primary category (required, pick 1 from the list)
  # - research                    # Secondary category (optional, pick at most 1 more)
one_liner: One sentence describing what problem this skill solves for the user (under 60 chars)

languages:                        # The languages this skill actually operates in (BCP-47 codes, required)
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

script_mode: workflow_only        # workflow_only (description only) | script_spec (spec) | script_provided (script included)

compatible_personas: []           # Optional. Persona IDs this skill is bound to — leave [] if sold standalone
---

<!--
  Instructions:
  1. Copy the entire skills/YOUR_SKILL_NAME/ folder
  2. Rename the folder to your skill_id — **must be lowercase English + underscores**
     (e.g., skills/social_post_ideas/)
  3. Change the skill_id in the YAML above to match the folder name exactly
  4. Fill in the other YAML fields and remove all lines starting with #
  5. Fill in the sections below
  6. Delete this instruction block, then submit through Creator Portal

  Important:
  - skill_id and folder name **must always be English** (lowercase letters + digits + underscores)
  - YOUR_SKILL_NAME is a reserved prefix; Portal will reject listings using it
  - For full field reference, see docs/skill-template.md
-->

# {{title}}

> {{one_liner}}

---

## What this skill does

<!--
  In 3–5 sentences, explain what this skill does, who it's for, and what problem it solves.
  Focus on "what value the user gets" — no need to mention AI or models.
-->

(Describe the skill's purpose here, in 3–5 sentences)

---

## Workflow

<!--
  List 3–7 steps explaining how the skill operates.
  One sentence per step, starting with a verb.
-->

1. (Step 1)
2. (Step 2)
3. (Step 3)

---

## What User needs to provide

<!--
  List what the user should have ready before starting.
  Be specific so the user knows what to prepare.
-->

- (Required input 1)
- (Required input 2)
- (Optional input — mark as "optional")

---

## What User will receive

<!--
  List the concrete deliverables the user gets.
  The more specific the numbers and formats, the more convincing.
  "3 full drafts" is more convincing than "report content."
-->

- (Deliverable 1)
- (Deliverable 2)

---

## Known limitations

<!--
  Honestly list current limitations. This sets user expectations and lowers refund / dispute risk.
-->

- (Limitation 1)
- (Limitation 2)

---

## Script (optional)

<!--
  This section is only needed when script_mode is set to script_spec or script_provided.
  If script_mode is workflow_only, you can delete this whole section.
-->

### Goal
(What this script aims to achieve)

### Steps
1. (Script step 1)
2. (Script step 2)

### APIs / Tools used
- (API or tool name)

### Required environment variables (Secrets)
<!--
  List key names only — **never** write the actual values.
-->
- (ENV_KEY_NAME)

### Safety notes
- (Any safety constraints or risk warnings)

### Verification
- (How to confirm the script ran successfully)
