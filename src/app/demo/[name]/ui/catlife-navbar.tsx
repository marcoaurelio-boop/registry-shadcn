"use client";

import { CatlifeNavbar } from "@/components/ui/catlife-navbar";

export function CatlifeNavbarComponent() {
  return (
    <div className="w-full">
      <CatlifeNavbar
        logo={
          <div className="flex items-center">
            <span className="font-roc-grotesk text-xl font-bold text-catlife-text-primary">
              CatLife
            </span>
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
    </div>
  );
}


