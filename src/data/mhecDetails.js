// MHEC application detail sections, regulatory, SEO
import { IC } from './mhecContent';

export const APP_DETAILS = [
  {
    icon: '🏗️',
    title: 'Construction Chemicals — Primary Market',
    color: IC.tile,
    items: [
      {
        name: 'Tile Adhesives',
        desc: 'MHEC at 0.25–0.40% provides the critical water retention needed to keep tile adhesive workable after application on porous substrates (concrete blocks, brick, dry wall). It extends open time to ≥ 20 minutes (per EN 12004), ensures good wet-set adhesion, and prevents the mortar from sagging when large-format tiles are set vertically. Mid-to-high viscosity grades (40,000–100,000 mPa·s) are standard.',
      },
      {
        name: 'Wall Putty',
        desc: 'In white cement-based and polymer-based wall putty, MHEC at 0.20–0.35% prevents premature water loss into the wall substrate (especially sand-cement plaster), ensuring sufficient hydration for putty curing. It improves ease of application, reduces micro-cracking on drying, and contributes to good adhesion to the base. High viscosity grades (60,000–150,000 mPa·s) produce smoother, sag-resistant films.',
      },
      {
        name: 'Skim Coat & Thin-coat Plaster',
        desc: 'Skim coat applications involve applying very thin layers (1–5 mm), making water retention especially critical — rapid water loss causes cracking and bond failure. MHEC at high viscosity grades (75,000–200,000 mPa·s) delivers high water retention values (WRV ≥ 98%) that prevent premature drying, while maintaining workability and enabling a fine, smooth surface finish.',
      },
      {
        name: 'Gypsum Plaster & Compounds',
        desc: 'Gypsum plaster sets via hydration (CaSO₄·½H₂O → CaSO₄·2H₂O). MHEC at 0.10–0.30% slows water migration into the substrate, allowing the crystallisation reaction to complete uniformly. This prevents over-rapid set, surface cracking, and delamination from the substrate. In machine-applied gypsum, MHEC also improves pumpability and reduces pump wear. Low-to-mid viscosity grades (20,000–75,000 mPa·s) are preferred to avoid over-thickening.',
      },
      {
        name: 'Cement Render & External Plaster',
        desc: 'MHEC in cement-sand renders at 0.15–0.35% improves workability (easier trowelling), reduces cracking from premature drying on hot or porous backgrounds, and enhances adhesion to masonry. The anti-sag performance of MHEC allows thicker render coats (up to 15 mm) to be applied in a single pass on vertical walls without slumping. Mid-viscosity grades (40,000–100,000 mPa·s) balance water retention and workability.',
      },
      {
        name: 'Self-Levelling Compounds',
        desc: 'Self-levelling floor compounds require low viscosity and high flow for self-spreading, yet must retain water long enough for cementitious hydration. MHEC at low dosage (0.05–0.15%) and low viscosity grades (10,000–40,000 mPa·s) provides this balance — slightly increasing viscosity to prevent bleed water and surface segregation, while allowing the compound to self-level at flow tables of ≥ 165 mm (EN 13813).',
      },
    ],
  },
  {
    icon: '🎨',
    title: 'Paints & Coatings',
    color: IC.paint,
    items: [
      {
        name: 'Emulsion Paints',
        desc: 'MHEC at 0.10–0.30% functions as a secondary rheology modifier in water-based paints, typically used alongside associative thickeners (HEUR). It provides pseudoplastic flow behaviour, reduces sagging on vertical surfaces, improves brush application by maintaining a uniform wet film, and helps pigment suspension during storage.',
      },
      {
        name: 'Textured & Exterior Coatings',
        desc: 'In high-build textured coatings and acrylic renders (ETICS systems), MHEC contributes water retention and sag resistance, allowing the thick decorative coating to remain stable on vertical facades while maintaining open time for texture tool application.',
      },
    ],
  },
  {
    icon: '🧴',
    title: 'Detergents & Cleaners',
    color: IC.deterg,
    items: [
      {
        name: 'Cream Cleansers & Tile Cleaners',
        desc: 'MHEC provides thickening and cling performance in liquid and cream household and industrial cleaners. Its non-ionic character ensures compatibility with anionic, cationic, and non-ionic surfactant systems. It also acts as an anti-redeposition agent in hard-surface cleaners, preventing loosened soil from re-settling on cleaned surfaces.',
      },
    ],
  },
  {
    icon: '⛽',
    title: 'Oilfield Chemicals',
    color: IC.oil,
    items: [
      {
        name: 'Drilling & Completion Fluids',
        desc: 'MHEC in water-based drilling fluids provides filtration control (fluid loss reduction) by forming a low-permeability filter cake on the borehole wall, limiting the invasion of filtrate into permeable formations. Its non-ionic nature makes it compatible with high-salinity brines and calcium-based fluids. MHEC is particularly suited for freshwater and seawater-based muds where polymer stability and borehole stability are required.',
      },
    ],
  },
  {
    icon: '🏺',
    title: 'Ceramics',
    color: IC.ceram,
    items: [
      {
        name: 'Tile Body Extrusion & Glazes',
        desc: 'In ceramic tile manufacturing, MHEC acts as a temporary organic binder that improves green (unfired) body strength and plasticity during extrusion and pressing. In glaze formulations, it improves suspension of heavy mineral particles, controls glaze rheology, and burns out completely at kiln temperatures without leaving residue or discolouration in the finished ceramic.',
      },
    ],
  },
];

