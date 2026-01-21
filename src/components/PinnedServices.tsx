"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
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
  const listRef = useRef<HTMLDivElement | null>(null);
  const categoryButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [renderIndex, setRenderIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out" | "idle">("idle");
  const [desktop, setDesktop] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [listHeight, setListHeight] = useState<number | null>(null);
  const [bulletYs, setBulletYs] = useState<number[]>([]);

  const steps = categories.length;

  const displayedIndex = reduceMotion ? activeIndex : renderIndex;
  const rendered = categories[displayedIndex] ?? categories[0];

  const safeSteps = Math.max(1, steps);

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
    if (!desktop) return;
    const container = listRef.current;
    if (!container) return;

    const measure = () => {
      const listRect = container.getBoundingClientRect();
      const nextHeight = Math.max(1, Math.round(listRect.height));
      setListHeight(nextHeight);

      const nextBulletYs: number[] = [];
      for (let i = 0; i < safeSteps; i += 1) {
        const btn = categoryButtonRefs.current[i];
        if (!btn) continue;
        const btnRect = btn.getBoundingClientRect();
        const y = btnRect.top - listRect.top + btnRect.height / 2;
        nextBulletYs.push(y);
      }

      if (nextBulletYs.length === safeSteps) {
        setBulletYs(nextBulletYs);
      }
    };

    measure();

    const ro =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(() => measure());
    ro?.observe(container);

    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ro?.disconnect();
    };
  }, [desktop, safeSteps, categories]);

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
      const progress = (y - top) / scrollable;
      const clamped = Math.min(0.9999, Math.max(0, progress));
      const nextIndex = Math.min(steps - 1, Math.floor(clamped * steps));
      setScrollProgress(clamped);
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
    setScrollProgress(Math.min(0.9999, Math.max(0, segmentStart)));
    const y = top + scrollable * segmentStart + 1;
    window.scrollTo({ top: y, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const { trackTop, trackBottom, fillBottom, bulletPoints, measuredHeight } = useMemo(() => {
    const fallbackHeight = listHeight ?? 320;
    const padding = 10;
    const fallbackYs =
      safeSteps <= 1
        ? [fallbackHeight / 2]
        : Array.from({ length: safeSteps }, (_, idx) => padding + (fallbackHeight - padding * 2) * (idx / (safeSteps - 1)));

    const points = bulletYs.length === safeSteps ? bulletYs : fallbackYs;
    const top = points[0] ?? 0;
    const bottom = points[safeSteps - 1] ?? top;

    const clamped = Math.min(0.9999, Math.max(0, scrollProgress));
    const segmentIndex = Math.min(safeSteps - 1, Math.floor(clamped * safeSteps));
    const segmentStart = segmentIndex / safeSteps;
    const segmentEnd = (segmentIndex + 1) / safeSteps;
    const segmentT = (clamped - segmentStart) / Math.max(1e-6, segmentEnd - segmentStart);

    const startY = points[segmentIndex] ?? top;
    const endY = points[Math.min(segmentIndex + 1, safeSteps - 1)] ?? bottom;
    const fillY = startY + (endY - startY) * segmentT;

    return {
      trackTop: top,
      trackBottom: bottom,
      fillBottom: fillY,
      bulletPoints: points,
      measuredHeight: fallbackHeight,
    };
  }, [bulletYs, listHeight, safeSteps, scrollProgress]);

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
              {!desktop ? (
                <div className="mb-5 rounded-[var(--radius-pill)] border border-[color:color-mix(in_oklab,var(--brand-gold)_22%,transparent)] bg-white px-4 py-3">
                  <div className="relative flex items-center justify-between gap-3">
                    <div className="absolute left-3 right-3 top-1/2 h-px -translate-y-1/2 bg-[color:color-mix(in_oklab,var(--border)_80%,transparent)]" />
                    <div
                      className="absolute left-3 top-1/2 h-[2px] -translate-y-1/2 bg-[image:var(--gradient-gold)] transition-[width] duration-200 ease-out motion-reduce:transition-none"
                      style={{ width: steps <= 1 ? "0%" : `${(activeIndex / (steps - 1)) * 100}%` }}
                      aria-hidden="true"
                    />
                    {categories.map((c, idx) => {
                      const isActive = idx === activeIndex;
                      const isCompleted = idx < activeIndex;
                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => jumpTo(idx)}
                          aria-current={isActive ? "step" : undefined}
                          className={cn(
                            "relative z-10 grid h-8 w-8 place-items-center rounded-full border bg-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]",
                            isCompleted
                              ? "border-[color:color-mix(in_oklab,var(--brand-gold)_40%,var(--border))] bg-[color:color-mix(in_oklab,var(--brand-gold)_18%,white)]"
                              : "border-[color:var(--border)]",
                            isActive && "h-9 w-9 border-[color:color-mix(in_oklab,var(--brand-gold)_45%,transparent)] bg-[image:var(--gradient-gold)] shadow-[0_10px_20px_rgba(15,23,42,0.18)]",
                          )}
                          title={c.title}
                        >
                          <span className={cn("text-xs font-semibold", isActive ? "text-[color:var(--brand-blue)]" : "text-[color:var(--fg)]")}>
                            {idx + 1}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : null}

              <div ref={listRef} className="grid gap-4">
                {categories.map((c, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => jumpTo(idx)}
                      ref={(node) => {
                        categoryButtonRefs.current[idx] = node;
                      }}
                      className={cn(
                        "group flex w-full items-center gap-4 rounded-[calc(var(--radius-card)-6px)] border bg-white px-5 py-4 text-left shadow-[var(--shadow)] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)] hover:shadow-[var(--shadow-hover)]",
                        "hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0",
                        isActive
                          ? "border-[color:var(--border-gold)] bg-[image:var(--gradient-gold-soft)]"
                          : "border-[color:var(--border)]",
                      )}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span
                        className={cn(
                          "grid h-11 w-11 shrink-0 place-items-center rounded-xl border bg-white text-[color:var(--fg)] transition-colors",
                          isActive
                            ? "border-[color:var(--border-gold)] bg-[color:color-mix(in_oklab,white_75%,var(--brand-gold)_25%)]"
                            : "border-[color:var(--border)]",
                        )}
                      >
                        <Icon name={c.icon} className={cn(isActive ? "text-[color:var(--brand-blue)]" : "text-[color:var(--fg)]")} />
                      </span>
                      <div className="min-w-0">
                        <p className={cn("text-base font-semibold leading-snug text-[color:var(--fg)]", isActive && "text-[color:var(--brand-blue)]")}>
                          {c.title}
                        </p>
                        <p
                          className={cn(
                            "mt-1 text-sm leading-relaxed text-[color:var(--muted)]",
                            isActive && "text-[color:color-mix(in_oklab,var(--brand-blue)_48%,var(--muted))]",
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

            <div className="hidden lg:col-span-1 lg:flex lg:justify-center">
              <div
                className="relative w-12"
                style={{ height: measuredHeight }}
                aria-label="Services progress"
                role="group"
              >
                <div
                  className="absolute left-1/2 w-px -translate-x-1/2 bg-[color:color-mix(in_oklab,var(--border)_85%,transparent)]"
                  style={{ top: trackTop, height: Math.max(1, trackBottom - trackTop) }}
                  aria-hidden="true"
                />
                <div
                  className="absolute left-1/2 w-[2px] -translate-x-1/2 bg-[image:var(--gradient-gold)] transition-[height] duration-150 ease-out motion-reduce:transition-none"
                  style={{ top: trackTop, height: Math.max(0, fillBottom - trackTop) }}
                  aria-hidden="true"
                />

                {categories.map((c, idx) => {
                  const isActive = idx === activeIndex;
                  const isCompleted = idx < activeIndex;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => jumpTo(idx)}
                      aria-current={isActive ? "step" : undefined}
                      title={c.title}
                      className={cn(
                        "absolute left-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border bg-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]",
                        "h-4 w-4",
                        isCompleted
                          ? "border-[color:color-mix(in_oklab,var(--brand-gold)_45%,var(--border))] bg-[color:color-mix(in_oklab,var(--brand-gold)_16%,white)]"
                          : "border-[color:var(--border)]",
                        isActive &&
                          "h-5 w-5 border-[color:color-mix(in_oklab,var(--brand-gold)_55%,transparent)] bg-[image:var(--gradient-gold)] shadow-[0_12px_28px_rgba(15,23,42,0.22)]",
                        "hover:shadow-[0_12px_28px_rgba(15,23,42,0.16)]",
                      )}
                      style={{ top: bulletPoints[idx] ?? 0 }}
                    >
                      <span className="sr-only">{c.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-6 lg:pl-8">
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
