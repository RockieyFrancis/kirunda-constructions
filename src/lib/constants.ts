// Central hardcoded data for the site. No CMS, no backend — edit these
// values directly and redeploy to update the site.

export const SITE = {
  name: 'Kirunda Constructions Ltd',
  shortName: 'Kirunda Constructions',
  tagline: 'Built on Trust. Designed for Life.',
  description:
    'Kirunda Constructions Ltd is a Ugandan construction and civil engineering company delivering quality, durable, and cost-effective construction solutions across Uganda and East Africa.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://kirundaconstructions.vercel.app'
};

export const CONTACT = {
  phone: '+256 700 813 456',
  phoneHref: 'tel:+256700813456',
  whatsapp: '256700813456',
  whatsappMessage:
    "Hello! I'm interested in your construction services from Kirunda Constructions Ltd. Please provide more information.",
  email: 'kirundaconstructions@gmail.com',
  hours: 'Open 24/7 — Always available',
  coverage: [
    'Kampala',
    'Jinja',
    'Mbarara',
    'Hoima',
    'Arua',
    'Gulu',
    'Mbale'
  ],
  coverageNote: 'Uganda & East Africa'
};

export const WHATSAPP_HREF = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  CONTACT.whatsappMessage
)}`;

export const CEO = {
  name: 'Kirunda Ibrahim',
  role: 'CEO & Founder',
  credentials: 'Certified Civil Engineer, B.Eng. Civil Engineering',
  instagram: 'https://www.instagram.com/kirundaibrahiim',
  tiktok: 'https://vm.tiktok.com/ZS9h4T8PLTLe4-5uxkG/'
};

export const MISSION =
  'To provide reliable, high-quality construction and engineering services that create lasting value for our clients through professionalism, innovation, and excellence.';

export const VISION =
  'To become one of the leading construction companies in Uganda and East Africa, recognized for delivering world-class construction solutions, exceptional customer service, and sustainable development.';

export const CORE_VALUES = [
  { name: 'Integrity', desc: 'We conduct our business honestly and ethically.' },
  { name: 'Quality', desc: 'We deliver workmanship that meets high professional standards.' },
  { name: 'Safety', desc: 'We prioritize the health and safety of our employees, clients, and the public.' },
  { name: 'Professionalism', desc: 'We treat every project with dedication, respect, and accountability.' },
  { name: 'Innovation', desc: 'We embrace modern construction methods and technologies.' },
  { name: 'Customer Satisfaction', desc: "Our clients' success is our priority." }
];

export const DEFAULT_SERVICES = [
  {
    slug: 'residential-construction',
    title: 'Residential Construction',
    summary: 'From foundation to finish — homes built to last, tailored to how you live.'
  },
  {
    slug: 'commercial-construction',
    title: 'Commercial Construction',
    summary: 'Retail, office, and institutional builds delivered on schedule and to code.'
  },
  {
    slug: 'design-and-build',
    title: 'Design & Build',
    summary: 'One team from concept to completion — fewer handoffs, tighter execution.'
  },
  {
    slug: 'architectural-plans',
    title: 'Architectural Plans',
    summary: 'Professionally drafted plans that balance vision, budget, and buildability.'
  },
  {
    slug: 'renovation-remodeling',
    title: 'Renovation & Remodeling',
    summary: 'Structural upgrades and modernization for existing buildings.'
  },
  {
    slug: 'civil-engineering',
    title: 'Civil Engineering',
    summary: 'Engineering consultancy grounded in technical expertise and site realities.'
  }
];

export const FOOTER_CREDIT = {
  text: 'Powered by Herman Software Solutions',
  href: 'https://herman-software-website.vercel.app/'
};
