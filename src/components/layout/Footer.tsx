import Image from 'next/image';
import Link from 'next/link';
import { CONTACT, SITE, FOOTER_CREDIT } from '@/lib/constants';
import { InstagramIcon, TikTokIcon } from '@/components/ui/SocialIcons';

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Architectural Plans', href: '/architectural-plans' },
  { label: 'Contact', href: '/contact' }
];

const SERVICE_LINKS = [
  'Residential Construction',
  'Commercial Construction',
  'Design & Build',
  'Architectural Plans',
  'Renovation',
  'Civil Engineering'
];

export default function Footer() {
  const phone = CONTACT.phone;
  const email = CONTACT.email;
  const hours = CONTACT.hours;
  const footerText = SITE.tagline;

  return (
    <footer className="bg-navy-deep text-white/70 pt-[70px]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
            <Image src="/logo.png" alt="Kirunda Constructions Logo" width={40} height={40} className="w-10 h-10 object-contain" />
              <div>
                <div className="font-display font-semibold text-white">Kirunda Constructions</div>
                <div className="font-mono text-[9.5px] text-gold-light uppercase">Built on Trust</div>
              </div>
            </Link>
            <p className="text-sm text-white/55 max-w-[280px]">{footerText}</p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/kirundaibrahiim"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 border border-gold/35 flex items-center justify-center text-gold-light hover:bg-gold hover:text-navy-deep transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://vm.tiktok.com/ZS9h4T8PLTLe4-5uxkG/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-8 h-8 border border-gold/35 flex items-center justify-center text-gold-light hover:bg-gold hover:text-navy-deep transition-colors"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-mono text-xs uppercase tracking-wide text-gold mb-4">Quick Links</h5>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-gold-light transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-xs uppercase tracking-wide text-gold mb-4">Services</h5>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm hover:text-gold-light transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-xs uppercase tracking-wide text-gold mb-4">Contact</h5>
            <ul className="space-y-2.5 text-sm">
              <li>{CONTACT.coverageNote}</li>
              <li>
                <a href={`mailto:${email}`} className="hover:text-gold-light transition-colors">
                  {email}
                </a>
              </li>
              <li>
                <a href={CONTACT.phoneHref} className="hover:text-gold-light transition-colors">
                  {phone}
                </a>
              </li>
              <li>{hours}</li>
            </ul>
          </div>
        </div>

        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[12.5px] text-white/45">
          <span>© {new Date().getFullYear()} Kirunda Constructions Ltd. All rights reserved.</span>
          <span className="flex items-center gap-3">
            <Link href="/privacy" className="hover:text-gold-light">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold-light">
              Terms &amp; Conditions
            </Link>
            <Link href="/sitemap" className="hover:text-gold-light">
              Sitemap
            </Link>
          </span>
          <span>
            Powered by{' '}
            <a
              href={FOOTER_CREDIT.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-light"
            >
              Herman Software Solutions
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
