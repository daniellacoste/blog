import Image from 'next/image';
import Link from 'next/link';
import { getImageData } from '../utils/imageUtils';

export const metadata = {
  title: 'Photography',
  description: 'Explore my photography',
};

export default async function PhotographyPage() {
  const images = await getImageData('images/home');
  console.log(images);

  return (
    <section>
      <div className="my-8 columns-2 gap-4 sm:columns-3">
        {images.map((image) => (
          <Link key={image.src} href={image.href} passHref>
            <div className="relative mb-4 h-40 sm:h-80 cursor-pointer">
              <Image
                alt={image.alt}
                src={image.src}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}