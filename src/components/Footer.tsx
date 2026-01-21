import Image from "next/image";
import Link from "next/link";
import { footerContent } from "@/content/footer";
import { headerCta } from "@/content/navigation";
import { brand } from "@/content/brand";

export function Footer() {
  return (
    <footer className="border-t border-[color:color-mix(in_oklab,var(--brand-gold)_22%,transparent)] bg-[color:var(--brand-blue-1)] [background-image:var(--gradient-blue)] text-[color:var(--brand-gold)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-3">
              <Image
                src="/darkbg.jpeg"
                alt={`${brand.fullName} logo`}
                width={200}
                height={60}
                className="h-10 w-auto rounded-md object-contain"
              />
              <div>
                <p className="font-semibold text-[color:var(--brand-gold)]">{footerContent.brand.tagline1}</p>
                <p className="mt-1 text-sm text-[color:color-mix(in_oklab,var(--brand-gold)_78%,white)]">{footerContent.brand.tagline2}</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:color-mix(in_oklab,var(--brand-gold)_70%,white)]">
              SITEMAP
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {footerContent.sitemap.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-md text-[color:var(--brand-gold)] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:white]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:color-mix(in_oklab,var(--brand-gold)_70%,white)]">
              CONTACT
            </p>
            <p className="mt-4 text-sm text-[color:color-mix(in_oklab,var(--brand-gold)_85%,white)]">
              {footerContent.contactLine}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[color:color-mix(in_oklab,var(--brand-gold)_18%,transparent)] pt-6 text-xs text-[color:color-mix(in_oklab,var(--brand-gold)_70%,white)] sm:flex-row sm:items-center sm:justify-between">
          <p>{footerContent.copyright}</p>
          <p className="text-[color:color-mix(in_oklab,var(--brand-gold)_78%,white)]">{headerCta.label}</p>
        </div>
      </div>
    </footer>
  );
}
