import type { Metadata } from "next";
import { ibWorldSchoolsPage, site } from "@/content/content";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BrandCard } from "@/components/brand/BrandCard";
import { IconCircle } from "@/components/ui/IconCircle";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/motion/Reveal";
import { icons } from "@/components/icons";

export const metadata: Metadata = {
  title: "IB World Schools",
  description: ibWorldSchoolsPage.intro,
  alternates: { canonical: "/ib-world-schools" },
  openGraph: {
    title: `${ibWorldSchoolsPage.title} · ${site.name}`,
    description: ibWorldSchoolsPage.intro,
    url: "/ib-world-schools",
  },
};

export default function IBWorldSchoolsPage() {
  return (
    <>
      <PageHeader title={ibWorldSchoolsPage.title} intro={ibWorldSchoolsPage.intro} />

      <Section>
        <Container>
          <Reveal>
            <div className="grid gap-4 lg:grid-cols-2">
              {ibWorldSchoolsPage.sections.map((section) => (
                <BrandCard key={section.title} className="p-6">
                  <div className="flex items-start gap-4">
                    <IconCircle icon={icons[section.icon]} />
                    <div className="min-w-0">
                      <h2 className="font-serif text-xl tracking-tight text-brand-blue">
                        {section.title}
                      </h2>
                      <ul className="mt-4 space-y-2 text-sm text-brand-blue">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-gold"
                            />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </BrandCard>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection
        heading={ibWorldSchoolsPage.cta.heading}
        body={ibWorldSchoolsPage.cta.body}
        href={ibWorldSchoolsPage.cta.href}
      />
    </>
  );
}
