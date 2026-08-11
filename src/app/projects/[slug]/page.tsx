import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';
import SectionLabel from '@/components/ui/SectionLabel';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return buildMetadata({ title: 'Project Not Found' });
  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`
  });
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <section className="bg-navy text-white py-16">
        <div className="max-w-[1180px] mx-auto px-6">
          <Link href="/projects" className="text-xs font-mono text-gold-light mb-6 inline-block">
            ← All Projects
          </Link>
          <SectionLabel>{project.category}</SectionLabel>
          <h1 className="font-display font-semibold text-[clamp(28px,4.5vw,48px)] leading-tight max-w-2xl">
            {project.title}
          </h1>
          <p className="text-white/60 mt-3 text-sm">{project.location}</p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-navy">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="relative aspect-[16/9] mb-10 border border-line">
            <Image src={project.cover} alt={project.title} fill className="object-cover" priority />
          </div>

          <p className="text-[15.5px] text-steel dark:text-white/60 max-w-2xl mb-12 leading-relaxed">
            {project.description}
          </p>

          {project.images.length > 1 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {project.images.map((img, i) => (
                <div key={img} className="relative aspect-square border border-line">
                  <Image src={img} alt={`${project.title} photo ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          )}

          <div className="mt-14 pt-10 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-steel dark:text-white/50">Have a similar project in mind?</p>
            <Link
              href="/quote"
              className="bg-navy dark:bg-gold text-white dark:text-navy-deep px-6 py-3 text-sm font-semibold"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
