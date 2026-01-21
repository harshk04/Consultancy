import { Section } from "@/components/Section";
import { ResourceCard } from "@/components/ResourceCard";
import { impactNotes, resourcesContent } from "@/content/resources";

export default function ImpactResourcesPage() {
  return (
    <>
      <Section surface="hero" reveal={false}>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{resourcesContent.impact.label}</p>
          <h1 className="mt-4 text-5xl leading-[1] text-[color:var(--fg)] sm:text-6xl">{resourcesContent.impact.title}</h1>
          <p className="mt-7 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">{resourcesContent.impact.intro}</p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {impactNotes.map((n, idx) => (
            <ResourceCard
              key={n.slug}
              meta={`${n.date} • ${n.readTime}`}
              title={n.title}
              excerpt={n.excerpt}
              href={`/resources/impact/${n.slug}`}
              accent={idx === 2 ? "gold" : undefined}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
