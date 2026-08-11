import SectionLabel from '@/components/ui/SectionLabel';
import ContactForm from '@/components/forms/ContactForm';
import { buildMetadata } from '@/lib/seo';
import { SITE, CONTACT, CEO } from '@/lib/constants';

export const metadata = buildMetadata({
  title: 'Contact',
  description: `Get in touch with ${SITE.name} — phone, email, WhatsApp, and coverage areas.`,
  path: '/contact'
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy text-white py-20">
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionLabel>Sec. 05 / Get In Touch</SectionLabel>
          <h1 className="font-display font-semibold text-[clamp(32px,5vw,52px)] leading-tight max-w-2xl">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-20 bg-ivory dark:bg-navy-deep">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line mb-8">
              <div className="bg-white dark:bg-navy p-6">
                <div className="font-mono text-[11px] text-gold uppercase tracking-wide mb-2">Phone &amp; WhatsApp</div>
                <a href={CONTACT.phoneHref} className="text-[15.5px] font-medium block">
                  {CONTACT.phone}
                </a>
                <div className="text-xs text-steel dark:text-white/45 mt-1.5">Call or message anytime</div>
              </div>
              <div className="bg-white dark:bg-navy p-6">
                <div className="font-mono text-[11px] text-gold uppercase tracking-wide mb-2">Email</div>
                <a href={`mailto:${CONTACT.email}`} className="text-[15.5px] font-medium block break-all">
                  {CONTACT.email}
                </a>
                <div className="text-xs text-steel dark:text-white/45 mt-1.5">We reply within 24 hours</div>
              </div>
              <div className="bg-white dark:bg-navy p-6">
                <div className="font-mono text-[11px] text-gold uppercase tracking-wide mb-2">Hours</div>
                <div className="text-[15.5px] font-medium">Open 24/7</div>
                <div className="text-xs text-steel dark:text-white/45 mt-1.5">Always available</div>
              </div>
              <div className="bg-white dark:bg-navy p-6">
                <div className="font-mono text-[11px] text-gold uppercase tracking-wide mb-2">Coverage</div>
                <div className="text-[15.5px] font-medium">{CONTACT.coverageNote}</div>
                <div className="text-xs text-steel dark:text-white/45 mt-1.5">{CONTACT.coverage.join(', ')}</div>
              </div>
              <div className="bg-white dark:bg-navy p-6">
                <div className="font-mono text-[11px] text-gold uppercase tracking-wide mb-2">Leadership</div>
                <div className="text-[15.5px] font-medium">{CEO.name}</div>
                <div className="text-xs text-steel dark:text-white/45 mt-1.5">{CEO.role}</div>
              </div>
              <div className="bg-white dark:bg-navy p-6">
                <div className="font-mono text-[11px] text-gold uppercase tracking-wide mb-2">Follow</div>
                <div className="text-sm space-x-2">
                  <a href={CEO.instagram} target="_blank" rel="noopener noreferrer" className="text-gold border-b border-gold/40">
                    Instagram
                  </a>
                  <span className="text-steel">·</span>
                  <a href={CEO.tiktok} target="_blank" rel="noopener noreferrer" className="text-gold border-b border-gold/40">
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
