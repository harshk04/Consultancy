import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, serviceCategories, servicesBySlug, site } from "@/content/content";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/nav/Breadcrumbs";
import { BrandCard } from "@/components/brand/BrandCard";
import { BrandButtonLink } from "@/components/brand/BrandButton";
import { icons } from "@/components/icons";
import { IconCircle } from "@/components/ui/IconCircle";
import { Reveal } from "@/components/motion/Reveal";

export function generateStaticParams() {
  return serviceCategories.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = servicesBySlug[params.slug];
  if (!service) return {};
  return {
    title: service.title,
    description: site.positioning,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} · ${site.name}`,
      url: `/services/${service.slug}`,
      description: site.positioning,
    },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = servicesBySlug[params.slug];
  if (!service) notFound();

  const relatedServices = serviceCategories
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);
  const relatedCaseStudies = caseStudies.slice(0, 2);

  return (
    <>
      <PageHeader title={service.title} intro={site.positioning} />

      <Section>
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />

          <Reveal>
            <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <BrandCard className="p-7">
                <div className="flex items-start gap-4">
                  <IconCircle icon={icons[service.icon]} className="h-12 w-12" />
                  <div className="min-w-0">
                    <h1 className="font-serif text-3xl tracking-tight text-brand-blue">
                      {service.title}
                    </h1>
                    <p className="mt-3 text-sm leading-relaxed text-brand-blue/80">
                      Services in this category include:
                    </p>
                  </div>
                </div>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-brand-gold/20 bg-white px-4 py-3 text-sm text-brand-blue shadow-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <BrandButtonLink href="/contact">Begin a Conversation</BrandButtonLink>
                  <BrandButtonLink href="/services" variant="secondary">
                    Back to Services
                  </BrandButtonLink>
                </div>
              </BrandCard>

              <BrandCard className="p-7">
                <h2 className="font-serif text-xl tracking-tight text-brand-blue">
                  Related services
                </h2>
                <div
                  aria-hidden="true"
                  className="mt-3 h-px w-16 bg-gradient-to-r from-transparent via-brand-gold to-transparent"
                />
                <div className="mt-6 space-y-3">
                  {relatedServices.map((s) => (
                    <BrandCard
                      key={s.slug}
                      className="p-4 hover:shadow-glow"
                    >
                      <div className="flex items-start gap-3">
                        <IconCircle icon={icons[s.icon]} className="h-10 w-10" />
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-brand-blue">
                            {s.title}
                          </p>
                          <BrandButtonLink
                            href={`/services/${s.slug}`}
                            variant="ghost"
                            className="mt-2 justify-start px-0"
                          >
                            View details
                          </BrandButtonLink>
                        </div>
                      </div>
                    </BrandCard>
                  ))}
                </div>
              </BrandCard>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-[linear-gradient(180deg,rgba(30,58,138,0.03),rgba(255,255,255,0.0))]">
        <Container>
          <Reveal>
            <h2 className="font-serif text-2xl tracking-tight text-brand-blue">
              Related case studies
            </h2>
            <div
              aria-hidden="true"
              className="mt-3 h-px w-20 bg-gradient-to-r from-transparent via-brand-gold to-transparent"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {relatedCaseStudies.map((cs) => (
                <BrandCard key={cs.slug} className="p-6">
                  <p className="text-sm font-medium text-brand-blue">{cs.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-brand-blue/80">
                    {cs.context}
                  </p>
                  <BrandButtonLink
                    href={`/case-studies/${cs.slug}`}
                    variant="secondary"
                    className="mt-5"
                  >
                    Read case study
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

