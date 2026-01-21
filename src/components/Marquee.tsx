import { cn } from "@/lib/cn";

export function Marquee({ items, className }: { items: readonly string[]; className?: string }) {
  const row = (
    <div className="flex shrink-0 items-center gap-10 px-10 py-5 sm:px-14 sm:py-6">
      {items.map((item, idx) => (
        <div key={`${item}-${idx}`} className="flex items-center gap-6 whitespace-nowrap">
          <span className="text-sm font-semibold tracking-[0.12em] text-[color:var(--fg)] sm:text-base">
            {item}
          </span>
          {idx === items.length - 1 ? null : (
            <span
              aria-hidden="true"
              className="text-base text-[color:color-mix(in_oklab,var(--fg)_35%,transparent)] sm:text-lg"
            >
              •
            </span>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        "marquee relative w-full overflow-hidden border-y border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--brand-gold)_10%,white)]",
        className,
      )}
      aria-label="Values marquee"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-[linear-gradient(90deg,rgba(255,255,255,1),rgba(255,255,255,0.98)_22%,rgba(255,255,255,0.72)_58%,rgba(255,255,255,0.0))] sm:w-36 lg:w-48"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-[linear-gradient(270deg,rgba(255,255,255,1),rgba(255,255,255,0.98)_22%,rgba(255,255,255,0.72)_58%,rgba(255,255,255,0.0))] sm:w-36 lg:w-48"
        aria-hidden="true"
      />

      <div className="marquee-track relative z-0 flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}
