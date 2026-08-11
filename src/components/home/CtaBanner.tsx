import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-40" />
      <div className="relative z-10 max-w-[1180px] mx-auto px-6 text-center">
        <h2 className="font-display font-semibold text-[clamp(28px,4vw,42px)] mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-white/65 mb-9 max-w-lg mx-auto">
          Let&apos;s discuss your vision and bring it to life — free consultation, transparent pricing.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/quote"
            className="bg-gold text-navy-deep px-7 py-3.5 text-sm font-semibold hover:bg-gold-light transition-colors"
          >
            Get a Quote
          </Link>
          <Link
            href="/contact"
            className="border border-gold text-gold px-7 py-3.5 text-sm font-semibold hover:bg-gold hover:text-navy-deep transition-colors"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex gap-8 justify-center flex-wrap mt-12 text-xs text-white/50 font-mono uppercase tracking-wide">
          <span>Free Consultation</span>
          <span>Quality Guaranteed</span>
          <span>Always Available</span>
        </div>
      </div>
    </section>
  );
}
