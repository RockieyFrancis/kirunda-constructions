import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';
import { PROJECTS, ARCH_PLANS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/gallery',
    '/architectural-plans',
    '/contact',
    '/quote',
    '/privacy',
    '/terms',
    '/sitemap'
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.7
  }));

  const projectRoutes = PROJECTS.map((p) => ({
    url: `${SITE.url}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  const planRoutes = ARCH_PLANS.map((p) => ({
    url: `${SITE.url}/architectural-plans/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...projectRoutes, ...planRoutes];
}
