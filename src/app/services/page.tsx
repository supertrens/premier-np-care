import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { insuranceAccepted, safetyBoundaries, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore preventive care, common illness visits, chronic disease management, and mental health services at Premier NP Care.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        aside={
          <div className="rounded-[22px] border border-line bg-paper/82 p-5 shadow-[0_16px_50px_rgba(7,28,42,0.06)]">
            <div className="flex items-center gap-3 text-cobalt">
              <ShieldCheck aria-hidden="true" size={22} />
              <p className="label-caps">Patients 14 and up</p>
            </div>
            <p className="mt-3 leading-7 text-ink/74">
              Every category below states its own scope, so you always know
              when a concern fits telehealth and when in-person care is safer.
            </p>
            <p className="mt-4 border-t border-line pt-4 text-sm leading-6 text-ink/66">
              {insuranceAccepted.summary}
            </p>
          </div>
        }
        eyebrow="Services"
        title={
          <>
            Care options that feel{" "}
            <em className="font-normal italic text-cobalt">
              simple to understand.
            </em>
          </>
        }
      >
        <p>
          Premier NP Care provides patient-centered primary and preventive care
          for everyday health needs, common illnesses, and ongoing conditions.
        </p>
      </PageIntro>

      <Section className="bg-mist py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
            <MotionReveal>
              <p className="label-caps text-cobalt">Services provided</p>
              <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
                Four clear care areas, with the details patients ask for.
              </h2>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <p className="max-w-2xl border-y border-gold/35 py-6 text-lg leading-8 text-ink/70">
                Each category lists what is included so patients can find the
                right starting point without guessing.
              </p>
            </MotionReveal>
          </div>

          <div className="mt-12 grid gap-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <MotionReveal delay={index * 0.04} key={service.title}>
                  <article className="grid overflow-hidden rounded-[28px] border border-line bg-paper shadow-[0_22px_70px_rgba(26,53,87,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_28px_84px_rgba(26,53,87,0.1)] lg:grid-cols-[0.45fr_0.55fr]">
                    <div className="relative min-h-[260px] overflow-hidden border-b border-line bg-mist lg:min-h-full lg:border-b-0 lg:border-r">
                      <Image
                        alt={service.imageAlt}
                        className="object-cover"
                        fill
                        sizes="(min-width: 1024px) 38vw, 92vw"
                        src={service.image}
                        style={{ objectPosition: service.imagePosition }}
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_48%,rgba(26,53,87,0.12))]"
                      />
                      <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/70 bg-white/82 px-3 py-2 text-sm font-semibold text-ink shadow-[0_14px_38px_rgba(26,53,87,0.1)] backdrop-blur">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-deep-navy text-paper">
                          <Icon aria-hidden="true" size={16} />
                        </span>
                        Service category 0{index + 1}
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan/25 bg-mist text-cobalt">
                          <Icon aria-hidden="true" size={22} />
                        </span>
                        <div>
                          <p className="label-caps text-harbor">
                            {service.eyebrow}
                          </p>
                          <h3 className="font-display text-2xl font-medium leading-tight text-ink md:text-3xl">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                      <p className="mt-4 max-w-2xl leading-7 text-ink/70">
                        {service.description}
                      </p>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-[14px] border border-cyan/25 bg-mist/60 p-3.5">
                          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-harbor">
                            <CheckCircle2 aria-hidden="true" size={14} />
                            Helpful for
                          </p>
                          <p className="mt-1.5 text-sm leading-6 text-ink/66">
                            {service.fit}
                          </p>
                        </div>
                        <div className="rounded-[14px] border border-warn/25 bg-warn/6 p-3.5">
                          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-warn">
                            <TriangleAlert aria-hidden="true" size={14} />
                            Consider in-person
                          </p>
                          <p className="mt-1.5 text-sm leading-6 text-ink/66">
                            {service.boundary}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 border-t border-line pt-5">
                        <p className="label-caps text-cobalt">Includes</p>
                        <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                          {service.items.map((item) => (
                            <li
                              className="flex gap-2.5 rounded-[12px] border border-line/80 bg-porcelain px-3.5 py-2.5"
                              key={item}
                            >
                              <CheckCircle2
                                aria-hidden="true"
                                className="mt-0.5 shrink-0 text-harbor"
                                size={16}
                              />
                              <span className="text-sm leading-6 text-ink/76">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-line bg-porcelain py-16">
        <Container>
          <MotionReveal>
            <p className="label-caps text-warn">Know the limits</p>
            <div className="mt-8 grid gap-10 lg:grid-cols-3 lg:gap-8">
              {safetyBoundaries.map((item) => (
                <div className="border-t border-ink/12 pt-5" key={item.title}>
                  <h3 className="text-base font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink/62">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-deep-navy text-paper">
        <Container className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-display text-4xl font-medium">
              Not sure where your concern fits?
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-paper/76">
              Book a visit or send a general question. If symptoms feel urgent,
              choose urgent or emergency care right away.
            </p>
          </div>
          <ButtonLink
            className="transition-transform duration-300 hover:-translate-y-0.5"
            href="/contact"
            variant="mist"
          >
            Contact the Practice
            <ArrowRight aria-hidden="true" size={19} />
          </ButtonLink>
        </Container>
      </Section>
    </>
  );
}
