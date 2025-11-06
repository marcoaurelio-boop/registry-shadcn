"use client";

import { CatlifeInfoCard } from "@/components/ui/catlife-info-card";
import { Award, Home, Stethoscope, Heart } from "lucide-react";

export function CatlifeInfoCardComponent() {
  return (
    <div className="flex flex-col gap-8 p-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Catlife Info Card Variants</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <CatlifeInfoCard
            variant="orange-500"
            icon={<Award className="size-20 text-catlife-text-primary" />}
            title={
              <>
                Consultas com <strong>especialista</strong> e <strong>à domicílio</strong> desde o plano mais <strong>básico</strong>
              </>
            }
          />
          <CatlifeInfoCard
            variant="orange-400"
            icon={<Stethoscope className="size-20 text-catlife-text-primary" />}
            title={
              <>
                Procedimentos <strong>pré-aprovados</strong> e <strong>sem coparticipação</strong>
              </>
            }
          />
          <CatlifeInfoCard
            variant="orange-300"
            icon={<Home className="size-20 text-catlife-text-primary" />}
            title="Cobertura completa para seu gato"
          />
          <CatlifeInfoCard
            variant="orange-200"
            icon={<Heart className="size-20 text-catlife-text-primary" />}
            title="Plano feito exclusivamente para gatos"
          />
        </div>
      </div>
    </div>
  );
}

