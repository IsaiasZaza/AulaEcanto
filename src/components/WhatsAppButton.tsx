import { MessageCircleMore } from "lucide-react";

type WhatsAppButtonProps = {
  label: string;
  className?: string;
};

const whatsappHref = "https://wa.me/556192289797";

export function WhatsAppButton({ label, className = "" }: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-glow inline-flex items-center justify-center gap-2 rounded-full bg-[#8ec5ff] px-6 py-3 text-sm font-semibold text-[#0b1f3a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b4daff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ec5ff] ${className}`}
      aria-label={label}
    >
      <MessageCircleMore className="size-4" />
      {label}
    </a>
  );
}
