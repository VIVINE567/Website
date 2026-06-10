// MHEC applications table data (industry segment rows)
import { IC } from './mhecContent';

export const APP_TABLE = [
  {
    name: 'Tile Adhesives', color: IC.tile,
    products: 'C1 / C2 standard set, fast-set, thick-bed tile adhesives (EN 12004)',
    visc: '40,000–100,000 mPa·s',
    func: 'Water retention, open time extension (≥ 20 min), anti-sag on vertical surfaces, slip resistance',
    dosage: '0.25–0.40%',
  },
  {
    name: 'Wall Putty', color: IC.tile,
    products: 'Cement-based white putty, acrylic wall putty, finishing putty',
    visc: '60,000–150,000 mPa·s',
    func: 'Water retention (prevents dry-out and cracking), smooth workability, adhesion to substrate, low shrinkage',
    dosage: '0.20–0.35%',
  },
  {
    name: 'Skim Coat & Finishing Plaster', color: IC.tile,
    products: 'Thin-coat plaster, one-coat render, skim coat systems',
    visc: '75,000–200,000 mPa·s',
    func: 'High water retention for thin applications, smooth finish, extended workability time, reduced cracking',
    dosage: '0.20–0.40%',
  },
  {
    name: 'Gypsum Plaster & Compounds', color: IC.tile,
    products: 'Gypsum-based hand plaster, machine-applied plaster, joint compounds, finishing compounds',
    visc: '20,000–75,000 mPa·s',
    func: 'Water retention, workability improvement, sag resistance on walls and ceilings, adhesion to substrates, smooth surface finish',
    dosage: '0.10–0.30%',
  },
  {
    name: 'Cement Render & External Plaster', color: IC.tile,
    products: 'Cement-sand renders, monocouche render, façade coatings, base coat plasters',
    visc: '40,000–100,000 mPa·s',
    func: 'Water retention, anti-sag, workability, consistency improvement, reduced segregation',
    dosage: '0.15–0.35%',
  },
  {
    name: 'Self-Levelling Compounds', color: IC.tile,
    products: 'Floor levelling underlayments, self-smoothing floor screeds',
    visc: '10,000–40,000 mPa·s',
    func: 'Controlled flow, anti-segregation, water retention, improved surface levelling without cracking',
    dosage: '0.05–0.15%',
  },
  {
    name: 'Paints & Coatings', color: IC.paint,
    products: 'Emulsion paints, textured coatings, exterior masonry paints',
    visc: '40,000–100,000 mPa·s',
    func: 'Rheology control, sagging prevention, improved brush/roller application, pigment suspension',
    dosage: '0.10–0.30%',
  },
  {
    name: 'Detergents & Cleaners', color: IC.deterg,
    products: 'Tile cleaners, heavy-duty industrial cleaners, cream cleansers',
    visc: '20,000–60,000 mPa·s',
    func: 'Thickening, soil anti-redeposition, surface adhesion of active ingredients, cling properties',
    dosage: '0.20–0.80%',
  },
  {
    name: 'Oilfield Chemicals', color: IC.oil,
    products: 'Drilling fluids, completion fluids, cementing spacer fluids',
    visc: '40,000–100,000 mPa·s',
    func: 'Fluid loss control (water retention in high-pressure formation), viscosity building, shale inhibition, borehole stability',
    dosage: '0.30–1.0%',
  },
  {
    name: 'Ceramics', color: IC.ceram,
    products: 'Ceramic glazes, tile body extrusion compounds, sanitaryware casting slips',
    visc: '20,000–60,000 mPa·s',
    func: 'Green strength binder, plasticity improvement, water retention, burnout cleanly during firing',
    dosage: '0.20–0.60%',
  },
];
