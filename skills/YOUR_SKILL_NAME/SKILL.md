---
skill_id: YOUR_SKILL_NAME        # 改成你的 skill ID（必須英文小寫 + 底線，例如：social_post_ideas）
title: 你的 Skill 顯示名稱         # 使用者在搜尋結果看到的名稱（40 字以內，可以使用任何語言）
version: "1.0"
category:
  - writing                       # 主要分類（必填，從清單中挑 1 個）
  # - research                    # 次要分類（選填，最多再挑 1 個）
one_liner: 一句話描述這個 skill 幫使用者解決什麼問題（60 字以內）

languages:                        # 這個 skill 實際運作的語言（BCP-47 代碼，必填）
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

script_mode: workflow_only        # workflow_only（只有描述）| script_spec（規格）| script_provided（附腳本）
---

<!--
  說明：
  1. 複製整個 skills/YOUR_SKILL_NAME/ 資料夾
  2. 將資料夾改名為你的 skill_id——**必須是英文小寫 + 底線**（例如：skills/social_post_ideas/）
  3. 把上面 YAML 的 skill_id 改成跟資料夾名稱完全一樣
  4. 填寫上面其他 YAML 欄位，刪掉所有開頭為 # 的行
  5. 填寫下方的各個區塊
  6. 刪除這個說明區塊，然後透過 Creator Portal 送出

  重要：
  - skill_id 與資料夾名稱**永遠必須是英文**（小寫字母 + 數字 + 底線）
  - YOUR_SKILL_NAME 是保留前綴，Portal 會拒絕含此前綴的上架
  - 完整欄位說明請見 docs/skill-template.md
-->

# {{title}}

> {{one_liner}}

---

## What this skill does

<!--
  用 3–5 句話說明這個 skill 做什麼、適合誰、解決什麼問題。
  聚焦在「使用者能得到什麼價值」——不需要提 AI 或模型。
-->

（請在此描述 skill 的用途，3–5 句話）

---

## Workflow

<!--
  列出 3–7 個步驟，說明這個 skill 怎麼運作。
  每一步一句話，動詞開頭。
-->

1. （步驟 1）
2. （步驟 2）
3. （步驟 3）

---

## What User needs to provide

<!--
  列出使用者在開始前應該準備好的東西。
  盡量寫得具體，這樣使用者才知道要準備什麼。
-->

- （必填輸入 1）
- （必填輸入 2）
- （選填輸入——標註為「選填」）

---

## What User will receive

<!--
  列出使用者能拿到的具體交付物。
  數字與格式愈明確愈有說服力。「3 篇完整草稿」比「報告內容」更有說服力。
-->

- （交付物 1）
- （交付物 2）

---

## Known limitations

<!--
  誠實列出目前的限制。這能設定使用者的預期，也能降低退款/爭議風險。
-->

- （限制 1）
- （限制 2）

---

## Script（選用）

<!--
  這一節只在 script_mode 設為 script_spec 或 script_provided 時才需要填。
  如果 script_mode 是 workflow_only，整個這一節可以刪掉。
-->

### Goal
（這個腳本要達成什麼目標）

### Steps
1. （腳本步驟 1）
2. （腳本步驟 2）

### APIs / Tools used
- （API 或工具名稱）

### Required environment variables（Secrets）
<!--
  只列出 key 名稱——**絕對不要**寫進實際的值。
-->
- （ENV_KEY_NAME）

### Safety notes
- （任何安全限制或風險提醒）

### Verification
- （如何確認這個腳本成功執行）
