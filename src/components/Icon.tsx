import { cn } from "@/lib/cn";

export function Icon({
  name,
  className,
}: {
  name: "book" | "compass" | "users" | "building";
  className?: string;
}) {
  const common = "h-5 w-5";
  switch (name) {
    case "book":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn(common, className)} aria-hidden="true">
          <path
            d="M7 4h11a2 2 0 0 1 2 2v13.5c-2.2-1.2-4.8-1.2-7 0-2.2-1.2-4.8-1.2-7 0V6a2 2 0 0 1 1.8-2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M7 4v15.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "compass":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn(common, className)} aria-hidden="true">
          <path
            d="M12 21a9 9 0 1 0-9-9 9 9 0 0 0 9 9Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M14.8 9.2 13 13l-3.8 1.8L11 11l3.8-1.8Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn(common, className)} aria-hidden="true">
          <path
            d="M16 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M8 11a2.5 2.5 0 1 0-2.5-2.5A2.5 2.5 0 0 0 8 11Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M20 21v-1.2a5 5 0 0 0-5-5h-2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M11 21v-1.3a4.5 4.5 0 0 0-4.5-4.5H4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "building":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn(common, className)} aria-hidden="true">
          <path
            d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M4 21h16"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path d="M9 7h2M9 11h2M9 15h2M13 7h2M13 11h2M13 15h2" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
  }
}

