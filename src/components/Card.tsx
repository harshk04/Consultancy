import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
  accent,
}: {
  children: React.ReactNode;
  className?: string;
  accent?: "gold";
}) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] border bg-[color:var(--panel)] p-7 shadow-[var(--shadow)] transition-transform transition-shadow duration-200 ease-out motion-reduce:transition-none hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 hover:shadow-[var(--shadow-hover)]",
        accent === "gold" ? "border-[color:var(--border-gold)]" : "border-[color:var(--border)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
