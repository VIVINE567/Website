// Pectin regulatory badges, HM/LM/LMA comparison, and application deep-dive

// "Regulatory approvals"
export const REGULATORY = [
  { icon: '🇪🇺', title: 'EU E440 / E440a / E440b', sub: 'EC No 1333/2008 — food additive' },
  { icon: '🇺🇸', title: 'FDA 21 CFR 184.1588', sub: 'GRAS — Generally Recognized As Safe' },
  { icon: '🌍', title: 'JECFA / INS 440', sub: 'ADI: Not specified (safe)' },
  { icon: '📋', title: 'FCC (Food Chemicals Codex)', sub: 'Purity & quality specifications' },
  { icon: '☪️', title: 'Halal & Kosher', sub: 'Certifiable on request' },
  { icon: '🌱', title: 'Vegan / Non-GMO', sub: 'Plant-derived, clean label' },
];

// "HM vs LM vs LMA — key differences"
// Cell can be a string, or { t, hl: 'good' | 'no' } for coloured emphasis
export const TYPE_COMPARE = {
  cols: ['Property', 'HM Pectin (E440a)', 'LM Pectin (E440a)', 'Amidated LM Pectin (E440b)'],
  rows: [
    ['DE range', { t: '50–75%', mono: true }, { t: '20–50%', mono: true }, { t: '20–40% (DA 15–25%)', mono: true }],
    ['Gelling mechanism', 'Sugar + acid (no Ca²⁺ needed)', 'Calcium ions (Ca²⁺)', 'Calcium ions — lower Ca²⁺ demand'],
    ['Sugar requirement', { t: 'High: 55–85% SS', hl: 'good' }, 'Low: 10–70% SS', 'Low: 10–70% SS'],
    ['pH for gelation', { t: '2.8–3.5 (acidic only)', mono: true }, { t: '2.6–7.0 (wide range)', mono: true }, { t: '2.6–7.0 (wide range)', mono: true }],
    ['Gel reversibility', 'Irreversible (thermostable)', 'Irreversible (thermostable)', { t: 'Reversible (melt & reset)', hl: 'good' }],
    ['Calcium sensitivity', 'Not sensitive', 'High — 0.3–0.5% Ca²⁺', { t: 'Moderate — 0.1–0.3% Ca²⁺', hl: 'good' }],
    ['Low-sugar / diet use', { t: 'Not suitable', hl: 'no' }, { t: 'Excellent', hl: 'good' }, { t: 'Excellent', hl: 'good' }],
    ['Dairy protein stabilization', { t: 'Excellent (HM, high DE)', hl: 'good' }, 'Limited', { t: 'Good', hl: 'good' }],
    ['Setting speed control', { t: 'RS (rapid-set) / SS (slow-set)', hl: 'good' }, 'Controlled by Ca²⁺ & pH', 'Controlled by Ca²⁺ & pH'],
    ['Best applications', 'Traditional jams, jellies, beer/foam stabilizer, confectionery', 'Diet jam, fruit prep, dairy gel, baked fillings', 'Dairy desserts, retort products, pasteurized fruit preps'],
    ['E number', 'E440a', 'E440a', 'E440b (amidated)'],
  ],
};

