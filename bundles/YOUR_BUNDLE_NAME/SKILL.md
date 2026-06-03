---
skill_id: YOUR_BUNDLE_NAME_skill          # 改成你的 skill ID（建議用 bundle name + _skill 當前綴）
title: 你的 Skill 顯示名稱
version: "1.0"
category:
  - writing
  # - research
one_liner: 一句話描述這個 skill 幫使用者解決什麼問題（60 字以內）

languages:
  - zh-TW

# ── 定價 ──────────────────────────────────────────
# base_price 單位：NT$
# 0     = 免費上架（Hatchling 試上架）
# ≥100  = 付費上架（自訂價格，無上限）
base_price: 0

# ── 雙向綁定（套裝必填，已預填）──────────────────
# 改 ID 時，這裡的值要跟 persona.md 的 persona_id 對齊
compatible_personas:
  - YOUR_BUNDLE_NAME                       # ← 對到 persona.md 的 persona_id

script_mode: workflow_only

# ── 以下欄位 Portal 之後會自動測試填寫（deprecated 手動填）──
# tested_runtimes:
#   - claude
# tested_models:
#   - claude-opus-4-6
# test_level: smoke
---

<!--
  說明（套裝模板）：
  - 這份 SKILL.md 已預填好跟同資料夾 persona.md 的雙向綁定
  - 改 skill_id / persona_id 時，bundled_skills 與 compatible_personas 兩邊要同步
  - 完整欄位說明請見 docs/skill-template.md
-->

# {{title}}

> {{one_liner}}

---

## What this skill does

（請在此描述 skill 的用途，3–5 句話）

---

## Workflow

1. （步驟 1）
2. （步驟 2）
3. （步驟 3）

---

## What User needs to provide

- （必填輸入 1）
- （必填輸入 2）
- （選填輸入——標註為「選填」）

---

## What User will receive

- （交付物 1）
- （交付物 2）

---

## Known limitations

- （限制 1）
- （限制 2）
