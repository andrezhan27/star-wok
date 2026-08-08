import { contentByLocale, type Locale } from "@/content/star-wok-content";

export function resolveLocale(value: string | string[] | undefined): Locale {
  const candidate = Array.isArray(value) ? value[0] : value;
  return candidate === "en" ? "en" : "pt";
}

export function getContent(locale: Locale) {
  return contentByLocale[locale];
}

export function homeHref(locale: Locale, section = "inicio") {
  return `/?lang=${locale}#${section}`;
}

export function reservationHref(locale: Locale) {
  return `/reservation?lang=${locale}`;
}
