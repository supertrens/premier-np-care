import Link from "next/link";
import { Container } from "@/components/container";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-paper">
      <Container className="py-16">
        {/* Top row */}
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-paper/10">
                <span className="font-display text-xs font-medium text-paper">NP</span>
              </div>
              <p className="font-display text-xl font-semibold text-paper">
                Premier NP Care
              </p>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-7 text-paper/60">
              Nurse Practitioner-led care with telehealth access.{" "}
              [PLACEHOLDER: practice location/service area].
            </p>
            <p className="mt-6 border-l-2 border-marigold pl-4 text-xs leading-6 text-paper/50">
              This website is informational only and does not collect patient
              records.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-paper/40">Navigate</p>
            <nav aria-label="Footer navigation" className="mt-4 grid gap-2">
              {navItems.map((item) => (
                <Link
                  className="text-sm text-paper/65 transition-colors hover:text-marigold focus-visible:rounded-[6px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-marigold"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-paper/40">Contact</p>
            <address className="mt-4 grid gap-2 not-italic">
              {["[PLACEHOLDER] Phone", "[PLACEHOLDER] Email", "[PLACEHOLDER] Hours"].map((item) => (
                <span key={item} className="text-sm text-paper/65">{item}</span>
              ))}
            </address>
          </div>

          {/* Hours note */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-paper/40">Practice Hours</p>
            <p className="mt-4 text-sm leading-7 text-paper/65">
              [PLACEHOLDER: Hours and availability details for telehealth
              appointments.]
            </p>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-paper/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-paper/38">
            © {new Date().getFullYear()} Premier NP Care. All rights reserved.
          </p>
          <p className="text-xs text-paper/38">
            Not a patient portal. For emergencies, call 911.
          </p>
        </div>
      </Container>
    </footer>
  );
}
