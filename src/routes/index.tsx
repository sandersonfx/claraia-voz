import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  CalendarCheck,
  Check,
  Database,
  FileSpreadsheet,
  ListChecks,
  MessageCircle,
  Phone,
  PhoneIncoming,
  PhoneOutgoing,
  Plug,
  RefreshCw,
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
  "https://wa.me/5511912557772?text=Ol%C3%A1%2C%20quero%20a%20CLARAIA%20atendendo%20e%20ligando%20no%20meu%20neg%C3%B3cio.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CLARAIA Voz | Agente de IA que atende e faz ligações" },
      {
        name: "description",
        content:
          "Um agente de IA no telefone do seu negócio: atende as ligações que chegam e liga para os contatos da sua lista ou do seu CRM.",
      },
      { property: "og:title", content: "CLARAIA Voz | Atende quem liga. E liga para quem sumiu." },
      {
        property: "og:description",
        content:
          "Agente de IA por voz: recebe ligações e disca para a sua lista ou o seu CRM. Fala como gente, sabe o histórico e resolve.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function WhatsAppButton({ outline = false, label = "Quero no meu negócio" }: { outline?: boolean; label?: string }) {
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
    title: "Ligação não atendida não volta.",
    text: "Quem liga e não é atendido não deixa recado: chama o próximo da lista. A ligação perdida é a venda que foi para o concorrente.",
  },
  {
    number: "02",
    title: "Mensagem se ignora. Ligação, não.",
    text: "Quem não abre a mensagem não sabe que você tentou. A ligação é o único canal em que o cliente precisa dizer não na hora.",
  },
  {
    number: "03",
    title: "Sua lista está parada.",
    text: "O CRM cheio de contato que ninguém toca há meses é a receita mais barata que existe — e a única que ninguém tem tempo de buscar.",
  },
];

const abilities = [
  {
    icon: PhoneIncoming,
    title: "Atende na hora",
    text: "Pega a ligação quando ninguém está livre e também fora do expediente. Ninguém fica esperando na linha.",
  },
  {
    icon: PhoneOutgoing,
    title: "Liga com contexto",
    text: "Disca sabendo com quem fala: nome, histórico, última compra e o motivo daquela ligação.",
  },
  {
    icon: Database,
    title: "Usa o que você tem",
    text: "Trabalha com a sua lista ou o seu CRM. Não exige sistema novo nem migração.",
  },
  {
    icon: CalendarCheck,
    title: "Resolve ou transfere",
    text: "Agenda, informa, registra o desfecho. Se o cliente pedir uma pessoa, passa na mesma ligação.",
  },
];

const integrations = [
  {
    icon: FileSpreadsheet,
    title: "Sua planilha",
    text: "Suba um arquivo com nome, telefone e o que mais tiver. A Clara usa o que estiver lá — sem cadastro manual.",
  },
  {
    icon: Plug,
    title: "Seu CRM",
    text: "Conecte o CRM e ela lê a etapa de cada contato, o histórico de conversa e o que já foi comprado.",
  },
  {
    icon: ListChecks,
    title: "Seus filtros",
    text: "Você decide quem entra na fila: quem não volta há X dias, quem nunca respondeu, aniversário, orçamento parado.",
  },
  {
    icon: RefreshCw,
    title: "Seu retorno",
    text: "O desfecho de cada ligação volta para a lista ou o CRM: atendeu, agendou, recusou, pediu para não ligar mais.",
  },
];

const limitsLiga = [
  "Diz que é atendimento automático na primeira frase.",
  "Só liga em horário comercial, nunca no domingo.",
  "Uma tentativa por contato por período — não insiste.",
  "Respeita o teto diário que você definir.",
  "Não liga para quem pediu para não receber. Nunca mais.",
];

const limitsAtende = [
  "Atende a qualquer hora, inclusive fora do expediente.",
  "Diz que é atendimento automático se o cliente perguntar.",
  "Se não souber resolver, transfere para uma pessoa.",
  "Registra o motivo da ligação no histórico do cliente.",
];

const steps = [
  {
    number: "01",
    title: "Conecte o telefone",
    text: "O número do seu negócio passa a atender as ligações que chegam, com a Clara na linha.",
  },
  {
    number: "02",
    title: "Traga seus contatos",
    text: "Importe uma planilha ou conecte o seu CRM. Ela passa a ligar para quem você quiser alcançar.",
  },
  {
    number: "03",
    title: "Defina as regras",
    text: "Quem entra na fila, em que horário, com qual oferta e quantas tentativas. O resto ela conduz.",
  },
];

