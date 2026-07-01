# Skill 模板文档（v1.5）

语言：简体中文 | [English](../../en/docs/skill-template.md) | [繁體中文](../../zh-TW/docs/skill-template.md) | [日本語](../../ja/docs/skill-template.md)

这份文档说明如何填写 Skill 模板。实际要编辑的文件视你上架方式而定：

- **单品上架**：复制 `skills/YOUR_SKILL_NAME/` → 改名 → 填里面的 `SKILL.md`
- **Agent 上架**（Persona + Skill + Avatar 三合一）：复制 `agents/YOUR_AGENT_NAME/` → 里面 `SKILL.md` 已预填好双向绑定

完整填写示例请见 `skills/EXAMPLE_social_marketing_post_ideas/`。

---

## 重要：文件夹与 skill_id 必须是英文

我们的系统**只识别英文标识符**。即使你用简体中文、日语或任何其他语言写 skill 的内容（`What this skill does`、`Workflow`、`Known limitations` 等），下列字段永远必须是英文：

- `skill_id` 字段
- 你创建的 skill 文件夹名称（`skills/<your_skill_id>/`）
- 格式限制：**小写英文字母 + 数字 + 下划线（`_`）**——不能有空格、大写字母、连字符（`-`）或任何非英文字符

**示例：**

| 正确 | 错误 |
|---------|---------|
| `skill_id: weekly_report_writer` | `skill_id: 周报生成器` |
| `skills/code_review_zh/` | `skills/Code-Review-中文/` |

你 skill 的 `title`（显示名称，例如 `title: 周报自动生成器`）、`one_liner`、所有 body 内容都可以而且应该使用你的目标用户语言。系统只用 `skill_id` 与文件夹名称做识别与路由——它们必须是英文。

**保留前缀**：这份 kit 内有两种保留前缀，你的真实上架**都不可以**使用——Portal 会拒绝：

- **`EXAMPLE_`**：参考示例文件，只供阅读（例如 `EXAMPLE_social_marketing_post_ideas`）——不要复制这种文件夹。
- **`YOUR_`**：空白模板（`YOUR_SKILL_NAME/`、`YOUR_AGENT_NAME/`），设计来给你复制改名的——复制后**务必**把文件夹与 `skill_id` 改成你自己的英文小写 ID。

---

## 快速对照表

| 字段 | 位置 | 必填 | 说明 |
|-------|----------|----------|-------------|
| `skill_id` | SKILL.md YAML | 是 | 唯一 ID，小写 + 下划线。必须等于文件夹名称。 |
| `base_price` | SKILL.md YAML | 是 | NT$，`0`（免费）或 `≥100` |
| `title` | metadata.json | 是 | 显示名称，40 字以内 |
| `version` | metadata.json | 是 | 从 `"1.0"` 开始 |
| `category` | metadata.json | 是 | 最多 2 个分类 |
| `one_liner` | metadata.json | 是 | 一句话 pitch，60 字以内 |
| `languages` | metadata.json | 是 | skill 运作的语言 BCP-47 代码 |
| `script_mode` | metadata.json | 是 | 见下方说明 |
| `listing_description` | metadata.json | 建议 | 市集短描述 |
| `cover` | metadata.json | 建议 | `assets/cover-<id>.png`，方形 1:1 |
| `banner` | metadata.json | 建议 | `assets/banner-<id>.png`，宽 16:10 |
| `listing.what_it_does` / `listing.what_you_get` / `listing.limitations` | metadata.json | 选填 | 覆写内容页对应的 body 区块 |
| What this skill does | SKILL.md body | 是 | 3–5 句描述 |
| Workflow | SKILL.md body | 是 | 3–7 个步骤 |
| What User needs to provide | SKILL.md body | 是 | 条列 |
| What User will receive | SKILL.md body | 是 | 条列 |
| Known limitations | SKILL.md body | 是 | 条列 |
| Script | SKILL.md body | 选填 | 仅在 script_spec / script_provided 时填写 |
| `tested_runtimes` / `tested_models` / `test_level` | — | deprecated | Portal 之后会自动测试填写 |

> **各字段放哪（Phase-3 拆分）：** `SKILL.md` frontmatter 现在只留**运行身份 + 定价**（`skill_id` + `base_price`）。市集*上架*显示的一切都放在 `SKILL.md` 旁边的 **`metadata.json`**。`SKILL.md` 的 body 区块保留原位——会渲染成公开内容页，且 `metadata.json` 的 `listing.*` 可覆写它们。

---

## 上架 manifest（`metadata.json`）

`metadata.json` 位在 skill 文件夹里、`SKILL.md` 旁边，承载市集上架显示的每个字段。文件层级是选填的（没有 `metadata.json` 的 bundle 会 fallback 到 `SKILL.md` frontmatter），但对 Phase-3 skill 而言，这就是上架字段该放的地方。

