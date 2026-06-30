import { ImagePlus, UserRoundCheck } from "lucide-react";

export function ProviderHeadshotSlot() {
  return (
    <div className="border border-ink/12 bg-linen p-4">
      <div className="grid aspect-[4/5] place-items-center border border-dashed border-ink/24 bg-paper">
        <div className="max-w-[240px] px-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[8px] bg-mist text-fern">
            <UserRoundCheck aria-hidden="true" size={28} />
          </div>
          <p className="mt-5 font-display text-3xl font-medium leading-tight text-ink">
            Provider headshot
          </p>
          <p className="mt-3 text-sm leading-6 text-ink/62">
            [PLACEHOLDER] Replace with the real provider photo before launch.
          </p>
        </div>
      </div>
      <div className="mt-4 flex gap-3 border-t border-ink/10 pt-4 text-sm leading-6 text-ink/64">
        <ImagePlus
          aria-hidden="true"
          className="mt-0.5 shrink-0 text-clay"
          size={18}
        />
        Use a direct, professional crop with natural light and no stock-photo
        medical props.
      </div>
    </div>
  );
}
