"use client";

import { home } from "@/content/content";
import { BrandCard } from "@/components/brand/BrandCard";
import { Reveal } from "@/components/motion/Reveal";
import { motion, useReducedMotion } from "framer-motion";

export function StatsGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {home.stats.items.map((stat, idx) => (
        <Reveal key={stat.label} delay={idx * 0.04}>
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="h-full"
          >
            <BrandCard className="h-full p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-serif text-3xl tracking-tight text-brand-blue">
                    {stat.value === null ? "—" : stat.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-brand-blue">
                    {stat.label}
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="mt-2 h-2 w-2 rounded-full bg-brand-gold"
                />
              </div>
              {stat.note ? (
                <p className="mt-4 text-sm text-brand-blue/70">{stat.note}</p>
              ) : null}
            </BrandCard>
          </motion.div>
        </Reveal>
      ))}
    </div>
  );
}

