"use client";

import { useId, useMemo, useState } from "react";
import type { ServiceCategoryWithSlug } from "@/content/content";
import { cn } from "@/lib/utils";
import { IconCircle } from "@/components/ui/IconCircle";
import { icons } from "@/components/icons";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BrandButtonLink } from "@/components/brand/BrandButton";

export function ServicesTabs({
  categories,
}: {
  categories: ServiceCategoryWithSlug[];
}) {
  const baseId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const active = useMemo(
    () => categories[Math.min(activeIndex, categories.length - 1)],
    [activeIndex, categories],
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
      <div>
        <div
          role="tablist"
          aria-label="Service categories"
          className="grid gap-2"
        >
          {categories.map((cat, idx) => {
            const selected = idx === activeIndex;
            return (
              <button
                key={cat.title}
                type="button"
                role="tab"
                id={`${baseId}-tab-${idx}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel-${idx}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "group relative flex w-full items-center gap-3 overflow-hidden rounded-3xl border px-4 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                  selected
                    ? "border-brand-gold/45 bg-brand-blue/5 text-brand-blue shadow-sm"
                    : "border-brand-gold/20 bg-white text-brand-blue/75 hover:border-brand-gold/45 hover:bg-brand-blue/5 hover:text-brand-blue",
                )}
              >
                {selected ? (
                  <motion.span
                    layoutId="services-tab-indicator"
                    aria-hidden="true"
                    className="absolute inset-0 rounded-3xl border border-brand-gold/40 bg-gradient-to-r from-brand-blue/5 via-white to-white"
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                ) : null}
                <IconCircle
                  icon={icons[cat.icon]}
                  className={cn(
                    "relative z-10 h-10 w-10 rounded-2xl transition",
                    selected
                      ? "border-brand-gold/40 bg-brand-blue text-white"
                      : "group-hover:border-brand-gold/40 group-hover:text-brand-blue",
                  )}
                />
                <div className="relative z-10 min-w-0">
                  <div className="text-sm font-medium leading-tight">
                    {cat.title}
                  </div>
                  {cat.summary ? (
                    <div className="mt-1 line-clamp-2 text-xs text-brand-blue/70">
                      {cat.summary}
                    </div>
                  ) : null}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel-${activeIndex}`}
        aria-labelledby={`${baseId}-tab-${activeIndex}`}
        className="rounded-3xl border border-brand-gold/25 bg-white p-6 shadow-card"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active.slug}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex items-start gap-4">
              <IconCircle
                icon={icons[active.icon]}
                className="h-12 w-12 rounded-2xl"
              />
              <div className="min-w-0">
                <h2 className="font-serif text-2xl tracking-tight text-brand-blue">
                  {active.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-brand-blue/80">
                  Services in this category include:
                </p>
              </div>
            </div>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {active.items.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-brand-gold/20 bg-white px-4 py-3 text-sm text-brand-blue shadow-sm transition hover:border-brand-gold/45"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <BrandButtonLink href={`/services/${active.slug}`} variant="primary">
                View details
              </BrandButtonLink>
              <BrandButtonLink href="/contact" variant="secondary">
                Begin a Conversation
              </BrandButtonLink>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
