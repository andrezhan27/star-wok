"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import Image, { getImageProps } from "next/image";

import { restaurantConfig } from "@/config/star-wok";
import type { Locale } from "@/content/star-wok-content";
import { getContent, reservationHref } from "@/lib/locale";
import { fadeIn, heroReveal } from "@/lib/motion-variants";

type HeroSectionProps = {
  locale: Locale;
};

export function HeroSection({ locale }: HeroSectionProps) {
  const reduceMotion = useReducedMotion();
  const content = getContent(locale);
  const { props: desktopHeroProps } = getImageProps({
    src: "/images/hero-image.webp",
    alt: content.hero.imageAlt,
    fill: true,
    loading: "eager",
    fetchPriority: "high",
    sizes: "100vw",
    unoptimized: true,
  });
  const { props: mobileHeroProps } = getImageProps({
    src: "/images/hero-mobile.webp",
    alt: content.hero.imageAlt,
    fill: true,
    loading: "eager",
    fetchPriority: "high",
    sizes: "100vw",
    unoptimized: true,
  });

  return (
    <LazyMotion features={domAnimation}>
      <section id="inicio" className="hero-section scroll-mt-28" aria-label={restaurantConfig.name}>
        <picture>
          <source
            media="(max-width: 639px)"
            srcSet={mobileHeroProps.srcSet ?? mobileHeroProps.src}
          />
          <img {...desktopHeroProps} alt={content.hero.imageAlt} className="hero-image" />
        </picture>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-orbit" aria-hidden="true" />

        <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-5 pb-20 pt-32">
          <div className="flex w-full max-w-xl flex-col items-center text-center">
            <m.div
              className="hero-logo"
              variants={reduceMotion ? fadeIn : heroReveal}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <Image
                src="/images/star-wok-text.webp"
                alt={content.hero.logoAlt}
                width={900}
                height={190}
                sizes="(max-width: 640px) 78vw, 570px"
                loading="eager"
                priority
              />
            </m.div>

            {restaurantConfig.reservationUrl ? (
              <m.a
                href={reservationHref(locale)}
                className="button-primary reservation-button hero-button"
              variants={reduceMotion ? fadeIn : heroReveal}
              initial="hidden"
              animate="visible"
              custom={reduceMotion ? 0 : 0.2}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              >
                {content.hero.reserve}
              </m.a>
            ) : null}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
