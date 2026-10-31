import siteConfig, { directionsLink, whatsappLink } from '../config/siteConfig.js';

/** Shop details come straight from src/config/siteConfig.js (no server needed). */
export const store = {
  name: siteConfig.shopName,
  tagline: siteConfig.tagline,
  supportPhone: siteConfig.phoneDisplay,
  phoneDial: siteConfig.phoneDial,
  supportEmail: siteConfig.email,
  whatsapp: siteConfig.whatsappNumber,
  address: siteConfig.address,
  hours: siteConfig.hours,
  social: siteConfig.social,
  directionsUrl: directionsLink(),
  whatsappUrl: whatsappLink(),
  marquee: siteConfig.marquee,
};
export const useConfig = () => ({ store });
