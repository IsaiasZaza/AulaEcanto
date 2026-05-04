import { MessageCircleMore } from "lucide-react";

type WhatsAppButtonProps = {
  label: string;
  className?: string;
};

const whatsappHref = "https://wa.me/556196999515";

export function WhatsAppButton({ label, className = "" }: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-glow inline-flex items-center justify-center gap-2 rounded-full bg-[#84d7ff] px-6 py-3 text-sm font-semibold text-[#061020] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b8e7ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#84d7ff] ${className}`}
      aria-label={label}
    >
      <MessageCircleMore className="size-4 shrink-0" />
      {label}
    </a>
  );
}
