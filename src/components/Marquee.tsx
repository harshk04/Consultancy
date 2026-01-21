import { cn } from "@/lib/cn";

export function Marquee({ items, className }: { items: readonly string[]; className?: string }) {
  const row = (
    <div className="flex w-1/2 items-center justify-around gap-7 px-6 py-3">
      {items.map((item, idx) => (
        <div key={`${item}-${idx}`} className="flex items-center gap-6 whitespace-nowrap">
          <span className="rounded-md bg-[color:color-mix(in_oklab,var(--brand-gold)_22%,white)] px-3 py-1 text-xs font-semibold tracking-[0.12em] text-[color:var(--fg)]">
            {item}
          </span>
          {idx === items.length - 1 ? null : (
            <span aria-hidden="true" className="text-[color:color-mix(in_oklab,var(--fg)_35%,transparent)]">
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
        "marquee w-full overflow-hidden border-y border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--brand-gold)_10%,white)]",
        className,
      )}
      aria-label="Values marquee"
    >
      <div className="marquee-track flex w-[200%]">
        {row}
        {row}
      </div>
    </div>
  );
}
