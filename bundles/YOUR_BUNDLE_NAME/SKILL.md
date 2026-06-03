---
skill_id: YOUR_BUNDLE_NAME_skill          # あなたの skill ID に変更（bundle name + _skill をプレフィックスにすることを推奨）
title: あなたの Skill の表示名
version: "1.0"
category:
  - writing
  # - research
one_liner: この skill がユーザーのどんな問題を解決するかを一文で（60 文字以内）

languages:
  - ja

# ── 価格設定 ──────────────────────────────────────
# base_price 単位：NT$
# 0     = 無料上架（Hatchling お試し上架）
# ≥100  = 有料上架（自由価格、上限なし）
base_price: 0

# ── 双方向バインディング（フルセット必須、事前記入済み）──────────────────
# ID を変えるとき、ここの値は persona.md の persona_id と揃える
compatible_personas:
  - YOUR_BUNDLE_NAME                       # ← persona.md の persona_id に対応

script_mode: workflow_only

# ── 以下のフィールドは Portal が今後自動テストして記入（deprecated 手動記入）──
# tested_runtimes:
#   - claude
# tested_models:
#   - claude-opus-4-6
# test_level: smoke
---

<!--
  手順（フルセットテンプレート）：
  - この SKILL.md は同フォルダ persona.md との双方向バインディング事前記入済み
  - skill_id / persona_id を変えるとき、bundled_skills と compatible_personas の両側を同期
  - 完全なフィールド説明は docs/skill-template.md を参照
-->

# {{title}}

> {{one_liner}}

---

## What this skill does

（ここに skill の用途を 3–5 文で描写してください）

---

## Workflow

1. （ステップ 1）
2. （ステップ 2）
3. （ステップ 3）

---

## What User needs to provide

- （必須インプット 1）
- （必須インプット 2）
- （任意インプット——「任意」と明示）

---

## What User will receive

- （納品物 1）
- （納品物 2）

---

## Known limitations

- （制限 1）
- （制限 2）
