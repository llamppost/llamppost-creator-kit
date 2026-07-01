---
# ── 运行身份 + 定价（这些留在 frontmatter）─────────
# 市集「上架显示」的字段——title、one_liner、category、languages、version、
# script_mode、listing_description、cover/banner——现在都放在 metadata.json（同文件夹）。
# 这份 SKILL.md 是你的运行 skill 本体。
skill_id: YOUR_SKILL_NAME        # 你的 skill ID——英文小写 + 下划线（例如 social_post_ideas）。必须跟文件夹名称完全一致。

# base_price 单位：NT$  ·  0 = 免费上架（Hatchling 试上架）  ·  ≥100 = 付费上架（自定价格，无上限）
base_price: 0
---

<!--
  说明：
  1. 复制整个 skills/YOUR_SKILL_NAME/ 文件夹
  2. 将文件夹改名为你的 skill_id——**必须是英文小写 + 下划线**（例如：skills/social_post_ideas/）
  3. 把上面的 skill_id 改成跟文件夹名称完全一样
  4. 在 metadata.json 填写「上架字段」——title / one_liner / category / languages /
     version / script_mode / listing_description，以及 listing.* 区块。
     再把 cover-<skill_id>.png（1:1）与 banner-<skill_id>.png（16:10）放进 assets/。
  5. 填写下方的各个区块——这是你的运行 skill 内容，同时也会渲染成公开内容页。
     （若你在 metadata.json 设了 listing.*，会覆写「What this skill does / receive / limitations」文字。）
  6. 删除这个说明区块，然后通过 Creator Portal 提交

  重要：
  - skill_id 与文件夹名称**永远必须是英文**（小写字母 + 数字 + 下划线），且两者要完全一致
  - YOUR_SKILL_NAME 是保留前缀，Portal 会拒绝含此前缀的上架
  - 上架字段放在 metadata.json，不在这里——完整字段说明请见 docs/skill-template.md
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
  这一节只在 script_mode（设在 metadata.json）为 script_spec 或 script_provided 时才需要填。
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
