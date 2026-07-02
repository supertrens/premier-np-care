import Image from "next/image";
import { ImagePlus } from "lucide-react";

export function ProviderImageSlot() {
  return (
    <div className="rounded-[24px] border border-line bg-paper p-4 shadow-[0_24px_70px_rgba(7,28,42,0.09)]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-deep-navy">
        <Image
          alt="Clinical workspace placeholder for the future provider portrait."
          className="absolute inset-0 h-full w-full object-cover"
          fill
          sizes="(min-width: 1024px) 360px, 92vw"
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,28,42,0.06),rgba(7,28,42,0.68)),linear-gradient(135deg,rgba(7,4,95,0.25),rgba(18,174,196,0.04)_55%,rgba(247,252,253,0.16))]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(rgba(247,252,253,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(247,252,253,0.1)_1px,transparent_1px)] bg-[size:34px_34px]"
        />
        <div className="relative flex h-full flex-col justify-end p-6 text-paper">
          <div className="grid h-20 w-20 place-items-center rounded-[22px] border border-white/18 bg-deep-navy/94 font-display text-4xl font-medium shadow-[0_20px_52px_rgba(7,4,95,0.28)] backdrop-blur">
            VC
          </div>
          <p className="mt-5 max-w-[250px] font-display text-3xl font-medium leading-tight">
            Virginie Chavannes
          </p>
          <p className="mt-3 max-w-[260px] text-sm leading-6 text-paper/74">
            Image placeholder. Replace with the real provider photo before
            launch.
          </p>
        </div>
      </div>
      <div className="mt-4 flex gap-3 rounded-[16px] border border-line bg-porcelain px-4 py-3 text-sm leading-6 text-ink/66">
        <ImagePlus
          aria-hidden="true"
          className="mt-0.5 shrink-0 text-cobalt"
          size={18}
        />
        Use a direct, professional crop with natural light. Do not use stock
        portraits or staged medical props.
      </div>
    </div>
  );
}
