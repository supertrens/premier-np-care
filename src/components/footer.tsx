import Link from "next/link";
import { Container } from "@/components/container";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.6fr_0.8fr_0.8fr_0.8fr]">

          {/* Brand */}
          <div>
            <p className="font-display text-xl font-light text-ink">
              Premier NP Care
            </p>
            <p className="mt-4 text-[0.88rem] leading-7 text-ink/50 max-w-xs">
              Nurse Practitioner-led care with telehealth access.{" "}
              [PLACEHOLDER: service area].
            </p>
            <p className="mt-6 border-l border-clay/40 pl-4 text-[0.75rem] leading-6 text-ink/40">
              Informational only. Not a patient portal.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="label-caps text-ink/35">Navigate</p>
            <nav aria-label="Footer navigation" className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link
                  className="text-[0.88rem] text-ink/50 transition-colors hover:text-clay focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay"
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
            <p className="label-caps text-ink/35">Contact</p>
            <address className="mt-5 grid gap-3 not-italic">
              {["[PLACEHOLDER] Phone", "[PLACEHOLDER] Email", "[PLACEHOLDER] Hours"].map((item) => (
                <span key={item} className="text-[0.88rem] text-ink/50">{item}</span>
              ))}
            </address>
          </div>

          {/* Hours */}
          <div>
            <p className="label-caps text-ink/35">Hours</p>
            <p className="mt-5 text-[0.88rem] leading-7 text-ink/50">
              [PLACEHOLDER: Appointment availability and telehealth hours.]
            </p>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-ink/8 pt-7 sm:flex-row sm:items-center">
          <p className="text-[0.72rem] tracking-wide text-ink/30">
            © {new Date().getFullYear()} Premier NP Care
          </p>
          <p className="text-[0.72rem] tracking-wide text-ink/30">
            For emergencies, call 911
          </p>
        </div>
      </Container>
    </footer>
  );
}
