# 上架指南 v1.5

语言：简体中文 | [English](https://github.com/illushane/llamppost-creator-kit/blob/main/docs/listing-ready-v1.md) | [繁體中文](https://github.com/illushane/llamppost-creator-kit/blob/zh-TW/docs/listing-ready-v1.md) | [日本語](https://github.com/illushane/llamppost-creator-kit/blob/ja/docs/listing-ready-v1.md)

这份指南会一步步带你发布第一个商品。你不需要一次准备完所有东西——**先挑一个开始就好**。

> **想用 AI 辅助写模板？** 复制 [docs/ai-prompts.md](ai-prompts.md) 里的现成 Prompt 到 Claude / ChatGPT / Gemini——Avatar / Skill / Persona / 全套四种都有。

---

## 重要：文件夹与 ID 必须是英文

开始动手前先读这一段——这条规则没有例外。

我们的系统**只识别英文标识符**。即使你用简体中文、日语或任何其他语言写 persona 与 skill 的内容，下列字段永远必须是英文：

- 所有 `*_id` 字段（`skill_id`、`persona_id`、`avatar_id`、`creator` 等）
- 所有文件夹名称（`personas/<folder>`、`skills/<folder>`、`agents/<folder>`、`avatars/<folder>`）
- 格式限制：**小写英文字母 + 数字 + 下划线（`_`）**——不能有空格、大写字母、连字符（`-`）或任何非英文字符

**示例：**

| 正确 | 错误 |
|---------|---------|
| `persona_id: pi_lang` | `persona_id: 派狼` |
| `skills/weekly_report_writer/` | `skills/周报生成器/` |
| `agents/night_wolf_strategist/` | `agents/夜狼战略师/` |
| `avatar_id: night_wolf_001` | `avatar_id: Night-Wolf-001` |

你 persona 的**显示名称**（YAML 中的 `name` 字段，例如 `name: 派狼`）、所有 body 内容、对话、句子示例——这些都可以而且应该使用你 persona 真正使用的语言。系统只会用文件夹名称与 `*_id` 字段做识别与路由，这些必须是英文。

**保留前缀**：这份 kit 内有两种保留前缀，你的真实上架**都不可以**使用——Portal 会拒绝：

- **`EXAMPLE_`**：参考示例文件，只供阅读（例如 `EXAMPLE_pi_lang`、`EXAMPLE_social_marketing_post_ideas`）——不要复制这种文件夹。
- **`YOUR_`**：空白模板（例如 `YOUR_AGENT_NAME`、`YOUR_SKILL_NAME`），设计来给你复制改名的——复制后**务必**把文件夹与 `*_id` 改成你自己的英文小写 ID。

---

## 两种上架方式

### 单品上架

| | |
|---|---|
| **适合谁** | 你只有 Persona、Skill、或 Avatar 其中一件想试水温 |
| **模板** | `personas/YOUR_AGENT_NAME/`、`skills/YOUR_SKILL_NAME/` 任挑 |
| **特性** | 三者可独立发布，用户个别入手 |

### Agent 上架（Persona + Skill + Avatar 三合一）

| | |
|---|---|
| **适合谁** | 你做了完整角色（人格 + 招牌技能 + 视觉），想打包成一个 Agent 卖 |
| **模板** | `agents/YOUR_AGENT_NAME/`（内含三份预填好双向绑定的文件 + avatar/ 子文件夹） |
| **特性** | 一次发布、双向绑定预填、Avatar 必备（没有就只能拆成单品） |
| **孵化器产出** | 1:1 对齐 Agent 模板格式，补上 Avatar 即可上架 |

---

## 三个核心概念

开始之前，先了解你可以在 llamppost 上发布的三种商品：

### Persona
描述「这是一个什么样的人」——个性、语气、价值观、底线，以及适合做什么类型的工作。用户根据 Persona 决定要不要跟你的角色互动。

### Skill
描述「这个人具体能做什么」——workflow、用户需要提供什么，以及会拿到什么。Skill 可以独立销售，也可以跟 Persona 打包成一个 Agent 卖。

### Avatar
描述「这个人长什么样」——图片规格与 `metadata.json`，决定角色在平台上的视觉呈现。

单品上架时你可以**只发布其中一项**；Agent 上架时三者必备。

---

## 我该从哪一个开始？

| 如果你有… | 从这个开始 |
|-------------|-----------|
| 清楚的 workflow 或服务 | **单品 Skill** |
| 有辨识度的角色语气或个性 | **单品 Persona** |
| 完成的角色插画 | **单品 Avatar** |
| 人格 + 招牌技能 + 视觉三者都齐 | **Agent（agents/）** |
| 孵化器跑出来的雏形 | **Agent**（补上 Avatar 即可） |

---

## 发布单品 Skill

### 步骤 1：复制模板文件夹

```
复制：   skills/YOUR_SKILL_NAME/
改名：   skills/your_skill_id/      ← 英文小写 + 下划线，例如 skills/weekly_report_writer/
```

文件夹里有一份 `SKILL.md`——你只需要填这一个文件。改名后记得同时把 `SKILL.md` 里的 `skill_id` 改成跟文件夹名称一致。

### 步骤 2：填写 YAML 开头

```yaml
---
skill_id: weekly_report_writer      ← 改成你的 skill ID（小写 + 下划线）
title: 周报自动生成器                ← 改成你的 skill 名称
version: "1.0"
category:
  - writing                         ← 主要分类（见分类清单）
  - ops                             ← 次要分类（选填）
one_liner: 输入你的周工作清单，自动拿到结构化的周报草稿

languages:
  - zh-CN
  - en

base_price: 0                       ← NT$。0 = 免费；≥100 = 付费（自定）

script_mode: workflow_only          ← 保持原样（除非你有附脚本）

compatible_personas: []             ← 单品上架留 [] 即可
---
```

> **分类清单：** writing、research、coding、data、strategy、ops、sales、marketing、design、learning

### 步骤 3：填写 body 区块

YAML 下面有五个区块，每一个都附有注释说明（`<!-- 灰色字 -->`）。填完后可以把注释删掉。

**这五个区块会变成你的公开内容页**——它们会渲染在商品页上，是买家下单前读到的内容，请好好写。

**最重要的两个区块：**

「**What User needs to provide**」——尽量写得具体，这样用户才知道要准备什么。
「**What User will receive**」——用数字。「3 篇报告草稿」比「报告内容」更有说服力。

### 步骤 4：删掉模板注释、确认格式、提交

```
- [ ] 所有必填的 YAML 字段都填好了
- [ ] 五个 body 区块都有实际内容（不是模板默认值）
- [ ] 没有残留的注释或说明
- [ ] 文件夹名称跟 skill_id 一致
- [ ] base_price 是 0 或 ≥100
```

通过 Creator Portal 提交。提交时可以上传选填的**商品缩略图**（PNG，建议 16:10）——会显示在市集卡片与商品页。不上传的话，卡片会改用自动生成的字母 placeholder。

---

## 发布单品 Persona

### 步骤 1：复制模板文件夹

```
复制：   personas/YOUR_AGENT_NAME/
改名：   personas/your_persona_id/  ← 英文小写 + 下划线
```

完整字段说明请见 [persona-template.md](persona-template.md)；完整填写示例请见 `personas/EXAMPLE_pi_lang/persona.md`。

### 步骤 2：填写 YAML 开头

```yaml
---
persona_id: kai_weekly_coach
name: Kai
profession: ops                    ← 只能挑 1 个（见 profession 清单）
one_liner: 把你脑袋里的混乱变成可执行的周计划
version: "1.0"

languages:
  - zh-CN
  - en

base_price: 0                      ← NT$。0 = 免费；≥100 = 付费

agent_skills: []                 ← 单品上架留 []

allowed_skill_categories:
  - ops
  - writing
---
```

> **Profession 清单：** life、pa、ops、people、sales、mktg、tech、strat、fitness_coach、life_coach、learning_coach、religion_mentor、intimacy_consultant、teacher_tutor、companion_partner、companion_ex

### 步骤 3：填写个性行为、句子示例与对话示例

这是 Persona 的核心。平台会自动从你的 behavior 描述与对话中推导出「5 轴 PULSE 风格分数」以及 Voice Fingerprint，用户可以用这些来筛选与配对，平台也会用它来验证 persona 在不同 AI 引擎上是否维持在角色内。

**你不需要自己算分数或 fingerprint——只要如实描述互动行为。对话部分 1 段必填，其余 2 段建议补上**（补得越多、跨场景越广，平台对 persona 的「跨模型一致性」评分越高）。完整结构请见 [persona-template.md](persona-template.md)。

参考格式：

```markdown
## Opening behavior
开始工作前，Kai 会先确认今天最重要的三件事，并指出一个容易被忽略的潜在风险。

## During-work behavior
遇到需求不清楚时，Kai 会先提出假设请对方确认，而不是要对方重新解释一次。

## Closing behavior
每完成一个工作段落，Kai 会主动整理一份「今天做了什么、接下来要做什么」的简短摘要。

## Sentence examples
- 直接回报结果：「做完了。这里有三件事你可能想再确认一下：……」
- 先肯定后回报：「方向很清楚。根据你的想法，我调整了以下这些地方：……」
- 不同意时：「我理解你的想法，不过有一件事想先跟你确认：……」
- 传递坏消息：「有个状况你需要知道，但我也准备了备案：……」
- 回应压力：「听起来你现在压力很大。我们先把今天最急的事情列出来好吗？」
```

### 步骤 4：通过 Creator Portal 提交

---

## 发布单品 Avatar

### 步骤 1：准备图片

- 文件名：`avatar.png`
- 尺寸：最小 512×512，建议 1024×1024
- 格式：PNG，1:1

### 步骤 2：准备 metadata.json

完整 schema 与政策见 [avatar-creation-spec.md](avatar-creation-spec.md)。

### 步骤 3：通过 Creator Portal 提交

---

## 发布 Agent（Persona + Skill + Avatar）

### 步骤 1：复制 Agent 模板文件夹

```
复制：   agents/YOUR_AGENT_NAME/
改名：   agents/your_agent_name/   ← 英文小写 + 下划线
```

里面已预先包好：

```
agents/your_agent_name/
├── README.md            ← Agent 使用说明
├── persona.md           ← 预填 agent_skills 指向同文件夹 SKILL.md
├── SKILL.md             ← 预填 compatible_personas 指向同文件夹 persona.md
└── avatar/
    ├── README.md        ← Avatar 补充说明
    └── metadata.json    ← 预填 placeholder
```

### 步骤 2：同步改三份文件的 ID（必须对应）

| 文件 | 改哪个字段 | 示例 |
|------|-----------|------|
| `persona.md` | `persona_id` | `night_wolf_strategist` |
| `SKILL.md` | `skill_id` | `night_wolf_strategist_skill` |
| `avatar/metadata.json` | `avatar_id` | `night_wolf_strategist_001` |

**建议用同一个 base name 当前缀**——让三者看起来是一组商品。

### 步骤 3：对齐双向绑定

`persona.md` 的 `agent_skills:` 与 `SKILL.md` 的 `compatible_personas:` 必须对称。Portal 会验证——错一边就拒绝。模板已预填好，改 ID 时两边要同步：

```yaml
# persona.md
persona_id: night_wolf_strategist
agent_skills:
  - night_wolf_strategist_skill   ← 对到 SKILL.md 的 skill_id

# SKILL.md
skill_id: night_wolf_strategist_skill
compatible_personas:
  - night_wolf_strategist          ← 对到 persona.md 的 persona_id
```

### 步骤 4：补上 Avatar

`avatar/` 文件夹默认没图片：

- 把你的 `avatar.png`（至少 512×512）放进 `avatar/`
- 编辑 `avatar/metadata.json` 填入 `traits`、`universe`、`realm`、`rights` 等字段
- 完整规格与版权政策见 [avatar-creation-spec.md](avatar-creation-spec.md)

> **没准备 Avatar 想先试水温？** 把 `persona.md` 跟 `SKILL.md` 各自搬到 `personas/` 与 `skills/` 文件夹，分别当单品上架。等补好 Avatar 再重新以 Agent 上架。

### 步骤 5：通过 Creator Portal 提交

最后检查：

```
- [ ] 三个 ID 全部对应到文件夹名称
- [ ] 双向绑定两边都对齐（agent_skills ↔ compatible_personas）
- [ ] persona.md / SKILL.md / avatar/metadata.json 都填完
- [ ] avatar/ 内有 avatar.png（不是 placeholder）
- [ ] 三份文件读起来像同一个角色（语气、设定一致）
- [ ] base_price 是 0 或 ≥100
```

---

## 上架之后

这些都在 Portal 操作，没有对应的 Kit 文件格式。

### 随时编辑你的上架

在 **Studio →「我的上架」** 可以随时编辑已上架商品的内容页、缩略图、名称与描述。改完立即生效——不用重新审核。

### 把多个 skill 组成技能包

在 **Studio →「我的上架」→「建立技能包」** 可以把你几个已上架的 skill 组成一个**技能包**——它本身就是一个独立的市集商品，有自己的价格与缩略图。组进去的 skill 仍然可以单独购买。

---

## FAQ

**Q：发布前需要测试多少？**
平台之后会自动跑 cross-model QA 并产出 fidelity 标签与测试等级。目前你不用自己声明测试严谨度——丢上去就好。

**Q：可以一次发布多个 Skill 吗？**
可以。每个 Skill 是独立的文件夹与文件，彼此不会互相干扰。

**Q：Persona 一定要有 Avatar 吗？**
单品上架不需要；Agent 上架三者必备。

**Q：发布后还可以更新内容吗？**
可以。更新后通过 Creator Portal 重新提交，并把 `version` 往上加（例如 `"1.0"` → `"1.1"`）。

**Q：`base_price` 为什么不能填 1–99？**
为了维持市集价格信号清晰。要么免费试上架（`0`），要么至少 NT$ 100 起跳。
