import { Section } from "@/components/Section";
import { ResourceCard } from "@/components/ResourceCard";
import { resourcesContent } from "@/content/resources";

export default function ResourcesPage() {
  return (
    <>
      <Section surface="hero" reveal={false}>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{resourcesContent.overview.label}</p>
          <h1 className="mt-4 text-5xl leading-[1] text-[color:var(--fg)] sm:text-6xl">{resourcesContent.overview.title}</h1>
          <p className="mt-7 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">{resourcesContent.overview.intro}</p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {resourcesContent.overview.categories.map((c, idx) => (
            <ResourceCard
              key={c.href}
              meta={c.label}
              title={c.title}
              excerpt={c.excerpt}
              href={c.href}
              accent={idx === 1 ? "gold" : undefined}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
