import SectionLabel from '@/components/ui/SectionLabel';
import Stats from '@/components/home/Stats';
import { buildMetadata } from '@/lib/seo';
import { SITE, MISSION, VISION, CORE_VALUES, CEO } from '@/lib/constants';
import { InstagramIcon, TikTokIcon } from '@/components/ui/SocialIcons';

export const metadata = buildMetadata({
  title: 'About Us',
  description: `Learn about ${SITE.name} — our mission, vision, values, and the team behind our work.`,
  path: '/about'
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy text-white py-20">
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionLabel>Sec. 01 / About Us</SectionLabel>
          <h1 className="font-display font-semibold text-[clamp(32px,5vw,52px)] leading-tight max-w-2xl">
            A Ugandan construction company built on integrity and craft.
          </h1>
        </div>
      </section>

      <Stats />

      <section className="py-24 bg-white dark:bg-navy">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-5 text-steel dark:text-white/60 text-[15.5px] leading-relaxed">
            <p>
              {SITE.name} is a Ugandan construction and civil engineering company committed to delivering
              quality, durable, and cost-effective construction solutions. We provide professional services to
              individuals, businesses, organizations, and government institutions, ensuring every project is
              completed to high standards of workmanship, safety, and customer satisfaction.
            </p>
            <p>
              Our team combines technical expertise with practical experience to deliver projects efficiently,
              on time, and within budget. Whether constructing a new building, renovating an existing structure,
              or providing engineering consultancy, we aim to exceed our clients&apos; expectations through
              professionalism, integrity, and innovation.
            </p>
            <p>
              We are committed to building structures that stand the test of time while fostering long-term
              relationships with our clients through trust, transparency, and outstanding service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="border border-line p-7 corner-frame">
              <h4 className="font-mono text-[13px] uppercase tracking-wide mb-3">Mission</h4>
              <p className="text-sm text-steel dark:text-white/55">{MISSION}</p>
            </div>
            <div className="border border-line p-7 corner-frame">
              <h4 className="font-mono text-[13px] uppercase tracking-wide mb-3">Vision</h4>
              <p className="text-sm text-steel dark:text-white/55">{VISION}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-ivory dark:bg-navy-deep">
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionLabel>Core Values</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((v, i) => (
              <div key={v.name} className="flex gap-4">
                <span className="font-mono text-xs text-gold pt-1">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <strong className="block font-display text-base mb-1">{v.name}</strong>
                  <span className="text-sm text-steel dark:text-white/55">{v.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-navy">
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionLabel>Our Team</SectionLabel>
          <h2 className="font-display font-semibold text-[clamp(28px,3.6vw,38px)] mb-12">Leadership &amp; Team</h2>

          {/* CEO always shown as hardcoded fallback per brief */}
          <div className="bg-navy text-white p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center corner-frame mb-10">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-light to-gold flex items-center justify-center font-display text-2xl font-bold text-navy-deep flex-shrink-0">
              KI
            </div>
            <div>
              <div className="font-display text-xl font-semibold">{CEO.name}</div>
              <div className="text-gold-light text-sm mt-0.5 mb-1.5">{CEO.role}</div>
              <div className="text-white/65 text-sm mb-2">{CEO.credentials}</div>
              <div className="flex gap-3">
                <a
                  href={CEO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 border border-gold/35 flex items-center justify-center text-gold hover:bg-gold hover:text-navy-deep transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={CEO.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-8 h-8 border border-gold/35 flex items-center justify-center text-gold hover:bg-gold hover:text-navy-deep transition-colors"
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <p className="text-sm text-steel dark:text-white/50">
            More team profiles coming soon — reach out via{' '}
            <a href="/contact" className="text-gold border-b border-gold/40">
              Contact
            </a>{' '}
            to learn more about who&apos;s on site.
          </p>
        </div>
      </section>
    </>
  );
}
