"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { cn } from "@/lib/cn";

type HomeHeroContent = {
  tag: string;
  heading: string;
  body: readonly string[];
  primaryCta: { label: string; href: string };
  trustCard: { title: string; bullets: readonly string[] };
  microHint: string;
};

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function isDesktop() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(min-width: 1024px)")?.matches ?? false;
}

export function HomeHero({ hero }: { hero: HomeHeroContent }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef({ x: 0, y: 0 });

  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const sync = () => setInteractive(isDesktop() && !prefersReducedMotion());
    sync();
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    mqDesktop.addEventListener("change", sync);
    mqReduce.addEventListener("change", sync);
    return () => {
      mqDesktop.removeEventListener("change", sync);
      mqReduce.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (!interactive) {
      el.style.removeProperty("--hero-parallax-x");
      el.style.removeProperty("--hero-parallax-y");
      el.style.removeProperty("--hero-card-parallax-x");
      el.style.removeProperty("--hero-card-parallax-y");
      return;
    }
  }, [interactive]);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!interactive) return;
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / Math.max(1, rect.width);
    const py = (e.clientY - rect.top) / Math.max(1, rect.height);
    const x = (px - 0.5) * 2;
    const y = (py - 0.5) * 2;

    lastRef.current = { x, y };
    if (rafRef.current) return;

    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      const next = lastRef.current;
      el.style.setProperty("--hero-parallax-x", `${next.x * 6}px`);
      el.style.setProperty("--hero-parallax-y", `${next.y * 6}px`);
      el.style.setProperty("--hero-card-parallax-x", `${next.x * 3}px`);
      el.style.setProperty("--hero-card-parallax-y", `${next.y * 3}px`);
    });
  };

  const onMouseLeave = () => {
    if (!interactive) return;
    const el = sectionRef.current;
    if (!el) return;
    el.style.setProperty("--hero-parallax-x", "0px");
    el.style.setProperty("--hero-parallax-y", "0px");
    el.style.setProperty("--hero-card-parallax-x", "0px");
    el.style.setProperty("--hero-card-parallax-y", "0px");
  };

  return (
    <Section
      surface="hero"
      className="hero-surface--enhanced pt-14 sm:pt-20"
      reveal={false}
      sectionRef={sectionRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <span className="hero-enter hero-enter--1 inline-flex items-center rounded-[var(--radius-pill)] border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--brand-blue)_3%,white)] px-4 py-2 text-xs font-semibold tracking-[0.14em] text-[color:var(--fg)]">
            {hero.tag}
          </span>

          <h1 className="hero-enter hero-enter--2 mt-8 text-5xl leading-[0.98] text-[color:var(--fg)] sm:text-6xl lg:text-7xl">
            <span className="hero-headline">{hero.heading}</span>
          </h1>

          <div className="mt-7 grid max-w-2xl gap-4 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
            {hero.body.map((p, idx) => (
              <p key={p} className={cn("hero-enter", idx === 0 ? "hero-enter--3" : idx === 1 ? "hero-enter--4" : "hero-enter--5")}>
                {p}
              </p>
            ))}
          </div>

          <div className="hero-enter hero-enter--6 mt-10 flex flex-wrap items-center gap-4">
            <Button
              variant="outline"
              href={hero.primaryCta.href}
              className="hero-primary-cta px-7 py-3 text-base"
            >
              {hero.primaryCta.label}
            </Button>
          </div>
        </div>

        <div className="hero-enter hero-enter--5 lg:col-span-5 lg:pt-28">
          <div
            className="transition-transform duration-300 ease-out motion-reduce:transition-none"
            style={{
              transform: "translate3d(var(--hero-card-parallax-x,0px), var(--hero-card-parallax-y,0px), 0)",
            }}
          >
            <Card className="hero-trust-card relative overflow-hidden">
              <div className="hero-card-ring pointer-events-none absolute -inset-14" aria-hidden="true" />
              <div className="hero-card-glass pointer-events-none absolute inset-0" aria-hidden="true" />

              <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{hero.trustCard.title}</p>
              <ul className="mt-8 grid gap-4 text-[color:var(--fg)]">
                {hero.trustCard.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-base leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[image:var(--gradient-gold)] shadow-[0_10px_20px_rgba(15,23,42,0.10)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
