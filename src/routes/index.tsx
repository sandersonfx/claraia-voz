import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, CalendarCheck, Check, Clock3, MessageCircle, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import claraiaLogo from "@/assets/claraia-logo.png";
import salonImage from "@/assets/claraia-salon.jpg";
import stylistImage from "@/assets/claraia-stylist.jpg";

const WHATSAPP_URL = "https://wa.me/5511912557772?text=Ol%C3%A1%2C%20quero%20conhecer%20a%20CLARAIA%20para%20o%20meu%20sal%C3%A3o.";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "CLARAIA | Recepcionista de IA para salões" },
    { name: "description", content: "Atenda, agende, confirme e reative clientes no WhatsApp, 24 horas por dia, com a recepcionista de IA CLARAIA." },
    { property: "og:title", content: "CLARAIA | Sua recepção nunca mais para" },
    { property: "og:description", content: "A recepcionista de IA criada para salões que querem atender melhor e vender mais." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Home,
});

function WhatsAppButton({ outline = false, label = "Conhecer a Clara" }: { outline?: boolean; label?: string }) {
  return <Button asChild variant={outline ? "editorialOutline" : "editorial"} size="editorial"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" />{label}<ArrowRight aria-hidden="true" /></a></Button>;
}

function Brand() {
  return <a href="#inicio" className="block" aria-label="CLARAIA — início"><img src={claraiaLogo} alt="CLARAIA" width={1536} height={512} className="h-auto w-36 sm:w-40" /></a>;
}

const pains = [
  { number: "01", title: "Cada minuto sem resposta custa uma cliente.", text: "Enquanto sua equipe está atendendo, o WhatsApp acumula — e a cliente agenda em outro lugar." },
  { number: "02", title: "Horários vazios não se preenchem sozinhos.", text: "Confirmações esquecidas e cancelamentos de última hora viram buracos caros na agenda." },
  { number: "03", title: "Sua melhor cliente pode estar esquecida.", text: "Sem uma rotina de reativação, clientes que já confiam no salão simplesmente deixam de voltar." },
];

const abilities = [
  { icon: MessageCircle, title: "Atende na hora", text: "Responde dúvidas com o jeito do seu salão, mesmo fora do expediente." },
  { icon: CalendarCheck, title: "Organiza a agenda", text: "Encontra horários, agenda serviços e reduz conflitos no dia a dia." },
  { icon: Clock3, title: "Confirma e recupera", text: "Lembra cada cliente e age rápido quando surge uma desistência." },
  { icon: Users, title: "Traz clientes de volta", text: "Identifica quem sumiu e inicia uma conversa pessoal para reativar a relação." },
];

