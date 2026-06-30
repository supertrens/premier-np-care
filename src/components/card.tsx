import type { ReactNode } from "react";
import { cn } from "@/components/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[8px] border border-ink/12 bg-paper p-6 shadow-[0_18px_40px_rgba(36,49,45,0.07)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
