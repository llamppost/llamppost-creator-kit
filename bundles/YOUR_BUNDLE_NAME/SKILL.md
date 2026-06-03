---
skill_id: YOUR_BUNDLE_NAME_skill          # 改成你的 skill ID（建议用 bundle name + _skill 当前缀）
title: 你的 Skill 显示名称
version: "1.0"
category:
  - writing
  # - research
one_liner: 一句话描述这个 skill 帮用户解决什么问题（60 字以内）

languages:
  - zh-CN

# ── 定价 ──────────────────────────────────────────
# base_price 单位：NT$
# 0     = 免费上架（Hatchling 试上架）
# ≥100  = 付费上架（自定价格，无上限）
base_price: 0

# ── 双向绑定（套装必填，已预填）──────────────────
# 改 ID 时，这里的值要跟 persona.md 的 persona_id 对齐
compatible_personas:
  - YOUR_BUNDLE_NAME                       # ← 对到 persona.md 的 persona_id

script_mode: workflow_only

# ── 以下字段 Portal 之后会自动测试填写（deprecated 手动填）──
# tested_runtimes:
#   - claude
# tested_models:
#   - claude-opus-4-6
# test_level: smoke
---

<!--
  说明（套装模板）：
  - 这份 SKILL.md 已预填好跟同文件夹 persona.md 的双向绑定
  - 改 skill_id / persona_id 时，bundled_skills 与 compatible_personas 两边要同步
  - 完整字段说明请见 docs/skill-template.md
-->

# {{title}}

> {{one_liner}}

---

## What this skill does

（请在此描述 skill 的用途，3–5 句话）

---

## Workflow

1. （步骤 1）
2. （步骤 2）
3. （步骤 3）

---

## What User needs to provide

- （必填输入 1）
- （必填输入 2）
- （选填输入——标注为「选填」）

---

## What User will receive

- （交付物 1）
- （交付物 2）

---

## Known limitations

- （限制 1）
- （限制 2）
