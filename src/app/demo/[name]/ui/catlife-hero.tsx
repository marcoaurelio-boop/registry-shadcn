"use client";

import { CatlifeHero } from "@/components/ui/catlife-hero";
import Image from "next/image";

export function CatlifeHeroComponent() {
  return (
    <div className="w-full">
      <CatlifeHero
        title="O plano de saúde pet para gatos exigentes."
        subtitle="O primeiro (e único) plano pet só para gatos com abrangência nacional."
        catsImage={
          <div className="flex h-full w-full items-center justify-center bg-catlife-primary-light/50 rounded-lg">
            <span className="text-catlife-text-secondary">Cats Image</span>
          </div>
        }
        formTitle="Encontre a opção ideal"
        inputPlaceholder="Nome do seu pet"
        ctaLabel="Vamos lá"
      />
    </div>
  );
}

