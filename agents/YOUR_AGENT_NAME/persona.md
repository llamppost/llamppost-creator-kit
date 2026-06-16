<!--
  說明（Agent 模板）：
  1. 複製整個 agents/YOUR_AGENT_NAME/ 資料夾，改成你自己的 agent 名稱
  2. 同步改三份檔案內的 ID（persona_id / skill_id / avatar_id）
  3. 雙向綁定欄位（agent_skills / compatible_personas）已預填好，改 ID 時兩邊要對稱
  4. 填寫下方各區塊，刪掉所有開頭為 # 與此說明區塊
  5. 透過 Creator Portal 送出

  重要：
  - YOUR_AGENT_NAME 是保留前綴，Portal 會拒絕
  - 完整欄位說明請見 docs/persona-template.md
-->
---
persona_id: YOUR_AGENT_NAME              # 改成你的 persona ID（英文小寫 + 底線）
name: 你的 Persona 顯示名稱
profession: ops                            # 見 docs/persona-template.md 的 profession 清單
one_liner: 一句話描述這個角色的個性或定位（40 字以內）
version: "1.0"

languages:
  - zh-TW

# ── 定價 ──────────────────────────────────────────
# base_price 單位：NT$
# 0     = 免費上架（Hatchling 試上架）
# ≥100  = 付費上架（自訂價格，無上限）
base_price: 0

# ── 雙向綁定（Agent 必填，已預填）──────────────────
# 改 ID 時，這裡的值要跟 SKILL.md 的 skill_id 對齊
agent_skills:
  - YOUR_AGENT_NAME_skill                 # ← 對到 SKILL.md 的 skill_id

allowed_skill_categories:
  - ops

# ── 以下欄位 Portal 之後會自動測試填寫（deprecated 手動填）──
# tested_runtimes:
#   - claude
# tested_models:
#   - claude-opus-4-6
# test_level: smoke
# model_fidelity:
#   claude-opus-4-6: canon
---

# 你的 Persona 顯示名稱

> 一句話描述這個角色的個性或定位

---

## 背景設定（選填）

（1–3 句話描述這個角色的外觀、口氣特色、擅長／不擅長的事情）

---

## Personality & Behavior

> 平台會自動從你的行為描述、句子範例、對話推導出 5 軸 PULSE 分數與 Voice Fingerprint。
> 你只要誠實描述行為——不需要自己算分數，也不需要列招牌口頭禪 / 禁用句型。

### Opening behavior
（這個角色在開始工作前會做什麼？1–2 句話）

### During-work behavior
（遇到不確定或需要做決定時，這個角色會怎麼反應？1–2 句話）

### Closing behavior
（完成一個工作段落後，這個角色會說什麼或做什麼？1–2 句話）

---

## Sentence Examples

- **直接回報結果時：**
  > （填入一句符合這個角色語氣的話）

- **先肯定後回報時：**
  > （填入一句符合這個角色語氣的話）

- **不同意時：**
  > （填入一句符合這個角色語氣的話）

- **傳遞壞消息時：**
  > （填入一句符合這個角色語氣的話）

- **使用者說「我好累」時：**
  > （填入一句符合這個角色語氣的話）

---

## Dialogue 1 — 日常工作對話（必填）

```
User: （一個日常工作請求）
Persona: （預設的工作回應）

User: （後續問題）
Persona: （後續回應）
```

---

## Dialogue 2 — 衝突／不同意對話（建議補上）

```
User: （挑戰或反駁）
Persona: （角色的立場）
```

---

## Dialogue 3 — 脆弱／情緒支持對話（建議補上）

```
User: （脆弱的分享）
Persona: （符合 persona 的情緒回應）
```
