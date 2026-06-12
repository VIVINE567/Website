// Sodium CMC content matching "sodium_cmc_product_page.html"
// Industry color tokens (same palette as the HTML reference)
export const IC = {
  food:         { bg: '#EBF5E3', tx: '#2D6612' },
  pharma:       { bg: '#EBF1FA', tx: '#1B4F8A' },
  cosmetic:     { bg: '#FAEDF3', tx: '#8A1F4A' },
  construction: { bg: '#FBF1E1', tx: '#8A5A0E' },
  industrial:   { bg: '#F1EFE8', tx: '#444441' },
  oilfield:     { bg: '#F5F0E8', tx: '#5C3D11' },
  all:          { bg: '#FEF3E2', tx: '#92400E' },
};

export const HERO = {
  productTag: 'Anionic cellulose ether · Cellulose Gum · E466',
  title: 'Sodium Carboxymethyl Cellulose (CMC)',
  cas: 'CAS 9004-32-4 · E466 · Cellulose Gum / Na-CMC / Sodium CMC',
  desc: 'Sodium CMC is a water-soluble anionic cellulose ether derived from natural wood pulp or cotton cellulose. It functions as a thickener, binder, stabilizer, emulsifier, film-former, and suspending agent across food, pharmaceutical, cosmetic, construction, textile, paper, detergent, and oilfield applications. Available in food grade, pharma grade, and industrial grade with a wide range of viscosity and DS options.',
  statPills: [
    { val: 'E466 / GRAS', lbl: 'Food approved' },
    { val: '8 grades', lbl: 'Available' },
    { val: '25–8,000+', lbl: 'mPa·s range' },
    { val: 'USP·BP·EP', lbl: 'Pharma standards' },
  ],
};

export const HIGHLIGHTS = [
  { icon: '💧', val: 'Cold water soluble', lbl: 'Hot & cold dispersible' },
  { icon: '⚡', val: 'Anionic polymer', lbl: 'Charge-active' },
  { icon: '🌿', val: 'Plant-derived', lbl: 'Wood / cotton cellulose' },
  { icon: '✅', val: 'E466 / GRAS', lbl: 'Food & pharma approved' },
  { icon: '🔬', val: 'DS 0.4–1.4', lbl: 'Tunable substitution' },
  { icon: '♻️', val: 'Biodegradable', lbl: 'Eco-friendly' },
];

// "Key properties of CMC" — "What sets it apart from other cellulose ethers"
export const INFO_CARDS = [
  {
    title: 'Anionic — unique among cellulose ethers',
    body: 'Unlike HPMC and HEC (non-ionic), CMC carries a negative charge. This makes it highly effective as a soil anti-redeposition agent in detergents, a dispersant in ceramics, and a binder in battery electrode manufacturing.',
  },
  {
    title: 'DS controls performance',
    body: 'The Degree of Substitution (DS 0.4–1.4) controls solubility, acid resistance, and salt compatibility. Higher DS grades offer better solubility and salt tolerance — critical for oilfield and detergent applications.',
  },
  {
    title: 'Cold water soluble — no heating needed',
    body: 'CMC dissolves readily in cold and hot water without heating. It does not form a thermal gel like HPMC, making it ideal for cold-process formulations in food, pharma, and cosmetics.',
  },
  {
    title: 'Wide pH stability',
    body: 'CMC solutions are stable across pH 5–11, with optimum performance at pH 7–9. Below pH 4, CMC precipitates as carboxymethyl cellulose acid — important to consider in acidic food and pharma formulations.',
  },
];

// "Viscosity comparison" — mirrors the HTML Chart.js logarithmic bar chart.
// Solid bars (no faded styling — the HTML chart uses solid backgroundColor).
export const VISC_CHART = {
  title: 'Max viscosity by grade (mPa·s)',
  sub: 'Logarithmic scale — values span 200 to 8,000+ mPa·s',
  header: 'Viscosity comparison',
  headerSub: 'Max viscosity at 2% solution, 25°C',
  // logarithmic y-axis: only these ticks were labelled in the HTML
  ticks: [100, 1000, 8000],
  bars: [
    { label: 'Low', val: 200, color: '#F6C89A' },
    { label: 'Medium', val: 800, color: '#E8913A' },
    { label: 'High', val: 8000, color: '#C26A0A' },
    { label: 'Food (E466)', val: 8000, color: '#C0DD97' },
    { label: 'Pharma', val: 6000, color: '#85B7EB' },
    { label: 'Cosmetic', val: 3000, color: '#ED93B1' },
    { label: 'Industrial', val: 5000, color: '#A8B8A0' },
    { label: 'Oilfield', val: 8000, color: '#8B6914' },
  ],
};
