// PGA technical specifications, grade cards, and quick-reference table

// Flat key/value rows — "Technical specifications"
export const SPEC_TABLE = [
  ['Chemical name', 'Propylene glycol ester of alginic acid (Propylene Glycol Alginate)'],
  ['CAS number', '9005-37-2'],
  ['E number', 'E405'],
  ['Synonyms', 'PGA, Hydroxypropyl Alginate, Alginate PG Ester, Kelcoloid, Manucol Ester'],
  ['Source', 'Brown seaweed — Macrocystis pyrifera, Laminaria hyperborea, Ascophyllum nodosum'],
  ['Appearance', 'White to light cream-coloured powder, odourless to slight seaweed odour'],
  ['Degree of esterification (DE)', '50–85% (typical food/pharma grade: 70–85%)'],
  ['Viscosity range (1%, 25°C)', 'Low (20–100 mPa·s) · Medium (100–400 mPa·s) · High (400–1,000+ mPa·s)'],
  ['Solubility', 'Soluble in cold water at pH 3–6; dispersible in hot water; partially soluble above pH 7'],
  ['pH stability', '3.0–6.5 (optimum 3.5–5.5); superior acid stability vs. sodium alginate'],
  ['Moisture content', '≤ 15% (food/pharma grade)'],
  ['Ash content', '≤ 10% (food grade); ≤ 7% (pharma grade)'],
  ['Heavy metals', '≤ 20 ppm (food grade); ≤ 10 ppm (pharma grade, per USP/NF)'],
  ['Arsenic', '≤ 3 ppm'],
  ['Lead', '≤ 5 ppm (food/pharma grade)'],
  ['Standards', 'E405 (EU) · FDA 21 CFR 172.858 (GRAS) · USP/NF · JECFA (INS 405) · FCC'],
  ['ADI (food)', '0–25 mg/kg body weight (JECFA)'],
  ['Packaging', '25 kg kraft bags / custom bulk'],
];

const IC = {
  food:     { bg: '#EBF5E3', tx: '#2D6612' },
  pharma:   { bg: '#EBF1FA', tx: '#1B4F8A' },
  cosmetic: { bg: '#FAEDF3', tx: '#8A1F4A' },
  all:      { bg: '#E8F5EE', tx: '#1A5C3A' },
};

// "Grade comparison" cards (filterable by industry)
export const GRADES = [
  {
    id: 'food-low', name: 'Food grade — Low viscosity', range: '20–100 mPa·s', viscPct: 8, featured: false,
    industries: ['food'],
    badge: { bg: IC.food.bg, tx: IC.food.tx, text: 'Food E405' },
    specs: [
      ['Viscosity (1%, 25°C)', '20–100 mPa·s'],
      ['DE', '70–85%'],
      ['Standard', 'E405 / GRAS / FCC / JECFA'],
      ['Purity', '≥ 93% (dry basis)'],
    ],
    apps: [{ l: 'Beer foam', i: 'food' }, { l: 'Fruit beverages', i: 'food' }, { l: 'Light sauces', i: 'food' }],
  },
  {
    id: 'food-med', name: 'Food grade — Medium viscosity', range: '100–400 mPa·s', viscPct: 38, featured: true,
    industries: ['food'],
    badge: { bg: IC.all.bg, tx: IC.all.tx, text: 'Most popular' },
    specs: [
      ['Viscosity (1%, 25°C)', '100–400 mPa·s'],
      ['DE', '70–85%'],
      ['Standard', 'E405 / GRAS / FCC / JECFA'],
      ['Purity', '≥ 93% (dry basis)'],
    ],
    apps: [{ l: 'Salad dressings', i: 'food' }, { l: 'Dairy desserts', i: 'food' }, { l: 'Whipped toppings', i: 'food' }],
  },
  {
    id: 'food-high', name: 'Food grade — High viscosity', range: '400–1,000+ mPa·s', viscPct: 100, featured: false,
    industries: ['food'],
    badge: { bg: IC.food.bg, tx: IC.food.tx, text: 'Food E405' },
    specs: [
      ['Viscosity (1%, 25°C)', '400–1,000+ mPa·s'],
      ['DE', '65–80%'],
      ['Standard', 'E405 / GRAS / FCC / JECFA'],
      ['Purity', '≥ 93% (dry basis)'],
    ],
    apps: [{ l: 'Ice cream', i: 'food' }, { l: 'Sauces', i: 'food' }, { l: 'Confectionery', i: 'food' }],
  },
  {
    id: 'pharma', name: 'Pharma grade', range: '20–600 mPa·s', viscPct: 56, featured: false,
    industries: ['pharma'],
    badge: { bg: IC.pharma.bg, tx: IC.pharma.tx, text: 'Pharma' },
    specs: [
      ['Viscosity (1%, 25°C)', '20–600 mPa·s'],
      ['DE', '50–80%'],
      ['Standard', 'USP / NF'],
      ['Heavy metals', '≤ 10 ppm'],
    ],
    apps: [{ l: 'Tablet binder', i: 'pharma' }, { l: 'Controlled release', i: 'pharma' }, { l: 'Topical gels', i: 'pharma' }],
  },
  {
    id: 'cosmetic', name: 'Cosmetic grade', range: '50–1,000 mPa·s', viscPct: 95, featured: false,
    industries: ['cosmetic'],
    badge: { bg: IC.cosmetic.bg, tx: IC.cosmetic.tx, text: 'Cosmetics' },
    specs: [
      ['Viscosity (1%, 25°C)', '50–1,000 mPa·s'],
      ['DE', '55–80%'],
      ['Standard', 'INCI compliant'],
      ['Skin compatibility', 'High'],
    ],
    apps: [{ l: 'Lotions & creams', i: 'cosmetic' }, { l: 'Shampoos', i: 'cosmetic' }, { l: 'Face serums', i: 'cosmetic' }],
  },
];

// "Quick reference table" — all grades at a glance
export const REF_TABLE = {
  cols: ['Grade', 'Viscosity (mPa·s, 1%)', 'DE (%)', 'Standard', 'Key features', 'Applications'],
  rows: [
    {
      grade: { text: 'Food grade (E405)', bg: '#EBF5E3', tx: '#2D6612' },
      visc: '20–1,000+', de: '70–85',
      standard: 'E405 / FDA GRAS / JECFA / FCC',
      features: 'Acid-stable emulsifier, foam stabilizer, thickener',
      apps: 'Beer, salad dressings, fruit beverages, dairy desserts, sauces, whipped cream',
    },
    {
      grade: { text: 'Pharma grade', bg: '#EBF1FA', tx: '#1B4F8A' },
      visc: '20–600', de: '50–80',
      standard: 'USP / NF',
      features: 'Controlled purity, low heavy metals, tablet binder, film former',
      apps: 'Tablet binder & disintegrant, controlled-release matrix, topical gels, oral suspensions',
    },
    {
      grade: { text: 'Cosmetic grade', bg: '#FAEDF3', tx: '#8A1F4A' },
      visc: '50–1,000', de: '55–80',
      standard: 'Cosmetic / INCI compliant',
      features: 'Emulsion stabilizer, thickener, film former, skin feel enhancer',
      apps: 'Lotions & creams, shampoos, face serums, sunscreens, hair conditioners',
    },
  ],
};
