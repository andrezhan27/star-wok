import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { BrandLogo } from "@/components/star-wok/brand-logo";
import { DocumentLanguage } from "@/components/star-wok/document-language";
import { LanguageSwitcher } from "@/components/star-wok/language-switcher";
import { restaurantConfig } from "@/config/star-wok";
import { getContent, homeHref, resolveLocale } from "@/lib/locale";

type ReservationPageProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

export async function generateMetadata({ searchParams }: ReservationPageProps): Promise<Metadata> {
  const locale = resolveLocale((await searchParams).lang);
  const content = getContent(locale);
  return {
    title: `${content.reservation.title} | ${restaurantConfig.name}`,
    description: content.reservation.description,
  };
}

export default async function ReservationPage({ searchParams }: ReservationPageProps) {
  const locale = resolveLocale((await searchParams).lang);
  const content = getContent(locale);

  return (
    <main className="reservation-page">
      <DocumentLanguage locale={locale} />
      <header className="reservation-header">
        <Link href={homeHref(locale)} scroll className="reservation-back focus-ring">
          <ArrowLeft aria-hidden="true" />
          <span>{content.reservation.back}</span>
        </Link>
        <Link href={homeHref(locale)} scroll className="reservation-logo focus-ring" aria-label={restaurantConfig.name}>
          <BrandLogo priority />
        </Link>
        <LanguageSwitcher
          locale={locale}
          portugueseLabel={content.navigation.portuguese}
          englishLabel={content.navigation.english}
          ariaLabel={content.navigation.changeLanguage}
          route="reservation"
          className="reservation-language-switcher"
        />
      </header>
      <div className="reservation-frame">
        <iframe
          className="block h-full w-full border-0"
          loading="eager"
          src={restaurantConfig.reservationWidgetUrl}
          title={content.reservation.iframeTitle}
        />
      </div>
    </main>
  );
}
