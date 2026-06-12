// PAC regulatory badges, quick reference table, application deep-dive, PAC vs CMC

// "Standards & certifications"
export const REGULATORY = [
  { icon: '🛢️', title: 'API 13A / ISO 13500', sub: 'Section 9 — Fluid Loss Additive' },
  { icon: '🇨🇳', title: 'GB/T 5005-2010', sub: 'China drilling fluid standard' },
  { icon: '🏗️', title: 'EN 12004 compatible', sub: 'Construction mortar & adhesive' },
  { icon: '🧵', title: 'Textile processing', sub: 'Oeko-Tex process compatible' },
  { icon: '📋', title: 'TDS / SDS / COA', sub: 'Full documentation available' },
  { icon: '🏭', title: 'ISO 9001 manufacturing', sub: 'Quality-managed production' },
  { icon: '🕌', title: 'Halal / Kosher', sub: 'Certifiable on request' },
];

// "Quick reference table"
export const REF_COLS = [
  'Grade', 'Viscosity (mPa·s, 1%)', 'DS', 'Purity', 'API FL (mL/30 min)', 'Acid-Insol. Residue', 'Primary function',
];

export const REF_TABLE = [
  {
    grade: 'PAC-R (Regular)', color: { bg: '#FBF3E2', tx: '#7C4A0E' },
    volTag: 'Highest volume',
    visc: '600–1,000', ds: '0.85–1.10', purity: '≥ 95%',
    apiFl: '≤ 15.0', acid: '≤ 4.0%',
    func: 'Fluid loss control in freshwater, seawater & brine drilling muds; cementing slurries',
  },
  {
    grade: 'PAC-UHV / PAC-HV', color: { bg: '#FBF3E2', tx: '#7C4A0E' },
    visc: '1,000–8,000+', ds: '0.90–1.40', purity: '≥ 95%',
    apiFl: '≤ 12.0', acid: '≤ 2.5%',
    func: 'Fluid loss control + viscosity building; HTHP drilling (≤ 150 °C); low-solids polymer muds',
  },
  {
    grade: 'Construction grade', color: { bg: '#F1EDE4', tx: '#5C4020' },
    visc: '800–3,000+', ds: '0.85–1.20', purity: '≥ 92%',
    apiFl: '—', acid: '—',
    func: 'Water retention, thickening & workability in tile adhesives, mortars, renders, SLU compounds',
  },
  {
    grade: 'Textile grade', color: { bg: '#EAF0F8', tx: '#1A4A7A' },
    visc: '200–2,000', ds: '0.85–1.15', purity: '≥ 90%',
    apiFl: '—', acid: '—',
    func: 'Warp yarn sizing, reactive dye print paste thickening, fabric finish & surface coating',
  },
  {
    grade: 'Industrial grade', color: { bg: '#EEF0EA', tx: '#3A4A2A' },
    visc: '200–5,000+', ds: '0.85–1.20', purity: '≥ 90%',
    apiFl: '—', acid: '—',
    func: 'Thickening, binding & dispersing in paper coating, detergents, ceramics, agro-chemicals',
  },
];

