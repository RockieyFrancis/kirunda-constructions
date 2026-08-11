import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import { DEFAULT_SERVICES } from '@/lib/constants';

export default function ServicesPreview() {
  return (
    <section className="py-28 bg-ivory dark:bg-navy-deep">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-xl mb-14">
          <SectionLabel>Sec. 02 / What We Offer</SectionLabel>
          <h2 className="font-display font-semibold text-[clamp(30px,4vw,42px)] leading-tight">Our Services</h2>
          <p className="text-steel dark:text-white/60 mt-4">
            End-to-end construction and engineering services, delivered to spec, on schedule, and within budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
          {DEFAULT_SERVICES.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className="bg-white dark:bg-navy p-9 group hover:bg-navy dark:hover:bg-navy-mid transition-colors"
            >
              <span className="font-mono text-xs text-gold block mb-5">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-display text-lg mb-3 group-hover:text-white dark:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-steel dark:text-white/50 group-hover:text-white/60 transition-colors">
                {service.summary}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
