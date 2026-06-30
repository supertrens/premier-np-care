import type { ReactNode } from "react";
import { cn } from "@/components/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section className={cn("py-16", className)} id={id}>
      {children}
    </section>
  );
}

