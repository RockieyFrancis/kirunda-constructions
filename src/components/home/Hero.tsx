import Link from 'next/link';
import { CONTACT, SITE } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] bg-navy text-white flex items-center overflow-hidden">
      <div
        className="absolute inset-0 blueprint-grid"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 60% at 60% 40%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 60% 40%, black 20%, transparent 75%)'
        }}
      />
      <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[70%] rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1180px] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 items-end">
        <div>
          <div className="font-mono text-[12.5px] text-gold-light uppercase tracking-widest mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-gold" />
            Construction &amp; Civil Engineering — Uganda &amp; East Africa
          </div>
          <h1 className="font-display font-semibold text-[clamp(40px,6vw,72px)] leading-[1.03] tracking-tight mb-6">
            Built on Trust.
            <br />
            <em className="italic text-gold-light font-medium">Designed</em> for Life.
          </h1>
          <p className="text-lg text-white/70 max-w-[480px] mb-9">{SITE.description}</p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/quote"
              className="bg-gold text-navy-deep px-6 py-3.5 text-sm font-semibold border border-gold hover:bg-transparent hover:text-gold transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/projects"
              className="bg-transparent text-gold px-6 py-3.5 text-sm font-semibold border border-gold hover:bg-gold hover:text-navy-deep transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>

        <div className="border-l border-gold/30 pl-7">
          <div className="font-mono text-[11px] text-gold uppercase tracking-wide mb-3.5">Coverage Area</div>
          <ul className="text-[14.5px] text-white/80">
            {CONTACT.coverage.map((region, i) => (
              <li
                key={region}
                className="flex justify-between py-[5px] border-b border-white/10 last:border-none"
              >
                <span>{region}</span>
                <span className="font-mono text-gold text-xs">{String(i + 1).padStart(2, '0')}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
