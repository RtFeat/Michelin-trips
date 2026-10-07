#!/usr/bin/env node
/**
 * Генерация WebP версий изображений для ускорения загрузки
 * 
 * Использование: node scripts/generate-webp.mjs
 * 
 * Требуется установка sharp: npm install --save-dev sharp
 */

import { readdir, stat } from "node:fs/promises";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "..", "public");
const IMAGES_DIR = join(PUBLIC_DIR, "images");

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png"];

async function* walkFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkFiles(fullPath);
    } else {
      yield fullPath;
    }
  }
}

async function convertToWebP(imagePath) {
  const ext = extname(imagePath).toLowerCase();
  if (!IMAGE_EXTENSIONS.includes(ext)) {
    return null;
  }

  const webpPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  
  try {
    // Проверяем нужно ли конвертировать
    try {
      const [originalStat, webpStat] = await Promise.all([
        stat(imagePath),
        stat(webpPath),
      ]);
      
      // Если WebP новее оригинала, пропускаем
      if (webpStat.mtime > originalStat.mtime) {
        return null;
      }
    } catch {
      // WebP файл не существует, продолжаем
    }

    const image = sharp(imagePath);
    const metadata = await image.metadata();
    
    await image
      .webp({ 
        quality: 80,  // Было 85, стало 80 (меньше размер)
        effort: 4,     // Было 6, стало 4 (быстрее компрессия)
      })
      .toFile(webpPath);
    
    const [originalSize, webpSize] = await Promise.all([
      stat(imagePath).then(s => s.size),
      stat(webpPath).then(s => s.size),
    ]);
    
    const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    
    return {
      path: imagePath,
      webpPath,
      originalSize,
      webpSize,
      savings,
    };
  } catch (error) {
    console.error(`Ошибка при конвертации ${imagePath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log("🖼️  Генерация WebP версий изображений...\n");
  
  const results = [];
  let totalOriginal = 0;
  let totalWebP = 0;
  
  for await (const filePath of walkFiles(IMAGES_DIR)) {
    const result = await convertToWebP(filePath);
    if (result) {
      results.push(result);
      totalOriginal += result.originalSize;
      totalWebP += result.webpSize;
      console.log(
        `✓ ${result.path.replace(PUBLIC_DIR, "")} → ${result.savings}% экономии`
      );
    }
  }
  
  if (results.length === 0) {
    console.log("✓ Все WebP файлы актуальны");
  } else {
    const totalSavings = ((totalOriginal - totalWebP) / totalOriginal * 100).toFixed(1);
    console.log(`\n✨ Обработано файлов: ${results.length}`);
    console.log(`📊 Общая экономия: ${totalSavings}% (${(totalOriginal / 1024).toFixed(0)}KB → ${(totalWebP / 1024).toFixed(0)}KB)`);
  }
}

main().catch((error) => {
  console.error("Ошибка:", error);
  process.exit(1);
});
