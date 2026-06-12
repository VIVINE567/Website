// Polyanionic Cellulose (PAC) content — mirrors "Polyanionic Cellulose (PAC) page.html"

// Industry colour tokens (HTML :root vars)
export const IC = {
  oilfield:     { bg: '#FBF3E2', tx: '#7C4A0E' },
  construction: { bg: '#F1EDE4', tx: '#5C4020' },
  textile:      { bg: '#EAF0F8', tx: '#1A4A7A' },
  industrial:   { bg: '#EEF0EA', tx: '#3A4A2A' },
  all:          { bg: '#FDF0E0', tx: '#7C4A0E' },
};

export const HERO = {
  productTag: 'Anionic cellulose ether · High-DS CMC · API 13A / ISO 13500',
  title: 'Polyanionic Cellulose (PAC)',
  cas: 'CAS 9004-32-4 (high-DS) · PAC-R · PAC-UHV / PAC-HV · API 13A Section 9',
  desc: 'Polyanionic Cellulose (PAC) is a high-purity, high-Degree of Substitution (DS 0.85–1.40) sodium carboxymethyl cellulose manufactured for demanding industrial environments. Its elevated DS and tightly controlled molecular weight deliver superior salt tolerance, high-temperature stability up to 150 °C, and exceptional fluid loss control — properties standard CMC (DS 0.65–0.90) cannot match. PAC is the industry-standard fluid loss additive in water-based drilling muds (API 13A compliant), a critical rheology modifier in construction chemicals, a high-performance warp-sizing agent in textile processing, and a binder and thickener for industrial chemical formulations.',
  statPills: [
    { val: 'API 13A', lbl: 'ISO 13500 oilfield std.' },
    { val: '5 grades', lbl: 'Available' },
    { val: 'DS 0.85–1.40', lbl: 'High substitution' },
    { val: 'Up to 150 °C', lbl: 'Thermal stability' },
  ],
};

export const HIGHLIGHTS = [
  { icon: '🛢️', val: 'API 13A / ISO 13500', lbl: 'Oilfield certified' },
  { icon: '🔬', val: 'DS 0.85–1.40', lbl: 'High substitution' },
  { icon: '🌡️', val: 'Up to 150 °C', lbl: 'HTHP thermal stability' },
  { icon: '🧂', val: 'Salt-tolerant', lbl: 'NaCl saturation / KCl brine' },
  { icon: '💧', val: 'API FL ≤ 15 mL', lbl: 'Fluid loss (PAC-R)' },
  { icon: '⚡', val: '≤ 4% residue', lbl: 'Acid-insoluble (PAC-R)' },
  { icon: '🏗️', val: 'Construction grade', lbl: 'Mortars & tile adhesives' },
  { icon: '🧵', val: 'Textile sizing', lbl: 'Warp thread protection' },
];

// "Key properties of PAC"
export const INFO_CARDS = [
  {
    title: 'High DS — the defining performance advantage',
    body: 'PAC is produced at DS 0.85–1.40, significantly higher than food/pharma CMC (DS 0.65–0.90). Higher DS means more carboxymethyl groups per cellulose chain — resulting in better water solubility, stronger electrolyte tolerance, more efficient filter cake formation on borehole walls, and higher thickening efficiency at lower dosages across all industrial applications.',
  },
  {
    title: 'Superior salt and electrolyte tolerance',
    body: 'PAC solutions maintain viscosity and fluid loss control in highly saline environments: freshwater, seawater, KCl brine (up to 3%), NaCl brine (up to saturation, ~26%), and calcium-containing muds. In these conditions, guar gum, starch, and low-DS CMC degrade or precipitate — PAC remains fully functional. Essential for offshore drilling and saline-formation operations.',
  },
  {
    title: 'Thermal stability up to 150 °C',
    body: 'PAC-UHV retains viscosity and fluid loss performance at downhole temperatures up to 150 °C (300 °F), qualifying it for HTHP drilling environments. The high DS reduces thermal oxidative degradation of carboxymethyl groups. Standard CMC loses functional performance above 90–100 °C, making PAC-UHV the only cellulose-based fluid loss additive suited to deep, high-temperature wells.',
  },
  {
    title: 'Low acid-insoluble residue (PAC-R)',
    body: 'PAC-R has acid-insoluble residue ≤ 4.0% per API 13A / ISO 13500, meaning minimal formation damage and clean filter cake in producing zones. Competitor products with high acid-insoluble content (cellulose fines, lignin) cause irreversible permeability damage in reservoir sections. Low residue PAC is specified in completion and near-wellbore drilling operations.',
  },
  {
    title: 'PAC-R vs. PAC-UHV — two molecular weight classes',
    body: 'PAC-R (Regular, 600–1,000 mPa·s at 1%) is primarily a fluid loss reducer with minimal viscosity impact — used when rheology is controlled separately with xanthan gum or bentonite. PAC-UHV / PAC-HV (1,000–8,000+ mPa·s) provides simultaneous fluid loss control and viscosity / yield point building — ideal for low-solids polymer muds and HTHP environments. VIVINE International supplies both classes.',
  },
  {
    title: 'High purity ≥ 95% — consistent performance',
    body: 'Oilfield-grade PAC contains ≥ 95% sodium carboxymethyl cellulose on a dry basis (vs. ≥ 90% for industrial CMC). Higher purity means consistent API 13A test compliance batch-to-batch, lower treating concentrations per cubic metre of mud, and reduced risk of formation plugging. Purity is verified via acid-insoluble residue and moisture testing per API 13A Section 9 methods.',
  },
];

// "Viscosity comparison" — mirrors the HTML Chart.js logarithmic bar chart (solid bars)
// HTML bars: PAC-R 1000, PAC-UHV/HV 8000, Construction 3000, Textile 2000, Industrial 5000
// HTML labelled ticks: 100, 500, 1000, 5000, 8000 — but the y-axis spans powers of 10
export const VISC_CHART = {
  title: 'Max viscosity by PAC grade (mPa·s)',
  sub: 'Logarithmic scale — 1% aqueous solution, 25 °C',
  header: 'Viscosity comparison',
  headerSub: 'Maximum viscosity at 1% aqueous solution, 25 °C, Brookfield LVT',
  ticks: [100, 1000, 8000],
  bars: [
    { label: 'PAC-R', val: 1000, color: '#E8A855' },
    { label: 'PAC-UHV/HV', val: 8000, color: '#C06010' },
    { label: 'Construction', val: 3000, color: '#8B6030' },
    { label: 'Textile', val: 2000, color: '#5A82B8' },
    { label: 'Industrial', val: 5000, color: '#6A8A5A' },
  ],
};
