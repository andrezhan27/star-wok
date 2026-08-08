import { Clock3, ExternalLink, MapPin, Phone } from "lucide-react";

import { BrandLogo } from "@/components/star-wok/brand-logo";
import { SocialLinks } from "@/components/star-wok/social-links";
import { restaurantConfig } from "@/config/star-wok";
import type { Locale } from "@/content/star-wok-content";
import { getContent, homeHref } from "@/lib/locale";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const content = getContent(locale);
  const links = [
    { id: "inicio", label: content.navigation.home },
    { id: "buffet", label: content.navigation.buffet },
    { id: "espaco", label: content.navigation.space },
    { id: "informacoes", label: content.navigation.information },
  ];

  return (
    <footer className="footer-shell">
      <div className="page-container">
        <div className="footer-main">
          <div className="footer-brand-column">
            <a href={homeHref(locale)} className="footer-logo focus-ring" aria-label={restaurantConfig.name}>
              <BrandLogo />
            </a>
          </div>

          <div className="footer-information">
            <h2 className="footer-column-title">{content.footer.informationTitle}</h2>
            <p className="footer-address">
              <MapPin aria-hidden="true" />
              <span>{restaurantConfig.address}</span>
            </p>
            {restaurantConfig.phone ? (
              <a
                className="footer-information-row focus-ring"
                href={`tel:${restaurantConfig.phone.replace(/\s/g, "")}`}
              >
                <Phone aria-hidden="true" />
                <span>{restaurantConfig.phone}</span>
              </a>
            ) : null}
            {restaurantConfig.openingHours.length > 0 ? (
              <div className="footer-information-row">
                <Clock3 aria-hidden="true" />
                <div>
                  <strong>{content.footer.openDaily}</strong>
                  {restaurantConfig.openingHours.map((entry) => (
                    <span key={entry.days}>{entry.hours}</span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="footer-navigation-column">
            <h2 className="footer-column-title">{content.footer.navigationTitle}</h2>
            <nav aria-label={content.footer.navigationLabel} className="footer-nav">
              {links.map((link) => <a key={link.id} href={homeHref(locale, link.id)} className="focus-ring">{link.label}</a>)}
            </nav>
          </div>

          <div className="footer-legal-column">
            <h2 className="footer-column-title">{content.footer.legalTitle}</h2>
            <div className="footer-legal">
              <a
                href={restaurantConfig.privacyPolicyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring"
              >
                {content.footer.privacyPolicy}
                <ExternalLink aria-hidden="true" size={14} />
              </a>
              <a
                href={restaurantConfig.complaintsBookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring"
                aria-label={`${content.footer.complaintsBook}, ${content.information.externalLink}`}
              >
                {content.footer.complaintsBook}
                <ExternalLink aria-hidden="true" size={14} />
              </a>
            </div>
            <div className="footer-socials">
              <SocialLinks content={content.footer} />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-credit">
            © {currentYear}{" "}
            <a
              href="https://intelis.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-designer focus-ring"
            >
              {content.footer.designedBy}
            </a>
            . {content.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
