import SectionLabel from '@/components/ui/SectionLabel';
import { buildMetadata } from '@/lib/seo';
import { SITE, CONTACT } from '@/lib/constants';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description: `Privacy Policy for ${SITE.name}.`,
  path: '/privacy'
});

export default function PrivacyPage() {
  return (
    <section className="py-24 bg-white dark:bg-navy">
      <div className="max-w-[760px] mx-auto px-6">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="font-display font-semibold text-3xl mb-8">Privacy Policy</h1>
        <div className="prose-sm text-steel dark:text-white/60 space-y-6 text-[15px] leading-relaxed">
          <p>Last updated: {new Date().getFullYear()}</p>

          <p>
            {SITE.name} (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy. This policy
            explains what information we collect through this website and how we use it.
          </p>

          <h2 className="font-display text-xl text-charcoal dark:text-white mt-8 mb-2">Information We Collect</h2>
          <p>
            When you use our Contact or Get a Quote forms, the information you type (name, email, phone number,
            location, and project details) is sent directly to our email address via your own email application.
            We do not store this information on a server or database — it only exists in the email you send.
          </p>

          <h2 className="font-display text-xl text-charcoal dark:text-white mt-8 mb-2">Cookies</h2>
          <p>
            We use minimal local storage in your browser to remember your cookie consent choice and display
            preference (light/dark mode). This data stays on your device and is not transmitted to us.
          </p>

          <h2 className="font-display text-xl text-charcoal dark:text-white mt-8 mb-2">Third-Party Services</h2>
          <p>
            This site does not use analytics trackers, advertising pixels, or third-party data-sharing services
            at this time.
          </p>

          <h2 className="font-display text-xl text-charcoal dark:text-white mt-8 mb-2">Contact</h2>
          <p>
            Questions about this policy can be sent to{' '}
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
