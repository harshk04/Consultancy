import { cn } from "@/lib/utils";

export function BrandSectionHeader({
  title,
  description,
  kicker,
  align = "left",
  className,
}: {
  title: string;
  description?: string;
  kicker?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <header
      className={cn(
        "space-y-3",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {kicker ? (
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-blue/80">
          {kicker}
        </p>
      ) : null}
      <div className={cn(align === "center" ? "mx-auto" : "", "max-w-3xl")}>
        <h2 className="font-serif text-2xl tracking-tight text-brand-blue sm:text-3xl">
          {title}
        </h2>
        <div
          aria-hidden="true"
          className={cn(
            "mt-3 h-px w-20 bg-gradient-to-r from-transparent via-brand-gold to-transparent",
            align === "left" ? "ml-0" : "mx-auto",
          )}
        />
        {description ? (
          <p className="mt-4 text-sm leading-relaxed text-brand-blue/80 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}

