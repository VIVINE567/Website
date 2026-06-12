// Carrageenan-specific content matching carrageenan_vivine_international.html
// Industry color tokens (same palette as the HTML reference)
export const IC = {
  food:       { bg: '#E4EEF8', tx: '#0A3A5A' },
  dairy:      { bg: '#EAF5FB', tx: '#0A5A80' },
  meat:       { bg: '#F8EEE8', tx: '#7A3010' },
  plantbased: { bg: '#E8F5EA', tx: '#1A6830' },
  pharma:     { bg: '#EEE8F8', tx: '#401A90' },
  cosmetic:   { bg: '#F8E8F2', tx: '#781A60' },
  petfood:    { bg: '#EAF0F8', tx: '#1A3880' },
  all:        { bg: '#E4EFF8', tx: '#0E4D6E' },
};

export const HERO = {
  productTag: 'Sulphated polysaccharide · Red seaweed · E407 / E407a · GRAS',
  title: 'Carrageenan',
  cas: 'CAS 9000-07-1 (κ / ι) · 9064-57-7 (λ) · E407 (RC) · E407a (SRC/PES) · INS 407 · INS 407a',
  desc: "Carrageenan is a family of natural sulphated polysaccharides extracted from red seaweed species (Eucheuma cottonii, Eucheuma spinosum, Chondrus crispus, Gigartina spp.). Three principal types — kappa (κ), iota (ι), and lambda (λ) — each deliver distinct gel textures and functional profiles. Kappa forms firm, brittle gels in potassium-rich systems; iota produces soft, elastic, freeze-thaw stable gels in calcium-rich systems; lambda remains fully soluble without gelling and acts as a cold-process thickener and stabiliser. Carrageenan is the world's most important dairy hydrocolloid — used in chocolate milk, ice cream, processed cheese, yogurt, infant formula, and plant-based dairy alternatives.",
  statPills: [
    { val: 'E407 / GRAS', lbl: 'Global food approval' },
    { val: '3 types', lbl: 'κ · ι · λ' },
    { val: '7 industries', lbl: 'Served globally' },
    { val: '0.01–1%', lbl: 'Typical use level' },
  ],
};

// Gel strength comparison — mirrors the Chart.js bar chart in the HTML reference
export const GEL_CHART = {
  title: 'Gel strength by carrageenan type & system (g/cm²)',
  sub: 'Indicative at 0.5% — actual values depend on cation concentration and matrix',
  axisLabel: 'Indicative gel strength (g/cm²)',
  bars: [
    { label: 'κ-Carr. in water', sub: '0.5% + KCl', val: 1800, color: '#2080C8' },
    { label: 'κ-Carr. in milk', sub: '0.5%', val: 800, color: '#40A8D8' },
    { label: 'κ+LBG synergy', sub: 'water', val: 2200, color: '#8090D0' },
    { label: 'ι-Carr. in water', sub: '0.5%', val: 300, color: '#E87830' },
    { label: 'ι-Carr.+Ca²⁺', sub: '0.5%', val: 500, color: '#60C080' },
    { label: 'λ-Carr.', sub: 'no gel', val: 0, color: '#C040A0', note: 'Does not gel (thickener only)' },
  ],
};

export const HIGHLIGHTS = [
  { icon: '🌊', val: 'Red seaweed origin', lbl: 'Eucheuma · Chondrus' },
  { icon: '🥛', val: 'Dairy standard', lbl: 'Chocolate milk · Ice cream' },
  { icon: '🧊', val: 'Gelling agent', lbl: 'κ: firm · ι: elastic' },
  { icon: '💧', val: 'Stabiliser', lbl: 'Suspension control' },
  { icon: '✅', val: 'E407 / E407a', lbl: 'RC & SRC/PES grades' },
  { icon: '🌿', val: 'Natural · Vegan', lbl: 'Non-GMO · Gluten-free' },
  { icon: '🥩', val: 'Meat processing', lbl: 'Water binding · Yield' },
  { icon: '🐾', val: 'Pet food grade', lbl: 'Wet food gelling' },
];

