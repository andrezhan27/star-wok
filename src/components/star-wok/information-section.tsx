import {
  Accessibility,
  CalendarCheck,
  CarFront,
  Clock3,
  CreditCard,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";

import { MotionReveal } from "@/components/star-wok/motion-reveal";
import { restaurantConfig } from "@/config/star-wok";
import type { Locale } from "@/content/star-wok-content";
import { getContent, reservationHref } from "@/lib/locale";

type InfoItemProps = {
  icon: ReactNode;
  label: string;
  children: ReactNode;
};

function InfoItem({ icon, label, children }: InfoItemProps) {
  return (
    <div className="info-item">
      <div className="info-icon" aria-hidden="true">{icon}</div>
      <div>
        <h3>{label}</h3>
        <div className="info-value">{children}</div>
      </div>
    </div>
  );
}

type InformationSectionProps = {
  locale: Locale;
};

export function InformationSection({ locale }: InformationSectionProps) {
  const content = getContent(locale);

  return (
    <section id="informacoes" className="section-shell information-section scroll-mt-24 bg-surface">
      <div className="page-container">
        <div className="information-inner">
          <MotionReveal>
            <h2 className="information-title text-ink">{content.information.title}</h2>
          </MotionReveal>

          <div className="information-layout">
            <div className="information-copy">
              <MotionReveal className="info-grid">
                <InfoItem icon={<MapPin />} label={content.information.address}>
                  {restaurantConfig.mapsUrl ? (
                    <a
                      href={restaurantConfig.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="info-link focus-ring"
                      aria-label={`${restaurantConfig.address}, ${content.information.externalLink}`}
                    >
                      {restaurantConfig.address}
                      <ExternalLink aria-hidden="true" size={16} />
                    </a>
                  ) : (
                    <address>{restaurantConfig.address}</address>
                  )}
                </InfoItem>

                {restaurantConfig.phone ? (
                  <InfoItem icon={<Phone />} label={content.information.phone}>
                    <a
                      className="info-link focus-ring"
                      href={`tel:${restaurantConfig.phone.replace(/\s/g, "")}`}
                    >
                      {restaurantConfig.phone}
                    </a>
                  </InfoItem>
                ) : null}

                {restaurantConfig.email ? (
                  <InfoItem icon={<Mail />} label={content.information.email}>
                    <a className="info-link focus-ring" href={`mailto:${restaurantConfig.email}`}>
                      {restaurantConfig.email}
                    </a>
                  </InfoItem>
                ) : null}

                {restaurantConfig.openingHours.length > 0 ? (
                  <InfoItem icon={<Clock3 />} label={content.information.openingHours}>
                    <dl className="space-y-2">
                      {restaurantConfig.openingHours.map((entry) => (
                        <div key={entry.days} className="opening-hours-entry">
                          <dt>{content.information.everyDay}</dt>
                          <dd>{entry.hours}</dd>
                        </div>
                      ))}
                    </dl>
                  </InfoItem>
                ) : null}

                {restaurantConfig.services.length > 0 ? (
                  <InfoItem icon={<Sparkles />} label={content.information.services}>
                    <ul>{restaurantConfig.services.map((service) => <li key={service.label}>{service.label}</li>)}</ul>
                  </InfoItem>
                ) : null}

                {restaurantConfig.accessibility ? (
                  <InfoItem icon={<Accessibility />} label={content.information.accessibility}>
                    <p>{restaurantConfig.accessibility}</p>
                  </InfoItem>
                ) : null}

                {restaurantConfig.parking ? (
                  <InfoItem icon={<CarFront />} label={content.information.parking}>
                    <p>{restaurantConfig.parking}</p>
                  </InfoItem>
                ) : null}

                {restaurantConfig.paymentOptions.length > 0 ? (
                  <InfoItem icon={<CreditCard />} label={content.information.paymentOptions}>
                    <p>{restaurantConfig.paymentOptions.join(" · ")}</p>
                  </InfoItem>
                ) : null}

                {restaurantConfig.reservationUrl ? (
                  <div className="info-item information-reservation">
                    <div className="info-icon" aria-hidden="true"><CalendarCheck /></div>
                    <a
                      className="button-primary information-reservation-button"
                      href={reservationHref(locale)}
                    >
                      {content.information.reserve}
                    </a>
                  </div>
                ) : null}
              </MotionReveal>
            </div>

            <MotionReveal className="information-map" delay={0.08}>
              <iframe
                src={restaurantConfig.mapsEmbedUrl}
                title={content.information.mapTitle}
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
