import Link from 'next/link';
import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import { buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/constants';
import { PROJECTS } from '@/lib/data';

export const metadata = buildMetadata({
  title: 'Projects',
  description: `A selection of ${SITE.name}'s completed and ongoing construction projects across Uganda.`,
  path: '/projects'
});

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-navy text-white py-20">
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionLabel>Sec. 03 / Our Portfolio</SectionLabel>
          <h1 className="font-display font-semibold text-[clamp(32px,5vw,52px)] leading-tight max-w-2xl">
            Projects
          </h1>
          <p className="text-white/65 mt-5 max-w-xl">
            A look at our work on the ground — from foundations to finished structures.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-navy">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group block border border-line">
                <div className="relative aspect-[4/3] bg-navy-mid overflow-hidden">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="font-mono text-[11px] text-gold uppercase mb-1.5">{project.category}</div>
                  <h2 className="font-display text-base">{project.title}</h2>
                  <p className="text-xs text-steel mt-1">{project.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
