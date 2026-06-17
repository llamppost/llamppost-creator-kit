# llamppost 創作者工具包（Creator Kit）

<img src="assets/llamppost_webicon.svg" alt="llamppost" width="96" />

在 llamppost 市集上建立並發佈你的 Persona、Skill 與 Avatar。

---

## 重要：資料夾與 ID 必須是英文

我們的系統**只認英文識別符**。即使你用繁體中文、日文或任何其他語言寫 persona 與 skill 的內容，下列項目永遠必須是英文：

- 所有 `*_id` 欄位（`skill_id`、`persona_id`、`avatar_id`、`creator` 等）
- 所有資料夾名稱（`personas/<folder>`、`skills/<folder>`、`avatars/<folder>`）
- 格式限制：**小寫英文字母 + 數字 + 底線（`_`）**——不能有空格、大寫字母、連字號（`-`）或任何非英文字元

**範例：**

| 正確 | 錯誤 |
|---------|---------|
| `persona_id: pi_lang` | `persona_id: 派狼` |
| `skills/weekly_report_writer/` | `skills/週報生成器/` |
| `avatar_id: night_wolf_001` | `avatar_id: Night-Wolf-001` |

你 persona 的**顯示名稱**（YAML 裡的 `name` 欄位，例如 `name: 派狼`）、所有 body 內容、對話、句子範例、Voice Fingerprint 的招牌詞——這些都可以、而且應該用你 persona 真正使用的語言。系統只會用資料夾名稱與 `*_id` 欄位做識別與路由，這些必須是英文。

**保留前綴**：這份 kit 內有兩種保留前綴，你的真實上架**都不可以**使用——Portal 會拒絕：

- **`EXAMPLE_`**：參考範例檔案，只供閱讀（例如 `EXAMPLE_pi_lang`、`EXAMPLE_social_marketing_post_ideas`）——不要複製這種資料夾。
- **`YOUR_`**：空白模板，設計來給你複製改名的（例如 `YOUR_AGENT_NAME`、`YOUR_SKILL_NAME`）——複製後**務必**把資料夾與 `*_id` 改成你自己的英文小寫 ID。

---

## 語言

- 繁體中文：本頁
- English：[README.md](https://github.com/illushane/llamppost-creator-kit/tree/main)
- 简体中文：[README.md](https://github.com/illushane/llamppost-creator-kit/tree/zh-CN)
- 日本語：[README.md](https://github.com/illushane/llamppost-creator-kit/tree/ja)

---

## 第一次來？從這裡開始

**[→ 上架指南 v1](docs/listing-ready-v1.md)**

這份指南會說明三個核心概念、你該從哪一個開始，以及每一步要怎麼完成。

**[→ AI 輔助寫模板的 Prompt 集](docs/ai-prompts.md)**

如果你想用 Claude、ChatGPT 或其他 AI 助手幫你寫模板，這份檔案提供四支現成的 Prompt——Avatar-only / Skill-only / Persona-only / 全套——複製貼上就能用。

---

## 快速導覽

| 我想要… | 前往 |
|-----------|--------|
| 了解 Skill / Persona / Avatar 的差別 | [上架指南](docs/listing-ready-v1.md) |
| 建立新的 Skill（單品） | 複製 `skills/YOUR_SKILL_NAME/`，參考 [Skill 模板文件](docs/skill-template.md) |
| 建立新的 Persona（單品） | 複製 `personas/YOUR_AGENT_NAME/`，參考 [Persona 模板文件](docs/persona-template.md) |
| 上傳 Avatar 圖片與 metadata | 參考 [Avatar 規格與政策](docs/avatar-creation-spec.md) |
| 上架完整 Agent（Persona + Skill + Avatar） | 複製 `agents/YOUR_AGENT_NAME/`，雙向綁定已預填 |
| 用 AI 輔助我寫模板 | [AI Prompt 集](docs/ai-prompts.md)（複製貼上即可用） |
| 閱讀平台規則 | [平台政策](policy/policy.zh-TW.md) |

---

## 單品 vs Agent

- **單品上架**：Persona、Skill、Avatar 任挑一件發佈。適合先試水溫，或只有其中一件做好。
- **Agent 上架**：Persona + Skill + Avatar 三者一次打包成一個 Agent。雙向綁定已預填，使用者一次入手完整角色。**孵化器跑出來的格式跟 Agent 模板 1:1 對齊**——補上 Avatar 即可上架。

---

## 市集上的功能（在 Portal 操作，不是 Kit 檔案）

這些都在 Creator Portal 上架時操作，不需要改動 Kit 檔案：

- **商品縮圖**：可上傳選填的縮圖（PNG，建議 16:10），會顯示在市集卡片與商品頁。不上傳的話卡片會用自動產生的字母 placeholder。
- **公開內容頁**：你 SKILL.md 的 body 區塊會渲染成買家在商品頁讀到的內容頁，請好好寫。
- **隨時編輯＋技能包**：已上架商品的內容頁、縮圖、名稱、描述都能隨時編輯，也能把多個已上架的 skill 組成一個**技能包**——全部在 Studio →「我的上架」操作。

詳見[上架指南](docs/listing-ready-v1.md)。

---

## 資料夾結構

```
creator-kit/
├── docs/
│   ├── listing-ready-v1.md      # 上架指南（從這裡開始）
│   ├── ai-prompts.md            # 用 AI 輔助寫模板的 Prompt 集
│   ├── skill-template.md        # Skill 模板文件
│   ├── persona-template.md      # Persona 模板
│   └── avatar-creation-spec.md  # Avatar 規格與政策
├── personas/                                # 單品 Persona
│   ├── YOUR_AGENT_NAME/                    # 空白模板——複製並改名來建立你自己的 Persona
│   │   └── persona.md
│   └── EXAMPLE_pi_lang/                    # 參考範例 Persona（不要複製此資料夾名稱）
│       └── persona.md
├── skills/                                  # 單品 Skill
│   ├── YOUR_SKILL_NAME/                    # 空白模板——複製並改名來建立你自己的 Skill
│   │   ├── SKILL.md
│   │   └── examples/
│   └── EXAMPLE_social_marketing_post_ideas/  # 參考範例 Skill（不要複製此資料夾名稱）
│       └── SKILL.md
├── agents/                                  # Agent（Persona + Skill + Avatar 三合一）
│   └── YOUR_AGENT_NAME/                    # Agent 模板——雙向綁定已預填
│       ├── README.md                       # Agent 使用說明
│       ├── persona.md                      # Persona（綁定指向同資料夾 SKILL.md）
│       ├── SKILL.md                        # Skill（綁定指向同資料夾 persona.md）
│       └── avatar/                         # Avatar（必備）
│           ├── README.md
│           └── metadata.json               # 預填 placeholder——需放上你的 avatar.png
├── policy/
│   └── policy.zh-TW.md          # 平台政策
└── assets/
    └── llamppost_webicon.svg
```

---

## 授權

All rights reserved.
