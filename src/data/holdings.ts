/**
 * Portfolio holdings, migrated from the live site.
 * Public equity (listed, with ticker) and private equity (unlisted).
 */

export type Holding = {
  name: string;
  ticker?: string;
  sector: string;
  description: string;
};

export const publicEquity = {
  title: "Public Equity",
  strategy:
    "Our public equity strategy prioritizes efficient capital allocation. By focusing on minority positions in wonderful public companies, we maintain a lean operational footprint — concentrating our energy on high-level capital allocation rather than the day-to-day management of portfolio companies.",
  performanceNote:
    "Agatis Public Equity significantly outperformed both local and global benchmarks in 2025, delivering a 48.1% return. Despite a brief drawdown in early 2025, the portfolio recovered strongly from March onward and accelerated through the second half of the year — reflecting disciplined stock selection and resilient positioning across market cycles.",
  performance: {
    year: 2025,
    results: [
      { label: "Agatis Public Equity", value: 48.1, highlight: true },
      { label: "Jakarta Composite Index (JCI)", value: 22.1, highlight: false },
      { label: "S&P 500", value: 16.4, highlight: false },
    ],
  },
} as const;

export const publicHoldings: Holding[] = [
  {
    name: "PT Akasha Wira International Tbk",
    ticker: "ADES",
    sector: "Beverages & Consumer Goods",
    description:
      "Operates across two business segments — bottling and distribution of drinking water, and manufacturing and trading of food and cosmetic products — in both Indonesia and overseas markets. Its bottled water is distributed under the Nestlé Pure Life and Vica Royal trademarks.",
  },
  {
    name: "PT Cahaya Aero Services Tbk",
    ticker: "CASS",
    sector: "Aviation Services",
    description:
      "Provides aviation support services, food solutions, and facility management across four divisions: ground and cargo handling, aircraft release and maintenance, catering, and aviation training. The majority of revenue comes from ground and cargo handling, all within Indonesia.",
  },
  {
    name: "PT Garuda Maintenance Facility Aero Asia Tbk",
    ticker: "GMFI",
    sector: "Aircraft Maintenance",
    description:
      "An Indonesia-based aircraft maintenance company offering line and base maintenance, component and engineering services, calibration, logistics, cabin maintenance, consulting, and training. It operates through Airframe, Engine & Component; Line Maintenance & Technical Ground Handling; and Other Operations segments.",
  },
  {
    name: "PT Jasuindo Tiga Perkasa Tbk",
    ticker: "JTPE",
    sector: "Security Printing",
    description:
      "Produces business forms and security printing products. Its Security segment covers documents requiring special permits — checkbooks, giro forms, and stock certificates — while the Non-Security segment serves general printing needs, sold both domestically and internationally.",
  },
  {
    name: "PT Kurniamitra Duta Sentosa Tbk",
    ticker: "KMDS",
    sector: "Food & Beverage Distribution",
    description:
      "Established for more than twenty years in the F&B industry and recognized for distributing superior food and beverage products. It also provides training and free consultations for beverage and food applications, operating across Java Island and Outside Java Island segments.",
  },
  {
    name: "PT Metrodata Electronics Tbk",
    ticker: "MTDL",
    sector: "Information & Communication Technology",
    description:
      "Operates in the ICT industry through two segments: Distribution — the largest revenue contributor, covering hardware, software, and peripherals — and Solutions & Consulting, spanning maintenance, professional services, system software, and implementation.",
  },
  {
    name: "PT Selamat Sempurna Tbk",
    ticker: "SMSM",
    sector: "Automotive Components",
    description:
      "Manufactures filters, radiators, oil coolers, condensers, fuel tanks, exhaust systems, and press parts. Under its flagship Sakura Filter brand — registered in more than 130 countries — SMSM exports to over 125 countries. Publicly listed on the Indonesia Stock Exchange since 1996.",
  },
];

export const privateEquity = {
  title: "Private Equity",
  strategy:
    "At our core, we believe in fostering sustainable growth through strategic minority investments in Indonesia's dynamic emerging market. By acquiring non-controlling stakes in high-potential companies, we empower local entrepreneurs — providing capital, expertise, and networks to accelerate expansion without disrupting founder-led governance.",
} as const;

export const privateHoldings: Holding[] = [
  {
    name: "PT Mahkota Binatu Cemerlang",
    sector: "Barossie Laundry · est. 1993",
    description:
      "Barossie Laundry and Dry Clean was established in 1993, making it one of the pioneers in the laundry industry that continues to grow today. Born from the rise of luxury and branded clothing in 1990s Jakarta, it was founded to provide the best solutions for caring for and cleaning garments that require special treatment.",
  },
  {
    name: "PT Baterindo Lab Energi",
    sector: "SWAP Energi Indonesia · est. 2019",
    description:
      "An energy-technology company in the electric-vehicle ecosystem, providing battery-swapping solutions. Founded in 2019, SWAP Energi now operates more than 1,500 battery-swapping stations across Indonesia and is recognized as the Southeast Asian market leader — winner of the World Summit Award (WSA) 2022 in the Environment & Green Energy category.",
  },
];
