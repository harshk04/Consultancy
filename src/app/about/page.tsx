import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { aboutContent } from "@/content/about";

export default function AboutPage() {
  return (
    <>
      <Section surface="hero" reveal={false}>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">ABOUT</p>
          <h1 className="mt-4 text-5xl leading-[1] text-[color:var(--fg)] sm:text-6xl">{aboutContent.title}</h1>
          <div className="mt-7 grid gap-4 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
            {aboutContent.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-12">
          {aboutContent.sections.map((s) => (
            <Card key={s.title} className="lg:col-span-4">
              <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{s.label}</p>
              <h2 className="mt-4 text-2xl leading-tight text-[color:var(--fg)]">{s.title}</h2>
              {"body" in s ? (
                <p className="mt-5 text-sm leading-relaxed text-[color:var(--muted)]">{s.body}</p>
              ) : (
                <ul className="mt-6 grid gap-4 text-sm leading-relaxed text-[color:var(--fg)]">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--brand-blue)_45%,transparent)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </Section>

      <Section surface="muted">
        <div className="grid gap-8 lg:grid-cols-12">
          <Card className="lg:col-span-6" accent="gold">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{aboutContent.visionMission.label}</p>
            <h2 className="mt-4 text-2xl leading-tight text-[color:var(--fg)]">{aboutContent.visionMission.visionTitle}</h2>
            <p className="mt-5 text-sm leading-relaxed text-[color:var(--muted)]">{aboutContent.visionMission.vision}</p>
            <h3 className="mt-8 text-base font-semibold text-[color:var(--fg)]">{aboutContent.visionMission.missionTitle}</h3>
            <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-[color:var(--fg)]">
              {aboutContent.visionMission.missionBullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--brand-blue)_45%,transparent)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="grid gap-8 lg:col-span-6">
            <Card>
              <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{aboutContent.whoWeWorkWith.label}</p>
              <h2 className="mt-4 text-2xl leading-tight text-[color:var(--fg)]">{aboutContent.whoWeWorkWith.title}</h2>
              <ul className="mt-6 grid gap-4 text-sm leading-relaxed text-[color:var(--fg)]">
                {aboutContent.whoWeWorkWith.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--brand-blue)_45%,transparent)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{aboutContent.whyShreeguru.label}</p>
              <h2 className="mt-4 text-2xl leading-tight text-[color:var(--fg)]">{aboutContent.whyShreeguru.title}</h2>
              <ul className="mt-6 grid gap-4 text-sm leading-relaxed text-[color:var(--fg)]">
                {aboutContent.whyShreeguru.bullets.map((b) => (
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
        <div className="grid gap-8 lg:grid-cols-12">
          <Card className="lg:col-span-6" accent="gold">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{aboutContent.whatToExpect.label}</p>
            <h2 className="mt-4 text-2xl leading-tight text-[color:var(--fg)]">{aboutContent.whatToExpect.title}</h2>
            <ul className="mt-6 grid gap-4 text-sm leading-relaxed text-[color:var(--fg)]">
              {aboutContent.whatToExpect.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--brand-blue)_45%,transparent)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="grid gap-8 lg:col-span-6">
            <Card>
              <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">
                {aboutContent.workingPrinciples.label}
              </p>
              <h2 className="mt-4 text-2xl leading-tight text-[color:var(--fg)]">{aboutContent.workingPrinciples.title}</h2>
              <ul className="mt-6 grid gap-4 text-sm leading-relaxed text-[color:var(--fg)]">
                {aboutContent.workingPrinciples.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--brand-blue)_45%,transparent)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{aboutContent.note.label}</p>
              <h2 className="mt-4 text-2xl leading-tight text-[color:var(--fg)]">{aboutContent.note.title}</h2>
              <p className="mt-5 text-sm leading-relaxed text-[color:var(--muted)]">{aboutContent.note.body}</p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
