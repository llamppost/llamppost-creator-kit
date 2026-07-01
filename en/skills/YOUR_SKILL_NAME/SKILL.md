---
# ── Runtime identity + pricing (these stay in frontmatter) ─────────
# Everything the *marketplace listing* displays — title, one_liner, category,
# languages, version, script_mode, listing_description, cover/banner — now lives
# in metadata.json (sibling file). This SKILL.md is your runtime skill body.
skill_id: YOUR_SKILL_NAME        # Your skill ID — lowercase English + underscores (e.g. social_post_ideas). MUST equal the folder name.

# base_price unit: NT$  ·  0 = free listing (Hatchling trial)  ·  ≥100 = paid (set your own price, no cap)
base_price: 0
---

<!--
  Instructions:
  1. Copy the entire skills/YOUR_SKILL_NAME/ folder
  2. Rename the folder to your skill_id — **must be lowercase English + underscores**
     (e.g., skills/social_post_ideas/)
  3. Change the skill_id above to match the folder name exactly
  4. Fill in the LISTING fields in metadata.json — title / one_liner / category /
     languages / version / script_mode / listing_description, plus the listing.* block.
     Then drop cover-<skill_id>.png (1:1) and banner-<skill_id>.png (16:10) into assets/.
  5. Fill in the body sections below — they are your runtime skill instructions, and
     also render as the public content page. (metadata.json's listing.* can override
     the "What this skill does" / "receive" / "limitations" text if you set it.)
  6. Delete this instruction block, then submit through Creator Portal

  Important:
  - skill_id and folder name **must always be English** (lowercase letters + digits + underscores) and must match exactly
  - YOUR_SKILL_NAME is a reserved prefix; Portal will reject listings using it
  - Listing fields live in metadata.json, not here — full field reference in docs/skill-template.md
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
  This section is only needed when script_mode (set in metadata.json) is script_spec
  or script_provided. If script_mode is workflow_only, you can delete this whole section.
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
