import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function IconCircle({
  icon: Icon,
  className,
}: {
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-gold/30 bg-white text-brand-blue shadow-sm",
        className,
      )}
      aria-hidden="true"
    >
      <Icon className="h-5 w-5" />
    </div>
  );
}
