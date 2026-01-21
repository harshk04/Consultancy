import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/Card";
import { ResourceCard } from "@/components/ResourceCard";
import { Section } from "@/components/Section";
import { ShareBar } from "@/components/ShareBar";
import { blogPosts, getBlogPost, resourcesContent } from "@/content/resources";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} · ${resourcesContent.blogs.title}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
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
          <div className="mt-8">
            <ShareBar title={post.title} path={`/resources/blogs/${post.slug}`} />
          </div>
          <p className="mt-6 text-sm font-semibold text-[color:var(--fg)] underline decoration-[color:color-mix(in_oklab,var(--fg)_35%,transparent)] underline-offset-4">
            <Link href="/resources/blogs">← Back to Blogs</Link>
          </p>
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

      <Section surface="muted">
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts
            .filter((p) => p.slug !== post.slug)
            .slice(0, 2)
            .map((p, idx) => (
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
