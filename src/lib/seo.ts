import type { Metadata } from 'next';
import { SITE, CONTACT } from './constants';

export function buildMetadata({
  title,
  description,
  path = ''
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const url = `${SITE.url}${path}`;
  const desc = description || SITE.description;
  const fullTitle = title === SITE.name ? title : `${title} | ${SITE.name}`;

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: SITE.name,
      type: 'website',
      locale: 'en_UG',
      images: [{ url: `${SITE.url}/icon-512.png`, width: 512, height: 512, alt: SITE.name }]
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: [`${SITE.url}/icon-512.png`]
    }
  };
}

// LocalBusiness structured data - rendered as a <script type="application/ld+json"> in the root layout
export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'UG'
    },
    areaServed: CONTACT.coverage.map((c) => ({ '@type': 'City', name: c })),
    openingHours: 'Mo-Su 00:00-23:59',
    sameAs: [
      'https://www.instagram.com/kirundaibrahiim',
      'https://vm.tiktok.com/ZS9h4T8PLTLe4-5uxkG/'
    ]
  };
}