// "Application deep-dive by industry"
export const APP_DETAILS = [
  {
    title: 'Oil Drilling — Water-Based Drilling Fluids (WBM)', icon: '🛢️',
    color: { bg: '#FBF3E2', tx: '#7C4A0E' },
    items: [
      { name: 'Fluid Loss Control (API 13A Filtration Reducer)', desc: 'PAC-R is the primary API 13A-compliant fluid loss additive for WBM. It adsorbs onto the borehole wall, forming a thin, low-permeability filter cake that minimises filtrate invasion into the formation. API Fluid Loss ≤ 15 mL / 30 min at 0.690 MPa. Dosage: 1–4 kg/m³ of mud depending on formation type and salinity.' },
      { name: 'Viscosity & Yield Point Building (PAC-UHV)', desc: 'PAC-UHV simultaneously controls fluid loss and increases plastic viscosity / yield point — reducing the need for a separate viscosifier (xanthan or bentonite). Ideal for low-solids, inhibitive polymer muds where minimising solids content improves rate of penetration (ROP). Dosage: 0.5–2 kg/m³.' },
      { name: 'Saline & Seawater Mud Systems', desc: 'PAC functions in KCl-inhibitive muds (up to 3% KCl), NaCl-saturated brines (~26%), and offshore seawater-based muds where bentonite hydration is suppressed and starch or guar gum would ferment or degrade. Critical for shale-inhibition drilling and marine well operations.' },
      { name: 'HTHP Drilling (PAC-UHV)', desc: 'PAC-UHV is thermally stable to 150 °C (300 °F) at downhole conditions. The high DS (0.90–1.40) reduces thermal degradation of the carboxymethyl polymer backbone compared to lower-DS grades. Suitable for deep directional, geothermal, and ultra-deep offshore wells where bottomhole temperatures exceed 120 °C.' },
      { name: 'Horizontal & Extended-Reach Drilling (ERD)', desc: 'In long horizontal well sections, PAC controls fluid loss across extended borehole intervals, maintaining differential pressure stability and wellbore integrity. Used with xanthan gum for cuttings suspension. Low acid-insoluble residue is critical for preserving formation permeability in pay-zone sections.' },
      { name: 'Completion & Workover Fluids', desc: 'Low residue PAC-R (acid-insoluble ≤ 4%) is specified in completion fluids where formation return permeability must be preserved. PAC filter cakes can be removed by acid treatment or enzyme breakers, making them compatible with perforation and hydraulic fracturing operations.' },
      { name: 'Oil Well Cement Slurries', desc: 'PAC is added to well cement slurries as a fluid loss additive at 0.2–0.5% BWOC (by weight of cement), preventing slurry dehydration before cement set — particularly in permeable formations and long casing strings. Effective in freshwater and moderate-salinity cement systems.' },
      { name: 'Low-Solids Non-Dispersed (LSND) Polymer Muds', desc: 'PAC is a core component of LSND polymer mud systems, used alongside PHPA (partially hydrolysed polyacrylamide) and xanthan gum. LSND systems reduce formation damage, improve ROP, and minimise differential pipe sticking in sensitive formations — PAC provides the fluid loss function in these systems.' },
    ],
  },
  {
    title: 'Construction Chemical Manufacturers', icon: '🏗️',
    color: { bg: '#F1EDE4', tx: '#5C4020' },
    items: [
      { name: 'Tile Adhesives & Grouts (EN 12004)', desc: "PAC improves open time, sag resistance, and tile adhesion in C1/C2 class cementitious tile adhesives. Dosage: 0.2–0.5% in dry-mix. Water retention prevents premature cement hydration before tile placement. PAC's high DS builds water retention at lower dosages than commodity CMC, reducing cost-in-use." },
      { name: 'Cement Mortars & Renders', desc: 'In masonry mortars, external renders, and thin-bed mortars, PAC retains mix water (water retention >95% achievable at 0.3%), extends workability time, and improves adhesion to porous substrates. Works synergistically with HPMC or MHEC in premium dry-mix formulations for façade systems.' },
      { name: 'Self-Levelling Underlayments (SLU)', desc: 'PAC provides viscosity control and prevents bleed water separation in gypsum and cement-based self-levelling flooring compounds. Higher DS efficiency allows use at lower dosages vs. standard CMC, maintaining flow while controlling segregation.' },
      { name: 'Exterior Insulation Finishing Systems (EIFS)', desc: 'PAC builds thixotropic rheology in polymer-modified base coats and adhesives for external thermal insulation composite systems (ETICS), preventing slumping of vertically-applied coatings while providing adequate open time for mesh embedding.' },
      { name: 'Dry-Mix Repair Mortars & Patching Compounds', desc: 'In structural repair mortars and concrete patch systems, PAC extends application workability, improves adhesion to concrete and masonry substrates, and reduces shrinkage cracking by controlling the rate of water evaporation during cure.' },
      { name: 'Gypsum Plasters & Joint Compounds', desc: 'PAC acts as a water retention agent and thickener in gypsum-based plasters, board joint compounds, and skim coat formulations. It prevents rapid water migration to porous plasterboard and masonry substrates, ensuring adequate working time and smooth finish quality.' },
    ],
  },
  {
    title: 'Textile Chemical Suppliers', icon: '🧵',
    color: { bg: '#EAF0F8', tx: '#1A4A7A' },
    items: [
      { name: 'Warp Yarn Sizing (Slashing)', desc: 'PAC is applied to warp threads in the sizing / slashing process to reduce yarn breakage during high-speed weaving. It forms a protective, flexible film around individual fibres — compatible with cotton, viscose, polyester-cotton blends, and other cellulosic yarns. Size add-on: 8–14% on cotton warp. Superior film strength and desizability compared to starch-based sizes.' },
      { name: 'Reactive Dye Print Paste Thickener', desc: 'Low and medium viscosity PAC grades thicken reactive dye pastes for flat screen, rotary screen, and digital-assist printing on cotton and cellulosic fabrics. Provides sharp print definition, prevents dye migration, and delivers excellent colour yield. Dosage 2–5% in print paste. Easy wash-off after steaming and rinsing.' },
      { name: 'Textile Finishing Auxiliaries', desc: 'PAC is incorporated into fabric softener, handle-modifying, and anti-pilling finishing formulations as a viscosity builder and film-former. It improves fabric hand feel and surface smoothness. Compatible with cationic, anionic, and nonionic softener and finish systems at standard application temperatures.' },
      { name: 'Carpet Backing & Fabric Coating', desc: "PAC builds viscosity in latex carpet backing compounds, foam backing adhesives, and technical fabric coatings — improving coating uniformity, layer adhesion, and surface coverage at high application speeds. Reduces foam formation in anionic latex systems due to PAC's electrolytic compatibility." },
      { name: 'Nonwoven Fabric Binder & Coating', desc: 'In nonwoven manufacturing (wetlaid, spunlace, airlaid), PAC functions as a secondary binder and surface-coating agent to improve wet tensile strength, dimensional stability, and liquid barrier properties — used in technical nonwovens, filtration media, and hygiene-grade fabrics.' },
    ],
  },
  {
    title: 'Industrial Chemical Distributors', icon: '⚙️',
    color: { bg: '#EEF0EA', tx: '#3A4A2A' },
    items: [
      { name: 'Industrial Thickening & Rheology Control', desc: 'PAC builds pseudoplastic viscosity in water-based industrial formulations — adhesives, industrial coatings, mineral slurries, and chemical concentrates — where elevated salt tolerance or temperature resistance is required. High DS enables target viscosity at 15–25% lower dosage vs. commodity CMC, reducing formulation cost.' },
      { name: 'Paper Surface Sizing & Coating', desc: 'PAC improves surface strength, ink holdout, and printability in paper surface sizing at the size press. High-DS PAC builds viscosity in size press formulations more efficiently and reduces linting. The anionic character improves retention of cationic pigments and dyes in coated paper grades.' },
      { name: 'Detergent & Institutional Cleaning Formulations', desc: "PAC's high anionic charge density makes it an exceptionally effective soil anti-redeposition agent in liquid laundry detergents and institutional cleaning products. It prevents re-deposition of particulate and greasy soils on textile surfaces during the wash cycle — more effective than standard CMC at equivalent dosages due to higher DS." },
      { name: 'Agricultural Chemical Carriers (Agrochemicals)', desc: 'PAC thickens and stabilises suspension concentrate (SC), wettable powder (WP), and flowable formulations for pesticides, herbicides, and fungicides. Improves spray adhesion, rainfastness, and leaf coverage on crop surfaces. Salt tolerance is critical in hard-water mixing regions common in agricultural settings.' },
      { name: 'Ceramic & Refractory Binders', desc: 'PAC functions as a green-strength binder and plasticiser in ceramic slip casting, extrusion, press bodies, and refractory formulations. It provides excellent dispersion of alumina, silica, and clay particles and burns out cleanly during firing with minimal ash residue that could affect ceramic microstructure.' },
      { name: 'Mineral Slurry Processing', desc: 'In mining and mineral processing, PAC is used as a selective flocculant, dispersant, and viscosity modifier in ore beneficiation, tailings management, and mineral flotation circuits. Its anionic character and salt tolerance suit the alkaline, high-electrolyte environments typical of mineral processing operations.' },
    ],
  },
];

