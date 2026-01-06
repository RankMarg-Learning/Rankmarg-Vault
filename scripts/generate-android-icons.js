import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceIcon = path.join(__dirname, '../public/app-icon.png');
const androidResPath = path.join(__dirname, '../android/app/src/main/res');

// Icon sizes for different densities
const iconSizes = {
  'mipmap-mdpi': { launcher: 48, foreground: 108 },
  'mipmap-hdpi': { launcher: 72, foreground: 162 },
  'mipmap-xhdpi': { launcher: 96, foreground: 216 },
  'mipmap-xxhdpi': { launcher: 144, foreground: 324 },
  'mipmap-xxxhdpi': { launcher: 192, foreground: 432 },
};

async function generateIcons() {
  try {
    // Check if source icon exists
    if (!fs.existsSync(sourceIcon)) {
      console.error(`Source icon not found: ${sourceIcon}`);
      process.exit(1);
    }

    console.log('Generating Android icons...');

    // Generate icons for each density
    for (const [folder, sizes] of Object.entries(iconSizes)) {
      const folderPath = path.join(androidResPath, folder);
      
      // Ensure folder exists
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }

      // Generate ic_launcher.png (square, centered)
      await sharp(sourceIcon)
        .resize(sizes.launcher, sizes.launcher, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .toFile(path.join(folderPath, 'ic_launcher.png'));

      // Generate ic_launcher_round.png (same as launcher for now)
      await sharp(sourceIcon)
        .resize(sizes.launcher, sizes.launcher, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .toFile(path.join(folderPath, 'ic_launcher_round.png'));

      // Generate ic_launcher_foreground.png (for adaptive icons)
      await sharp(sourceIcon)
        .resize(sizes.foreground, sizes.foreground, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .toFile(path.join(folderPath, 'ic_launcher_foreground.png'));

      console.log(`✓ Generated icons for ${folder}`);
    }

    console.log('\n✅ All Android icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();

