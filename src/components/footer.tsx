import { CalendarCheck, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { bookingUrl, isPhoneConfirmed, phoneNumber } from "@/lib/config";
import {
  insuranceAccepted,
  navItems,
  practiceDetails,
} from "@/lib/content";

const phoneHref = `tel:+1${phoneNumber.replace(/\D/g, "")}`;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-deep-navy text-paper">
      <div className="care-current-lines absolute inset-0 opacity-12" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-cyan/12 blur-3xl"
      />
      <Container className="relative py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.7fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-medium text-paper">
              Premier NP Care
            </p>
            <p className="mt-3 max-w-sm leading-7 text-paper/68">
              Nurse Practitioner-led primary and preventive care for patients
              age 14 and up.
            </p>
            <p className="mt-6 inline-flex items-center gap-2.5 text-sm font-semibold text-paper/82">
              <span
                aria-hidden="true"
                className="pulse-dot relative flex h-2.5 w-2.5"
              >
                <span className="absolute inline-flex h-full w-full rounded-full bg-aqua/70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-aqua" />
              </span>
              Accepting new patients
            </p>
            <div className="mt-4">
              <ButtonLink href={bookingUrl} variant="mist">
                <CalendarCheck aria-hidden="true" size={19} />
                Book an Appointment
              </ButtonLink>
            </div>
          </div>

          <div>
            <p className="label-caps text-aqua">Navigate</p>
            <nav aria-label="Footer navigation" className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link
                  className="text-base text-paper/64 transition-colors hover:text-paper focus-visible:rounded-[8px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="label-caps text-aqua">Visits</p>
            <div className="mt-5 grid gap-4 text-paper/64">
              <p className="flex gap-3 leading-7">
                <Clock
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-aqua/80"
                  size={17}
                />
                {practiceDetails.schedule}
              </p>
              {isPhoneConfirmed ? (
                <a
                  className="flex gap-3 leading-7 transition-colors hover:text-paper focus-visible:rounded-[8px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  href={phoneHref}
                >
                  <Phone
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-aqua/80"
                    size={17}
                  />
                  {phoneNumber}
                </a>
              ) : (
                <Link
                  className="flex gap-3 leading-7 transition-colors hover:text-paper focus-visible:rounded-[8px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  href="/contact"
                >
                  <MessageCircle
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-aqua/80"
                    size={17}
                  />
                  Reach us through the contact form
                </Link>
              )}
              <p className="flex gap-3 leading-7">
                <MapPin
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-aqua/80"
                  size={17}
                />
                {practiceDetails.address}
              </p>
            </div>
          </div>

          <div>
            <p className="label-caps text-aqua">Coverage</p>
            <p className="mt-5 leading-7 text-paper/64">
              {insuranceAccepted.summary}
            </p>
            <p className="mt-3 text-sm leading-6 text-paper/52">
              Including {insuranceAccepted.featured.join(" and ")}, plus other
              major New Jersey plans and self pay.
            </p>
            <Link
              className="mt-4 inline-block text-base font-semibold text-aqua transition-colors hover:text-paper focus-visible:rounded-[8px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              href="/contact"
            >
              Ask a question →
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/12 pt-7 sm:flex-row sm:items-center">
          <p className="text-sm text-paper/48">
            © {new Date().getFullYear()} Premier NP Care · Telehealth · New
            Jersey
          </p>
          <p className="text-sm text-paper/48">For emergencies, call 911</p>
        </div>
      </Container>
    </footer>
  );
}
