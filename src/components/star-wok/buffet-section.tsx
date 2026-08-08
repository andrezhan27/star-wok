import { BuffetCarousel } from "@/components/star-wok/buffet-carousel";
import { MotionReveal } from "@/components/star-wok/motion-reveal";
import type { Locale } from "@/content/star-wok-content";
import { getBuffetItems } from "@/data/buffet-items";
import { getAdultBuffetPrices } from "@/data/buffet-pricing";
import { getContent } from "@/lib/locale";

type BuffetSectionProps = {
  locale: Locale;
};

export function BuffetSection({ locale }: BuffetSectionProps) {
  const content = getContent(locale);
  const buffetItems = getBuffetItems(locale);
  const adultBuffetPrices = getAdultBuffetPrices(locale);

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
            <div className="buffet-pricing-heading">
              <span>{content.buffet.prices}</span>
              <h3>{content.buffet.adults}</h3>
            </div>

            <ul className="buffet-price-list">
              {adultBuffetPrices.map((item) => (
                <li key={item.id}>
                  <div>
                    <strong>{item.meal}</strong>
                    <span>{item.schedule}</span>
                  </div>
                  <span className="buffet-price">{item.price}</span>
                </li>
              ))}
            </ul>

            <div className="buffet-child-pricing">
              <strong>{content.buffet.children}</strong>
              <p>{content.buffet.childFree}</p>
              <p>{content.buffet.childPricing}</p>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
