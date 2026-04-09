import { Mic2, Radio, Theater } from "lucide-react";

const classes = [
  {
    title: "Aula para iniciantes",
    description:
      "Base tecnica para respirar melhor, afinar com consistencia e cantar com confianca.",
    icon: Mic2,
  },
  {
    title: "Tecnica vocal avancada",
    description:
      "Aprimore apoio, ressonancia, extensao e controle dinamico para alto desempenho.",
    icon: Radio,
  },
  {
    title: "Preparacao para apresentacoes",
    description:
      "Treine interpretacao, presenca de palco e repertorio para shows, testes e eventos.",
    icon: Theater,
  },
];

export function Services() {
  return (
    <section
      id="aulas"
      className="section-shell relative w-full min-w-0 py-16 sm:py-20"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/3 -z-10 h-72 w-72 translate-x-1/3 rounded-full bg-[#8ec5ff]/12 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-56 w-56 rounded-full bg-[#1e4c9a]/25 blur-3xl"
        aria-hidden
      />

      <header className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
        <p className="section-subtitle">Aulas</p>
        <h2 className="section-title mt-3">
          Programas para cada etapa da sua evolucao
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-blue-200/90">
          Trilhas pensadas do primeiro contato com a tecnica ate a performance
          em cena, sempre com acompanhamento proximo.
        </p>
      </header>

      <div className="grid min-w-0 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {classes.map(({ title, description, icon: Icon }, index) => (
          <article
            key={title}
            className="fade-in-up glass soft-hover group relative overflow-hidden rounded-2xl p-7 shadow-xl shadow-black/20"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <span
              className="pointer-events-none absolute -right-1 top-3 select-none text-[4.5rem] font-bold leading-none text-white/[0.05] transition duration-500 group-hover:text-white/[0.08]"
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8ec5ff]/35 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
              aria-hidden
            />
            <div className="relative">
              <div className="mb-5 inline-flex rounded-xl bg-[#8ec5ff]/10 p-3.5 ring-1 ring-[#8ec5ff]/20 transition duration-300 group-hover:bg-[#8ec5ff]/15 group-hover:ring-[#8ec5ff]/35">
                <Icon className="size-5 text-[#8ec5ff] transition duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-blue-100/95">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
