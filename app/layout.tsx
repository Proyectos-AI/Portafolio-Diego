import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diego Soto | Full Stack & AI Engineer",
  description:
    "Arquitecto de experiencias digitales y soluciones de inteligencia artificial. Portafolio profesional.",
  openGraph: {
    title: "Diego Soto | Full Stack & AI Engineer",
    description:
      "Arquitecto de experiencias digitales y soluciones de IA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800&f[]=satoshi@300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
