"use client";

import { useId, useMemo, useState } from "react";
import { cn } from "@/lib/cn";

export type AccordionItem = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export function Accordion({ items, className }: { items: readonly AccordionItem[]; className?: string }) {
  const baseId = useId();
  const defaultIndex = useMemo(() => items.findIndex((i) => i.defaultOpen), [items]);
  const [openIndex, setOpenIndex] = useState<number>(defaultIndex >= 0 ? defaultIndex : -1);

  return (
    <div className={cn("grid gap-5", className)}>
      {items.map((item, idx) => {
        const open = idx === openIndex;
        const buttonId = `${baseId}-btn-${idx}`;
        const panelId = `${baseId}-panel-${idx}`;

        return (
          <div
            key={item.question}
            className="rounded-[var(--radius-card)] border border-[color:var(--border)] bg-[color:var(--panel)] shadow-[var(--shadow)] transition-transform duration-200 ease-out motion-reduce:transition-none hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 hover:shadow-[var(--shadow-hover)]"
          >
            <button
              id={buttonId}
              type="button"
              className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-blue)]"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex((v) => (v === idx ? -1 : idx))}
            >
              <span className="text-base font-semibold text-[color:var(--fg)]">{item.question}</span>
              <span
                className={cn(
                  "grid h-10 w-10 place-items-center rounded-xl border border-[color:var(--border)] text-[color:var(--fg)] transition-transform",
                  open && "rotate-180",
                )}
                aria-hidden="true"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn("grid overflow-hidden px-7", open ? "pb-7" : "pb-0")}
              style={{
                gridTemplateRows: open ? "1fr" : "0fr",
                transition: "grid-template-rows 220ms ease, padding 220ms ease",
              }}
            >
              <div className={cn("min-h-0", open ? "opacity-100" : "opacity-0")} style={{ transition: "opacity 200ms ease" }}>
                <p className="pb-1 text-base leading-relaxed text-[color:var(--muted)]">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
