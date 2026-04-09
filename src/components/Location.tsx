import { ExternalLink, MapPin, Navigation } from "lucide-react";

// Link para abrir o Maps no celular / nova aba (mesmo ponto do mapa embutido)
const GOOGLE_MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=-15.867817499999997,-48.078938699999995";

// src do iframe: Google Maps → Compartilhar → Incorporar um mapa
const GOOGLE_MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.7864454278592!2d-48.078938699999995!3d-15.867817499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2d599a247baf%3A0x18ff99f935fb8fb2!2sAula%20de%20Canto%20-%20Est%C3%BAdio%20Vocal%20-%20Julio%20Petros%20e%20Thassya%20Helena!5e0!3m2!1spt-BR!2sbr!4v1775695121959!5m2!1spt-BR!2sbr";

export function Location() {
  const hasLink = GOOGLE_MAPS_LINK.length > 0;
  const hasEmbed = GOOGLE_MAPS_EMBED_SRC.length > 0;

  return (
    <section
      id="localizacao"
      className="section-shell relative w-full min-w-0 py-16 sm:py-20"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/4 -z-10 h-64 w-64 translate-x-1/4 rounded-full bg-[#8ec5ff]/10 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
        <p className="section-subtitle">Localizacao</p>
        <h2 className="section-title mt-3">Venha nos visitar</h2>
        <p className="mt-4 text-sm leading-relaxed text-blue-100/90 sm:text-base">
          Estamos prontos para te receber. Abra o mapa, trace a rota ou veja o
          endereco incorporado abaixo.
        </p>
      </div>

      <div className="fade-in-up glass relative overflow-hidden rounded-3xl shadow-2xl shadow-black/25">
        <div
          className="absolute inset-x-0 top-0 z-10 h-px bg-linear-to-r from-transparent via-[#8ec5ff]/45 to-transparent"
          aria-hidden
        />

        <div className="grid min-w-0 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] lg:items-stretch">
          {/* Coluna texto: altura natural; no desktop centraliza em relacao ao mapa */}
          <div className="relative flex min-w-0 flex-col justify-center gap-8 p-6 sm:p-8 lg:p-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              aria-hidden
              style={{
                backgroundImage: `
                  linear-gradient(rgba(142, 197, 255, 0.12) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(142, 197, 255, 0.12) 1px, transparent 1px)
                `,
                backgroundSize: "28px 28px",
              }}
            />
            <div className="relative">
              <div className="inline-flex rounded-xl bg-[#8ec5ff]/10 p-3 ring-1 ring-[#8ec5ff]/22">
                <MapPin className="size-6 text-[#8ec5ff]" aria-hidden />
              </div>
              <p className="mt-5 text-lg font-semibold tracking-tight text-white">
                Estudio Vocal
              </p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-blue-200">
                Use o Google Maps para rotas em carro, transporte publico ou a pe.
              </p>
            </div>

            {hasLink ? (
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full bg-[#8ec5ff] px-6 py-3.5 text-sm font-semibold text-[#0b1f3a] shadow-lg shadow-[#8ec5ff]/20 transition hover:-translate-y-0.5 hover:bg-[#b4daff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ec5ff] sm:w-auto"
              >
                <Navigation className="size-4 shrink-0" aria-hidden />
                Abrir no Google Maps
                <ExternalLink className="size-3.5 shrink-0 opacity-80" aria-hidden />
              </a>
            ) : (
              <p className="relative text-sm text-amber-200/90">
                Defina{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-blue-100">
                  GOOGLE_MAPS_LINK
                </code>{" "}
                no arquivo Location.tsx
              </p>
            )}
          </div>

          {/* Mapa: altura fixa no mobile; no desktop preenche a linha do grid com min-h-0 */}
          <div className="relative min-h-0 min-w-0 border-t border-white/10 lg:border-l lg:border-t-0">
            {hasEmbed ? (
              <div
                className="relative aspect-5/4 w-full min-w-0 overflow-hidden sm:aspect-16/10 lg:aspect-auto lg:h-full lg:min-h-[min(24rem,55vh)]"
              >
                <iframe
                  title="Mapa do Estudio Vocal no Google Maps"
                  src={GOOGLE_MAPS_EMBED_SRC}
                  className="pointer-events-auto absolute inset-0 box-border block h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="flex min-h-[240px] flex-col items-center justify-center gap-3 bg-[#061326]/50 p-8 text-center lg:min-h-[320px]">
                <Navigation
                  className="size-10 text-[#8ec5ff]/40"
                  strokeWidth={1.25}
                  aria-hidden
                />
                <p className="max-w-xs text-sm text-blue-200/90">
                  Para o mapa interativo aqui, abra o Google Maps,{" "}
                  <strong className="font-medium text-blue-100">
                    Incorporar mapa
                  </strong>{" "}
                  e cole o <code className="rounded bg-white/10 px-1 text-xs">src</code>{" "}
                  em{" "}
                  <code className="rounded bg-white/10 px-1 text-xs">
                    GOOGLE_MAPS_EMBED_SRC
                  </code>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
