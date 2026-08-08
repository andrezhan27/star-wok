import { Facebook, Instagram } from "lucide-react";
import type { ReactNode } from "react";

import { restaurantConfig } from "@/config/star-wok";
import type { StarWokContent } from "@/content/star-wok-content";

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M14.4 3h3.1c.2 1.7 1.2 3 3 3.7v3.1a8.7 8.7 0 0 1-3-1v6.3A5.9 5.9 0 1 1 12.4 9v3.2a2.8 2.8 0 1 0 2 2.7V3Z" />
    </svg>
  );
}

type Social = { href: string; label: string; icon: ReactNode };

type SocialLinksProps = {
  content: StarWokContent["footer"];
};

export function SocialLinks({ content }: SocialLinksProps) {
  const socials: Social[] = [
    { href: restaurantConfig.socialLinks.instagram, label: content.instagram, icon: <Instagram /> },
    { href: restaurantConfig.socialLinks.facebook, label: content.facebook, icon: <Facebook /> },
    { href: restaurantConfig.socialLinks.tiktok, label: content.tiktok, icon: <TikTokIcon /> },
  ].filter((social) => Boolean(social.href));

  if (socials.length === 0) return null;

  return (
    <div className="flex gap-2" aria-label={content.socialLabel}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link focus-ring"
          aria-label={social.label}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
