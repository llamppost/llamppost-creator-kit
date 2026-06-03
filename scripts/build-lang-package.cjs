#!/usr/bin/env node

/**
 * Build Language-Specific Creator Kit Package
 * 為特定語言的 Creator 構建專用資料夾
 * 
 * 使用方式：
 *   node scripts/build-lang-package.cjs zh-TW      # 構建繁體中文包
 *   node scripts/build-lang-package.cjs en         # 構建英文包
 *   node scripts/build-lang-package.cjs all        # 構建所有語言包
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LANGUAGES = {
  'en': 'English',
  'zh-TW': '繁體中文',
  'zh-CN': '簡體中文',
  'ja': '日本語'
};

const lang = process.argv[2] || 'en';
const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

function buildPackage(lang) {
  const langLabel = LANGUAGES[lang] || lang;
  const pkgName = `llamppost-creator-kit-${lang}`;
  const pkgPath = path.join(DIST, pkgName);

  console.log(`\n📦 構建 ${langLabel} 包: ${pkgName}`);
  console.log('━'.repeat(60));

  // 清除舊資料夾
  if (fs.existsSync(pkgPath)) {
    execSync(`rm -rf "${pkgPath}"`);
  }
  fs.mkdirSync(pkgPath, { recursive: true });

  // 複製根層檔案（README）
  const readmeFile = lang === 'en' 
    ? 'README.md' 
    : `README.${lang}.md`;
  const readmeSrc = path.join(ROOT, readmeFile);
  const readmeDst = path.join(pkgPath, 'README.md');
  
  if (fs.existsSync(readmeSrc)) {
    fs.copyFileSync(readmeSrc, readmeDst);
    console.log(`✓ README`);
  }

  // 複製 docs/
  const docsSrc = path.join(ROOT, 'docs');
  const docsDst = path.join(pkgPath, 'docs');
  fs.mkdirSync(docsDst, { recursive: true });

  const docFiles = fs.readdirSync(docsSrc).filter(f => f.endsWith('.md'));
  docFiles.forEach(file => {
    // 判斷檔案語言版本
    let shouldCopy = false;
    if (lang === 'en' && !file.includes('.')) {
      shouldCopy = true; // 英文是基礎檔名（不含語言後綴）
    } else if (file.includes(`.${lang}.`)) {
      shouldCopy = true; // 其他語言有明確後綴
    }

    if (shouldCopy) {
      const src = path.join(docsSrc, file);
      // 移除語言後綴，統一成沒有後綴的檔名（方便使用）
      const dstName = file.replace(`.${lang}`, '').replace('.md', '.md');
      const dst = path.join(docsDst, dstName);
      fs.copyFileSync(src, dst);
    }
  });
  console.log(`✓ docs/ (${fs.readdirSync(docsDst).length} 檔案)`);

  // 複製 policy/
  const policySrc = path.join(ROOT, 'policy');
  const policyDst = path.join(pkgPath, 'policy');
  fs.mkdirSync(policyDst, { recursive: true });

  const policyFiles = fs.readdirSync(policySrc).filter(f => f.endsWith('.md'));
  policyFiles.forEach(file => {
    let shouldCopy = false;
    if (lang === 'en' && file === 'policy.en.md') {
      shouldCopy = true;
    } else if (file === `policy.${lang}.md`) {
      shouldCopy = true;
    } else if (file === 'README.md') {
      shouldCopy = true;
    }

    if (shouldCopy) {
      const src = path.join(policySrc, file);
      // 統一成 policy.md
      const dst = path.join(policyDst, file === 'policy.en.md' ? 'policy.md' : 'policy.md');
      fs.copyFileSync(src, dst);
    }
  });
  console.log(`✓ policy/ (${fs.readdirSync(policyDst).length} 檔案)`);

  // 複製 skills/（原樣複製，template 和範例都包含）
  const skillsSrc = path.join(ROOT, 'skills');
  const skillsDst = path.join(pkgPath, 'skills');
  execSync(`cp -r "${skillsSrc}" "${skillsDst}"`);
  console.log(`✓ skills/ (nested structure)`);

  // 複製 assets/
  const assetsSrc = path.join(ROOT, 'assets');
  if (fs.existsSync(assetsSrc)) {
    const assetsDst = path.join(pkgPath, 'assets');
    execSync(`cp -r "${assetsSrc}" "${assetsDst}"`);
    console.log(`✓ assets/`);
  }

  // 生成 LANGUAGE_INFO.json
  const langInfo = {
    language: lang,
    label: langLabel,
    buildDate: new Date().toISOString(),
    version: '1.0.0',
    description: `llamppost Creator Kit - ${langLabel}`
  };
  fs.writeFileSync(
    path.join(pkgPath, 'LANGUAGE_INFO.json'),
    JSON.stringify(langInfo, null, 2)
  );
  console.log(`✓ LANGUAGE_INFO.json`);

  // 生成 tar.gz 或 zip
  const archiveName = `${pkgName}.tar.gz`;
  const archivePath = path.join(DIST, archiveName);
  try {
    execSync(`cd "${DIST}" && tar -czf "${archiveName}" "${pkgName}"`);
    const size = (fs.statSync(archivePath).size / 1024 / 1024).toFixed(2);
    console.log(`✓ 壓縮包: ${archiveName} (${size} MB)`);
  } catch (e) {
    console.log(`⚠️  壓縮失敗（可能沒有 tar）`);
  }

  console.log(`\n✅ ${langLabel} 包構建完成！`);
  console.log(`位置: ${pkgPath}`);
}

// 主邏輯
if (!fs.existsSync(DIST)) {
  fs.mkdirSync(DIST, { recursive: true });
}

if (lang === 'all') {
  Object.keys(LANGUAGES).forEach(l => buildPackage(l));
  console.log(`\n🎉 所有語言包構建完成！`);
  console.log(`位置: ${DIST}`);
} else if (LANGUAGES[lang]) {
  buildPackage(lang);
} else {
  console.error(`❌ 未知語言: ${lang}`);
  console.error(`支援的語言: ${Object.keys(LANGUAGES).join(', ')}, all`);
  process.exit(1);
}
