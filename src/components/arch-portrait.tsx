"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/components/utils";

interface ArchPortraitProps {
  src: string;
  alt: string;
  name: string;
  credential: string;
  href?: string;
  ctaLabel?: string;
  trailing?: ReactNode;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export function ArchPortrait({
  src,
  alt,
  name,
  credential,
  href,
  ctaLabel = "View Profile",
  trailing,
  priority = true,
  sizes = "(min-width: 1024px) 42vw, 90vw",
  className,
}: ArchPortraitProps) {
  const shouldReduceMotion = useReducedMotion();

  const card = (
    <div className="relative">
      <motion.div
        aria-hidden="true"
        className="absolute -inset-3 rounded-b-[2.25rem] rounded-t-[999px] bg-[radial-gradient(circle_at_30%_20%,rgba(88,199,214,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(201,168,76,0.18),transparent_50%)]"
        animate={
          shouldReduceMotion
            ? undefined
            : { opacity: [0.55, 0.9, 0.55], scale: [0.98, 1.02, 0.98] }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -translate-y-4 translate-x-4 rounded-b-[1.75rem] rounded-t-[999px] bg-deep-navy"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-b-[1.75rem] rounded-t-[999px] ring-1 ring-inset ring-gold/50"
      />
      <div className="relative aspect-[4/5] overflow-hidden rounded-b-[1.75rem] rounded-t-[999px] bg-[linear-gradient(180deg,#f4f1ec_0%,#edeae3_45%,#e9e5de_100%)] shadow-[0_40px_100px_rgba(26,53,87,0.18)]">
        <motion.div
          className="absolute inset-0"
          animate={shouldReduceMotion ? undefined : { scale: [1, 1.015, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            alt={alt}
            className="object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            fill
            priority={priority}
            sizes={sizes}
            src={src}
          />
        </motion.div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[12%] h-[14%] bg-[linear-gradient(180deg,#f0ede7,rgba(240,237,231,0))]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(26,53,87,0.18))] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
    </div>
  );

  const defaultTrailing = href ? (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-2 text-sm font-semibold text-harbor transition-colors group-hover:border-gold group-hover:bg-mist">
      {ctaLabel}
      <ArrowRight
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-0.5"
        size={14}
      />
    </span>
  ) : null;

  const caption = (
    <div className="mt-6 px-1">
      <span aria-hidden="true" className="block h-px w-10 bg-gold/70" />
      <p
        className={cn(
          "mt-4 whitespace-nowrap font-display text-2xl font-medium text-ink",
          href && "transition-colors group-hover:text-cobalt",
        )}
      >
        {name}
      </p>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-medium text-ink/78">{credential}</p>
        {trailing !== undefined ? trailing : defaultTrailing}
      </div>
    </div>
  );

  return (
    <motion.figure
      className={cn("mx-auto w-full max-w-[480px] lg:ml-auto lg:max-w-none", className)}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {href ? (
        <Link
          aria-label={`View ${name}'s full profile`}
          className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          href={href}
        >
          {card}
          {caption}
        </Link>
      ) : (
        <div className="group">
          {card}
          {caption}
        </div>
      )}
    </motion.figure>
  );
}
