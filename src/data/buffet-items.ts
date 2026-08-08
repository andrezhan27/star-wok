import type { Locale } from "@/content/star-wok-content";

export type BuffetItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
};

const buffetItemsByLocale: Record<Locale, BuffetItem[]> = {
  pt: [
    { id: "hot-dishes", name: "Pratos quentes", description: "Carnes, marisco e legumes salteados.", image: "/images/buffet-1.png", alt: "Buffet de pratos quentes com carne, camarão, marisco e legumes" },
    { id: "classic-sushi", name: "Sushi clássico", description: "Maki, nigiri e peças frescas variadas.", image: "/images/buffet-2.png", alt: "Seleção de maki, nigiri e camarão no buffet de sushi" },
    { id: "sushi-selection", name: "Seleção de sushi", description: "Combinados coloridos de sushi e sashimi.", image: "/images/buffet-3.png", alt: "Travessa com uma seleção colorida de sushi e sashimi" },
    { id: "fresh-fish", name: "Ingredientes frescos para grelhar", description: "Peixe, salmão e carnes frescas.", image: "/images/buffet-4.png", alt: "Bancada refrigerada com peixe, salmão e carnes" },
    { id: "shellfish", name: "Marisco", description: "Marisco fresco em exposição (consoante a estação).", image: "/images/buffet-5.png", alt: "Buffet de marisco fresco em exposição" },
    { id: "desserts", name: "Sobremesas", description: "Mousses, gelados e frutas frescas.", image: "/images/buffet-6.png", alt: "Mousses, gelados e frutas frescas" },
  ],
  en: [
    { id: "hot-dishes", name: "Hot dishes", description: "Meat, shellfish and stir-fried vegetables.", image: "/images/buffet-1.png", alt: "Hot buffet dishes with meat, prawns, shellfish and vegetables" },
    { id: "classic-sushi", name: "Classic sushi", description: "A varied selection of fresh maki and nigiri.", image: "/images/buffet-2.png", alt: "Selection of maki, nigiri and prawns at the sushi buffet" },
    { id: "sushi-selection", name: "Sushi selection", description: "Colourful sushi and sashimi combinations.", image: "/images/buffet-3.png", alt: "Platter with a colourful selection of sushi and sashimi" },
    { id: "fresh-fish", name: "Fresh ingredients for grilling", description: "Fish, salmon and fresh meats.", image: "/images/buffet-4.png", alt: "Chilled counter with fish, salmon and meat" },
    { id: "shellfish", name: "Shellfish", description: "Fresh shellfish on display (seasonal availability).", image: "/images/buffet-5.png", alt: "Fresh shellfish buffet display" },
    { id: "desserts", name: "Desserts", description: "Mousses, ice cream and fresh fruit.", image: "/images/buffet-6.png", alt: "Mousses, ice cream and fresh fruit" },
  ],
};

export function getBuffetItems(locale: Locale) {
  return buffetItemsByLocale[locale];
}
