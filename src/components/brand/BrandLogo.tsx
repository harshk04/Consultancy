import Image from "next/image";
import { cn } from "@/lib/utils";

export function BrandLogo({
  background = "light",
  priority,
  className,
}: {
  background?: "light" | "dark";
  priority?: boolean;
  className?: string;
}) {
  const src = background === "dark" ? "/darkbg.jpeg" : "/lightbg.jpeg";

  return (
    <Image
      src={src}
      alt="ShreeGuru Leadership & Learning logo"
      width={180}
      height={48}
      priority={priority}
      className={cn("h-9 w-auto", className)}
    />
  );
}

