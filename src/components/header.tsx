import { CalendarCheck, Menu } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { navItems } from "@/lib/content";
import { bookingUrl } from "@/lib/config";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/[0.08] bg-paper/90 backdrop-blur-xl">
      <Container className="flex min-h-[68px] items-center justify-between gap-4">

        {/* Wordmark */}
        <Link
          className="group flex items-center gap-3 focus-visible:rounded-[8px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay"
          href="/"
        >
          {/* NP mark */}
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ink text-paper transition-colors group-hover:bg-clay">
            <span className="font-display text-xs font-medium leading-none tracking-tight">NP</span>
          </div>
          <span className="font-display text-xl font-medium text-ink transition-colors group-hover:text-clay">
            Premier NP Care
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 md:flex"
        >
          {navItems.slice(1).map((item) => (
            <Link
              className="rounded-lg px-3 py-2 text-sm font-semibold text-ink/65 transition-colors hover:bg-mist hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Book CTA */}
        <div className="hidden md:block">
          <ButtonLink className="min-h-10 px-5 py-2 text-sm" href={bookingUrl}>
            <CalendarCheck aria-hidden="true" size={17} />
            Book
          </ButtonLink>
        </div>

        {/* Mobile menu */}
        <details className="nav-details group md:hidden">
          <summary className="flex min-h-10 cursor-pointer list-none items-center justify-center rounded-lg border border-ink/15 bg-paper px-3 text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay">
            <Menu aria-hidden="true" size={21} />
            <span className="sr-only">Open navigation</span>
          </summary>
          <div className="absolute left-4 right-4 top-[72px] rounded-2xl border border-ink/10 bg-paper/95 p-3 shadow-[0_24px_60px_rgba(23,33,29,0.15)] backdrop-blur-xl">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  className="rounded-xl px-4 py-3 text-base font-semibold text-ink hover:bg-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink className="mt-2 w-full" href={bookingUrl}>
                <CalendarCheck aria-hidden="true" size={18} />
                Book an Appointment
              </ButtonLink>
            </nav>
          </div>
        </details>
      </Container>
    </header>
  );
}
