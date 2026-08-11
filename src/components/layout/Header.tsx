'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import DarkModeToggle from './DarkModeToggle';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Architectural Plans', href: '/architectural-plans' },
  { label: 'Contact', href: '/contact' }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-navy/95 dark:bg-navy-deep/95 backdrop-blur-md border-b border-gold/15">
      <div className="max-w-[1180px] mx-auto px-6 h-[76px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-white">
          <Image src="/logo.png" alt="Kirunda Constructions Logo" width={40} height={40} className="w-10 h-10 object-contain" />

          <div className="leading-tight">
            <div className="font-display font-semibold text-base">Kirunda Constructions</div>
            <div className="font-mono text-[9.5px] text-gold-light uppercase tracking-wide">Built on Trust</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/80 hover:text-white text-[13.5px] font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <DarkModeToggle />
          <Link
            href="/quote"
            className="bg-gold text-navy-deep px-[22px] py-[11px] text-[13px] font-semibold border border-gold hover:bg-transparent hover:text-gold transition-colors whitespace-nowrap"
          >
            Get a Quote
          </Link>
        </div>

        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="w-[22px] h-[2px] bg-white block" />
          <span className="w-[22px] h-[2px] bg-white block" />
          <span className="w-[22px] h-[2px] bg-white block" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-deep border-t border-gold/20 px-6 py-5 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/85 text-sm font-medium">
              {item.label}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-2">
            <DarkModeToggle />
            <Link href="/quote" className="bg-gold text-navy-deep px-5 py-2.5 text-sm font-semibold">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
