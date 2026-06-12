// Xanthan Gum content matching "xanthan_gum_vivine_international.html"
// Industry color tokens (same palette as the HTML reference)
export const IC = {
  food:       { bg: '#E6F4E8', tx: '#0E4E18' },
  dairy:      { bg: '#ECF8EC', tx: '#166028' },
  pharma:     { bg: '#EAF0FB', tx: '#1A3A8C' },
  cosmetic:   { bg: '#F8E8F2', tx: '#781A60' },
  oilfield:   { bg: '#FBF3E2', tx: '#7C4A0E' },
  industrial: { bg: '#F2F0E8', tx: '#4A4220' },
  paints:     { bg: '#F0EAF8', tx: '#401880' },
  textile:    { bg: '#E8F4F8', tx: '#1A4A78' },
  petfood:    { bg: '#EDF0F8', tx: '#1A3880' },
  all:        { bg: '#E6F2E8', tx: '#1A5C28' },
};

export const HERO = {
  productTag: 'Microbial polysaccharide · Xanthomonas campestris · E415 · GRAS · API 13A',
  title: 'Xanthan Gum',
  cas: 'CAS 11138-66-2 · E415 · INS 415 · Xanthan · Corn Sugar Gum',
  desc: "Xanthan Gum is a high-molecular-weight anionic polysaccharide produced by aerobic fermentation of glucose or sucrose using the bacterium Xanthomonas campestris. Its defining commercial property is exceptional pseudoplasticity (shear-thinning) — viscosity drops dramatically under shear (pumping, pouring, stirring) and recovers instantly when shear is removed, making it indispensable across nine distinct industries. Xanthan Gum is cold-water soluble, stable across an exceptionally wide pH range (1–13) and temperature range (up to 90°C in food systems, 120°C+ in oilfield), salt-tolerant, and produces consistent viscosity at very low concentrations (0.05–0.3% in most food systems). It is the world's most versatile industrial hydrocolloid.",
  statPills: [
    { val: 'E415 / GRAS', lbl: 'Global approval' },
    { val: '9 industries', lbl: 'Served globally' },
    { val: 'pH 1–13', lbl: 'Stability range' },
    { val: 'Cold soluble', lbl: 'Disperses in cold water' },
  ],
};

export const HIGHLIGHTS = [
  { icon: '🧫', val: 'Microbial origin', lbl: 'X. campestris fermentation' },
  { icon: '⚗️', val: 'Pseudoplastic', lbl: 'Shear-thinning / instant recovery' },
  { icon: '🌡️', val: 'pH 1–13 stable', lbl: 'Widest pH range' },
  { icon: '💧', val: 'Cold-water soluble', lbl: 'No heating required' },
  { icon: '🧂', val: 'Salt-tolerant', lbl: 'Brine stable' },
  { icon: '✅', val: 'E415 / GRAS', lbl: 'Food & pharma approved' },
  { icon: '🛢️', val: 'API 13A / ISO', lbl: 'Oilfield drilling standard' },
  { icon: '🌾', val: 'Gluten-free', lbl: 'Celiac & clean label' },
  { icon: '🔗', val: 'Synergy partner', lbl: 'LBG · Guar · Konjac' },
];

// "What makes Xanthan Gum unique — rheological properties"
export const RHEOLOGY = [
  {
    icon: '⚗️',
    title: 'Pseudoplasticity (Shear-Thinning)',
    desc: 'Xanthan gum solutions are highly pseudoplastic — viscosity decreases exponentially under applied shear and recovers instantly when shear is removed. At 1% concentration and low shear (0.1 s⁻¹), xanthan viscosity is 1,000–10,000 mPa·s; at high shear (100 s⁻¹), it drops to 10–50 mPa·s. This enables easy pumping and pouring while ensuring thick, stable body at rest.',
  },
  {
    icon: '🔄',
    title: 'Instant Viscosity Recovery',
    desc: 'Unlike many thickeners that take minutes to recover viscosity after shear, xanthan gum recovers its full viscosity structure within seconds of shear removal. This "instant recovery" is essential in salad dressings (cling on salad), drilling muds (cutting suspension recovery), paint (sag resistance after brushing), and toothpaste (strand retention on brush).',
  },
  {
    icon: '🌡️',
    title: 'Temperature-Independent Viscosity',
    desc: 'Xanthan gum solutions maintain relatively constant viscosity across a wide temperature range (0–90°C in food systems; up to 120–150°C in oilfield/industrial applications with appropriate stabilisation). Unlike starch or most other thickeners, xanthan does not thin out significantly at elevated temperatures — critical for hot-fill food products, hot-process cosmetics, and high-temperature drilling fluids.',
  },
  {
    icon: '🧂',
    title: 'Exceptional Salt & pH Stability',
    desc: 'Xanthan gum maintains viscosity across pH 1–13 and in highly saline environments (up to saturation NaCl, KCl, CaCl₂ brines). This salt tolerance is unique among food-grade thickeners and explains xanthan\'s dominance in oilfield drilling fluids, low-pH salad dressings, salt-containing food formulations, and seawater-based industrial systems.',
  },
  {
    icon: '🔬',
    title: 'Suspension & Stabilisation',
    desc: 'Xanthan gum creates a weak gel network at rest (yield stress) that suspends particles, droplets, and air bubbles without compacting or settling. Even at 0.05–0.1%, xanthan prevents sedimentation in spice suspensions, cocoa particles, protein flocs, pigments, and drill cuttings far more effectively than viscosity-matched solutions of non-structured thickeners like guar gum or CMC.',
  },
  {
    icon: '💧',
    title: 'Cold-Water Solubility',
    desc: 'Xanthan gum disperses and hydrates fully in cold water (and most aqueous media) without heating — simplifying processing for cold-mixed salad dressings, beverages, cosmetics, and paints. Hydration is typically complete within 15–30 minutes in cold water with agitation, and can be accelerated by pre-dispersing in oil or glycerol before adding to water to prevent lumping.',
  },
];

