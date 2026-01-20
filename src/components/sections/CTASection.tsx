import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BrandButtonLink } from "@/components/brand/BrandButton";

export function CTASection({
  heading = "Begin a Conversation",
  body,
  href = "/contact",
}: {
  heading?: string;
  body: string;
  href?: string;
}) {
  return (
    <Section
      variant="blue"
      className="relative overflow-hidden py-16 sm:py-20"
      data-nav-scheme="dark"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
      >
        <div className="absolute -inset-24 bg-[radial-gradient(900px_520px_at_20%_25%,rgba(200,162,74,0.22),transparent_60%),radial-gradient(760px_420px_at_78%_40%,rgba(255,255,255,0.14),transparent_60%)]" />
      </div>

      <Container className="relative">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/90 md:text-lg">
            {body}
          </p>
          <div
            aria-hidden="true"
            className="mt-6 h-px w-28 bg-gradient-to-r from-transparent via-brand-gold to-transparent"
          />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <BrandButtonLink
              href={href}
              size="lg"
              variant="secondary"
              className="border-brand-gold/70 focus-visible:ring-offset-brand-blue"
            >
              Begin a Purposeful Conversation
            </BrandButtonLink>
            <BrandButtonLink
              href="/contact"
              size="lg"
              variant="ghost"
              className="border border-brand-gold/45 bg-white/10 text-white hover:border-brand-gold/70 hover:bg-white/15 hover:text-white focus-visible:ring-offset-brand-blue"
            >
              Contact Us
            </BrandButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
