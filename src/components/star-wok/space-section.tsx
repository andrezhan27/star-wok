import { MotionReveal } from "@/components/star-wok/motion-reveal";
import { SpaceGallery } from "@/components/star-wok/space-gallery";
import type { Locale } from "@/content/star-wok-content";
import { getSpaceImages } from "@/data/space-images";
import { getContent } from "@/lib/locale";

type SpaceSectionProps = {
  locale: Locale;
};

export function SpaceSection({ locale }: SpaceSectionProps) {
  const content = getContent(locale);
  const spaceImages = getSpaceImages(locale);

  return (
    <section id="espaco" className="section-shell space-section scroll-mt-24">
      <div className="space-orbit space-orbit-one" aria-hidden="true" />
      <div className="space-orbit space-orbit-two" aria-hidden="true" />
      <div className="page-container relative z-10">
        <MotionReveal className="max-w-3xl">
          <h2 className="section-display-title text-white">{content.space.title}</h2>
        </MotionReveal>
        <div className="space-gallery-wrap">
          <SpaceGallery images={spaceImages} label={content.space.galleryLabel} />
        </div>
      </div>
    </section>
  );
}
