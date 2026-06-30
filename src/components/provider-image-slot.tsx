import { ImagePlus, UserRoundCheck } from "lucide-react";

export function ProviderImageSlot() {
  return (
    <div className="rounded-[24px] border border-line bg-paper p-4 shadow-[0_24px_70px_rgba(7,28,42,0.09)]">
      <div className="grid aspect-[4/5] place-items-center rounded-[18px] border border-dashed border-cyan/45 bg-[linear-gradient(135deg,#F7FCFD,#EDF8FA)]">
        <div className="max-w-[250px] px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[18px] bg-deep-navy text-paper shadow-[0_18px_42px_rgba(7,4,95,0.2)]">
            <UserRoundCheck aria-hidden="true" size={30} />
          </div>
          <p className="mt-5 font-display text-3xl font-medium leading-tight text-ink">
            Provider headshot
          </p>
          <p className="mt-3 text-sm leading-6 text-ink/64">
            [PLACEHOLDER] Replace with the real provider photo before launch.
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
