"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation, site } from "@/content/content";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const items = useMemo(
    () =>
      navigation.map((item) => ({
        ...item,
        current:
          item.href === "/"
            ? pathname === "/"
            : item.href === "/impact"
              ? pathname === "/impact" || pathname.startsWith("/case-studies/")
              : pathname === item.href || pathname.startsWith(`${item.href}/`),
      })),
    [pathname],
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-brand-gold/35 bg-brand-blue text-brand-gold backdrop-blur",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand-blue focus:px-4 focus:py-2 focus:text-sm focus:text-brand-gold focus:shadow-card"
      >
        Skip to content
      </a>

      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className={cn(
            "group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue",
          )}
        >
          <BrandLogo background="dark" priority />
          <span className="sr-only">{site.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={cn(
                "text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue",
                item.current
                  ? "text-brand-gold underline decoration-brand-gold/70 underline-offset-8"
                  : "text-brand-gold/85 hover:text-brand-gold",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-full border border-brand-gold bg-brand-gold px-4 text-sm font-semibold text-brand-blue transition hover:shadow-[0_0_18px_rgba(255,255,255,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue"
          >
            Begin a Conversation
          </Link>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/60 bg-brand-blue text-brand-gold transition hover:bg-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue",
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-50 bg-black/40 md:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className={cn(
                "ml-auto h-full w-[86%] max-w-sm border-l border-brand-gold/35 bg-brand-blue text-brand-gold shadow-glow",
              )}
              initial={reduceMotion ? false : { x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 40, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Container className="py-6">
                <div className="flex items-center justify-between">
                  <Link href="/" className="inline-flex items-center gap-3">
                    <BrandLogo background="dark" />
                    <span className="sr-only">{site.name}</span>
                  </Link>
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/60 bg-brand-blue text-brand-gold transition hover:bg-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav aria-label="Mobile" className="mt-6 space-y-2">
                  {items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={cn(
                        "block rounded-2xl border px-4 py-3 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue",
                        item.current
                          ? "border-brand-gold/60 bg-white/10 text-brand-gold"
                          : "border-brand-gold/35 text-brand-gold/90 hover:border-brand-gold/70 hover:bg-white/10 hover:text-brand-gold",
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}

                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex h-11 w-full items-center justify-center rounded-full border border-brand-gold bg-brand-gold text-sm font-semibold text-brand-blue transition hover:shadow-[0_0_18px_rgba(255,255,255,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue"
                      onClick={() => setOpen(false)}
                    >
                      Begin a Conversation
                    </Link>
                  </div>
                </nav>
              </Container>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
