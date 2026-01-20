"use client";

import { useState } from "react";
import { home } from "@/content/content";
import { BrandCard } from "@/components/brand/BrandCard";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-8 space-y-3">
      {home.faq.items.map((item, idx) => {
        const open = openIndex === idx;
        return (
          <BrandCard key={item.q} className="p-0">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 rounded-3xl px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              onClick={() => setOpenIndex((v) => (v === idx ? null : idx))}
              aria-expanded={open}
            >
              <span className="text-sm font-medium text-brand-blue">{item.q}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-brand-gold transition",
                  open ? "rotate-180" : "rotate-0",
                )}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-sm leading-relaxed text-brand-blue/80">
                    {item.a}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </BrandCard>
        );
      })}
    </div>
  );
}

