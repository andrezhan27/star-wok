import type { Locale } from "@/content/star-wok-content";

export type BuffetPrice = {
  id: string;
  meal: string;
  schedule: string;
  price: string;
};

export type TakeawayPrice = {
  id: string;
  item: string;
  details?: string;
  price: string;
};

const pricesByLocale: Record<Locale, BuffetPrice[]> = {
  pt: [
    { id: "weekday-lunch", meal: "Almoço", schedule: "Segunda a sexta", price: "14,95 €" },
    { id: "weekday-dinner", meal: "Jantar", schedule: "Segunda a quinta", price: "17,95 €" },
    { id: "friday-dinner", meal: "Jantar", schedule: "Sexta-feira", price: "19,95 €" },
    { id: "weekends-holidays", meal: "Almoço e jantar", schedule: "Sábados, domingos e feriados", price: "19,95 €" },
  ],
  en: [
    { id: "weekday-lunch", meal: "Lunch", schedule: "Monday to Friday", price: "€14.95" },
    { id: "weekday-dinner", meal: "Dinner", schedule: "Monday to Thursday", price: "€17.95" },
    { id: "friday-dinner", meal: "Dinner", schedule: "Friday", price: "€19.95" },
    { id: "weekends-holidays", meal: "Lunch and dinner", schedule: "Saturdays, Sundays and public holidays", price: "€19.95" },
  ],
};

const takeawayPricesByLocale: Record<Locale, TakeawayPrice[]> = {
  pt: [
    {
      id: "mixed-food",
      item: "Mix de comidas (por caixa)",
      details: "Grelhados, gambas e salmão não incluídos.",
      price: "9,50 €",
    },
    { id: "grilled-food", item: "Grelhados (por caixa)", price: "11,50 €" },
    { id: "prawns-salmon", item: "Gambas ou salmão (por caixa)", price: "13,50 €" },
  ],
  en: [
    {
      id: "mixed-food",
      item: "Mixed food (per box)",
      details: "Grilled food, prawns and salmon not included.",
      price: "€9.50",
    },
    { id: "grilled-food", item: "Grilled food (per box)", price: "€11.50" },
    { id: "prawns-salmon", item: "Prawns or salmon (per box)", price: "€13.50" },
  ],
};

export function getAdultBuffetPrices(locale: Locale) {
  return pricesByLocale[locale];
}

export function getTakeawayPrices(locale: Locale) {
  return takeawayPricesByLocale[locale];
}
