# skills

每一个 skill 都是一个 **package 文件夹**。

为什么用 package？
- 一个 skill 可能会附带脚本。
- 一个 skill 可能会附带示例。
- 把相关文件放在一起，审查与版本控制都比较容易。

## 结构

```
skills/
  YOUR_SKILL_NAME/      ← 空白模板，复制这个
  EXAMPLE_.../          ← 参考示例，只供阅读

  <your_skill_id>/      ← 你复制后改成自己的 skill_id（英文小写 + 下划线）
    SKILL.md            (运行 skill 本体——frontmatter：skill_id + base_price)
    metadata.json       (上架字段——title / one_liner / category / … / listing.* / cover / banner)
    assets/             cover-<id>.png（1:1）+ banner-<id>.png（16:10）——语言中性，只放一版
    scripts/            (选用，需要时自行创建)
    examples/           (选用)
```

请从复制 `skills/YOUR_SKILL_NAME/` 开始。复制后**务必**把文件夹与 `SKILL.md` 里的 `skill_id` 都改成你自己的英文小写 ID（两者必须完全一致）。

## 上架 manifest（`metadata.json`）

市集上架字段——`title`、`one_liner`、`category`、`languages`、`version`、`script_mode`、`listing_description`，以及嵌套的 `listing.{what_it_does, what_you_get, limitations}`——都放在 `SKILL.md` 旁边的 `metadata.json`。`SKILL.md` 的 frontmatter 只留运行身份 + 定价（`skill_id` + `base_price`）。把上架图放进 `assets/`，命名为 `cover-<skill_id>.png`（方形 1:1）与 `banner-<skill_id>.png`（宽 16:10），PNG 每张 2 MB 以内，并在 `metadata.json` 用 `cover` / `banner` 声明。图片是语言中性的——只放一版，不用每语一份。完整字段说明见 [`docs/skill-template.md`](../docs/skill-template.md)。

> **文件名注意事项：** `SKILL.md` 为大写。这是为了对齐 Claude Code、OpenClaw 与 Anthropic 的「Skills」惯例——同一份文件不需要任何改名就能直接在那些平台上当成 skill 使用。**请不要把文件名改成小写**——case-sensitive 的文件系统（例如 Linux 部署环境）会找不到它。
