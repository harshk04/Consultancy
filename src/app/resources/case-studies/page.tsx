import { Section } from "@/components/Section";
import { ResourceCard } from "@/components/ResourceCard";
import { caseStudies, resourcesContent } from "@/content/resources";

export default function CaseStudiesPage() {
  return (
    <>
      <Section surface="hero" reveal={false}>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">
            {resourcesContent.caseStudies.label}
          </p>
          <h1 className="mt-4 text-5xl leading-[1] text-[color:var(--fg)] sm:text-6xl">{resourcesContent.caseStudies.title}</h1>
          <p className="mt-7 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">{resourcesContent.caseStudies.intro}</p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((c, idx) => (
            <ResourceCard
              key={c.slug}
              meta={`${c.date} • ${c.readTime}`}
              title={c.title}
              excerpt={c.excerpt}
              href={`/resources/case-studies/${c.slug}`}
              accent={idx === 1 ? "gold" : undefined}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
