// Sodium CMC content matching "sodium_cmc_product_page.html"
// Industry color tokens — re-paletted into the VIVINE brand earth palette
// (forest / gold / clay / stone) so chips, badges, and chart agree with the
// rest of the site. `bar` drives the matching chart fill.
export const IC = {
  food:         { bg: '#E7EDDB', tx: '#3D4F2F', bar: '#7E9A5A' },
  pharma:       { bg: '#E0E8E2', tx: '#38564A', bar: '#5E8472' },
  cosmetic:     { bg: '#F0E3DA', tx: '#8A5A4A', bar: '#B07F68' },
  construction: { bg: '#F1E7CD', tx: '#9A7A2E', bar: '#C0954A' },
  industrial:   { bg: '#E9E3D3', tx: '#6B6450', bar: '#9A8E70' },
  oilfield:     { bg: '#ECE1CF', tx: '#6E4E2E', bar: '#8A6A42' },
  all:          { bg: '#F2E7CB', tx: '#9A7A2E', bar: '#C9A84C' },
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
  // Bar colours drawn from the brand earth ramp (light gold → forest → clay → brown)
  bars: [
    { label: 'Low', val: 200, color: '#E8C97A' },
    { label: 'Medium', val: 800, color: '#C9A84C' },
    { label: 'High', val: 8000, color: '#C0954A' },
    { label: 'Food (E466)', val: 8000, color: '#7E9A5A' },
    { label: 'Pharma', val: 6000, color: '#5E8472' },
    { label: 'Cosmetic', val: 3000, color: '#B07F68' },
    { label: 'Industrial', val: 5000, color: '#9A8E70' },
    { label: 'Oilfield', val: 8000, color: '#8A6A42' },
  ],
};