export const REGULATORY = [
  { icon: '🏗️', title: 'EN 12004', sub: 'Tile adhesive performance standard' },
  { icon: '📐', title: 'DIN 18555', sub: 'Water retention test method for mortars' },
  { icon: '🧪', title: 'EN 13813', sub: 'Screed mortar & floor compounds standard' },
  { icon: '📋', title: 'EN 998-1 / 998-2', sub: 'Rendering & masonry mortar specifications' },
  { icon: '⚗️', title: 'REACH compliant', sub: 'EU chemical registration (cellulose ether)' },
  { icon: '🌿', title: 'Non-hazardous', sub: 'No GHS hazard classification' },
];

export const SEO_TITLE = 'MHEC — Methyl Hydroxyethyl Cellulose: technical overview';
export const SEO_PARAS = [
  '<strong>Methyl Hydroxyethyl Cellulose (MHEC)</strong>, also referred to as HEMC (Hydroxyethyl Methyl Cellulose), is a non-ionic cellulose ether and the most widely consumed cellulose derivative in the global construction chemicals industry. Produced from purified wood pulp or cotton linters via alkaline activation followed by etherification with methyl chloride and ethylene oxide, MHEC combines the cold-water solubility of hydroxyethyl cellulose (HEC) with the thermal gelation behaviour and hydrophobic character of methylcellulose (MC).',
  'In the construction industry, MHEC\'s primary function is <strong>water retention</strong> — the prevention of premature water loss from freshly applied mortar, plaster, putty, or adhesive into the porous substrate beneath. Without adequate water retention, cementitious and gypsum binders cannot fully hydrate, leading to insufficient strength development, cracking, poor adhesion, and surface dusting. MHEC achieves water retention values (WRV) of 96–99% depending on grade, a performance level unmatched by most other water-retention additives at equivalent dosage.',
  'Beyond water retention, MHEC simultaneously delivers <strong>workability improvement</strong> — reducing the applied force required to spread or trowel mortar, improving wetting of aggregates and fillers, and contributing to open time extension. Its <strong>anti-sag</strong> performance, arising from pseudoplastic (shear-thinning) rheology and thermal gelation above 55°C, allows high-consistency mortars and tile adhesives to remain on vertical surfaces without slumping during the setting process.',
  'VIVINE International supplies construction-grade MHEC across a broad viscosity range (20,000 to 200,000 mPa·s) to serve tile adhesive manufacturers, wall putty producers, gypsum plaster formulators, skim coat system developers, and dry-mix mortar producers across India and global export markets. Technical data sheets with complete application-specific parameters are available on request.',
];

export const FOOTER_NOTE = 'All technical data is indicative and based on standard reference conditions (Brookfield 2% solution, 20°C). Actual performance in a given formulation depends on substrate, mix design, ambient conditions, and co-additives. Contact VIVINE International for application-specific grade recommendations and product samples.';
