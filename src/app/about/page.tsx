import type { Metadata } from "next";
import { aboutPage, home, site } from "@/content/content";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { BrandCard } from "@/components/brand/BrandCard";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/motion/Reveal";
import { InfiniteMarquee } from "@/components/brand/InfiniteMarquee";

export const metadata: Metadata = {
  title: aboutPage.title,
  description: site.positioning,
  alternates: { canonical: "/about" },
  openGraph: { title: `${aboutPage.title} · ${site.name}`, url: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title={aboutPage.title} intro={site.positioning} />
      <InfiniteMarquee items={home.valuesStrip.items} speed="slow" direction="left" />

      <Section>
        <Container>
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-2">
              <BrandCard>
                <h2 className="font-serif text-xl tracking-tight text-brand-blue">
                  {aboutPage.identityHeading}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-brand-blue/80 sm:text-base">
                  {aboutPage.identityBody}
                </p>
              </BrandCard>

              <BrandCard>
                <h2 className="font-serif text-xl tracking-tight text-brand-blue">
                  {aboutPage.beliefsHeading}
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-brand-blue">
                  {aboutPage.beliefs.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-gold"
                      />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </BrandCard>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-[linear-gradient(180deg,rgba(30,58,138,0.03),rgba(255,255,255,0.0))]">
        <Container>
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-2">
              <BrandCard>
                <h2 className="font-serif text-xl tracking-tight text-brand-blue">
                  {aboutPage.visionHeading}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-brand-blue/80 sm:text-base">
                  {aboutPage.vision}
                </p>
              </BrandCard>

              <BrandCard>
                <h2 className="font-serif text-xl tracking-tight text-brand-blue">
                  {aboutPage.missionHeading}
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-brand-blue">
                  {aboutPage.mission.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-gold"
                      />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </BrandCard>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection
        heading={aboutPage.cta.heading}
        body={aboutPage.cta.body}
        href={aboutPage.cta.href}
      />
    </>
  );
}
