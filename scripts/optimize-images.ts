import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

async function getFiles(dir: string): Promise<string[]> {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getFiles(fullPath)));
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

async function main() {
  const images = await getFiles('public/images');
  console.log(`Found ${images.length} images.`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of images) {
    const stat = await fs.promises.stat(file);
    totalBefore += stat.size;

    // Check if large file (> 200KB or width > 1600)
    const meta = await sharp(file).metadata();
    const isLarge = stat.size > 200 * 1024 || (meta.width && meta.width > 1600);

    if (isLarge) {
      console.log(`Optimizing: ${file} (${(stat.size / 1024).toFixed(1)} KB, ${meta.width}x${meta.height})`);
      const targetWidth = meta.width && meta.width > 1600 ? 1600 : meta.width;

      if (/\.(jpg|jpeg)$/i.test(file)) {
        const buffer = await sharp(file)
          .resize({ width: targetWidth, withoutEnlargement: true })
          .jpeg({ quality: 82, mozjpeg: true })
          .toBuffer();

        await fs.promises.writeFile(file, buffer);
        const newStat = await fs.promises.stat(file);
        totalAfter += newStat.size;
        console.log(`  -> ${(newStat.size / 1024).toFixed(1)} KB`);
      } else if (/\.png$/i.test(file)) {
        const buffer = await sharp(file)
          .resize({ width: targetWidth, withoutEnlargement: true })
          .png({ quality: 85, compressionLevel: 9 })
          .toBuffer();

        await fs.promises.writeFile(file, buffer);
        const newStat = await fs.promises.stat(file);
        totalAfter += newStat.size;
        console.log(`  -> ${(newStat.size / 1024).toFixed(1)} KB`);
      }
    } else {
      totalAfter += stat.size;
    }

    // Also generate webp versions for project covers
    if (file.includes('public/images/projects/') && !file.includes('/bee-monitoring/') && !file.includes('/can-gio/') && !file.includes('/coral-reef/') && !file.includes('/smart-aquaculture/')) {
      const webpPath = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      console.log(`Generating WebP for: ${file} -> ${webpPath}`);
      await sharp(file)
        .webp({ quality: 85 })
        .toFile(webpPath);
    }
  }

  console.log(`\nOptimization complete!`);
  console.log(`Original total: ${(totalBefore / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Optimized total: ${(totalAfter / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Saved: ${((totalBefore - totalAfter) / (1024 * 1024)).toFixed(2)} MB (${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%)`);
}

main().catch(console.error);
