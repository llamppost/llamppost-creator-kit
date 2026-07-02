# skills

每一個 skill 都是一個 **package 資料夾**。

為什麼用 package？
- 一個 skill 可能會附帶腳本。
- 一個 skill 可能會附帶範例。
- 把相關檔案放在一起，審查與版本控制都比較容易。

## 結構

```
skills/
  YOUR_SKILL_NAME/      ← 空白模板，複製這個
  EXAMPLE_.../          ← 參考範例，只供閱讀

  <your_skill_id>/      ← 你複製後改成自己的 skill_id（英文小寫 + 底線）
    SKILL.md            (執行 skill 本體——frontmatter：skill_id + base_price)
    metadata.json       (上架欄位——title / one_liner / category / … / listing.* / cover / banner)
    assets/             cover-<id>.png（1:1）+ banner-<id>.png（16:10）——語言中性，只放一版
    scripts/            (選用，需要時自己建立)
    examples/           (選用)
```

請從複製 `skills/YOUR_SKILL_NAME/` 開始。複製後**務必**把資料夾與 `SKILL.md` 裡的 `skill_id` 都改成你自己的英文小寫 ID（兩者必須完全一致）。

## 上架 manifest（`metadata.json`）

市集上架欄位——`title`、`one_liner`、`category`、`languages`、`version`、`script_mode`、`listing_description`，以及巢狀的 `listing.{what_it_does, what_you_get, limitations}`——都放在 `SKILL.md` 旁邊的 `metadata.json`。`SKILL.md` 的 frontmatter 只留執行身分 + 定價（`skill_id` + `base_price`）。把上架圖放進 `assets/`，命名為 `cover-<skill_id>.png`（方形 1:1）與 `banner-<skill_id>.png`（寬 16:10），PNG 每張 2 MB 以內，並在 `metadata.json` 用 `cover` / `banner` 宣告。圖片是語言中性的——只放一版，不用每語一份。完整欄位說明見 [`docs/skill-template.md`](../docs/skill-template.md)。

> **檔名注意事項：** `SKILL.md` 為大寫。這是為了對齊 Claude Code、OpenClaw 與 Anthropic 的「Skills」慣例——同一份檔案不需要任何改名就能直接在那些平台上當成 skill 使用。**請不要把檔名改成小寫**——case-sensitive 的檔案系統（例如 Linux 部署環境）會找不到它。
