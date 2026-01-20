import type { Metadata } from "next";
import { caseStudies, impactPage, site } from "@/content/content";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CaseStudyCard } from "@/components/impact/CaseStudyCard";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Impact / Case Studies",
  description: site.positioning,
  alternates: { canonical: "/impact" },
  openGraph: {
    title: `${impactPage.title} · ${site.name}`,
    description: site.positioning,
    url: "/impact",
  },
};

export default function ImpactPage() {
  return (
    <>
      <PageHeader title={impactPage.title} intro={site.positioning} />

      <Section>
        <Container>
          <Reveal>
            <div className="grid gap-4 lg:grid-cols-3">
              {caseStudies.map((cs) => (
                <CaseStudyCard
                  key={cs.title}
                  title={cs.title}
                  context={cs.context}
                  ourWork={cs.ourWork}
                  impact={cs.impact}
                  href={`/case-studies/${cs.slug}`}
                />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection
        heading={impactPage.cta.heading}
        body={impactPage.cta.body}
        href={impactPage.cta.href}
      />
    </>
  );
}
