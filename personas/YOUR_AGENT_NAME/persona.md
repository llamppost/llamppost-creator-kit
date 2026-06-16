<!--
  說明：
  1. 複製整個 personas/YOUR_AGENT_NAME/ 資料夾
  2. 將資料夾改名為你的 persona_id——**必須是英文小寫 + 底線**（例如：personas/night_wolf_strategist/）
  3. 把下面 YAML 的 persona_id 改成跟資料夾名稱完全一樣
  4. 填寫上面其他 YAML 欄位，刪掉所有開頭為 # 的行
  5. 填寫下方的各個區塊
  6. 刪除這個說明區塊，然後透過 Creator Portal 送出

  重要：
  - persona_id 與資料夾名稱**永遠必須是英文**（小寫字母 + 數字 + 底線）
  - YOUR_AGENT_NAME 是保留前綴，Portal 會拒絕含此前綴的上架
  - 顯示名稱（name）、one_liner、所有 body 內容、對話、句子範例可以使用任何語言
  - 完整欄位說明請見 docs/persona-template.md
  - 完整範例請見 personas/EXAMPLE_pi_lang/persona.md
-->
---
persona_id: YOUR_AGENT_NAME       # 改成你的 persona ID（必須英文小寫 + 底線，例如：night_wolf_strategist）
name: 你的 Persona 顯示名稱         # 使用者看到的名稱（可以使用任何語言）
profession: ops                   # 只能挑 1 個（見 docs/persona-template.md 的 profession 清單）
one_liner: 一句話描述這個角色的個性或定位（40 字以內）
version: "1.0"

languages:                        # 這個 persona 實際使用的語言（BCP-47，必填）
  - zh-TW
  # - en

# ── 定價 ──────────────────────────────────────────
# base_price 單位：NT$
# 0     = 免費上架（Hatchling 試上架）
# ≥100  = 付費上架（自訂價格，無上限）
base_price: 0

# ── 以下欄位 Portal 之後會自動測試填寫 ────────────
# 目前可以不填，或填預設值。填了平台會用你的宣稱做初步參考，
# 但所有 fidelity / test 標籤之後都會以 Portal 自動測試結果為準。
# deprecated（手動填）→ 將由 Portal cross-model QA 自動覆寫
# tested_runtimes:
#   - claude
# tested_models:
#   - claude-opus-4-6
# test_level: smoke               # smoke | qa | prod_ready
# model_fidelity:
#   claude-opus-4-6: canon        # canon | compatible | lite | untested

agent_skills: []                # 這個 persona 綁定的 skill——standalone 則留 []

allowed_skill_categories:         # 這個 persona 適合的 skill 分類（可複選）
  - ops
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

（一個正常的工作任務或提問。呈現這個 persona 預設的工作語氣。）

```
User: （一個日常工作請求）
Persona: （預設的工作回應）

User: （後續問題）
Persona: （後續回應）
```

---

## Dialogue 2 — 衝突／不同意對話（建議補上）

> 補上這段會大幅提升一致性評分。只寫 1 段也能上架，但平台對 persona 的「跨情境穩定度」評分會偏低。

```
User: （挑戰或反駁）
Persona: （角色的立場）
```

---

## Dialogue 3 — 脆弱／情緒支持對話（建議補上）

> 補上這段會大幅提升一致性評分。

```
User: （脆弱的分享）
Persona: （符合 persona 的情緒回應）
```
