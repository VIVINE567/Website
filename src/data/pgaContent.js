// PGA-specific content matching "Propylene glycol alginate (PGA).html"
// Industry color tokens (same palette as the HTML reference)
export const IC = {
  food:     { bg: '#EBF5E3', tx: '#2D6612' },
  pharma:   { bg: '#EBF1FA', tx: '#1B4F8A' },
  cosmetic: { bg: '#FAEDF3', tx: '#8A1F4A' },
  all:      { bg: '#E8F5EE', tx: '#1A5C3A' },
};

export const HERO = {
  productTag: 'Alginate ester · Anionic polysaccharide · E405',
  title: 'Propylene Glycol Alginate (PGA)',
  cas: 'CAS 9005-37-2 · E405 · Hydroxypropyl Alginate / Alginate PG Ester',
  desc: 'Propylene Glycol Alginate (PGA) is the propylene glycol ester of alginic acid, derived from brown seaweed (Macrocystis pyrifera, Laminaria spp.). Unlike sodium alginate, PGA is uniquely stable in acidic conditions (pH 3–6) and acts as a high-performance emulsifier, thickener, stabilizer, and foam stabilizer across food & beverage, cosmetic, and pharmaceutical applications. Available in food grade (E405), pharma grade (USP/NF), and cosmetic grade.',
  statPills: [
    { val: 'E405 / GRAS', lbl: 'Food approved' },
    { val: '3 grades', lbl: 'Available' },
    { val: '20–1,000+', lbl: 'mPa·s range' },
    { val: 'USP · NF', lbl: 'Pharma standard' },
  ],
};

export const HIGHLIGHTS = [
  { icon: '🍋', val: 'Acid-stable', lbl: 'pH 3–6 stability' },
  { icon: '🌊', val: 'Seaweed-derived', lbl: 'Natural & sustainable' },
  { icon: '🫧', val: 'Foam stabilizer', lbl: 'Beer & whipped products' },
  { icon: '🧴', val: 'Emulsifier', lbl: 'O/W emulsion stabilizer' },
  { icon: '✅', val: 'E405 / GRAS', lbl: 'Food & pharma approved' },
  { icon: '♻️', val: 'Biodegradable', lbl: 'Eco-friendly biopolymer' },
];

// "Key properties of PGA"
export const INFO_CARDS = [
  {
    title: 'Acid stability — unique among alginates',
    body: 'Sodium alginate precipitates below pH 4. PGA, as a propylene glycol ester, remains soluble and functional in acidic media (pH 3–6), making it the preferred alginate derivative for acidic beverages, salad dressings, fruit preparations, and acidic pharmaceutical formulations.',
  },
  {
    title: 'Dual function: emulsifier + thickener',
    body: 'PGA stabilizes oil-in-water emulsions and simultaneously builds viscosity — a dual role that reduces the need for multiple additives. Ester groups impart surface activity, allowing PGA to adsorb at the oil–water interface. Typical use levels: 0.1–0.5% in food; 0.3–1.0% in cosmetics.',
  },
  {
    title: 'Exceptional foam stabilization',
    body: 'PGA is the gold-standard foam stabilizer in beer — it enhances head retention and cling (lacing) without affecting flavour or fermentation. It also stabilizes whipped cream, mousse, meringue, and aerosol toppings by forming a protective film around gas bubbles.',
  },
  {
    title: 'Degree of esterification (DE) controls function',
    body: 'The degree of esterification (typically 50–85% of carboxyl groups) controls solubility, surface activity, and viscosity. Higher DE grades (≥75%) provide better emulsification; lower DE grades have greater thickening efficiency. VIVINE International supplies grades across the DE spectrum to match specific application needs.',
  },
];

// "Viscosity comparison" — mirrors the Chart.js logarithmic bar chart in the HTML
export const VISC_CHART = {
  title: 'Max viscosity by PGA grade (mPa·s)',
  sub: 'Logarithmic scale — values at 1% solution, 25°C',
  logMin: 10,            // log-scale floor for bar-height computation
  ticks: [100, 200, 500, 1000],
  bars: [
    { label: 'Food Low', val: 100, color: '#A8D5B5' },
    { label: 'Food Medium', val: 400, color: '#4CAF82' },
    { label: 'Food High', val: 1000, color: '#1A7A4A' },
    { label: 'Pharma', val: 600, color: '#7EAEE8' },
    { label: 'Cosmetic', val: 1000, color: '#E893B8' },
  ],
};
