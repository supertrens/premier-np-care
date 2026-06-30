import type { ReactNode } from "react";
import { cn } from "@/components/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase text-clay">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold text-ink">{title}</h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-ink/76">{description}</p>
      ) : null}
    </div>
  );
}

