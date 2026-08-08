import Image from "next/image";

import { MotionReveal } from "@/components/star-wok/motion-reveal";
import type { SpaceImage } from "@/data/space-images";

type SpaceGalleryProps = {
  images: SpaceImage[];
  label: string;
};

export function SpaceGallery({ images, label }: SpaceGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div className="space-gallery" aria-label={label}>
      {images.map((image, index) => (
        <MotionReveal key={image.id} delay={Math.min(index * 0.04, 0.16)}>
          <figure className="space-gallery-item">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1439px) calc(50vw - 3rem), 620px"
              className="space-gallery-image"
            />
            {image.caption ? (
              <figcaption className="space-gallery-caption">{image.caption}</figcaption>
            ) : null}
          </figure>
        </MotionReveal>
      ))}
    </div>
  );
}
