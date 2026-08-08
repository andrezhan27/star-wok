"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

import type { Locale } from "@/content/star-wok-content";
import { homeHref, reservationHref } from "@/lib/locale";

type LanguageSwitcherProps = {
  locale: Locale;
  portugueseLabel: string;
  englishLabel: string;
  ariaLabel: string;
  section?: string;
  route?: "home" | "reservation";
  className?: string;
};

export function LanguageSwitcher({
  locale,
  portugueseLabel,
  englishLabel,
  ariaLabel,
  section = "inicio",
  route = "home",
  className = "",
}: LanguageSwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const changeLanguage = (nextLocale: Locale) => {
    if (nextLocale === locale || isPending) return;

    const href = route === "reservation"
      ? reservationHref(nextLocale)
      : homeHref(nextLocale, section);

    startTransition(() => {
      router.replace(href, { scroll: false });
    });
  };

  return (
    <div className={`language-switcher ${className}`.trim()} aria-label={ariaLabel}>
      <button
        type="button"
        className="language-option focus-ring"
        aria-current={locale === "pt" ? "true" : undefined}
        aria-label={portugueseLabel}
        disabled={isPending}
        onClick={() => changeLanguage("pt")}
      >
        PT
      </button>
      <button
        type="button"
        className="language-option focus-ring"
        aria-current={locale === "en" ? "true" : undefined}
        aria-label={englishLabel}
        disabled={isPending}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
}
