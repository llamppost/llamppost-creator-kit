---
# 上架显示字段（title / one_liner / category / languages / version / script_mode /
# listing_description / base_price / cover / banner / listing.*）放在 metadata.json——
# 见本文件夹 metadata.json 已填好的参考。frontmatter 只留运行身份（skill_id）——保留在这里
# 让读 frontmatter 的导入／验证工具仍能运作；平台以 metadata.json 为优先（两边都收）。
skill_id: EXAMPLE_social_marketing_post_ideas
---

<!--
  =====================================================================
  这是参考示例（EXAMPLE）。
  文件夹名称与 skill_id 都使用 EXAMPLE_ 前缀，目的是让你一眼看出
  「这是 kit 内附的示例，不是真实上架商品」。
  你自己的 skill 文件夹与 skill_id 不可以使用 EXAMPLE_ 前缀
  ——Portal 会拒绝。
  =====================================================================
-->

<!--
  v1.5 设计说明：
  tested_runtimes / tested_models / test_level 在 v1.5 后 deprecated，由 Portal 之后自动跑 cross-model QA 填写。
  创作者不需要自己声明测过什么模型。
-->


# Social Marketing：贴文灵感包

> 输入品牌信息，立刻拿到 20 个符合品牌调性的贴文灵感与开头 hook

---

## What this skill does

帮助营销人员快速产出符合品牌调性的社交贴文想法，附带吸引人的 hook 与多种切入角度。适合个人创业者与小型营销团队——需要频繁产出内容但常常没灵感。输入品牌信息与目标，几分钟内就能拿到 20 个可直接用的贴文方向，也可以选择加购完整草稿。

---

## Workflow

1. 询问品牌名称、产品/服务概要，以及目标平台（Instagram / LinkedIn / X 等）
2. 确认贴文目标与内容限制（必须包含的信息、要避免提到的竞品等）
3. 产出 20 个贴文想法，按切入角度分组（每一个都包含开头 hook + 发展方向）
4. 如果用户要求，提供 3 篇可直接发布的完整贴文草稿

---

## What User needs to provide

- 品牌名称与简短介绍（2–3 句）
- 目标受众描述
- 目标平台（可多选：Instagram、LinkedIn、X、Facebook 等）
- 贴文语气（专业／轻松／幽默／励志等）
- 必须包含或避免的关键词／主题（选填）

---

## What User will receive

- 20 个贴文想法（每一个包含：开头 hook + 发展角度）
- （选填）3 篇可直接发布的完整贴文草稿

---

## Known limitations

- 尚未在 grok 或 kimi 上测试
- 草稿质量取决于用户提供的品牌示例是否够详细
- 无法保证所有想法都符合特定平台当前的算法偏好
