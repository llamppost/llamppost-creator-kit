# skills

各 skill は **パッケージフォルダ**です。

なぜパッケージ？
- skill にはスクリプトが含まれることがあります。
- skill には例が含まれることがあります。
- 関連ファイルをまとめておくと、レビューとバージョン管理が容易になります。

## 構造

```
skills/
  YOUR_SKILL_NAME/      ← 空白テンプレート、これをコピー
  EXAMPLE_.../          ← 参照用サンプル、読み取り専用

  <your_skill_id>/      ← コピー後、自分の skill_id（英小文字 + アンダースコア）に変更
    SKILL.md            (実行 skill 本体——frontmatter：skill_id + base_price)
    metadata.json       (リスティングフィールド——title / one_liner / category / … / listing.* / cover / banner)
    assets/             cover-<id>.png（1:1）+ banner-<id>.png（16:10）——言語ニュートラル、1 バージョンのみ
    scripts/            (オプション、必要に応じて作成)
    examples/           (オプション)
```

`skills/YOUR_SKILL_NAME/` をコピーすることから始めてください。コピー後は、フォルダと `SKILL.md` 内の `skill_id` の両方を、あなた自身の英小文字 ID に**必ず**変更してください（両者は完全に一致する必要があります）。

## リスティング manifest（`metadata.json`）

マーケットのリスティングフィールド——`title`、`one_liner`、`category`、`languages`、`version`、`script_mode`、`listing_description`、およびネストされた `listing.{what_it_does, what_you_get, limitations}`——は `SKILL.md` の隣の `metadata.json` にあります。`SKILL.md` の frontmatter には実行アイデンティティ + 価格（`skill_id` + `base_price`）のみを残します。リスティング画像は `assets/` に `cover-<skill_id>.png`（正方形 1:1）と `banner-<skill_id>.png`（横長 16:10）として配置し、PNG 各 2 MB 以内、`metadata.json` の `cover` / `banner` で宣言します。画像は言語ニュートラル——1 バージョンのみ、言語ごとに用意する必要はありません。完全なフィールド説明は [`docs/skill-template.md`](../docs/skill-template.md) を参照。

> **ファイル名に関する注意：** `SKILL.md` は大文字です。これは Claude Code、OpenClaw、Anthropic の "Skills" 規約に揃えたもので、同じファイルをリネームなしでそれらのプラットフォームで skill として使用できます。**ファイル名を小文字にしないでください**——大文字小文字を区別するファイルシステム（Linux デプロイ環境など）ではファイルを見つけられなくなります。