function Home() {
  return (
    <main id="inicio" className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-primary/15 text-primary">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <Brand />
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.12em] md:flex" aria-label="Navegação principal">
            <a href="#como-funciona" className="transition-opacity hover:opacity-60">Como funciona</a>
            <a href="#integracao" className="transition-opacity hover:opacity-60">Lista e CRM</a>
          </nav>
          <WhatsAppButton outline label="Falar com a Clara" />
        </div>
      </header>

      <section className="relative min-h-[760px] bg-background text-foreground lg:min-h-[820px]">
        <div className="absolute inset-y-0 right-0 w-full overflow-hidden md:w-[52%]">
          <img
            src={salonImage}
            alt="Interior de um negócio de beleza"
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
              <span className="h-px w-9 bg-gold" /> Agente de IA por voz — atende e liga
            </p>
            <h1 className="font-display max-w-4xl text-6xl leading-[0.9] text-primary sm:text-7xl lg:text-[7.75rem]">
              Atende quem liga.<br />E liga para quem <em className="font-normal text-gold">sumiu.</em>
            </h1>
            <div className="mt-9 flex max-w-2xl flex-col items-start gap-7 border-l border-gold/60 pl-5 sm:flex-row sm:items-end sm:justify-between sm:pl-7">
              <p className="max-w-md text-base leading-relaxed text-foreground/75 sm:text-lg">
                Um agente de IA no telefone do seu negócio. Atende as ligações que chegam e disca para os contatos da
                sua lista ou do seu CRM — falando como gente e sabendo o histórico de cada um.
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

      <section id="ligacao" className="bg-secondary px-5 py-24 text-foreground sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <p className="pt-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Duas direções, um só telefone</p>
            <h2 className="font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              Ela atende a ligação.<br /><em className="text-primary">E faz a ligação.</em>
            </h2>
          </div>

          <div className="mt-16 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
            <div className="relative mx-auto w-full max-w-lg">
              <img
                src={stylistImage}
                alt="Profissional atendendo um cliente"
                loading="lazy"
                width={1600}
                height={1072}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute -bottom-8 right-0 w-[88%] bg-background p-5 text-foreground shadow-2xl sm:-right-8 sm:w-[78%] sm:p-7">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <p className="font-display text-2xl">Ligação recebida</p>
                    <p className="text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                      <PhoneIncoming className="mr-1 inline size-3 align-[-1px]" />
                      0:32 · fora do expediente
                    </p>
                  </div>
                  <span className="size-2 rounded-full bg-green-600" />
                </div>
                <div className="mt-5 space-y-3 text-sm leading-relaxed">
                  <div className="ml-12 bg-primary p-3 text-primary-foreground">
                    Boa noite, vocês fazem escova amanhã?
                  </div>
                  <div className="mr-8 bg-muted p-3">
                    Boa noite! Aqui é a Clara, atendimento automático do salão. Fazemos sim — tenho 15h e 17h30
                    livres. Prefere qual?
                  </div>
                  <div className="ml-12 bg-primary p-3 text-primary-foreground">15h</div>
                  <div className="mr-8 bg-muted p-3">
                    Reservei amanhã às 15h e te lembro um dia antes. Pode ser no seu nome mesmo?
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 lg:pt-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Quando a Clara liga</p>
              <div className="mt-6 border border-border bg-background p-6 shadow-sm sm:p-8">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <p className="font-display text-2xl">Ligação feita</p>
                    <p className="text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                      <PhoneOutgoing className="mr-1 inline size-3 align-[-1px]" />
                      0:28 · contato da lista, sem retorno há 90 dias
                    </p>
                  </div>
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
                </div>
                <div className="mt-5 border-t border-border pt-4 text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                  desfecho gravado na lista · agendou
                </div>

                <div className="mt-5 border border-border bg-muted/40 p-4">
                  <p className="text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                    Ouça a Clara ligando
                  </p>
                  <audio controls preload="none" src="/ligacao-exemplo.mp3" className="mt-3 w-full">
                    Seu navegador não reproduz áudio.
                  </audio>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Trecho gerado pelo próprio agente — ouça, baixe e mande para a sua equipe.
                  </p>
                </div>
              </div>

              <div className="mt-10 space-y-6">
                {[
                  {
                    title: "Não é um robô lendo script.",
                    text: "Ela conversa, espera a resposta e oferece outra opção quando o cliente hesita. Se topar, já marca. Se pedir uma pessoa, transfere na hora.",
                  },
                  {
                    title: "As duas direções usam o mesmo histórico.",
                    text: "O que ela aprendeu atendendo serve para ligar — e o que descobriu ligando fica registrado para a próxima conversa.",
                  },
                ].map((item) => (
                  <div key={item.title} className="editorial-rule pt-6">
                    <h3 className="text-xl font-medium leading-snug">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-ink-soft">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problema" className="px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <p className="pt-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">O custo do silêncio</p>
            <h2 className="font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              O telefone tocou.<br /><em className="text-primary">Ninguém atendeu.</em>
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
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{pain.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-wine px-5 py-24 text-primary-foreground sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Como ela trabalha</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.02] sm:text-6xl">
              Atende o telefone.<br /><em className="text-gold">E trabalha a sua base.</em>
            </h2>
            <p className="mt-7 max-w-xl leading-7 text-primary-foreground/70">
              A mesma voz resolve as duas pontas: quem está ligando agora e quem você precisa chamar de volta. Sem
              contratar mais gente e sem deixar cliente esperando na linha.
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

      <section id="integracao" className="px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <p className="pt-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Sua lista ou seu CRM</p>
            <h2 className="font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              Ela não pede um sistema novo.<br /><em className="text-primary">Usa o que você já tem.</em>
            </h2>
          </div>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {integrations.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border-t border-border pt-6">
                <Icon className="size-5 text-primary" />
                <h3 className="mt-5 text-lg font-medium leading-snug">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-14 max-w-3xl text-sm leading-7 text-muted-foreground">
            Se a base estiver espalhada, começamos pela planilha — é o caminho mais rápido entre ter os contatos e
            ouvir a primeira ligação.
          </p>
        </div>
      </section>

      <section id="resultados" className="bg-secondary px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1200px] text-center">
          <Sparkles className="mx-auto size-6 text-gold" />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Mais agenda. Menos silêncio.</p>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-5xl leading-none sm:text-6xl lg:text-7xl">
            Mensagem alcança quem abre.<br /><em className="text-primary">Ligação alcança o resto.</em>
          </h2>
          <div className="mt-16 grid overflow-hidden border border-border text-left lg:grid-cols-2">
            <div className="bg-background p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Sem voz no telefone</p>
              <ul className="mt-7 space-y-5 text-sm text-ink-soft">
                {[
                  "Ligação perdida na hora de maior movimento",
                  "Ninguém disponível fora do expediente",
                  "CRM parado, sem ninguém para trabalhar a base",
                  "Reativação dependendo de sobrar tempo",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-primary">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary p-7 text-primary-foreground sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Com voz no telefone</p>
              <ul className="mt-7 space-y-5 text-sm">
                {[
                  "Toda ligação atendida, inclusive à noite",
                  "Base trabalhada sozinha, todo dia",
                  "Desfecho de cada contato registrado",
                  "Equipe livre para atender quem está na frente",
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

      <section className="px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">O que a Clara não faz</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.02] sm:text-6xl">
              Não é telemarketing.<br /><em className="text-primary">E não vira um.</em>
            </h2>
            <p className="mt-7 max-w-md leading-7 text-muted-foreground">
              Ligar para cliente é coisa séria. Os limites abaixo não são promessa de marketing: são como o sistema
              foi construído para funcionar.
            </p>
          </div>
          <div className="lg:pt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Quando ela liga</p>
            <ul className="mt-5 space-y-4">
              {limitsLiga.map((item) => (
                <li key={item} className="flex gap-4 border-b border-border pb-4 text-sm leading-7 last:border-b-0">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Quando ela atende</p>
            <ul className="mt-5 space-y-4">
              {limitsAtende.map((item) => (
                <li key={item} className="flex gap-4 border-b border-border pb-4 text-sm leading-7 last:border-b-0">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="comecar" className="bg-secondary px-5 py-24 text-foreground sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Como começar</p>
          <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[1.02] sm:text-6xl">
            Conecte o telefone.<br /><em className="text-primary">Suba a sua lista.</em>
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="editorial-rule pt-8">
                <span className="font-display text-3xl text-gold">{step.number}</span>
                <h3 className="mt-6 text-xl font-medium leading-snug">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-soft">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <WhatsAppButton label="Quero testar no meu negócio" />
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-20 text-primary-foreground sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-9 lg:flex-row lg:items-end">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              <Phone className="size-4" /> A próxima ligação pode ser sua
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-5xl leading-none sm:text-6xl">
              Quer ouvir a Clara no telefone?
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
              Atendimento e discagem por IA para o telefone do seu negócio
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