// "Application deep-dive"
export const APP_DETAILS = [
  {
    title: 'Jams, Jellies & Preserves', icon: '🫙',
    color: { bg: '#FFF8E8', tx: '#7A4F00' },
    items: [
      { name: 'Traditional high-sugar jam', desc: 'HM rapid-set or slow-set pectin at 0.3–0.7% in high-sugar systems (60–65% SS, pH 3.0–3.3). Rapid-set for large-batch deposited jams; slow-set for continuous manufacturing lines requiring longer working time.' },
      { name: 'Low-sugar / reduced-sugar jam', desc: 'LM or LMA pectin at 0.5–1.2%, gelling with added calcium at 30–55% SS. LMA preferred for retort or thermally processed low-sugar jams due to its melt-remelt capability.' },
      { name: 'No-added-sugar jam', desc: 'LM pectin with careful calcium control at 10–30% SS, pH 2.8–3.5. Requires precise calcium buffering to avoid over-setting. Suitable for diabetic-friendly and functional food ranges.' },
      { name: 'Fruit jellies & clear gels', desc: 'HM slow-set pectin for clear, sparkling jellies requiring delayed gelation; allows filtration and de-aeration before setting at 55–70% SS and pH 3.0–3.5.' },
    ],
  },
  {
    title: 'Dairy & Acidified Milk Drinks', icon: '🥛',
    color: { bg: '#FEF5E4', tx: '#7A5000' },
    items: [
      { name: 'Drinking yoghurt / acidified milk', desc: 'HM pectin (DE ≥ 70%) at 0.2–0.5% stabilizes casein particles in acidified dairy drinks (pH 3.8–4.2) by forming a protective electrostatic coating around protein, preventing sedimentation and whey separation.' },
      { name: 'Fruit-flavoured milk drinks', desc: 'HM pectin at 0.15–0.4% prevents protein flocculation in low-pH fruit-flavoured milk and whey beverages. Provides viscosity and mouthfeel matching natural fruit juice.' },
      { name: 'Set yoghurt & dairy desserts', desc: 'LMA pectin at 0.3–0.8% provides a smooth, creamy gel texture in set dairy desserts and panna-cotta style products. Thermally reversible gel allows hot-fill and refrigerated setting without loss of structure.' },
      { name: 'Cream cheese & fresh cheese', desc: 'LM pectin at 0.2–0.6% improves texture, water retention, and slice-ability in processed and cream cheese analogues. Interacts with calcium naturally present in dairy systems.' },
    ],
  },
  {
    title: 'Beverages & Fruit Preparations', icon: '🧃',
    color: { bg: '#EAF5E4', tx: '#2A6B1A' },
    items: [
      { name: 'Fruit juice & nectar cloud stability', desc: 'HM pectin (viscosity-standardized, DE 68–75%) at 0.05–0.2% maintains cloud suspension and natural mouthfeel in fruit juice drinks, nectars, and flavoured water where pulp would otherwise sediment.' },
      { name: 'Low-calorie / diet beverages', desc: 'HM pectin at 0.1–0.3% rebuilds mouthfeel and viscosity lost when sugar is reduced or removed in low-calorie beverages and fruit-flavoured waters. Delivers a full-bodied sensory experience without caloric contribution.' },
      { name: 'Fruit preparations for yoghurt', desc: 'LM or LMA pectin at 0.5–1.5% in fruit preparations for stirred yoghurt filling. Gel is shear-stable and pumping-stable; LMA type allows thermal processing (70–85°C) with gel recovery on cooling.' },
      { name: 'Plant-based beverages', desc: 'HM pectin at 0.1–0.3% stabilizes plant protein particles in almond, oat, and soy milk beverages at low pH, preventing sedimentation and improving mouthfeel without altering flavour.' },
    ],
  },
  {
    title: 'Confectionery & Bakery', icon: '🍬',
    color: { bg: '#FFF0E8', tx: '#8A3010' },
    items: [
      { name: 'Fruit gummies & jelly confectionery', desc: 'HM slow-set or rapid-set pectin at 1.5–3.0% in high-Brix (65–75% SS) confectionery gels at pH 3.0–3.5. Produces clean, short bite texture, clear appearance, and excellent flavour release compared to gelatin.' },
      { name: 'Marshmallow & aerated confectionery', desc: 'HM pectin at 0.5–1.5% as a partial gelatin replacer or standalone gelling agent in marshmallow and aerated confections. Provides a firm, elastic structure and acts as a vegan gelatin substitute.' },
      { name: 'Baked fruit fillings & inclusions', desc: 'LM or LMA pectin at 0.8–2.0% provides bake-stable fruit fillings that resist melting in the oven, retain fruit texture, and set firmly on cooling. LMA type preferred for hot-fill and thermally processed fillings.' },
      { name: 'Glaze & coating gels', desc: 'HM or LM pectin at 0.5–1.5% produces clear, shiny mirror glazes and pastry coatings for tarts, cakes, and entremets. LM type provides a flexible, stable gel that withstands refrigeration and portioning.' },
    ],
  },
];
