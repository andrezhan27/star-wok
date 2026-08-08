import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import { restaurantConfig } from "@/config/star-wok";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Star Wok | Restaurante Buffet",
  description:
    "Conheça o Star Wok, um restaurante buffet em São Domingos de Rana com um espaço amplo e uma experiência inspirada no universo.",
  icons: {
    icon: "/images/star-wok-avatar.png",
    shortcut: "/images/star-wok-avatar.png",
    apple: "/images/star-wok-avatar.png",
  },
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    locale: "pt_PT",
    type: "website",
    siteName: restaurantConfig.name,
    title: "Star Wok | Restaurante Buffet",
    description:
      "Conheça o Star Wok, um restaurante buffet em São Domingos de Rana com um espaço amplo e uma experiência inspirada no universo.",
    ...(siteUrl
      ? {
          images: [
            {
              url: "/images/hero-image.jpg",
              width: 2138,
              height: 1446,
              alt: "Interior do Star Wok",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Star Wok | Restaurante Buffet",
    description:
      "Um restaurante buffet em São Domingos de Rana com uma experiência inspirada no universo.",
    ...(siteUrl ? { images: ["/images/hero-image.jpg"] } : {}),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#010a2a",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt" data-scroll-behavior="smooth" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
