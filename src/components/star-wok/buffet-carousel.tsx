"use client";

import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import type { StarWokContent } from "@/content/star-wok-content";
import type { BuffetItem } from "@/data/buffet-items";
import { carouselSlide } from "@/lib/motion-variants";

type BuffetCarouselProps = {
  items: BuffetItem[];
  content: StarWokContent["buffet"];
};

export function BuffetCarousel({ items, content }: BuffetCarouselProps) {
  const [[index, direction], setIndex] = useState([0, 0]);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const hasMultiple = items.length > 1;

  const paginate = useCallback(
    (nextDirection: number) => {
      setIndex(([current]) => [
        (current + nextDirection + items.length) % items.length,
        nextDirection,
      ]);
    },
    [items.length],
  );

  useEffect(() => {
    if (!hasMultiple || paused || reduceMotion) return;
    const timer = window.setInterval(() => paginate(1), 4800);
    return () => window.clearInterval(timer);
  }, [hasMultiple, paginate, paused, reduceMotion]);

  if (items.length === 0) return null;

  const current = items[index];

  return (
    <LazyMotion features={domAnimation}>
      <div
        className="buffet-carousel"
        aria-roledescription="carousel"
        aria-label={content.carouselLabel}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div className="buffet-carousel-stage">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <m.figure
              key={current.id}
              className="absolute inset-0"
              custom={direction}
              variants={reduceMotion ? undefined : carouselSlide}
              initial={reduceMotion ? { opacity: 0 } : "enter"}
              animate={reduceMotion ? { opacity: 1 } : "center"}
              exit={reduceMotion ? { opacity: 0 } : "exit"}
              drag={hasMultiple && !reduceMotion ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (Math.abs(info.offset.x) > 60) paginate(info.offset.x < 0 ? 1 : -1);
              }}
            >
              <Image
                src={current.image}
                alt={current.alt}
                fill
                sizes="(max-width: 899px) calc(100vw - 2rem), (max-width: 1280px) 52vw, 640px"
                className="select-none object-cover object-center"
                priority={index === 0}
                draggable={false}
              />
              <figcaption className="buffet-carousel-caption">
                <strong>{current.name}</strong>
                <span>{current.description}</span>
              </figcaption>
            </m.figure>
          </AnimatePresence>

          {hasMultiple ? (
            <div className="buffet-carousel-arrows">
              <button
                type="button"
                className="buffet-carousel-arrow focus-ring"
                aria-label={content.previous}
                onClick={() => paginate(-1)}
              >
                <ArrowLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                className="buffet-carousel-arrow focus-ring"
                aria-label={content.next}
                onClick={() => paginate(1)}
              >
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          ) : null}
        </div>

        {hasMultiple ? (
          <div className="buffet-carousel-toolbar">
            <p aria-live="polite">
              {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </p>
            <div className="buffet-carousel-dots" aria-label={content.choosePhoto}>
              {items.map((item, dotIndex) => (
                <button
                  key={item.id}
                  type="button"
                  className="buffet-carousel-dot focus-ring"
                  data-active={dotIndex === index}
                  aria-label={`${content.viewPhoto} ${dotIndex + 1}: ${item.name}`}
                  aria-current={dotIndex === index ? "true" : undefined}
                  onClick={() => setIndex([dotIndex, dotIndex > index ? 1 : -1])}
                >
                  <span />
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </LazyMotion>
  );
}
