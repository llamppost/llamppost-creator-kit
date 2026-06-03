# Creator Kit · 內容政策

語言：[English](https://github.com/illushane/llamppost-creator-kit/blob/main/docs/content-policy.md) · [繁體中文](https://github.com/illushane/llamppost-creator-kit/blob/zh-TW/docs/content-policy.md) · [简体中文](https://github.com/illushane/llamppost-creator-kit/blob/zh-CN/docs/content-policy.md) · [日本語](https://github.com/illushane/llamppost-creator-kit/blob/ja/docs/content-policy.md)

llamppost 在台灣經營。所有上架內容必須符合 **公平交易法第 21 條**（不實廣告）。違反者由 Portal AI 自動審核退件，反覆違反者由平台 take-down 處理。

---

## 法源

**公平交易法第 21 條** 禁止對商品（含服務）為虛偽不實或引人錯誤之表示，影響交易決定。違反者罰鍰 NT$ 5 萬 ～ 2500 萬（公平交易法第 42 條）。

llamppost 上的 skill / persona / avatar listing 屬於商業性廣告，受此法規範。

---

## 四類高風險用語

### 1. 絕對化用語（高風險、客觀指涉一律退件）

| 詞 | 不能寫 | 可以寫 |
|---|---|---|
| 保證 | 保證爆紅 / 保證有效 / 保證賺到錢 | 保證隱私（事實陳述）/ 不保證效果 |
| 絕對 | 絕對提升 10 倍 / 絕對最強 | 絕對誠實寫的限制（自我評價） |
| 100% / 必定 / 一定 | 100% 有效 / 一定爆款 | （建議避用） |

**判斷準則**：絕對化用語接「結果承諾」= 違法；接「事實陳述」= OK。

### 2. 最高級用語（要客觀數據佐證）

| 詞 | 不能寫 | 可以寫 |
|---|---|---|
| 最 X | 最強寫作 AI（無數據）/ 最快 | 最舒服的體驗（主觀感受）/ 最方便（主觀） |
| 第一 / 唯一 / 之冠 | 全台第一支 X skill / 唯一能做到 | （除非有第三方數據佐證、否則一律不寫） |
| No.1 / Top | 銷量 No.1 / Top creator | （建議避用） |

**判斷準則**：
- 「客觀事實層級」（銷量 / 速度 / 效果）→ 要有第三方數據佐證
- 「主觀感受層級」（最舒服 / 最方便 / 最爽）→ OK，因主觀無客觀標準

### 3. 永久 / 終身承諾（高法律風險）

| 詞 | 不能寫 | 可以寫 |
|---|---|---|
| 永久 | 永久免費更新 / 永久有效 | （避用、技術上 llamppost 不擔保永久） |
| 一輩子 | 一輩子不出錯 | （避用） |
| 終身 X | 終身保固 / 終身免費 | （避用） |

**判斷準則**：商業上不可能保證「永久」，承諾即違法。

### 4. 誇大時效 / 結果（要實際）

| 詞 | 不能寫 | 可以寫 |
|---|---|---|
| 立竿見影 | 立竿見影提升業績 | （避用） |
| X 分鐘變高手 | 5 分鐘變寫作高手 | 5 分鐘填完表單（具體可達） |
| 一夜暴富 / 包紅 | 用這 skill 一夜暴富 | （絕對禁用） |
| 立即翻倍 | 點擊立即翻倍 | （避用） |

**判斷準則**：時效 + 結果承諾必須是「具體、可達、字面成立」。「5 分鐘填完表格」是 OK 因為就是填表時長；「5 分鐘變高手」不 OK 因為高手不是 5 分鐘能變的。

---

## 例 vs 反例對照

### Skill one_liner

| 反例 | 改寫 |
|---|---|
| 保證生出爆款週報、用了一定升職 | 5 分鐘生出有重點的週報、給主管看的成績向版本 |
| 全台第一支寫作 AI、最強筆觸 | 商業寫作的 skill，含 4 種語氣切換 |
| 永久免費、終身使用 | 免費上架（Hatchling tier） |

### Skill 描述段落

**反例**：
> 用我這支 skill、你絕對能成為頂尖 marketing。保證 30 天內漲 10 倍粉。

**改寫**：
> 適合 marketing 想結構化自己思考流程的人。用了之後比較不會卡在「想不到要寫什麼」這步。實際漲粉效果取決於內容品質、平台演算法、發文頻率等因素。

---

## 教學提及 vs 自我承諾的區別

你的 skill 是「教別人不要過分承諾」？OK、把違禁詞用引號包起來引述：

> 不要寫「保證爆紅」這種話。Portal AI 會抓。

引號內的「保證爆紅」是 **教學提及**、不是 **自我承諾**、合法。Portal AI 會用語境判斷。

---

## Portal 審核流程

1. 你 submit draft → 進 `*_drafts` table
2. Auto-review L2（AI）跑 5 類檢查：禁止內容 / 品質底線 / IP 風險 / 一致性 / **過分承諾**
3. AI verdict：
   - `pass` → 自動上架
   - `flag` → 進人工 queue
   - `reject` → 自動退件、附理由
4. 人工 admin 看 flagged 跟 rejected 邊界 case

你可以在 `/studio/drafts` 看到自己 draft 的 review status + reason。

---

## 違反後果

- 第一次：draft reject、給你機會改寫
- 二次：人工標記、未來 submit 受更嚴審查
- 多次 / 嚴重：creator 帳號暫停 / 永久停權
- 已上架後被檢舉：take-down + 罰責由 creator 自負（per Terms）

---

## 自查 checklist

上架前用 `mcp-arrow` 的 `arrow.validate` 跑一輪、會在含 `保證` `絕對` 等字眼的行給 warning。你自己對照本文件判斷語境。warning ≠ 自動退件、是給你 self-correct 的機會。

更嚴格的法律解讀請參考：

- [公平交易法第 21 條全文](https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=J0150002&flno=21)
- [公平交易委員會「廣告不實」案例](https://www.ftc.gov.tw/internet/main/doc/docList.aspx?uid=165&mid=165)
- [喆律「廣告不實的定義」](https://zhelu.tw/post/false-advertisement)

---

> 本政策由 ESC / llamppost 維護。如有質疑、回 [github.com/illushane/llamppost-creator-kit/issues](https://github.com/illushane/llamppost-creator-kit/issues)。
