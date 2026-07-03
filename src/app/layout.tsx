import type { Metadata } from "next";
import {
  Montserrat,
  Cormorant_Garamond,
  UnifrakturMaguntia,
} from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const gothic = UnifrakturMaguntia({
  variable: "--font-gothic",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gold Barber Studio — Premium Cuts",
  description:
    "Clásico. Premium. Editorial. Experimenta el nivel más alto de precisión, cuidado y estilo en cada corte. Gold Barber Studio, Santiago.",
  keywords: ["barbería", "corte de pelo", "barber shop", "premium", "santiago"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${cormorant.variable} ${gothic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
