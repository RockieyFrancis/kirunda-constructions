import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import { buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/constants';
import { PROJECTS, ARCH_PLANS } from '@/lib/data';

export const metadata = buildMetadata({ title: 'Sitemap', description: `Site map for ${SITE.name}.`, path: '/sitemap' });

const SECTIONS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Main Pages',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Projects', href: '/projects' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Architectural Plans', href: '/architectural-plans' },
      { label: 'Contact', href: '/contact' },
      { label: 'Get a Quote', href: '/quote' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' }
    ]
  }
];

export default function SitemapPage() {
  return (
    <section className="py-24 bg-white dark:bg-navy">
      <div className="max-w-[900px] mx-auto px-6">
        <SectionLabel>Site Map</SectionLabel>
        <h1 className="font-display font-semibold text-3xl mb-10">Sitemap</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="font-mono text-xs uppercase tracking-wide text-gold mb-4">{section.title}</h2>
              <ul className="space-y-2.5">
                {section.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-steel dark:text-white/65 hover:text-gold">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="font-mono text-xs uppercase tracking-wide text-gold mb-4">Projects</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {PROJECTS.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="text-sm text-steel dark:text-white/65 hover:text-gold">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-wide text-gold mb-4">Architectural Plans</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {ARCH_PLANS.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/architectural-plans/${p.slug}`}
                  className="text-sm text-steel dark:text-white/65 hover:text-gold"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
