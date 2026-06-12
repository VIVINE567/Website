// Sodium CMC "Quick reference table" — all grades at a glance

export const REF_COLS = ['Grade', 'Viscosity (mPa·s)', 'Standard / Purity', 'Key features', 'Applications'];

// `color` drives the coloured grade pill (matches the HTML tgrade palette)
export const REF_TABLE = [
  { grade: 'Low viscosity', color: { bg: '#FEF3E2', tx: '#92400E' }, visc: '25–200', standard: '≥ 99.5%', features: 'Excellent solution clarity', apps: 'Beverages, Paper coating, Textile sizing' },
  { grade: 'Medium viscosity', color: { bg: '#FEF3E2', tx: '#92400E' }, visc: '200–800', standard: '≥ 99.5%', features: 'Good suspension properties', apps: 'Dairy products, Sauces, Creams & lotions' },
  { grade: 'High viscosity', color: { bg: '#FEF3E2', tx: '#92400E' }, visc: '800–8,000+', standard: '≥ 99.5%', features: 'Strong thickening and water retention', apps: 'Tile adhesives, Cement mortars, Drilling fluids' },
  { grade: 'Food grade (E466)', color: { bg: '#EBF5E3', tx: '#2D6612' }, visc: '50–8,000', standard: 'E466 / FCC / JECFA', features: 'High purity, food compliant', apps: 'Ice cream, Bakery products, Sauces' },
  { grade: 'Pharma grade', color: { bg: '#EBF1FA', tx: '#1B4F8A' }, visc: '50–6,000', standard: 'USP / EP / BP', features: 'Controlled microbial limits', apps: 'Tablet binder, Oral suspensions, Ophthalmic solutions' },
  { grade: 'Cosmetic grade', color: { bg: '#FAEDF3', tx: '#8A1F4A' }, visc: '100–3,000', standard: 'Cosmetic / CIR', features: 'Good film formation and stability', apps: 'Toothpaste, Shampoos, Skin gels' },
  { grade: 'Industrial / technical grade', color: { bg: '#F1EFE8', tx: '#444441' }, visc: '25–5,000+', standard: '≥ 90%', features: 'Strong binding and thickening properties', apps: 'Paper sizing, Ceramic binders, Textile sizing' },
  { grade: 'Oilfield grade', color: { bg: '#F5F0E8', tx: '#5C3D11' }, visc: '50–8,000+', standard: 'API 13A / GB/T 5005', features: 'High salt tolerance and fluid loss control', apps: 'Drilling fluids, Completion fluids, Cementing systems' },
];
