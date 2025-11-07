"use client";

import { CatlifePlansCarousel } from "@/components/ui/catlife-plans-carousel";

export function CatlifePlansCarouselComponent() {
  const plans = [
    {
      name: "Plano Básico",
      price: "R$ 49",
      description: "Cobertura essencial para seu gato",
      features: ["Consultas básicas", "Vacinas", "Exames simples"],
    },
    {
      name: "Plano Completo",
      price: "R$ 89",
      description: "Cobertura completa com especialistas",
      features: [
        "Consultas com especialistas",
        "Telemedicina",
        "Exames completos",
        "Cirurgias",
      ],
    },
    {
      name: "Plano Premium",
      price: "R$ 129",
      description: "Máxima cobertura para seu gato",
      features: [
        "Tudo do Plano Completo",
        "Consultas à domicílio",
        "Emergências 24h",
        "Descontos em farmácias",
      ],
    },
  ];

  return (
    <div className="w-full p-6">
      <CatlifePlansCarousel plans={plans} />
    </div>
  );
}


