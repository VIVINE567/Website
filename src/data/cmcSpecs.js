// Sodium CMC technical specifications and grade cards

// "Technical specifications" — flat key/value rows
export const SPEC_TABLE = [
  ['Chemical name', 'Sodium Carboxymethyl Cellulose (Na-CMC)'],
  ['CAS number', '9004-32-4'],
  ['E number', 'E466 (Cellulose Gum)'],
  ['Synonyms', 'CMC, Cellulose Gum, Na-CMC, Sodium CMC, Carboxymethyl Cellulose'],
  ['Appearance', 'White to light yellow powder or granules'],
  ['Solubility', 'Soluble in cold and hot water; insoluble in organic solvents'],
  ['Viscosity range', 'Low (25–200 mPa·s) · Medium (200–800 mPa·s) · High (800–8,000+ mPa·s)'],
  ['Degree of substitution (DS)', '0.4–1.4 (food/pharma target: 0.65–1.20)'],
  ['pH stability', '5.0–11.0 (optimum 7–9)'],
  ['Ionic nature', 'Anionic polyelectrolyte'],
  ['Purity — food / pharma grade', '≥ 99.5%'],
  ['Purity — industrial grade', '≥ 90% (technical) / ≥ 65% (crude)'],
  ['Standards', 'USP / BP / EP / E466 / FCC / JECFA / GRAS (FDA)'],
  ['Packaging', '25 kg kraft bags / custom bulk'],
];

const IC = {
  food:         { bg: '#EBF5E3', tx: '#2D6612' },
  pharma:       { bg: '#EBF1FA', tx: '#1B4F8A' },
  cosmetic:     { bg: '#FAEDF3', tx: '#8A1F4A' },
  construction: { bg: '#FBF1E1', tx: '#8A5A0E' },
  industrial:   { bg: '#F1EFE8', tx: '#444441' },
  oilfield:     { bg: '#F5F0E8', tx: '#5C3D11' },
  all:          { bg: '#FEF3E2', tx: '#92400E' },
};

// "Grade comparison" cards (filterable by industry). `viscPct` drives the bar fill.
export const GRADES = [
  {
    id: 'low', name: 'Low viscosity', range: '25–200 mPa·s', viscPct: 3, featured: false,
    industries: ['food', 'pharma', 'cosmetic', 'industrial'],
    badge: { bg: IC.all.bg, tx: IC.all.tx, text: 'Wide use' },
    specs: [['Viscosity', '25–200 mPa·s'], ['Key feature', 'Excellent solution clarity'], ['Solution clarity', 'Excellent'], ['DS range', '0.65–0.90']],
    apps: [{ l: 'Beverages', i: 'food' }, { l: 'Paper coating', i: 'industrial' }, { l: 'Textile sizing', i: 'industrial' }],
  },
  {
    id: 'medium', name: 'Medium viscosity', range: '200–800 mPa·s', viscPct: 12, featured: true,
    industries: ['food', 'pharma', 'cosmetic', 'construction', 'industrial'],
    badge: { bg: IC.all.bg, tx: IC.all.tx, text: 'Most popular' },
    specs: [['Viscosity', '200–800 mPa·s'], ['Key feature', 'Good suspension properties'], ['Solution clarity', 'Good'], ['DS range', '0.70–1.00']],
    apps: [{ l: 'Dairy products', i: 'food' }, { l: 'Sauces', i: 'food' }, { l: 'Creams & lotions', i: 'cosmetic' }],
  },
  {
    id: 'high', name: 'High viscosity', range: '800–8,000+ mPa·s', viscPct: 100, featured: false,
    industries: ['construction', 'oilfield', 'food', 'pharma'],
    badge: { bg: IC.construction.bg, tx: IC.construction.tx, text: 'Specialist' },
    specs: [['Viscosity', '800–8,000+ mPa·s'], ['Key feature', 'Strong thickening'], ['Water retention', 'High'], ['DS range', '0.75–1.20']],
    apps: [{ l: 'Tile adhesives', i: 'construction' }, { l: 'Cement mortars', i: 'construction' }, { l: 'Drilling fluids', i: 'oilfield' }],
  },
  {
    id: 'food', name: 'Food grade (E466)', range: '50–8,000 mPa·s', viscPct: 100, featured: false,
    industries: ['food'],
    badge: { bg: IC.food.bg, tx: IC.food.tx, text: 'Food' },
    specs: [['Viscosity', '50–8,000 mPa·s'], ['Standard', 'E466 / FCC / JECFA'], ['Purity', 'High — ≥ 99.5%'], ['Certifications', 'Kosher / Halal / GRAS']],
    apps: [{ l: 'Ice cream', i: 'food' }, { l: 'Bakery products', i: 'food' }, { l: 'Sauces', i: 'food' }],
  },
  {
    id: 'pharma', name: 'Pharma grade', range: '50–6,000 mPa·s', viscPct: 72, featured: false,
    industries: ['pharma'],
    badge: { bg: IC.pharma.bg, tx: IC.pharma.tx, text: 'Pharma' },
    specs: [['Viscosity', '50–6,000 mPa·s'], ['Standard', 'USP / EP / BP'], ['Microbial limits', 'Controlled'], ['Heavy metals', 'Compliant']],
    apps: [{ l: 'Tablet binder', i: 'pharma' }, { l: 'Oral suspensions', i: 'pharma' }, { l: 'Ophthalmic solutions', i: 'pharma' }],
  },
  {
    id: 'cosmetic', name: 'Cosmetic grade', range: '100–3,000 mPa·s', viscPct: 35, featured: false,
    industries: ['cosmetic'],
    badge: { bg: IC.cosmetic.bg, tx: IC.cosmetic.tx, text: 'Cosmetics' },
    specs: [['Viscosity', '100–3,000 mPa·s'], ['Film formation', 'Good'], ['Stability', 'Excellent'], ['Skin compatibility', 'High']],
    apps: [{ l: 'Toothpaste', i: 'cosmetic' }, { l: 'Shampoos', i: 'cosmetic' }, { l: 'Skin gels', i: 'cosmetic' }],
  },
  {
    id: 'industrial', name: 'Industrial / technical grade', range: '25–5,000+ mPa·s', viscPct: 60, featured: false,
    industries: ['industrial', 'construction'],
    badge: { bg: IC.industrial.bg, tx: IC.industrial.tx, text: 'Industrial' },
    specs: [['Viscosity', '25–5,000+ mPa·s'], ['Key feature', 'Strong binding & thickening'], ['Purity', '≥ 90% (technical)'], ['Use', 'Non-food / Non-pharma']],
    apps: [{ l: 'Paper sizing', i: 'industrial' }, { l: 'Ceramic binders', i: 'industrial' }, { l: 'Textile sizing', i: 'industrial' }],
  },
  {
    id: 'oilfield', name: 'Oilfield grade', range: '50–8,000+ mPa·s', viscPct: 100, featured: false,
    industries: ['oilfield'],
    badge: { bg: IC.oilfield.bg, tx: IC.oilfield.tx, text: 'Oilfield' },
    specs: [['Viscosity', '50–8,000+ mPa·s'], ['Standard', 'API 13A / GB/T 5005'], ['Salt tolerance', 'High'], ['Fluid loss', 'Controlled']],
    apps: [{ l: 'Drilling fluids', i: 'oilfield' }, { l: 'Completion fluids', i: 'oilfield' }, { l: 'Cementing systems', i: 'oilfield' }],
  },
];
