import type { Metadata } from "next";
import { ArrowRight, CalendarCheck, ShieldCheck, Users } from "lucide-react";
import { ArchPortrait } from "@/components/arch-portrait";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { Section } from "@/components/section";
import { bookingUrl } from "@/lib/config";
import {
  missionStatement,
  patientFit,
  providerBio,
  providerStandards,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Provider",
  description:
    "Meet Virginie Chavannes, APN, and learn how Premier NP Care approaches provider-led telehealth visits.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-porcelain">
        <div className="ocean-field absolute inset-0" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="hero-glow hero-glow-a pointer-events-none absolute -left-24 top-0 h-[380px] w-[380px] rounded-full bg-cyan/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="hero-glow hero-glow-c pointer-events-none absolute right-1/3 bottom-0 h-40 w-40 rounded-full bg-gold/15 blur-2xl"
        />
        <Container className="relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1fr_0.62fr] lg:gap-16">
          <MotionReveal>
            <p className="label-caps text-cobalt">Meet your provider</p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.02] text-ink md:text-6xl">
              Care feels different when the clinician is{" "}
              <em className="font-normal italic text-cobalt">
                visible from the start.
              </em>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-ink/72">
              Premier NP Care is built around direct access to Virginie
              Chavannes, APN — practical telehealth guidance, and a visit
              experience that explains what happens next.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                className="transition-transform duration-300 hover:-translate-y-0.5"
                href={bookingUrl}
                id="hero-book"
                variant="cobalt"
              >
                <CalendarCheck aria-hidden="true" size={20} />
                Book an Appointment
              </ButtonLink>
              <ButtonLink
                className="transition-transform duration-300 hover:-translate-y-0.5"
                href="/services"
                variant="secondary"
              >
                View Services
                <ArrowRight aria-hidden="true" size={19} />
              </ButtonLink>
            </div>
            <p className="mt-8 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 border-t border-ink/10 pt-6 text-sm text-ink/56">
              <span>Board-certified</span>
              <span aria-hidden="true" className="text-gold">
                ·
              </span>
              <span>Evidence-based care</span>
              <span aria-hidden="true" className="text-gold">
                ·
              </span>
              <span>Licensed in New Jersey</span>
            </p>
          </MotionReveal>

          <ArchPortrait
            alt="Portrait of Virginie Chavannes, APN."
            credential="Nurse Practitioner · Telehealth · New Jersey"
            name="Virginie Chavannes, APN"
            sizes="(min-width: 1024px) 32vw, 90vw"
            src="/images/virginie-chavannes.jpeg"
            trailing={
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-2 text-sm font-semibold text-harbor">
                <ShieldCheck aria-hidden="true" size={15} />
                Board-Certified
              </span>
            }
          />
        </Container>
      </section>

      <Section className="bg-paper py-24">
        <Container>
          <MotionReveal>
            <p className="label-caps text-cobalt">Her story</p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
              A practice shaped around listening first.
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="relative mt-10 grid gap-6 lg:grid-cols-[auto_1fr]">
              <span
                aria-hidden="true"
                className="hidden font-display text-8xl leading-none text-cyan/15 lg:block"
              >
                “
              </span>
              <div className="grid gap-6">
                {providerBio.map((paragraph) => (
                  <p
                    className="max-w-3xl text-lg leading-8 text-ink/74"
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="relative overflow-hidden bg-deep-navy py-24 text-paper">
        <div className="care-current-lines absolute inset-0 opacity-10" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full bg-cyan/14 blur-3xl"
        />
        <Container className="relative grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <MotionReveal>
            <p className="label-caps text-aqua">Visit standards</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-tight md:text-5xl">
              What the visit should feel like for patients.
            </h2>
          </MotionReveal>

          <div className="border-y border-white/14">
            {providerStandards.map((row, index) => (
              <MotionReveal delay={index * 0.05} key={row.title}>
                <article className="group grid gap-4 border-b border-white/14 py-6 transition-colors duration-300 last:border-b-0 hover:bg-white/4 md:-mx-4 md:grid-cols-[84px_1fr] md:px-4">
                  <span className="font-display text-3xl leading-none text-aqua/60 transition-all duration-300 group-hover:translate-x-1 group-hover:text-aqua">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-paper">
                      {row.title}
                    </h3>
                    <p className="mt-2 max-w-2xl leading-7 text-paper/68">
                      {row.body}
                    </p>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden bg-paper py-24">
        <div className="ocean-field absolute inset-0 opacity-70" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="hero-glow hero-glow-b pointer-events-none absolute -left-16 top-1/4 h-72 w-72 rounded-full bg-pale-mist/90 blur-3xl"
        />
        <Container className="relative grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <MotionReveal>
            <p className="label-caps text-cobalt">Mission statement</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
              Compassion, respect, and clinical excellence.
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <blockquote className="relative overflow-hidden rounded-[28px] border border-cyan/25 bg-paper/90 p-7 shadow-[0_22px_70px_rgba(26,53,87,0.07)] md:p-8">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-6 right-6 font-display text-[9rem] leading-none text-cyan/10"
              >
                “
              </span>
              <div className="relative h-1.5 w-20 rounded-full bg-[linear-gradient(90deg,#12aec4,#58c7d6,#c9eef3)]" />
              <p className="relative mt-6 max-w-4xl font-display text-2xl font-medium leading-9 text-ink md:text-[1.7rem] md:leading-10">
                {missionStatement}
              </p>
              <footer className="relative mt-6 text-sm font-semibold text-harbor">
                Virginie Chavannes, APN
              </footer>
            </blockquote>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-mist py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <MotionReveal>
            <div className="flex items-center gap-3 text-cobalt">
              <Users aria-hidden="true" size={22} />
              <p className="label-caps">Patient fit</p>
            </div>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
              Designed for patients who want a direct, unhurried relationship.
            </h2>
          </MotionReveal>
          <div className="grid gap-4">
            {patientFit.map((item, index) => (
              <MotionReveal delay={index * 0.06} key={item}>
                <div className="rounded-[20px] border border-line bg-paper p-5 leading-7 text-ink/74">
                  {item}
                </div>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
