'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem('kirunda-cookie-consent');
    if (!consent) setShow(true);
  }, []);

  function accept() {
    window.localStorage.setItem('kirunda-cookie-consent', 'accepted');
    setShow(false);
  }

  function decline() {
    window.localStorage.setItem('kirunda-cookie-consent', 'declined');
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[300] bg-navy-deep text-white border-t border-gold/25 px-6 py-5">
      <div className="max-w-[1180px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-white/75 max-w-xl">
          We use cookies to improve your experience on this site. See our{' '}
          <Link href="/privacy" className="text-gold-light underline">
            Privacy Policy
          </Link>{' '}
          for details.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm border border-white/25 text-white/80 hover:bg-white/5"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm bg-gold text-navy-deep font-semibold hover:bg-gold-light"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
