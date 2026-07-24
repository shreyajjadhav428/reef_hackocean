import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, 'src', 'assets', 'images');

async function processImages() {
  try {
    const files = await fs.promises.readdir(directoryPath);
    
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
        const filePath = path.join(directoryPath, file);
        const newFileName = file.replace(new RegExp(`${ext}$`), '.webp');
        const newFilePath = path.join(directoryPath, newFileName);
        
        console.log(`Processing: ${file}`);
        
        try {
          // Process with sharp
          await sharp(filePath)
            .resize({ width: 1200, withoutEnlargement: true })
            .webp({ quality: 80 })
            .toFile(newFilePath);
            
          console.log(`Successfully created: ${newFileName}`);
          
          // Delete original file
          await fs.promises.unlink(filePath);
          console.log(`Deleted original: ${file}`);
        } catch (err) {
          console.error(`Error processing ${file}:`, err);
        }
      }
    }
    console.log('Finished processing all images.');
  } catch (err) {
    console.error('Unable to scan directory: ' + err);
  }
}

processImages();
