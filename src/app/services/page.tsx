import type { Metadata } from "next";
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
              Premier NP Care provides prevention, sick visits, chronic disease
              support, and mental health services.
            </p>
            <p className="mt-4 border-t border-line pt-4 text-sm leading-6 text-ink/66">
              {insuranceAccepted.summary}
            </p>
          </div>
        }
        eyebrow="Services"
        title="Care options that feel simple to understand."
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
                  <article className="overflow-hidden rounded-[28px] border border-line bg-paper shadow-[0_22px_70px_rgba(26,53,87,0.06)]">
                    <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                      <div className="border-b border-line bg-[linear-gradient(145deg,rgba(201,238,243,0.62),rgba(247,252,253,0.95)_48%,#ffffff)] p-6 md:p-8 lg:border-b-0 lg:border-r">
                        <div className="flex items-center gap-3">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan/25 bg-paper text-cobalt">
                            <Icon aria-hidden="true" size={22} />
                          </span>
                          <p className="label-caps text-harbor">
                            {service.eyebrow}
                          </p>
                        </div>
                        <h3 className="mt-5 font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
                          {service.title}
                        </h3>
                        <p className="mt-4 max-w-xl leading-7 text-ink/70">
                          {service.description}
                        </p>
                        <p className="mt-6 text-sm leading-6 text-ink/58">
                          <span className="font-semibold text-ink/72">
                            Helpful for:{" "}
                          </span>
                          {service.fit}
                        </p>
                      </div>

                      <div className="p-6 md:p-8">
                        <p className="label-caps text-cobalt">Includes</p>
                        <ul className="mt-5 grid gap-3 sm:grid-cols-1">
                          {service.items.map((item) => (
                            <li
                              className="flex gap-3 rounded-[16px] border border-line/80 bg-porcelain px-4 py-3"
                              key={item}
                            >
                              <CheckCircle2
                                aria-hidden="true"
                                className="mt-0.5 shrink-0 text-harbor"
                                size={18}
                              />
                              <span className="leading-7 text-ink/78">
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

      <Section className="bg-paper py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <MotionReveal>
            <div className="flex items-center gap-3 text-warn">
              <TriangleAlert aria-hidden="true" size={24} />
              <p className="label-caps">When another setting is best</p>
            </div>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
              Clear guidance is part of feeling cared for.
            </h2>
          </MotionReveal>

          <div className="grid gap-4 rounded-[28px] border border-line bg-porcelain p-6 shadow-[0_22px_70px_rgba(7,28,42,0.06)]">
            {safetyBoundaries.slice(0, 1).map((item) => {
              const Icon = item.icon;
              return (
                <MotionReveal key={item.title}>
                  <article className="grid gap-4 md:grid-cols-[240px_1fr]">
                    <div className="flex items-center gap-3 text-warn">
                      <Icon aria-hidden="true" size={21} />
                      <p className="label-caps">{item.title}</p>
                    </div>
                    <p className="leading-7 text-ink/72">{item.body}</p>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
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
          <ButtonLink href="/contact" variant="mist">
            Contact the Practice
            <ArrowRight aria-hidden="true" size={19} />
          </ButtonLink>
        </Container>
      </Section>
    </>
  );
}
