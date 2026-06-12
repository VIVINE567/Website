// CCS regulatory badges, quick reference table, application deep-dive, comparison, formulation guidelines

export const REGULATORY = [
  { icon: '🇺🇸', title: 'USP / NF', sub: 'United States Pharmacopeia / NF monograph' },
  { icon: '🇪🇺', title: 'Ph.Eur. 9.0', sub: 'European Pharmacopoeia monograph' },
  { icon: '🇬🇧', title: 'BP (British Pharmacopoeia)', sub: 'UK pharmacopoeial compliance' },
  { icon: '🇯🇵', title: 'JP XVII', sub: 'Japanese Pharmacopoeia compliant' },
  { icon: '📋', title: 'FDA DMF / EU EDMF', sub: 'Drug Master File on request' },
  { icon: '🏭', title: 'ICH Q7 Excipient GMP', sub: 'IPEC / EXCIPACT aligned' },
  { icon: '📄', title: 'TDS / SDS / COA', sub: 'Full documentation available' },
  { icon: '🕌', title: 'Halal / Kosher', sub: 'Certifiable on request' },
];

export const REF_COLS = [
  'Grade', 'Use Level (% w/w)', 'Settling Volume', 'pH (1% disp.)', 'Process suitability', 'Primary application',
];

export const REF_TABLE = [
  {
    grade: 'Standard pharma grade', color: { bg: '#EAF0FB', tx: '#1A3A8C' },
    volTag: 'Major volume',
    useLevel: '0.5–5.0%', settling: '≥ 10 mL (USP)', ph: '5.0–7.0',
    process: 'WG (intra/extra), DC, Dry granulation',
    primary: 'Rx tablets, OTC tablets, hard capsules, chewable tablets',
  },
  {
    grade: 'Fine particle grade', color: { bg: '#EAF0FB', tx: '#1A3A8C' },
    useLevel: '0.5–3.0%', settling: '≥ 10 mL (USP)', ph: '5.0–7.0',
    process: 'Direct compression (preferred), low-dose APIs',
    primary: 'Low-dose API tablets, ODT (orally disintegrating tablets), mini-tablets',
  },
  {
    grade: 'Nutraceutical grade', color: { bg: '#EAF5E8', tx: '#1E6B28' },
    useLevel: '0.5–4.0%', settling: '≥ 10 mL', ph: '5.0–7.0',
    process: 'WG, DC, direct blend',
    primary: 'Vitamin & mineral tablets, herbal supplement tablets, sports nutrition',
  },
  {
    grade: 'Capsule fill grade', color: { bg: '#FFF4E8', tx: '#8A4A00' },
    useLevel: '10–25% of fill wt', settling: '≥ 10 mL', ph: '5.0–7.0',
    process: 'Hard gelatin capsule fill, HPMC capsule fill',
    primary: 'Powder-fill capsules, pellet-fill capsules, Rx & OTC capsule products',
  },
];

