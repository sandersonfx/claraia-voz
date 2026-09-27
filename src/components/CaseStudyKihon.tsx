import { ArrowUpRight, Sparkles } from "lucide-react";

export function CaseStudyKihon() {
  const stats = [
    {
      value: "2.643",
      label: "mensagens enviadas",
      description: "Touchpoints automáticos",
    },
    {
      value: "145",
      label: "clientes reativados",
      description: "Conversões atribuídas",
    },
    {
      value: "R$ 37.849",
      label: "de receita recuperada",
      description: "Sem esforço manual",
    },
    {
      value: "5,5%",
      label: "taxa de conversão",
      description: "Acima da média de mercado",
    },
  ];

  return (
    <section className="px-5 py-24 sm:px-8 lg:px-14 lg:py-32 bg-background text-foreground">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 flex items-center justify-center gap-3">
          <Sparkles className="size-5 text-gold" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Caso de sucesso</p>
        </div>

        {/* Header */}
        <div className="mb-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-5">
            Kihon Hair — Sapiranga, RS
          </p>
          <h2 className="mx-auto max-w-3xl font-display text-5xl leading-none sm:text-6xl lg:text-6xl mb-6">
            De salão esquecido<br />
            <em className="text-gold">para recepção 24/7</em>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            Um salão premium que perdia clientes entre visitas descobriu na Clara a forma de manter contato automático e recuperar receita — sem pressionar sua equipe.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border border-border bg-card/40 p-7 transition-all duration-300 hover:border-gold/50 hover:bg-card/60"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-12 h-0.5 bg-gold transform -translate-x-12 group-hover:translate-x-0 transition-transform duration-300" />

              <div className="font-display text-3xl sm:text-4xl leading-tight text-primary mb-3 flex items-baseline gap-2">
                {stat.value}
                <ArrowUpRight className="size-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold mb-2">
                {stat.label}
              </p>
              <p className="text-sm leading-6 text-foreground/60">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid gap-8 lg:grid-cols-2 mb-16 bg-ivory-deep/40 border border-border p-8 sm:p-10 rounded-sm">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl leading-tight text-primary mb-4">
              O desafio
            </h3>
            <ul className="space-y-3 text-sm leading-7 text-foreground/70">
              <li className="flex gap-3">
                <span className="text-gold font-bold">•</span>
                <span>Clientes que amavam o resultado desapareciam após a primeira visita</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-bold">•</span>
                <span>A recepção tentava ligar/mandar mensagens, mas conseguia reativar muito poucas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-bold">•</span>
                <span>Cada cancelamento de última hora virava buraço de receita</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-2xl sm:text-3xl leading-tight text-primary mb-4">
              A solução
            </h3>
            <ul className="space-y-3 text-sm leading-7 text-foreground/70">
              <li className="flex gap-3">
                <span className="text-gold font-bold">✓</span>
                <span><strong>9 gatilhos automáticos</strong> ativos: lembrete pós-corte, reativação de adormecidas, NPS, confirmação de agenda</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-bold">✓</span>
                <span><strong>Conversas naturais</strong> no WhatsApp, sem parecer spam</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-bold">✓</span>
                <span><strong>Tempo real da recepção preservado</strong> — Clara toca o fluxo, equipe foca em atender bem</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Insight */}
        <div className="border-l-4 border-gold bg-primary/5 p-7 sm:p-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold mb-4">
            O resultado que importa
          </p>
          <p className="font-display text-3xl sm:text-4xl leading-tight text-primary mb-4">
            R$ 37.849 recuperados<br />
            <span className="text-base font-normal text-foreground/70 mt-2 block">
              ...em 3 meses, com apenas 5,5% de taxa de conversão (acima da média)
            </span>
          </p>
          <p className="text-sm leading-6 text-foreground/70 mt-6 max-w-2xl mx-auto">
            Sem que a equipe mudasse sua rotina. Sem pressão. Apenas Clara conversando com clientes que já confiam no Kihon.
          </p>
        </div>
      </div>
    </section>
  );
}
