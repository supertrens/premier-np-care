import { ClipboardCheck } from "lucide-react";
import { practiceFacts } from "@/lib/content";

export function PracticeStatusPanel() {
  return (
    <aside className="glass-panel rounded-[24px] border border-white/70 p-5">
      <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
        <div className="flex items-center gap-3 text-cobalt">
          <ClipboardCheck aria-hidden="true" size={22} />
          <p className="label-caps">Practice status</p>
        </div>
        <span className="rounded-full border border-cyan/30 bg-mist px-3 py-1 text-sm font-semibold text-cobalt">
          Demo
        </span>
      </div>
      <div className="divide-y divide-line">
        {practiceFacts.map((fact) => (
          <div className="grid gap-2 py-4 sm:grid-cols-[150px_1fr]" key={fact.label}>
            <p className="label-caps text-harbor">{fact.label}</p>
            <p className="leading-7 text-ink/74">{fact.value}</p>
          </div>
        ))}
      </div>
      <p className="rounded-[16px] border border-cyan/20 bg-mist px-4 py-3 text-sm leading-6 text-ink/68">
        Informational website only. The EHR and telehealth platform handle
        scheduling, visits, and records.
      </p>
    </aside>
  );
}
