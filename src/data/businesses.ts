/**
 * The three operating arms of Agatis Group, surfaced on the homepage.
 */

export type Business = {
  name: string;
  kicker: string;
  description: string;
  href: string;
  external: boolean;
  cta: string;
};

export const businesses: Business[] = [
  {
    name: "Investments",
    kicker: "Permanent capital",
    description:
      "We identify minority-interest opportunities in high-quality businesses with strong management teams and significant long-term growth potential, primarily in Indonesian companies. Our goal is to compound capital at more than 20% annually.",
    href: "/investments",
    external: false,
    cta: "Explore our portfolio",
  },
  {
    name: "Digital Agency",
    kicker: "Agatis Advertising",
    description:
      "A collective of independent digital advertising and marketing consultants delivering social media management, SEO, content creation, and programmatic advertising to boost online presence, brand recognition, and conversions.",
    href: "https://agatisadvertising.com",
    external: true,
    cta: "Visit Agatis Advertising",
  },
  {
    name: "Digital Media",
    kicker: "Restocked.id",
    description:
      "A media platform built to be Gen Z's number-one resource for researching the best everyday products to buy: answering what to put back in your pantry, fridge, and snack stash.",
    href: "https://www.instagram.com/restocked.id",
    external: true,
    cta: "Follow Restocked.id",
  },
];
