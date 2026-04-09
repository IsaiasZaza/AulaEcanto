import { ClipboardCheck, MessageCircle, Route } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const benefits = [
  {
    text: "Aula experimental com direcao clara",
    icon: ClipboardCheck,
  },
  {
    text: "Plano inicial alinhado ao seu objetivo",
    icon: Route,
  },
  {
    text: "Atendimento direto pelo WhatsApp",
    icon: MessageCircle,
  },
] as const;

export function Contact() {
  return (
    <section
      id="contato"
      className="section-shell relative w-full min-w-0 py-16 sm:py-20"
    >
      <div
        className="pointer-events-none absolute left-1/2 bottom-0 -z-10 h-56 w-[min(100%,40rem)] -translate-x-1/2 translate-y-1/3 rounded-full bg-[#1e4c9a]/18 blur-3xl"
        aria-hidden
      />

      <div className="fade-in-up glass relative overflow-hidden rounded-3xl shadow-2xl shadow-black/25">
        <div
          className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#8ec5ff]/45 to-transparent"
          aria-hidden
        />
        <div
          className="absolute -left-20 top-1/4 h-48 w-48 -translate-y-1/2 rounded-full bg-[#8ec5ff]/14 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-16 bottom-0 h-52 w-52 translate-y-1/4 rounded-full bg-[#1e4c9a]/28 blur-3xl"
          aria-hidden
        />

        <div className="relative grid min-w-0 grid-cols-1 gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1fr_min(26rem,100%)] lg:items-center lg:gap-14 lg:px-12 lg:py-14">
          <div className="min-w-0 text-center lg:text-left">
            <p className="section-subtitle">Contato</p>
            <h2 className="section-title mx-auto mt-3 max-w-xl text-pretty lg:mx-0">
              Pronto para destravar sua melhor versao?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-blue-100 sm:text-base lg:mx-0">
              Agende sua aula experimental e receba um plano inicial feito para
              o que voce quer conquistar com a voz.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <WhatsAppButton
                label="Quero agendar no WhatsApp"
                className="px-10 py-4 text-base"
              />
            </div>
          </div>

          <div className="relative min-w-0">
            <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-[#8ec5ff]/85 lg:text-left">
              O que voce leva
            </p>
            <ul
              className="divide-y divide-white/8 overflow-hidden rounded-2xl border border-white/10 bg-[#061326]/55 ring-1 ring-white/4"
              role="list"
            >
              {benefits.map(({ text, icon: Icon }, index) => (
                <li key={text}>
                  <div className="flex gap-4 px-4 py-4 sm:px-5 sm:py-5">
                    <div className="flex shrink-0 items-center gap-3">
                      <span
                        className="font-mono text-[0.65rem] font-medium tabular-nums text-[#8ec5ff]/45"
                        aria-hidden
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex size-11 items-center justify-center rounded-xl bg-[#8ec5ff]/10 ring-1 ring-[#8ec5ff]/20">
                        <Icon className="size-[1.15rem] text-[#8ec5ff]" />
                      </div>
                    </div>
                    <p className="min-w-0 flex-1 self-center text-sm font-medium leading-snug text-blue-50">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
