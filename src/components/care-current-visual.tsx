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
    <div className="relative overflow-hidden rounded-[30px] border border-white/70 bg-paper/84 p-5 shadow-[0_26px_80px_rgba(7,28,42,0.12)]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(201,238,243,0.7),rgba(255,255,255,0.74)_52%,rgba(18,174,196,0.12))]" />
      <div className="care-current-lines absolute inset-0 opacity-45" />
      <div className="relative rounded-[24px] border border-line bg-white/78 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="label-caps text-cobalt">Care current</p>
            <p className="mt-2 max-w-[320px] font-display text-3xl font-medium leading-tight text-ink">
              A calmer path into provider-led care.
            </p>
          </div>
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-deep-navy text-paper">
            <ShieldCheck aria-hidden="true" size={24} />
          </div>
        </div>

        <div className="mt-10 rounded-[20px] border border-line bg-paper/72 p-3">
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

        <div className="mt-4 rounded-[18px] border border-cyan/18 bg-mist/80 px-4 py-3">
          <p className="text-sm leading-6 text-ink/70">
            Scheduling, care visits, and patient records stay in the practice
            platform. This public site only explains the path.
          </p>
        </div>
      </div>
    </div>
  );
}
