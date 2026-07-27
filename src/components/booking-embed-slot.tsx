"use client";

import { useEffect, useState } from "react";
import {
  CalendarDays,
  Clock,
  ExternalLink,
  ShieldCheck,
  X,
} from "lucide-react";
import { Button, ButtonLink } from "@/components/button";
import { bookingUrl } from "@/lib/config";

const bookingDetails = [
  {
    icon: Clock,
    title: "Consultation",
    body: "Choose the visit type shown in Tebra",
  },
  {
    icon: CalendarDays,
    title: "Online booking",
    body: "Choose an available time",
  },
  {
    icon: ShieldCheck,
    title: "Secure path",
    body: "Details stay in the scheduling flow",
  },
];

export function BookingEmbedSlot() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <section
        className="relative overflow-hidden rounded-[22px] border border-deep-navy bg-white p-6 shadow-[0_24px_70px_rgba(26,53,87,0.08)] md:p-8"
        id="booking-calendar"
      >
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-mist"
        />
        <div className="relative">
          <div className="flex items-center gap-3 text-cobalt">
            <CalendarDays aria-hidden="true" size={25} />
            <p className="label-caps">Online scheduling</p>
          </div>

          <h2 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-tight text-deep-navy md:text-5xl">
            Book through the Premier NP Care calendar.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/68">
            Choose an appointment time in the practice scheduling system.
            Patient details and visit information stay inside Tebra.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {bookingDetails.map(({ body, icon: Icon, title }) => (
              <div
                className="rounded-[14px] border border-line bg-porcelain p-4"
                key={title}
              >
                <Icon aria-hidden="true" className="text-cobalt" size={20} />
                <p className="mt-3 text-sm font-semibold text-ink">{title}</p>
                <p className="mt-1 text-sm leading-6 text-ink/58">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button onClick={() => setIsOpen(true)} variant="cobalt">
              Open Appointment Calendar
              <CalendarDays aria-hidden="true" size={18} />
            </Button>
            <ButtonLink href={bookingUrl} variant="secondary">
              Open in New Tab
              <ExternalLink aria-hidden="true" size={17} />
            </ButtonLink>
          </div>
        </div>
      </section>

      {isOpen ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-50 bg-deep-navy/70 p-3 backdrop-blur-sm md:p-6"
          onClick={() => setIsOpen(false)}
          role="dialog"
        >
          <div
            className="mx-auto flex h-full max-w-6xl flex-col overflow-hidden rounded-[18px] bg-paper shadow-[0_30px_100px_rgba(7,28,42,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="flex items-center justify-between gap-4 border-b border-line px-4 py-3 md:px-5"
            >
              <div>
                <p className="label-caps text-cobalt">Premier NP Care</p>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Appointment Calendar
                </h2>
              </div>
              <button
                aria-label="Close appointment calendar"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-gold hover:bg-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                onClick={() => setIsOpen(false)}
                type="button"
              >
                <X aria-hidden="true" size={20} />
              </button>
            </div>
            <iframe
              className="min-h-0 flex-1 bg-white"
              loading="lazy"
              src={bookingUrl}
              title="Premier NP Care appointment calendar"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
