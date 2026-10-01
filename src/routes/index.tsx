import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  CalendarCheck,
  Check,
  Clock3,
  MessageCircle,
  Phone,
  PhoneIncoming,
  PhoneOutgoing,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CaseStudyKihon } from "@/components/CaseStudyKihon";
import claraiaLogo from "@/assets/claraia-logo.png";
import salonImage from "@/assets/claraia-salon.jpg";
import stylistImage from "@/assets/claraia-stylist.jpg";

// Número único de contato da CLARAIA. Trocar aqui muda todos os CTAs da página.
const WHATSAPP_URL =
  "https://wa.me/5511912557772?text=Ol%C3%A1%2C%20quero%20a%20CLARAIA%20ligando%20para%20as%20minhas%20clientes.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CLARAIA Voz | Sua recepcionista de IA agora liga" },
      {
        name: "description",
        content:
          "A CLARAIA pega as clientes que pararam de responder no WhatsApp e liga no telefone: fala como gente, sabe o histórico e marca de novo.",
      },
      { property: "og:title", content: "CLARAIA Voz | Ela já responde no WhatsApp. Agora ela liga." },
      {
        property: "og:description",
        content:
          "Reativação por telefone para salões: a Clara liga para quem não respondeu, com o histórico na mão, e marca de novo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function WhatsAppButton({ outline = false, label = "Quero a Clara ligando" }: { outline?: boolean; label?: string }) {
  return (
    <Button asChild variant={outline ? "editorialOutline" : "editorial"} size="editorial">
      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
        <MessageCircle aria-hidden="true" />
        {label}
        <ArrowRight aria-hidden="true" />
      </a>
    </Button>
  );
}

function Brand() {
  return (
    <a href="/" className="block" aria-label="CLARAIA — início">
      <img src={claraiaLogo} alt="CLARAIA" width={1536} height={512} className="h-auto w-36 sm:w-40" />
    </a>
  );
}

const pains = [
  {
    number: "01",
    title: "Mensagem se ignora. Ligação, não.",
    text: "Quem não abre o WhatsApp não sabe que você tentou. A ligação é o único canal em que a cliente precisa dizer não na hora.",
  },
  {
    number: "02",
    title: "Sua melhor cliente não sumiu por preço.",
    text: "Ela só esqueceu. Sem alguém que chame pelo nome, ela lembra do salão quando passa na frente — ou quando a amiga indica outro.",
  },
  {
    number: "03",
    title: "O telefone toca e ninguém está livre.",
    text: "Enquanto a equipe atende, a chamada cai. Cada ligação perdida é um horário que ficou vago na agenda.",
  },
];

const abilities = [
  {
    icon: PhoneOutgoing,
    title: "Escolhe quem ligar",
    text: "Quem parou de responder, quem não volta há tempo e quem tem horário vago na agenda.",
  },
  {
    icon: MessageCircle,
    title: "Sabe com quem fala",
    text: "Nome, última visita, serviços preferidos e o que a cliente costuma fazer no salão.",
  },
  {
    icon: CalendarCheck,
    title: "Resolve na hora",
    text: "Marca, confirma, remarca. Se a cliente pedir, passa para uma pessoa na mesma ligação.",
  },
  {
    icon: Clock3,
    title: "Fala na hora certa",
    text: "Só em horário comercial, com teto por dia e uma tentativa por cliente por período.",
  },
];

const limits = [
  "Diz que é atendimento automático na primeira frase.",
  "Não liga fora do horário comercial, nem no domingo.",
  "Não insiste: uma tentativa por cliente por período.",
  "Não liga para quem pediu para não receber — nunca mais.",
  "Passa para uma pessoa na hora, se a cliente pedir.",
];

