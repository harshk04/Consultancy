import { cn } from "@/lib/utils";

type SectionProps = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<"section"> & {
    variant?: "light" | "dark" | "blue";
  }
>;

const variants: Record<NonNullable<SectionProps["variant"]>, string> = {
  light: "bg-white text-brand-blue",
  dark: "bg-brand-blue text-white",
  blue: "bg-brand-blue text-white",
};

export function Section({
  variant = "light",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      {...props}
      className={cn("scroll-mt-28 py-14 sm:py-20", className, variants[variant])}
    >
      {children}
    </section>
  );
}
