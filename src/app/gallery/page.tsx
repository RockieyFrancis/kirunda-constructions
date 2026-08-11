import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import EmptyState from '@/components/ui/EmptyState';
import { buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/constants';
import { GALLERY_IMAGES } from '@/lib/data';

export const metadata = buildMetadata({
  title: 'Gallery',
  description: `Photos from ${SITE.name}'s construction sites across Uganda.`,
  path: '/gallery'
});

export default function GalleryPage() {
  return (
    <>
      <section className="bg-navy text-white py-20">
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionLabel>Photo Gallery</SectionLabel>
          <h1 className="font-display font-semibold text-[clamp(32px,5vw,52px)] leading-tight max-w-2xl">
            Gallery
          </h1>
          <p className="text-white/65 mt-5 max-w-xl">
            Moments from our sites — from groundbreaking to finishing touches.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-navy">
        <div className="max-w-[1180px] mx-auto px-6">
          {GALLERY_IMAGES.length === 0 ? (
            <EmptyState title="No photos yet" message="Gallery photos will appear here once added." />
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {GALLERY_IMAGES.map((img, i) => (
                <div key={img} className="relative aspect-square border border-line overflow-hidden group">
                  <Image
                    src={img}
                    alt={`Kirunda Constructions site photo ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
