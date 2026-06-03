---
skill_id: YOUR_SKILL_NAME        # 改成你的 skill ID（必须英文小写 + 下划线，例如：social_post_ideas）
title: 你的 Skill 显示名称         # 用户在搜索结果看到的名称（40 字以内，可以使用任何语言）
version: "1.0"
category:
  - writing                       # 主要分类（必填，从清单中挑 1 个）
  # - research                    # 次要分类（选填，最多再挑 1 个）
one_liner: 一句话描述这个 skill 帮用户解决什么问题（60 字以内）

languages:                        # 这个 skill 实际运作的语言（BCP-47 代码，必填）
  - zh-CN
  # - en

# ── 定价 ──────────────────────────────────────────
# base_price 单位：NT$
# 0     = 免费上架（Hatchling 试上架）
# ≥100  = 付费上架（自定价格，无上限）
base_price: 0

# ── 以下字段 Portal 之后会自动测试填写 ────────────
# 目前可以不填，或填默认值。填了平台会用你的声明做初步参考，
# 但所有 fidelity / test 标签之后都会以 Portal 自动测试结果为准。
# deprecated（手动填）→ 将由 Portal cross-model QA 自动覆写
# tested_runtimes:
#   - claude
# tested_models:
#   - claude-opus-4-6
# test_level: smoke               # smoke | qa | prod_ready

script_mode: workflow_only        # workflow_only（只有描述）| script_spec（规格）| script_provided（附脚本）

compatible_personas: []           # 选填。这个 skill 绑定的 persona ID——standalone 销售时留 [] 即可
---

<!--
  说明：
  1. 复制整个 skills/YOUR_SKILL_NAME/ 文件夹
  2. 将文件夹改名为你的 skill_id——**必须是英文小写 + 下划线**（例如：skills/social_post_ideas/）
  3. 把上面 YAML 的 skill_id 改成跟文件夹名称完全一样
  4. 填写上面其他 YAML 字段，删掉所有开头为 # 的行
  5. 填写下方的各个区块
  6. 删除这个说明区块，然后通过 Creator Portal 提交

  重要：
  - skill_id 与文件夹名称**永远必须是英文**（小写字母 + 数字 + 下划线）
  - YOUR_SKILL_NAME 是保留前缀，Portal 会拒绝含此前缀的上架
  - 完整字段说明请见 docs/skill-template.md
-->

# {{title}}

> {{one_liner}}

---

## What this skill does

<!--
  用 3–5 句话说明这个 skill 做什么、适合谁、解决什么问题。
  聚焦在「用户能得到什么价值」——不需要提 AI 或模型。
-->

（请在此描述 skill 的用途，3–5 句话）

---

## Workflow

<!--
  列出 3–7 个步骤，说明这个 skill 怎么运作。
  每一步一句话，动词开头。
-->

1. （步骤 1）
2. （步骤 2）
3. （步骤 3）

---

## What User needs to provide

<!--
  列出用户在开始前应该准备好的东西。
  尽量写得具体，这样用户才知道要准备什么。
-->

- （必填输入 1）
- （必填输入 2）
- （选填输入——标注为「选填」）

---

## What User will receive

<!--
  列出用户能拿到的具体交付物。
  数字与格式越明确越有说服力。「3 篇完整草稿」比「报告内容」更有说服力。
-->

- （交付物 1）
- （交付物 2）

---

## Known limitations

<!--
  诚实列出目前的限制。这能设定用户的预期，也能降低退款/争议风险。
-->

- （限制 1）
- （限制 2）

---

## Script（选用）

<!--
  这一节只在 script_mode 设为 script_spec 或 script_provided 时才需要填。
  如果 script_mode 是 workflow_only，整个这一节可以删掉。
-->

### Goal
（这个脚本要达成什么目标）

### Steps
1. （脚本步骤 1）
2. （脚本步骤 2）

### APIs / Tools used
- （API 或工具名称）

### Required environment variables（Secrets）
<!--
  只列出 key 名称——**绝对不要**写进实际的值。
-->
- （ENV_KEY_NAME）

### Safety notes
- （任何安全限制或风险提醒）

### Verification
- （如何确认这个脚本成功执行）
