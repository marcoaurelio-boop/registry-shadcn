"use client";

import { CatlifeTelemedicine } from "@/components/ui/catlife-telemedicine";

export function CatlifeTelemedicineComponent() {
  return (
    <div className="w-full">
      <CatlifeTelemedicine
        title="Telemedicina"
        description="Consulte veterinários especialistas sem sair de casa. Atendimento rápido e eficiente para seu gato."
        image={
          <div className="flex h-full w-full items-center justify-center bg-catlife-primary/20 rounded-br-[56px] rounded-tr-[56px]">
            <span className="text-catlife-text-secondary">Telemedicine Image</span>
          </div>
        }
        ctaLabel="Saiba mais"
      />
    </div>
  );
}


