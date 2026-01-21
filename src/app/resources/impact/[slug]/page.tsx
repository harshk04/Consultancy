import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/Card";
import { ResourceCard } from "@/components/ResourceCard";
import { Section } from "@/components/Section";
import { ShareBar } from "@/components/ShareBar";
import { getImpactNote, impactNotes, resourcesContent } from "@/content/resources";

export function generateStaticParams() {
  return impactNotes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = getImpactNote(slug);
  if (!note) return {};
  return {
    title: `${note.title} · ${resourcesContent.impact.title}`,
    description: note.excerpt,
    openGraph: {
      title: note.title,
      description: note.excerpt,
      type: "article",
    },
  };
}

export default async function ImpactNotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = getImpactNote(slug);
  if (!note) return notFound();

  return (
    <>
      <Section surface="hero" reveal={false}>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{resourcesContent.impact.label}</p>
          <h1 className="mt-4 text-5xl leading-[1] text-[color:var(--fg)] sm:text-6xl">{note.title}</h1>
          <p className="mt-6 text-sm text-[color:var(--muted)]">
            {note.date} • {note.readTime} • {note.tags.join(" • ")}
          </p>
          <p className="mt-7 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">{note.excerpt}</p>
          <div className="mt-8">
            <ShareBar title={note.title} path={`/resources/impact/${note.slug}`} />
          </div>
          <p className="mt-6 text-sm font-semibold text-[color:var(--fg)] underline decoration-[color:color-mix(in_oklab,var(--fg)_35%,transparent)] underline-offset-4">
            <Link href="/resources/impact">← Back to Impact</Link>
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-12">
          <Card className="lg:col-span-4" accent="gold">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">HIGHLIGHTS</p>
            <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-[color:var(--fg)]">
              {note.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--brand-blue)_45%,transparent)]" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="lg:col-span-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">NOTE</p>
            <div className="mt-6 grid gap-5 text-base leading-relaxed text-[color:var(--fg)] sm:text-lg">
              {note.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Section surface="muted">
        <div className="grid gap-6 md:grid-cols-2">
          {impactNotes
            .filter((n) => n.slug !== note.slug)
            .slice(0, 2)
            .map((n, idx) => (
              <ResourceCard
                key={n.slug}
                meta={`${n.date} • ${n.readTime}`}
                title={n.title}
                excerpt={n.excerpt}
                href={`/resources/impact/${n.slug}`}
                accent={idx === 0 ? "gold" : undefined}
              />
            ))}
        </div>
      </Section>
    </>
  );
}
