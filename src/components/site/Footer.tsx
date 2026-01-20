import Link from "next/link";
import { site } from "@/content/content";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "IB", href: "/ib-world-schools" },
  { label: "Impact", href: "/impact" },
  { label: "Founder", href: "/founder" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer
      className="border-t border-brand-gold/25 bg-brand-blue text-brand-gold"
      data-nav-scheme="dark"
    >
      <Container className="py-14">
        <div className="grid items-start gap-10 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue"
            >
              <BrandLogo
                background="dark"
                className="h-auto w-[170px] sm:w-[180px] md:w-[210px]"
              />
              <span className="sr-only">{site.name}</span>
            </Link>
            <p className="mt-5 text-sm text-brand-gold/85">{site.tagline}</p>
            <p className="mt-1 text-sm text-brand-gold/85">{site.brandLine}</p>
            <div
              aria-hidden="true"
              className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-brand-gold/70 to-transparent"
            />
          </div>

          <nav aria-label="Footer" className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
              Quick Links
            </p>
            <div aria-hidden="true" className="mt-3 h-px w-14 bg-brand-gold/40" />
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-sm text-brand-gold/85 transition hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
              Contact
            </p>
            <div aria-hidden="true" className="mt-3 h-px w-14 bg-brand-gold/40" />
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-brand-gold" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="text-xs font-medium uppercase tracking-[0.18em] text-brand-gold/70">
                    Email
                  </dt>
                  <dd className="mt-1 truncate text-brand-gold/90">
                    {site.contactPlaceholders.email}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-brand-gold" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="text-xs font-medium uppercase tracking-[0.18em] text-brand-gold/70">
                    Phone
                  </dt>
                  <dd className="mt-1 truncate text-brand-gold/90">
                    {site.contactPlaceholders.phone}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-gold" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="text-xs font-medium uppercase tracking-[0.18em] text-brand-gold/70">
                    Location
                  </dt>
                  <dd className="mt-1 truncate text-brand-gold/90">
                    {site.contactPlaceholders.location}
                  </dd>
                </div>
              </div>
            </dl>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
              Social
            </p>
            <div aria-hidden="true" className="mt-3 h-px w-14 bg-brand-gold/40" />
            <ul className="mt-5 space-y-2 text-sm text-brand-gold/85">
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-brand-gold/20 pt-6 text-xs text-brand-gold/75 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-brand-gold/75">Guiding Minds. Shaping Leaders.</p>
        </div>
      </Container>
    </footer>
  );
}
