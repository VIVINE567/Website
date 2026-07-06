// Locust Bean Gum technical specifications, grade cards, and grade quick-reference table

const IC = {
  food:       { bg: '#FBF4E4', tx: '#6B4A10' },
  dairy:      { bg: '#FEF9EC', tx: '#7A5C00' },
  plantbased: { bg: '#EAF5E8', tx: '#1E6B28' },
  pharma:     { bg: '#EAF0FB', tx: '#1A3A8C' },
  cosmetic:   { bg: '#FAE8F4', tx: '#7A1A6A' },
  petfood:    { bg: '#EDF1F8', tx: '#2A4880' },
  all:        { bg: '#FBF4E4', tx: '#6B4A10' },
};

// Key/value rows with section headers
export const SPEC_TABLE = [
  { section: 'Identification & General' },
  ['Common names', 'Locust Bean Gum, LBG, Carob Bean Gum, Carob Gum, Carobin'],
  ['Botanical source', 'Ceratonia siliqua L. — endosperm of carob seeds; Mediterranean origin'],
  ['CAS number', '9000-40-6'],
  ['E number / INS', 'E410 (EU) · INS 410 (Codex Alimentarius)'],
  ['Chemical class', 'Galactomannan polysaccharide (non-ionic)'],
  ['Mannose:Galactose ratio (M:G)', 'Approximately 4:1'],
  ['Molecular weight', '50,000–3,000,000 Da (varies by grade and processing)'],
  ['Appearance', 'White to cream-coloured, nearly odourless powder'],
  { section: 'Solubility & Hydration' },
  ['Cold water solubility', 'Swells partially; partial viscosity at room temperature'],
  ['Full hydration temperature', '≥ 80 °C (176 °F), minimum 10 minutes with agitation'],
  ['Solubility in organic solvents', 'Insoluble'],
  { section: 'Viscosity — 1% aqueous solution, 25°C, Brookfield LVT' },
  ['Standard food grade', '2,500–3,500 mPa·s'],
  ['High-viscosity grade', '3,500–4,500+ mPa·s'],
  ['Low-viscosity grade (beverages / pharma)', '500–2,000 mPa·s'],
  { section: 'Food Grade Specifications (E410 / FCC / JECFA)' },
  ['Galactomannan content', '≥ 75% (on dry basis)'],
  ['Moisture content', '≤ 14.0% (JECFA / EU specification)'],
  ['Protein content', '≤ 7.0%'],
  ['Acid-insoluble residue', '≤ 4.0% (food grade)'],
  ['Ash (total)', '≤ 1.5%'],
  ['pH (1% aqueous solution)', '5.4–7.0'],
  ['Heavy metals (as Pb)', '≤ 20 ppm'],
  ['Lead', '≤ 5 ppm'],
  ['Arsenic', '≤ 3 ppm'],
  ['Salmonella', 'Absent / 25 g'],
  ['E. coli', 'Absent / 1 g'],
  { section: 'Regulatory Approvals' },
  ['EU approval', 'E410 — Regulation (EC) No 1333/2008 (quantum satis)'],
  ['USA (FDA)', 'GRAS — 21 CFR 184.1343; also listed as direct food additive'],
  ['Codex Alimentarius', 'INS 410; ADI "not specified" (JECFA)'],
  ['Other approvals', 'GB/T (China), FSANZ (Australia/NZ), Health Canada'],
  ['Dietary status', 'Non-GMO · Vegan · Vegetarian · Gluten-free · Halal / Kosher certifiable'],
  ['Packaging', '25 kg multi-wall kraft bags; 500 kg / 1,000 kg jumbo bags; custom bulk'],
];

