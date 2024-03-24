// imageUtils.js
import { readdir, readFile } from 'fs/promises';
import path from 'path';

export async function getImageData(directory) {
  const imagesDirectory = path.join(process.cwd(), 'public', directory);
  const imageFiles = await readdir(imagesDirectory);

  const imagesMetadataPath = path.join(imagesDirectory, 'images.json');
  const imagesMetadataJson = await readFile(imagesMetadataPath, 'utf-8');
  const imagesMetadata = JSON.parse(imagesMetadataJson);

  const images = imageFiles
    .filter((file) => file !== 'images.json')
    .map((file) => {
      const metadata = imagesMetadata.find((item) => item.fileName === file);
      return {
        src: `/${directory}/${file}`,
        alt: metadata?.alt || '',
        href: `/${directory}/${file}`,
      };
    });

  return images;
}