```json
{
  "title": "周报自动生成器",
  "one_liner": "输入本周任务清单，拿到结构化的周报草稿",
  "version": "1.0",
  "languages": ["zh-CN", "en"],
  "category": ["writing", "ops"],
  "script_mode": "workflow_only",
  "listing_description": "市集上架显示的 2–3 句描述。",
  "cover": "assets/cover-weekly_report_writer.png",
  "banner": "assets/banner-weekly_report_writer.png",
  "listing": {
    "what_it_does": "一段——覆写 SKILL.md 的「What this skill does」区块。",
    "what_you_get": ["交付物 1", "交付物 2"],
    "limitations": ["限制 1", "限制 2"]
  }
}
```

- `title` / `one_liner` / `version` / `category` / `script_mode` / `listing_description`——意义与规则跟下方逐项说明相同，只是现在放在 `metadata.json`（除了 `skill_id` / `base_price` 留在 `SKILL.md`）。
- `listing.what_it_does`（字符串）、`listing.what_you_get`（字符串数组）、`listing.limitations`（字符串数组）——公开内容页的选填覆写。不填就沿用 `SKILL.md` 的 body 区块。
- `cover` / `banner`——见下方。

### cover 与 banner 图片（`assets/`）

把上架图放进 skill 的 `assets/` 文件夹，并在 `metadata.json` 声明：

| 字段 | 文件 | 比例 | 用途 |
|-------|------|-------|------|
| `cover` | `assets/cover-<skill_id>.png` | 方形 **1:1** | 市集卡片缩略图 |
| `banner` | `assets/banner-<skill_id>.png` | 宽 **16:10** | 商品页主视觉 |

- PNG，每张 2 MB 以内。比例检查有小容差（±2%）。
- 图片是**语言中性**的——只放一版，不用每个语言文件夹各放一份。（`metadata.json` 本身则是**每语一份**：本地化 `title` / `one_liner` / `listing_description`。）
- 平台以文件名（basename）比对图片，所以 `assets/` 路径前缀没问题，只要 basename 唯一即可。

---

## 字段逐项说明

### `skill_id`

你的 skill 在系统中的唯一标识码。

规则：
- 只能用小写英文字母、数字与下划线（`_`）
- 不可以有空格或特殊字符
- 命名后不可更改（会影响已订阅的用户）

```yaml
# 好的示例
skill_id: social_post_ideas
skill_id: weekly_report_writer
skill_id: code_review_zh

# 不好的示例
skill_id: Social Post Ideas   # 有大写与空格
skill_id: my-skill            # 使用了 hyphen
```

---

### `title`

用户在搜索结果与商品页看到的名称。

- 40 字以内
- 清楚说明「做什么」——不要耍花招
- 可以包含语言或目标受众

```yaml
# 好的示例
title: Social Marketing：贴文灵感包
title: 周报自动生成器
title: Code Review 助手（简体中文）
```

---

### `category`

从下面的清单挑最多 2 个。第一个是主要分类，第二个是次要分类。

可选分类：

| 分类 ID | 说明 |
|------------|-------------|
| `writing` | 写作、草拟、编辑 |
| `research` | 信息搜集、整理、分析 |
| `coding` | 开发、调试、code review |
| `data` | 数据处理、图表、报表 |
| `strategy` | 策略规划、提案、演示 |
| `ops` | 流程自动化、SOP、排程 |
| `sales` | 业务开发、提案、客户沟通 |
| `marketing` | 营销活动、广告文案、SEO |
| `design` | 视觉方向、设计规格、UI/UX |
| `learning` | 教学、解释、知识整理 |

```yaml
# 好的示例（最多 2 个）
category:
  - marketing
  - writing
```

---

### `one_liner`

用户在搜索结果看到的第一句话。这句话决定他们会不会点进来。

- 60 字以内
- 写「用户能达成什么」，不要写「这个工具是什么」
- 避免「AI」、「用先进模型」这类模糊词

```yaml
# 好的示例
one_liner: 输入品牌信息，立刻拿到 20 个符合品牌调性的贴文灵感与开头 hook

# 不好的示例
one_liner: 一个智能型、用 AI 驱动的社群贴文生成工具 skill
```

---

### `languages`

列出这个 skill 实际运作的语言，使用 BCP-47 代码。平台会用这个字段做搜索筛选与 dispatch——用 `zh-CN` 搜索的用户看不到只输出 `en` 的 skill。

```yaml
languages:
  - zh-CN
  - en
```

> **重点：** 「这个 skill output 使用的语言」跟「文档写作的语言」不是同一件事。请永远声明 *output* 会是什么语言。

---

### `base_price`（必填）

这个 skill 在市集上的价格，单位 **NT$**。

| 值 | 含义 |
|----|------|
| `0` | 免费上架（Hatchling 试上架，所有人可装） |
| `≥100` | 付费上架（自定价格，无上限） |

```yaml
base_price: 0       # 免费
base_price: 180     # NT$ 180
```

