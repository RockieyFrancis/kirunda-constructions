import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ARCH_PLANS } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';
import SectionLabel from '@/components/ui/SectionLabel';

export function generateStaticParams() {
  return ARCH_PLANS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const plan = ARCH_PLANS.find((p) => p.slug === params.slug);
  if (!plan) return buildMetadata({ title: 'Plan Not Found' });
  return buildMetadata({ title: plan.title, description: plan.summary, path: `/architectural-plans/${plan.slug}` });
}

export default function PlanDetailPage({ params }: { params: { slug: string } }) {
  const plan = ARCH_PLANS.find((p) => p.slug === params.slug);
  if (!plan) notFound();

  return (
    <section className="py-16 bg-white dark:bg-navy">
      <div className="max-w-[1180px] mx-auto px-6">
        <Link href="/architectural-plans" className="text-xs font-mono text-gold mb-6 inline-block">
          ← All Plans
        </Link>
        <SectionLabel>Architectural Plan</SectionLabel>
        <h1 className="font-display font-semibold text-[clamp(28px,4.5vw,44px)] leading-tight mb-8">
          {plan.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10">
          <div className="relative aspect-[4/3] border border-line">
            <Image src={plan.cover} alt={plan.title} fill className="object-cover" priority />
          </div>
          <div>
            <p className="text-[15px] text-steel dark:text-white/60 mb-6">{plan.summary}</p>
            <div className="border border-line p-6 space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-steel dark:text-white/50">Bedrooms</span>
                <span className="font-mono">{plan.bedrooms}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-steel dark:text-white/50">Bathrooms</span>
                <span className="font-mono">{plan.bathrooms}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-steel dark:text-white/50">Floor Area</span>
                <span className="font-mono">{plan.areaSqm} sqm</span>
              </div>
            </div>
            <Link
              href="/quote"
              className="block text-center bg-navy dark:bg-gold text-white dark:text-navy-deep px-6 py-3.5 text-sm font-semibold"
            >
              Request This Plan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
