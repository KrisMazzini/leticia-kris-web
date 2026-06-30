import type { Metadata } from "next";
import { Caveat, Karla, Spectral } from "next/font/google";

import "./globals.css";

import { CartDrawer } from "@/features/gifts/components/cart-drawer";
import { CartProvider } from "@/features/gifts/context/cart-context";
import { Header } from "@/shared/components/header";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-karla",
});

export const metadata: Metadata = {
  title: "Chá de Casa Nova — Letícia & Kris",
  description: "Lista de presentes para o chá de casa nova de Kris e Letícia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${caveat.variable} ${spectral.variable} ${karla.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans">
        <CartProvider>
          <Header />
          <CartDrawer />

          <div className="overflow-x-hidden flex-1">{children}</div>
        </CartProvider>
      </body>
    </html>
  );
}
