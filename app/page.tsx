import { Button } from "@/components/ui/button"
import { Check, Star, Home, Plus } from "lucide-react"

export default function CatlifeLanding() {
  return (
    <main className="min-h-screen bg-[#fffaf3]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#161616] leading-tight text-balance">
              O plano de saúde pet para gatos exigentes.
            </h1>
            <p className="text-lg lg:text-xl text-[#78716c] leading-relaxed">
              O primeiro (e único) plano pet só para gatos com abrangência nacional.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-3xl p-8 shadow-lg w-full max-w-md">
              <h2 className="text-2xl font-bold text-[#161616] mb-6">Encontre a opção ideal</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Nome do seu pet"
                  className="w-full px-4 py-3 rounded-full border-2 border-[#d6d3d1] focus:border-[#f99830] focus:outline-none text-[#161616] placeholder:text-[#78716c]"
                />
                <Button className="w-full h-12 rounded-full bg-[#161616] hover:bg-[#161616]/90 text-white font-semibold text-base">
                  Vamos lá
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-12 lg:py-20">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#161616] leading-tight text-balance">
            Seu gato merece um plano de saúde feito exclusivamente para ele, e você sabe disso
          </h2>
          <p className="text-lg text-[#78716c] max-w-3xl mx-auto">
            A Catlife tem coberturas completas e um jeito descomplicado de cuidar do seu pet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Card 1: Specialist Consultations */}
          <div className="bg-[#f99830] rounded-3xl p-8 lg:p-10 text-center space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className="bg-[#ffeed6] rounded-full p-6 w-24 h-24 flex items-center justify-center">
                <Star className="w-10 h-10 text-[#161616] fill-[#161616]" />
              </div>
              <div className="bg-[#161616] rounded-full p-3 w-12 h-12 flex items-center justify-center">
                <Plus className="w-6 h-6 text-[#f99830]" />
              </div>
              <div className="bg-[#ffeed6] rounded-full p-6 w-24 h-24 flex items-center justify-center">
                <Home className="w-10 h-10 text-[#161616] fill-[#161616]" />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xl font-bold text-[#161616]">
                Consultas com <span className="font-black">especialista</span>
              </p>
              <p className="text-xl font-bold text-[#161616]">
                e <span className="font-black">à domicílio</span> desde o plano
              </p>
              <p className="text-xl font-bold text-[#161616]">
                mais <span className="font-black">básico</span>
              </p>
            </div>
          </div>

          {/* Card 2: Pre-approved Procedures */}
          <div className="bg-[#f99830] rounded-3xl p-8 lg:p-10 space-y-6">
            <div className="space-y-3">
              {["Consultas", "Teste rápido", "Vacinas", "Telemedicina"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="bg-[#161616] rounded-full p-1.5 flex-shrink-0">
                    <Check className="w-4 h-4 text-[#f99830]" />
                  </div>
                  <div className="bg-[#ffeed6] rounded-full px-6 py-3 flex-1">
                    <p className="text-lg font-semibold text-[#161616]">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center pt-4">
              <p className="text-xl font-bold text-[#161616] leading-tight">
                Procedimentos <span className="font-black">pré-aprovados</span> e
              </p>
              <p className="text-xl font-bold text-[#161616]">
                sem <span className="font-black">coparticipação</span>
              </p>
            </div>
          </div>

          {/* Card 3: Multiple Cats Discount */}
          <div className="bg-[#f99830] rounded-3xl p-8 lg:p-10 space-y-6">
            <div className="space-y-3">
              <div className="bg-white rounded-full px-6 py-3 text-center">
                <p className="text-lg font-semibold text-[#161616]">Joaquim</p>
              </div>
              {[
                { name: "Nina Maria", discount: "10%" },
                { name: "Francisco", discount: "20%" },
                { name: "Geraldinho", discount: "30%" },
                { name: "Abobrinha", discount: "40%" },
              ].map((cat) => (
                <div key={cat.name} className="flex items-center gap-3">
                  <div className="bg-[#ffeed6] rounded-full px-6 py-3 flex-1 border-2 border-[#161616]">
                    <p className="text-lg font-semibold text-[#161616]">{cat.name}</p>
                  </div>
                  <div className="bg-[#161616] rounded-full px-4 py-2">
                    <p className="text-sm font-bold text-[#f99830]">{cat.discount}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center pt-4">
              <p className="text-xl font-bold text-[#161616] leading-tight">Adicione mais gatinhos e</p>
              <p className="text-xl font-bold text-[#161616]">
                ganhe <span className="font-black">até 40% de desconto</span>
              </p>
              <p className="text-xl font-bold text-[#161616]">na mensalidade.</p>
            </div>
          </div>

          {/* Card 4: Coverage Table */}
          <div className="bg-[#ffeed6] rounded-3xl p-8 lg:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-xl font-bold text-[#161616]">Tabela de</p>
                <p className="text-xl font-bold text-[#161616]">cobertura para</p>
                <p className="text-xl font-bold text-[#161616]">
                  gatos <span className="font-black">mais completa</span> do
                </p>
                <p className="text-xl font-bold text-[#161616] font-black">mercado</p>
              </div>

              <div className="bg-white rounded-2xl p-6 space-y-3">
                {[
                  "Consultas",
                  "Exames laboratoriais",
                  "Vacinas",
                  "Proc. Médico-veterinário",
                  "Testes rápidos",
                  "Cirurgias",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between py-2 border-b border-[#d6d3d1] last:border-0"
                  >
                    <p className="text-base font-medium text-[#161616]">{item}</p>
                    <div className="bg-[#78716c] rounded-full p-1.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="h-12 px-8 rounded-full bg-[#f99830] hover:bg-[#f99830]/90 text-[#161616] font-bold text-base border-2 border-[#161616]">
            Simular o plano ideal
          </Button>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-12 lg:py-20">
        <div className="text-center mb-12 space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#161616] leading-tight text-balance max-w-4xl mx-auto">
            Se o seu gato tivesse cartão de crédito, já teria escolhido um desses
          </h2>

          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 border-2 border-[#d6d3d1]">
            <span className="text-base font-medium text-[#161616]">Belo Horizonte - MG</span>
            <svg className="w-4 h-4 text-[#78716c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {/* Basic Plan */}
          <div className="bg-[#ffeed6] rounded-3xl p-8 space-y-6 border-2 border-[#d6d3d1]">
            <div className="space-y-2">
              <p className="text-xl font-semibold text-[#78716c]">Básico</p>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-[#d6d3d1]">R$39</span>
                <span className="text-lg text-[#78716c]">/mês</span>
              </div>
            </div>
            <p className="text-base text-[#78716c]">Cuidados de rotina com mais economia</p>
            <Button className="w-full h-12 rounded-full bg-white hover:bg-white/90 text-[#78716c] font-semibold border-2 border-[#d6d3d1]">
              Simular
            </Button>
          </div>

          {/* Medium Plan - Highlighted */}
          <div className="bg-[#f99830] rounded-3xl p-8 space-y-6 border-4 border-[#161616] transform md:scale-105 shadow-xl">
            <div className="space-y-2">
              <p className="text-xl font-semibold text-[#161616]">Médio</p>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-[#161616]">R$79</span>
                <span className="text-lg text-[#161616]">/mês</span>
              </div>
            </div>
            <p className="text-base text-[#161616] font-medium">Cuidados de rotina com mais economia</p>
            <Button className="w-full h-12 rounded-full bg-white hover:bg-white/90 text-[#161616] font-bold border-2 border-[#161616]">
              Simular
            </Button>
          </div>

          {/* Top Plan */}
          <div className="bg-[#ffeed6] rounded-3xl p-8 space-y-6 border-2 border-[#d6d3d1]">
            <div className="space-y-2">
              <p className="text-xl font-semibold text-[#78716c]">Top</p>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-[#d6d3d1]">R$139</span>
                <span className="text-lg text-[#78716c]">/mês</span>
              </div>
            </div>
            <p className="text-base text-[#78716c]">Cuidados de rotina com mais economia</p>
            <Button className="w-full h-12 rounded-full bg-white hover:bg-white/90 text-[#78716c] font-semibold border-2 border-[#d6d3d1]">
              Simular
            </Button>
          </div>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#f99830]" />
          <div className="w-2 h-2 rounded-full bg-[#d6d3d1]" />
          <div className="w-2 h-2 rounded-full bg-[#d6d3d1]" />
        </div>

        <div className="text-center">
          <Button className="h-12 px-8 rounded-full bg-[#f99830] hover:bg-[#f99830]/90 text-[#161616] font-bold text-base border-2 border-[#161616]">
            Ver tabela de cobertura
          </Button>
        </div>
      </section>
    </main>
  )
}
