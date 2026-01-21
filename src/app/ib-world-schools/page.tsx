import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { ibWorldSchoolsContent } from "@/content/ibWorldSchools";

export default function IBWorldSchoolsPage() {
  return (
    <>
      <Section surface="hero" reveal={false}>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">IB WORLD SCHOOLS</p>
          <h1 className="mt-4 text-5xl leading-[1] text-[color:var(--fg)] sm:text-6xl">{ibWorldSchoolsContent.title}</h1>
          <p className="mt-7 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">{ibWorldSchoolsContent.intro}</p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-12">
          <Card className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">
              {ibWorldSchoolsContent.sections[0].label}
            </p>
            <h2 className="mt-4 text-2xl leading-tight text-[color:var(--fg)]">{ibWorldSchoolsContent.sections[0].title}</h2>
            <ul className="mt-6 grid gap-4 text-sm leading-relaxed text-[color:var(--fg)]">
              {ibWorldSchoolsContent.sections[0].bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--brand-blue)_45%,transparent)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">
              {ibWorldSchoolsContent.sections[1].label}
            </p>
            <h2 className="mt-4 text-2xl leading-tight text-[color:var(--fg)]">{ibWorldSchoolsContent.sections[1].title}</h2>
            <p className="mt-5 text-sm leading-relaxed text-[color:var(--muted)]">{ibWorldSchoolsContent.sections[1].body}</p>
            <div className="mt-8">
              <Button variant="outline" href={ibWorldSchoolsContent.cta.href} className="px-7 py-3 text-base">
                {ibWorldSchoolsContent.cta.label}
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      <Section surface="muted">
        <div className="grid gap-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{ibWorldSchoolsContent.focusAreas.label}</p>
            <h2 className="mt-4 text-4xl leading-[1.05] text-[color:var(--fg)] sm:text-5xl">{ibWorldSchoolsContent.focusAreas.title}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {ibWorldSchoolsContent.focusAreas.cards.map((c, idx) => (
              <Card key={c.title} accent={idx === 0 ? "gold" : undefined}>
                <h3 className="text-2xl leading-tight text-[color:var(--fg)]">{c.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-[color:var(--muted)]">{c.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{ibWorldSchoolsContent.howToBegin.label}</p>
            <h2 className="mt-4 text-4xl leading-[1.05] text-[color:var(--fg)] sm:text-5xl">{ibWorldSchoolsContent.howToBegin.title}</h2>
          </div>
          <div className="lg:col-span-7 lg:pl-10">
            <Card>
              <ul className="grid gap-5 text-base leading-relaxed text-[color:var(--fg)]">
                {ibWorldSchoolsContent.howToBegin.bullets.map((b) => (
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
    </>
  );
}
