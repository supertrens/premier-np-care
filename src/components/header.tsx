import { CalendarCheck, Menu } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { NavLink } from "@/components/nav-link";
import { bookingUrl } from "@/lib/config";
import { navItems } from "@/lib/content";

function HealthCross({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect x="5" y="0" width="4" height="14" rx="1.5" fill="currentColor" />
      <rect x="0" y="5" width="14" height="4" rx="1.5" fill="currentColor" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-porcelain/88 backdrop-blur-xl">
      <Container className="flex min-h-[68px] items-center justify-between gap-4">
        <Link
          className="group flex items-center gap-3 focus-visible:rounded-[10px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
          href="/"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-deep-navy text-paper shadow-[0_12px_28px_rgba(7,4,95,0.22)] transition-colors group-hover:bg-cobalt">
            <HealthCross />
          </span>
          <span className="font-display text-xl font-medium text-ink transition-colors group-hover:text-cobalt">
            Premier NP Care
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          {navItems.slice(1).map((item) => (
            <NavLink
              activeClassName="text-cobalt underline decoration-2 underline-offset-8"
              className="text-base font-semibold transition-colors hover:text-cobalt focus-visible:rounded-[10px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
              inactiveClassName="text-ink/68"
              href={item.href}
              key={item.href}
              label={item.label}
            />
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink className="px-4 py-2" href={bookingUrl} variant="cobalt">
            <CalendarCheck aria-hidden="true" size={18} />
            Book
          </ButtonLink>
        </div>

        <details className="nav-details group md:hidden">
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-center rounded-[10px] border border-line bg-paper px-3 text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan">
            <Menu aria-hidden="true" size={22} />
            <span className="sr-only">Open navigation</span>
          </summary>
          <div className="absolute left-4 right-4 top-[76px] rounded-[18px] border border-line bg-paper p-4 shadow-[0_24px_70px_rgba(7,28,42,0.14)]">
            <nav aria-label="Mobile navigation" className="grid gap-1">
              {navItems.map((item) => (
                <NavLink
                  activeClassName="bg-mist text-cobalt"
                  className="rounded-[12px] px-3 py-3 text-base font-semibold hover:bg-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                  inactiveClassName="text-ink/74 hover:text-ink"
                  href={item.href}
                  key={item.href}
                  label={item.label}
                />
              ))}
            </nav>
            <div className="mt-3">
              <ButtonLink className="w-full" href={bookingUrl} variant="cobalt">
                <CalendarCheck aria-hidden="true" size={18} />
                Book a Visit
              </ButtonLink>
            </div>
          </div>
        </details>
      </Container>
    </header>
  );
}
