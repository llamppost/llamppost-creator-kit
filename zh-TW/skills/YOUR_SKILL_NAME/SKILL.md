---
# ── 執行身分（留在 frontmatter）─────────
# 市集「上架顯示」的欄位——title、one_liner、category、languages、version、script_mode、
# listing_description、base_price、cover/banner——現在都放在 metadata.json（同資料夾）。
# skill_id 也放在 metadata.json；這裡一併保留，讓讀 frontmatter 的匯入／驗證工具仍能運作。
# 平台以 metadata.json 為優先、frontmatter 為 fallback——兩邊都收。這份 SKILL.md 是執行 skill 本體。
skill_id: YOUR_SKILL_NAME        # 英文小寫 + 底線（例如 social_post_ideas）。必須跟資料夾名稱、以及 metadata.json 的 skill_id 完全一致。
---

<!--
  說明：
  1. 複製整個 skills/YOUR_SKILL_NAME/ 資料夾
  2. 將資料夾改名為你的 skill_id——**必須是英文小寫 + 底線**（例如：skills/social_post_ideas/）
  3. 把上面的 skill_id 改成跟資料夾名稱完全一樣
  4. 在 metadata.json 填寫「上架欄位」——title / one_liner / category / languages /
     version / script_mode / listing_description / base_price，以及 listing.* 區塊。
     再把 cover-<skill_id>.png（1:1）與 banner-<skill_id>.png（16:10）放進 assets/。
  5. 填寫下方的各個區塊——這是你的執行 skill 內容，同時也會渲染成公開內容頁。
     （若你在 metadata.json 設了 listing.*，會覆寫「What this skill does / receive / limitations」文字。）
  6. 刪除這個說明區塊，然後透過 Creator Portal 送出

  重要：
  - skill_id 與資料夾名稱**永遠必須是英文**（小寫字母 + 數字 + 底線），且兩者要完全一致
  - YOUR_SKILL_NAME 是保留前綴，Portal 會拒絕含此前綴的上架
  - 上架欄位放在 metadata.json，不在這裡——完整欄位說明請見 docs/skill-template.md
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
  這一節只在 script_mode（設在 metadata.json）為 script_spec 或 script_provided 時才需要填。
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
