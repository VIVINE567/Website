// Guar Gum technical specifications, grade cards, and grade quick-reference table

const IC = {
  food:   { bg: '#EAF5E0', tx: '#2C5F0E' },
  oilgas: { bg: '#FBF3E2', tx: '#7C4A0E' },
  pharma: { bg: '#EAF0FB', tx: '#1A3A6C' },
  all:    { bg: '#EAF5E0', tx: '#2C5F0E' },
};

// Key/value rows with section headers ({ section: '...' }) — "Technical specifications"
export const SPEC_TABLE = [
  { section: 'Identification & General' },
  ['Common name', 'Guar Gum (Guaran)'],
  ['Botanical source', 'Cyamopsis tetragonoloba (L.) Taub. — endosperm of guar bean seeds'],
  ['Origin', 'India (world\'s largest producer, approximately 80% of global supply), Pakistan, USA'],
  ['CAS number', '9000-30-0'],
  ['E number', 'E412 (EU food additive)'],
  ['INS number', 'INS 412 (Codex Alimentarius)'],
  ['HS Code', '1302.32.30'],
  ['INCI name (cosmetics)', 'Cyamopsis Tetragonoloba Gum'],
  ['Chemical class', 'Galactomannan polysaccharide (non-ionic)'],
  ['Mannose:Galactose ratio', 'Approximately 2:1'],
  ['Molecular weight', '50,000–8,000,000 Da (typically 200,000–300,000 Da, commercial grades)'],
  ['Appearance', 'White to yellowish-white, nearly odourless, free-flowing powder'],
  ['Solubility', 'Soluble in cold and hot water; insoluble in oils, ethanol, and organic solvents'],
  { section: 'Food Grade Specifications — EU Regulation No 231/2012 / JECFA / FCC' },
  ['Galactomannan content (gum content)', 'Not less than 75% (on dry basis)'],
  ['Viscosity (1% solution, 25°C, Brookfield)', '2,700–3,500 mPa·s (standard food grade); up to 8,000 mPa·s (high-viscosity grades)'],
  ['Moisture content (loss on drying)', 'Not more than 15.0% (EU / JECFA); Not more than 12% (FCC)'],
  ['Protein content', 'Not more than 10.0% (EU) · Not more than 7.0% (Ph.Eur.)'],
  ['Ash content (total)', 'Not more than 5.5% (EU) · Not more than 1.8% (JECFA / Ph.Eur.)'],
  ['Acid-insoluble residue', 'Not more than 7.0% (EU) · Not more than 2.0% (FCC)'],
  ['Fat content', 'Not more than 0.8%'],
  ['Starch', 'Absent (not detectable by iodine test)'],
  ['pH (1% aqueous dispersion)', '5.5–7.0 (typical commercial food grade)'],
  ['pH stability range', '4.0–10.5 (viscosity relatively stable)'],
  { section: 'Heavy metals — EU Regulation No 231/2012 / JECFA' },
  ['Lead (Pb)', 'Not more than 2 mg/kg'],
  ['Arsenic (As)', 'Not more than 3 mg/kg'],
  ['Mercury (Hg)', 'Not more than 1 mg/kg'],
  ['Cadmium (Cd)', 'Not more than 1 mg/kg'],
  { section: 'Microbiological limits (food grade)' },
  ['Total aerobic microbial count', 'Not more than 5,000 colony-forming units per gram'],
  ['Yeast and mould count', 'Not more than 500 colony-forming units per gram'],
  ['Salmonella spp.', 'Absent in 25 grams'],
  ['Escherichia coli', 'Absent in 1 gram'],
  { section: 'Packaging & storage' },
  ['Packaging', '25 kg multi-wall paper bags with polyethylene liner / bulk bags on request'],
  ['Storage', 'Cool, dry conditions (below 30°C); protect from moisture and direct sunlight'],
  ['Shelf life', '24 months from date of manufacture in original sealed packaging'],
];

