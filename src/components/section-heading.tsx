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
        <p className="label-caps mb-3 text-cobalt">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-4xl font-medium leading-tight text-ink md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-ink/72">{description}</p>
      ) : null}
    </div>
  );
}
