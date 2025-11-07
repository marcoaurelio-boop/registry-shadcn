"use client";

import { CatlifeTestimonials } from "@/components/ui/catlife-testimonials";

export function CatlifeTestimonialsComponent() {
  const testimonials = [
    {
      text: "O melhor plano para gatos! Minha gata recebeu atendimento excelente.",
      author: "Maria Silva",
      avatar: "https://via.placeholder.com/172",
    },
    {
      text: "Cobertura completa e atendimento humanizado. Recomendo!",
      author: "João Santos",
      avatar: "https://via.placeholder.com/172",
    },
    {
      text: "Finalmente um plano feito exclusivamente para gatos. Perfeito!",
      author: "Ana Costa",
      avatar: "https://via.placeholder.com/172",
    },
  ];

  return (
    <div className="w-full">
      <CatlifeTestimonials
        bannerText="Mais de 10.000 gatos protegidos"
        testimonials={testimonials}
      />
    </div>
  );
}


