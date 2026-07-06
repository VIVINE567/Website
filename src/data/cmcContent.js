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
  productTag: 'Anionic cellulose ether · Water-soluble · E466 · API 13A · Ph.Eur. · USP-NF · Broadest industrial range',
  title: 'Sodium Carboxymethyl Cellulose (CMC)',
  cas: 'CAS 9004-32-4 · E466 · Cellulose Gum / Na-CMC / Sodium CMC',
  desc: 'Sodium Carboxymethyl Cellulose (Sodium CMC), also widely known as Cellulose Gum, is an anionic, water-soluble cellulose ether produced by the carboxymethylation of alkali cellulose with monochloroacetic acid. The degree of substitution (DS) and molecular weight — expressed as solution viscosity — are the two primary parameters that define performance. Sodium CMC dissolves readily in cold water to form stable, pseudoplastic, salt-tolerant solutions. Its unique combination of high water-binding capacity, electrostatic stabilisation, film-forming ability, and rheology modification makes it indispensable across 8 major industries — from food thickening and oilfield drilling fluids to pharmaceutical tablet binders, textile sizing, detergent anti-redeposition agents, and ceramic binders.',
  statPills: [
    { val: 'CAS 9004-32-4', lbl: 'Chemical identity' },
    { val: 'E466 / GRAS', lbl: 'Food approval' },
    { val: '8 industries', lbl: 'Broadest range' },
    { val: 'DS 0.4–1.4', lbl: 'Substitution range' },
  ],
};

export const HIGHLIGHTS = [
  { icon: '🍽️', val: 'Food & Beverage', lbl: 'E466 · Thickener · Stabiliser' },
  { icon: '⛽', val: 'Oil & Gas Drilling', lbl: 'API 13A · Fluid loss control' },
  { icon: '📄', val: 'Paper & Board', lbl: 'Surface sizing · Coating' },
  { icon: '🧵', val: 'Textile', lbl: 'Warp sizing · Print paste' },
  { icon: '🧼', val: 'Detergents', lbl: 'Anti-redeposition · Builder' },
  { icon: '💊', val: 'Pharmaceuticals', lbl: 'Tablet binder · Ophthalmic' },
  { icon: '🧴', val: 'Personal & Oral Care', lbl: 'Toothpaste · Gels' },
  { icon: '🏺', val: 'Ceramics', lbl: 'Binder · Suspension' },
];

// "Key properties of CMC" — "What sets it apart from other cellulose Ethers"
export const INFO_CARDS = [
  {
    title: 'Anionic water-soluble polymer',
    body: 'The carboxymethyl (–CH₂–COO⁻Na⁺) groups on the cellulose backbone make Sodium CMC anionic — providing electrostatic repulsion that stabilises oil droplets and pigment particles. Its anionic charge is the basis for anti-redeposition function in detergents and suspension stability in drilling muds and paper coatings.',
  },
  {
    title: 'Degree of substitution (DS) — critical parameter',
    body: 'DS is the average number of carboxymethyl groups per anhydroglucose unit (range: 0.0–3.0; practical commercial range 0.4–1.4). DS controls solubility, salt tolerance, and ionic character. DS ≥ 0.4 is fully water-soluble. DS 0.6–0.95 suits standard food and industrial grades. DS > 0.9 supports high-purity pharma and oilfield grades.',
  },
  {
    title: 'Pseudoplastic (shear-thinning) rheology',
    body: 'Sodium CMC solutions are strongly pseudoplastic — viscosity drops substantially under shear (pumping, printing, mixing) and recovers on standing. This is ideal for drilling muds, textile print pastes, and food systems that require pourability under shear and body at rest.',
  },
  {
    title: 'Outstanding water-binding & retention',
    body: 'Sodium CMC has a high affinity for water — it binds and retains water in food systems, pharmaceuticals, and paper coatings. In ice cream, it is one of the most effective ice crystal growth inhibitors among approved hydrocolloids at equivalent dosage.',
  },
  {
    title: 'High salt tolerance (oilfield grade)',
    body: 'High DS Sodium CMC grades (DS ≥ 0.9–1.2) maintain viscosity and fluid-loss control in saturated saline drilling muds (NaCl, KCl, CaCl₂ brines). This is a defining requirement for API 13A-certified oilfield CMC grades.',
  },
  {
    title: 'Film-forming & adhesion',
    body: 'When dried, Sodium CMC forms transparent, oxygen-barrier films — used in paper surface sizing, textile warp sizing, and pharmaceutical tablets. The dried film dissolves cleanly in water, enabling easy wash-off in paper and textile processing.',
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
