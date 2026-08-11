"use client";

import { useState } from "react";

import type { StarWokContent } from "@/content/star-wok-content";
import type { BuffetPrice, TakeawayPrice } from "@/data/buffet-pricing";

type BuffetPricingCardProps = {
  adultPrices: BuffetPrice[];
  takeawayPrices: TakeawayPrice[];
  content: StarWokContent["buffet"];
};

type PricingView = "dine-in" | "takeaway";

export function BuffetPricingCard({ adultPrices, takeawayPrices, content }: BuffetPricingCardProps) {
  const [view, setView] = useState<PricingView>("dine-in");
  const isTakeaway = view === "takeaway";

  return (
    <>
      <div className="buffet-pricing-heading">
        <div className="buffet-pricing-heading-label">
          <span>{content.prices}*</span>
          <strong aria-live="polite">{isTakeaway ? content.perBox : content.adults}</strong>
        </div>
        <div className="buffet-pricing-toggle" role="tablist" aria-label={content.pricingType}>
          <button
            type="button"
            role="tab"
            aria-selected={!isTakeaway}
            onClick={() => setView("dine-in")}
          >
            {content.dineIn}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={isTakeaway}
            onClick={() => setView("takeaway")}
          >
            {content.takeaway}
          </button>
        </div>
      </div>

      <div className="buffet-pricing-body">
        {isTakeaway ? (
          <div className="buffet-price-panel buffet-takeaway-panel">
            <ul className="buffet-price-list buffet-takeaway-list">
              {takeawayPrices.map((item) => (
                <li key={item.id}>
                  <div>
                    <strong>{item.item}</strong>
                    {item.details ? <span>{item.details}</span> : null}
                  </div>
                  <span className="buffet-price">{item.price}</span>
                </li>
              ))}
            </ul>
            <p className="buffet-takeaway-note">{content.takeawayPackagingNote}</p>
          </div>
        ) : (
          <div className="buffet-price-panel">
            <ul className="buffet-price-list">
              {adultPrices.map((item) => (
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
              <strong>{content.children}</strong>
              <p>{content.childFree}</p>
              <p>{content.childPricing}</p>
              <p className="buffet-dine-in-note">{content.dineInExclusions}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
