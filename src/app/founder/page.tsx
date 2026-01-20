import type { Metadata } from "next";
import Image from "next/image";
import { founderPage, site } from "@/content/content";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BrandCard } from "@/components/brand/BrandCard";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Founder’s Message",
  description: site.positioning,
  alternates: { canonical: "/founder" },
  openGraph: {
    title: `${founderPage.title} · ${site.name}`,
    url: "/founder",
  },
};

export default function FounderPage() {
  return (
    <>
      <PageHeader title={founderPage.heading} />

      <Section>
        <Container>
          <Reveal>
            <BrandCard className="p-7 sm:p-9">
              <div className="grid gap-8 lg:grid-cols-[240px_1fr] lg:items-start">
                <div className="mx-auto w-full max-w-[260px]">
                  <div className="overflow-hidden rounded-3xl border border-brand-gold/25 bg-white shadow-card">
                    <Image
                      src="/founder.png"
                      alt="Founder of ShreeGuru Leadership & Learning"
                      width={520}
                      height={640}
                      className="h-auto w-full object-cover"
                      priority={false}
                    />
                  </div>
                </div>

                <div className="max-w-3xl">
                  <div className="space-y-5 text-sm leading-relaxed text-brand-blue sm:text-base">
                    {founderPage.body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                  <p className="mt-8 font-serif text-base text-brand-blue sm:text-lg">
                    {founderPage.signature}
                  </p>
                </div>
              </div>
            </BrandCard>
          </Reveal>
        </Container>
      </Section>

      <CTASection
        heading={founderPage.cta.heading}
        body={founderPage.cta.body}
        href={founderPage.cta.href}
      />
    </>
  );
}
