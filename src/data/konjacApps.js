// Konjac Gum — E425i vs E425ii comparison and industry quick-reference table

// "Konjac Gum (E425i) vs Konjac Glucomannan (E425ii)"
// Cell can be a string, or { t, hl: 'good' } for coloured emphasis
export const TYPE_COMPARE = {
  cols: ['Property', 'Konjac Gum (E425i)', 'Konjac Glucomannan (E425ii)'],
  rows: [
    ['EU designation', { t: 'E425i', mono: true }, { t: 'E425ii', mono: true }],
    ['Glucomannan content', { t: '≥ 75% (dry basis)', mono: true }, { t: '≥ 95% (dry basis)', mono: true }],
    ['Molecular weight range', { t: '200,000–2,000,000 Da', mono: true }, { t: '500,000–2,000,000 Da', mono: true }],
    ['Viscosity (1% solution, 25°C)', { t: '4,000–20,000 mPa·s', mono: true }, { t: '15,000–40,000+ mPa·s', mono: true }],
    ['Protein content', { t: 'Not more than 3%', mono: true }, { t: 'Not more than 1.5%', mono: true }],
    ['Starch content', { t: 'Not more than 3%', mono: true }, { t: 'Not more than 1.5%', mono: true }],
    ['Total ash content', { t: 'Not more than 5%', mono: true }, { t: 'Not more than 2%', mono: true }],
    ['Lead (Pb) limit', { t: 'Not more than 2 mg/kg', mono: true }, { t: 'Not more than 1 mg/kg', mono: true }],
    ['Primary use', 'General food thickening, gelling, stabilising', { t: 'Pharmaceutical, nutraceutical, premium food, dietary fibre supplement', hl: 'good' }],
    ['Cost', { t: 'Lower — standard commercial grade', hl: 'good' }, 'Higher — high-purity KGM'],
  ],
};

// "Quick reference — recommended grade and use level by application"
export const INDUSTRY_TABLE = {
  cols: ['Industry', 'Application', 'Recommended grade', 'Typical use level', 'Key function'],
  rows: [
    { ind: 'Food', color: { bg: '#EBF5E0', tx: '#3A5C20' }, app: 'Konjac noodles / shirataki', grade: 'Konjac Gum E425i', use: '2–4%', func: 'Alkali-set irreversible gel (zero-calorie noodle)' },
    { ind: 'Food', color: { bg: '#EBF5E0', tx: '#3A5C20' }, app: 'Vegan jelly and dessert cups', grade: 'KGM E425ii + κ-carrageenan', use: '0.3–1.5% total gum', func: 'Thermoreversible elastic gel — gelatin substitute' },
    { ind: 'Food', color: { bg: '#EBF5E0', tx: '#3A5C20' }, app: 'Low-calorie / reduced-fat', grade: 'KGM E425ii', use: '0.1–0.5%', func: 'Zero-calorie thickening and fat replacement' },
    { ind: 'Food', color: { bg: '#EBF5E0', tx: '#3A5C20' }, app: 'Plant-based dairy alternatives', grade: 'KGM E425ii + xanthan', use: '0.1–0.5%', func: 'Viscosity, mouthfeel, suspension stability' },
    { ind: 'Food', color: { bg: '#EBF5E0', tx: '#3A5C20' }, app: 'Gluten-free bakery', grade: 'Konjac Gum E425i', use: '0.5–2.0%', func: 'Water retention, crumb structure, staling delay' },
    { ind: 'Food', color: { bg: '#EBF5E0', tx: '#3A5C20' }, app: 'Functional beverage', grade: 'KGM E425ii', use: '0.1–0.3%', func: 'Satiety, viscosity, EU weight management claim' },
    { ind: 'Pharma', color: { bg: '#EAF0FB', tx: '#1A3A8C' }, app: 'Dietary fibre supplement', grade: 'KGM E425ii — ≥ 95% purity', use: '1 g per dose × 3/day', func: 'EU weight management & cholesterol health claim' },
    { ind: 'Pharma', color: { bg: '#EAF0FB', tx: '#1A3A8C' }, app: 'Sustained-release tablet', grade: 'KGM E425ii', use: '10–60% weight/weight', func: 'Hydrophilic matrix — extended drug release' },
    { ind: 'Pharma', color: { bg: '#EAF0FB', tx: '#1A3A8C' }, app: 'Oral suspension', grade: 'KGM E425ii', use: '0.1–0.5%', func: 'Viscosity, pseudoplastic suspension stability' },
    { ind: 'Cosmetics', color: { bg: '#FAE8F4', tx: '#7A1A6A' }, app: 'Facial sheet mask', grade: 'KGM E425ii', use: '1.0–3.0%', func: 'Film-forming, hydrating, active delivery' },
    { ind: 'Cosmetics', color: { bg: '#FAE8F4', tx: '#7A1A6A' }, app: 'Serum and moisturiser', grade: 'KGM E425ii', use: '0.1–0.5%', func: 'Humectancy, film-forming, TEWL reduction' },
    { ind: 'Cosmetics', color: { bg: '#FAE8F4', tx: '#7A1A6A' }, app: 'Konjac sponge', grade: 'Konjac Gum E425i', use: '3–6%', func: 'Alkali-set hydrogel cleansing sponge' },
    { ind: 'Cosmetics', color: { bg: '#FAE8F4', tx: '#7A1A6A' }, app: 'Shampoo / conditioner', grade: 'KGM E425i or E425ii', use: '0.2–1.0%', func: 'Viscosity, hair film, frizz control' },
  ],
};
