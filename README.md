# llamppost 创作者工具包（Creator Kit）

<img src="assets/llamppost_webicon.svg" alt="llamppost" width="96" />

在 llamppost 市集上创建并发布你的 Persona、Skill 与 Avatar。

---

## 重要：文件夹与 ID 必须是英文

我们的系统**只识别英文标识符**。即使你用简体中文、日语或任何其他语言写 persona 与 skill 的内容，下列字段永远必须是英文：

- 所有 `*_id` 字段（`skill_id`、`persona_id`、`avatar_id`、`creator` 等）
- 所有文件夹名称（`personas/<folder>`、`skills/<folder>`、`avatars/<folder>`）
- 格式限制：**小写英文字母 + 数字 + 下划线（`_`）**——不能有空格、大写字母、连字符（`-`）或任何非英文字符

**示例：**

| 正确 | 错误 |
|---------|---------|
| `persona_id: pi_lang` | `persona_id: 派狼` |
| `skills/weekly_report_writer/` | `skills/周报生成器/` |
| `avatar_id: night_wolf_001` | `avatar_id: Night-Wolf-001` |

你 persona 的**显示名称**（YAML 中的 `name` 字段，例如 `name: 派狼`）、所有 body 内容、对话、句子示例、Voice Fingerprint 的招牌词——这些都可以而且应该使用你 persona 真正使用的语言。系统只会用文件夹名称与 `*_id` 字段做识别与路由，这些必须是英文。

**保留前缀**：这份 kit 内有两种保留前缀，你的真实上架**都不可以**使用——Portal 会拒绝：

- **`EXAMPLE_`**：参考示例文件，只供阅读（例如 `EXAMPLE_pi_lang`、`EXAMPLE_social_marketing_post_ideas`）——不要复制这种文件夹。
- **`YOUR_`**：空白模板，设计来给你复制改名的（例如 `YOUR_AGENT_NAME`、`YOUR_SKILL_NAME`）——复制后**务必**把文件夹与 `*_id` 改成你自己的英文小写 ID。

---

## 语言

- 简体中文：本页
- English：[README.md](https://github.com/illushane/llamppost-creator-kit/tree/main)
- 繁體中文：[README.md](https://github.com/illushane/llamppost-creator-kit/tree/zh-TW)
- 日本語：[README.md](https://github.com/illushane/llamppost-creator-kit/tree/ja)

---

## 第一次来？从这里开始

**[→ 上架指南 v1](docs/listing-ready-v1.md)**

这份指南会说明三个核心概念、你该从哪一个开始，以及每一步要怎么完成。

**[→ AI 辅助写模板的 Prompt 集](docs/ai-prompts.md)**

如果你想用 Claude、ChatGPT 或其他 AI 助手帮你写模板，这份文件提供四支现成的 Prompt——Avatar-only / Skill-only / Persona-only / 全套——复制粘贴就能用。

---

## 快速导览

| 我想要… | 前往 |
|-----------|--------|
| 了解 Skill / Persona / Avatar 的区别 | [上架指南](docs/listing-ready-v1.md) |
| 创建新的 Skill（单品） | 复制 `skills/YOUR_SKILL_NAME/`，参考 [Skill 模板文档](docs/skill-template.md) |
| 创建新的 Persona（单品） | 复制 `personas/YOUR_AGENT_NAME/`，参考 [Persona 模板文档](docs/persona-template.md) |
| 上传 Avatar 图片与 metadata | 参考 [Avatar 规格与政策](docs/avatar-creation-spec.md) |
| 上架完整 Agent（Persona + Skill + Avatar） | 复制 `agents/YOUR_AGENT_NAME/`，双向绑定已预填 |
| 用 AI 辅助我写模板 | [AI Prompt 集](docs/ai-prompts.md)（复制粘贴即可用） |
| 阅读平台规则 | [平台政策](policy/policy.zh-CN.md) |

---

## 单品 vs Agent

- **单品上架**：Persona、Skill、Avatar 任挑一件发布。适合先试水温，或只有其中一件做好。
- **Agent 上架**：Persona + Skill + Avatar 三者打包成一个 Agent。双向绑定已预填，用户一次入手完整角色。**孵化器跑出来的格式跟 Agent 模板 1:1 对齐**——补上 Avatar 即可上架。

---

## 文件夹结构

```
creator-kit/
├── docs/
│   ├── listing-ready-v1.md      # 上架指南（从这里开始）
│   ├── ai-prompts.md            # 用 AI 辅助写模板的 Prompt 集
│   ├── skill-template.md        # Skill 模板文档
│   ├── persona-template.md      # Persona 模板
│   └── avatar-creation-spec.md  # Avatar 规格与政策
├── personas/                                # 单品 Persona
│   ├── YOUR_AGENT_NAME/                    # 空白模板——复制并改名来创建你自己的 Persona
│   │   └── persona.md
│   └── EXAMPLE_pi_lang/                    # 参考示例 Persona（不要复制此文件夹名称）
│       └── persona.md
├── skills/                                  # 单品 Skill
│   ├── YOUR_SKILL_NAME/                    # 空白模板——复制并改名来创建你自己的 Skill
│   │   ├── SKILL.md
│   │   └── examples/
│   └── EXAMPLE_social_marketing_post_ideas/  # 参考示例 Skill（不要复制此文件夹名称）
│       └── SKILL.md
├── agents/                                  # Agent（Persona + Skill + Avatar 三合一）
│   └── YOUR_AGENT_NAME/                    # Agent 模板——双向绑定已预填
│       ├── README.md                       # Agent 使用说明
│       ├── persona.md                      # Persona（绑定指向同文件夹 SKILL.md）
│       ├── SKILL.md                        # Skill（绑定指向同文件夹 persona.md）
│       └── avatar/                         # Avatar（必备）
│           ├── README.md
│           └── metadata.json               # 预填 placeholder——需放上你的 avatar.png
├── policy/
│   └── policy.zh-CN.md          # 平台政策
└── assets/
    └── llamppost_webicon.svg
```

---

## 授权

All rights reserved.
