// Sodium CMC content matching "sodium_cmc_vivine_international.html"
// Industry color tokens — re-paletted into the VIVINE brand earth palette
// (forest / gold / clay / stone) so chips, badges, and chart agree with the
// rest of the site. `bar` drives the matching chart fill.
export const IC = {
  food:    { bg: '#E7EDDB', tx: '#3D4F2F', bar: '#7E9A5A' },
  oilgas:  { bg: '#ECE1CF', tx: '#6E4E2E', bar: '#8A6A42' },
  paper:   { bg: '#E3E9EE', tx: '#2F4966', bar: '#6F87A6' },
  textile: { bg: '#F0E3DA', tx: '#8A5A4A', bar: '#B07F68' },
  deterg:  { bg: '#E1EDEC', tx: '#2E5C57', bar: '#5E8F88' },
  pharma:  { bg: '#E0E8E2', tx: '#38564A', bar: '#5E8472' },
  care:    { bg: '#F5E1EA', tx: '#7A3255', bar: '#B0688F' },
  ceram:   { bg: '#F1E7CD', tx: '#7A5A20', bar: '#C0954A' },
  all:     { bg: '#F2E7CB', tx: '#9A7A2E', bar: '#C9A84C' },
};

export const HERO = {
  productTag: 'Anionic cellulose ether · Water-soluble · E466 · API 13A · Ph.Eur. · USP-NF · Broadest industrial range',
  title: 'Sodium CMC — Sodium Carboxymethyl Cellulose',
  cas: 'CAS 9004-32-4 · E466 / INS 466 (food) · Cellulose Gum · Carmellose Sodium (INN) · API Specification 13A (oilfield) · Ph.Eur. / USP-NF / BP monographed',
  desc: 'Sodium Carboxymethyl Cellulose (Sodium CMC), also widely known as Cellulose Gum, is an anionic, water-soluble cellulose ether produced by the carboxymethylation of alkali cellulose with monochloroacetic acid. The degree of substitution (DS) and molecular weight — expressed as solution viscosity — are the two primary parameters that define performance. Sodium CMC dissolves readily in cold water to form stable, pseudoplastic, salt-tolerant solutions. Its unique combination of high water-binding capacity, electrostatic stabilisation (anionic character), film-forming ability, and rheology modification makes it indispensable across 8 major industries — from food thickening and oilfield drilling fluids to pharmaceutical tablet binders, textile sizing, detergent anti-redeposition agents, and ceramic green-body binders.',
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
  { icon: '💊', val: 'Pharmaceuticals', lbl: 'Ph.Eur. · USP-NF · Carmellose' },
  { icon: '🧴', val: 'Personal & Oral Care', lbl: 'Toothpaste · Gels · Creams' },
  { icon: '🏺', val: 'Ceramics', lbl: 'Green-body binder · Glaze' },
];

// "Key properties of CMC" — "What makes it unique across 8 industries"
export const INFO_CARDS = [
  {
    title: 'Anionic water-soluble polymer',
    body: 'The carboxymethyl (–CH₂–COO⁻Na⁺) groups on the cellulose backbone make Sodium CMC anionic — providing electrostatic repulsion that stabilises oil droplets and pigment particles. Its anionic charge is the basis for anti-redeposition function in detergents and suspension stability in drilling muds and paper coatings.',
  },
  {
    title: 'Degree of substitution (DS) — critical parameter',
    body: 'DS is the average number of carboxymethyl groups per anhydroglucose unit (range: 0.0–3.0; practical commercial range 0.4–1.4). DS controls solubility, salt tolerance, and ionic character. DS ≥ 0.4 = fully water-soluble. DS 0.6–0.95 = standard food/industrial. DS > 0.9 = high purity, pharma and oilfield grades. DS determines interaction with multivalent ions (Ca²⁺, Mg²⁺) and compatibility in different ionic environments.',
  },
  {
    title: 'Pseudoplastic (shear-thinning) rheology',
    body: 'Sodium CMC solutions are strongly pseudoplastic — viscosity drops substantially under shear (pumping, printing, mixing) and recovers on standing. This is ideal for drilling muds (pump through drill string but suspend cuttings at rest), textile print pastes (flow through screens, sharp definition on fabric), and food applications (pourability under shear, body at rest).',
  },
  {
    title: 'Outstanding water-binding & retention',
    body: 'Sodium CMC has a high affinity for water — it binds and retains water in food systems (ice cream, bakery), pharmaceuticals (tablet matrix hydration), and paper coatings (film formation, surface sizing). In ice cream, it is one of the most effective ice crystal growth inhibitors among all approved hydrocolloids at equivalent dosage.',
  },
  {
    title: 'High salt tolerance (oilfield grade)',
    body: 'High DS Sodium CMC grades (DS ≥ 0.9–1.2) maintain viscosity and fluid loss control function in saturated saline drilling muds (NaCl, KCl, CaCl₂ brines). This is a defining requirement for oilfield CMC grades certified to API Specification 13A — where performance in high-salinity formations is critical.',
  },
  {
    title: 'Film-forming & adhesion',
    body: 'When dried, Sodium CMC forms transparent, oxygen-barrier films — exploited in paper surface sizing (grease resistance, printability), textile warp sizing (yarn strength, abrasion resistance), and pharmaceutical tablet coatings (moisture barrier). The film dissolves readily in water — enabling clean wash-off in textile and paper processing.',
  },
];

// "Viscosity grade guide by application" — mirrors the HTML Chart.js logarithmic bar chart
export const VISC_CHART = {
  title: 'Sodium CMC viscosity grades and primary application segments',
  sub: 'Log scale — range spans 10 to 3,000+ mPa·s (1%, 25°C)',
  yLabel: 'Viscosity mPa·s (log scale) — Brookfield 1% 25°C',
  yTicks: [10, 50, 100, 500, 1000, 2500],
  labels: ['10–80', '10–100', '200–800', '1,000–2,000', '2,000+', '50–400', '200–1,000', '200–800', 'Varies'],
  vals:   [40, 80, 500, 1500, 2500, 200, 600, 500, 300],
  appLabels: [
    'Detergent / Glaze suspension',
    'Beverages / Dairy drinks',
    'Ice cream / Ketchup / Bakery',
    'Ice cream premium / Gluten-free bread',
    'Pharmaceutical tablet / Ophthalmic',
    'Paper surface sizing / Coating',
    'Warp sizing / Print paste',
    'OCMA / HV oilfield drilling mud',
    'Toothpaste / Hair gel / Skincare',
  ],
  colors: ['#A8D098', '#4AAA60', '#1A7038', '#C8A040', '#8890D8', '#6040B8', '#4818A0', '#F080C0', '#C06890'],
};
