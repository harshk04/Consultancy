import Link from "next/link";
import { cn } from "@/lib/utils";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "border-brand-blue bg-brand-blue text-white shadow-card hover:border-brand-gold hover:bg-brand-blue",
  secondary:
    "border-brand-blue/20 bg-white text-brand-blue shadow-sm hover:border-brand-gold/60 hover:shadow-card",
  ghost:
    "border-transparent bg-transparent text-brand-blue hover:bg-brand-blue/5 hover:text-brand-blue",
};

const sizes: Record<NonNullable<CommonProps["size"]>, string> = {
  md: "h-10",
  lg: "h-12 px-5 text-[0.95rem]",
};

export function BrandButton({
  variant = "primary",
  size = "md",
  className,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export function BrandButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  ...props
}: CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  }) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

