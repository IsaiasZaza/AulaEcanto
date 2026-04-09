import { Award, Music2, Users } from "lucide-react";

const highlights = [
  { icon: Award, title: "12+ anos de experiencia" },
  { icon: Users, title: "Mais de 500 alunos orientados" },
  { icon: Music2, title: "Metodo pratico e humanizado" },
];

export function About() {
  return (
    <section
      id="sobre"
      className="section-shell relative w-full min-w-0 py-16 sm:py-20"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-12 -z-10 h-px w-[min(100%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden
      />

      <div className="grid min-w-0 grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
        <div className="fade-in-up min-w-0 space-y-6">
          <div>
            <p className="section-subtitle mb-3">Sobre o estudio</p>
            <h2 className="section-title accent-line">
              Julio Petros e Thassya Helena
            </h2>
          </div>
          <div className="space-y-4 text-pretty">
            <p className="text-base leading-relaxed text-blue-100">
              No Estudio Vocal, cada aula e desenhada para seu momento vocal:
              iniciacao, aperfeicoamento tecnico ou preparacao artistica. O foco
              e resultado real, sem formulas prontas.
            </p>
            <p className="text-sm leading-relaxed text-blue-200/95">
              Metodologia com acompanhamento de evolucao, orientacoes praticas e
              ajustes personalizados para voce cantar com liberdade.
            </p>
          </div>
        </div>

        <aside
          className="fade-in-up min-w-0 space-y-3 lg:border-l lg:border-white/10 lg:pl-10"
          style={{ animationDelay: "0.12s" }}
        >
          <p className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-[#8ec5ff]/80">
            Em numeros
          </p>
          <ul className="grid gap-3">
            {highlights.map(({ icon: Icon, title }) => (
              <li key={title}>
                <article className="glass soft-hover flex items-center gap-4 rounded-2xl p-4 sm:p-5">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#8ec5ff]/10 ring-1 ring-[#8ec5ff]/18">
                    <Icon className="size-[1.15rem] text-[#8ec5ff]" />
                  </div>
                  <p className="text-sm font-medium leading-snug text-blue-50">
                    {title}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
