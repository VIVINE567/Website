// Sodium CMC "Quick reference table" — all grades at a glance

export const REF_COLS = ['Grade', 'Viscosity (mPa·s)', 'Standard / Purity', 'Key features', 'Applications'];

// `color` drives the coloured grade pill — brand earth palette (forest/gold/clay/stone)
export const REF_TABLE = [
  { grade: 'Low viscosity', color: { bg: '#F2E7CB', tx: '#9A7A2E' }, visc: '25–200', standard: '≥ 99.5%', features: 'Excellent solution clarity', apps: 'Beverages, Paper coating, Textile sizing' },
  { grade: 'Medium viscosity', color: { bg: '#F2E7CB', tx: '#9A7A2E' }, visc: '200–800', standard: '≥ 99.5%', features: 'Good suspension properties', apps: 'Dairy products, Sauces, Creams & lotions' },
  { grade: 'High viscosity', color: { bg: '#F1E7CD', tx: '#9A7A2E' }, visc: '800–8,000+', standard: '≥ 99.5%', features: 'Strong thickening and water retention', apps: 'Tile adhesives, Cement mortars, Drilling fluids' },
  { grade: 'Food grade (E466)', color: { bg: '#E7EDDB', tx: '#3D4F2F' }, visc: '50–8,000', standard: 'E466 / FCC / JECFA', features: 'High purity, food compliant', apps: 'Ice cream, Bakery products, Sauces' },
  { grade: 'Pharma grade', color: { bg: '#E0E8E2', tx: '#38564A' }, visc: '50–6,000', standard: 'USP / EP / BP', features: 'Controlled microbial limits', apps: 'Tablet binder, Oral suspensions, Ophthalmic solutions' },
  { grade: 'Cosmetic grade', color: { bg: '#F0E3DA', tx: '#8A5A4A' }, visc: '100–3,000', standard: 'Cosmetic / CIR', features: 'Good film formation and stability', apps: 'Toothpaste, Shampoos, Skin gels' },
  { grade: 'Industrial / technical grade', color: { bg: '#E9E3D3', tx: '#6B6450' }, visc: '25–5,000+', standard: '≥ 90%', features: 'Strong binding and thickening properties', apps: 'Paper sizing, Ceramic binders, Textile sizing' },
  { grade: 'Oilfield grade', color: { bg: '#ECE1CF', tx: '#6E4E2E' }, visc: '50–8,000+', standard: 'API 13A / GB/T 5005', features: 'High salt tolerance and fluid loss control', apps: 'Drilling fluids, Completion fluids, Cementing systems' },
];
