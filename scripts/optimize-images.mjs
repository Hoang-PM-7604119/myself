import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

async function optimizeProfile() {
  const profileDir = 'public/images/profile';
  const origPng = path.join(profileDir, 'minh-hoang-pham.png');

  // 1. Generate 800w WebP (desktop/retina)
  await sharp(origPng)
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 86, effort: 6 })
    .toFile(path.join(profileDir, 'minh-hoang-pham.webp'));

  // 2. Generate 420w WebP (mobile)
  await sharp(origPng)
    .resize({ width: 420, withoutEnlargement: true })
    .webp({ quality: 84, effort: 6 })
    .toFile(path.join(profileDir, 'minh-hoang-pham-mobile.webp'));

  // 3. Replace giant 2.7MB PNG with optimized 800w PNG fallback (~140KB)
  const optBuffer = await sharp(origPng)
    .resize({ width: 800, withoutEnlargement: true })
    .png({ quality: 85, compressionLevel: 9, effort: 7 })
    .toBuffer();
  await fs.writeFile(origPng, optBuffer);
  console.log('✓ Profile images optimized (WebP + Mobile WebP + Optimized PNG)');
}

async function optimizePeople() {
  const peopleDir = 'public/images/people';
  
  // pham-minh-hoang.png (1.5MB) -> 400x400
  const pmhPath = path.join(peopleDir, 'pham-minh-hoang.png');
  const pmhBuf = await sharp(pmhPath)
    .resize({ width: 400, height: 400, fit: 'cover' })
    .png({ quality: 85, compressionLevel: 9 })
    .toBuffer();
  await fs.writeFile(pmhPath, pmhBuf);

  // pham-hong-thai.jpg (655KB) -> 400x400
  const phtPath = path.join(peopleDir, 'pham-hong-thai.jpg');
  const phtBuf = await sharp(phtPath)
    .resize({ width: 400, height: 400, fit: 'cover' })
    .jpeg({ quality: 84, mozjpeg: true })
    .toBuffer();
  await fs.writeFile(phtPath, phtBuf);
  console.log('✓ People portraits optimized');
}

async function optimizeProjects() {
  const beeDir = 'public/images/projects/bee-monitoring';
  const beeImages = [
    'field-deployment.png',
    'ai-yolov5-detection.png',
    'hardware-installation.png',
    'mobile-app.png',
    'system-architecture.png',
    'web-dashboard.png',
    'live-stream-monitoring.png'
  ];

  for (const name of beeImages) {
    const file = path.join(beeDir, name);
    try {
      const buf = await sharp(file)
        .resize({ width: 1200, withoutEnlargement: true })
        .png({ quality: 80, compressionLevel: 9 })
        .toBuffer();
      await fs.writeFile(file, buf);
      console.log(`✓ Optimized ${name}`);
    } catch (e) {
      console.error(`Skipped ${name}:`, e.message);
    }
  }

  // Cover image: smart-marine-aquaculture.jpg (567KB)
  const aquaCover = 'public/images/projects/smart-marine-aquaculture.jpg';
  const aquaBuf = await sharp(aquaCover)
    .resize({ width: 1200, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  await fs.writeFile(aquaCover, aquaBuf);
  console.log('✓ Optimized smart-marine-aquaculture.jpg');
}

async function run() {
  await optimizeProfile();
  await optimizePeople();
  await optimizeProjects();
  console.log('All image optimizations complete!');
}

run();
