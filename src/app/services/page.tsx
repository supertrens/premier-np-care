import type { Metadata } from "next";
import { ArrowRight, TriangleAlert } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { clinicalScopeMatrix, safetyBoundaries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore placeholder service areas, clinical scope, telehealth boundaries, and next steps for Premier NP Care.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        aside={
          <div className="border-y border-ink/12 py-5">
            <p className="label-caps text-fern">Scope note</p>
            <p className="mt-3 leading-7 text-ink/74">
              [PLACEHOLDER] Final clinical scope, exclusions, eligibility, and
              service-area language should be confirmed before launch.
            </p>
          </div>
        }
        eyebrow="Services"
        title="Clinical scope, explained before patients book."
      >
        <p>
          Premier NP Care should make it easy to understand what can be handled
          through telehealth and when another care setting is safer.
        </p>
      </PageIntro>

      <Section className="py-20">
        <Container>
          <div className="border-y border-ink/12">
            {clinicalScopeMatrix.map((service) => {
              const Icon = service.icon;
              return (
                <MotionReveal key={service.area}>
                  <article className="grid gap-7 border-b border-ink/12 py-9 last:border-b-0 lg:grid-cols-[0.74fr_1.26fr]">
                    <div>
                      <div className="flex items-center gap-3 text-fern">
                        <Icon aria-hidden="true" size={22} />
                        <p className="label-caps">Service area</p>
                      </div>
                      <h2 className="mt-4 max-w-md font-display text-4xl font-medium leading-tight text-ink">
                        {service.area}
                      </h2>
                    </div>

                    <div className="grid gap-px bg-ink/12 md:grid-cols-3">
                      <div className="bg-paper p-5">
                        <p className="label-caps text-fern">May fit</p>
                        <p className="mt-3 text-sm leading-6 text-ink/72">
                          {service.appropriate}
                        </p>
                      </div>
                      <div className="bg-paper p-5">
                        <p className="label-caps text-clay">May require</p>
                        <p className="mt-3 text-sm leading-6 text-ink/72">
                          {service.mayRequire}
                        </p>
                      </div>
                      <div className="bg-paper p-5">
                        <p className="label-caps text-ink/54">Next step</p>
                        <p className="mt-3 text-sm leading-6 text-ink/72">
                          {service.nextStep}
                        </p>
                      </div>
                    </div>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-mist py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <MotionReveal>
            <div className="flex items-center gap-3 text-clay">
              <TriangleAlert aria-hidden="true" size={24} />
              <p className="label-caps">Safety boundaries</p>
            </div>
            <h2 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[1.04] text-ink">
              Telehealth is useful, but it is not every kind of care.
            </h2>
          </MotionReveal>

          <div className="border-y border-ink/12">
            {safetyBoundaries.map((item) => {
              const Icon = item.icon;
              return (
                <MotionReveal key={item.title}>
                  <div className="grid gap-4 border-b border-ink/12 py-7 last:border-b-0 md:grid-cols-[230px_1fr]">
                    <div className="flex items-center gap-3 text-clay">
                      <Icon aria-hidden="true" size={21} />
                      <p className="label-caps">{item.title}</p>
                    </div>
                    <p className="leading-7 text-ink/72">{item.body}</p>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-ink text-paper">
        <Container className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-display text-4xl font-medium">
              Not sure where your concern fits?
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-paper/78">
              Send a general question or book a visit through the scheduling
              link. Emergencies should always use emergency services.
            </p>
          </div>
          <ButtonLink href="/contact">
            Contact the Practice
            <ArrowRight aria-hidden="true" size={19} />
          </ButtonLink>
        </Container>
      </Section>
    </>
  );
}