function Home() {
  return (
    <main id="inicio" className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-primary/15 text-primary">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <Brand />
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.12em] md:flex" aria-label="Navegação principal">
            <a href="#como-funciona" className="transition-opacity hover:opacity-60">Como funciona</a>
            <a href="#resultados" className="transition-opacity hover:opacity-60">Por que ligar</a>
          </nav>
          <WhatsAppButton outline label="Falar com a Clara" />
        </div>
      </header>

      <section className="relative min-h-[760px] bg-background text-foreground lg:min-h-[820px]">
        <div className="absolute inset-y-0 right-0 w-full overflow-hidden md:w-[52%]">
          <img
            src={salonImage}
            alt="Interior sofisticado de um salão de beleza"
            width={1280}
            height={1600}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/15" />
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gold/20 backdrop-blur-[2px]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/10 md:to-transparent" />
        <div className="relative mx-auto flex min-h-[760px] max-w-[1440px] items-center px-5 pb-16 pt-32 sm:px-8 lg:min-h-[820px] lg:px-14">
          <div className="reveal max-w-4xl">
            <p className="mb-7 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold">
              <span className="h-px w-9 bg-gold" /> Recepcionista de IA para salões — agora no telefone
            </p>
            <h1 className="font-display max-w-4xl text-6xl leading-[0.9] text-primary sm:text-7xl lg:text-[7.75rem]">
              Ela já responde.<br />Agora ela <em className="font-normal text-gold">liga.</em>
            </h1>
            <div className="mt-9 flex max-w-2xl flex-col items-start gap-7 border-l border-gold/60 pl-5 sm:flex-row sm:items-end sm:justify-between sm:pl-7">
              <p className="max-w-md text-base leading-relaxed text-foreground/75 sm:text-lg">
                A Clara pega as clientes que pararam de responder e chama no telefone. Fala como gente, já sabe o
                nome, a última visita e o que ela comprou — e marca de novo.
              </p>
              <WhatsAppButton />
            </div>
          </div>
          <a
            href="#ligacao"
            aria-label="Ver mais"
            className="absolute bottom-7 right-6 hidden size-11 items-center justify-center rounded-full border border-primary/40 text-primary lg:flex"
          >
            <ArrowDown className="size-4" />
          </a>
        </div>
      </section>

      <section id="ligacao" className="px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <p className="pt-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Ouça antes de decidir</p>
            <h2 className="font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              É uma ligação.<br /><em className="text-primary">Não é um robô lendo script.</em>
            </h2>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
            <div className="relative mx-auto w-full max-w-lg">
              <img
                src={stylistImage}
                alt="Profissional finalizando o penteado de uma cliente"
                loading="lazy"
                width={1600}
                height={1072}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute -bottom-8 right-0 w-[88%] bg-background p-5 text-foreground shadow-2xl sm:-right-8 sm:w-[78%] sm:p-7">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <p className="font-display text-2xl">Ligação · Ana</p>
                    <p className="text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                      <PhoneIncoming className="mr-1 inline size-3 align-[-1px]" />
                      0:32 · atendida
                    </p>
                  </div>
                  <span className="size-2 rounded-full bg-green-600" />
                </div>
                <div className="mt-5 space-y-3 text-sm leading-relaxed">
                  <div className="mr-8 bg-muted p-3">
                    Oi, Ana! Aqui é a Clara, do salão. Vi que você fez escova com a gente em agosto e não voltou. A
                    Camila tem quinta às 15h — quer que eu reserve?
                  </div>
                  <div className="ml-12 bg-primary p-3 text-primary-foreground">Oi! Pode ser. Quanto está?</div>
                  <div className="mr-8 bg-muted p-3">
                    A escova está R$ 90. Reservei quinta às 15h com a Camila, e te lembro um dia antes.
                  </div>
                  <div className="ml-12 bg-primary p-3 text-primary-foreground">Perfeito ✨</div>
                </div>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4 text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-px bg-gold" />
                    <span className="h-3 w-px bg-gold" />
                    <span className="h-6 w-px bg-gold" />
                    <span className="h-3 w-px bg-gold" />
                    <span className="h-5 w-px bg-gold" />
                  </span>
                  exemplo de ligação
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">O que muda numa ligação</p>
              <div className="mt-8 space-y-7">
                {[
                  {
                    title: "Ela usa o que já sabe.",
                    text: "Não pergunta o nome, não pergunta o que a cliente costuma fazer: chega sabendo, porque o salão já registrou isso antes.",
                  },
                  {
                    title: "Ela espera a resposta.",
                    text: "Conversa, não despeja informação. Se a cliente hesitar, ela oferece outro horário ou outro serviço.",
                  },
                  {
                    title: "Ela fecha ou passa adiante.",
                    text: "Se a cliente topar, o horário já entra na agenda. Se ela pedir uma pessoa, a ligação é transferida na hora.",
                  },
                ].map((item) => (
                  <div key={item.title} className="editorial-rule pt-6">
                    <h3 className="text-xl font-medium leading-snug">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problema" className="bg-ivory-deep px-5 py-24 text-foreground sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <p className="pt-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">O custo do silêncio</p>
            <h2 className="font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              A mensagem foi enviada.<br /><em className="text-primary">E ninguém respondeu.</em>
            </h2>
          </div>
          <div className="mt-16 grid border-t border-border md:grid-cols-3">
            {pains.map((pain, index) => (
              <article
                key={pain.number}
                className={`editorial-rule pt-10 md:px-8 ${index > 0 ? "mt-10 border-t border-border md:mt-0 md:border-l md:border-t-0" : ""}`}
              >
                <span className="font-display text-3xl text-gold">{pain.number}</span>
                <h3 className="mt-8 text-xl font-medium leading-snug">{pain.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink-soft">{pain.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-wine px-5 py-24 text-primary-foreground sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Ela liga com contexto, não com script</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.02] sm:text-6xl">
              Ela sabe com quem fala.<br /><em className="text-gold">E o que oferecer.</em>
            </h2>
            <p className="mt-7 max-w-xl leading-7 text-primary-foreground/70">
              A mesma base que já atende no WhatsApp decide quem merece uma ligação hoje: quem sumiu, quem nunca
              voltou, quem tem horário vago. A Clara não liga para listas — liga para pessoas que já conhecem o salão.
            </p>
          </div>
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {abilities.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border-t border-primary-foreground/20 pt-5">
                <Icon className="size-5 text-gold" />
                <h3 className="mt-4 font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-primary-foreground/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resultados" className="px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1200px] text-center">
          <Sparkles className="mx-auto size-6 text-gold" />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Mais agenda. Menos silêncio.</p>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-5xl leading-none sm:text-6xl lg:text-7xl">
            O WhatsApp alcança quem abre.<br /><em className="text-primary">A ligação alcança o resto.</em>
          </h2>
          <div className="mt-16 grid overflow-hidden border border-border text-left lg:grid-cols-2">
            <div className="bg-ivory-deep p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Sem Clara no telefone</p>
              <ul className="mt-7 space-y-5 text-sm text-ink-soft">
                {[
                  "Mensagem enviada e nunca respondida",
                  "Horário vago que ninguém preenche",
                  "Reativação que depende de sobrar tempo",
                  "Cliente antiga que só volta por acaso",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-primary">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary p-7 text-primary-foreground sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Com Clara no telefone</p>
              <ul className="mt-7 space-y-5 text-sm">
                {[
                  "Ligação para quem não respondeu",
                  "Horário vago oferecido na hora",
                  "Reativação rodando sozinha, todo dia",
                  "Cliente antiga chamada pelo nome",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="size-4 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CaseStudyKihon />

      <section className="bg-ivory-deep px-5 py-24 text-foreground sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">O que a Clara não faz</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.02] sm:text-6xl">
              Não é telemarketing.<br /><em className="text-primary">E não vira um.</em>
            </h2>
            <p className="mt-7 max-w-md leading-7 text-ink-soft">
              Ligar para cliente é coisa séria. Os limites abaixo não são promessa de marketing: são como o sistema
              foi construído para funcionar.
            </p>
          </div>
          <ul className="space-y-5 lg:pt-14">
            {limits.map((item) => (
              <li key={item} className="flex gap-4 border-b border-border pb-5 text-sm leading-7 last:border-b-0">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-ink-soft">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="preco" className="px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1000px]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Como entra no seu plano</p>
          <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[1.02] sm:text-6xl">
            A Clara que responde.<br /><em className="text-primary">Mais a Clara que liga.</em>
          </h2>
          <div className="mt-12 border border-border">
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border p-7 sm:p-9">
              <div>
                <p className="font-medium">CLARAIA — Agente de IA no WhatsApp</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Atende, agenda, confirma e reativa no WhatsApp, 24 horas por dia.
                </p>
              </div>
              <p className="font-display text-4xl">R$ 147<span className="text-base text-muted-foreground">/mês</span></p>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-4 bg-primary p-7 text-primary-foreground sm:p-9">
              <div>
                <p className="font-medium">+ CLARAIA Voz</p>
                <p className="mt-2 text-sm text-primary-foreground/70">
                  A Clara liga para quem não respondeu, no mesmo plano e na mesma agenda.
                </p>
              </div>
              <p className="font-display text-4xl">R$ 97<span className="text-base text-primary-foreground/70">/mês</span></p>
            </div>
          </div>
          <p className="mt-7 text-sm leading-7 text-muted-foreground">
            As ligações são cobradas em créditos do seu plano, por chamada conectada — como as conversas de WhatsApp
            já são hoje. Você acompanha o consumo no painel, ligação por ligação.
          </p>
          <div className="mt-9">
            <WhatsAppButton label="Adicionar Voz ao meu plano" />
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-20 text-primary-foreground sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-9 lg:flex-row lg:items-end">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              <Phone className="size-4" /> A próxima ligação é para uma cliente sua
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-5xl leading-none sm:text-6xl">
              Quer ouvir a Clara ligando?
            </h2>
          </div>
          <WhatsAppButton outline label="Falar no WhatsApp" />
        </div>
      </section>

      <footer className="bg-wine px-5 py-10 text-primary-foreground sm:px-8 lg:px-14">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-5 border-t border-primary-foreground/15 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Brand />
            <p className="mt-3 text-xs text-primary-foreground/50">
              Recepção inteligente para salões extraordinários · Voz e WhatsApp
            </p>
            <p className="mt-2 text-xs text-primary-foreground/50">
              <a href="https://claraia.com" className="inline-flex items-center gap-1 underline decoration-primary-foreground/30 underline-offset-4 transition-opacity hover:opacity-70">
                <Users className="size-3" /> conheça a Clara do WhatsApp
              </a>
            </p>
          </div>
          <p className="text-[0.65rem] uppercase tracking-[0.14em] text-primary-foreground/40">© 2026 CLARAIA</p>
        </div>
      </footer>
    </main>
  );
}
