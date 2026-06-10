// HEC applications table data (industry segment rows)
import { IC } from './hecContent';

export const APP_TABLE = [
  {
    name: 'Architectural Paints ⭐', color: IC.paint,
    products: 'Interior / exterior emulsion paints, primer, textured wall coating',
    visc: '30,000–100,000 mPa·s',
    func: 'Primary thickener; pseudoplastic flow for sag-free application; pigment suspension; spatter resistance; in-can viscosity stability; compatible with latex polymers and all surfactants',
    dosage: '0.2–0.5%',
  },
  {
    name: 'Industrial Coatings', color: IC.paint,
    products: 'Anticorrosion coatings, wood coatings, floor coatings',
    visc: '10,000–30,000 mPa·s',
    func: 'Rheology control, water retention (open time), improved levelling, compatibility with co-solvents',
    dosage: '0.1–0.3%',
  },
  {
    name: 'Drilling Fluids ⭐', color: IC.oil,
    products: 'Water-based mud (WBM), completion fluids, workover fluids, spacer fluids',
    visc: '30,000–100,000 mPa·s',
    func: 'Fluid loss control (filter cake formation), viscosity building for cuttings transport, borehole stability; non-ionic — stable in high-salinity brines (NaCl, KCl, CaCl₂) and high-temperature wells',
    dosage: '0.3–1.0%',
  },
  {
    name: 'Construction Chemicals', color: IC.const,
    products: 'Cement renders, gypsum plaster, tile adhesives, grouting mortars',
    visc: '10,000–60,000 mPa·s',
    func: 'Water retention, workability improvement; note — HEC does not gel on heating, so is less effective than MHEC for anti-sag in vertical applications; preferred in grouts and joint fillers where thermal gelation is undesirable',
    dosage: '0.1–0.4%',
  },
  {
    name: 'Shampoos & Body Wash ⭐', color: IC.care,
    products: 'Shampoos, 2-in-1 conditioners, body wash, liquid soap',
    visc: '3,000–10,000 mPa·s',
    func: 'Thickening of surfactant-rich systems; compatible with anionic (SLS, SLES), amphoteric (betaine), and cationic conditioner systems; improves sensory feel, cling, and foam quality; no charge — avoids precipitation with cationic conditioning agents',
    dosage: '0.3–1.0%',
  },
  {
    name: 'Lotions, Creams & Gels', color: IC.care,
    products: 'Face creams, hand lotions, hair styling gels, sunscreen, moisturisers',
    visc: '5,000–30,000 mPa·s',
    func: 'Viscosity building and texture modification; forms clear hydrogel matrices; improves spreadability and skin feel; film-forming for conditioned skin/hair surface; stabilises emulsions and suspensions',
    dosage: '0.5–1.5%',
  },
  {
    name: 'Toothpaste', color: IC.care,
    products: 'Fluoride toothpaste, whitening paste, sensitive formulas',
    visc: '5,000–10,000 mPa·s',
    func: 'Rheology modifier and binder; controls extrusion consistency and stand-up on brush; compatible with abrasives (calcium carbonate, silica), fluorides, and surfactants',
    dosage: '0.5–1.5%',
  },
  {
    name: 'Liquid Detergents', color: IC.deterg,
    products: 'Laundry liquid detergents, dishwashing liquids, all-purpose cleaners',
    visc: '5,000–30,000 mPa·s',
    func: 'Thickening of high-surfactant systems; soil anti-redeposition on fabric (adsorbs onto cotton fibres and prevents loosened soil from redepositing during washing); cling performance in toilet and bathroom cleaners',
    dosage: '0.2–0.8%',
  },
  {
    name: 'Textile Printing', color: IC.text,
    products: 'Reactive dye printing pastes, pigment printing pastes, discharge printing',
    visc: '5,000–30,000 mPa·s',
    func: 'Print paste thickener; controls dye migration on fabric to achieve sharp pattern definition; washes out cleanly after printing and fixation without leaving residue; compatible with reactive, disperse, and vat dyes',
    dosage: '1.0–4.0%',
  },
  {
    name: 'Pharmaceuticals', color: IC.pharma,
    products: 'Ophthalmic drops, oral suspensions, wound care gels, tablet binder',
    visc: '3,000–30,000 mPa·s (pharma grade)',
    func: 'Viscosity agent in artificial tear solutions and eye drops; suspension stabiliser in oral liquid formulations; wound-care gel matrix; mucoadhesive properties for topical and nasal systems; USP / Ph.Eur. grades available',
    dosage: '0.5–2.0%',
  },
];
