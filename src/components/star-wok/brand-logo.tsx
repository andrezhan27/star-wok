import Image from "next/image";

import { ptContent } from "@/content/star-wok-content";

type BrandLogoProps = {
  priority?: boolean;
};

export function BrandLogo({ priority = false }: BrandLogoProps) {
  return (
    <span className="brand-lockup">
      <Image
        className="brand-avatar"
        src="/images/star-wok-avatar.webp"
        alt=""
        width={742}
        height={652}
        sizes="64px"
        priority={priority}
      />
      <Image
        className="brand-wordmark"
        src="/images/star-wok-text.webp"
        alt={ptContent.hero.logoAlt}
        width={900}
        height={190}
        sizes="(max-width: 640px) 96px, 140px"
        priority={priority}
      />
    </span>
  );
}