export const APP_DETAILS = [
  {
    title: 'Pharmaceutical Industry — Oral Solid Dosage Forms', icon: '💊',
    color: { bg: '#EAF0FB', tx: '#1A3A8C' },
    items: [
      { name: 'Conventional Compressed Tablets (Rx & OTC)', desc: 'CCS is the most widely used superdisintegrant in conventional film-coated and uncoated tablets. At 1–3% w/w, it achieves USP disintegration times under 3 minutes in wet granulated and direct compression formulations — applied to analgesics, antibiotics, antihypertensives, antidiabetics, and antacids. Examples: paracetamol tablets, amoxicillin tablets, metformin tablets, ibuprofen tablets.' },
      { name: 'Orally Disintegrating Tablets (ODT)', desc: 'In ODT formulations (disintegration ≤ 30 seconds in the mouth per FDA guidance), CCS at 2–5% combined with water-soluble fillers (mannitol, sorbitol) provides rapid mouth disintegration. The fine particle CCS grade is preferred for smooth mouthfeel. Used in paediatric, geriatric, and dysphagia patient populations where swallowing conventional tablets is problematic.' },
      { name: 'Hard Gelatin & HPMC Capsules', desc: 'As a capsule fill disintegrant at 10–25% of fill weight, CCS ensures rapid dispersion of powder or pellet fills after capsule shell dissolution. Critical for BCS Class II and IV APIs where dissolution rate is the absorption rate-limiting step. Used in both hard gelatin (two-piece) and HPMC vegetarian capsules for Rx and OTC products.' },
      { name: 'Chewable & Dispersible Tablets', desc: 'In chewable tablets (paediatric vitamins, antacids), CCS at 1–2.5% improves dispersibility after chewing, facilitating complete drug release in the GI tract. In dispersible tablets (dissolved in water before swallowing), CCS ensures rapid, complete tablet dispersion to a uniform suspension within 3 minutes as specified by Ph.Eur. requirements.' },
      { name: 'Wet Granulation Tablets', desc: 'In wet granulation, CCS performs best when added as a split — 50% intragranularly (before granulation, to disintegrate granules) and 50% extragranularly (post-granulation, to disintegrate the tablet matrix). Intragranular CCS withstands the wet granulation and drying cycle with retained disintegrant functionality. Total CCS level: 1–4% w/w.' },
      { name: 'Direct Compression (DC) Tablets', desc: 'In DC formulations, CCS is blended with DC-grade fillers (MCC, DCPA, mannitol) and API, then lubricated and compressed. Added extragranularly at 0.5–3%, it provides rapid disintegration without the need for wet granulation. Preferred for moisture-sensitive APIs. Mixing with magnesium stearate should be limited to 3–5 minutes to avoid over-lubrication masking CCS swelling.' },
      { name: 'Effervescent & Modified-Release Tablets', desc: 'In semi-effervescent or combination immediate/modified release formulations, CCS in the immediate-release layer ensures rapid disintegration of the IR portion while modified-release matrix (HPMC or EC) controls sustained drug delivery from a second layer. CCS is fully compatible with HPMC, HPC, and EC matrix-forming polymers used in bilayer tablet designs.' },
      { name: 'Generic Drug Manufacturing', desc: "CCS is the reference superdisintegrant in thousands of ANDA (Abbreviated New Drug Application) and MA (Marketing Authorisation) filings globally. Its multi-compendial status (USP/NF, Ph.Eur., BP, JP) and widely available FDA Drug Master File (DMF) simplifies regulatory submissions. FDA Inactive Ingredient Database (IID) lists CCS in oral tablets and capsules across multiple routes and dosage forms." },
    ],
  },
  {
    title: 'Nutraceutical Industry — Dietary Supplements & Functional Tablets', icon: '🌿',
    color: { bg: '#EAF5E8', tx: '#1E6B28' },
    items: [
      { name: 'Vitamin & Mineral Tablets', desc: 'CCS is the preferred disintegrant for multivitamin and single-vitamin tablets (Vitamin C, Vitamin D, B-complex, Vitamin E) where rapid release enhances absorption. At 1–3% in ascorbic acid tablets, CCS provides disintegration within 30–90 seconds even in dense, high-load tablet formulations. Nutraceutical-grade CCS meets USP quality standards without pharma-grade pricing.' },
      { name: 'Mineral Supplement Tablets', desc: "Calcium, magnesium, zinc, iron, and selenium tablets benefit from CCS addition at 1.5–3.5%. Mineral tablets are typically harder and denser than conventional drug tablets — CCS's high swelling force overcomes the greater hardness of mineral compacts to achieve disintegration under 10 minutes per USP standards for dietary supplements." },
      { name: 'Herbal & Botanical Supplement Tablets', desc: 'In herbal extract tablets (turmeric, ashwagandha, milk thistle, green tea, elderberry), plant extract powders are often waxy, sticky, and hydrophobic — making disintegration a challenge. CCS at 2–4% overcomes the hydrophobic barrier of herbal extracts by wicking water into the tablet core and swelling to disrupt the compressed matrix.' },
      { name: 'Sports Nutrition Tablets', desc: 'High-dose creatine, BCAA, pre-workout, and protein-supplement tablets require fast disintegration for rapid bioavailability — especially important in pre/post-exercise nutrition timing. CCS at 1–2.5% in sports supplement formulations ensures disintegration within 5–15 minutes, improving consumer-perceived efficacy and product differentiation.' },
      { name: 'Omega / Fish Oil & Softgel-Equivalent Tablets', desc: 'Where formulation economics favour tablets over softgels for omega-3 and similar lipid-based ingredients, CCS assists disintegration of wax-coated or lipid-loaded tablet matrices. Used with appropriate wetting agents (SDS, poloxamer) to overcome hydrophobic API characteristics in lipid-containing nutraceutical tablets.' },
      { name: 'Probiotic & Enzyme Tablets', desc: 'Probiotic and digestive enzyme tablets require rapid, complete disintegration to release viable organisms or enzyme units quickly. CCS ensures rapid tablet breakup without the high moisture uptake of starch (which can damage probiotic viability during manufacture). Typical use: 1.5–3.0% in probiotic tablet formulations.' },
    ],
  },
];

