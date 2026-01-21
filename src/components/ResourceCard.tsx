import Link from "next/link";
import { Card } from "@/components/Card";

export function ResourceCard({
  title,
  excerpt,
  href,
  meta,
  accent,
}: {
  title: string;
  excerpt: string;
  href: string;
  meta?: string;
  accent?: "gold";
}) {
  return (
    <Card accent={accent}>
      {meta ? <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{meta}</p> : null}
      <h3 className="mt-3 text-xl leading-tight text-[color:var(--fg)]">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">{excerpt}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-[color:var(--fg)] underline decoration-[color:color-mix(in_oklab,var(--fg)_35%,transparent)] underline-offset-6 transition-colors hover:decoration-[color:var(--fg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]"
      >
        Read <span aria-hidden="true">→</span>
      </Link>
    </Card>
  );
}
