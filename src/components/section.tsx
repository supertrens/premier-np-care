"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/components/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className={cn("py-16", className)}
      id={id}
      initial={shouldReduceMotion ? false : { y: 28 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.15 }}
      whileInView={{ y: 0 }}
    >
      {children}
    </motion.section>
  );
}
