"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export function Section({
  children,
  className,
  id,
  surface = "default",
  reveal = true,
  sectionRef,
  ...props
}: {
  children: React.ReactNode;
  surface?: "default" | "muted" | "hero" | "gold";
  reveal?: boolean;
  sectionRef?: React.Ref<HTMLElement>;
} & Omit<React.ComponentPropsWithoutRef<"section">, "children">) {
  const surfaceClass =
    surface === "hero"
      ? "hero-surface"
      : surface === "muted"
        ? "bg-[color:color-mix(in_oklab,var(--brand-gold)_10%,white)]"
        : surface === "gold"
          ? "section-noise [background-image:var(--gradient-gold-soft)]"
          : "bg-[color:var(--bg)]";

  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(!reveal);

  useEffect(() => {
    if (!reveal) return;
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reveal]);

  return (
    <section
      {...props}
      ref={sectionRef}
      id={id}
      className={cn(surfaceClass, "relative py-16 sm:py-20", className)}
    >
      <div ref={ref} className={cn("mx-auto w-full max-w-6xl px-6", reveal && "reveal", visible && "is-visible")}>
        {children}
      </div>
    </section>
  );
}
