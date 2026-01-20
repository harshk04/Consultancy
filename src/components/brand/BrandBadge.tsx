import { cn } from "@/lib/utils";

export function BrandBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-brand-gold/50 bg-white/70 px-3 py-1 text-xs font-medium tracking-wide text-brand-blue shadow-sm backdrop-blur",
        className,
      )}
    >
      {children}
    </span>
  );
}

