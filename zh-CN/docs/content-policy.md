# Creator Kit · 内容政策

语言：[English](../../en/docs/content-policy.md) · [繁體中文](../../zh-TW/docs/content-policy.md) · [简体中文](content-policy.md) · [日本語](../../ja/docs/content-policy.md)

llamppost 在台湾经营。所有上架内容必须符合 **公平交易法第 21 条**（不实广告）。违反者由 Portal AI 自动审核退件，反复违反者由平台 take-down 处理。

---

## 法源

**公平交易法第 21 条** 禁止对商品（含服务）为虚伪不实或引人错误之表示，影响交易决定。违反者罚锾 NT$ 5 万 ～ 2500 万（公平交易法第 42 条）。

llamppost 上的 skill / persona / avatar listing 属于商业性广告，受此法规范。

---

## 四类高风险用语

### 1. 绝对化用语（高风险、客观指涉一律退件）

| 词 | 不能写 | 可以写 |
|---|---|---|
| 保证 | 保证爆红 / 保证有效 / 保证赚到钱 | 保证隐私（事实陈述）/ 不保证效果 |
| 绝对 | 绝对提升 10 倍 / 绝对最强 | 绝对诚实写的限制（自我评价） |
| 100% / 必定 / 一定 | 100% 有效 / 一定爆款 | （建议避用） |

**判断准则**：绝对化用语接「结果承诺」= 违法；接「事实陈述」= OK。

### 2. 最高级用语（要客观数据佐证）

| 词 | 不能写 | 可以写 |
|---|---|---|
| 最 X | 最强写作 AI（无数据）/ 最快 | 最舒服的体验（主观感受）/ 最方便（主观） |
| 第一 / 唯一 / 之冠 | 全台第一支 X skill / 唯一能做到 | （除非有第三方数据佐证、否则一律不写） |
| No.1 / Top | 销量 No.1 / Top creator | （建议避用） |

**判断准则**：
- 「客观事实层级」（销量 / 速度 / 效果）→ 要有第三方数据佐证
- 「主观感受层级」（最舒服 / 最方便 / 最爽）→ OK，因主观无客观标准

### 3. 永久 / 终身承诺（高法律风险）

| 词 | 不能写 | 可以写 |
|---|---|---|
| 永久 | 永久免费更新 / 永久有效 | （避用、技术上 llamppost 不担保永久） |
| 一辈子 | 一辈子不出错 | （避用） |
| 终身 X | 终身保固 / 终身免费 | （避用） |

**判断准则**：商业上不可能保证「永久」，承诺即违法。

### 4. 夸大时效 / 结果（要实际）

| 词 | 不能写 | 可以写 |
|---|---|---|
| 立竿见影 | 立竿见影提升业绩 | （避用） |
| X 分钟变高手 | 5 分钟变写作高手 | 5 分钟填完表单（具体可达） |
| 一夜暴富 / 包红 | 用这 skill 一夜暴富 | （绝对禁用） |
| 立即翻倍 | 点击立即翻倍 | （避用） |

**判断准则**：时效 + 结果承诺必须是「具体、可达、字面成立」。「5 分钟填完表格」是 OK 因为就是填表时长；「5 分钟变高手」不 OK 因为高手不是 5 分钟能变的。

---

## 例 vs 反例对照

### Skill one_liner

| 反例 | 改写 |
|---|---|
| 保证生出爆款周报、用了一定升职 | 5 分钟生出有重点的周报、给主管看的成绩向版本 |
| 全台第一支写作 AI、最强笔触 | 商业写作的 skill，含 4 种语气切换 |
| 永久免费、终身使用 | 免费上架（Hatchling tier） |

### Skill 描述段落

**反例**：
> 用我这支 skill、你绝对能成为顶尖 marketing。保证 30 天内涨 10 倍粉。

**改写**：
> 适合 marketing 想结构化自己思考流程的人。用了之后比较不会卡在「想不到要写什么」这步。实际涨粉效果取决于内容品质、平台算法、发文频率等因素。

---

## 教学提及 vs 自我承诺的区别

你的 skill 是「教别人不要过分承诺」？OK、把违禁词用引号包起来引述：

> 不要写「保证爆红」这种话。Portal AI 会抓。

引号内的「保证爆红」是 **教学提及**、不是 **自我承诺**、合法。Portal AI 会用语境判断。

---

## Portal 审核流程

1. 你 submit draft → 进 `*_drafts` table
2. Auto-review L2（AI）跑 5 类检查：禁止内容 / 品质底线 / IP 风险 / 一致性 / **过分承诺**
3. AI verdict：
   - `pass` → 自动上架
   - `flag` → 进人工 queue
   - `reject` → 自动退件、附理由
4. 人工 admin 看 flagged 跟 rejected 边界 case

你可以在 `/studio/drafts` 看到自己 draft 的 review status + reason。

---

## 违反后果

- 第一次：draft reject、给你机会改写
- 二次：人工标记、未来 submit 受更严审查
- 多次 / 严重：creator 帐号暂停 / 永久停权
- 已上架后被检举：take-down + 罚责由 creator 自负（per Terms）

---

## 自查 checklist

上架前用 `mcp-arrow` 的 `arrow.validate` 跑一轮、会在含 `保证` `绝对` 等字眼的行给 warning。你自己对照本文件判断语境。warning ≠ 自动退件、是给你 self-correct 的机会。

更严格的法律解读请参考：

- [公平交易法第 21 条全文](https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=J0150002&flno=21)
- [公平交易委员会「广告不实」案例](https://www.ftc.gov.tw/internet/main/doc/docList.aspx?uid=165&mid=165)
- [喆律「广告不实的定义」](https://zhelu.tw/post/false-advertisement)

---

> 本政策由 ESC / llamppost 维护。如有质疑、回 [github.com/illushane/llamppost-creator-kit/issues](https://github.com/illushane/llamppost-creator-kit/issues)。
