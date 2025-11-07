"use client";

import { CatlifeFooter } from "@/components/ui/catlife-footer";

export function CatlifeFooterComponent() {
  return (
    <div className="w-full">
      <CatlifeFooter
        logo={
          <div className="flex items-center">
            <span className="font-roc-grotesk text-xl font-bold text-catlife-text-primary">
              CatLife
            </span>
          </div>
        }
        columns={[
          {
            title: "Planos",
            links: [
              { label: "Básico", href: "#" },
              { label: "Completo", href: "#" },
              { label: "Premium", href: "#" },
            ],
          },
          {
            title: "Sobre",
            links: [
              { label: "Como funciona", href: "#" },
              { label: "Rede credenciada", href: "#" },
              { label: "Sobre nós", href: "#" },
            ],
          },
          {
            title: "Suporte",
            links: [
              { label: "Central de ajuda", href: "#" },
              { label: "Contato", href: "#" },
              { label: "FAQ", href: "#" },
            ],
          },
        ]}
        copyright="© 2024 Catlife. Todos os direitos reservados."
      />
    </div>
  );
}