// "Available grades" cards (filterable by industry). `viscPct` drives the bar fill.
export const GRADES = [
  {
    id: 'food-low', name: 'Food grade — low viscosity', range: '1,500–2,500 mPa·s (1%, 25°C)', viscPct: 25, featured: false,
    industries: ['food'],
    badge: { bg: IC.food.bg, tx: IC.food.tx, text: 'Food' },
    specs: [
      ['Viscosity', '1,500–2,500 mPa·s'],
      ['Standard', 'E412 / FCC / JECFA'],
      ['Gum content', '≥ 75% (dry basis)'],
      ['Best use', 'Clear, low-viscosity systems'],
    ],
    apps: [{ l: 'Beverages', i: 'food' }, { l: 'Fruit juice & nectars', i: 'food' }, { l: 'Salad dressings', i: 'food' }, { l: 'Dairy drinks', i: 'food' }],
  },
  {
    id: 'food-std', name: 'Food grade — standard viscosity', range: '2,700–3,500 mPa·s (1%, 25°C)', viscPct: 46, featured: true,
    industries: ['food'],
    badge: { bg: IC.all.bg, tx: IC.all.tx, text: 'Most popular' },
    specs: [
      ['Viscosity', '2,700–3,500 mPa·s'],
      ['Standard', 'E412 / FCC / JECFA'],
      ['Gum content', '≥ 75% (dry basis)'],
      ['Use level', '0.1–1.0%'],
    ],
    apps: [{ l: 'Sauces & ketchup', i: 'food' }, { l: 'Ice cream', i: 'food' }, { l: 'Bread & bakery', i: 'food' }, { l: 'Yoghurt & dairy', i: 'food' }, { l: 'Instant soups', i: 'food' }],
  },
  {
    id: 'food-hv', name: 'Food grade — high viscosity', range: '4,500–6,000 mPa·s (1%, 25°C)', viscPct: 72, featured: false,
    industries: ['food'],
    badge: { bg: IC.food.bg, tx: IC.food.tx, text: 'Food' },
    specs: [
      ['Viscosity', '4,500–6,000 mPa·s'],
      ['Standard', 'E412 / FCC / JECFA'],
      ['Gum content', '≥ 80% (dry basis)'],
      ['Best use', 'Gluten-free, reduced-fat systems'],
    ],
    apps: [{ l: 'Gluten-free bakery', i: 'food' }, { l: 'Frozen desserts', i: 'food' }, { l: 'Meat processing', i: 'food' }, { l: 'Confectionery', i: 'food' }],
  },
  {
    id: 'pharma', name: 'Pharmaceutical grade', range: '2,700–5,000 mPa·s (1%, 25°C)', viscPct: 58, featured: false,
    industries: ['pharma'],
    badge: { bg: IC.pharma.bg, tx: IC.pharma.tx, text: 'Pharma' },
    specs: [
      ['Viscosity', '2,700–5,000 mPa·s'],
      ['Standard', 'USP / NF · Ph.Eur.'],
      ['Microbial', 'Controlled — USP limits'],
      ['Heavy metals', 'Compliant'],
    ],
    apps: [{ l: 'Tablet binder', i: 'pharma' }, { l: 'Sustained-release matrix', i: 'pharma' }, { l: 'Oral suspensions', i: 'pharma' }, { l: 'Laxative / dietary fibre', i: 'pharma' }, { l: 'Ophthalmic solutions', i: 'pharma' }],
  },
  {
    id: 'oilfield', name: 'Oilfield / drilling grade', range: '3,000–5,500 mPa·s (1%, 25°C)', viscPct: 75, featured: false,
    industries: ['oilgas'],
    badge: { bg: IC.oilgas.bg, tx: IC.oilgas.tx, text: 'Oil & Gas' },
    specs: [
      ['Viscosity', '3,000–5,500 mPa·s'],
      ['Acid-insoluble residue', '≤ 6.0% (low residue for cleaner mud)'],
      ['Gum content', '≥ 78% (dry basis)'],
      ['Application', 'Water-based drilling mud'],
    ],
    apps: [{ l: 'Water-based drilling fluids', i: 'oilgas' }, { l: 'Completion fluids', i: 'oilgas' }, { l: 'Workover fluids', i: 'oilgas' }, { l: 'Lost circulation pills', i: 'oilgas' }],
  },
  {
    id: 'fhg', name: 'Fast Hydrating Guar Gum (FHG)', range: '3,500–5,000 mPa·s — full viscosity in 5–10 min', viscPct: 65, featured: false,
    industries: ['oilgas'],
    badge: { bg: IC.oilgas.bg, tx: IC.oilgas.tx, text: 'Oil & Gas' },
    specs: [
      ['Hydration time', '5–10 minutes (vs 2+ hours standard)'],
      ['Diesel slurriable', 'Yes — up to 50% solids'],
      ['Standard', 'Fracturing industry convention'],
      ['Cross-linkable', 'Borate / Zirconate / Titanate'],
    ],
    apps: [{ l: 'Hydraulic fracturing base gel', i: 'oilgas' }, { l: 'Cross-linked fracturing fluids', i: 'oilgas' }, { l: 'Borate cross-linked gel', i: 'oilgas' }, { l: 'Proppant transport', i: 'oilgas' }],
  },
];

// "Grade quick reference table" — grade pill carries the industry colour
export const REF_TABLE = {
  cols: ['Grade', 'Viscosity (mPa·s at 1%)', 'Standard', 'Key feature', 'Primary applications'],
  rows: [
    { grade: { text: 'Food grade — low viscosity', ...IC.food }, viscosity: '1,500–2,500', standard: 'E412 / FCC / JECFA', feature: 'Clear solutions, minimal gel tendency', applications: 'Beverages, fruit juice, salad dressings' },
    { grade: { text: 'Food grade — standard viscosity', ...IC.food }, viscosity: '2,700–3,500', standard: 'E412 / FCC / JECFA', feature: 'General purpose thickener and stabiliser', applications: 'Sauces, dairy, bakery, ice cream, soups' },
    { grade: { text: 'Food grade — high viscosity', ...IC.food }, viscosity: '4,500–6,000', standard: 'E412 / FCC / JECFA', feature: 'Maximum thickening at minimal addition level', applications: 'Gluten-free products, meat processing, frozen desserts' },
    { grade: { text: 'Pharmaceutical grade (USP / Ph.Eur.)', ...IC.pharma }, viscosity: '2,700–5,000', standard: 'USP / NF · Ph.Eur.', feature: 'Controlled microbial, compliant purity', applications: 'Tablet binder, sustained release, oral suspensions, laxative' },
    { grade: { text: 'Oilfield / drilling grade', ...IC.oilgas }, viscosity: '3,000–5,500', standard: 'Industry standard', feature: 'High gum content, low acid-insoluble residue', applications: 'Water-based drilling fluids, completion fluids' },
    { grade: { text: 'Fast Hydrating Guar Gum (FHG)', ...IC.oilgas }, viscosity: '3,500–5,000', standard: 'Industry standard', feature: 'Full viscosity in 5–10 minutes; slurriable in diesel', applications: 'Hydraulic fracturing, cross-linked gel fracturing fluids' },
  ],
};
