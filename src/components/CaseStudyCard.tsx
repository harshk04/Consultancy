import Link from "next/link";
import { Card } from "@/components/Card";

export function CaseStudyCard({
  title,
  description,
  href,
  linkLabel,
}: {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <Card>
      <h3 className="text-base font-semibold leading-snug text-[color:var(--fg)]">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">{description}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-2 text-sm text-[color:var(--fg)] underline decoration-[color:color-mix(in_oklab,var(--fg)_35%,transparent)] underline-offset-4 transition-colors hover:decoration-[color:var(--fg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]"
      >
        {linkLabel}
        <span aria-hidden="true">→</span>
      </Link>
    </Card>
  );
}
