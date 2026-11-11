import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const inputDir = "public/images/original/hero";
const outputDir = "public/images/optimized/hero";

fs.mkdirSync(outputDir, { recursive: true });

const files = fs
  .readdirSync(inputDir)
  .filter((file) => /\.(png|jpe?g)$/i.test(file));
for (const file of files) {
  const inputPath = path.join(inputDir, file);
  const name = path.parse(file).name;

  const webpPath = path.join(outputDir, `${name}.webp`);
  const avifPath = path.join(outputDir, `${name}.avif`);

  // Generate WebP
  await sharp(inputPath)
    .webp({
      quality: 85,
      alphaQuality: 90,
      effort: 6,
    })
    .toFile(webpPath);

  // Generate AVIF
  await sharp(inputPath)
    .avif({
      quality: 65,
      effort: 6,
    })
    .toFile(avifPath);

  const originalSize = fs.statSync(inputPath).size / 1024;
  const webpSize = fs.statSync(webpPath).size / 1024;
  const avifSize = fs.statSync(avifPath).size / 1024;

  console.log(`\n${file}`);
  console.log(`Original: ${originalSize.toFixed(1)} KB`);
  console.log(`WebP:     ${webpSize.toFixed(1)} KB`);
  console.log(`AVIF:     ${avifSize.toFixed(1)} KB`);
}

console.log("\nImage optimization completed!");
