import type { Locale } from "@/content/star-wok-content";

export type BuffetPrice = {
  id: string;
  meal: string;
  schedule: string;
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

export function getAdultBuffetPrices(locale: Locale) {
  return pricesByLocale[locale];
}
