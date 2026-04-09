import Image from "next/image";
import { Sparkles } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-w-0 overflow-hidden pt-16 sm:pt-32"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_#285cb8_0%,_#173869_40%,_#0b1f3a_75%)]" />
      <div className="absolute -left-16 top-20 -z-10 h-52 w-52 rounded-full bg-[#8ec5ff]/20 blur-3xl" />
      <div className="absolute -right-10 bottom-8 -z-10 h-60 w-60 rounded-full bg-[#1e4c9a]/40 blur-3xl" />

      <div className="section-shell grid min-w-0 grid-cols-1 items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="fade-in-up min-w-0 space-y-6">
          <span className="glass flex w-full max-w-full flex-wrap items-center gap-2 rounded-2xl px-4 py-3 text-xs leading-snug text-blue-100 sm:inline-flex sm:w-auto sm:rounded-full sm:py-2">
            <Sparkles className="size-4 shrink-0 text-[#8ec5ff]" />
            <span className="min-w-0">
              Aula de Canto · Estudio Vocal · Julio Petros e Thassya Helena
            </span>
          </span>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Descubra o poder da sua voz
          </h1>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-blue-100 sm:text-lg">
            Treinamento vocal com didatica moderna para voce cantar com
            seguranca, emocao e identidade propria em qualquer repertorio.
          </p>
          <WhatsAppButton
            label="Fale no WhatsApp"
            className="w-full max-w-md px-8 py-3.5 text-sm sm:w-auto sm:text-base"
          />
        </div>

        <div
          className="fade-in-up min-w-0 glass soft-hover rounded-3xl p-5 shadow-2xl shadow-black/30"
          style={{ animationDelay: "0.15s" }}
        >
          <Image
            src="/4.jpeg"
            alt="Ilustração de cantora em aula de canto"
            width={640}
            height={640}
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="h-auto w-full rounded-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