// "CCS vs. other tablet disintegrants" — 5-column comparison with green highlighting
export const COMPARE = {
  cols: ['Property', 'Croscarmellose Sodium (CCS)', 'Sodium Starch Glycolate (SSG)', 'Crospovidone (PVPP)', 'Starch (Maize / Potato)'],
  rows: [
    ['CAS number', '74811-65-7', '9063-38-1', '9003-39-8', '9005-25-8'],
    ['Chemical type', 'Cross-linked Na-CMC', 'Cross-linked Na-starch glycolate', 'Cross-linked PVP (polyvinylpyrrolidone)', 'Natural polysaccharide'],
    ['Mechanism', { t: 'Dual: wicking + swelling (4–8×)', hl: 'good' }, 'Primarily swelling (10–20×)', 'Primarily wicking (capillary action)', 'Swelling + slight wicking'],
    ['Typical use level', { t: '0.5–5% (optimum 1–3%)', hl: 'good' }, '2–8%', '2–5%', '5–20%'],
    ['Disintegration speed', { t: 'Very fast (superdisintegrant)', hl: 'good' }, { t: 'Very fast (superdisintegrant)', hl: 'good' }, { t: 'Very fast (superdisintegrant)', hl: 'good' }, 'Slow–moderate'],
    ['Water solubility', { t: 'Insoluble (no gel layer)', hl: 'good' }, 'Slightly soluble (gel layer possible at high conc.)', { t: 'Insoluble (no gel layer)', hl: 'good' }, 'Insoluble (cold water)'],
    ['Compendial status', { t: 'USP/NF · Ph.Eur. · BP · JP', hl: 'good' }, 'USP/NF · Ph.Eur. · BP · JP', 'USP/NF · Ph.Eur. · BP · JP', 'USP/NF · Ph.Eur.'],
    ['Sensitivity to over-lubrication (Mg stearate)', 'Moderate — limit mixing to 3–5 min', 'High — very sensitive', 'Low — least sensitive', 'Low'],
    ['Moisture content impact', 'Moderate — hygroscopic; store in dry conditions', 'High — absorbs moisture rapidly', 'Moderate', 'Low'],
    ['Wet granulation suitability', { t: 'Excellent — intra + extra addition', hl: 'good' }, 'Moderate — best extragranularly', 'Good', 'Good'],
    ['ODT suitability', { t: 'Excellent (fine particle grade preferred)', hl: 'good' }, 'Good', 'Excellent', 'Poor'],
    ['API compatibility — sodium sensitivity', 'Avoid strongly acidic APIs (sodium exchange)', 'Avoid strongly acidic APIs', { t: 'Best for acidic APIs (non-ionic)', hl: 'good' }, { t: 'Broadest compatibility', hl: 'good' }],
    ['Relative cost', 'Moderate premium', 'Similar to CCS', 'Higher', 'Lowest'],
  ],
  note: 'Selection guidance: CCS is the first-choice superdisintegrant for most WG, DC, and dry granulation tablets. SSG is preferred for formulations needing maximum swelling at higher use levels. PVPP is preferred for acidic APIs or formulations requiring maximum lubricant tolerance. Starch remains useful in lower-cost generics where tablet size permits higher disintegrant loading.',
};

// "Formulation guidelines" — 6 cards
export const FORMULATION = [
  {
    title: 'Direct Compression (DC)',
    body: 'Add CCS extragranularly at 0.5–3.0% w/w during the final blending step — after the API and fillers are blended but before lubricant addition. Blend 5–10 minutes. Add lubricant (magnesium stearate) last and limit lubricant blending time to 3–5 minutes to prevent hydrophobic film coating of CCS particles. Optimal compression hardness: 5–15 kP (avoid over-compression).',
  },
  {
    title: 'Wet Granulation (WG)',
    body: 'Split addition gives best results: add 50% CCS intragranularly (with API + filler before granulation) and 50% extragranularly (post-drying, post-milling). Intragranular CCS improves granule disintegration; extragranular CCS disintegrates the tablet matrix. Total CCS: 1–4% w/w. Drying temperature should not exceed 60°C to preserve CCS functionality.',
  },
  {
    title: 'Dry Granulation / Roller Compaction',
    body: 'Add CCS as either pre-compaction (intragranular) or post-compaction (extragranular) addition. Post-compaction (extragranular) addition is preferred for maximum disintegrant efficiency, as roller compaction can partially compress and reduce swelling capacity of CCS. Use 1–3% extragranularly in the final blend before tableting.',
  },
  {
    title: 'Capsule Fill',
    body: 'In powder-fill hard capsules, add CCS at 10–25% of total fill weight. CCS improves cohesion of the powder plug and ensures rapid dispersion after capsule shell dissolution. For pellet-fill capsules, CCS (5–15%) in the pellet formulation promotes pellet disintegration in GI fluid. Use with a wetting agent (sodium lauryl sulphate, 0.1–0.5%) for hydrophobic APIs.',
  },
  {
    title: 'ODT Formulation',
    body: 'Use fine particle CCS grade at 2–5% with water-soluble bulking agents (mannitol, isomalt, erythritol) and a binder (low levels of HPMC or PVP). Target tablet hardness: 3–8 kP (lower than conventional tablets). CCS combined with effervescent pair (citric acid + sodium bicarbonate) further reduces ODT disintegration times to under 15 seconds.',
  },
  {
    title: 'Storage & handling',
    body: 'CCS is hygroscopic. Store in original sealed packaging in a cool, dry area at ≤ 25°C and ≤ 65% RH. Avoid prolonged exposure to humid conditions — excessive moisture uptake can pre-swell CCS particles and reduce disintegrant efficiency during tableting. Once opened, use promptly or re-seal tightly. Shelf life: 3 years in original sealed packaging from manufacturing date.',
  },
];