// "Key functional properties"
export const INFO_CARDS = [
  {
    title: 'Fermentation origin — consistent quality batch to batch',
    body: 'Xanthan gum is produced by controlled aerobic fermentation of carbohydrate substrates (glucose, sucrose, or starch hydrolysate) using Xanthomonas campestris NRRL B-1459. Unlike natural gums (which vary seasonally in viscosity, colour, and purity), xanthan gum\'s microbial production process enables precise specification control — consistent molecular weight (1–50 million Da), viscosity (1,200–1,800 mPa·s at 1%), and purity batch after batch.',
  },
  {
    title: 'Widest functional pH range of any commercial hydrocolloid',
    body: 'Xanthan gum retains viscosity and suspension properties across pH 1–13 — acidic soft drinks (pH 2.5–3.5), vinegar-based dressings (pH 3–4), neutral dairy products (pH 6.5–7), alkaline cleaning products (pH 10–13), and saturated brine drilling fluids. No other food-grade thickener matches this pH stability — making xanthan the first-choice thickener for any acidic or alkaline formulation.',
  },
  {
    title: 'Synergy with Locust Bean Gum — elastic gel formation',
    body: 'Xanthan gum + Locust Bean Gum (LBG) produces thermoreversible, freeze-thaw stable elastic gels at room temperature — a synergistic interaction where xanthan\'s cellulose-like backbone binds with LBG\'s bare mannose regions. The resulting gels are used in ice cream (with carrageenan), salad dressings, plant-based dairy, and frozen food systems. Xanthan alone does not gel; the LBG synergy gel is a unique functional property.',
  },
  {
    title: 'Gluten-free baking — structural replacement for gluten',
    body: 'In gluten-free bakery (bread, muffins, pasta, pizza bases), xanthan gum (0.2–0.5% on flour weight) replicates several key functions of gluten — providing dough cohesion, gas retention (CO₂ from yeast/baking powder), viscoelasticity, and crumb structure. It is the most widely used ingredient in gluten-free formulations certified by celiac and gluten-intolerance standards globally. Without xanthan, most gluten-free doughs crumble and collapse after baking.',
  },
  {
    title: 'Oilfield — unmatched rheology in drilling fluids',
    body: 'In water-based drilling muds, xanthan gum (XC polymer) provides two critical functions simultaneously: (1) high low-shear-rate viscosity (LSRV) for drill cuttings suspension during pumping stops and bit changes; and (2) shear-thinning for easy circulation at high pump rates. Xanthan-based systems (biopolymer muds) are used in horizontal, directional, and sensitive-formation drilling where bentonite-based systems would cause formation damage. API 13A compliant.',
  },
  {
    title: 'Freeze-thaw stability (with LBG) — unique among thickeners',
    body: 'Xanthan gum alone is stable through freeze-thaw cycles — solutions thawed after freezing recover their original viscosity with no syneresis or structure breakdown. This freeze-thaw stability makes xanthan the preferred thickener for frozen sauces, dressings, soups, and plant-based products that undergo temperature cycling in the cold chain. When combined with LBG (xanthan:LBG typically 1:2 to 2:1), freeze-thaw stable gels are formed.',
  },
];

// "Viscosity comparison by grade" — vertical bar chart with pointer-following tooltip.
// Each bar height is frac(value) of axisMax; a faded full-scale track sits behind for context.
export const VISC_CHART = {
  title: 'Max viscosity by xanthan gum grade (mPa·s)',
  sub: '1% solution, 25°C, Brookfield LVT — standard test conditions',
  axisMax: 2000,
  ticks: [0, 500, 1000, 1500, 2000],
  axisLabel: 'Typical max viscosity (mPa·s)',
  bars: [
    { label: 'Food grade', value: 1600, note: 'Up to 1,600 mPa·s (1%, 25°C, 60 rpm)', color: '#2A9044' },
    { label: 'Food grade HV', value: 1800, note: 'Up to 1,800 mPa·s (1%, 25°C, 60 rpm)', color: '#44B860' },
    { label: 'Oilfield (0.25% in KCl)', value: 1200, note: '1,200 mPa·s (0.25% in 1% KCl, API 13A method)', color: '#C87820' },
    { label: 'Pharma grade', value: 1600, note: 'Up to 1,600 mPa·s (1%, 25°C, 60 rpm)', color: '#2050A8' },
    { label: 'Cosmetic grade', value: 1600, note: 'Up to 1,600 mPa·s (1%, 25°C, 60 rpm)', color: '#C04080' },
    { label: 'Industrial grade', value: 1600, note: 'Up to 1,600 mPa·s (1%, 25°C, 60 rpm)', color: '#706040' },
  ],
};
