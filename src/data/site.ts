/**
 * Global site configuration: company facts, navigation, contact details and
 * social links. Edit content here rather than in markup.
 */

export const site = {
  name: "Agatis Group",
  legalName: "PT Agatis Investama Abadi",
  tagline: "Indonesia-Focused Investment Company",
  description:
    "PT Agatis Investama Abadi (Agatis Group) is a privately held, Indonesia-focused investment company deploying permanent capital into high-quality, high-return opportunities with a disciplined, long-term perspective.",
  url: "https://www.agatisgroup.com",
  copyrightHolder: "PT Agatis Investama Abadi",
  foundedRegion: "Indonesia",
} as const;

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Our Investments",
    href: "/investments",
    children: [
      { label: "Public Companies", href: "/investments/public-companies" },
      { label: "Private Companies", href: "/investments/private-companies" },
    ],
  },
  {
    label: "Blog",
    href: "https://agatisgroup.substack.com",
    external: true,
  },
  { label: "Contact", href: "/contact" },
];

export const contact = {
  email: "reynaldi@agatisgroup.com",
  phone: "+62 851-7436-3307",
  phoneRaw: "+6285174363307",
  whatsapp: "https://wa.me/6285174363307",
} as const;

export type SocialLink = {
  label: string;
  href: string;
  /** inline SVG path data, 24x24 viewBox */
  icon: string;
};

export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/agatisgroup",
    icon: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C20.6 8.75 22 10.9 22 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.57-2.3 3.2V21H9V9Z",
  },
  {
    label: "X",
    href: "https://x.com/agatisinvestama",
    icon: "M17.53 3H21l-7.19 8.21L22 21h-6.56l-5.14-6.72L4.4 21H1l7.69-8.79L1.36 3H8.1l4.65 6.15L17.53 3Zm-1.15 16h1.83L7.7 4.9H5.74l10.64 14.1Z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/agatisgroup",
    icon: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 4.4a5.6 5.6 0 1 0 0 11.2 5.6 5.6 0 0 0 0-11.2Zm0 1.7a3.9 3.9 0 1 1 0 7.8 3.9 3.9 0 0 1 0-7.8Zm5.4-3.1a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6Z",
  },
  {
    label: "Substack",
    href: "https://agatisgroup.substack.com",
    icon: "M3.5 3h17v2.4h-17V3Zm0 4.1h17V21l-8.5-4.77L3.5 21V7.1Z",
  },
];
