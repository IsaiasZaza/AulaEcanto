import { Camera, Music, PlayCircle } from "lucide-react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Aulas", href: "#aulas" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Local", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
] as const;

const socialLinks = [
  { icon: Camera, href: "https://www.instagram.com/professordecanto.julio/", label: "Instagram" },
  { icon: PlayCircle, href: "https://wa.me/556196999515", label: "YouTube" },
  { icon: Music, href: "https://www.youtube.com/watch?v=LBFiG7Gwudw", label: "TikTok" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-12 w-full min-w-0 border-t border-white/10">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden
      />
      <div className="section-shell py-10 sm:py-12">
        <div className="flex min-w-0 flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="min-w-0 max-w-md space-y-3">
            <a
              href="#inicio"
              className="inline-block text-xl font-semibold tracking-tight text-white transition hover:text-[#8ec5ff]"
            >
              Estudio Vocal
            </a>
            <p className="text-sm leading-relaxed text-blue-200">
              Aula de canto com Julio Petros e Thassya Helena — tecnica, arte e
              acompanhamento de perto.
            </p>
          </div>

          <nav
            className="flex flex-col gap-3 lg:items-end"
            aria-label="Mapa do site"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8ec5ff]/80">
              Navegacao
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 lg:justify-end">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm font-medium text-blue-100/90 transition hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3 lg:items-end">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8ec5ff]/80">
              Redes
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass soft-hover flex size-10 items-center justify-center rounded-xl text-blue-100 ring-1 ring-white/[0.06] transition-colors hover:text-white"
                  aria-label={label}
                >
                  <Icon className="size-[1.05rem]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-blue-200/90">
            © {year} Voz & Arte. Todos os direitos reservados.
          </p>
          <p className="text-xs text-blue-200/80">
            Julio Petros e Thassya Helena · Estudio Vocal
          </p>
        </div>
      </div>
    </footer>
  );
}
