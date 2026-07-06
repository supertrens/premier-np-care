"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/components/utils";

export function NavLink({
  href,
  label,
  className,
  activeClassName,
  inactiveClassName,
}: {
  href: string;
  label: string;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
}) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={cn(className, isActive ? activeClassName : inactiveClassName)}
      href={href}
    >
      {label}
    </Link>
  );
}
