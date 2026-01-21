import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/Card";
import { ResourceCard } from "@/components/ResourceCard";
import { Section } from "@/components/Section";
import { ShareBar } from "@/components/ShareBar";
import { caseStudies, getCaseStudy, resourcesContent } from "@/content/resources";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.title} · ${resourcesContent.caseStudies.title}`,
    description: cs.excerpt,
    openGraph: {
      title: cs.title,
      description: cs.excerpt,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
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
          <div className="mt-8">
            <ShareBar title={cs.title} path={`/resources/case-studies/${cs.slug}`} />
          </div>
          <p className="mt-6 text-sm font-semibold text-[color:var(--fg)] underline decoration-[color:color-mix(in_oklab,var(--fg)_35%,transparent)] underline-offset-4">
            <Link href="/resources/case-studies">← Back to Case Studies</Link>
          </p>
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

      <Section surface="muted">
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies
            .filter((c) => c.slug !== cs.slug)
            .slice(0, 2)
            .map((c, idx) => (
              <ResourceCard
                key={c.slug}
                meta={`${c.date} • ${c.readTime}`}
                title={c.title}
                excerpt={c.excerpt}
                href={`/resources/case-studies/${c.slug}`}
                accent={idx === 0 ? "gold" : undefined}
              />
            ))}
        </div>
      </Section>
    </>
  );
}
