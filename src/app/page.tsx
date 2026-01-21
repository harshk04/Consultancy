import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { HomeHero } from "@/components/HomeHero";
import { Marquee } from "@/components/Marquee";
import { PinnedServices } from "@/components/PinnedServices";
import { Section } from "@/components/Section";
import { homeContent } from "@/content/home";

export default function Home() {
  return (
    <>
      <HomeHero hero={homeContent.hero} />

      <Marquee items={homeContent.marquee.items} />

      <Section reveal={false}>
        <PinnedServices
          label={homeContent.services.label}
          title={homeContent.services.title}
          description={homeContent.services.body}
          panelSubtitle={homeContent.services.panelSubtitle}
          panelCta={homeContent.services.panelCta}
          categories={homeContent.services.categories}
        />
      </Section>

      <Section surface="muted">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{homeContent.about.label}</p>
            <h2 className="mt-4 text-4xl leading-[1.05] text-[color:var(--fg)] sm:text-5xl">{homeContent.about.title}</h2>
            <p className="mt-6 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">{homeContent.about.body}</p>
            <Link
              href={homeContent.about.link.href}
              className="mt-10 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-[color:var(--fg)] underline decoration-[color:color-mix(in_oklab,var(--fg)_35%,transparent)] underline-offset-6 transition-colors hover:decoration-[color:var(--fg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]"
            >
              {homeContent.about.link.label} <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="lg:col-span-6 lg:pl-10">
            <Card>
              <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">
                {homeContent.about.beliefsCard.title}
              </p>
              <ul className="mt-9 grid gap-7 text-base leading-relaxed text-[color:var(--fg)]">
                {homeContent.about.beliefsCard.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{homeContent.approach.label}</p>
            <h2 className="mt-4 text-4xl leading-[1.05] text-[color:var(--fg)] sm:text-5xl">{homeContent.approach.title}</h2>
            <p className="mt-6 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">{homeContent.approach.body}</p>
          </div>
          <div className="lg:col-span-6 lg:pl-10">
            <Card>
              <ul className="grid gap-5 text-base leading-relaxed text-[color:var(--fg)]">
                {homeContent.approach.card.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--brand-blue)_45%,transparent)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <Section surface="muted">
        <div className="grid gap-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{homeContent.resources.label}</p>
            <h2 className="mt-4 text-4xl leading-[1.05] text-[color:var(--fg)] sm:text-5xl">{homeContent.resources.title}</h2>
            <p className="mt-6 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">{homeContent.resources.body}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {homeContent.resources.cards.map((c) => (
              <CaseStudyCard key={c.title} title={c.title} description={c.description} href={c.href} linkLabel={c.linkLabel} />
            ))}
          </div>

          <div>
            <Button variant="outline" href={homeContent.resources.cta.href} className="px-7 py-3 text-base">
              {homeContent.resources.cta.label}
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{homeContent.faqs.label}</p>
            <h2 className="mt-4 text-4xl leading-[1.05] text-[color:var(--fg)] sm:text-5xl">{homeContent.faqs.title}</h2>
          </div>
          <Accordion items={homeContent.faqs.items} />
        </div>
      </Section>

      <Section surface="gold">
        <div className="grid gap-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl leading-[1.05] text-[color:var(--brand-blue)] sm:text-5xl">
              {homeContent.begin.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[color:color-mix(in_oklab,var(--brand-blue)_85%,white)] sm:text-lg">
              {homeContent.begin.body}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href={homeContent.begin.primaryCta.href}
              className="inline-flex items-center justify-center rounded-[var(--radius-pill)] border border-[color:color-mix(in_oklab,var(--brand-blue)_25%,transparent)] bg-white/50 px-7 py-3 text-base font-semibold text-[color:var(--brand-blue)] transition-colors hover:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]"
            >
              {homeContent.begin.primaryCta.label}
            </Link>
            <Link
              href={homeContent.begin.secondaryCta.href}
              className="rounded-md text-sm font-semibold text-[color:var(--brand-blue)] underline decoration-[color:color-mix(in_oklab,var(--brand-blue)_35%,transparent)] underline-offset-6 transition-colors hover:decoration-[color:var(--brand-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]"
            >
              {homeContent.begin.secondaryCta.label}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