// Three types of carrageenan — κ, ι, λ (type-banner in HTML)
export const TYPE_COMPARE = [
  {
    name: 'Kappa (κ) Carrageenan',
    sub: 'Firm gel · High firmness',
    color: { bg: '#E4EEF8', border: '#A8C4DC', tx: '#0A3A5A' },
    props: [
      ['Gel texture', 'Firm, brittle gel'],
      ['Activator', 'Potassium ions (K⁺)'],
      ['Seaweed source', 'Eucheuma cottonii'],
      ['Gel strength', 'High (200–2000 g/cm²)'],
      ['Freeze-thaw', 'Poor (syneresis)'],
      ['Key uses', 'Dairy, processed cheese, pet food, meat, plant-based'],
    ],
  },
  {
    name: 'Iota (ι) Carrageenan',
    sub: 'Elastic gel · Freeze-thaw stable',
    color: { bg: '#E8F4F8', border: '#A0C8D8', tx: '#0A3A4A' },
    props: [
      ['Gel texture', 'Soft, elastic gel'],
      ['Activator', 'Calcium ions (Ca²⁺)'],
      ['Seaweed source', 'Eucheuma spinosum'],
      ['Gel strength', 'Moderate (50–500 g/cm²)'],
      ['Freeze-thaw', 'Excellent (no syneresis)'],
      ['Key uses', 'Dairy desserts, dressings, cosmetics, infant formula'],
    ],
  },
  {
    name: 'Lambda (λ) Carrageenan',
    sub: 'No gel · Cold-process thickener',
    color: { bg: '#EEF0F8', border: '#B0B8D8', tx: '#1A2060' },
    props: [
      ['Gel texture', 'Does not gel'],
      ['Activator', 'None — fully soluble'],
      ['Seaweed source', 'Gigartina, Chondrus'],
      ['Sulphate content', 'Highest (~35%)'],
      ['Freeze-thaw', 'Excellent (liquid)'],
      ['Key uses', 'Chocolate milk, beverages, dairy thickening, cosmetics'],
    ],
  },
];

export const INFO_CARDS = [
  {
    title: 'Unique protein reactivity — dairy hydrocolloid of choice',
    body: "Carrageenan's anionic sulphate groups interact electrostatically with positively charged regions on casein micelles and whey proteins in dairy systems. This protein-hydrocolloid interaction is unique to carrageenan — it explains why as little as 0.01–0.02% kappa-carrageenan stabilises chocolate milk against cocoa settling without affecting flavour, and why carrageenan is unmatched in dairy applications by any other hydrocolloid.",
  },
  {
    title: 'Ion-activated gelation — K⁺ for kappa, Ca²⁺ for iota',
    body: 'Kappa-carrageenan forms firm, thermoreversible gels activated by potassium ions — gelling at ~40°C and melting at ~60°C (hysteresis). Iota-carrageenan forms soft, elastic, freeze-thaw stable gels activated by calcium ions. Lambda-carrageenan carries the highest sulphate content (~35%) and does not gel, instead providing pseudoplastic thickening in cold and hot systems. Gel strength and texture are precisely tunable by adjusting cation concentration and carrageenan type blend ratios.',
  },
  {
    title: 'Refined (RC, E407) vs Semi-Refined Carrageenan (SRC/PES, E407a)',
    body: 'Refined Carrageenan (RC, E407) undergoes full alcohol or KCl precipitation purification — producing a high-purity (≥ 97% on dry basis), low-cellulose powder. Semi-Refined Carrageenan (SRC, also called Processed Eucheuma Seaweed, PES, E407a) retains 8–15% cellulose from the seaweed cell wall. RC is used in dairy, pharmaceuticals, and cosmetics; SRC/PES offers a cost-effective alternative for pet food, processed meat, and industrial food applications.',
  },
  {
    title: 'Exceptional cocoa / particle suspension in beverages',
    body: 'In chocolate milk and flavoured dairy beverages, kappa and lambda carrageenan at 0.01–0.025% prevent settling of cocoa particles and fat globules during shelf life — without building measurable viscosity. This "network suspension" mechanism exploits carrageenan\'s interaction with casein micelles to form a weak gel network that suspends particles at rest but breaks down immediately on shaking.',
  },
  {
    title: 'Water binding and yield improvement in processed meats',
    body: 'In ham, sausage, and processed meat systems, kappa-carrageenan (0.1–0.5%) functions as a water binder — forming a gel network within the meat matrix that retains water during cooking, slicing, and storage. This reduces cook loss, improves sliceability and texture, and increases product yield by 5–15% — a commercially significant benefit for large-scale meat processors.',
  },
  {
    title: 'Synergy with LBG, KCl, and casein',
    body: 'Kappa-carrageenan combined with Locust Bean Gum (LBG) produces gels 5–10× firmer than carrageenan alone — a synergistic interaction exploited in processed cheese, dairy desserts, and wet pet food. Combined with potassium chloride (KCl), kappa-carrageenan gel strength and melting temperature increase. Interaction with milk casein provides the unique dairy stabilisation mechanism in chocolate milk and ice cream at ultra-low concentrations (0.01–0.025%).',
  },
];
