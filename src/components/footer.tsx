import Link from "next/link";
import { Container } from "@/components/container";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.25fr_0.75fr_1fr]">
        <div>
          <p className="font-display text-3xl font-semibold">
            Premier NP Care
          </p>
          <p className="mt-3 max-w-md leading-7 text-paper/78">
            Nurse Practitioner-led care with telehealth access. [PLACEHOLDER:
            practice location/service area].
          </p>
        </div>
        <div>
          <p className="font-semibold text-paper">Navigate</p>
          <nav aria-label="Footer navigation" className="mt-3 grid gap-2">
            {navItems.map((item) => (
              <Link
                className="text-paper/78 hover:text-marigold focus-visible:rounded-[8px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-marigold"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="font-semibold text-paper">Contact</p>
          <address className="mt-3 not-italic leading-7 text-paper/78">
            [PLACEHOLDER] Phone
            <br />
            [PLACEHOLDER] Email
            <br />
            [PLACEHOLDER] Hours
          </address>
          <p className="mt-5 border-l border-marigold pl-4 text-sm leading-6 text-paper/70">
            This website is informational only and does not collect patient
            records.
          </p>
        </div>
      </Container>
    </footer>
  );
}
