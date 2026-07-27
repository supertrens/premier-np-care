import { CalendarDays, Clock, ExternalLink, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { bookingUrl } from "@/lib/config";

const bookingDetails = [
  {
    icon: Clock,
    title: "20 minutes",
    body: "Focused consultation",
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
  return (
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
          Book your 20-minute consultation.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink/68">
          Choose a time through the Premier NP Care calendar. You will continue
          in Cal.com to confirm the appointment details securely.
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
          <ButtonLink href={bookingUrl} variant="cobalt">
            Open Appointment Calendar
            <ExternalLink aria-hidden="true" size={17} />
          </ButtonLink>
          <p className="text-sm leading-6 text-ink/56">
            Opens in a new tab so the calendar has room to breathe.
          </p>
        </div>
      </div>
    </section>
  );
}
