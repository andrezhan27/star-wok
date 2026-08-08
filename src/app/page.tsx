import type { Metadata } from "next";

import { BuffetSection } from "@/components/star-wok/buffet-section";
import { DocumentLanguage } from "@/components/star-wok/document-language";
import { Footer } from "@/components/star-wok/footer";
import { HeroSection } from "@/components/star-wok/hero-section";
import { InformationSection } from "@/components/star-wok/information-section";
import { Navbar } from "@/components/star-wok/navbar";
import { SpaceSection } from "@/components/star-wok/space-section";
import { restaurantConfig } from "@/config/star-wok";
import { getContent, resolveLocale } from "@/lib/locale";

function RestaurantJsonLd() {
  const addressParts = restaurantConfig.address.split(", ");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurantConfig.name,
    image: "/images/hero-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: addressParts[0],
      postalCode: "2785-501",
      addressLocality: "São Domingos de Rana",
      addressCountry: "PT",
    },
    ...(restaurantConfig.phone ? { telephone: restaurantConfig.phone } : {}),
    ...(restaurantConfig.email ? { email: restaurantConfig.email } : {}),
    ...(restaurantConfig.reservationUrl ? { acceptsReservations: true } : {}),
    ...(restaurantConfig.openingHours.length > 0
      ? {
          openingHours: restaurantConfig.openingHours.map(
            ({ days, hours }) => `${days} ${hours}`,
          ),
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}

type HomeProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

export async function generateMetadata({ searchParams }: HomeProps): Promise<Metadata> {
  const locale = resolveLocale((await searchParams).lang);
  const content = getContent(locale);
  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const locale = resolveLocale((await searchParams).lang);

  return (
    <>
      <DocumentLanguage locale={locale} />
      <RestaurantJsonLd />
      <Navbar locale={locale} />
      <main>
        <HeroSection locale={locale} />
        <BuffetSection locale={locale} />
        <SpaceSection locale={locale} />
        <InformationSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
