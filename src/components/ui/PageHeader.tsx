import { Container } from "@/components/ui/Container";

export function PageHeader({
  title,
  intro,
}: {
  title: string;
  intro?: string;
}) {
  return (
    <div className="border-b border-brand-gold/25 bg-[linear-gradient(180deg,#fbfbff,#ffffff)]">
      <Container className="py-12 sm:py-16">
        <div className="max-w-3xl space-y-3">
          <h1 className="font-serif text-3xl tracking-tight text-brand-blue sm:text-4xl">
            {title}
          </h1>
          <div
            aria-hidden="true"
            className="h-px w-24 bg-gradient-to-r from-transparent via-brand-gold to-transparent"
          />
          {intro ? (
            <p className="text-sm leading-relaxed text-brand-blue/80 sm:text-base">
              {intro}
            </p>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
