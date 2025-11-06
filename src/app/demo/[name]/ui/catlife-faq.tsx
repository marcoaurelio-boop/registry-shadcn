"use client";

import { CatlifeFAQ } from "@/components/ui/catlife-faq";
import { HelpCircle } from "lucide-react";

export function CatlifeFAQComponent() {
  const faqItems = [
    {
      question: "Como funciona o plano?",
      answer:
        "O plano funciona de forma simples: você escolhe o plano ideal, faz o cadastro do seu gato e já pode começar a usar. Todas as consultas e procedimentos são cobertos conforme o plano escolhido.",
    },
    {
      question: "Quais são as coberturas incluídas?",
      answer:
        "As coberturas variam conforme o plano escolhido, mas incluem consultas, vacinas, exames, cirurgias e emergências. Consulte a tabela de cobertura para mais detalhes.",
    },
    {
      question: "Posso usar em qualquer veterinário?",
      answer:
        "Sim! O plano tem abrangência nacional e você pode usar em qualquer veterinário da nossa rede credenciada. Também oferecemos telemedicina para consultas à distância.",
    },
    {
      question: "Como faço para cancelar?",
      answer:
        "Você pode cancelar a qualquer momento através do nosso portal ou entrando em contato com o atendimento. Não há multa ou taxa de cancelamento.",
    },
    {
      question: "O plano cobre gatos de todas as idades?",
      answer:
        "Sim! O plano cobre gatos de todas as idades, desde filhotes até gatos idosos. Não há limite de idade para adesão.",
    },
  ];

  return (
    <div className="w-full p-6">
      <CatlifeFAQ
        title="Perguntas frequentes"
        items={faqItems}
        illustration={
          <div className="flex items-center justify-center">
            <HelpCircle className="size-32 text-catlife-primary" />
          </div>
        }
      />
    </div>
  );
}

