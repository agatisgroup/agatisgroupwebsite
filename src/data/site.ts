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
    icon: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.59-.07-4.74-.07Zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm0 1.62a3.68 3.68 0 1 0 0 7.36 3.68 3.68 0 0 0 0-7.36Zm5.5-2.9a1.24 1.24 0 1 1 0 2.48 1.24 1.24 0 0 1 0-2.48Z",
  },
  {
    label: "Substack",
    href: "https://agatisgroup.substack.com",
    icon: "M3.5 3h17v2.4h-17V3Zm0 4.1h17V21l-8.5-4.77L3.5 21V7.1Z",
  },
];
