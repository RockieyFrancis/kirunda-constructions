import QuoteForm from '@/components/forms/QuoteForm';
import SectionLabel from '@/components/ui/SectionLabel';
import { buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/constants';

export const metadata = buildMetadata({
  title: 'Get a Quote',
  description: `Request a free, no-obligation construction quote from ${SITE.name}.`,
  path: '/quote'
});

export default function QuotePage() {
  return (
    <section className="bg-navy text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-40" />
      <div className="relative z-10 max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14">
        <div>
          <SectionLabel>Sec. 04 / Start a Project</SectionLabel>
          <h1 className="font-display font-semibold text-[clamp(28px,4vw,44px)]">Ready to build?</h1>
          <p className="text-white/65 mt-4 text-[15px]">
            Tell us about your project and we&apos;ll get back to you with a clear, no-obligation quote.
          </p>
          <div className="flex flex-col gap-3.5 mt-8">
            <div className="flex items-center gap-3 text-sm text-white/85">
              <span className="w-1.5 h-1.5 bg-gold flex-shrink-0" />
              Free initial consultation
            </div>
            <div className="flex items-center gap-3 text-sm text-white/85">
              <span className="w-1.5 h-1.5 bg-gold flex-shrink-0" />
              Transparent, itemized pricing
            </div>
            <div className="flex items-center gap-3 text-sm text-white/85">
              <span className="w-1.5 h-1.5 bg-gold flex-shrink-0" />
              Available 24/7 across Uganda &amp; East Africa
            </div>
          </div>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