> **规则：** `base_price` 只允许 `0` 或大于等于 `100` 的整数。`1`–`99` 会被 Portal 拒绝。

---

### Skill 与 Persona 的搭配

单品上架的 skill **不需要**填写任何 persona 配对栏位。哪些 persona 跟这个 skill 搭得好，推荐由平台依 `category` 自动处理——你只要把 skill 本身写好即可。

> **Agent 模板：** 如果你要上架完整 Agent（Persona + Skill + Avatar），双向绑定在 `agents/YOUR_AGENT_NAME/` 模板里已预填好——那是 Agent 整组才有的栏位，单品 skill 用不到。

---

### `script_mode`

这个 skill 有没有附可执行的脚本：

| 值 | 说明 |
|-------|-------------|
| `workflow_only` | 只有 workflow 描述，没有脚本 |
| `script_spec` | 脚本规格（由平台或用户实现） |
| `script_provided` | 附上可执行的脚本文件 |

大多数 skill 建议从 `workflow_only` 开始。

---

### `tested_runtimes` / `tested_models` / `test_level`（deprecated 手动填）

> **这三个字段在 v1.5 后标记为 deprecated（手动填写）。** Portal 之后会自动跑 cross-model QA，产出 test_level 与兼容模型清单等所有测试相关字段。
>
> 目前你可以不填，或填默认值。填了平台会用你的声明做初步参考，但所有 test 标签之后都会以 Portal 自动测试结果为准。

如果你还是想手动填（过渡期支持）：

```yaml
# tested_runtimes:
#   - claude                       # claude | claude_code | gpt | codex |
#                                  # gemini | grok | kimi | llama | deepseek | seeddance
# tested_models:
#   - claude-opus-4-6
# test_level: smoke                # smoke | qa | prod_ready
```

---

## 填写 Body 区块

> **这些 body 区块就是你的公开内容页。** 下面五个区块会渲染在商品页上，是买家下单前读到的内容。写的时候想着读者，不要只是为了通过审核。

### 「What this skill does」

用 3–5 句话描述：
1. 这个 skill 的核心功能
2. 最适合什么人用
3. 解决什么问题、提供什么价值

不需要提到 AI 或技术细节。

---

### 「Workflow」

列出 3–7 个步骤，说明这个 skill 怎么运作。每一步一句话，动词开头。

```markdown
1. 询问用户的品牌信息与目标平台
2. 确认贴文语气与内容限制
3. 产出 20 个贴文想法，按切入角度分组
4. 如有需要，产出 3 篇可直接发布的完整草稿
```

---

### 「What User needs to provide」与「What User will receive」

**需要提供：** 列出用户在开始前应该准备好的东西。选填的项目要标注清楚。

**会拿到：** 用数字与格式描述具体的 output。「20 个想法」比「很多想法」有说服力得多。

---

### 「Known limitations」

诚实列出目前的限制。这能同时保护你跟用户。

常见的限制类型：
- 语言支持（只测过中文／英文）
- 输入长度限制
- 不适用的场景

---

## 完整示例

以下是一个完整填写的 Skill 供参考：

`SKILL.md` frontmatter（只留运行身份 + 定价）：

```yaml
---
skill_id: social_post_ideas
base_price: 0
---
```

`metadata.json`（上架字段，放在 `SKILL.md` 旁边）：

```json
{
  "title": "Social Marketing：贴文灵感包",
  "one_liner": "输入品牌信息，立刻拿到 20 个符合品牌调性的贴文灵感与开头 hook",
  "version": "1.0",
  "languages": ["zh-CN", "en"],
  "category": ["marketing", "writing"],
  "script_mode": "workflow_only",
  "listing_description": "把一份简短的品牌 brief 变成 20 个可直接用的贴文灵感，每个都附开头 hook。",
  "cover": "assets/cover-social_post_ideas.png",
  "banner": "assets/banner-social_post_ideas.png"
}
```

`SKILL.md` body（公开内容页——`metadata.json.listing.*` 可覆写）：

```markdown
# Social Marketing：贴文灵感包

> 输入品牌信息，立刻拿到 20 个符合品牌调性的贴文灵感与开头 hook

---

## What this skill does

帮助营销人员快速产出符合品牌调性的社群贴文想法，附带吸引人的 hook 与多种切入角度。
适合个人创业者与小型营销团队——需要频繁产出内容但常常没灵感。
输入品牌信息与目标，几分钟内就能拿到 20 个可直接用的贴文方向。

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
- 目标平台（可多选）
- 贴文语气（专业／轻松／幽默／励志等）
- 必须包含或避免的关键词／主题（选填）

---

## What User will receive

- 20 个贴文想法（每一个包含：开头 hook + 发展角度）
- （选填）3 篇可直接发布的完整贴文草稿

---

## Known limitations

- 草稿质量取决于用户提供的品牌示例是否够详细
- 无法保证所有想法都符合特定平台当前的算法偏好
```
