import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
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

export default function ContactPage() {
  return (
    <>
      <PageIntro
        aside={
          <div className="rounded-[8px] border border-ink/12 bg-mist p-5">
            <p className="label-caps text-fern">Important</p>
            <p className="mt-3 leading-7 text-ink/76">
              Do not use this form for urgent needs, emergencies, or private
              health details.
            </p>
          </div>
        }
        eyebrow="Contact"
        title="A clear way to reach the practice."
      >
        <p>
          Send a general question or use the booking section. Scheduling and
          patient data remain in the practice’s established systems.
        </p>
      </PageIntro>

      <Section className="bg-mist py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <MotionReveal>
            <div className="rounded-[8px] border border-ink/12 bg-paper p-6 md:p-8">
              <p className="label-caps text-fern">Message</p>
              <h2 className="mt-4 font-display text-4xl font-light text-ink">
                General inquiries
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-ink/72">
                The form forwards through a Next.js route and Resend when
                environment variables are configured.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </MotionReveal>

          <div className="grid gap-6">
            <MotionReveal delay={0.1}>
              <BookingEmbedSlot />
            </MotionReveal>
            <MotionReveal delay={0.16}>
              <div className="rounded-[8px] border border-ink/12 bg-paper p-6 md:p-8">
                <h2 className="font-display text-4xl font-light text-ink">
                  Practice info
                </h2>
                <div className="mt-7 grid gap-5 leading-7 text-ink/78">
                  <p className="flex gap-3">
                    <Phone
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-fern"
                      size={19}
                    />
                    [PLACEHOLDER] Phone number
                  </p>
                  <p className="flex gap-3">
                    <Mail
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-fern"
                      size={19}
                    />
                    [PLACEHOLDER] Practice email
                  </p>
                  <p className="flex gap-3">
                    <MapPin
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-fern"
                      size={19}
                    />
                    [PLACEHOLDER] Service area or address note
                  </p>
                </div>
              </div>
            </MotionReveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
