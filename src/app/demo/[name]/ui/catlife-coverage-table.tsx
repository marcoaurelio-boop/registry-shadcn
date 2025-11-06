"use client";

import { CatlifeCoverageTable } from "@/components/ui/catlife-coverage-table";

export function CatlifeCoverageTableComponent() {
  const rows = [
    { service: "Consultas básicas", covered: true },
    { service: "Consultas com especialistas", covered: true },
    { service: "Consultas à domicílio", covered: true },
    { service: "Telemedicina", covered: true },
    { service: "Vacinas", covered: true },
    { service: "Exames laboratoriais", covered: true },
    { service: "Exames de imagem", covered: true },
    { service: "Cirurgias", covered: true },
    { service: "Emergências 24h", covered: true },
    { service: "Internação", covered: true },
  ];

  return (
    <div className="w-full p-6">
      <CatlifeCoverageTable
        rows={rows}
        columns={["Serviço", "Coberto"]}
      />
    </div>
  );
}

