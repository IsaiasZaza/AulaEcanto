"use client";

import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { WhatsAppButton } from "./WhatsAppButton";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Aulas", href: "#aulas" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Local", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
] as const;

function isHashHref(href: string): href is `#${string}` {
  return href.startsWith("#") && href.length > 1;
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#inicio");
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!isHashHref(href)) return;
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveHash(href);
      closeMenu();
    },
    [closeMenu],
  );

  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 20);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    const observed = navItems
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter((el): el is HTMLElement => Boolean(el));

    if (observed.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveHash(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.4, 0.7] },
    );

    observed.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-[#0b1f3a]/70 backdrop-blur-sm transition-[opacity,visibility] duration-300 ease-out lg:hidden ${menuOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
          }`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-2xl transition-all duration-300 ${isScrolled
            ? "border-white/15 bg-[#060d18]/92 shadow-lg shadow-black/30"
            : "border-white/10 bg-[#060d18]/74"
          }`}
      >
        <div className="relative">
          <div className="section-shell flex min-w-0 items-center justify-between gap-4 py-3 sm:py-3.5">
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, "#inicio")}
              className="shrink-0 text-lg font-semibold tracking-tight text-white transition-colors hover:text-[#84d7ff] sm:text-xl"
            >
              Estudio <span className="text-[#84d7ff]">Vocal</span>
            </a>

            <nav
              className="hidden flex-1 items-center justify-center px-2 lg:flex"
              aria-label="Principal"
            >
              <ul className="flex items-center justify-center gap-1 xl:gap-3 2xl:gap-5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`inline-flex whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200 ease-out ${activeHash === item.href
                          ? "bg-white/12 text-white ring-1 ring-white/20"
                          : "text-white/85 hover:bg-white/10 hover:text-white"
                        }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              <div className="hidden lg:block">
                <WhatsAppButton
                  label="Agende sua aula"
                  className="px-4 py-2.5 text-xs xl:px-5 xl:py-3 xl:text-sm"
                />
              </div>
              <button
                type="button"
                className="relative inline-flex size-11 items-center justify-center rounded-xl text-white ring-1 ring-white/15 transition-[color,background-color,ring-color] duration-200 ease-out hover:bg-white/10 hover:ring-white/25 lg:hidden"
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                onClick={() => setMenuOpen((open) => !open)}
              >
                <Menu
                  className={`size-6 transition-all duration-300 ease-out ${menuOpen ? "scale-0 rotate-90 opacity-0" : "scale-100 opacity-100"
                    }`}
                  aria-hidden
                />
                <X
                  className={`absolute size-6 transition-all duration-300 ease-out ${menuOpen ? "scale-100 opacity-100" : "scale-0 -rotate-90 opacity-0"
                    }`}
                  aria-hidden
                />
              </button>
            </div>
          </div>

          <nav
            id="mobile-navigation"
            aria-label="Principal"
            inert={!menuOpen ? true : undefined}
            className={`absolute left-0 right-0 top-full overflow-hidden border-b border-white/10 bg-[#08172d]/95 backdrop-blur-2xl transition-[opacity,transform,visibility] duration-300 ease-out lg:hidden ${menuOpen
                ? "visible translate-y-0 opacity-100"
                : "pointer-events-none invisible -translate-y-3 opacity-0"
              }`}
          >
            <ul className="section-shell flex flex-col gap-0.5 py-4 pb-5">
              <li className="px-3 pb-3">
                <WhatsAppButton
                  label="Agende sua aula no WhatsApp"
                  className="w-full max-w-full justify-center px-4 py-3 text-sm"
                />
              </li>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block rounded-xl px-3 py-3 text-base font-medium transition-[background-color,color,transform] duration-200 ease-out active:scale-[0.99] ${activeHash === item.href
                        ? "bg-[#84d7ff]/15 text-white"
                        : "text-white/95 hover:bg-white/10 hover:text-white"
                      }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
