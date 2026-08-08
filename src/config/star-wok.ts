export type OpeningHoursEntry = {
  days: string;
  hours: string;
};

export type ServiceEntry = {
  label: string;
  detail?: string;
};

export const restaurantConfig = {
  name: "Star Wok",
  shortName: "Star Wok",
  address: "Av. Salgueiro Maia 949, 2785-501 São Domingos de Rana",
  phone: "+351 961 299 517",
  email: "",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Star%20Wok%2C%20Av.%20Salgueiro%20Maia%20949%2C%202785-501%20S%C3%A3o%20Domingos%20de%20Rana",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.742659822121!2d-9.341582924025243!3d38.72371687176177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecf361de83c05%3A0x86bb0c66bb2906a1!2sStar%20Wok!5e0!3m2!1sen!2spt!4v1786117489096!5m2!1sen!2spt",
  reservationUrl: "/reservation",
  reservationWidgetUrl:
    process.env.NEXT_PUBLIC_DIG_IN_RESERVATION_WIDGET_URL ||
    "https://reserve.intelis.pt/starwok",
  privacyPolicyUrl:
    "https://drive.google.com/file/d/1vgxENGDRyofisXaph54oJ8LCGTZpdq2q/view?usp=sharing",
  complaintsBookUrl: "https://www.livroreclamacoes.pt/Inicio/",
  openingHours: [
    { days: "Todos os dias", hours: "12:00–15:00 · 19:00–23:00" },
  ] as OpeningHoursEntry[],
  services: [] as ServiceEntry[],
  accessibility: "",
  parking: "",
  paymentOptions: [] as string[],
  socialLinks: {
    instagram: "https://www.instagram.com/star_wok_aboboda",
    facebook: "https://www.facebook.com/p/Star-Wok-61564821493166/",
    tiktok: "https://www.tiktok.com/@star_wok_aboboda",
  },
} as const;
