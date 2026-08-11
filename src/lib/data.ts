// Everything on this site is hardcoded here — no CMS, no backend, no API keys.
// To add/update a project, gallery photo, or plan, edit the arrays below and redeploy.

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  featured: boolean;
  summary: string;
  description: string;
  cover: string;
  images: string[];
};

const g = (n: number) => `/images/gallery/site-${String(n).padStart(3, '0')}.jpg`;

export const PROJECTS: Project[] = [
  {
    slug: 'kampala-residential-build',
    title: 'Residential Home Construction',
    location: 'Kampala, Uganda',
    category: 'Residential Construction',
    featured: true,
    summary: 'A full residential build from foundation through structural framing.',
    description:
      'A ground-up residential construction project in Kampala, covering site setup, foundation work, block walling, and structural framing. Delivered with close attention to workmanship and safety standards at every stage.',
    cover: g(1),
    images: [g(1), g(2), g(3), g(4), g(5), g(6), g(7), g(8)]
  },
  {
    slug: 'jinja-site-survey-planning',
    title: 'Site Survey & Engineering Planning',
    location: 'Jinja, Uganda',
    category: 'Civil Engineering',
    featured: true,
    summary: 'Pre-construction survey, layout marking, and engineering consultancy.',
    description:
      'Our civil engineering team carried out site survey, boundary layout, and technical planning ahead of construction — ensuring the build aligns with approved architectural plans and local regulations.',
    cover: g(40),
    images: [g(38), g(39), g(40), g(41), g(42), g(43)]
  },
  {
    slug: 'mbarara-block-walling',
    title: 'Block Walling & Structural Works',
    location: 'Mbarara, Uganda',
    category: 'Residential Construction',
    featured: true,
    summary: 'Structural block walling and reinforcement for a residential project.',
    description:
      'Structural walling phase for a residential client in Mbarara, including reinforced columns, block work, and preparation for roofing — built to withstand the region\u2019s conditions and last for generations.',
    cover: g(15),
    images: [g(12), g(13), g(14), g(15), g(16), g(17), g(18)]
  },
  {
    slug: 'hoima-foundation-works',
    title: 'Foundation & Groundworks',
    location: 'Hoima, Uganda',
    category: 'Civil Engineering',
    featured: false,
    summary: 'Excavation, foundation laying, and groundworks for a new build.',
    description:
      'Groundworks and foundation laying for a new construction project in Hoima — excavation, concrete footing, and damp-proofing carried out to engineering specification.',
    cover: g(22),
    images: [g(20), g(21), g(22), g(23), g(24)]
  },
  {
    slug: 'gulu-design-build',
    title: 'Design & Build Project',
    location: 'Gulu, Uganda',
    category: 'Design & Build',
    featured: false,
    summary: 'End-to-end design and construction delivery for a client build.',
    description:
      'A design-and-build engagement where our team handled planning, architectural drafting, and construction under one contract — reducing handoffs and keeping the client\u2019s vision consistent from concept to completion.',
    cover: g(52),
    images: [g(50), g(51), g(52), g(53), g(54), g(55)]
  },
  {
    slug: 'mbale-renovation',
    title: 'Renovation & Remodeling',
    location: 'Mbale, Uganda',
    category: 'Renovation & Remodeling',
    featured: false,
    summary: 'Structural upgrades and modernization for an existing property.',
    description:
      'Renovation works for an existing property in Mbale, including structural repairs, upgraded finishes, and modernization — completed with minimal disruption to the client.',
    cover: g(60),
    images: [g(58), g(59), g(60), g(61), g(62)]
  }
];

// Remaining photos not tied to a specific project, shown in the general Gallery grid.
export const GALLERY_IMAGES: string[] = Array.from({ length: 83 }, (_, i) => g(i + 1)).filter(
  (src) => !PROJECTS.some((p) => p.images.includes(src))
);

export type ArchPlan = {
  slug: string;
  title: string;
  bedrooms: number;
  bathrooms: number;
  areaSqm: number;
  summary: string;
  cover: string;
};

export const ARCH_PLANS: ArchPlan[] = [
  {
    slug: 'modern-3-bedroom-bungalow',
    title: 'Modern 3-Bedroom Bungalow',
    bedrooms: 3,
    bathrooms: 2,
    areaSqm: 180,
    summary: 'A contemporary single-storey layout with open living and dining areas.',
    cover: g(5)
  },
  {
    slug: 'family-4-bedroom-maisonette',
    title: '4-Bedroom Maisonette',
    bedrooms: 4,
    bathrooms: 3,
    areaSqm: 260,
    summary: 'Two-storey family home with a self-contained master suite.',
    cover: g(31)
  },
  {
    slug: 'compact-2-bedroom-cottage',
    title: 'Compact 2-Bedroom Cottage',
    bedrooms: 2,
    bathrooms: 1,
    areaSqm: 95,
    summary: 'An efficient, budget-conscious layout for a starter home.',
    cover: g(45)
  }
];
