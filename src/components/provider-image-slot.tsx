import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export function ProviderImageSlot() {
  return (
    <div className="rounded-[24px] border border-line bg-paper p-4 shadow-[0_24px_70px_rgba(7,28,42,0.09)]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-deep-navy">
        <Image
          alt="Portrait of Virginie Chavannes, Nurse Practitioner."
          className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
          fill
          sizes="(min-width: 1024px) 360px, 92vw"
          src="/images/virginie-chavannes.jpg"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(0deg,rgba(7,28,42,0.78),rgba(7,28,42,0.18)_62%,transparent)]"
        />
        <div className="relative flex h-full flex-col justify-end p-6 text-paper">
          <p className="max-w-[250px] font-display text-3xl font-medium leading-tight">
            Virginie Chavannes
          </p>
          <p className="mt-3 max-w-[260px] text-sm leading-6 text-paper/74">
            Nurse Practitioner and founder of Premier NP Care.
          </p>
        </div>
      </div>
      <div className="mt-4 flex gap-3 rounded-[16px] border border-line bg-porcelain px-4 py-3 text-sm leading-6 text-ink/66">
        <ShieldCheck
          aria-hidden="true"
          className="mt-0.5 shrink-0 text-cobalt"
          size={18}
        />
        Every visit starts with the named provider patients see here.
      </div>
    </div>
  );
}
