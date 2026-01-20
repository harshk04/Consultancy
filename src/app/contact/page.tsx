import type { Metadata } from "next";
import { contactPage, site } from "@/content/content";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BrandCard } from "@/components/brand/BrandCard";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: contactPage.title,
  description: contactPage.intro,
  alternates: { canonical: "/contact" },
  openGraph: { title: `${contactPage.title} · ${site.name}`, url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title={contactPage.title} intro={contactPage.intro} />

      <Section>
        <Container>
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <BrandCard className="p-6">
                <h2 className="font-serif text-xl tracking-tight text-brand-blue">
                  {contactPage.detailsHeading}
                </h2>
                <dl className="mt-6 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail
                      className="mt-0.5 h-4 w-4 text-brand-gold"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-[0.18em] text-brand-blue/70">
                        Email
                      </dt>
                      <dd className="mt-1 text-brand-blue">
                        {site.contactPlaceholders.email}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone
                      className="mt-0.5 h-4 w-4 text-brand-gold"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-[0.18em] text-brand-blue/70">
                        Phone
                      </dt>
                      <dd className="mt-1 text-brand-blue">
                        {site.contactPlaceholders.phone}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="mt-0.5 h-4 w-4 text-brand-gold"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-[0.18em] text-brand-blue/70">
                        Location
                      </dt>
                      <dd className="mt-1 text-brand-blue">
                        {site.contactPlaceholders.location}
                      </dd>
                    </div>
                  </div>
                </dl>
              </BrandCard>

              <BrandCard className="p-6">
                <h2 className="font-serif text-xl tracking-tight text-brand-blue">
                  {contactPage.formHeading}
                </h2>
                <p className="mt-2 text-sm text-brand-blue/75">
                  Fields marked with * are required.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </BrandCard>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
