"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { brand } from "@/content/brand";
import { headerCta, headerNav } from "@/content/navigation";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [homeActiveHref, setHomeActiveHref] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") return;

    const targets: Array<{ id: string; href: string }> = [
      { id: "home-services", href: "/services" },
      { id: "home-about", href: "/about" },
      { id: "home-resources", href: "/resources" },
    ];

    let raf = 0;
    const update = () => {
      const headerHeightRaw = getComputedStyle(document.documentElement).getPropertyValue("--header-height").trim();
      const headerHeight = Number.parseFloat(headerHeightRaw) || 80;
      const probeY = headerHeight + window.innerHeight * 0.22;

      for (const t of targets) {
        const el = document.getElementById(t.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom >= probeY) {
          setHomeActiveHref(t.href);
          return;
        }
      }

      setHomeActiveHref(null);
    };

    const onScroll = () => {
      window.cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  const items = useMemo(
    () =>
      headerNav.map((item) => ({
        ...item,
        active: pathname === "/" ? (homeActiveHref ? item.href === homeActiveHref : isActive(pathname, item.href)) : isActive(pathname, item.href),
        children: item.children?.map((c) => ({
          ...c,
          active: pathname === "/" ? false : isActive(pathname, c.href),
        })),
      })),
    [homeActiveHref, pathname],
  );

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "site-header fixed inset-x-0 top-0 z-50 h-[var(--header-height)] border-b border-[color:color-mix(in_oklab,var(--brand-gold)_22%,transparent)]",
        scrolled && "site-header--scrolled",
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)]"
          aria-label={brand.fullName}
        >
          <Image
            src="/darkbg.jpeg"
            alt={`${brand.fullName} logo`}
            width={200}
            height={60}
            priority
            className="h-8 w-auto rounded-md object-contain sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {items.map((item) =>
            item.children?.length ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-[color:var(--brand-gold)] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)]",
                    item.active && "text-white underline decoration-[color:var(--brand-gold)] underline-offset-8",
                  )}
                >
                  {item.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="opacity-90">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </Link>

                <div className="invisible absolute left-0 top-full mt-2 w-60 translate-y-1 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="rounded-2xl border border-[color:color-mix(in_oklab,var(--brand-gold)_20%,transparent)] bg-[color:var(--brand-blue-1)] [background-image:var(--gradient-blue)] p-2 shadow-[var(--shadow)]">
                    <p className="px-3 pb-2 pt-2 text-xs font-semibold tracking-[0.18em] text-[color:color-mix(in_oklab,var(--brand-gold)_75%,white)]">
                      RESOURCES
                    </p>
                    <div className="grid gap-1">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          aria-current={c.active ? "page" : undefined}
                          className={cn(
                            "rounded-xl px-3 py-2 text-sm font-medium text-[color:var(--brand-gold)] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-gold)]",
                            c.active && "bg-[color:color-mix(in_oklab,var(--brand-gold)_12%,transparent)] text-white",
                          )}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={item.active ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-[color:var(--brand-gold)] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)]",
                  item.active && "text-white underline decoration-[color:var(--brand-gold)] underline-offset-8",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={headerCta.href}
            className="hidden rounded-[var(--radius-pill)] border border-[color:color-mix(in_oklab,var(--brand-gold)_35%,transparent)] bg-[color:var(--brand-gold-1)] [background-image:var(--gradient-gold)] px-5 py-2.5 text-sm font-semibold text-[color:var(--brand-blue)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:text-black hover:brightness-95 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:white] lg:inline-flex"
          >
            {headerCta.label}
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[color:color-mix(in_oklab,var(--brand-gold)_25%,transparent)] text-[color:var(--brand-gold)] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div className="lg:hidden">
          <div className="border-t border-[color:color-mix(in_oklab,var(--brand-gold)_20%,transparent)] bg-[color:var(--brand-blue-1)] [background-image:var(--gradient-blue)]">
            <div className="mx-auto w-full max-w-6xl px-6 py-5">
              <nav className="grid gap-1" aria-label="Mobile primary">
                {items.map((item) =>
                  item.children?.length ? (
                    <div key={item.href} className="grid gap-1">
                      <Link
                        href={item.href}
                        aria-current={item.active ? "page" : undefined}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "rounded-xl px-4 py-3 text-base font-medium text-[color:var(--brand-gold)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)]",
                          item.active && "bg-[color:color-mix(in_oklab,var(--brand-gold)_10%,transparent)] text-white",
                        )}
                      >
                        {item.label}
                      </Link>
                      <div className="grid gap-1 pl-3">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            aria-current={c.active ? "page" : undefined}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "rounded-xl px-4 py-2.5 text-sm font-medium text-[color:color-mix(in_oklab,var(--brand-gold)_86%,white)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)]",
                              c.active && "bg-[color:color-mix(in_oklab,var(--brand-gold)_10%,transparent)] text-white",
                            )}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={item.active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-xl px-4 py-3 text-base font-medium text-[color:var(--brand-gold)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)]",
                        item.active && "bg-[color:color-mix(in_oklab,var(--brand-gold)_10%,transparent)] text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  ),
                )}
                <Link
                  href={headerCta.href}
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-[var(--radius-pill)] border border-[color:color-mix(in_oklab,var(--brand-gold)_35%,transparent)] bg-[color:var(--brand-gold-1)] [background-image:var(--gradient-gold)] px-5 py-3 text-base font-semibold text-[color:var(--brand-blue)] transition-colors hover:text-black hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:white]"
                >
                  {headerCta.label}
                </Link>
              </nav>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
