import { notFound } from "next/navigation";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { getBlogPost, resourcesContent } from "@/content/resources";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) return notFound();

  return (
    <>
      <Section surface="hero" reveal={false}>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{resourcesContent.blogs.label}</p>
          <h1 className="mt-4 text-5xl leading-[1] text-[color:var(--fg)] sm:text-6xl">{post.title}</h1>
          <p className="mt-6 text-sm text-[color:var(--muted)]">
            {post.date} • {post.readTime} • {post.tags.join(" • ")}
          </p>
          <p className="mt-7 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">{post.excerpt}</p>
        </div>
      </Section>

      <Section>
        <Card>
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-5 text-base leading-relaxed text-[color:var(--fg)] sm:text-lg">
              {post.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
}