// "PAC vs. Standard CMC — performance comparison"
// Cell: string OR { t, hl: 'good' } for PAC-side emphasis
export const COMPARE = {
  cols: ['Property', 'PAC (Polyanionic Cellulose)', 'Standard Industrial / Food CMC'],
  rows: [
    ['Degree of Substitution (DS)', { t: '0.85–1.40 (high)', hl: 'good' }, '0.65–0.90 (standard)'],
    ['Oilfield purity specification', { t: '≥ 95% dry basis (API 13A)', hl: 'good' }, 'Not specified / not API tested'],
    ['API 13A / ISO 13500 compliance', { t: 'Yes — fully API 13A Section 9 compliant', hl: 'good' }, 'No — not an API specification product'],
    ['API Fluid Loss performance', { t: '≤ 15 mL (PAC-R); ≤ 12 mL (PAC-UHV)', hl: 'good' }, 'Not tested / typically fails API 13A limits'],
    ['Acid-insoluble residue (oilfield)', { t: '≤ 4.0% (PAC-R); ≤ 2.5% (PAC-UHV)', hl: 'good' }, 'Not controlled to API limits'],
    ['Thermal stability', { t: 'Up to 150 °C (PAC-UHV); 120 °C (PAC-R)', hl: 'good' }, 'Up to 90–100 °C (standard CMC)'],
    ['NaCl brine tolerance', { t: 'Functional to saturation (~26% NaCl)', hl: 'good' }, 'Moderate — performance drops above ~5% NaCl'],
    ['KCl brine tolerance', { t: 'Functional to 3% KCl', hl: 'good' }, 'Limited — KCl suppresses CMC solution viscosity'],
    ['Viscosity efficiency (per kg)', { t: 'Higher — target viscosity at lower concentration', hl: 'good' }, 'Lower — requires higher dosage'],
    ['Formation damage risk', { t: 'Low (controlled low acid-insoluble residue)', hl: 'good' }, 'Higher — acid-insoluble impurities not API-controlled'],
    ['Construction water retention efficiency', { t: 'Higher — effective at 0.2–0.4% in dry-mix', hl: 'good' }, 'Requires 0.3–0.6% for equivalent water retention'],
    ['Regulatory approvals (food / pharma)', 'Not food-approved — industrial / oilfield use only', 'E466 / GRAS / USP-BP-EP / FCC (food & pharma)'],
    ['Price vs. commodity CMC', 'Premium (30–60% over industrial CMC)', 'Lower (commodity pricing)'],
  ],
  note: 'Note: PAC and standard CMC share CAS 9004-32-4 but differ significantly in DS, purity specification, and performance profile. PAC is not interchangeable with food/pharma CMC in regulated food, pharmaceutical, or cosmetic applications.',
};
