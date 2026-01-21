import { notFound } from "next/navigation";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { caseStudies, getCaseStudy, resourcesContent } from "@/content/resources";

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export const dynamicParams = false;

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) return notFound();

  return (
    <>
      <Section surface="hero" reveal={false}>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">
            {resourcesContent.caseStudies.label}
          </p>
          <h1 className="mt-4 text-5xl leading-[1] text-[color:var(--fg)] sm:text-6xl">{cs.title}</h1>
          <p className="mt-6 text-sm text-[color:var(--muted)]">
            {cs.date} • {cs.readTime} • {cs.tags.join(" • ")}
          </p>
          <p className="mt-7 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">{cs.excerpt}</p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-12">
          <Card className="lg:col-span-4" accent="gold">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">CONTEXT</p>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--fg)]">{cs.context}</p>
          </Card>
          <Card className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">FOCUS</p>
            <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-[color:var(--fg)]">
              {cs.focus.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--brand-blue)_45%,transparent)]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">OUTCOMES</p>
            <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-[color:var(--fg)]">
              {cs.outcomes.map((o) => (
                <li key={o} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--brand-blue)_45%,transparent)]" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section>
        <Card>
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">SUMMARY</p>
            <div className="mt-6 grid gap-5 text-base leading-relaxed text-[color:var(--fg)] sm:text-lg">
              {cs.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
}
