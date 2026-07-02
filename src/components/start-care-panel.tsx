import Image from "next/image";
import {
  ArrowRight,
  CalendarCheck,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/button";
import { bookingUrl } from "@/lib/config";

const careDetails = [
  {
    label: "Provider",
    value: "Virginie Chavannes",
    icon: UserRoundCheck,
  },
  {
    label: "Care model",
    value: "Provider-led telehealth visits",
    icon: CalendarCheck,
  },
  {
    label: "Safety",
    value: "Clear scope before patient data is collected",
    icon: ShieldCheck,
  },
];

export function StartCarePanel() {
  return (
    <aside className="relative overflow-hidden rounded-[34px] border border-white/70 bg-paper/86 p-6 shadow-[0_30px_90px_rgba(7,28,42,0.13)]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(201,238,243,0.62),rgba(255,255,255,0.78)_48%,rgba(232,161,132,0.16))]" />
      <div className="care-current-lines absolute inset-0 opacity-35" />
      <div className="relative overflow-hidden rounded-[28px] border border-line bg-white/82">
        <div className="relative h-44 overflow-hidden md:h-52">
          <Image
            alt="A clinician greeting a patient warmly during a telehealth visit."
            className="absolute inset-0 h-full w-full object-cover object-[center_22%]"
            fill
            priority
            sizes="(min-width: 1024px) 620px, 92vw"
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1400&q=80"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,28,42,0.06),rgba(7,28,42,0.34)),linear-gradient(135deg,rgba(7,4,95,0.22),rgba(18,174,196,0.05)_55%,transparent)]"
          />
          <span className="label-caps absolute left-5 top-5 rounded-full border border-white/25 bg-paper/88 px-3 py-2 text-cobalt shadow-[0_16px_36px_rgba(7,28,42,0.16)] backdrop-blur">
            Telehealth visits
          </span>
        </div>
        <div className="h-2 bg-[linear-gradient(90deg,#07045F,#12AEC4,#E8A184)]" />
        <div className="p-7 md:p-8">
          <p className="label-caps text-cobalt">Practice brief</p>
          <h2 className="mt-3 max-w-md font-display text-4xl font-medium leading-tight text-ink md:text-5xl">
            Start with a clear path.
          </h2>
          <p className="mt-4 max-w-md text-lg leading-8 text-ink/70">
            The public site explains scope, safety boundaries, and the booking
            path before patient information is collected.
          </p>

          <div className="mt-7 divide-y divide-line border-y border-line">
            {careDetails.map((item) => {
              const Icon = item.icon;
              return (
                <div className="grid gap-3 py-4 sm:grid-cols-[140px_1fr]" key={item.label}>
                  <div className="flex items-center gap-3 text-cobalt">
                    <Icon aria-hidden="true" size={20} />
                    <p className="label-caps">{item.label}</p>
                  </div>
                  <p className="font-semibold leading-7 text-ink/76">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={bookingUrl} variant="secondary">
              <CalendarCheck aria-hidden="true" size={20} />
              Book
            </ButtonLink>
            <ButtonLink href="/how-it-works" variant="quiet">
              How visits work
              <ArrowRight aria-hidden="true" size={19} />
            </ButtonLink>
          </div>
        </div>
      </div>
    </aside>
  );
}
