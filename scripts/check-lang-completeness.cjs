#!/usr/bin/env node

/**
 * Language Completeness Checker (folder model)
 * 確保每個語言資料夾 (zh-TW / zh-CN / ja) 的檔案樹都跟 en/ 對齊。
 *
 * 結構：每語言一個頂層資料夾 en/ zh-TW/ zh-CN/ ja/，各自完整一份 Kit。
 * 本檢查比對「相對檔案路徑」是否齊全（不比內容）；缺漏或多餘都會列出。
 *
 *   node scripts/check-lang-completeness.cjs
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BASE = 'en';
const LANGS = ['zh-TW', 'zh-CN', 'ja'];
const IGNORE = new Set(['.DS_Store']);

function listFiles(dir) {
  const out = [];
  (function walk(rel) {
    const abs = path.join(ROOT, dir, rel);
    for (const name of fs.readdirSync(abs)) {
      if (IGNORE.has(name)) continue;
      const childRel = rel ? path.join(rel, name) : name;
      if (fs.statSync(path.join(abs, name)).isDirectory()) walk(childRel);
      else out.push(childRel);
    }
  })('');
  return new Set(out);
}

const baseFiles = listFiles(BASE);
let ok = true;

console.log(`Creator Kit 語言完整性（基準：${BASE}/，共 ${baseFiles.size} 檔）`);
console.log('-'.repeat(56));

for (const lang of LANGS) {
  if (!fs.existsSync(path.join(ROOT, lang))) { console.log(`\n[X] ${lang}/ 不存在`); ok = false; continue; }
  const langFiles = listFiles(lang);
  const missing = [...baseFiles].filter((f) => !langFiles.has(f)).sort();
  const extra = [...langFiles].filter((f) => !baseFiles.has(f)).sort();
  if (!missing.length && !extra.length) {
    console.log(`\n[OK] ${lang}/ 與 ${BASE}/ 結構一致`);
  } else {
    ok = false;
    console.log(`\n[!] ${lang}/`);
    missing.forEach((f) => console.log(`   缺少: ${f}`));
    extra.forEach((f) => console.log(`   多餘: ${f}`));
  }
}

console.log('\n' + '-'.repeat(56));
console.log(ok ? '[OK] 全部語言資料夾結構齊全' : '[X] 有缺漏，請補齊');
process.exit(ok ? 0 : 1);
