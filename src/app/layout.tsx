import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aula de Canto | Estudio Vocal",
  description:
    "Estudio Vocal com Julio Petros e Thassya Helena para evolucao tecnica, interpretacao e performance.",
  keywords: [
    "aulas de canto",
    "estudio vocal",
    "julio petros",
    "thassya helena",
    "técnica vocal",
    "professor de canto",
  ],
  openGraph: {
    title: "Aula de Canto | Estudio Vocal",
    description:
      "Aulas de canto com Julio Petros e Thassya Helena. Evolucao vocal moderna e profissional.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full w-full min-w-0 flex-col overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
