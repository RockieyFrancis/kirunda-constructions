import SectionLabel from '@/components/ui/SectionLabel';
import { buildMetadata } from '@/lib/seo';
import { SITE, CONTACT } from '@/lib/constants';

export const metadata = buildMetadata({
  title: 'Terms & Conditions',
  description: `Terms and conditions for using the ${SITE.name} website.`,
  path: '/terms'
});

export default function TermsPage() {
  return (
    <section className="py-24 bg-white dark:bg-navy">
      <div className="max-w-[760px] mx-auto px-6">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="font-display font-semibold text-3xl mb-8">Terms &amp; Conditions</h1>
        <div className="prose-sm text-steel dark:text-white/60 space-y-6 text-[15px] leading-relaxed">
          <p>Last updated: {new Date().getFullYear()}</p>

          <p>
            By using this website, you agree to the following terms. If you do not agree, please discontinue use
            of the site.
          </p>

          <h2 className="font-display text-xl text-charcoal dark:text-white mt-8 mb-2">Website Content</h2>
          <p>
            Content on this site — including project photos, descriptions, and service listings — is provided
            for informational purposes and represents {SITE.name}&apos;s work and offerings. It does not
            constitute a binding contract or formal quotation until confirmed directly with our team.
          </p>

          <h2 className="font-display text-xl text-charcoal dark:text-white mt-8 mb-2">Quotes &amp; Estimates</h2>
          <p>
            Quote requests submitted through this site are non-binding inquiries. Final pricing, timelines, and
            scope are confirmed in writing after consultation and site assessment.
          </p>

          <h2 className="font-display text-xl text-charcoal dark:text-white mt-8 mb-2">Intellectual Property</h2>
          <p>
            Photos, text, and branding on this site belong to {SITE.name} unless otherwise noted, and may not be
            reproduced without permission.
          </p>

          <h2 className="font-display text-xl text-charcoal dark:text-white mt-8 mb-2">Limitation of Liability</h2>
          <p>
            While we strive for accuracy, {SITE.name} is not liable for decisions made solely on the basis of
            information published on this website without direct confirmation from our team.
          </p>

          <h2 className="font-display text-xl text-charcoal dark:text-white mt-8 mb-2">Contact</h2>
          <p>
            Questions about these terms can be sent to{' '}
            <a href={`mailto:${CONTACT.email}`} className="text-gold border-b border-gold/40">
              {CONTACT.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
