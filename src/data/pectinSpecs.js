// Pectin technical specifications, grade cards, and quick-reference table

// Key/value rows with section headers ({ section: '...' }) — "Technical specifications"
export const SPEC_TABLE = [
  { section: 'General' },
  ['Chemical name', 'Pectin (poly-α-1,4-galacturonic acid, partially esterified)'],
  ['CAS number', '9000-69-5'],
  ['E number', 'E440a (Pectin) · E440b (Amidated Pectin)'],
  ['INS / Codex number', 'INS 440'],
  ['HS Code', '1302.20.00'],
  ['Source', 'Citrus peel (lemon, orange, lime) · Apple pomace · Sugar beet pulp'],
  ['Appearance', 'White to light yellowish-brown powder'],
  ['Odour', 'Slight characteristic, practically odourless'],
  { section: 'Chemical & quality parameters' },
  ['Galacturonic acid content', '≥ 65% (dry basis) — mandatory for E440 compliance'],
  ['Degree of esterification (DE)', 'HM: 50–75% · LM: 20–50% · LMA: 20–40%'],
  ['Degree of amidation (DA)', 'LMA only: 15–25% (max 25% per EU E440b)'],
  ['Moisture content', '≤ 12% (as-is basis)'],
  ['Ash content', '≤ 10% (acid-washed ash)'],
  ['pH (1% solution)', '2.8–4.0 (citrus) · 3.0–4.2 (apple)'],
  { section: 'Heavy metal limits (E440 / FCC / JECFA)' },
  ['Lead (Pb)', '≤ 5 mg/kg'],
  ['Arsenic (As)', '≤ 3 mg/kg'],
  ['Mercury (Hg)', '≤ 1 mg/kg'],
  ['Cadmium (Cd)', '≤ 1 mg/kg'],
  { section: 'Gelation parameters (indicative)' },
  ['HM — gel conditions', 'pH 2.8–3.5 · Soluble solids 55–85% · No calcium required'],
  ['LM — gel conditions', 'pH 2.6–7.0 · Soluble solids 10–70% · Ca²⁺ required (≥ 0.3%)'],
  ['LMA — gel conditions', 'pH 2.6–7.0 · Soluble solids 10–70% · Ca²⁺ required (0.1–0.3%)'],
  ['Gel strength (HM typical)', '100–250 °SAG (British Sag grade)'],
  ['Packaging', '25 kg multi-wall paper bags · Custom packaging available'],
];

const IC = {
  jam:           { bg: '#FFF8E8', tx: '#7A4F00' },
  dairy:         { bg: '#FEF5E4', tx: '#7A5000' },
  beverage:      { bg: '#EAF5E4', tx: '#2A6B1A' },
  confectionery: { bg: '#FFF0E8', tx: '#8A3010' },
  bakery:        { bg: '#F5EAF8', tx: '#6A1F8A' },
  lowsugar:      { bg: '#E8F4FB', tx: '#1A5278' },
  all:           { bg: '#EAF5E4', tx: '#2A6B1A' },
};