// "Available grades" cards (filterable by industry)
export const GRADES = [
  {
    id: 'std-food', name: 'Standard food grade', range: '2,500–3,500 mPa·s (1%, 25°C)', viscPct: 70, featured: true,
    industries: ['food', 'dairy', 'plantbased', 'petfood'],
    badge: { bg: IC.all.bg, tx: IC.all.tx, text: 'Most popular' },
    specs: [
      ['Viscosity (1%, 25°C)', '2,500–3,500 mPa·s'],
      ['Galactomannan', '≥ 75% (dry basis)'],
      ['Moisture', '≤ 14.0%'],
      ['pH (1% sol.)', '5.4–7.0'],
      ['Standard', 'E410 / FCC / JECFA'],
    ],
    apps: [{ l: 'Ice cream', i: 'dairy' }, { l: 'Sauces & gravies', i: 'food' }, { l: 'Plant-based foods', i: 'plantbased' }, { l: 'Wet pet food', i: 'petfood' }],
  },
  {
    id: 'hv', name: 'High-viscosity grade', range: '3,500–4,500+ mPa·s (1%, 25°C)', viscPct: 100, featured: false,
    industries: ['dairy', 'plantbased', 'food'],
    badge: { bg: IC.dairy.bg, tx: IC.dairy.tx, text: 'Dairy / Frozen' },
    specs: [
      ['Viscosity (1%, 25°C)', '3,500–4,500+ mPa·s'],
      ['Galactomannan', '≥ 78% (dry basis)'],
      ['Moisture', '≤ 14.0%'],
      ['Best for', 'Premium ice cream, plant-based cheese'],
      ['Standard', 'E410 / FCC / JECFA'],
    ],
    apps: [{ l: 'Premium ice cream', i: 'dairy' }, { l: 'Vegan cheese', i: 'plantbased' }, { l: 'Dairy desserts', i: 'dairy' }],
  },
  {
    id: 'lv', name: 'Low-viscosity grade', range: '500–2,000 mPa·s (1%, 25°C)', viscPct: 40, featured: false,
    industries: ['food', 'pharma', 'cosmetic'],
    badge: { bg: IC.pharma.bg, tx: IC.pharma.tx, text: 'Pharma / Cosmetic' },
    specs: [
      ['Viscosity (1%, 25°C)', '500–2,000 mPa·s'],
      ['Galactomannan', '≥ 75%'],
      ['pH (1% sol.)', '5.4–7.0'],
      ['Best for', 'Beverages, oral suspensions, serums'],
      ['Standard', 'E410 / FCC / pharma grade'],
    ],
    apps: [{ l: 'Beverages', i: 'food' }, { l: 'Oral suspensions', i: 'pharma' }, { l: 'Face serums', i: 'cosmetic' }],
  },
  {
    id: 'pharma', name: 'Pharma / high-purity grade', range: '1,000–3,500 mPa·s (1%, 25°C)', viscPct: 70, featured: false,
    industries: ['pharma'],
    badge: { bg: IC.pharma.bg, tx: IC.pharma.tx, text: 'Pharma' },
    specs: [
      ['Viscosity (1%, 25°C)', '1,000–3,500 mPa·s'],
      ['Galactomannan', '≥ 80%'],
      ['Heavy metals', '≤ 10 ppm'],
      ['Protein', '≤ 5.0%'],
      ['Standard', 'Food grade quality / high purity'],
    ],
    apps: [{ l: 'Tablet binder', i: 'pharma' }, { l: 'Controlled release', i: 'pharma' }, { l: 'Oral suspensions', i: 'pharma' }],
  },
  {
    id: 'cosmetic', name: 'Cosmetic grade', range: '1,000–3,500 mPa·s (1%, 25°C)', viscPct: 70, featured: false,
    industries: ['cosmetic'],
    badge: { bg: IC.cosmetic.bg, tx: IC.cosmetic.tx, text: 'Cosmetics' },
    specs: [
      ['Viscosity (1%, 25°C)', '1,000–3,500 mPa·s'],
      ['Protein', '≤ 5.0%'],
      ['Heavy metals', '≤ 10 ppm'],
      ['Skin compatibility', 'High — INCI compliant'],
      ['Best for', 'Creams, lotions, serums, shampoos'],
    ],
    apps: [{ l: 'Creams & lotions', i: 'cosmetic' }, { l: 'Shampoos', i: 'cosmetic' }, { l: 'Face serums', i: 'cosmetic' }],
  },
];

// "Grade quick reference table"
export const REF_TABLE = {
  cols: ['Industry', 'Common applications', 'LBG function', 'Typical use level', 'Common partner hydrocolloids'],
  rows: [
    { grade: { text: 'Food & Beverage', ...IC.food }, viscosity: 'Sauces, bakery fillings, confectionery, beverages, dressings', standard: 'Thickening, texturising, stabilisation', feature: '0.05–0.5%', applications: 'Xanthan gum, guar gum, CMC' },
    { grade: { text: 'Dairy & Frozen Desserts', ...IC.dairy }, viscosity: 'Ice cream, frozen yogurt, soft-serve, processed cheese, cream cheese, dairy desserts', standard: 'Ice crystal control, overrun stabilisation, gel texture with carrageenan', feature: '0.05–0.25%', applications: 'κ-Carrageenan, guar gum, xanthan' },
    { grade: { text: 'Plant-Based Foods', ...IC.plantbased }, viscosity: 'Vegan dairy alternatives, oat/almond/coconut milk, plant-based ice cream, meat analogues', standard: 'Body & mouthfeel, texture building, water binding, freeze-thaw stability', feature: '0.05–0.3%', applications: 'Xanthan gum, κ-carrageenan, methylcellulose' },
    { grade: { text: 'Pharmaceuticals', ...IC.pharma }, viscosity: 'Tablet binders, controlled-release matrices, oral suspensions, ophthalmic solutions', standard: 'Binder, viscosifier, controlled drug release', feature: '2–10% (tablets); 0.1–1% (liquid)', applications: 'HPMC, PVP, MCC, sodium CMC' },
    { grade: { text: 'Cosmetics & Personal Care', ...IC.cosmetic }, viscosity: 'Creams, lotions, shampoos, conditioners, face serums, moisturisers', standard: 'Thickener, film former, skin feel enhancer, emulsion stabiliser', feature: '0.1–1.0%', applications: 'Xanthan gum, carbomer, hyaluronic acid' },
    { grade: { text: 'Pet Food & Animal Nutrition', ...IC.petfood }, viscosity: 'Wet pet food (canned / pouch), pet treats, animal feed, gravy systems', standard: 'Gel texture, water binding, sauce/gravy thickening, freeze-thaw stability', feature: '0.1–0.5%', applications: 'κ-Carrageenan, xanthan gum, guar gum' },
  ],
};

export default { SPEC_TABLE, GRADES, REF_TABLE };