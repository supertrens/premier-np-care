import { Activity, CalendarCheck, ShieldCheck, UserRoundCheck } from "lucide-react";

const currentPoints = [
  {
    label: "Access",
    value: "Book",
    icon: CalendarCheck,
  },
  {
    label: "Clinician",
    value: "Consult",
    icon: UserRoundCheck,
  },
  {
    label: "Plan",
    value: "Follow up",
    icon: Activity,
  },
];

export function CareCurrentVisual() {
  return (
    <div className="relative overflow-hidden rounded-[34px] border border-white/70 bg-paper/82 p-6 shadow-[0_28px_90px_rgba(7,28,42,0.12)]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(201,238,243,0.64),rgba(255,255,255,0.78)_52%,rgba(18,174,196,0.1))]" />
      <div className="care-current-lines absolute inset-0 opacity-45" />
      <div className="relative rounded-[28px] border border-line bg-white/78 p-7 md:p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="label-caps text-cobalt">Care current</p>
            <p className="mt-2 max-w-[390px] font-display text-4xl font-medium leading-tight text-ink">
              A calmer path into provider-led care.
            </p>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-deep-navy text-paper">
            <ShieldCheck aria-hidden="true" size={25} />
          </div>
        </div>

        <div className="mt-10 rounded-[22px] border border-line bg-paper/72 p-3">
          <div className="grid gap-2 sm:grid-cols-3">
            {currentPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  className="flex items-center gap-3 rounded-[16px] px-3 py-3"
                  key={point.label}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan/30 bg-mist text-cobalt">
                    <Icon aria-hidden="true" size={19} />
                  </div>
                  <div>
                    <p className="label-caps text-harbor">{point.label}</p>
                    <p className="mt-0.5 font-semibold text-ink">
                      {point.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 rounded-[20px] border border-cyan/18 bg-mist/80 px-5 py-4">
          <p className="text-base leading-7 text-ink/70">
            Scheduling, care visits, and patient records stay in the practice
            platform. This public site only explains the path.
          </p>
        </div>
      </div>
    </div>
  );
}
