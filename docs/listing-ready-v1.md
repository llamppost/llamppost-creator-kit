# 上架指南 v1.5

語言：繁體中文 | [English](https://github.com/illushane/llamppost-creator-kit/blob/main/docs/listing-ready-v1.md) | [简体中文](https://github.com/illushane/llamppost-creator-kit/blob/zh-CN/docs/listing-ready-v1.md) | [日本語](https://github.com/illushane/llamppost-creator-kit/blob/ja/docs/listing-ready-v1.md)

這份指南會一步步帶你發佈第一個商品。你不需要一次準備完所有東西——**先挑一個開始就好**。

> **想用 AI 輔助寫模板？** 複製 [docs/ai-prompts.md](ai-prompts.md) 裡的現成 Prompt 到 Claude / ChatGPT / Gemini——Avatar / Skill / Persona / 全套四種都有。

---

## 重要：資料夾與 ID 必須是英文

開始動手前先讀這一段——這條規則沒有例外。

我們的系統**只認英文識別符**。即使你用繁體中文、日文或任何其他語言寫 persona 與 skill 的內容，下列項目永遠必須是英文：

- 所有 `*_id` 欄位（`skill_id`、`persona_id`、`avatar_id`、`creator` 等）
- 所有資料夾名稱（`personas/<folder>`、`skills/<folder>`、`agents/<folder>`、`avatars/<folder>`）
- 格式限制：**小寫英文字母 + 數字 + 底線（`_`）**——不能有空格、大寫字母、連字號（`-`）或任何非英文字元

**範例：**

| 正確 | 錯誤 |
|---------|---------|
| `persona_id: pi_lang` | `persona_id: 派狼` |
| `skills/weekly_report_writer/` | `skills/週報生成器/` |
| `agents/night_wolf_strategist/` | `agents/夜狼戰略師/` |
| `avatar_id: night_wolf_001` | `avatar_id: Night-Wolf-001` |

你 persona 的**顯示名稱**（YAML 裡的 `name` 欄位，例如 `name: 派狼`）、所有 body 內容、對話、句子範例——這些都可以、而且應該用你 persona 真正使用的語言。系統只會用資料夾名稱與 `*_id` 欄位做識別與路由，這些必須是英文。

**保留前綴**：這份 kit 內有兩種保留前綴，你的真實上架**都不可以**使用——Portal 會拒絕：

- **`EXAMPLE_`**：參考範例檔案，只供閱讀（例如 `EXAMPLE_pi_lang`、`EXAMPLE_social_marketing_post_ideas`）——不要複製這種資料夾。
- **`YOUR_`**：空白模板（例如 `YOUR_AGENT_NAME`、`YOUR_SKILL_NAME`），設計來給你複製改名的——複製後**務必**把資料夾與 `*_id` 改成你自己的英文小寫 ID。

---

## 兩種上架方式

### 單品上架

| | |
|---|---|
| **適合誰** | 你只有 Persona、Skill、或 Avatar 其中一件想試水溫 |
| **模板** | `personas/YOUR_AGENT_NAME/`、`skills/YOUR_SKILL_NAME/` 任挑 |
| **特性** | 三者可獨立發佈，使用者個別入手 |

### Agent 上架（Persona + Skill + Avatar 三合一）

| | |
|---|---|
| **適合誰** | 你做了完整角色（人格 + 招牌技能 + 視覺），想一次打包成一個 Agent 賣 |
| **模板** | `agents/YOUR_AGENT_NAME/`（內含三份預填好雙向綁定的檔案 + avatar/ 子資料夾） |
| **特性** | 一次發佈、雙向綁定預填、Avatar 必備（沒有就只能拆成單品） |
| **孵化器產出** | 1:1 對齊 Agent 模板格式，補上 Avatar 即可上架 |

---

## 三個核心概念

開始之前，先了解你可以在 llamppost 上發佈的三種商品：

### Persona
描述「這是一個什麼樣的人」——個性、語氣、價值觀、底線，以及適合做什麼類型的工作。使用者根據 Persona 決定要不要跟你的角色互動。

### Skill
描述「這個人具體能做什麼」——workflow、使用者需要提供什麼，以及會拿到什麼。Skill 可以獨立銷售，也可以跟 Persona 綁在一起賣。

### Avatar
描述「這個人長什麼樣」——圖片規格與 `metadata.json`，決定角色在平台上的視覺呈現。

單品上架時你可以**只發佈其中一項**；Agent 上架時三者必備。

---

## 我該從哪一個開始？

| 如果你有… | 從這個開始 |
|-------------|-----------|
| 清楚的 workflow 或服務 | **單品 Skill** |
| 有辨識度的角色語氣或個性 | **單品 Persona** |
| 完成的角色插畫 | **單品 Avatar** |
| 人格 + 招牌技能 + 視覺三者都齊 | **Agent（agents/）** |
| 孵化器跑出來的雛形 | **Agent**（補上 Avatar 即可） |

---

## 發佈單品 Skill

### 步驟 1：複製模板資料夾

```
複製：   skills/YOUR_SKILL_NAME/
改名：   skills/your_skill_id/      ← 英文小寫 + 底線，例如 skills/weekly_report_writer/
```

資料夾裡有一份 `SKILL.md`——你只需要填這一個檔案。改名後記得同時把 `SKILL.md` 裡的 `skill_id` 改成跟資料夾名稱一致。

### 步驟 2：填寫 YAML 開頭

```yaml
---
skill_id: weekly_report_writer      ← 改成你的 skill ID（小寫 + 底線）
title: 週報自動生成器                ← 改成你的 skill 名稱
version: "1.0"
category:
  - writing                         ← 主要分類（見分類清單）
  - ops                             ← 次要分類（選填）
one_liner: 輸入你的週工作清單，自動拿到結構化的週報草稿

languages:
  - zh-TW
  - en

base_price: 0                       ← NT$。0 = 免費；≥100 = 付費（自訂）

script_mode: workflow_only          ← 保持原樣（除非你有附腳本）

compatible_personas: []             ← 單品上架留 [] 即可
---
```

> **分類清單：** writing、research、coding、data、strategy、ops、sales、marketing、design、learning

### 步驟 3：填寫 body 區塊

YAML 下面有五個區塊，每一個都附有註解說明（`<!-- 灰色字 -->`）。填完後可以把註解刪掉。

**這五個區塊會變成你的公開內容頁**——它們會渲染在商品頁上，是買家下單前讀到的內容，請好好寫。

**最重要的兩個區塊：**

「**What User needs to provide**」——盡量寫得具體，這樣使用者才知道要準備什麼。
「**What User will receive**」——用數字。「3 篇報告草稿」比「報告內容」更有說服力。

### 步驟 4：刪掉模板註解、確認格式、送出

```
- [ ] 所有必填的 YAML 欄位都填好了
- [ ] 五個 body 區塊都有實際內容（不是模板預設值）
- [ ] 沒有殘留的註解或說明
- [ ] 資料夾名稱跟 skill_id 一致
- [ ] base_price 是 0 或 ≥100
```

透過 Creator Portal 送出。送出時可以上傳選填的**商品縮圖**（PNG，建議 16:10）——會顯示在市集卡片與商品頁。不上傳的話，卡片會改用自動產生的字母 placeholder。

---

## 發佈單品 Persona

### 步驟 1：複製模板資料夾

```
複製：   personas/YOUR_AGENT_NAME/
改名：   personas/your_persona_id/  ← 英文小寫 + 底線
```

完整欄位說明請見 [persona-template.md](persona-template.md)；完整填寫範例請見 `personas/EXAMPLE_pi_lang/persona.md`。

### 步驟 2：填寫 YAML 開頭

```yaml
---
persona_id: kai_weekly_coach
name: Kai
profession: ops                    ← 只能挑 1 個（見 profession 清單）
one_liner: 把你腦袋裡的混亂變成可執行的週計畫
version: "1.0"

languages:
  - zh-TW
  - en

base_price: 0                      ← NT$。0 = 免費；≥100 = 付費

agent_skills: []                 ← 單品上架留 []

allowed_skill_categories:
  - ops
  - writing
---
```

> **Profession 清單：** life、pa、ops、people、sales、mktg、tech、strat、fitness_coach、life_coach、learning_coach、religion_mentor、intimacy_consultant、teacher_tutor、companion_partner、companion_ex

### 步驟 3：填寫個性行為、句子範例與對話範例

這是 Persona 的核心。平台會自動從你的 behavior 描述與對話中推導出「5 軸 PULSE 風格分數」以及 Voice Fingerprint，使用者可以用這些來篩選與配對，平台也會用它來驗證 persona 在不同 AI 引擎上是否維持在角色內。

**你不需要自己算分數或 fingerprint——只要如實描述互動行為。對話部分 1 段必填，其餘 2 段建議補上**（補得愈多、跨情境愈廣，平台對 persona 的「跨模型一致性」評分愈高）。完整結構請見 [persona-template.md](persona-template.md)。

參考格式：

```markdown
## Opening behavior
開始工作前，Kai 會先確認今天最重要的三件事，並指出一個容易被忽略的潛在風險。

## During-work behavior
遇到需求不清楚時，Kai 會先提出假設請對方確認，而不是要對方重新解釋一次。

## Closing behavior
每完成一個工作段落，Kai 會主動整理一份「今天做了什麼、接下來要做什麼」的簡短摘要。

## Sentence examples
- 直接回報結果：「做完了。這裡有三件事你可能想再確認一下：……」
- 先肯定後回報：「方向很清楚。根據你的想法，我調整了以下這些地方：……」
- 不同意時：「我理解你的想法，不過有一件事想先跟你確認：……」
- 傳遞壞消息：「有個狀況你需要知道，但我也準備了備案：……」
- 回應壓力：「聽起來你現在壓力很大。我們先把今天最急的事情列出來好嗎？」
```

### 步驟 4：透過 Creator Portal 送出

---

## 發佈單品 Avatar

### 步驟 1：準備圖片

- 檔名：`avatar.png`
- 尺寸：最小 512×512，建議 1024×1024
- 格式：PNG，1:1

### 步驟 2：準備 metadata.json

完整 schema 與政策見 [avatar-creation-spec.md](avatar-creation-spec.md)。

### 步驟 3：透過 Creator Portal 送出

---

## 發佈 Agent（Persona + Skill + Avatar）

### 步驟 1：複製 Agent 模板資料夾

```
複製：   agents/YOUR_AGENT_NAME/
改名：   agents/your_agent_name/   ← 英文小寫 + 底線
```

裡面已預先包好：

```
agents/your_agent_name/
├── README.md            ← Agent 使用說明
├── persona.md           ← 預填 agent_skills 指向同資料夾 SKILL.md
├── SKILL.md             ← 預填 compatible_personas 指向同資料夾 persona.md
└── avatar/
    ├── README.md        ← Avatar 補充說明
    └── metadata.json    ← 預填 placeholder
```

### 步驟 2：同步改三份檔案的 ID（必須對應）

| 檔案 | 改哪個欄位 | 範例 |
|------|-----------|------|
| `persona.md` | `persona_id` | `night_wolf_strategist` |
| `SKILL.md` | `skill_id` | `night_wolf_strategist_skill` |
| `avatar/metadata.json` | `avatar_id` | `night_wolf_strategist_001` |

**建議用同一個 base name 當前綴**——讓三者看起來是一組商品。

### 步驟 3：對齊雙向綁定

`persona.md` 的 `agent_skills:` 與 `SKILL.md` 的 `compatible_personas:` 必須對稱。Portal 會驗證——錯一邊就拒絕。模板已預填好，改 ID 時兩邊要同步：

```yaml
# persona.md
persona_id: night_wolf_strategist
agent_skills:
  - night_wolf_strategist_skill   ← 對到 SKILL.md 的 skill_id

# SKILL.md
skill_id: night_wolf_strategist_skill
compatible_personas:
  - night_wolf_strategist          ← 對到 persona.md 的 persona_id
```

### 步驟 4：補上 Avatar

`avatar/` 資料夾預設沒圖片：

- 把你的 `avatar.png`（至少 512×512）放進 `avatar/`
- 編輯 `avatar/metadata.json` 填入 `traits`、`universe`、`realm`、`rights` 等欄位
- 完整規格與版權政策見 [avatar-creation-spec.md](avatar-creation-spec.md)

> **沒準備 Avatar 想先試水溫？** 把 `persona.md` 跟 `SKILL.md` 各自搬到 `personas/` 與 `skills/` 資料夾，分別當單品上架。等補好 Avatar 再重新以 Agent 上架。

### 步驟 5：透過 Creator Portal 送出

最後檢查：

```
- [ ] 三個 ID 全部對應到資料夾名稱
- [ ] 雙向綁定兩邊都對齊（agent_skills ↔ compatible_personas）
- [ ] persona.md / SKILL.md / avatar/metadata.json 都填完
- [ ] avatar/ 內有 avatar.png（不是 placeholder）
- [ ] 三份檔案讀起來像同一個角色（語氣、設定一致）
- [ ] base_price 是 0 或 ≥100
```

---

## 上架之後

這些都在 Portal 操作，沒有對應的 Kit 檔案格式。

### 隨時編輯你的上架

在 **Studio →「我的上架」** 可以隨時編輯已上架商品的內容頁、縮圖、名稱與描述。改完立即生效——不用重新審核。

### 把多個 skill 組成技能包

在 **Studio →「我的上架」→「建立技能包」** 可以把你幾個已上架的 skill 組成一個**技能包**——它本身就是一個獨立的市集商品，有自己的價格與縮圖。組進去的 skill 仍然可以個別購買。

---

## FAQ

**Q：發佈前需要測試多少？**
平台之後會自動跑 cross-model QA 並產出 fidelity 標籤與測試等級。目前你不用自己宣稱測試嚴謹度——丟上去就好。

**Q：可以一次發佈多個 Skill 嗎？**
可以。每個 Skill 是獨立的資料夾與檔案，彼此不會互相干擾。

**Q：Persona 一定要有 Avatar 嗎？**
單品上架不需要；Agent 上架三者必備。

**Q：發佈後還可以更新內容嗎？**
可以。更新後透過 Creator Portal 重新送出，並把 `version` 往上加（例如 `"1.0"` → `"1.1"`）。

**Q：`base_price` 為什麼不能填 1–99？**
為了維持市集價格訊號清晰。要麼免費試上架（`0`），要麼至少 NT$ 100 起跳。
