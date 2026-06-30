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
        "rounded-[14px] border border-line bg-paper p-6 shadow-[0_20px_60px_rgba(7,28,42,0.07)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
