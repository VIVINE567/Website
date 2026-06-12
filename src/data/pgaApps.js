// PGA regulatory badges, application deep-dive, and PGA-vs-sodium-alginate comparison

// "Regulatory approvals"
export const REGULATORY = [
  { icon: '🇺🇸', title: 'FDA / GRAS', sub: '21 CFR 172.858' },
  { icon: '🇪🇺', title: 'EU E405', sub: 'Regulation (EC) No 1333/2008' },
  { icon: '🌍', title: 'JECFA INS 405', sub: 'ADI: 0–25 mg/kg bw/day' },
  { icon: '💊', title: 'USP / NF', sub: 'Pharma excipient monograph' },
  { icon: '📋', title: 'FCC', sub: 'Food Chemicals Codex' },
  { icon: '🕌', title: 'Halal / Kosher', sub: 'Certifiable on request' },
];

// "Application deep-dive"
export const APP_DETAILS = [
  {
    title: 'Food & Beverage', icon: '🍺',
    color: { bg: '#EBF5E3', tx: '#2D6612' },
    items: [
      { name: 'Beer & Malt Beverages', desc: 'Enhances foam head retention and cling (lacing) at 0.01–0.03%; does not affect taste or fermentation. Approved by major brewing standards.' },
      { name: 'Salad Dressings', desc: 'Stabilizes oil-in-water emulsions in acidic dressings (pH 3.5–4.5) where sodium alginate would precipitate. Use level: 0.2–0.5%.' },
      { name: 'Fruit Beverages & Juices', desc: 'Provides cloud stability and pulp suspension in acidic fruit drinks, juices, and flavoured water at 0.05–0.2%.' },
      { name: 'Dairy Desserts & Ice Cream', desc: 'Improves body, overrun, and meltdown resistance in ice cream; stabilizes whipped cream and mousse at 0.1–0.3%.' },
      { name: 'Sauces & Condiments', desc: 'Builds viscosity and stabilizes emulsified sauces (mayonnaise-type, hot sauces) at 0.1–0.4%. Acid-stable across pH 3–5.' },
      { name: 'Whipped Toppings & Confectionery', desc: 'Stabilizes aerated structures in non-dairy whipped toppings, mousse, and meringue by forming a protective film around air bubbles.' },
    ],
  },
  {
    title: 'Pharmaceutical', icon: '💊',
    color: { bg: '#EBF1FA', tx: '#1B4F8A' },
    items: [
      { name: 'Tablet Binder & Disintegrant', desc: 'Used as a wet or dry binder in tablet manufacturing; promotes rapid disintegration on oral dissolution. Meets USP/NF excipient monograph requirements.' },
      { name: 'Controlled-Release Matrix', desc: 'Forms hydrophilic matrices for oral controlled-release tablets; modulates drug release in gastric (acidic) environments where unesterified alginates fail.' },
      { name: 'Topical Gels & Ointments', desc: 'Provides clear, elegant gels with good skin spreadability and non-greasy feel; compatible with active pharmaceutical ingredients (APIs) across a range of pH.' },
      { name: 'Oral Suspensions & Emulsions', desc: 'Stabilizes oral pharmaceutical suspensions and liquid emulsions; imparts viscosity and particle suspension stability at use levels of 0.1–0.5%.' },
    ],
  },
  {
    title: 'Cosmetics & Personal Care', icon: '💄',
    color: { bg: '#FAEDF3', tx: '#8A1F4A' },
    items: [
      { name: 'Lotions & Creams', desc: 'Functions as an emulsion stabilizer and thickener in O/W moisturizing creams and lotions; imparts a smooth, non-tacky skin feel. Typical use: 0.3–1.0%.' },
      { name: 'Shampoos & Conditioners', desc: 'Builds viscosity, enhances foam quality and stability, and conditions hair. Compatible with anionic and amphoteric surfactant systems.' },
      { name: 'Sunscreens & SPF Emulsions', desc: 'Stabilizes UV-filter emulsions; maintains SPF product homogeneity and spreadability across storage temperatures and acidic pH ranges.' },
      { name: 'Face Serums & Gels', desc: 'Forms clear, lightweight films on skin; provides a moisturizing and film-forming effect in gel-based serums and sheet masks at 0.2–0.5%.' },
      { name: 'Toothpaste & Oral Care', desc: 'Acts as a binder, thickener, and texturizer in toothpaste formulations; compatible with calcium-containing abrasives when esterification is sufficient.' },
    ],
  },
];

// "PGA vs. Sodium Alginate — key differences"
// Cell can be a string, or { t, hl: 'good' | 'neg' } for coloured emphasis
export const COMPARISON = {
  cols: ['Property', 'Propylene Glycol Alginate (PGA)', 'Sodium Alginate'],
  rows: [
    ['CAS / E number', '9005-37-2 / E405', '9005-38-3 / E401'],
    ['Acid stability (pH < 4)', { t: '✔ Stable — remains soluble', hl: 'good' }, { t: '✘ Precipitates as alginic acid', hl: 'neg' }],
    ['Emulsification', { t: '✔ Good O/W emulsifier (ester groups)', hl: 'good' }, 'Limited surface activity'],
    ['Foam stabilization', { t: '✔ Excellent (beer, dairy foam)', hl: 'good' }, 'Poor'],
    ['Calcium sensitivity', 'Low — ester groups reduce Ca²⁺ crosslinking', 'High — gels in presence of Ca²⁺'],
    ['Thickening power', 'Good (lower than Na-alginate at same concentration)', { t: 'Higher thickening efficiency', hl: 'good' }],
    ['Gel formation', 'Does not form ionotropic gels', { t: 'Forms firm gels with Ca²⁺', hl: 'good' }],
    ['Typical use level (food)', '0.01–0.5%', '0.1–1.0%'],
    ['Best for', 'Acidic emulsions, beer foam, fruit beverages, dressings', 'Gels, restructured foods, neutral thickening'],
  ],
};
