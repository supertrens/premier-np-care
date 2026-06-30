import type { Metadata } from "next";
import { Mail, MapPin, Phone, ShieldCheck, TriangleAlert } from "lucide-react";
import { BookingEmbedSlot } from "@/components/booking-embed-slot";
import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Premier NP Care or use the placeholder booking section for appointment scheduling.",
};

const contactRows = [
  {
    label: "[PLACEHOLDER] Phone",
    value: "[PLACEHOLDER] Phone number",
    icon: Phone,
  },
  {
    label: "[PLACEHOLDER] Email",
    value: "[PLACEHOLDER] Practice email",
    icon: Mail,
  },
  {
    label: "[PLACEHOLDER] Service area",
    value: "[PLACEHOLDER] Service area or address note",
    icon: MapPin,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        aside={
          <div className="rounded-[22px] border border-cyan/25 bg-paper/82 p-5 shadow-[0_16px_50px_rgba(7,28,42,0.06)]">
            <div className="flex items-center gap-3 text-warn">
              <TriangleAlert aria-hidden="true" size={22} />
              <p className="label-caps">Important</p>
            </div>
            <p className="mt-3 leading-7 text-ink/76">
              Do not use this form for urgent needs, emergencies, or private
              health details.
            </p>
          </div>
        }
        eyebrow="Contact"
        title="Booking and general questions, clearly separated."
      >
        <p>
          Use the booking section to start care or send a general question.
          Scheduling and patient data remain in the practice&apos;s established
          systems.
        </p>
      </PageIntro>

      <Section className="bg-paper py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <MotionReveal>
            <div>
              <p className="label-caps text-cobalt">Booking</p>
              <h2 className="mt-5 max-w-lg font-display text-5xl font-medium leading-[1.04] text-ink md:text-6xl">
                Start with the scheduling link.
              </h2>
              <p className="mt-5 max-w-lg leading-8 text-ink/70">
                The final tidycall or scheduling widget can be dropped into the
                booking slot without changing the rest of the page.
              </p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <BookingEmbedSlot />
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-mist py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <MotionReveal>
            <div>
              <p className="label-caps text-cobalt">General inquiries</p>
              <h2 className="mt-5 max-w-lg font-display text-5xl font-medium leading-[1.04] text-ink md:text-6xl">
                A contact form for non-urgent questions.
              </h2>
              <p className="mt-5 max-w-lg leading-8 text-ink/70">
                The form forwards through the configured email provider. It does
                not store patient records or replace the practice platform.
              </p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="rounded-[24px] border border-line bg-paper p-6 shadow-[0_22px_70px_rgba(7,28,42,0.08)]">
              <ContactForm />
            </div>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-paper py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <MotionReveal>
            <div className="flex items-center gap-3 text-cobalt">
              <ShieldCheck aria-hidden="true" size={24} />
              <p className="label-caps">Practice info</p>
            </div>
            <h2 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[1.04] text-ink md:text-6xl">
              Contact details stay separate from patient records.
            </h2>
          </MotionReveal>

          <div className="grid gap-4">
            {contactRows.map((row) => {
              const Icon = row.icon;
              return (
                <MotionReveal key={row.label}>
                  <article className="grid gap-4 rounded-[22px] border border-line bg-porcelain p-6 md:grid-cols-[220px_1fr]">
                    <div className="flex items-center gap-3 text-cobalt">
                      <Icon aria-hidden="true" size={21} />
                      <p className="label-caps">{row.label}</p>
                    </div>
                    <p className="text-xl leading-8 text-ink/76">
                      {row.value}
                    </p>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
