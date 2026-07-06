// Xanthan Gum regulatory badges, synergy interactions, thickener comparison, and application deep-dive

// "Regulatory approvals & certifications"
export const REGULATORY = [
  { icon: '🇪🇺', title: 'EU E415', sub: 'Regulation (EC) No 1333/2008' },
  { icon: '🇺🇸', title: 'FDA GRAS', sub: '21 CFR 172.695' },
  { icon: '🌍', title: 'JECFA INS 415', sub: 'ADI "not specified"' },
  { icon: '🛢️', title: 'API 13A / ISO 13500', sub: 'XC polymer — Section 4' },
  { icon: '📋', title: 'FCC compliant', sub: 'Food Chemicals Codex' },
  { icon: '🌾', title: 'Gluten-free / Vegan', sub: 'Non-GMO grades available' },
  { icon: '🕌', title: 'Halal / Kosher', sub: 'Certifiable on request' },
  { icon: '📄', title: 'TDS / SDS / COA', sub: 'Full documentation available' },
];

// "Key synergistic interactions"
export const SYNERGY = [
  {
    partners: [
      { text: 'Xanthan Gum', bg: '#E6F4E8', tx: '#0E4E18' },
      { text: 'Locust Bean Gum', bg: '#F5EED8', tx: '#6B4A10' },
    ],
    effect: 'Thermoreversible freeze-thaw stable elastic gel',
    desc: 'Xanthan + LBG (ratio 1:2 to 2:1) forms an elastic, freeze-thaw stable gel — unique among non-ionic/anionic combinations. The gel forms on cooling and melts on heating (thermoreversible). Key applications: ice cream stabiliser blends, frozen sauces, salad dressings, plant-based dairy. Neither polymer gels alone.',
  },
  {
    partners: [
      { text: 'Xanthan Gum', bg: '#E6F4E8', tx: '#0E4E18' },
      { text: 'Guar Gum', bg: '#FEF9EC', tx: '#7A5C00' },
    ],
    effect: 'Enhanced viscosity — cost-optimised blends',
    desc: 'Xanthan + guar blends in 1:1 to 1:3 ratios produce viscosity synergy (combined viscosity greater than either alone) and improve salt tolerance of the blend. Cost-optimised blending reduces formulation cost while maintaining performance in food, industrial, and oilfield applications. Guar\'s cold-water solubility complements xanthan\'s pseudoplastic structure.',
  },
  {
    partners: [
      { text: 'Xanthan Gum', bg: '#E6F4E8', tx: '#0E4E18' },
      { text: 'Konjac Glucomannan', bg: '#EAF0FB', tx: '#1A3A8C' },
    ],
    effect: 'Strong elastic gel — vegan gelatin replacement',
    desc: 'Xanthan + konjac glucomannan produces firm, elastic, heat-stable gels — a vegan gelatin substitute for jelly confectionery, structured desserts, and plant-based food systems. The xanthan-konjac gel is more heat-stable than carrageenan gels and melts at higher temperature, suitable for hot-fill dessert applications and structured plant-based products.',
  },
  {
    partners: [
      { text: 'Xanthan Gum', bg: '#E6F4E8', tx: '#0E4E18' },
      { text: 'Starch (modified)', bg: '#EDF0F8', tx: '#1A3880' },
    ],
    effect: 'Synergistic viscosity — improved freeze-thaw stability',
    desc: 'Xanthan gum combined with modified starches (waxy maize, tapioca, or potato starch) improves freeze-thaw stability of starch-based sauces, soups, and gravies — preventing the retrogradation and syneresis that starch alone exhibits after freeze-thaw cycling. The xanthan acts as a cryoprotectant for the starch network. Used in frozen ready meals and cook-chill sauces.',
  },
];

