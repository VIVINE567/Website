// PAC technical specifications and grade cards

const IC = {
  oilfield:     { bg: '#FBF3E2', tx: '#7C4A0E' },
  construction: { bg: '#F1EDE4', tx: '#5C4020' },
  textile:      { bg: '#EAF0F8', tx: '#1A4A7A' },
  industrial:   { bg: '#EEF0EA', tx: '#3A4A2A' },
  all:          { bg: '#FDF0E0', tx: '#7C4A0E' },
};

// "Technical specifications" — supports section headers via { section: '...' }
export const SPEC_TABLE = [
  ['Chemical name', 'Sodium Carboxymethyl Cellulose — high Degree of Substitution (Polyanionic Cellulose)'],
  ['CAS number', '9004-32-4'],
  ['Common trade names', 'PAC, PAC-R, PAC-UHV, PAC-HV, Polyanionic Cellulose, Cellulosic Fluid Loss Reducer'],
  ['Raw material', 'Refined cotton linters or high-alpha-cellulose wood pulp (alpha-cellulose content ≥ 96%)'],
  ['Appearance', 'White to off-white free-flowing powder; odourless'],
  ['Ionic character', 'Anionic polyelectrolyte'],
  { section: 'Degree of Substitution & Purity' },
  ['DS — PAC-R (Regular grade)', '0.85–1.10'],
  ['DS — PAC-UHV / PAC-HV', '0.90–1.40'],
  ['Purity — oilfield grade (dry basis)', '≥ 95%  (per API 13A Section 9)'],
  ['Purity — industrial / textile / construction grade', '≥ 90% (dry basis)'],
  { section: 'Viscosity — 1% aqueous solution, Brookfield LVT Spindle 3, 30 rpm, 25 °C' },
  ['PAC-R (Regular viscosity)', '600–1,000 mPa·s'],
  ['PAC-HV (High viscosity)', '1,000–3,500 mPa·s'],
  ['PAC-UHV (Ultra High viscosity)', '3,500–8,000+ mPa·s'],
  { section: 'API 13A / ISO 13500 Oilfield Specifications' },
  ['API Fluid Loss — PAC-R', '≤ 15.0 mL / 30 min  (API 13A filtration test, 0.690 MPa)'],
  ['API Fluid Loss — PAC-UHV', '≤ 12.0 mL / 30 min'],
  ['Acid-insoluble residue — PAC-R', '≤ 4.0%'],
  ['Acid-insoluble residue — PAC-UHV', '≤ 2.5%'],
  ['Moisture content', '≤ 10.0%'],
  ['pH (1% aqueous solution)', '6.5–8.5'],
  { section: 'Thermal & Chemical Resistance' },
  ['Maximum operating temperature — PAC-UHV', 'Up to 150 °C (300 °F)'],
  ['Maximum operating temperature — PAC-R', 'Up to 120 °C (248 °F)'],
  ['NaCl brine tolerance', 'Functional up to NaCl saturation (~26% w/v)'],
  ['KCl brine tolerance', 'Functional up to 3% KCl'],
  ['pH stability range', '6.5–11.0  (optimum pH 8–9 for drilling fluids)'],
  { section: 'Standards, Compliance & Packaging' },
  ['Primary oilfield standard', 'API 13A Section 9 / ISO 13500'],
  ['China national standard', 'GB/T 5005-2010'],
  ['Packaging', '25 kg multi-wall kraft bags; 500 kg / 1,000 kg jumbo bags; custom bulk on request'],
];

// "Grade comparison" cards — filterable by industry
export const GRADES = [
  {
    id: 'pac-r', name: 'PAC-R — Regular viscosity', range: '600–1,000 mPa·s', viscPct: 11, featured: true,
    industries: ['oilfield'],
    badge: { bg: IC.all.bg, tx: IC.all.tx, text: 'Highest volume' },
    specs: [
      ['Viscosity (1%, 25°C)', '600–1,000 mPa·s'],
      ['DS', '0.85–1.10'],
      ['Purity (dry basis)', '≥ 95%'],
      ['API FL (PAC-R)', '≤ 15.0 mL / 30 min'],
      ['Acid-insol. residue', '≤ 4.0%'],
    ],
    apps: [{ l: 'Fluid loss control', i: 'oilfield' }, { l: 'Saline & brine muds', i: 'oilfield' }, { l: 'Cementing slurries', i: 'oilfield' }],
  },
  {
    id: 'pac-uhv', name: 'PAC-UHV / PAC-HV', range: '1,000–8,000+ mPa·s', viscPct: 100, featured: false,
    industries: ['oilfield'],
    badge: { bg: IC.oilfield.bg, tx: IC.oilfield.tx, text: 'HTHP oilfield' },
    specs: [
      ['Viscosity (1%, 25°C)', '1,000–8,000+ mPa·s'],
      ['DS', '0.90–1.40'],
      ['Purity (dry basis)', '≥ 95%'],
      ['API FL (UHV)', '≤ 12.0 mL / 30 min'],
      ['Max temp.', '150 °C (300 °F)'],
    ],
    apps: [{ l: 'HTHP drilling', i: 'oilfield' }, { l: 'Viscosity building', i: 'oilfield' }, { l: 'Completion fluids', i: 'oilfield' }],
  },
  {
    id: 'construction', name: 'Construction grade', range: '800–3,000+ mPa·s', viscPct: 35, featured: false,
    industries: ['construction'],
    badge: { bg: IC.construction.bg, tx: IC.construction.tx, text: 'Construction' },
    specs: [
      ['Viscosity (1%, 25°C)', '800–3,000+ mPa·s'],
      ['DS', '0.85–1.20'],
      ['Purity (dry basis)', '≥ 92%'],
      ['Key function', 'Water retention & thickening'],
      ['Compatible with', 'HPMC, MHEC, cement, gypsum'],
    ],
    apps: [{ l: 'Tile adhesives', i: 'construction' }, { l: 'Cement mortars', i: 'construction' }, { l: 'Gypsum plasters', i: 'construction' }],
  },
  {
    id: 'textile', name: 'Textile grade', range: '200–2,000 mPa·s', viscPct: 22, featured: false,
    industries: ['textile'],
    badge: { bg: IC.textile.bg, tx: IC.textile.tx, text: 'Textile' },
    specs: [
      ['Viscosity (1%, 25°C)', '200–2,000 mPa·s'],
      ['DS', '0.85–1.15'],
      ['Purity (dry basis)', '≥ 90%'],
      ['Film strength', 'High — flexible & abrasion-resistant'],
      ['Desizability', 'Easy — hot water wash-off'],
    ],
    apps: [{ l: 'Warp yarn sizing', i: 'textile' }, { l: 'Dye print paste', i: 'textile' }, { l: 'Fabric finishing', i: 'textile' }],
  },
  {
    id: 'industrial', name: 'Industrial grade', range: '200–5,000+ mPa·s', viscPct: 58, featured: false,
    industries: ['industrial'],
    badge: { bg: IC.industrial.bg, tx: IC.industrial.tx, text: 'Industrial' },
    specs: [
      ['Viscosity (1%, 25°C)', '200–5,000+ mPa·s'],
      ['DS', '0.85–1.20'],
      ['Purity (dry basis)', '≥ 90%'],
      ['Key function', 'Thickening, binding, dispersing'],
      ['Applications', 'Paper, detergent, ceramics, agro'],
    ],
    apps: [{ l: 'Paper coating', i: 'industrial' }, { l: 'Detergent additive', i: 'industrial' }, { l: 'Ceramic binder', i: 'industrial' }],
  },
];
