import Link from "next/link";
import { Card } from "@/components/Card";
import { Icon } from "@/components/Icon";

export function ServiceCard({
  title,
  href,
  icon,
  linkLabel,
}: {
  title: string;
  href: string;
  icon: "book" | "compass" | "users" | "building";
  linkLabel: string;
}) {
  return (
    <Card>
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 place-items-center rounded-xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--brand-blue)_4%,white)] text-[color:var(--fg)]">
          <Icon name={icon} />
        </span>
        <div className="min-w-0">
          <h3 className="text-base font-semibold leading-snug text-[color:var(--fg)]">{title}</h3>
          <Link
            href={href}
            className="mt-4 inline-flex items-center gap-2 text-sm text-[color:var(--fg)] underline decoration-[color:color-mix(in_oklab,var(--fg)_35%,transparent)] underline-offset-4 transition-colors hover:decoration-[color:var(--fg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]"
          >
            {linkLabel}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </Card>
  );
}
