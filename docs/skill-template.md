# Skill 模板文件（v1.5）

語言：繁體中文 | [English](https://github.com/illushane/llamppost-creator-kit/blob/main/docs/skill-template.md) | [简体中文](https://github.com/illushane/llamppost-creator-kit/blob/zh-CN/docs/skill-template.md) | [日本語](https://github.com/illushane/llamppost-creator-kit/blob/ja/docs/skill-template.md)

這份文件說明如何填寫 Skill 模板。實際要編輯的檔案視你上架方式而定：

- **單品上架**：複製 `skills/YOUR_SKILL_NAME/` → 改名 → 填裡面的 `SKILL.md`
- **Agent 上架**（Persona + Skill + Avatar 三合一）：複製 `agents/YOUR_AGENT_NAME/` → 裡面 `SKILL.md` 已預填好雙向綁定

完整填寫範例請見 `skills/EXAMPLE_social_marketing_post_ideas/`。

---

## 重要：資料夾與 skill_id 必須是英文

我們的系統**只認英文識別符**。即使你用繁體中文、日文或任何其他語言寫 skill 的內容（`What this skill does`、`Workflow`、`Known limitations` 等），下列項目永遠必須是英文：

- `skill_id` 欄位
- 你建立的 skill 資料夾名稱（`skills/<your_skill_id>/`）
- 格式限制：**小寫英文字母 + 數字 + 底線（`_`）**——不能有空格、大寫字母、連字號（`-`）或任何非英文字元

**範例：**

| 正確 | 錯誤 |
|---------|---------|
| `skill_id: weekly_report_writer` | `skill_id: 週報生成器` |
| `skills/code_review_zh/` | `skills/Code-Review-中文/` |

你 skill 的 `title`（顯示名稱，例如 `title: 週報自動生成器`）、`one_liner`、所有 body 內容都可以、而且應該用你的目標使用者語言。系統只用 `skill_id` 與資料夾名稱做識別與路由——它們必須是英文。

**保留前綴**：這份 kit 內有兩種保留前綴，你的真實上架**都不可以**使用——Portal 會拒絕：

- **`EXAMPLE_`**：參考範例檔案，只供閱讀（例如 `EXAMPLE_social_marketing_post_ideas`）——不要複製這種資料夾。
- **`YOUR_`**：空白模板（`YOUR_SKILL_NAME/`、`YOUR_AGENT_NAME/`），設計來給你複製改名的——複製後**務必**把資料夾與 `skill_id` 改成你自己的英文小寫 ID。

---

## 快速對照表

| 欄位 | 位置 | 必填 | 說明 |
|-------|----------|----------|-------------|
| `skill_id` | YAML | 是 | 唯一 ID，小寫 + 底線 |
| `title` | YAML | 是 | 顯示名稱，40 字以內 |
| `version` | YAML | 是 | 從 `"1.0"` 開始 |
| `category` | YAML | 是 | 最多 2 個分類 |
| `one_liner` | YAML | 是 | 一句話 pitch，60 字以內 |
| `languages` | YAML | 是 | skill 運作的語言 BCP-47 代碼 |
| `base_price` | YAML | 是 | NT$，`0`（免費）或 `≥100` |
| `script_mode` | YAML | 是 | 見下方說明 |
| `compatible_personas` | YAML | Agent 必填、單品選填 | 綁定的 Persona ID |
| What this skill does | Body | 是 | 3–5 句描述 |
| Workflow | Body | 是 | 3–7 個步驟 |
| What User needs to provide | Body | 是 | 條列 |
| What User will receive | Body | 是 | 條列 |
| Known limitations | Body | 是 | 條列 |
| Script | Body | 選填 | 僅在 script_spec / script_provided 時填寫 |
| `tested_runtimes` / `tested_models` / `test_level` | YAML | deprecated | Portal 之後會自動測試填寫 |

---

## 欄位逐項說明

### `skill_id`

你的 skill 在系統中的唯一識別碼。

規則：
- 只能用小寫英文字母、數字與底線（`_`）
- 不可以有空格或特殊字元
- 命名後不可更改（會影響已訂閱的使用者）

```yaml
# 好的範例
skill_id: social_post_ideas
skill_id: weekly_report_writer
skill_id: code_review_zh

# 不好的範例
skill_id: Social Post Ideas   # 有大寫與空格
skill_id: my-skill            # 使用了 hyphen
```

---

### `title`

使用者在搜尋結果與商品頁看到的名稱。

- 40 字以內
- 清楚說明「做什麼」——不要耍花招
- 可以包含語言或目標受眾

```yaml
# 好的範例
title: Social Marketing：貼文靈感包
title: 週報自動生成器
title: Code Review 助手（繁體中文）
```

---

### `category`

從下面的清單挑最多 2 個。第一個是主要分類，第二個是次要分類。

可選分類：

| 分類 ID | 說明 |
|------------|-------------|
| `writing` | 寫作、草擬、編輯 |
| `research` | 資訊蒐集、整理、分析 |
| `coding` | 開發、除錯、code review |
| `data` | 資料處理、圖表、報表 |
| `strategy` | 策略規劃、提案、簡報 |
| `ops` | 流程自動化、SOP、排程 |
| `sales` | 業務開發、提案、客戶溝通 |
| `marketing` | 行銷活動、廣告文案、SEO |
| `design` | 視覺方向、設計規格、UI/UX |
| `learning` | 教學、解釋、知識整理 |

```yaml
# 好的範例（最多 2 個）
category:
  - marketing
  - writing
```

---

### `one_liner`

使用者在搜尋結果看到的第一句話。這句話決定他們會不會點進來。

- 60 字以內
- 寫「使用者能達成什麼」，不要寫「這個工具是什麼」
- 避免「AI」、「用先進模型」這類模糊詞

```yaml
# 好的範例
one_liner: 輸入品牌資訊，立刻拿到 20 個符合品牌調性的貼文靈感與開頭 hook

# 不好的範例
one_liner: 一個智慧型、用 AI 驅動的社群貼文生成工具 skill
```

---

### `languages`

列出這個 skill 實際運作的語言，使用 BCP-47 代碼。平台會用這個欄位做搜尋篩選與 dispatch——用 `zh-TW` 搜尋的使用者看不到只輸出 `en` 的 skill。

```yaml
languages:
  - zh-TW
  - en
```

> **重點：** 「這個 skill output 使用的語言」跟「文件寫作的語言」不是同一件事。請永遠宣告 *output* 會是什麼語言。

---

### `base_price`（必填）

這個 skill 在市集上的價格，單位 **NT$**。

| 值 | 意義 |
|----|------|
| `0` | 免費上架（Hatchling 試上架，所有人可裝） |
| `≥100` | 付費上架（自訂價格，無上限） |

```yaml
base_price: 0       # 免費
base_price: 180     # NT$ 180
```

> **規則：** `base_price` 只允許 `0` 或大於等於 `100` 的整數。`1`–`99` 會被 Portal 拒絕。

---

### `compatible_personas`（Agent 必填、單品選填）

如果這個 skill 是要跟某個 Persona 一起打包成 Agent 出貨的，把它要配對的 `persona_id` 列在這裡。Portal 會驗證每一個 persona 的 `agent_skills` 欄位也要列出這個 skill——兩邊必須一致。

```yaml
compatible_personas:
  - kai_weekly_coach
```

如果這個 skill 是獨立銷售，這個欄位可以省略或設為 `[]`。

> **Agent 模板：** 如果你要上架完整 Agent（Persona + Skill + Avatar），用 `agents/YOUR_AGENT_NAME/` 模板——雙向綁定已預填好，比兩個單品資料夾來回對齊容易得多。

---

### `script_mode`

這個 skill 有沒有附可執行的腳本：

| 值 | 說明 |
|-------|-------------|
| `workflow_only` | 只有 workflow 描述，沒有腳本 |
| `script_spec` | 腳本規格（由平台或使用者實作） |
| `script_provided` | 附上可執行的腳本檔案 |

大多數 skill 建議從 `workflow_only` 開始。

---

### `tested_runtimes` / `tested_models` / `test_level`（deprecated 手動填）

> **這三個欄位在 v1.5 後標記為 deprecated（手動填寫）。** Portal 之後會自動跑 cross-model QA，產出 test_level 與相容模型清單等所有測試相關欄位。
>
> 目前你可以不填，或填預設值。填了平台會用你的宣稱做初步參考，但所有 test 標籤之後都會以 Portal 自動測試結果為準。

如果你還是想手動填（過渡期支援）：

```yaml
# tested_runtimes:
#   - claude                       # claude | claude_code | gpt | codex |
#                                  # gemini | grok | kimi | llama | deepseek | seeddance
# tested_models:
#   - claude-opus-4-6
# test_level: smoke                # smoke | qa | prod_ready
```

---

## 填寫 Body 區塊

> **這些 body 區塊就是你的公開內容頁。** 下面五個區塊會渲染在商品頁上，是買家下單前讀到的內容。寫的時候想著讀者，不要只是為了通過審核。

### 「What this skill does」

用 3–5 句話描述：
1. 這個 skill 的核心功能
2. 最適合什麼人用
3. 解決什麼問題、提供什麼價值

不需要提到 AI 或技術細節。

---

### 「Workflow」

列出 3–7 個步驟，說明這個 skill 怎麼運作。每一步一句話，動詞開頭。

```markdown
1. 詢問使用者的品牌資訊與目標平台
2. 確認貼文語氣與內容限制
3. 產出 20 個貼文想法，依切入角度分組
4. 如有需要，產出 3 篇可直接發佈的完整草稿
```

---

### 「What User needs to provide」與「What User will receive」

**需要提供：** 列出使用者在開始前應該準備好的東西。選填的項目要標註清楚。

**會拿到：** 用數字與格式描述具體的 output。「20 個想法」比「很多想法」有說服力得多。

---

### 「Known limitations」

誠實列出目前的限制。這能同時保護你跟使用者。

常見的限制類型：
- 語言支援（只測過中文／英文）
- 輸入長度限制
- 不適用的情境

---

## 完整範例

以下是一個完整填寫的 Skill 供參考：

```yaml
---
skill_id: social_post_ideas
title: Social Marketing：貼文靈感包
version: "1.0"
category:
  - marketing
  - writing
one_liner: 輸入品牌資訊，立刻拿到 20 個符合品牌調性的貼文靈感與開頭 hook

languages:
  - zh-TW
  - en

base_price: 0

script_mode: workflow_only

compatible_personas: []
---
```

```markdown
# Social Marketing：貼文靈感包

> 輸入品牌資訊，立刻拿到 20 個符合品牌調性的貼文靈感與開頭 hook

---

## What this skill does

幫助行銷人員快速產出符合品牌調性的社群貼文想法，附帶吸引人的 hook 與多種切入角度。
適合個人創業者與小型行銷團隊——需要頻繁產出內容但常常沒靈感。
輸入品牌資訊與目標，幾分鐘內就能拿到 20 個可直接用的貼文方向。

---

## Workflow

1. 詢問品牌名稱、產品/服務概要，以及目標平台（Instagram / LinkedIn / X 等）
2. 確認貼文目標與內容限制（必須包含的訊息、要避免提到的競品等）
3. 產出 20 個貼文想法，依切入角度分組（每一個都包含開頭 hook + 發展方向）
4. 如果使用者要求，提供 3 篇可直接發佈的完整貼文草稿

---

## What User needs to provide

- 品牌名稱與簡短介紹（2–3 句）
- 目標受眾描述
- 目標平台（可複選）
- 貼文語氣（專業／輕鬆／幽默／勵志等）
- 必須包含或避免的關鍵字／主題（選填）

---

## What User will receive

- 20 個貼文想法（每一個包含：開頭 hook + 發展角度）
- （選填）3 篇可直接發佈的完整貼文草稿

---

## Known limitations

- 草稿品質取決於使用者提供的品牌範例是否夠詳細
- 無法保證所有想法都符合特定平台目前的演算法偏好
```
