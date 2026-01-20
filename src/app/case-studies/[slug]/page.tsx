import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, caseStudiesBySlug, serviceCategories, site } from "@/content/content";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/nav/Breadcrumbs";
import { BrandCard } from "@/components/brand/BrandCard";
import { BrandButtonLink } from "@/components/brand/BrandButton";
import { Reveal } from "@/components/motion/Reveal";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const cs = caseStudiesBySlug[params.slug];
  if (!cs) return {};
  return {
    title: cs.title,
    description: site.positioning,
    alternates: { canonical: `/case-studies/${cs.slug}` },
    openGraph: {
      title: `${cs.title} · ${site.name}`,
      url: `/case-studies/${cs.slug}`,
      description: site.positioning,
    },
  };
}

export default function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const cs = caseStudiesBySlug[params.slug];
  if (!cs) notFound();

  const relatedCaseStudies = caseStudies
    .filter((c) => c.slug !== cs.slug)
    .slice(0, 2);
  const relatedServices = serviceCategories.slice(0, 3);

  return (
    <>
      <PageHeader title={cs.title} intro={site.positioning} />

      <Section>
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Impact / Case Studies", href: "/impact" },
              { label: cs.title },
            ]}
          />

          <Reveal>
            <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <BrandCard className="p-7">
                <h1 className="font-serif text-3xl tracking-tight text-brand-blue">
                  {cs.title}
                </h1>

                <div className="mt-6 space-y-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-blue/70">
                      Context
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-brand-blue">
                      {cs.context}
                    </p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-blue/70">
                        Our Work
                      </p>
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-brand-blue">
                        {cs.ourWork.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-blue/70">
                        Impact
                      </p>
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-brand-blue">
                        {cs.impact.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <BrandButtonLink href="/contact">Begin a Conversation</BrandButtonLink>
                  <BrandButtonLink href="/impact" variant="secondary">
                    Back to Impact
                  </BrandButtonLink>
                </div>
              </BrandCard>

              <BrandCard className="p-7">
                <h2 className="font-serif text-xl tracking-tight text-brand-blue">
                  Related case studies
                </h2>
                <div
                  aria-hidden="true"
                  className="mt-3 h-px w-16 bg-gradient-to-r from-transparent via-brand-gold to-transparent"
                />
                <div className="mt-6 space-y-3">
                  {relatedCaseStudies.map((c) => (
                    <BrandCard key={c.slug} className="p-5">
                      <p className="text-sm font-medium text-brand-blue">
                        {c.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-brand-blue/80">
                        {c.context}
                      </p>
                      <BrandButtonLink
                        href={`/case-studies/${c.slug}`}
                        variant="secondary"
                        className="mt-4"
                      >
                        Read
                      </BrandButtonLink>
                    </BrandCard>
                  ))}
                </div>
              </BrandCard>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-[linear-gradient(180deg,rgba(200,162,74,0.10),rgba(255,255,255,0.0))]">
        <Container>
          <Reveal>
            <h2 className="font-serif text-2xl tracking-tight text-brand-blue">
              Related services
            </h2>
            <div
              aria-hidden="true"
              className="mt-3 h-px w-20 bg-gradient-to-r from-transparent via-brand-gold to-transparent"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((s) => (
                <BrandCard key={s.slug} className="p-6">
                  <p className="text-sm font-medium text-brand-blue">{s.title}</p>
                  <BrandButtonLink
                    href={`/services/${s.slug}`}
                    variant="ghost"
                    className="mt-4"
                  >
                    View details
                  </BrandButtonLink>
                </BrandCard>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

