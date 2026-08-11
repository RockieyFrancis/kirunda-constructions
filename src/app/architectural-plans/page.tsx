import Link from 'next/link';
import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import { buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/constants';
import { ARCH_PLANS } from '@/lib/data';

export const metadata = buildMetadata({
  title: 'Architectural Plans',
  description: `Ready-made and custom architectural plans from ${SITE.name}.`,
  path: '/architectural-plans'
});

export default function ArchitecturalPlansPage() {
  return (
    <>
      <section className="bg-navy text-white py-20">
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionLabel>Architectural Plans</SectionLabel>
          <h1 className="font-display font-semibold text-[clamp(32px,5vw,52px)] leading-tight max-w-2xl">
            Architectural Plans
          </h1>
          <p className="text-white/65 mt-5 max-w-xl">
            Professionally drafted plans that balance vision, budget, and buildability — or we can design one
            around your land and needs.
          </p>
        </div>
      </section>

      <section className="py-24 bg-ivory dark:bg-navy-deep">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARCH_PLANS.map((plan) => (
              <Link
                key={plan.slug}
                href={`/architectural-plans/${plan.slug}`}
                className="group block bg-white dark:bg-navy border border-line"
              >
                <div className="relative aspect-[4/3] bg-navy-mid overflow-hidden">
                  <Image
                    src={plan.cover}
                    alt={plan.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-display text-base mb-2">{plan.title}</h2>
                  <p className="text-xs text-steel dark:text-white/50 mb-3">{plan.summary}</p>
                  <div className="flex gap-3 text-[11px] font-mono text-gold uppercase">
                    <span>{plan.bedrooms} bed</span>
                    <span>{plan.bathrooms} bath</span>
                    <span>{plan.areaSqm} sqm</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14 border border-dashed border-line p-8 text-center">
            <p className="text-sm text-steel dark:text-white/55">
              Don&apos;t see what you need? We design custom architectural plans tailored to your land, budget,
              and lifestyle.
            </p>
            <Link href="/quote" className="text-sm font-mono text-gold border-b border-gold/40 mt-3 inline-block">
              Request a custom plan →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
