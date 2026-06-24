// MHEC-specific content matching mhec_vivine_international.html
// Industry / application color tokens (same palette as the HTML reference)
export const IC = {
  tile:   { bg: '#E4F0DC', tx: '#1A4A0A' },
  putty:  { bg: '#DDF0D8', tx: '#124008' },
  skim:   { bg: '#D4ECD0', tx: '#0E3808' },
  gypsum: { bg: '#EAF5E4', tx: '#1E5010' },
  drymix: { bg: '#F0F8EA', tx: '#286018' },
  paint:  { bg: '#EAF0FB', tx: '#0A2A6A' },
  deterg: { bg: '#FBF0E4', tx: '#6A3A0A' },
  oil:    { bg: '#F8EEE8', tx: '#7A2A10' },
  ceram:  { bg: '#F0EAF8', tx: '#3A1A7A' },
  all:    { bg: '#E4F0DC', tx: '#2A5C18' },
};

export const HERO = {
  productTag: 'Cellulose ether · Non-ionic · Construction grade · Water retention agent',
  title: 'MHEC — Methyl Hydroxyethyl Cellulose',
  cas: 'CAS 9032-42-2 · HEMC (alternative nomenclature) · EC 618-387-6 · Cellulose, 2-hydroxyethyl methyl ether',
  desc: 'Methyl Hydroxyethyl Cellulose (MHEC) is a non-ionic, water-soluble cellulose ether produced by the etherification of purified cellulose with methyl chloride and ethylene oxide. It dissolves readily in cold water to form stable, pseudoplastic solutions with excellent water retention, thickening, and workability properties. MHEC is the dominant cellulose ether in the construction chemicals industry — functioning as a water retention agent, anti-sagging additive, and workability modifier in tile adhesives, wall putty, skim coat, gypsum plaster, cement render, and dry-mix mortar systems. The designation MHEC-RD refers to construction-specific grades optimised for ready-mix dry mortar (RD) applications.',
  statPills: [
    { val: 'CAS 9032-42-2', lbl: 'Chemical identity' },
    { val: 'Non-ionic', lbl: 'Cellulose ether' },
    { val: '5 industries', lbl: 'Served globally' },
    { val: '0.1–0.5%', lbl: 'Typical dosage (w/w)' },
  ],
};

export const HIGHLIGHTS = [
  { icon: '🏗️', val: 'Construction standard', lbl: 'Tile adhesive · Putty · Mortar' },
  { icon: '💧', val: 'Water retention', lbl: 'Prevents premature drying' },
  { icon: '🔧', val: 'Workability', lbl: 'Sag resistance · Open time' },
  { icon: '🌡️', val: 'Thermal gelation', lbl: 'Gels on heating, re-dissolves' },
  { icon: '⚗️', val: 'Non-ionic', lbl: 'Electrolyte tolerant' },
  { icon: '📐', val: 'Anti-sag', lbl: 'Vertical surface stability' },
  { icon: '🌿', val: 'Cellulose origin', lbl: 'Wood pulp / cotton linters' },
  { icon: '🔬', val: 'Multiple viscosities', lbl: '10,000–200,000 mPa·s' },
];

// MHEC vs MHEC-RD — nomenclature comparison cards (type-banner in HTML)
export const TYPE_COMPARE = [
  {
    name: 'MHEC',
    sub: 'Generic chemical name',
    color: { bg: '#E4F0DC', border: '#A8C8A0', tx: '#1A4A0A' },
    props: [
      ['Full name', 'Methyl Hydroxyethyl Cellulose'],
      ['Substituents', 'Methyl (–OCH₃) + Hydroxyethyl (–OCH₂CH₂OH)'],
      ['CAS', '9032-42-2'],
      ['Solubility', 'Cold water soluble; gels on heating'],
      ['Ion character', 'Non-ionic — electrolyte stable'],
      ['Scope', 'All industries; refers to chemistry not application'],
    ],
  },
  {
    name: 'MHEC-RD',
    sub: 'Construction / dry-mix designation',
    color: { bg: '#EAF8E4', border: '#90C880', tx: '#0A3A06' },
    props: [
      ['RD stands for', 'Ready Dry-mix Mortar (or Ready Drymix)'],
      ['Optimised for', 'Dry-mix bagged construction products'],
      ['Key spec focus', 'Water retention ≥ 97%, sag resistance, open time'],
      ['Particle size', 'Fine powder for dry-blend compatibility'],
      ['Moisture', '≤ 5% — critical for dry-mix shelf life'],
      ['Scope', 'Construction only; designation varies by manufacturer'],
    ],
  },
];

export const SOURCING_NOTE = {
  title: '⚠️ Sourcing recommendation from VIVINE International',
  body: 'The "RD" suffix is <strong>not standardised</strong> across manufacturers — different producers use different naming conventions for construction-grade MHEC. When sourcing or specifying MHEC, always request the full technical data sheet and verify: <strong>viscosity grade</strong> (method: Brookfield 2% solution, 20°C), <strong>moisture content</strong> (≤ 5%), <strong>ash content</strong> (≤ 5%), <strong>water retention value</strong> (WRV, ≥ 96–98% depending on application), <strong>methoxy degree of substitution</strong> (DS: 1.3–2.0), and <strong>hydroxyethyl molar substitution</strong> (MS: 0.1–0.5). Rely on the specification, not the trade suffix.',
};

export const INFO_CARDS = [
  {
    title: 'Chemical structure',
    body: 'MHEC is derived from cellulose through sequential or simultaneous etherification: methyl groups (–OCH₃) are introduced via reaction with methyl chloride, and hydroxyethyl groups (–OCH₂CH₂OH) via ethylene oxide. The degree of substitution (DS) for methyl groups typically ranges from 1.3 to 2.0; the molar substitution (MS) for hydroxyethyl groups from 0.1 to 0.5. The combination of both substituents improves cold-water solubility and broadens the thermal gelation range compared to pure methylcellulose (MC).',
  },
  {
    title: 'Key functional mechanisms',
    body: 'MHEC in aqueous solution behaves as a pseudoplastic (shear-thinning) rheology modifier. In cement and gypsum systems, MHEC molecules form a hydrated film around cement particles, physically retaining mix water and preventing rapid absorption into the substrate. The methyl substituents also impart a reversible thermal gelation property — the polymer gels above its cloud point (~55–75°C), which aids anti-sag performance in freshly applied vertical renders.',
  },
  {
    title: 'Why non-ionic matters',
    body: 'Unlike carboxymethyl cellulose (CMC, anionic) or cationic cellulose ethers, MHEC carries no net charge. This makes it fully compatible with high-ionic-strength systems such as Portland cement, gypsum plaster, calcium hydroxide (slaked lime), and salt-containing oilfield fluids — environments where ionic cellulose ethers can precipitate or lose viscosity due to electrolyte interaction.',
  },
  {
    title: 'Thermal gelation & cloud point',
    body: 'MHEC exhibits inverse thermal solubility — it forms a gel when heated above its cloud point (typically 55–75°C depending on DS, MS, and concentration), and re-dissolves on cooling. In construction applications, this thermal gelation contributes to anti-sag performance in tile adhesive and render applied to hot substrates or in warm ambient conditions. The cloud point of MHEC is generally higher than that of pure MC, improving heat stability.',
  },
];
