import Link from "next/link";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-pill)] border px-5 py-2.5 text-sm font-medium shadow-[0_10px_22px_rgba(15,23,42,0.08)] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-gold)] hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(15,23,42,0.12)] active:translate-y-0 motion-reduce:hover:translate-y-0 motion-reduce:transition-none";

const variants = {
  primary:
    "border-[color:color-mix(in_oklab,var(--brand-blue)_18%,transparent)] [background-image:var(--gradient-gold)] text-[color:var(--brand-blue)] hover:text-black hover:brightness-95",
  outline:
    "border-[color:var(--border)] bg-transparent text-[color:var(--fg)] hover:bg-[color:color-mix(in_oklab,var(--brand-blue)_5%,transparent)]",
  ghost:
    "border-transparent bg-transparent text-[color:var(--fg)] hover:bg-[color:color-mix(in_oklab,var(--brand-blue)_6%,transparent)]",
  headerLink:
    "border-transparent bg-transparent px-3 py-2 text-sm font-medium text-[color:var(--brand-gold)] hover:text-white",
} as const;

export function Button({
  children,
  className,
  variant = "outline",
  href,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  href?: string;
}) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
