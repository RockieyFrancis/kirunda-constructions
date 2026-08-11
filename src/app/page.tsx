import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import ServicesPreview from '@/components/home/ServicesPreview';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import CtaBanner from '@/components/home/CtaBanner';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/constants';

export const metadata = buildMetadata({ title: SITE.name, description: SITE.description, path: '/' });

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ScrollReveal>
        <ServicesPreview />
      </ScrollReveal>
      <ScrollReveal>
        <FeaturedProjects />
      </ScrollReveal>
      <ScrollReveal>
        <CtaBanner />
      </ScrollReveal>
    </>
  );
}
