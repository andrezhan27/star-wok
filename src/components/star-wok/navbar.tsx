"use client";

import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { BrandLogo } from "@/components/star-wok/brand-logo";
import { LanguageSwitcher } from "@/components/star-wok/language-switcher";
import { restaurantConfig } from "@/config/star-wok";
import type { Locale } from "@/content/star-wok-content";
import { getContent, homeHref, reservationHref } from "@/lib/locale";
import { mobilePanel } from "@/lib/motion-variants";

type NavbarProps = {
  locale: Locale;
};

const sectionIds = ["inicio", "buffet", "espaco", "informacoes"] as const;

export function Navbar({ locale }: NavbarProps) {
  const content = getContent(locale);
  const links = [
    { label: content.navigation.home, id: "inicio" },
    { label: content.navigation.buffet, id: "buffet" },
    { label: content.navigation.space, id: "espaco" },
    { label: content.navigation.information, id: "informacoes" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const reduceMotion = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.34;
      let currentSection: (typeof sectionIds)[number] = sectionIds[0];

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= activationLine) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <LazyMotion features={domAnimation}>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
        <nav
          aria-label={content.navigation.label}
          className={`nav-shell mx-auto max-w-[1440px] ${isScrolled || isOpen ? "nav-shell-solid" : ""}`}
        >
          <a href={homeHref(locale)} className="nav-logo focus-ring" aria-label={restaurantConfig.name}>
            <BrandLogo priority />
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <a
                key={link.id}
                href={homeHref(locale, link.id)}
                aria-current={activeSection === link.id ? "page" : undefined}
                className="nav-link focus-ring"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher
              locale={locale}
              portugueseLabel={content.navigation.portuguese}
              englishLabel={content.navigation.english}
              ariaLabel={content.navigation.changeLanguage}
              section={activeSection}
            />
            {restaurantConfig.reservationUrl ? (
              <a
                className="button-primary reservation-button nav-reservation"
                href={reservationHref(locale)}
              >
                {content.navigation.reserve}
              </a>
            ) : null}
            <button
              ref={menuButtonRef}
              type="button"
              className="icon-button focus-ring lg:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? content.navigation.closeMenu : content.navigation.openMenu}
              onClick={() => setIsOpen((current) => !current)}
            >
              {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen ? (
            <m.div
              id="mobile-navigation"
              className="mobile-nav mx-auto mt-2 max-w-[1440px] lg:hidden"
              variants={reduceMotion ? undefined : mobilePanel}
              initial={reduceMotion ? { opacity: 0 } : "hidden"}
              animate={reduceMotion ? { opacity: 1 } : "visible"}
              exit={reduceMotion ? { opacity: 0 } : "exit"}
            >
              {links.map((link, index) => (
                <a
                  key={link.id}
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={homeHref(locale, link.id)}
                  aria-current={activeSection === link.id ? "page" : undefined}
                  className="mobile-nav-link focus-ring"
                  onClick={closeMenu}
                >
                  <span>0{index + 1}</span>
                  {link.label}
                </a>
              ))}
              {restaurantConfig.reservationUrl ? (
                <a
                  className="button-primary reservation-button mt-3 w-full"
                  href={reservationHref(locale)}
                  onClick={closeMenu}
                >
                  {content.hero.reserve}
                </a>
              ) : null}
            </m.div>
          ) : null}
        </AnimatePresence>
      </header>
    </LazyMotion>
  );
}
