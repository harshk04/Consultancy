import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies, home, serviceCategories, site } from "@/content/content";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { BrandButtonLink } from "@/components/brand/BrandButton";
import { BrandCard } from "@/components/brand/BrandCard";
import { BrandBadge } from "@/components/brand/BrandBadge";
import { BrandSectionHeader } from "@/components/brand/BrandSectionHeader";
import { IconCircle } from "@/components/ui/IconCircle";
import { icons } from "@/components/icons";
import { CTASection } from "@/components/sections/CTASection";
import { StatsGrid } from "@/components/home/StatsGrid";
import { ApproachTimeline } from "@/components/home/ApproachTimeline";
import { FAQAccordion } from "@/components/home/FAQAccordion";
import { TestimonialsPlaceholder } from "@/components/home/TestimonialsPlaceholder";
import { ScrollCue } from "@/components/home/ScrollCue";
import { InfiniteMarquee } from "@/components/brand/InfiniteMarquee";

export const metadata: Metadata = {
  title: site.tagline,
  description: site.positioning,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.positioning,
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <section className="hero-mesh border-b border-brand-gold/25" data-nav-scheme="light">
        <Container className="relative py-16 sm:py-22">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div className="max-w-3xl space-y-6">
                <BrandBadge>{site.name}</BrandBadge>
                <h1 className="font-serif text-4xl tracking-tight text-brand-blue sm:text-6xl">
                  {home.hero.heading}
                </h1>
                <p className="max-w-2xl text-sm leading-relaxed text-brand-blue/80 sm:text-base">
                  {home.hero.subheading}
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <BrandButtonLink href={home.hero.primaryCta.href} size="lg">
                    {home.hero.primaryCta.label}
                  </BrandButtonLink>
                  <BrandButtonLink
                    href={home.hero.secondaryCta.href}
                    variant="secondary"
                    size="lg"
                  >
                    {home.hero.secondaryCta.label}
                  </BrandButtonLink>
                </div>

                <ScrollCue />
              </div>

              <BrandCard className="relative overflow-hidden p-7">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-70"
                >
                  <div className="absolute -inset-24 bg-[radial-gradient(900px_520px_at_20%_20%,rgba(30,58,138,0.18),transparent_60%),radial-gradient(760px_420px_at_80%_40%,rgba(200,162,74,0.16),transparent_60%)] motion-reduce:animate-none animate-mesh" />
                </div>
                <div className="relative">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-blue/70">
                    Trust & value
                  </p>
                  <div
                    aria-hidden="true"
                    className="mt-3 h-px w-16 bg-gradient-to-r from-transparent via-brand-gold to-transparent"
                  />
                  <ul className="mt-5 space-y-3 text-sm text-brand-blue">
                    {home.hero.trustStrip.map((item) => (
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
              </BrandCard>
            </div>
          </Reveal>
        </Container>
      </section>

      <InfiniteMarquee
        items={home.valuesStrip.items}
        speed="normal"
        direction="left"
      />

      <Section id="services">
        <Container>
          <BrandSectionHeader
            title={home.servicesOverview.heading}
            description={site.positioning}
            kicker="Services"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((cat, idx) => (
              <Reveal key={cat.slug} delay={idx * 0.04}>
                <Link
                  href={`/services/${cat.slug}`}
                  className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <BrandCard className="relative h-full overflow-hidden p-6">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                    >
                      <span className="absolute inset-0 bg-[radial-gradient(520px_220px_at_30%_15%,rgba(30,58,138,0.12),transparent_60%),radial-gradient(480px_220px_at_90%_50%,rgba(200,162,74,0.14),transparent_60%)]" />
                      <span className="absolute left-0 top-0 h-full w-24 -translate-x-[120%] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent motion-reduce:animate-none group-hover:animate-sweep" />
                    </span>
                    <div className="relative flex items-start gap-4">
                      <IconCircle icon={icons[cat.icon]} />
                      <div className="min-w-0">
                        <h3 className="text-sm font-medium leading-snug text-brand-blue">
                          {cat.title}
                        </h3>
                        <p className="mt-3 text-sm text-brand-blue/75">
                          View details
                        </p>
                      </div>
                    </div>
                  </BrandCard>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <BrandButtonLink href="/services" variant="secondary">
              {home.servicesOverview.cta.label}
            </BrandButtonLink>
          </div>
        </Container>
      </Section>

      <Section id="about" className="bg-[linear-gradient(180deg,rgba(200,162,74,0.10),rgba(255,255,255,0.0))]">
        <Container>
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <BrandSectionHeader
                  title={home.aboutSnapshot.heading}
                  description={home.aboutSnapshot.body}
                  kicker="About"
                />
                <div className="pt-2">
                  <BrandButtonLink href="/about" variant="ghost">
                    Learn About Our Identity
                  </BrandButtonLink>
                </div>
              </div>

              <BrandCard className="p-7">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-blue/70">
                  {home.aboutSnapshot.beliefsHeading}
                </p>
                <div
                  aria-hidden="true"
                  className="mt-3 h-px w-16 bg-gradient-to-r from-transparent via-brand-gold to-transparent"
                />
                <ul className="mt-5 space-y-3 text-sm text-brand-blue">
                  {home.aboutSnapshot.beliefs.map((item) => (
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

      <Section id="impact-indicators">
        <Container>
          <BrandSectionHeader
            title={home.stats.heading}
            description="Placeholders are shown until metrics are available."
            kicker="Impact"
          />
          <StatsGrid />
        </Container>
      </Section>

      <Section id="approach" className="bg-[linear-gradient(180deg,rgba(30,58,138,0.03),rgba(255,255,255,0.0))]">
        <Container>
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
              <div className="space-y-4">
                <BrandSectionHeader
                  title={home.approach.heading}
                  description="A reflective, learner-centred process grounded in ethics and clarity."
                  kicker="How we work"
                />
              </div>
              <ApproachTimeline />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section id="case-studies">
        <Container>
          <BrandSectionHeader
            title="Impact / Case Studies"
            description="Professional anonymised engagement summaries."
            kicker="Impact"
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {caseStudies.map((cs, idx) => (
              <Reveal key={cs.slug} delay={idx * 0.04}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <BrandCard className="relative h-full overflow-hidden p-6">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                    >
                      <span className="absolute inset-0 bg-[radial-gradient(540px_260px_at_35%_20%,rgba(30,58,138,0.10),transparent_60%),radial-gradient(420px_220px_at_90%_50%,rgba(200,162,74,0.12),transparent_60%)]" />
                    </span>
                    <div className="relative">
                      <p className="font-serif text-lg tracking-tight text-brand-blue">
                        {cs.title}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-brand-blue/80">
                        {cs.context}
                      </p>
                      <p className="mt-5 text-sm font-medium text-brand-blue">
                        Read case study
                      </p>
                    </div>
                  </BrandCard>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <BrandButtonLink href="/impact" variant="secondary">
              Explore impact
            </BrandButtonLink>
          </div>
        </Container>
      </Section>

      <Section id="faq" className="bg-[linear-gradient(180deg,rgba(200,162,74,0.10),rgba(255,255,255,0.0))]">
        <Container>
          <BrandSectionHeader title={home.faq.heading} kicker="FAQs" />
          <FAQAccordion />
        </Container>
      </Section>

      <Section id="testimonials">
        <Container>
          <BrandSectionHeader title={home.testimonials.heading} kicker="Testimonials" />
          <div className="mt-10">
            <TestimonialsPlaceholder />
          </div>
        </Container>
      </Section>

      <CTASection body={home.ctaBand.body} href={home.ctaBand.cta.href} />
    </>
  );
}
