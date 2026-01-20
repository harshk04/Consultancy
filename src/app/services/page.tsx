import type { Metadata } from "next";
import { home, serviceCategories, servicesPage, site } from "@/content/content";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ServicesTabs } from "@/components/services/ServicesTabs";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/motion/Reveal";
import { InfiniteMarquee } from "@/components/brand/InfiniteMarquee";

export const metadata: Metadata = {
  title: servicesPage.title,
  description: site.positioning,
  alternates: { canonical: "/services" },
  openGraph: { title: `${servicesPage.title} · ${site.name}`, url: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader title={servicesPage.title} intro={site.positioning} />
      <InfiniteMarquee items={home.valuesStrip.items} speed="slow" direction="left" />

      <Section>
        <Container>
          <Reveal>
            <ServicesTabs categories={[...serviceCategories]} />
          </Reveal>
        </Container>
      </Section>

      <CTASection
        heading={servicesPage.cta.heading}
        body={servicesPage.cta.body}
        href={servicesPage.cta.href}
      />
    </>
  );
}
