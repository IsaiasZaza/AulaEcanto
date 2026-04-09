"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    id: "1",
    name: "Iarla Ribeiro",
    role: "Cantora iniciante",
    quote:
      "Professor muito bom,as aulas dele são muito produtivas e claras. Vale super a pena, indico demais!",
    photo: "/avatars/ana.svg",
  },
  {
    id: "2",
    name: "Jack Helen",
    role: "Musico independente",
    quote:
      "Tive uma experiência excelente na aula com o professor Julio! A didática é clara e a aula foi muito proveitosa. Saí realmente surpreendida e motivada a continuar aprendendo. Recomendo muito!",
    photo: "/avatars/ana.svg",
  },
  {
    id: "3",
    name: "Helen Veríssimo",
    role: "Atriz e cantora",
    quote:
      "Um professor maravilhoso, ele é excelente no conteúdo, muito inteligente e experiente, totalmente capaz de nos levar a alcançarmos nossos objetivos! Altamente recomendado!",
    photo: "/avatars/mariana.svg",
  },
  {
    id: "4",
    name: "Bárbara Vaz",
    role: "Compositor",
    quote:
      "A aula de canto com o professor Júlio é simplesmente incrível! Nunca tinha feito antes e me surpreendi muito. A didática dele é sensacional, e dá pra sentir o amor que ele tem pelo que faz. Super indico é um profissional maravilhoso",
    photo: "/avatars/lucas.svg",
  },
  {
    id: "5",
    name: "Luciana Lisboa",
    role: "Professora de musica",
    quote:
      "Maravilhoso professor! Didática excelente! Além de muito conhecimento, sabe transmitir com clareza e habilidade. O resultado é garantido!",
    photo: "/avatars/ana.svg",
  },
  {
    id: "6",
    name: "nana.",
    role: "Cantor de bar",
    quote:
      "o estúdio é maravilhoso!! os professores Júlio e Thassya são super atenciosos, com certeza recomendo muito. 🤍 …",
    photo: "/avatars/mariana.svg",
  },
  {
    id: "7",
    name: "Flavia Luciene",
    role: "Estudante de teatro musical",
    quote:
      "Aula muito rica...Aconselho vc q está lendo essa mensagem colar nele q vai dar bom, grandes conhecimentos ele tem.",
    photo: "/avatars/ana.svg",
  },
  {
    id: "8",
    name: "Diego Almeida",
    role: "Produtor e vocalista",
    quote:
      "Gravo com mais consistencia e menos takes. A tecnica que aprendi aqui entrou direto no meu fluxo no home studio.",
    photo: "/avatars/lucas.svg",
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="size-3.5 fill-[#8ec5ff] text-[#8ec5ff] sm:size-4"
        />
      ))}
    </div>
  );
}

type Testimonial = (typeof testimonials)[number];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="glass soft-hover group relative h-full overflow-hidden rounded-2xl p-6 shadow-xl shadow-black/25 transition-[box-shadow,transform] duration-300 sm:p-7">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8ec5ff]/70 to-transparent opacity-80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-[#8ec5ff]/[0.12] blur-3xl transition-opacity duration-500 group-hover:bg-[#8ec5ff]/[0.18]"
        aria-hidden
      />

      <Quote
        className="pointer-events-none absolute right-4 top-4 size-14 text-[#8ec5ff]/15 transition-transform duration-500 group-hover:scale-105 group-hover:text-[#8ec5ff]/25 sm:right-5 sm:top-5 sm:size-16"
        strokeWidth={1}
        aria-hidden
      />

      <div className="relative flex h-full flex-col gap-5">
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <span
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8ec5ff]/50 to-transparent opacity-60 blur-md"
              aria-hidden
            />
            <Image
              src={item.photo}
              alt={`Foto de ${item.name}`}
              width={56}
              height={56}
              className="relative rounded-full object-cover ring-2 ring-[#8ec5ff]/35 ring-offset-2 ring-offset-[#08172d]/80"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-semibold tracking-tight text-white">{item.name}</p>
            <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-[#8ec5ff]/90">
              {item.role}
            </p>
            <div className="mt-2.5">
              <StarRow />
            </div>
          </div>
        </div>

        <blockquote className="relative m-0 border-l-2 border-[#8ec5ff]/50 pl-4">
          <p className="text-[0.9375rem] font-light italic leading-relaxed text-blue-50/95 sm:text-base">
            {item.quote}
          </p>
        </blockquote>
      </div>
    </article>
  );
}

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      skipSnaps: false,
      dragFree: false,
    },
    []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onReInit = useCallback(() => {
    if (!emblaApi) return;
    setSnapCount(emblaApi.scrollSnapList().length);
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onReInit();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onReInit);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onReInit);
    };
  }, [emblaApi, onSelect, onReInit]);

  return (
    <section
      id="depoimentos"
      className="section-shell w-full min-w-0 py-16 sm:py-20"
    >
      <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
        <p className="section-subtitle">Depoimentos</p>
        <h2 className="section-title mt-3">
          Alunos que ja sentiram a diferenca
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-blue-100/90 sm:text-base">
          Historias reais de quem transformou a voz e a confianca no palco.
        </p>
      </div>

      <div
        className="relative min-w-0 max-w-full"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Depoimentos de alunos"
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y gap-5 sm:gap-6 [-webkit-tap-highlight-color:transparent]">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="min-w-0 shrink-0 grow-0 basis-[min(100%,22rem)] sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]"
              >
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-5 sm:mt-10 sm:flex-row sm:justify-center sm:gap-8">

          <div
            className="flex max-w-full flex-wrap justify-center gap-2 px-2"
            role="group"
            aria-label="Ir para um depoimento"
          >
            {Array.from({ length: snapCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Depoimento ${index + 1} de ${snapCount}`}
                aria-current={index === selectedIndex ? "true" : undefined}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ec5ff] ${index === selectedIndex
                    ? "w-8 bg-[#8ec5ff]"
                    : "w-2 bg-white/25 hover:bg-white/40"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
