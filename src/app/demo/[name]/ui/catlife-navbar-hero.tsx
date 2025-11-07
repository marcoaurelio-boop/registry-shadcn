"use client";

import { useRef } from "react";
import { CatlifeHero } from "@/components/ui/catlife-hero";
import { CatlifeNavbar } from "@/components/ui/catlife-navbar";
import Image from "next/image";

export function CatlifeNavbarHeroComponent() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full">
      <CatlifeHero
        ref={heroRef}
        hasNavbar={true}
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
      <CatlifeNavbar
        heroRef={heroRef}
        logo={
          <div className="flex items-center justify-center">
            {/* Logo placeholder - replace with actual logo image */}
            <div className="flex h-8 w-32 items-center justify-center rounded bg-catlife-primary/20">
              <span className="font-roc-grotesk text-lg font-bold text-catlife-text-primary">
                CatLife
              </span>
            </div>
          </div>
        }
        menuItems={[
          { label: "Planos", href: "#" },
          { label: "Como funciona", href: "#" },
          { label: "Rede credenciada", href: "#" },
        ]}
        userAvatar="https://via.placeholder.com/40"
        userInitials="U"
      />
      {/* Dummy content to test scrolling */}
      <div className="h-screen bg-catlife-background p-8">
        <h2 className="text-2xl font-bold mb-4">Scroll down to see navbar become sticky</h2>
        <p className="text-catlife-text-secondary">
          The navbar starts inside the hero section and becomes sticky when you scroll past it.
        </p>
      </div>
      <div className="h-screen bg-catlife-primary-light p-8">
        <h2 className="text-2xl font-bold mb-4">More content</h2>
        <p className="text-catlife-text-secondary">
          Keep scrolling to see the navbar stay at the top.
        </p>
      </div>
    </div>
  );
}

