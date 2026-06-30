import type { Metadata } from "next";
import { Mail, MapPin, Phone, TriangleAlert } from "lucide-react";
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
          <div className="border-y border-ink/12 py-5">
            <div className="flex items-center gap-3 text-clay">
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
        title="Reach the practice without turning this site into a portal."
      >
        <p>
          Send a general question or use the booking section. Scheduling and
          patient data remain in the practice&apos;s established systems.
        </p>
      </PageIntro>

      <Section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionReveal>
            <div>
              <p className="label-caps text-fern">Booking</p>
              <h2 className="mt-5 max-w-lg font-display text-5xl font-medium leading-[1.04] text-ink">
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

      <Section className="bg-mist py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionReveal>
            <div>
              <p className="label-caps text-fern">General inquiries</p>
              <h2 className="mt-5 max-w-lg font-display text-5xl font-medium leading-[1.04] text-ink">
                A contact form for non-urgent questions.
              </h2>
              <p className="mt-5 max-w-lg leading-8 text-ink/70">
                The form forwards through the configured email provider. It does
                not store patient records or replace the practice platform.
              </p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="border-y border-ink/12 bg-paper px-5 py-7 md:px-7">
              <ContactForm />
            </div>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <MotionReveal>
            <p className="label-caps text-fern">Practice info</p>
            <h2 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[1.04] text-ink">
              Contact details stay clearly separated from patient data.
            </h2>
          </MotionReveal>

          <div className="border-y border-ink/12">
            {contactRows.map((row) => {
              const Icon = row.icon;
              return (
                <MotionReveal key={row.label}>
                  <div className="grid gap-4 border-b border-ink/12 py-7 last:border-b-0 md:grid-cols-[220px_1fr]">
                    <div className="flex items-center gap-3 text-fern">
                      <Icon aria-hidden="true" size={21} />
                      <p className="label-caps">{row.label}</p>
                    </div>
                    <p className="text-xl leading-8 text-ink/76">
                      {row.value}
                    </p>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