// "Grade comparison" cards (filterable by application). `viscPct` drives the bar fill.
export const GRADES = [
  {
    id: 'hm-rs', name: 'HM Rapid-Set', range: 'DE 65–75%', viscPct: 92, featured: false,
    industries: ['jam', 'confectionery', 'dairy'],
    badge: { bg: IC.jam.bg, tx: IC.jam.tx, text: 'HM · E440a' },
    specs: [
      ['DE range', '65–75%'],
      ['Setting speed', 'Fast'],
      ['Sugar req.', '≥ 60% SS'],
      ['pH for gel', '3.0–3.5'],
    ],
    apps: [{ l: 'High-sugar jams', i: 'jam' }, { l: 'Fruit preserves', i: 'jam' }, { l: 'Jelly confectionery', i: 'confectionery' }],
  },
  {
    id: 'hm-ss', name: 'HM Slow-Set', range: 'DE 50–65%', viscPct: 72, featured: true,
    industries: ['jam', 'beverage', 'dairy', 'confectionery'],
    badge: { bg: IC.all.bg, tx: IC.all.tx, text: 'Most popular' },
    specs: [
      ['DE range', '50–65%'],
      ['Setting speed', 'Slow / controlled'],
      ['Sugar req.', '≥ 55% SS'],
      ['pH for gel', '2.8–3.3'],
    ],
    apps: [{ l: 'Continuous line jams', i: 'jam' }, { l: 'Clear fruit jellies', i: 'jam' }, { l: 'Dairy protein stabilizer', i: 'dairy' }, { l: 'Beverages', i: 'beverage' }],
  },
  {
    id: 'lm-conv', name: 'LM Conventional', range: 'DE 20–50%', viscPct: 45, featured: false,
    industries: ['jam', 'dairy', 'bakery', 'lowsugar'],
    badge: { bg: IC.lowsugar.bg, tx: IC.lowsugar.tx, text: 'LM · E440a' },
    specs: [
      ['DE range', '20–50%'],
      ['Gelling agent', 'Ca²⁺ ions'],
      ['Ca²⁺ required', '0.3–0.5%'],
      ['pH for gel', '2.6–7.0'],
    ],
    apps: [{ l: 'Diet / low-sugar jams', i: 'lowsugar' }, { l: 'Fruit preparations', i: 'dairy' }, { l: 'Baked fillings', i: 'bakery' }, { l: 'Dairy gels', i: 'dairy' }],
  },
  {
    id: 'lma', name: 'LM Amidated (LMA)', range: 'DE 20–40% / DA 15–25%', viscPct: 35, featured: false,
    industries: ['dairy', 'bakery', 'lowsugar', 'jam'],
    badge: { bg: IC.bakery.bg, tx: IC.bakery.tx, text: 'LMA · E440b' },
    specs: [
      ['DE range', '20–40%'],
      ['DA range', '15–25%'],
      ['Ca²⁺ required', '0.1–0.3%'],
      ['Gel type', 'Thermally reversible'],
    ],
    apps: [{ l: 'Dairy desserts', i: 'dairy' }, { l: 'Retort fruit preps', i: 'bakery' }, { l: 'Pasteurized fillings', i: 'bakery' }, { l: 'No-sugar jam', i: 'lowsugar' }],
  },
  {
    id: 'bev', name: 'Beverage grade (HM)', range: 'DE 68–75% (viscosity std.)', viscPct: 95, featured: false,
    industries: ['beverage', 'dairy'],
    badge: { bg: IC.beverage.bg, tx: IC.beverage.tx, text: 'Beverage' },
    specs: [
      ['DE range', '68–75%'],
      ['Function', 'Cloud & mouthfeel'],
      ['Use level', '0.05–0.3%'],
      ['pH stability', '2.8–4.5'],
    ],
    apps: [{ l: 'Fruit juice cloud', i: 'beverage' }, { l: 'Low-cal beverages', i: 'beverage' }, { l: 'Drinking yoghurt', i: 'dairy' }, { l: 'Plant-based drinks', i: 'beverage' }],
  },
];

// "Quick reference table" — all pectin grades at a glance
export const REF_TABLE = {
  cols: ['Grade', 'DE range', 'Gelling requirement', 'Key features', 'Primary applications', 'E number'],
  rows: [
    {
      grade: { text: 'HM Rapid-Set', bg: '#FFF8E8', tx: '#7A4F00' },
      de: '65–75%',
      requirement: 'Sugar ≥ 60% SS · pH 3.0–3.5',
      features: 'Fast setting, good for batch deposited jams',
      apps: 'High-sugar jams, fruit preserves, confectionery',
      eno: 'E440a',
    },
    {
      grade: { text: 'HM Slow-Set', bg: '#FFF8E8', tx: '#7A4F00' },
      de: '50–65%',
      requirement: 'Sugar ≥ 55% SS · pH 2.8–3.3',
      features: 'Extended working time, clear gels, foam stabilization',
      apps: 'Jellies, continuous lines, beverages, dairy stabilizer',
      eno: 'E440a',
    },
    {
      grade: { text: 'LM Conventional', bg: '#E8F4FB', tx: '#1A5278' },
      de: '20–50%',
      requirement: 'Ca²⁺ 0.3–0.5% · pH 2.6–7.0 · SS 10–70%',
      features: 'Low / no sugar gelling, wide pH range',
      apps: 'Diet jams, fruit preps, bakery fillings, dairy gels',
      eno: 'E440a',
    },
    {
      grade: { text: 'LM Amidated (LMA)', bg: '#F5EAF8', tx: '#6A1F8A' },
      de: '20–40% (DA 15–25%)',
      requirement: 'Ca²⁺ 0.1–0.3% · pH 2.6–7.0 · SS 10–70%',
      features: 'Thermally reversible, less calcium, pH tolerant',
      apps: 'Dairy desserts, retort products, pasteurized fruit preps',
      eno: 'E440b',
    },
  ],
};
