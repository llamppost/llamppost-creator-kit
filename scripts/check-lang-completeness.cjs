#!/usr/bin/env node

/**
 * Language Completeness Checker for llamppost-creator-kit
 * 確保每個 markdown 檔案都有完整的語言版本
 * 
 * 使用方式：
 *   node scripts/check-lang-completeness.cjs              # 檢查所有檔案
 *   node scripts/check-lang-completeness.cjs --missing    # 只顯示缺失的檔案
 *   node scripts/check-lang-completeness.cjs --report     # 生成完整報告
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES = ['en', 'zh-TW', 'zh-CN', 'ja'];
const ROOT = path.join(__dirname, '..');
const TARGETS = ['README', 'docs', 'policy'];

const args = process.argv.slice(2);
const SHOW_MISSING_ONLY = args.includes('--missing');
const SHOW_REPORT = args.includes('--report');

console.log('🌍 llamppost-creator-kit 語言完整性檢查');
console.log('━'.repeat(60));

const results = {};
let totalFiles = 0;
let totalMissing = 0;

TARGETS.forEach(target => {
  results[target] = {
    files: {},
    missing: []
  };

  const targetPath = path.join(ROOT, target);
  if (!fs.existsSync(targetPath)) return;

  // 列舉目錄中所有 .md 檔案
  const files = fs.readdirSync(targetPath).filter(f => f.endsWith('.md'));

  // 找出基礎檔名（去掉語言後綴）
  const baseNames = new Set();
  files.forEach(file => {
    let baseName = file;
    LANGUAGES.forEach(lang => {
      const suffix = lang === 'en' ? '' : `.${lang}`;
      if (file.endsWith(`${suffix}.md`)) {
        baseName = file.replace(new RegExp(`${suffix}\\.md$`), '.md');
      }
    });
    baseNames.add(baseName);
  });

  // 檢查每個基礎檔名是否有所有語言版本
  baseNames.forEach(baseName => {
    const langs = {
      en: `${baseName.replace('.md', '')}.md`,
      'zh-TW': `${baseName.replace('.md', '')}.zh-TW.md`,
      'zh-CN': `${baseName.replace('.md', '')}.zh-CN.md`,
      ja: `${baseName.replace('.md', '')}.ja.md`
    };

    results[target].files[baseName] = {};
    let missing = [];

    LANGUAGES.forEach(lang => {
      const fileName = langs[lang];
      const filePath = path.join(targetPath, fileName);
      const exists = fs.existsSync(filePath);
      results[target].files[baseName][lang] = exists;
      if (!exists) {
        missing.push(lang);
      }
    });

    if (missing.length > 0) {
      results[target].missing.push({
        file: baseName,
        langs: missing
      });
      totalMissing++;
    }

    totalFiles++;
  });
});

// 輸出結果
if (SHOW_MISSING_ONLY) {
  console.log('\n❌ 缺失的語言版本：\n');
  
  Object.entries(results).forEach(([target, data]) => {
    if (data.missing.length === 0) return;
    
    console.log(`\n📁 ${target}/`);
    data.missing.forEach(({ file, langs }) => {
      console.log(`   ├─ ${file}`);
      console.log(`   │  缺失: ${langs.map(l => `【${l}】`).join(' ')}`);
    });
  });
} else {
  Object.entries(results).forEach(([target, data]) => {
    console.log(`\n📁 ${target}/`);
    
    const fileCount = Object.keys(data.files).length;
    const missingCount = data.missing.length;
    const completeCount = fileCount - missingCount;
    
    console.log(`   檔案數: ${fileCount} | 完整: ${completeCount} | 缺失: ${missingCount}`);
    
    if (SHOW_REPORT) {
      Object.entries(data.files).forEach(([file, langs]) => {
        const status = Object.values(langs).every(v => v) ? '✅' : '⚠️';
        console.log(`   ${status} ${file}`);
        Object.entries(langs).forEach(([lang, exists]) => {
          console.log(`      ${exists ? '✓' : '✗'} ${lang}`);
        });
      });
    }
  });
}

// 統計摘要
console.log('\n' + '━'.repeat(60));
console.log(`\n📊 統計摘要`);
console.log(`   總檔案數: ${totalFiles}`);
console.log(`   缺失語言版本: ${totalMissing}`);

if (totalMissing === 0) {
  console.log(`\n✅ 完美！所有檔案都有完整的語言版本。`);
  process.exit(0);
} else {
  console.log(`\n⚠️  有 ${totalMissing} 個檔案缺失語言版本。`);
  console.log(`執行以下指令查看詳情：`);
  console.log(`   node scripts/check-lang-completeness.cjs --missing`);
  process.exit(1);
}
