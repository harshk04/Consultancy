"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/cn";

type ServiceCategory = {
  id: string;
  title: string;
  icon: "book" | "compass" | "users" | "building";
  blurb: string;
  items: readonly string[];
};

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function mapPinnedScrollProgressToFill(progress: number, steps: number) {
  if (steps <= 1) return 1;

  const clamped = clamp(progress, 0, 1);
  const segmentIndex = Math.min(steps - 1, Math.floor(Math.min(clamped, 0.999999) * steps));
  if (segmentIndex >= steps - 1) return 1;

  const segmentStart = segmentIndex / steps;
  const segmentEnd = (segmentIndex + 1) / steps;
  const segmentProgress = clamp((clamped - segmentStart) / Math.max(1e-9, segmentEnd - segmentStart), 0, 1);

  const stopStart = segmentIndex / (steps - 1);
  const stopEnd = (segmentIndex + 1) / (steps - 1);
  return stopStart + segmentProgress * (stopEnd - stopStart);
}

export function PinnedServices({
  title,
  description,
  label,
  panelSubtitle,
  panelCta,
  categories,
}: {
  label: string;
  title: string;
  description: string;
  panelSubtitle: string;
  panelCta: { label: string; href: string };
  categories: readonly ServiceCategory[];
}) {
  const sceneRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [renderIndex, setRenderIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out" | "idle">("idle");
  const [desktop, setDesktop] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const steps = categories.length;
  const fillProgress = mapPinnedScrollProgressToFill(progress, steps);
  const trackInsetPct = steps > 0 ? (0.5 / steps) * 100 : 0;

  const displayedIndex = reduceMotion ? activeIndex : renderIndex;
  const rendered = categories[displayedIndex] ?? categories[0];

  useEffect(() => {
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setDesktop(mqDesktop.matches);
    const syncReduce = () => setReduceMotion(mqReduce.matches);
    sync();
    syncReduce();
    mqDesktop.addEventListener("change", sync);
    mqReduce.addEventListener("change", syncReduce);
    return () => {
      mqDesktop.removeEventListener("change", sync);
      mqReduce.removeEventListener("change", syncReduce);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    if (activeIndex === renderIndex) return;

    let canceled = false;
    const raf = window.requestAnimationFrame(() => {
      if (canceled) return;
      setPhase("out");
    });

    const t = window.setTimeout(() => {
      if (canceled) return;
      setRenderIndex(activeIndex);
      setPhase("in");
      window.setTimeout(() => {
        if (canceled) return;
        setPhase("idle");
      }, 200);
    }, 160);

    return () => {
      canceled = true;
      window.cancelAnimationFrame(raf);
      window.clearTimeout(t);
    };
  }, [activeIndex, renderIndex, reduceMotion]);

  useEffect(() => {
    if (!desktop) return;
    const el = sceneRef.current;
    if (!el) return;

    let raf = 0;
    const recalcAndUpdate = () => {
      const top = window.scrollY + el.getBoundingClientRect().top;
      const scrollable = Math.max(1, el.offsetHeight - window.innerHeight);
      const y = window.scrollY;
      const nextProgress = clamp((y - top) / scrollable, 0, 1);
      const nextIndex = Math.min(steps - 1, Math.floor(Math.min(nextProgress, 0.999999) * steps));
      setProgress(nextProgress);
      setActiveIndex(nextIndex);
    };

    const onScroll = () => {
      window.cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(recalcAndUpdate);
    };

    const onResize = () => onScroll();

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [desktop, steps]);

  const jumpTo = (index: number) => {
    setActiveIndex(index);
    if (!desktop) return;
    if (!sceneRef.current) return;
    const el = sceneRef.current;
    const top = window.scrollY + el.getBoundingClientRect().top;
    const scrollable = Math.max(1, el.offsetHeight - window.innerHeight);
    const segmentStart = index / steps;
    const y = top + scrollable * segmentStart + 1;
    window.scrollTo({ top: y, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <div>
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{label}</p>
        <h2 className="mt-4 text-4xl leading-[1.05] text-[color:var(--fg)] sm:text-5xl">{title}</h2>
        <p className="mt-6 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">{description}</p>
      </div>

      <div
        ref={sceneRef}
        className={cn(
          "mt-12",
          desktop ? "relative" : "",
        )}
        style={desktop ? { height: `${Math.max(4, steps) * 110}vh` } : undefined}
      >
        <div
          className={cn(
            desktop
              ? "sticky top-[calc(var(--header-height)+28px)]"
              : "",
          )}
        >
          <div className={cn("grid gap-8 lg:grid-cols-12", desktop && "items-stretch")}>
            <div className="lg:col-span-5">
              <div className="grid gap-4">
                {categories.map((c, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => jumpTo(idx)}
                      className={cn(
                        isActive
                          ? "group flex w-full items-center gap-4 rounded-[calc(var(--radius-card)-6px)] border border-[color:color-mix(in_oklab,var(--brand-blue)_18%,var(--brand-gold-2))] bg-[color:var(--brand-gold-1)] px-5 py-4 text-left shadow-[var(--shadow-hover)] [background-image:var(--gradient-gold-soft)] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]"
                          : "group flex w-full items-center gap-4 rounded-[calc(var(--radius-card)-6px)] border border-[color:var(--border)] bg-white px-5 py-4 text-left shadow-[var(--shadow)] transition-all duration-200 hover:bg-[color:color-mix(in_oklab,var(--brand-blue)_2%,white)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]",
                        "hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)] active:translate-y-0 motion-reduce:hover:translate-y-0",
                      )}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span
                        className={cn(
                          "grid h-11 w-11 shrink-0 place-items-center rounded-xl border text-[color:var(--fg)] transition-colors",
                          isActive
                            ? "border-[color:color-mix(in_oklab,var(--brand-blue)_25%,transparent)] bg-white/70"
                            : "border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--brand-blue)_4%,white)]",
                        )}
                      >
                        <Icon name={c.icon} className={cn(isActive ? "text-[color:var(--brand-blue)]" : "text-[color:var(--fg)]")} />
                      </span>
                      <div className="min-w-0">
                        <p className={cn("text-base font-semibold leading-snug", isActive ? "text-[color:var(--brand-blue)]" : "text-[color:var(--fg)]")}>
                          {c.title}
                        </p>
                        <p
                          className={cn(
                            "mt-1 text-sm leading-relaxed",
                            isActive
                              ? "text-[color:color-mix(in_oklab,var(--brand-blue)_78%,black)]"
                              : "text-[color:var(--muted)]",
                          )}
                        >
                          {c.blurb}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {desktop ? (
                <p className="mt-4 text-xs text-[color:var(--muted)]">
                  Scroll to reveal each category, or click to jump.
                </p>
              ) : null}
            </div>

            <div className="hidden lg:col-span-1 lg:flex lg:items-stretch lg:justify-center">
              <div className="relative w-10">
                <div
                  className="absolute left-1/2 w-[2px] -translate-x-1/2 rounded-full bg-[color:color-mix(in_oklab,var(--brand-blue)_18%,transparent)]"
                  style={{ top: `${trackInsetPct}%`, bottom: `${trackInsetPct}%` }}
                  aria-hidden="true"
                />
                <div
                  className="absolute left-1/2 w-[2px] -translate-x-1/2 origin-top rounded-full"
                  style={{ top: `${trackInsetPct}%`, bottom: `${trackInsetPct}%` }}
                  aria-hidden="true"
                >
                  <div
                    className={cn(
                      "h-full w-full rounded-full bg-[color:var(--brand-gold-1)] [background-image:var(--gradient-gold)]",
                      reduceMotion ? "" : "transition-transform duration-300",
                      "motion-reduce:transition-none",
                    )}
                    style={{ transform: `scaleY(${fillProgress})` }}
                  />
                </div>

                <div className="relative grid h-full place-items-center">
                  <div
                    className="grid h-full w-full items-center justify-items-center"
                    style={{ gridTemplateRows: `repeat(${Math.max(1, steps)}, minmax(0, 1fr))` }}
                  >
                    {categories.map((c, idx) => {
                      const isActive = idx === activeIndex;
                      const isCompleted = idx < activeIndex;
                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => jumpTo(idx)}
                          className={cn(
                            "group grid h-10 w-10 place-items-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-blue)]",
                            reduceMotion ? "" : "transition-transform duration-200",
                            "motion-reduce:transition-none",
                            isActive && "scale-[1.08]",
                          )}
                          aria-label={`Go to ${c.title}`}
                          aria-current={isActive ? "step" : undefined}
                        >
                          <span
                            className={cn(
                              "h-4 w-4 rounded-full border transition-all duration-200 motion-reduce:transition-none",
                              isActive
                                ? "border-transparent bg-[color:var(--brand-gold-1)] shadow-[var(--shadow-soft-hover)] [background-image:var(--gradient-gold)] ring-4 ring-[color:color-mix(in_oklab,var(--brand-gold)_25%,transparent)]"
                                : isCompleted
                                  ? "border-[color:color-mix(in_oklab,var(--brand-gold)_55%,var(--border))] bg-[color:color-mix(in_oklab,var(--brand-gold)_28%,white)]"
                                  : "border-[color:var(--border)] bg-white",
                            )}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 lg:pl-6">
              <div
                className={cn(
                  "rounded-[var(--radius-card)] border bg-[color:var(--panel)] p-8 shadow-[var(--shadow)]",
                  "transition-shadow duration-200",
                  "border-[color:var(--border)]",
                )}
              >
                <div
                  className={cn(
                    "transition-all duration-300",
                    reduceMotion ? "" : phase === "out" ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
                  )}
                >
                  <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">SERVICES</p>
                  <h3 className="mt-4 font-display text-4xl leading-[1.02] text-[color:var(--fg)] sm:text-5xl">
                    {rendered.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-[color:var(--muted)]">{rendered.blurb}</p>

                  <p className="mt-10 text-sm font-semibold text-[color:var(--fg)]">{panelSubtitle}</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {rendered.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm font-medium text-[color:var(--fg)]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-center">
                  <Button variant="primary" href={panelCta.href} className="px-7 py-3 text-base">
                    {panelCta.label}
                  </Button>
                </div>

                <div className={cn("mt-6 flex items-center gap-6 text-xs text-[color:var(--muted)]", desktop ? "justify-between" : "justify-end")}>
                  {desktop ? (
                    <span>
                      Step {activeIndex + 1} / {steps}
                    </span>
                  ) : null}
                  <Link
                    href="/services"
                    className="rounded-md font-semibold text-[color:var(--fg)] underline decoration-[color:color-mix(in_oklab,var(--fg)_35%,transparent)] underline-offset-4 hover:decoration-[color:var(--fg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]"
                  >
                    Explore all services →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
