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
    <section className="my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <Link key={image.src} href={image.href} passHref>
            <div className="relative w-full h-0 pb-[100%] cursor-pointer">
              <Image
                alt={image.alt}
                src={image.src}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}