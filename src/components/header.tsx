import { CalendarCheck, Menu } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
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
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/94 backdrop-blur-xl">
      <Container className="flex min-h-[62px] items-center justify-between gap-4">
        <Link
          className="group flex items-center gap-3 focus-visible:rounded-[8px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fern"
          href="/"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-fern text-paper transition-colors group-hover:bg-clay">
            <HealthCross />
          </span>
          <span className="font-display text-xl font-medium text-ink transition-colors group-hover:text-fern">
            Premier NP Care
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          {navItems.slice(1).map((item) => (
            <Link
              className="text-base font-semibold text-ink/72 transition-colors hover:text-fern focus-visible:rounded-[8px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fern"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink className="min-h-10 px-4 py-2" href={bookingUrl} variant="fern">
            <CalendarCheck aria-hidden="true" size={18} />
            Book
          </ButtonLink>
        </div>

        <details className="nav-details group md:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-center rounded-[8px] border border-ink/14 bg-paper px-3 text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fern">
            <Menu aria-hidden="true" size={22} />
            <span className="sr-only">Open navigation</span>
          </summary>
          <div className="absolute left-4 right-4 top-[70px] rounded-[8px] border border-ink/12 bg-paper p-4 shadow-[0_24px_60px_rgba(24,35,31,0.16)]">
            <nav aria-label="Mobile navigation" className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  className="rounded-[8px] px-3 py-3 text-base font-semibold text-ink/74 hover:bg-mist hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fern"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3">
              <ButtonLink className="w-full" href={bookingUrl} variant="fern">
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
