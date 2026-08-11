import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import { buildMetadata } from '@/lib/seo';
import { SITE, DEFAULT_SERVICES } from '@/lib/constants';

export const metadata = buildMetadata({
  title: 'Services',
  description: `Construction and civil engineering services offered by ${SITE.name}, across Uganda and East Africa.`,
  path: '/services'
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy text-white py-20">
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionLabel>Sec. 02 / What We Offer</SectionLabel>
          <h1 className="font-display font-semibold text-[clamp(32px,5vw,52px)] leading-tight max-w-2xl">
            Our Services
          </h1>
          <p className="text-white/65 mt-5 max-w-xl">
            End-to-end construction and engineering services — delivered to spec, on schedule, and within budget.
          </p>
        </div>
      </section>

      <section className="py-24 bg-ivory dark:bg-navy-deep">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DEFAULT_SERVICES.map((service, i) => (
              <div
                key={service.slug}
                id={service.slug}
                className="bg-white dark:bg-navy p-9 border border-line scroll-mt-24"
              >
                <span className="font-mono text-xs text-gold block mb-5">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="font-display text-xl mb-3">{service.title}</h2>
                <p className="text-sm text-steel dark:text-white/55 mb-5">{service.summary}</p>
                <Link href="/quote" className="text-xs font-mono text-gold border-b border-gold/40">
                  Request this service →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
