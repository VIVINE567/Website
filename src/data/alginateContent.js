export const IC = {
  food:    { bg: '#E7EDDB', tx: '#2C3A23', bar: '#7E9A5A' },
  pharma:  { bg: '#E0E8E2', tx: '#38564A', bar: '#5E8472' },
  textile: { bg: '#F0E3DA', tx: '#8A5A4A', bar: '#C0954A' },
  care:    { bg: '#F1E7CD', tx: '#9A7A2E', bar: '#C9A84C' },
  animal:  { bg: '#E9E3D3', tx: '#6B6450', bar: '#9A8E70' },
  all:     { bg: '#F2E7CB', tx: '#9A7A2E', bar: '#C9A84C' },
};

export const HERO = {
  productTag: 'Anionic polysaccharide · Brown seaweed · E401 · GRAS · Ph.Eur. · USP-NF · Halal / Kosher · Vegan',
  title: 'Sodium Alginate',
  cas: 'CAS 9005-38-3 · E401 (EU) · INS 401 · GRAS 21 CFR 184.1724 · Ph.Eur. · USP-NF · BP · FCC monographed · INCI: Sodium Alginate',
  desc: `Sodium Alginate is the sodium salt of alginic acid — a natural, linear, anionic polysaccharide built from 1,4-linked β-D-mannuronate (M) and α-L-guluronate (G) residues, arranged in homopolymeric and alternating block sequences. Extracted from the cell walls of brown seaweed species including <em>Macrocystis pyrifera</em>, <em>Laminaria hyperborea</em>, and <em>Ascophyllum nodosum</em>, Sodium Alginate dissolves readily in cold water and gels instantaneously and <strong>irreversibly</strong> on contact with calcium ions (Ca²⁺) — a unique ionotropic gelation mechanism exploited across <strong>5 major industries</strong>. Unlike carrageenan, gelatin, and agar gels, calcium alginate gels are <strong>thermostable — they do not melt on heating</strong>, remaining intact up to ~150°C. The ratio of G-blocks to M-blocks from the seaweed source controls gel firmness, elasticity, and syneresis — the primary quality differentiation between grades.`,
  statPills: [
    { val: 'CAS 9005-38-3', lbl: 'Chemical identity' },
    { val: 'E401 / GRAS', lbl: 'Global food approval' },
    { val: '5 industries', lbl: 'Application range' },
    { val: 'Cold-soluble', lbl: 'No heat required' },
  ],
};

export const HIGHLIGHTS = [
  { icon: '🍽️', val: 'Food & Beverage',         lbl: 'E401 · Spherification · Restructured foods' },
  { icon: '💊',  val: 'Pharmaceuticals',          lbl: 'Ph.Eur. · USP-NF · Antacid rafts · Wound care' },
  { icon: '🎨',  val: 'Textile Printing',         lbl: 'Reactive dye · Industry standard thickener' },
  { icon: '🧴',  val: 'Personal Care',            lbl: 'INCI · Face masks · Toothpaste · Skincare' },
  { icon: '🐾',  val: 'Animal Nutrition',         lbl: 'Aquaculture · Wet Animal Nitrition · Probiotic beads' },
  { icon: '🌊',  val: 'Brown seaweed',            lbl: '100% natural origin' },
  { icon: '🔗',  val: 'Ca²⁺ ionotropic gel',      lbl: 'Instant · Irreversible · Thermostable' },
  { icon: '🌿',  val: 'Vegan · Halal · Kosher',   lbl: 'Certified — available on request' },
];

export const INFO_CARDS = [
  {
    title: 'Ionotropic gelation with Ca²⁺ — unique & irreversible',
    body: 'Sodium Alginate gels instantly and irreversibly when it contacts calcium ions — no heat required. Ca²⁺ cross-links the GG-block (guluronate) sequences via the egg-box junction zone model, forming a three-dimensional hydrogel network. This mechanism underlies spherification, encapsulation beads, restructured foods, wound dressing fibres, and dental impressions.',
  },
  {
    title: 'Thermostable gel — does not melt on heating',
    body: 'Unlike gelatin (~32°C), carrageenan (~60–75°C), agar (~85°C), and HPMC thermal gels, calcium alginate gels are stable up to ~150°C and do not melt — they remain intact during retort sterilisation (121°C). This makes alginate uniquely suited for retort-stable restructured foods, canned Animal Nitrition, autoclavable pharmaceutical devices, and high-temperature textile printing.',
  },
  {
    title: 'G-block / M-block ratio — gel character control',
    body: 'High guluronate (G) content alginate from Laminaria hyperborea stipes forms firm, brittle, low-syneresis gels — preferred for restructured foods, pharmaceutical beads, and dental impressions. High mannuronate (M) content alginate from Ascophyllum nodosum forms softer, more elastic gels with better freeze-thaw stability — preferred for wound care fibres, textile printing, and flexible food gels.',
  },
  {
    title: 'Cold-water solubility — no heat required',
    body: 'Sodium Alginate dissolves fully in cold water at pH 4–10 to form clear to slightly opalescent, pseudoplastic solutions. No elevated temperature is needed for dissolution — a critical advantage in heat-sensitive food and pharmaceutical formulations, and essential for cold-process textile printing paste preparation.',
  },
  {
    title: 'Pseudoplastic (shear-thinning) rheology',
    body: 'Sodium Alginate solutions are strongly pseudoplastic — viscosity drops under shear (pumping, printing, extrusion) and recovers at rest. In reactive textile printing, this provides clean, sharp print deposition through fine screen mesh without bleeding. In food, it delivers pourability under shear with good body and suspension stability at rest.',
  },
  {
    title: 'Chemical inertness to reactive dyes — key textile advantage',
    body: 'Sodium Alginate does not react chemically with reactive dyes (unlike starch derivatives and HEC which bond with reactive dyes and reduce fixation). This chemical inertness is the primary reason alginate accounts for >80% of reactive print paste thickeners on cotton globally — it preserves maximum dye fixation, gives the brightest colour yields, and washes out completely after steaming and washing.',
  },
];

export const VISC_CHART = {
  title: 'Sodium Alginate viscosity grades and primary application segments',
  sub: 'Log scale — range spans 20 to 1,200 mPa·s (1%, 25°C)',
  yLabel: 'Viscosity mPa·s (log scale) — Brookfield 1% 25°C',
  yTicks: [20, 50, 100, 250, 500, 1000],
  logMin: Math.log10(15),
  logMax: Math.log10(1200),
  labels: ['Food LV', 'Food MV', 'Food HV', 'Pharma MV', 'Pharma HG', 'Textile LV', 'Textile MV', 'Textile HV', 'Animal Feed'],
  vals:   [60, 250, 600, 250, 600, 100, 350, 900, 250],
  appLabels: [
    'Beverages / Salad dressings / Dairy',
    'Ice cream / Spherification / Animal Nitrition jelly',
    'Restructured meat / Noodles / Aquaculture feed',
    'Tablet binder / Oral suspensions / Mucoadhesive gels',
    'Antacid raft system / Dental impressions / Wound dressings',
    'Fine-line reactive print on lightweight cotton',
    'Rotary & flat screen reactive printing — standard',
    'Heavy fabric / Terry / Carpet reactive printing',
    'Aquaculture pellets / Animal Nitrition / Probiotic encapsulation',
  ],
  colors: ['#7E9A5A', '#5E8472', '#3D6B50', '#C9A84C', '#A08030', '#C0954A', '#9A7A2E', '#B07F68', '#8A6A42'],
};
