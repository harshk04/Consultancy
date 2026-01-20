import { cn } from "@/lib/utils";

export function BrandCard({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "feature";
}) {
  return (
    <div
      className={cn(
        "group relative rounded-3xl border border-brand-gold/25 bg-white p-6 shadow-card transition",
        variant === "feature"
          ? "bg-brand-blue text-white shadow-glow"
          : "hover:border-brand-gold/55 hover:shadow-glow",
        className,
      )}
      {...props}
    />
  );
}

