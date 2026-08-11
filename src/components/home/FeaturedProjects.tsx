import Link from 'next/link';
import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import { PROJECTS } from '@/lib/data';

export default function FeaturedProjects() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section className="py-28 bg-white dark:bg-navy">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-xl">
            <SectionLabel>Sec. 03 / Our Portfolio</SectionLabel>
            <h2 className="font-display font-semibold text-[clamp(30px,4vw,42px)] leading-tight">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-mono text-gold border-b border-gold/40 hover:border-gold pb-0.5"
          >
            View all projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project) => (
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
                <h3 className="font-display text-base">{project.title}</h3>
                <p className="text-xs text-steel mt-1">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
