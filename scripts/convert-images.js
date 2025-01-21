import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

async function convertImages() {
  const imageDir = path.join(process.cwd(), 'public', 'images');
  
  try {
    const files = await fs.readdir(imageDir);
    
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|JPG|png)$/)) {
        const inputPath = path.join(imageDir, file);
        const outputPath = path.join(imageDir, `${path.parse(file).name}.webp`);
        
        console.log(`Converting ${file} to WebP...`);
        
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        console.log(`Successfully converted ${file} to WebP`);
      }
    }
    
    console.log('All images converted successfully!');
  } catch (error) {
    console.error('Error converting images:', error);
  }
}

convertImages(); 