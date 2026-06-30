import Link from "next/link";
import { Container } from "@/components/container";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_0.8fr_0.9fr_0.9fr]">
          <div>
            <p className="font-display text-3xl font-medium text-ink">
              Premier NP Care
            </p>
            <p className="mt-4 max-w-sm leading-7 text-ink/62">
              Nurse Practitioner-led care with telehealth access.{" "}
              [PLACEHOLDER: service area].
            </p>
            <p className="mt-6 border-l-2 border-clay pl-4 text-sm leading-6 text-ink/58">
              Informational only. Not a patient portal.
            </p>
          </div>

          <div>
            <p className="label-caps text-fern">Navigate</p>
            <nav aria-label="Footer navigation" className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link
                  className="text-base text-ink/62 transition-colors hover:text-fern focus-visible:rounded-[8px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fern"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="label-caps text-fern">Contact</p>
            <address className="mt-5 grid gap-3 not-italic">
              {["[PLACEHOLDER] Phone", "[PLACEHOLDER] Email", "[PLACEHOLDER] Hours"].map((item) => (
                <span key={item} className="text-base text-ink/62">{item}</span>
              ))}
            </address>
          </div>

          <div>
            <p className="label-caps text-fern">Hours</p>
            <p className="mt-5 leading-7 text-ink/62">
              [PLACEHOLDER: Appointment availability and telehealth hours.]
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-ink/8 pt-7 sm:flex-row sm:items-center">
          <p className="text-sm text-ink/44">
            © {new Date().getFullYear()} Premier NP Care
          </p>
          <p className="text-sm text-ink/44">
            For emergencies, call 911
          </p>
        </div>
      </Container>
    </footer>
  );
}
