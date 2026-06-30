import type { LucideIcon } from "lucide-react";

interface ClinicalScopePanelProps {
  area: string;
  appropriate: string;
  mayRequire: string;
  nextStep: string;
  icon: LucideIcon;
}

export function ClinicalScopePanel({
  area,
  appropriate,
  mayRequire,
  nextStep,
  icon: Icon,
}: ClinicalScopePanelProps) {
  return (
    <article className="overflow-hidden rounded-[24px] border border-line bg-paper shadow-[0_22px_70px_rgba(7,28,42,0.08)]">
      <div className="grid gap-5 border-b border-line bg-porcelain p-6 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <div className="flex items-center gap-3 text-cobalt">
            <Icon aria-hidden="true" size={23} />
            <p className="label-caps">Service area</p>
          </div>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-medium leading-tight text-ink">
            {area}
          </h2>
        </div>
        <span className="rounded-full border border-cyan/30 bg-paper px-4 py-2 text-sm font-semibold text-cobalt">
          Telehealth scope
        </span>
      </div>
      <div className="grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
        <div className="p-6">
          <p className="label-caps text-cobalt">Appropriate for telehealth</p>
          <p className="mt-3 leading-7 text-ink/72">{appropriate}</p>
        </div>
        <div className="p-6">
          <p className="label-caps text-warn">May need in-person care</p>
          <p className="mt-3 leading-7 text-ink/72">{mayRequire}</p>
        </div>
        <div className="p-6">
          <p className="label-caps text-harbor">Expected next step</p>
          <p className="mt-3 leading-7 text-ink/72">{nextStep}</p>
        </div>
      </div>
    </article>
  );
}