// "Xanthan Gum vs. comparable thickeners & stabilisers"
// Cell can be a string, or { t, hl: 'good' | 'no' } for coloured emphasis
export const COMPARE_TABLE = {
  cols: ['Property', 'Xanthan Gum', 'Guar Gum', 'CMC (Sodium)', 'HPMC', 'Carbomer'],
  rows: [
    ['Origin', 'Microbial fermentation (X. campestris)', 'Legume seed (India)', 'Semi-synthetic cellulose', 'Semi-synthetic cellulose', 'Synthetic polymer'],
    ['Ionic character', 'Anionic (pyruvate, glucuronate)', 'Non-ionic', 'Anionic', 'Non-ionic', 'Anionic (needs neutralisation)'],
    ['Cold-water solubility', { t: '✔ Cold-dispersible', hl: 'good' }, { t: '✔ Cold-soluble', hl: 'good' }, { t: '✔ Cold-soluble', hl: 'good' }, 'Hot water preferred', 'Requires neutralisation'],
    ['Pseudoplasticity', { t: 'Exceptional — strongest shear-thinning', hl: 'good' }, 'Moderate pseudoplastic', 'Moderate pseudoplastic', 'Pseudoplastic', { t: 'High pseudoplastic', hl: 'good' }],
    ['pH stability range', { t: 'pH 1–13 (widest range)', hl: 'good' }, 'pH 4–10 (limited acid)', 'pH 4–11', 'pH 3–11', 'pH 5–10 (salt-sensitive)'],
    ['Salt tolerance', { t: 'Exceptional — stable in saturation NaCl', hl: 'good' }, 'Moderate', 'Moderate', { t: 'Good', hl: 'good' }, { t: 'Poor — loses viscosity in salt', hl: 'no' }],
    ['Freeze-thaw stability', { t: 'Excellent (alone); elastic gel with LBG', hl: 'good' }, 'Moderate — syneresis possible', 'Moderate', { t: 'Excellent', hl: 'good' }, 'Moderate'],
    ['Temperature stability (food)', { t: 'Stable to 90°C; retort stable', hl: 'good' }, 'Moderate (up to 80°C)', 'Good (up to 80°C)', { t: 'Good (up to 90°C)', hl: 'good' }, 'Up to 80°C'],
    ['Oilfield suitability', { t: 'Excellent — API 13A standard XC polymer', hl: 'good' }, 'Moderate — guar frac fluid', 'Not standard', 'Not used', 'Not used'],
    ['Gluten-free bakery', { t: 'First-choice gluten replacer', hl: 'good' }, 'Secondary option', 'Possible', { t: 'Good alternative', hl: 'good' }, 'Not used'],
    ['Synergy potential', { t: 'Elastic gel with LBG, Konjac, Guar', hl: 'good' }, 'Viscosity synergy with xanthan', 'Some synergy with LBG', 'Limited', 'Limited'],
    ['Regulatory (food)', 'E415 / GRAS / JECFA INS 415', 'E412 / GRAS', 'E466 / GRAS', 'E464 / GRAS', 'Not food-approved'],
  ],
  note: 'Xanthan gum\'s unique combination of exceptional pseudoplasticity, pH 1–13 stability, salt tolerance, cold-water solubility, and multi-industry applicability (food, oilfield, pharma, cosmetics, industrial) makes it the most versatile single hydrocolloid available. No other commercial gum matches its functional breadth across nine distinct industry sectors.',
};

