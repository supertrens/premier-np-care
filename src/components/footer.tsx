import Link from "next/link";
import { Container } from "@/components/container";
import { navItems, practiceDetails } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-deep-navy text-paper">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_0.8fr_0.9fr_0.9fr]">
          <div>
            <p className="font-display text-3xl font-medium text-paper">
              Premier NP Care
            </p>
            <p className="mt-4 max-w-sm leading-7 text-paper/68">
              Nurse Practitioner-led primary and preventive care for patients
              age 14 and up.
            </p>
            <p className="mt-6 rounded-[16px] border border-cyan/25 bg-white/8 px-4 py-3 text-sm leading-6 text-paper/72">
              Personal care, clear next steps, and a calmer way to begin.
            </p>
          </div>

          <div>
            <p className="label-caps text-aqua">Navigate</p>
            <nav aria-label="Footer navigation" className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link
                  className="text-base text-paper/64 transition-colors hover:text-paper focus-visible:rounded-[8px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="label-caps text-aqua">Contact</p>
            <p className="mt-5 leading-7 text-paper/64">
              {practiceDetails.address}
            </p>
            <Link
              className="mt-4 inline-block text-base font-semibold text-aqua transition-colors hover:text-paper focus-visible:rounded-[8px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
              href="/contact"
            >
              Contact the practice →
            </Link>
          </div>

          <div>
            <p className="label-caps text-aqua">Visits</p>
            <p className="mt-5 leading-7 text-paper/64">
              {practiceDetails.schedule}
            </p>
            <p className="mt-3 leading-7 text-paper/64">
              {practiceDetails.payment}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/12 pt-7 sm:flex-row sm:items-center">
          <p className="text-sm text-paper/48">
            © {new Date().getFullYear()} Premier NP Care
          </p>
          <p className="text-sm text-paper/48">For emergencies, call 911</p>
        </div>
      </Container>
    </footer>
  );
}
