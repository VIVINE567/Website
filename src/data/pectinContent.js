// Pectin-specific content matching "pectin_VIVINE_international.html"
// Industry color tokens (same palette as the HTML reference)
export const IC = {
  jam:           { bg: '#FFF8E8', tx: '#7A4F00' },
  dairy:         { bg: '#FEF5E4', tx: '#7A5000' },
  beverage:      { bg: '#EAF5E4', tx: '#2A6B1A' },
  confectionery: { bg: '#FFF0E8', tx: '#8A3010' },
  bakery:        { bg: '#F5EAF8', tx: '#6A1F8A' },
  lowsugar:      { bg: '#E8F4FB', tx: '#1A5278' },
  all:           { bg: '#EAF5E4', tx: '#2A6B1A' },
};

export const HERO = {
  productTag: 'Natural polysaccharide · Plant-derived · Gelling agent · E440',
  title: 'Pectin (E440 / E440a / E440b)',
  cas: 'CAS 9000-69-5 · E440 · INS 440 · HS Code: 1302.20.00',
  desc: 'Pectin is a naturally occurring structural polysaccharide found in the cell walls of higher plants, commercially extracted from citrus peel (Citrus sinensis, C. limon) and apple pomace — both sustainable by-products of juice processing. Available in three types — High Methoxyl (HM), Low Methoxyl (LM), and Amidated Low Methoxyl (LMA) — pectin functions as a gelling agent, thickener, stabilizer, and emulsifier across jams, jellies, beverages, dairy, confectionery, and bakery applications. All grades comply with EU E440, FDA 21 CFR, FCC, and JECFA standards.',
  statPills: [
    { val: 'E440 / GRAS', lbl: 'EU · FDA approved' },
    { val: '3 types', lbl: 'HM · LM · LMA' },
    { val: 'DE 20–75%', lbl: 'Degree of esterification' },
    { val: '≥ 65%', lbl: 'Galacturonic acid' },
  ],
};

export const HIGHLIGHTS = [
  { icon: '🍋', val: 'Citrus & apple', lbl: 'Natural plant source' },
  { icon: '🫙', val: 'Gelling agent', lbl: 'Jams, jellies, confectionery' },
  { icon: '🥛', val: 'Protein stabilizer', lbl: 'Acidified dairy drinks' },
  { icon: '🫧', val: 'Low-sugar gelling', lbl: 'LM & LMA types' },
  { icon: '✅', val: 'E440 / JECFA', lbl: 'Food & regulatory compliant' },
  { icon: '🌿', val: 'Vegan & natural', lbl: 'Non-GMO · Clean label' },
];

// "Key properties of pectin"
export const INFO_CARDS = [
  {
    title: 'Degree of Esterification (DE) — the key parameter',
    body: 'DE defines the proportion of carboxyl groups esterified with methanol. DE > 50% = High Methoxyl (HM); DE < 50% = Low Methoxyl (LM). DE controls gelling mechanism, setting temperature, calcium sensitivity, and ideal application. In natural fruit, DE is typically 70–80%; controlled extraction reduces it to the desired level.',
  },
  {
    title: 'HM pectin — sugar & acid gelling',
    body: 'HM pectin (DE 50–75%) requires high soluble solids (55–85% sugar) and low pH (2.8–3.5) to form firm, thermally irreversible gels. Setting speed increases with DE and lower pH. Available as rapid-set (RS, DE 65–75%) and slow-set (SS, DE 50–65%) to control setting time in high-sugar jams, jellies, and confectionery.',
  },
  {
    title: 'LM pectin — calcium-ion gelling',
    body: 'LM pectin (DE 20–50%) forms gels with divalent calcium ions (Ca²⁺) across a wide pH range (2.6–7.0) and soluble solids range (10–70%). It does not require high sugar content, making it essential for low-sugar, reduced-calorie, and no-added-sugar products such as diet jams, fruit preparations, and dairy gels.',
  },
  {
    title: 'Amidated LM pectin (LMA) — thermally reversible',
    body: 'LMA pectin (DE 20–40%, DA 15–25%) is produced by amidating LM pectin with ammonia. It forms thermally reversible gels (melt-remelt) requiring less calcium than standard LM types (0.1–0.3% vs 0.3–0.5%). Highly tolerant of pH variation and heat processing — ideal for dairy desserts, pasteurized fruit preps, and retort-stable products.',
  },
];

// "Degree of esterification by grade" — mirrors the Chart.js stacked bar chart in the HTML.
// Each bar is a floating range drawn from `min` to `max` on a linear DE (%) scale.
export const DE_CHART = {
  title: 'DE range by pectin grade',
  sub: 'Higher DE = sugar-dependent gelling; Lower DE = calcium-dependent gelling',
  axisMax: 85,
  ticks: [0, 20, 40, 60, 80],
  axisLabel: 'Degree of Esterification (%)',
  bars: [
    { label: 'HM Rapid-Set', min: 65, max: 75, color: '#F4C842' },
    { label: 'HM Slow-Set', min: 50, max: 65, color: '#E8913A' },
    { label: 'LM Conventional', min: 20, max: 50, color: '#5BA8D8' },
    { label: 'LM Amidated (LMA)', min: 20, max: 40, color: '#A86DC8' },
    { label: 'Beverage grade (HM)', min: 68, max: 75, color: '#4CAF82' },
  ],
};
