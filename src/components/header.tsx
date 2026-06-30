import { Menu } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { navItems } from "@/lib/content";
import { bookingUrl } from "@/lib/config";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/[0.07] bg-paper/92 backdrop-blur-2xl">
      <Container className="flex min-h-[62px] items-center justify-between gap-4">

        {/* Wordmark — clean serif, no badge */}
        <Link
          className="font-display text-[1.15rem] font-light tracking-[-0.01em] text-ink transition-colors hover:text-clay focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay"
          href="/"
        >
          Premier NP Care
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {navItems.slice(1).map((item) => (
            <Link
              className="label-caps text-ink/50 transition-colors hover:text-ink focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Book — ghost underline style */}
        <div className="hidden md:block">
          <ButtonLink href={bookingUrl} variant="ghost">
            Book
          </ButtonLink>
        </div>

        {/* Mobile menu */}
        <details className="nav-details group md:hidden">
          <summary className="flex min-h-10 cursor-pointer list-none items-center justify-center rounded-lg border border-ink/12 bg-paper px-3 text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay">
            <Menu aria-hidden="true" size={20} />
            <span className="sr-only">Open navigation</span>
          </summary>
          <div className="absolute left-4 right-4 top-[66px] rounded-2xl border border-ink/8 bg-paper/97 p-3 shadow-[0_20px_50px_rgba(28,28,23,0.10)] backdrop-blur-2xl">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-0.5">
              {navItems.map((item) => (
                <Link
                  className="rounded-xl px-4 py-3 label-caps text-ink/60 hover:bg-mist hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 px-1">
                <ButtonLink className="w-full" href={bookingUrl} variant="ink">
                  Book an Appointment
                </ButtonLink>
              </div>
            </nav>
          </div>
        </details>
      </Container>
    </header>
  );
}