function Home() {
  return (
    <main id="inicio" className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-primary/15 text-primary">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <Brand />
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.12em] md:flex" aria-label="Navegação principal">
            <a href="#como-funciona" className="transition-opacity hover:opacity-60">Como funciona</a>
            <a href="#resultados" className="transition-opacity hover:opacity-60">Por que Clara</a>
          </nav>
          <WhatsAppButton outline label="Falar com a Clara" />
        </div>
      </header>

      <section className="relative min-h-[760px] bg-background text-foreground lg:min-h-[820px]">
        <div className="absolute inset-y-0 right-0 w-full overflow-hidden md:w-[52%]">
          <img src={salonImage} alt="Interior sofisticado de um salão de beleza" width={1280} height={1600} className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-primary/15" />
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gold/20 backdrop-blur-[2px]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/10 md:to-transparent" />
        <div className="relative mx-auto flex min-h-[760px] max-w-[1440px] items-center px-5 pb-16 pt-32 sm:px-8 lg:min-h-[820px] lg:px-14">
          <div className="reveal max-w-4xl">
            <p className="mb-7 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold"><span className="h-px w-9 bg-gold" /> Recepcionista de IA para salões</p>
             <h1 className="font-display max-w-4xl text-6xl leading-[0.9] text-primary sm:text-7xl lg:text-[7.75rem]">Sua recepção<br />nunca mais <em className="font-normal text-gold">para.</em></h1>
            <div className="mt-9 flex max-w-2xl flex-col items-start gap-7 border-l border-gold/60 pl-5 sm:flex-row sm:items-end sm:justify-between sm:pl-7">
               <p className="max-w-md text-base leading-relaxed text-foreground/75 sm:text-lg">Clara atende, agenda, confirma e traz clientes de volta pelo WhatsApp — 24 horas por dia, sem deixar ninguém esperando.</p>
              <WhatsAppButton label="Conhecer a Clara" />
            </div>
          </div>
           <a href="#problema" aria-label="Ver mais" className="absolute bottom-7 right-6 hidden size-11 items-center justify-center rounded-full border border-primary/40 text-primary lg:flex"><ArrowDown className="size-4" /></a>
        </div>
      </section>

      <section id="problema" className="px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <p className="pt-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">O custo do silêncio</p>
            <h2 className="font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">O salão está cheio.<br /><em className="text-primary">O WhatsApp também.</em></h2>
          </div>
          <div className="mt-16 grid border-t border-border md:grid-cols-3">
            {pains.map((pain, index) => <article key={pain.number} className={`editorial-rule pt-10 md:px-8 ${index > 0 ? "mt-10 border-t border-border md:mt-0 md:border-l md:border-t-0" : ""}`}>
              <span className="font-display text-3xl text-gold">{pain.number}</span>
              <h3 className="mt-8 text-xl font-medium leading-snug">{pain.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{pain.text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-wine px-5 py-24 text-primary-foreground sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
          <div className="relative mx-auto w-full max-w-lg">
            <img src={stylistImage} alt="Profissional finalizando o penteado de uma cliente" loading="lazy" width={1600} height={1072} className="aspect-[4/5] w-full object-cover" />
            <div className="absolute -bottom-8 right-0 w-[88%] bg-background p-5 text-foreground shadow-2xl sm:-right-8 sm:w-[78%] sm:p-7">
              <div className="flex items-center justify-between border-b border-border pb-4"><div><p className="font-display text-2xl">Clara</p><p className="text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">online agora</p></div><span className="size-2 rounded-full bg-green-600" /></div>
              <div className="mt-5 space-y-3 text-sm leading-relaxed">
                <div className="mr-8 bg-muted p-3">Oi, Ana! A Camila tem um horário amanhã às 15h. Quer que eu reserve para seu corte?</div>
                <div className="ml-12 bg-primary p-3 text-primary-foreground">Quero sim! ✨</div>
                <div className="mr-8 bg-muted p-3">Prontinho. Amanhã às 15h — te lembro antes do horário.</div>
              </div>
            </div>
          </div>
          <div className="pt-8 lg:pt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Uma recepção que acompanha o seu ritmo</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.02] sm:text-6xl">Ela conversa como gente.<br /><em className="text-gold">E trabalha como ninguém.</em></h2>
            <p className="mt-7 max-w-xl leading-7 text-primary-foreground/70">A Clara aprende os serviços, profissionais e regras do seu salão. Cada conversa é natural, atenciosa e orientada para o próximo agendamento.</p>
            <div className="mt-10 grid gap-7 sm:grid-cols-2">
              {abilities.map(({ icon: Icon, title, text }) => <div key={title} className="border-t border-primary-foreground/20 pt-5"><Icon className="size-5 text-gold" /><h3 className="mt-4 font-medium">{title}</h3><p className="mt-2 text-sm leading-6 text-primary-foreground/60">{text}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="resultados" className="px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1200px] text-center">
          <Sparkles className="mx-auto size-6 text-gold" />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Mais tranquilidade. Mais agenda.</p>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-5xl leading-none sm:text-6xl lg:text-7xl">Sua equipe cuida da beleza.<br /><em className="text-primary">Clara cuida do movimento.</em></h2>
          <div className="mt-16 grid overflow-hidden border border-border text-left lg:grid-cols-2">
            <div className="bg-ivory-deep p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Sem Clara</p>
              <ul className="mt-7 space-y-5 text-sm text-ink-soft">{["Mensagens esperando resposta", "Confirmações feitas às pressas", "Clientes antigos esquecidos", "Operação dependente de uma pessoa"].map(item => <li key={item} className="flex gap-3"><span className="text-primary">—</span>{item}</li>)}</ul>
            </div>
            <div className="bg-primary p-7 text-primary-foreground sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Com Clara</p>
              <ul className="mt-7 space-y-5 text-sm">{["Atendimento imediato, dia e noite", "Agenda confirmada com antecedência", "Reativação contínua e personalizada", "Recepção estável, mesmo nos dias corridos"].map(item => <li key={item} className="flex gap-3"><Check className="size-4 shrink-0 text-gold" />{item}</li>)}</ul>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-6 text-muted-foreground">Pensada para se encaixar na rotina de salões que já usam ferramentas de gestão, inclusive AVEC, sem exigir que sua equipe mude o jeito de trabalhar.</p>
        </div>
      </section>

      <section className="bg-primary px-5 py-20 text-primary-foreground sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-9 lg:flex-row lg:items-end">
          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">A próxima cliente já está chamando</p><h2 className="mt-5 max-w-3xl font-display text-5xl leading-none sm:text-6xl">Deixe a Clara responder.</h2></div>
          <WhatsAppButton outline label="Falar no WhatsApp" />
        </div>
      </section>

      <footer className="bg-wine px-5 py-10 text-primary-foreground sm:px-8 lg:px-14">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-5 border-t border-primary-foreground/15 pt-8 sm:flex-row sm:items-end sm:justify-between"><div><Brand /><p className="mt-3 text-xs text-primary-foreground/50">Recepção inteligente para salões extraordinários.</p></div><p className="text-[0.65rem] uppercase tracking-[0.14em] text-primary-foreground/40">© 2026 CLARAIA</p></div>
      </footer>
    </main>
  );
}