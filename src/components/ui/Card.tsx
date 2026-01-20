import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-brand-gold/25 bg-white p-6 shadow-card",
        className,
      )}
      {...props}
    />
  );
}
