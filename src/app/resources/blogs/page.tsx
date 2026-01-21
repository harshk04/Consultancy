import { Section } from "@/components/Section";
import { ResourceCard } from "@/components/ResourceCard";
import { blogPosts, resourcesContent } from "@/content/resources";

export default function BlogsPage() {
  return (
    <>
      <Section surface="hero" reveal={false}>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{resourcesContent.blogs.label}</p>
          <h1 className="mt-4 text-5xl leading-[1] text-[color:var(--fg)] sm:text-6xl">{resourcesContent.blogs.title}</h1>
          <p className="mt-7 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">{resourcesContent.blogs.intro}</p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((p, idx) => (
            <ResourceCard
              key={p.slug}
              meta={`${p.date} • ${p.readTime}`}
              title={p.title}
              excerpt={p.excerpt}
              href={`/resources/blogs/${p.slug}`}
              accent={idx === 0 ? "gold" : undefined}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
