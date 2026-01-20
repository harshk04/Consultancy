"use client";

import { cn } from "@/lib/utils";

type Speed = "slow" | "normal" | "fast";
type Direction = "left" | "right";

const speedToDuration: Record<Speed, string> = {
  slow: "36s",
  normal: "24s",
  fast: "16s",
};

export function InfiniteMarquee({
  items,
  speed = "normal",
  direction = "left",
  className,
  ariaLabel = "Values",
}: {
  items: readonly string[];
  speed?: Speed;
  direction?: Direction;
  className?: string;
  ariaLabel?: string;
}) {
  const duration = speedToDuration[speed];

  return (
    <section
      aria-label={ariaLabel}
      className={cn(
        "relative border-y border-brand-gold/35 bg-brand-blue text-white",
        className,
      )}
      data-nav-scheme="dark"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-brand-blue to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-brand-blue to-transparent" />

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="py-4">
          <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
            <div
              className={cn(
                "flex w-max items-center gap-6 will-change-transform motion-reduce:hidden",
                "animate-marquee group-hover:[animation-play-state:paused]",
              )}
              style={{
                animationDuration: duration,
                animationDirection: direction === "right" ? "reverse" : "normal",
              }}
            >
              <MarqueeRow items={items} ariaHidden={false} />
              <MarqueeRow items={items} ariaHidden />
            </div>

            <div className="hidden flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center motion-reduce:flex">
              {items.map((item, idx) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-sm font-bold tracking-wide text-white">
                    {item}
                  </span>
                  {idx < items.length - 1 ? (
                    <span className="text-brand-gold" aria-hidden="true">
                      •
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  ariaHidden,
}: {
  items: readonly string[];
  ariaHidden: boolean;
}) {
  return (
    <div className="flex items-center gap-6" aria-hidden={ariaHidden}>
      {items.map((item, idx) => (
        <div key={`${item}-${idx}`} className="flex items-center gap-6">
          <span className="text-sm font-bold tracking-wide text-white">
            {item}
          </span>
          {idx < items.length - 1 ? (
            <span className="text-brand-gold" aria-hidden="true">
              •
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
