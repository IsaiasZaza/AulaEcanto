import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-w-0 overflow-hidden pt-16 sm:pt-32"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_#173150_0%,_#091120_54%,_#050b14_100%)]" />
      <div className="absolute -left-16 top-20 -z-10 h-52 w-52 rounded-full bg-[#84d7ff]/14 blur-3xl" />
      <div className="absolute -right-10 bottom-8 -z-10 h-60 w-60 rounded-full bg-[#84d7ff]/10 blur-3xl" />

      <div className="section-shell relative grid min-w-0 grid-cols-1 items-center gap-10 py-16 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="fade-in-up min-w-0 space-y-6">
          <span className="glass flex w-full max-w-full flex-wrap items-center gap-2 rounded-2xl px-4 py-3 text-xs leading-snug text-blue-100 sm:inline-flex sm:w-auto sm:rounded-full sm:py-2">
            <Sparkles className="size-4 shrink-0 text-[#84d7ff]" />
            <span className="min-w-0">
              Metodo moderno com foco em evolucao real
            </span>
          </span>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Cante com confianca e{" "}
            <span className="text-[#84d7ff]">resultado desde as primeiras aulas</span>
          </h1>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-blue-100 sm:text-lg">
            No Estudio Vocal, Julio Petros e Thassya Helena guiam sua evolucao
            com tecnica, direcao artistica e plano individual para sua voz.
          </p>
          <ul className="grid gap-2.5 text-sm text-blue-50/95 sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0 text-[#d4f08e]" />
              Aula experimental personalizada
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0 text-[#d4f08e]" />
              Correcoes praticas em tempo real
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0 text-[#d4f08e]" />
              Treino para palco e estudio
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0 text-[#d4f08e]" />
              Atendimento rapido pelo WhatsApp
            </li>
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton
              label="Agendar minha aula"
              className="w-full max-w-md px-8 py-3.5 text-sm sm:w-auto sm:text-base"
            />
            <a href="#depoimentos" className="inline-flex items-center gap-2 text-sm font-medium text-blue-100 transition hover:text-white">
              Ver resultados dos alunos
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

        <div
          className="fade-in-up min-w-0 glass soft-hover rounded-3xl p-5 shadow-2xl shadow-black/30"
          style={{ animationDelay: "0.15s" }}
        >
          <div className="relative">
            <Image
              src="/Julio.jpeg"
              alt="Professor Julio em aula de canto"
              width={640}
              height={640}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="h-auto w-full rounded-2xl"
              priority
            />
            <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/20 bg-[#050b14]/65 p-3 backdrop-blur">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#84d7ff]">
                Estudio Vocal
              </p>
              <p className="mt-1 text-sm text-blue-50">
                +500 alunos orientados com tecnica e expressao.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
