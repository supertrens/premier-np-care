import { CalendarCheck, Phone } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { bookingUrl, isBookingPlaceholder } from "@/lib/config";

export function BookingEmbedSlot() {
  return (
    <section
      className="overflow-hidden rounded-[28px] border border-line bg-paper shadow-[0_24px_80px_rgba(7,28,42,0.08)]"
      id="booking-placeholder"
    >
      <div className="h-2 bg-[linear-gradient(90deg,#07045F,#12AEC4,#C9EEF3)]" />
      <div className="p-6 md:p-7">
        <p className="label-caps text-cobalt">Booking</p>
        <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-ink">
          Book an appointment
        </h2>
        <p className="mt-4 leading-7 text-ink/74">
          Online scheduling coming soon. Call or message us to book your
          appointment.
        </p>
        {isBookingPlaceholder ? (
          <div className="mt-5 rounded-[18px] border border-cyan/20 bg-mist p-4">
            <div className="flex items-center gap-3 text-cobalt">
              <Phone aria-hidden="true" size={20} />
              <p className="label-caps">Call to book</p>
            </div>
            <p className="mt-2 font-display text-3xl font-medium text-ink">
              (555) 123-4567
            </p>
          </div>
        ) : null}
        <ButtonLink className="mt-6" href={bookingUrl} variant="cobalt">
          <CalendarCheck aria-hidden="true" size={19} />
          Book an Appointment
        </ButtonLink>
      </div>
    </section>
  );
}
