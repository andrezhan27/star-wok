import { BuffetCarousel } from "@/components/star-wok/buffet-carousel";
import { BuffetPricingCard } from "@/components/star-wok/buffet-pricing-card";
import { MotionReveal } from "@/components/star-wok/motion-reveal";
import type { Locale } from "@/content/star-wok-content";
import { getBuffetItems } from "@/data/buffet-items";
import { getAdultBuffetPrices, getTakeawayPrices } from "@/data/buffet-pricing";
import { getContent } from "@/lib/locale";

type BuffetSectionProps = {
  locale: Locale;
};

export function BuffetSection({ locale }: BuffetSectionProps) {
  const content = getContent(locale);
  const buffetItems = getBuffetItems(locale);
  const adultBuffetPrices = getAdultBuffetPrices(locale);
  const takeawayPrices = getTakeawayPrices(locale);

  return (
    <section id="buffet" className="section-shell buffet-section scroll-mt-24 overflow-hidden bg-canvas">
      <div className="page-container">
        <MotionReveal>
          <h2 className="buffet-title text-ink">{content.buffet.title}</h2>
        </MotionReveal>

        <div className="buffet-layout">
          <MotionReveal className="buffet-carousel-column">
            <BuffetCarousel items={buffetItems} content={content.buffet} />
          </MotionReveal>

          <MotionReveal className="buffet-pricing" delay={0.08}>
            <BuffetPricingCard
              adultPrices={adultBuffetPrices}
              takeawayPrices={takeawayPrices}
              content={content.buffet}
            />
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
