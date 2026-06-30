import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { BookingEmbedSlot } from "@/components/booking-embed-slot";
import { Card } from "@/components/card";
import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Premier NP Care or use the placeholder booking section for appointment scheduling.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="pt-12">
        <Container>
          <MotionReveal>
            <h1 className="font-display text-5xl font-semibold leading-[1.08] text-ink">
              Contact
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-8 text-ink/78">
              Send a general question or use the booking section. Do not use
              this site for urgent needs or private health details.
            </p>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-mist">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <MotionReveal>
            <Card className="bg-paper">
              <SectionHeading
                description="The form forwards through a Next.js route and Resend when environment variables are configured."
                eyebrow="Message"
                title="General inquiries"
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </Card>
          </MotionReveal>

          <div className="grid gap-5">
            <MotionReveal delay={0.1}>
              <BookingEmbedSlot />
            </MotionReveal>
            <MotionReveal delay={0.16}>
              <Card>
                <h2 className="font-display text-3xl font-semibold text-ink">
                  Practice info
                </h2>
                <div className="mt-6 grid gap-4 leading-7 text-ink/78">
                  <p className="flex gap-3">
                    <Phone
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-clay"
                      size={19}
                    />
                    [PLACEHOLDER] Phone number
                  </p>
                  <p className="flex gap-3">
                    <Mail
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-clay"
                      size={19}
                    />
                    [PLACEHOLDER] Practice email
                  </p>
                  <p className="flex gap-3">
                    <MapPin
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-clay"
                      size={19}
                    />
                    [PLACEHOLDER] Service area or address note
                  </p>
                </div>
              </Card>
            </MotionReveal>
          </div>
        </Container>
      </Section>
    </>
  );
}

