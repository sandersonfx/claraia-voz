import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, CalendarCheck, Users, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import claraiaLogo from "@/assets/claraia-logo.png";

// TODO: trocar pelo link real do grupo de WhatsApp da live.
const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/SEU_LINK_AQUI";

export const Route = createFileRoute("/live")({
  head: () => ({
    meta: [
      { title: "Ao vivo: o custo do silêncio no seu salão | CLARAIA" },
      {
        name: "description",
        content:
          "Entre no grupo e participe ao vivo: como salões param de perder cliente por silêncio no WhatsApp, sem contratar mais ninguém.",
      },
      { property: "og:title", content: "Ao vivo: o custo do silêncio no seu salão" },
      {
        property: "og:description",
        content: "Entre no grupo pra participar da live com a CLARAIA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LivePage,
});

const highlights = [
  { icon: MessageCircle, text: "Por que mensagem sem resposta vira cliente perdido" },
  { icon: CalendarCheck, text: "O aviso simples que reduz falta sem ninguém ligar" },
  { icon: Users, text: "Como encontrar cliente que sumiu e trazer de volta" },
];

function LivePage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b border-primary/15 px-5 py-6 sm:px-8">
        <img src={claraiaLogo} alt="CLARAIA" width={1536} height={512} className="h-auto w-32" />
      </header>

      <section className="flex flex-1 items-center px-5 py-16 sm:px-8">
        <div className="mx-auto w-full max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-9 bg-gold" /> Ao vivo · vaga limitada
          </p>

          <h1 className="font-display text-5xl leading-[1.02] text-primary sm:text-6xl">
            Seu salão perde cliente
            <br />
            todo <em className="font-normal text-gold">santo dia.</em>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/75">
            Entre no grupo pra participar ao vivo: como um salão parou de
            perder agendamento por demora no WhatsApp — sem contratar mais
            ninguém pra recepção.
          </p>

          <div className="mt-9">
            <Button asChild variant="editorial" size="editorial">
              <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" />
                Entrar no grupo do WhatsApp
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>

          <div className="mt-14 space-y-5 border-t border-border pt-10">
            {highlights.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-4">
                <Icon className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                <p className="text-sm leading-6 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3 text-xs text-muted-foreground">
            <Clock3 className="size-4" aria-hidden="true" />
            Data e horário confirmados no grupo, assim que você entrar.
          </div>
        </div>
      </section>
    </main>
  );
}
