"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/components/utils";
import { navItems } from "@/lib/content";

export function DesktopNavLinks() {
  const pathname = usePathname();
  return (
    <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
      {navItems.slice(1).map((item) => {
        const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
        return (
          <Link
            className={cn(
              "label-caps transition-colors focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fern",
              active ? "text-fern" : "text-ink/50 hover:text-fern"
            )}
            href={item.href}
            key={item.href}
            aria-current={active ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function MobileNavLinks() {
  const pathname = usePathname();
  return (
    <nav aria-label="Mobile navigation" className="flex flex-col gap-0.5">
      {navItems.map((item) => {
        const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
        return (
          <Link
            className={cn(
              "rounded-xl px-4 py-3 label-caps hover:bg-mist",
              active ? "text-fern bg-fern-light/60" : "text-ink/60 hover:text-ink"
            )}
            href={item.href}
            key={item.href}
            aria-current={active ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
