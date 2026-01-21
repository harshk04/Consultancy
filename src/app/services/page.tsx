import Link from "next/link";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { servicesContent } from "@/content/services";

export default function ServicesPage() {
  return (
    <>
      <Section surface="hero" reveal={false}>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">SERVICES</p>
          <h1 className="mt-4 text-5xl leading-[1] text-[color:var(--fg)] sm:text-6xl">{servicesContent.title}</h1>
          <p className="mt-7 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">{servicesContent.intro}</p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {servicesContent.services.map((s) => (
            <Card key={s.title}>
              <h2 className="text-2xl leading-tight text-[color:var(--fg)]">{s.title}</h2>
              <p className="mt-5 text-sm leading-relaxed text-[color:var(--muted)]">{s.body}</p>
              <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-[color:var(--fg)]">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--brand-blue)_45%,transparent)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-[color:var(--fg)] underline decoration-[color:color-mix(in_oklab,var(--fg)_35%,transparent)] underline-offset-6 transition-colors hover:decoration-[color:var(--fg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]"
              >
                Begin a conversation <span aria-hidden="true">→</span>
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section surface="muted">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{servicesContent.process.label}</p>
            <h2 className="mt-4 text-4xl leading-[1.05] text-[color:var(--fg)] sm:text-5xl">{servicesContent.process.title}</h2>
          </div>
          <div className="lg:col-span-7 lg:pl-10">
            <Card>
              <ul className="grid gap-5 text-base leading-relaxed text-[color:var(--fg)]">
                {servicesContent.process.bullets.map((b) => (
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

      <Section>
        <div className="grid gap-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{servicesContent.formats.label}</p>
            <h2 className="mt-4 text-4xl leading-[1.05] text-[color:var(--fg)] sm:text-5xl">{servicesContent.formats.title}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {servicesContent.formats.cards.map((c, idx) => (
              <Card key={c.title} accent={idx === 2 ? "gold" : undefined}>
                <h3 className="text-2xl leading-tight text-[color:var(--fg)]">{c.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-[color:var(--muted)]">{c.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section surface="muted">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{servicesContent.outcomes.label}</p>
            <h2 className="mt-4 text-4xl leading-[1.05] text-[color:var(--fg)] sm:text-5xl">{servicesContent.outcomes.title}</h2>
          </div>
          <div className="lg:col-span-7 lg:pl-10">
            <Card>
              <ul className="grid gap-5 text-base leading-relaxed text-[color:var(--fg)]">
                {servicesContent.outcomes.bullets.map((b) => (
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

      <Section surface="gold">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl leading-[1.05] text-[color:var(--brand-blue)] sm:text-5xl">
            {servicesContent.cta.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[color:color-mix(in_oklab,var(--brand-blue)_85%,white)] sm:text-lg">
            {servicesContent.cta.body}
          </p>
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              href={servicesContent.cta.primary.href}
              className="border-[color:color-mix(in_oklab,var(--brand-blue)_25%,transparent)] bg-white/50 px-7 py-3 text-base font-semibold text-[color:var(--brand-blue)] hover:bg-white/70"
            >
              {servicesContent.cta.primary.label}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
