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
    SKILL.md
    scripts/            (选用，需要时自行创建)
    examples/           (选用)
```

请从复制 `skills/YOUR_SKILL_NAME/` 开始。复制后**务必**把文件夹与 `SKILL.md` 里的 `skill_id` 都改成你自己的英文小写 ID（两者必须完全一致）。

> **文件名注意事项：** `SKILL.md` 为大写。这是为了对齐 Claude Code、OpenClaw 与 Anthropic 的「Skills」惯例——同一份文件不需要任何改名就能直接在那些平台上当成 skill 使用。**请不要把文件名改成小写**——case-sensitive 的文件系统（例如 Linux 部署环境）会找不到它。
