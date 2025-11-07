"use client";

import { CatlifeNavbar } from "@/components/ui/catlife-navbar";

export function CatlifeNavbarComponent() {
  return (
    <div className="w-full">
      <CatlifeNavbar
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
    </div>
  );
}


