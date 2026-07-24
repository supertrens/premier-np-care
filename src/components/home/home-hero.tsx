import { ArrowRight, CalendarCheck } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { HeroPortrait } from "@/components/home/hero-portrait";
import { HeroEntrance, HeroItem } from "@/components/motion-reveal";
import { bookingUrl } from "@/lib/config";
import { insuranceAccepted } from "@/lib/content";

export function HomeHero() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-porcelain">
        <div className="ocean-field absolute inset-0" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="hero-glow hero-glow-a pointer-events-none absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-cyan/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="hero-glow hero-glow-b pointer-events-none absolute -right-16 bottom-0 h-[360px] w-[360px] rounded-full bg-pale-mist/90 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="hero-glow hero-glow-c pointer-events-none absolute left-1/3 top-1/4 h-40 w-40 rounded-full bg-gold/15 blur-2xl"
        />

        <Container className="relative grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
          <HeroEntrance className="max-w-xl">
            <HeroItem>
              <p className="label-caps text-harbor">
                Nurse Practitioner-led telehealth · New Jersey
              </p>
              <span
                aria-hidden="true"
                className="hero-accent-line mt-4 block h-1 w-16 rounded-full bg-[linear-gradient(90deg,#12aec4,#58c7d6,#c9a84c)]"
              />
            </HeroItem>

            <HeroItem>
              <h1 className="mt-5 font-display text-4xl font-medium leading-[1.05] text-ink sm:text-5xl md:text-[3.5rem] md:leading-[1.02]">
                Care you can understand, from a clinician{" "}
                <em className="hero-emphasis font-normal italic text-harbor">
                  you know.
                </em>
              </h1>
            </HeroItem>

            <HeroItem>
              <p className="mt-6 max-w-lg text-lg font-medium leading-8 text-ink/74">
                Personal telehealth with Virginie Chavannes, APN — calm, direct,
                and clearly explained before you book.
              </p>
            </HeroItem>

            <HeroItem>
              <p className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-paper/80 px-4 py-2 text-sm font-semibold text-ink/78">
                <span
                  aria-hidden="true"
                  className="pulse-dot relative flex h-2.5 w-2.5"
                >
                  <span className="absolute inline-flex h-full w-full rounded-full bg-harbor/60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-harbor" />
                </span>
                Accepting new patients
              </p>
            </HeroItem>

            <HeroItem>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink
                  className="hero-cta-primary transition-transform duration-300 hover:-translate-y-0.5"
                  href={bookingUrl}
                  id="hero-book"
                  variant="cobalt"
                >
                  <CalendarCheck aria-hidden="true" size={20} />
                  Book an Appointment
                </ButtonLink>
                <ButtonLink
                  className="group/cta transition-transform duration-300 hover:-translate-y-0.5"
                  href="/about"
                  variant="secondary"
                >
                  Meet the Provider
                  <ArrowRight
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover/cta:translate-x-1"
                    size={19}
                  />
                </ButtonLink>
              </div>
            </HeroItem>

            <HeroItem>
              <p className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm font-medium text-ink/62">
                <span>Provider-led visits</span>
                <span aria-hidden="true" className="text-gold">
                  ·
                </span>
                <span>Honest telehealth boundaries</span>
                <span aria-hidden="true" className="text-gold">
                  ·
                </span>
                <span>Secure platform</span>
              </p>
            </HeroItem>
          </HeroEntrance>

          <HeroPortrait />
        </Container>
      </section>

      <div className="border-b border-line bg-paper/90">
        <Container className="grid items-center gap-4 py-5 md:grid-cols-[auto_1fr] md:gap-8">
          <p className="shrink-0 text-sm font-semibold leading-6 text-ink/72">
            {insuranceAccepted.summary}
          </p>
          <div className="insurance-marquee relative overflow-hidden">
            <ul className="insurance-marquee-track flex w-max items-center gap-2">
              {[0, 1].map((copy) =>
                insuranceAccepted.examples.map((plan) => {
                  const featured = insuranceAccepted.featured.includes(plan);
                  return (
                    <li aria-hidden={copy === 1 || undefined} key={`${plan}-${copy}`}>
                      <span
                        className={
                          featured
                            ? "inline-flex whitespace-nowrap rounded-full border border-cyan/30 bg-mist px-3 py-1.5 text-sm font-semibold text-harbor"
                            : "inline-flex whitespace-nowrap rounded-full border border-line bg-porcelain px-3 py-1.5 text-sm text-ink/62"
                        }
                      >
                        {plan}
                      </span>
                    </li>
                  );
                }),
              )}
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
}
