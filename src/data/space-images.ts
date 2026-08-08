import type { Locale } from "@/content/star-wok-content";

export type SpaceImage = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
};

const imagesByLocale: Record<Locale, SpaceImage[]> = {
  pt: [
    { id: "main-area", src: "/images/space-1.png", alt: "Área principal do Star Wok com planetas iluminados e teto estrelado", caption: "Área Principal" },
    { id: "cupulas-dome", src: "/images/space-2.png", alt: "Área de mesas do Star Wok com cúpulas reservadas", caption: "Cúpulas" },
    { id: "common-area-one", src: "/images/space-3.png", alt: "Área comum do Star Wok preparada para receber clientes", caption: "Área Comum" },
    { id: "common-area-two", src: "/images/space-4.png", alt: "Área comum ampla do Star Wok com mesas compridas", caption: "Área Comum" },
    { id: "vip-room-one", src: "/images/space-5.png", alt: "Sala VIP do Star Wok com mesa redonda e iluminação lunar", caption: "Sala VIP" },
    { id: "vip-room-two", src: "/images/space-6.png", alt: "Sala VIP privada do Star Wok com iluminação azul", caption: "Sala VIP" },
  ],
  en: [
    { id: "main-area", src: "/images/space-1.png", alt: "Star Wok main area with illuminated planets and a starry ceiling", caption: "Main Area" },
    { id: "cupulas-dome", src: "/images/space-2.png", alt: "Star Wok dining area with private domes", caption: "Domes" },
    { id: "common-area-one", src: "/images/space-3.png", alt: "Star Wok common dining area ready for guests", caption: "Common Area" },
    { id: "common-area-two", src: "/images/space-4.png", alt: "Spacious Star Wok common area with long tables", caption: "Common Area" },
    { id: "vip-room-one", src: "/images/space-5.png", alt: "Star Wok VIP room with a round table and moon lighting", caption: "VIP Room" },
    { id: "vip-room-two", src: "/images/space-6.png", alt: "Private Star Wok VIP room with blue lighting", caption: "VIP Room" },
  ],
};

export function getSpaceImages(locale: Locale) {
  return imagesByLocale[locale];
}