// "Application deep-dive by industry"
export const APP_DETAILS = [
  {
    title: 'Food & Beverage', icon: '🍽️',
    color: { bg: '#E6F4E8', tx: '#0E4E18' },
    items: [
      { name: 'Salad Dressings & Vinaigrettes', desc: 'Xanthan gum (0.1–0.3%) is the standard stabiliser in oil-and-vinegar salad dressings, ranch, Caesar, and French dressings. It prevents phase separation of the oil-water emulsion, suspends herb particles and spices, and provides the "cling" viscosity that coats salad leaves. Its stability in the acidic pH (3–4) of vinegar-based dressings is critical — most other thickeners degrade at this pH. Cold-processable — no heating required in manufacturing.' },
      { name: 'Sauces, Gravies & Condiments', desc: 'In cooking sauces, hot sauces, tomato ketchup, and gravy bases, xanthan gum (0.05–0.2%) builds viscosity, prevents separation on storage, and provides freeze-thaw stability for retail and foodservice products that undergo temperature fluctuation. It withstands retort processing (121°C) with minimal viscosity loss — important for ambient-stable canned and bottled sauces. Typical dose: lower than starch, enabling cleaner, more transparent sauce appearance.' },
      { name: 'Gluten-Free Bakery', desc: 'Xanthan gum (0.3–0.5% on flour weight for bread; 0.2–0.3% for cakes and muffins) is the most widely used gluten replacer in gluten-free bakery. It provides dough cohesion, CO₂ gas retention during fermentation, oven spring, and crumb structure. Without xanthan or an equivalent (HPMC, psyllium), gluten-free rice flour, tapioca, or corn flour doughs crumble after baking. Certified gluten-free grades contain < 20 ppm gluten.' },
      { name: 'Beverages — Cloud & Particle Suspension', desc: 'In fruit beverages, nectars, health drinks, and smoothies, xanthan gum (0.02–0.1%) stabilises cloud emulsions (orange, lemon, mango cloud), suspends pulp particles, prevents sedimentation of vitamins and mineral fortification, and prevents ring formation (staining at the bottle neck). Its pH stability (1–13) covers all carbonated, acidic, and neutral beverage types. Suitable for UHT and pasteurised beverage processing.' },
      { name: 'Soups, Bouillons & Wet Cooking Bases', desc: 'In wet and reconstituted soups and bouillons, xanthan provides body and suspension stability for vegetable, meat, and spice particles. Its temperature stability means viscosity is built in the cold formulation and maintained through pasteurisation and consumer heating. Unlike starch-based systems, xanthan does not break down on repeated heating/cooling cycles in cook-chill foodservice distribution environments.' },
      { name: 'Meat Seasonings, Marinades & Brines', desc: 'In injection brines and surface marinades for poultry and pork, xanthan (0.1–0.3%) prevents brine phase separation, suspends spice particles uniformly, and improves brine retention in the meat matrix after injection. Its salt tolerance (stable in 5–26% NaCl brine) is essential for high-salt meat processing brines. Also used in dry seasoning reconstitution systems for consistent slurry preparation.' },
    ],
  },
  {
    title: 'Dairy & Frozen Desserts', icon: '🍦',
    color: { bg: '#ECF8EC', tx: '#166028' },
    items: [
      { name: 'Ice Cream & Non-Dairy Frozen Desserts', desc: 'Xanthan gum (0.05–0.15%) combined with LBG (0.1–0.2%) forms the freeze-thaw stable synergistic gel that controls ice crystal recrystallisation in dairy and non-dairy ice cream. In non-dairy (vegan) ice cream (coconut milk, oat milk, pea protein base), xanthan is the primary stabiliser — replacing the casein-carrageenan interaction that works in dairy ice cream, providing body, overrun stability, and meltdown resistance without dairy protein.' },
      { name: 'Flavoured Milk & Dairy Beverages', desc: 'In flavoured milks (chocolate, strawberry, banana milk), xanthan (0.02–0.06%) suspends flavour particles and prevents fat ring formation during shelf life. Unlike carrageenan (which works via casein interaction), xanthan\'s suspension effect is purely rheological — it builds sufficient yield stress to suspend cocoa particles without relying on protein interaction. This makes xanthan the preferred choice in low-protein or protein-hydrolysate dairy beverages.' },
      { name: 'Yogurt & Fermented Dairy Products', desc: 'Xanthan gum (0.05–0.15%) reduces syneresis (whey separation) in stirred yogurt and improves the creamy body and mouthfeel of low-fat and reduced-sugar yogurt formulations. Its compatibility with the acidic pH (3.8–4.5) of fermented dairy — unlike starch or gelatin which degrade or require high concentrations — and its freeze-thaw stability make it suitable for frozen and chilled yogurt distribution chains.' },
      { name: 'Plant-Based Dairy Alternatives', desc: 'In oat milk, almond milk, soy milk, and coconut milk, xanthan (0.02–0.08%) stabilises the emulsion against phase separation, adds creamy mouthfeel, and suspends any insoluble particles. Its non-ionic character at practical pH ranges means it doesn\'t interact unfavourably with plant proteins. Used in barista-grade plant milks to improve steam foam stability. Xanthan + LBG blends provide improved body compared to xanthan alone.' },
    ],
  },
  {
    title: 'Pharmaceuticals', icon: '💊',
    color: { bg: '#EAF0FB', tx: '#1A3A8C' },
    items: [
      { name: 'Oral Suspensions & Syrups', desc: 'Xanthan gum (0.1–0.5%) provides pseudoplastic viscosity and suspension stability in oral pharmaceutical suspensions — antibiotic suspensions (amoxicillin, azithromycin), antacid formulations, paediatric syrups, and mineral supplement liquids. Its shear-thinning allows easy pouring/dosing and its yield stress suspends drug particles uniformly at rest. Compatible with common preservatives, sweeteners, and flavours used in oral liquid formulations. Stable at pH 3–9.' },
      { name: 'Hydrophilic Matrix Tablets (Controlled Release)', desc: 'Xanthan gum (15–40% w/w in tablet) forms a hydrophilic swelling matrix that controls drug release over 12–24 hours. On contact with GI fluid, xanthan hydrates and swells — forming a viscous gel layer that controls diffusion of soluble APIs. Used as a natural, anionic alternative or complement to HPMC for sustained-release oral tablets in BCS Class I, II, and III drug products. Compatible with a wide range of APIs across pH 1.2–7.4.' },
      { name: 'Ophthalmic & Nasal Preparations', desc: 'High-purity xanthan gum is used in ophthalmic formulations (eye drops, artificial tears) as a viscosity-increasing agent that extends corneal contact time — improving drug bioavailability from ophthalmic preparations. Its pseudoplastic flow (thin on blinking, thick at rest) is ideal for comfortable eye drop installation with sustained effect. Also used in nasal gels and sprays for controlled drug deposition in the nasal cavity.' },
      { name: 'Dermal Gels & Topical Formulations', desc: 'In pharmaceutical gels, wound care preparations, and topical drug delivery systems, xanthan gum (0.5–2.0%) provides clear, elegant, non-greasy gel bases compatible with a wide range of APIs including antiseptics, NSAIDs (diclofenac), and antifungals. It forms smooth, uniform gels without heat in cold-process manufacturing — reducing API degradation risk. Stable across the pH range of most topical formulations (pH 4–8).' },
    ],
  },
  {
    title: 'Cosmetics & Personal Care', icon: '💄',
    color: { bg: '#F8E8F2', tx: '#781A60' },
    items: [
      { name: 'Toothpaste & Oral Care', desc: 'Xanthan gum is a primary binder and thickener in premium toothpaste formulations at 0.5–1.5%, providing the characteristic extrudable, strand-retaining rheology on the toothbrush. It is compatible with fluoride salts, silica abrasives, calcium carbonate, sorbitol, glycerol, and SDS — the full toothpaste ingredient palette. Its freeze-thaw stability is important for toothpaste sold in cold climates. Mouthwashes also use xanthan at 0.1–0.3% for film-forming and substantivity.' },
      { name: 'Moisturising Creams & Lotions', desc: 'Xanthan gum (0.1–0.5%) is one of the most widely used rheology modifiers in O/W moisturising creams and body lotions — providing emulsion stability, skin feel enhancement, and flow control. Its pseudoplastic behaviour gives creams a "lotion-feel" — easy spreadability under application shear that leaves a smooth, non-greasy film. Compatible with nonionic, anionic, and cationic emulsifier systems. INCI name: Xanthan Gum.' },
      { name: 'Shampoos, Conditioners & Hair Care', desc: 'In shampoos, xanthan gum (0.2–0.6%) builds viscosity in surfactant systems (SLES, betaine, sulfosuccinate) providing the "pearlescent thick" flow consumers associate with premium shampoos. In conditioners and treatments, xanthan provides the rheology base for even distribution on hair and scalp. Its compatibility with high-electrolyte surfactant systems (where carbomers fail at high salt) makes it the preferred option in salt-based thickening systems.' },
      { name: 'Face Serums, Gels & Masks', desc: 'At 0.1–0.5%, xanthan builds clear-to-slightly-hazy lightweight gels for facial serums, hyaluronic acid serums, vitamin C serums, and sheet mask essences. Its compatibility with hyaluronic acid, niacinamide, peptides, and most active ingredients makes it the universal rheology modifier in the fast-growing serum category. Cold-processable — important for heat-sensitive actives like vitamin C and retinol derivatives.' },
      { name: 'Sunscreens & SPF Emulsions', desc: 'Xanthan gum stabilises mineral (ZnO, TiO₂) and chemical UV-filter emulsions against particle settling and phase separation. Its pseudoplastic rheology provides the even skin-feel spreadability that SPF products require for uniform UV filter distribution on skin. Compatible with silicone-containing sunscreen formulations and high-SPF water-resistant formulations requiring freeze-thaw stability for cold-climate markets.' },
    ],
  },
  {
    title: 'Oil & Gas Drilling', icon: '🛢️',
    color: { bg: '#FBF3E2', tx: '#7C4A0E' },
    items: [
      { name: 'Water-Based Drilling Muds (WBM) — XC Polymer', desc: 'Xanthan gum (XC polymer, 1–4 lb/bbl) is the primary viscosifier in biopolymer water-based drilling muds. It provides high low-shear-rate viscosity (LSRV, measured at 3 and 6 rpm on a Fann viscometer) for drill cuttings suspension during pipe connections and circulation stops — preventing cuttings avalanches — while shear-thinning at high pump rates to allow efficient circulation. API 13A / ISO 13500 Section 4 compliant at 0.25% in 1% KCl (viscosity ≥ 600 mPa·s).' },
      { name: 'Low-Solids Non-Dispersed (LSND) Polymer Muds', desc: 'Xanthan gum is the viscosifier in LSND polymer mud systems used with PAC (fluid loss control) and PHPA (shale inhibitor). These systems minimise formation damage in sensitive formations, improve ROP (rate of penetration), and reduce differential pipe sticking in horizontal and directional drilling. Xanthan\'s salt tolerance enables use in seawater-based and inhibited saline LSND systems — critical in offshore and high-chloride aquifer drilling.' },
      { name: 'Completion & Workover Fluids', desc: 'In completion and workover operations, xanthan-based clear brines (CaCl₂, CaBr₂, ZnBr₂) provide the cuttings and solids suspension needed for safe wellbore cleanout while minimising formation damage. Xanthan\'s stability in high-density brines (up to 19.2 lb/gal ZnBr₂) and high temperatures makes it suitable for deep well completion applications. Low acid-insoluble content grades are specified to avoid perforation plugging.' },
      { name: 'Hydraulic Fracturing (Frac) Fluids', desc: 'In slickwater and hybrid fracturing fluids, xanthan gum at low concentrations (0.5–2 lb/bbl) provides friction reduction and proppant transport capacity — carrying sand or ceramic proppant deep into the fracture before the fluid "breaks" (enzymatically or oxidatively degraded). Xanthan frac fluids are preferred in formations sensitive to guar gum residue, as xanthan leaves lower formation damage residues on clean enzymatic break.' },
    ],
  },
  {
    title: 'Industrial & Cleaning Products', icon: '⚙️',
    color: { bg: '#F2F0E8', tx: '#4A4220' },
    items: [
      { name: 'Liquid Laundry & Dishwashing Detergents', desc: 'Xanthan gum (0.1–0.3%) thickens liquid laundry detergents and dishwashing liquids in both anionic surfactant (LAS, SLES) and non-ionic surfactant systems. Its high electrolyte tolerance is critical — detergent formulations contain high levels of sodium sulphate, sodium chloride, and builder salts that would precipitate or destabilise non-tolerant thickeners. Xanthan also suspends enzyme capsules, optical brighteners, and fragrance microcapsules uniformly in liquid detergents.' },
      { name: 'Industrial & Institutional Cleaners', desc: 'In alkaline industrial cleaners, degreasers, and floor cleaning concentrates (pH 9–13), xanthan gum (0.15–0.4%) provides cling viscosity — ensuring the product stays in contact with the soiled surface long enough for the active ingredients (surfactants, caustic soda, enzymes) to work. Its stability at pH 9–13 is critical; most other natural thickeners degrade rapidly under these alkaline conditions.' },
      { name: 'Car Wash & Vehicle Care Products', desc: 'In foam car wash shampoos, tyre dressings, and wheel cleaners, xanthan gum builds viscosity, improves foam stability, and ensures uniform application on vertical surfaces. Its compatibility with quaternary ammonium disinfectants, citric acid, and high-salt systems in vehicle cleaning formulations makes it suitable across the full car care product range at 0.1–0.3%.' },
      { name: 'Agricultural Chemical Formulations', desc: 'Xanthan gum (0.1–0.3%) stabilises suspension concentrate (SC) pesticide, herbicide, and fungicide formulations — suspending insoluble active ingredients (AI) in water, preventing settling during storage, and improving spray coverage and leaf adhesion. Its compatibility with hard water (high Ca²⁺, Mg²⁺) — where guar gum would precipitate — is critical for agricultural formulations mixed on-farm with local water supplies of variable quality.' },
    ],
  },
  {
    title: 'Paints & Coatings', icon: '🎨',
    color: { bg: '#F0EAF8', tx: '#401880' },
    items: [
      { name: 'Water-Based Architectural Paints', desc: 'Xanthan gum (0.1–0.4%) provides sag resistance, pigment suspension, and appropriate brush drag in water-based emulsion paints (vinyl-acrylic, styrene-acrylic). Its pseudoplastic profile — high viscosity at rest (no sagging on vertical surfaces) and shear-thinning during brush/roller application (low drag) — gives premium paint its characteristic "thixotropic" handling quality. Used alongside associative thickeners (HEUR) for improved levelling and open time.' },
      { name: 'Wood Stains, Varnishes & Primers', desc: 'In water-based wood coatings (stains, primers, clear varnishes), xanthan provides suspension of pigments and dyes during storage and correct viscosity for brush/spray application. Its compatibility with the biocide (isothiazolinone) and pH (7.5–9) systems used in wood coatings, and its stability against the freeze-thaw cycles that damage water-based paint formulations in cold climates, make it a durable coating additive.' },
      { name: 'Tile Adhesives & Construction Coatings', desc: 'In water-based tile adhesives and construction surface coatings, xanthan gum contributes sag resistance (tiles do not slip during setting) and workability. Used at 0.05–0.2% alongside cellulose Ethers (HPMC) in premium tile adhesive formulations to extend open time while maintaining anti-sag properties on vertical tile installations.' },
    ],
  },
  {
    title: 'Textile Printing', icon: '🧵',
    color: { bg: '#E8F4F8', tx: '#1A4A78' },
    items: [
      { name: 'Reactive Dye Print Pastes', desc: 'Xanthan gum (0.5–1.5% in print paste) thickens reactive dye printing pastes for flat screen, rotary screen, and digital-assist printing on cotton and cellulosic fabrics. Its pseudoplastic profile provides sharp print edges (high viscosity at rest, low viscosity under squeegee shear), prevents dye migration, and delivers good colour yield. Easy wash-off after steaming and rinsing — residue-free on fabric. Stable in the alkaline print paste conditions (pH 8–11) of reactive printing.' },
      { name: 'Pigment Printing Pastes', desc: 'In pigment printing systems (acrylate binder-based), xanthan gum thickens the print paste to prevent pigment bleeding and ensure sharp print registration. Its compatibility with the anionic and non-ionic components of pigment printing systems — acrylic binders, fixatives, and softeners — and its stability in slightly acidic to neutral pH conditions (pH 5–7) typical of pigment printing, make it a technically sound choice for pigment textile printing.' },
      { name: 'Discharge Printing & Resist Printing', desc: 'Xanthan gum provides viscosity in discharge (sodium formaldehyde sulphoxylate-based) and resist printing pastes — where the chemical reducing environment (discharge) or acid/alkali resist conditions would degrade many other natural thickeners. Xanthan\'s stability across pH 1–13 and resistance to oxidative/reductive degradation at moderate concentrations makes it technically suitable for these speciality textile printing methods.' },
    ],
  },
  {
    title: 'Animal Nitrition & Animal Nutrition', icon: '🐾',
    color: { bg: '#EDF0F8', tx: '#1A3880' },
    items: [
      { name: 'Wet Animal Nitrition — Gravies & Sauces', desc: 'Xanthan gum (0.1–0.3%) thickens gravy and sauce in chunk-in-gravy and chunk-in-sauce wet Animal Nitrition formats — providing the sauce cling on meat chunks that creates visual appeal and moisture perception in the bowl. Unlike carrageenan (which gels), xanthan provides a stable, pourable-but-clinging sauce viscosity that survives retort processing at 121°C and maintains consistency on cooling. Used with starch for enhanced viscosity in premium Animal Nitrition sauces.' },
      { name: 'Wet Animal Nitrition — Suspension Stability', desc: 'In canned and pouch wet Animal Nitrition, xanthan (0.05–0.2%) prevents vegetable, grain, and supplement particle sedimentation during processing and shelf life. Its yield stress network ensures particles remain uniformly distributed in the can contents — critical for products marketed as "with vegetables" or containing visible fruit/vegetable inclusions. Also suspends added vitamins and mineral premixes uniformly in liquid-based Animal Nitrition systems.' },
      { name: 'Animal Nitrition Broths & Toppers', desc: 'In refrigerated and ambient Animal Nitrition broths, bone broths, and food toppers, xanthan gum provides body and mouthfeel at very low concentrations (0.02–0.08%) — making thin broths appear more substantial without adding starch or fat. It prevents separation of natural collagen and fat during storage and provides a consistent, pour-from-the-container viscosity for consumer convenience. Compatible with the high salt and mineral content of broth-based Animal Nitrition formats.' },
      { name: 'Semi-Moist Pet Treats & Functional Chews', desc: 'In semi-moist pet treats, dental chews, and functional nutrition snacks, xanthan (0.2–0.5%) acts as a water-binding texture modifier — maintaining soft, chewable texture throughout shelf life by retarding moisture loss and migration. It also helps bind dry and wet ingredients in extruded and deposited treat formulations. Stable in the high-glycerol, high-humectant environments typical of semi-moist pet treat systems.' },
    ],
  },
];

