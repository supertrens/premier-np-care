import { CalendarCheck, Menu } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { navItems } from "@/lib/content";
import { bookingUrl } from "@/lib/config";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/88 backdrop-blur-xl">
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <Link
          className="group flex items-center gap-3 font-display text-xl font-medium text-ink focus-visible:rounded-[8px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay"
          href="/"
        >
          <span className="h-px w-8 bg-clay" aria-hidden="true" />
          Premier NP Care
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 md:flex"
        >
          {navItems.slice(1).map((item) => (
            <Link
              className="text-base font-semibold text-ink/78 hover:text-clay focus-visible:rounded-[8px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink className="min-h-10 px-4 py-2" href={bookingUrl}>
            <CalendarCheck aria-hidden="true" size={19} />
            Book
          </ButtonLink>
        </div>

        <details className="nav-details group md:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-center rounded-[8px] border border-ink/18 bg-paper px-3 text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay">
            <Menu aria-hidden="true" size={22} />
            <span className="sr-only">Open navigation</span>
          </summary>
          <div className="absolute left-5 right-5 top-20 rounded-[8px] border border-ink/12 bg-paper p-4 shadow-[0_24px_60px_rgba(36,49,45,0.18)]">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  className="rounded-[8px] px-3 py-3 text-base font-semibold text-ink hover:bg-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink className="mt-2 w-full" href={bookingUrl}>
                <CalendarCheck aria-hidden="true" size={19} />
                Book an Appointment
              </ButtonLink>
            </nav>
          </div>
        </details>
      </Container>
    </header>
  );
}
