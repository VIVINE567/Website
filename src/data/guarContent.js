// Guar Gum (E412) content matching "guar_gum_vivine_international.html"
// Industry color tokens (same palette as the HTML reference)
export const IC = {
  food:   { bg: '#EAF5E0', tx: '#2C5F0E' },
  oilgas: { bg: '#FBF3E2', tx: '#7C4A0E' },
  pharma: { bg: '#EAF0FB', tx: '#1A3A6C' },
  all:    { bg: '#EAF5E0', tx: '#2C5F0E' },
};

export const HERO = {
  productTag: 'Galactomannan · Natural hydrocolloid · E412 · GRAS · ADI not specified',
  title: 'Guar Gum (E412)',
  cas: 'CAS 9000-30-0 · E412 (EU) · INS 412 · INCI: Cyamopsis Tetragonoloba Gum · HS Code: 1302.32.30',
  desc: "Guar Gum is a natural galactomannan polysaccharide extracted from the endosperm of guar beans (Cyamopsis tetragonoloba), a drought-resistant leguminous plant cultivated principally in India, Pakistan, and the United States. Composed of a linear mannose backbone (β-1,4-linked D-mannopyranose) with galactose side chains at a mannose-to-galactose ratio of approximately 2:1, Guar Gum dissolves readily in cold and hot water to form highly viscous, pseudoplastic solutions — even at concentrations as low as 0.5–1.0%. It is the highest-volume natural hydrocolloid consumed globally, with its three primary industrial markets being food and beverage manufacturing, oil and gas drilling and hydraulic fracturing, and pharmaceutical formulation.",
  statPills: [
    { val: 'E412 / GRAS', lbl: 'Global food approval' },
    { val: 'M:G ≈ 2:1', lbl: 'Mannose:Galactose' },
    { val: '6 grades', lbl: 'Available' },
    { val: '2,700–8,000+', lbl: 'mPa·s @ 1% solution' },
  ],
};

export const HIGHLIGHTS = [
  { icon: '🌿', val: 'Natural origin', lbl: 'Guar bean seed' },
  { icon: '❄️', val: 'Cold water soluble', lbl: 'Full hydration in cold water' },
  { icon: '⚡', val: 'High viscosity', lbl: 'Highest among natural gums' },
  { icon: '🛢️', val: 'Oilfield viscosifier', lbl: 'Drilling & fracturing' },
  { icon: '✅', val: 'E412 / GRAS', lbl: 'Food & pharma approved' },
  { icon: '🔗', val: 'Synergy partner', lbl: 'Xanthan · LBG · Carrageenan' },
  { icon: '🌍', val: 'India-origin', lbl: "World's largest producer" },
  { icon: '♻️', val: 'Biodegradable', lbl: 'Enzyme-breakable polymer' },
];

// "Key functional properties of Guar Gum"
export const INFO_CARDS = [
  {
    title: 'Galactomannan structure — M:G ratio 2:1',
    body: 'Guar Gum is a galactomannan polysaccharide consisting of a linear β-1,4-linked D-mannopyranose backbone with α-1,6-linked D-galactopyranose side chains at a mannose-to-galactose (M:G) ratio of approximately 2:1. This high galactose substitution — twice that of Locust Bean Gum — makes Guar Gum fully soluble in cold water, a key advantage over Locust Bean Gum (which requires heating). The dense galactose branching also prevents tight intermolecular alignment, producing highly viscous, non-gelling solutions with excellent pseudoplastic (shear-thinning) flow behaviour.',
  },
  {
    title: 'Cold water solubility — full hydration at ambient temperature',
    body: 'Guar Gum hydrates fully in cold water without heating, making it unique among high-viscosity natural gums. A 1% aqueous solution reaches maximum viscosity of 2,700–3,500 mPa·s within 2 hours at 25°C. Fast-hydrating guar gum grades (FHG) achieve full viscosity in under 10 minutes. This cold-hydration property is critical in oilfield fracturing fluid preparation, food cold-process manufacturing, and pharmaceutical cold-compounding operations.',
  },
  {
    title: 'Highest viscosity among natural gum thickeners',
    body: 'At equivalent concentration, Guar Gum provides 5–8 times the thickening efficiency of starch. A 1% aqueous dispersion produces viscosity of 2,700–3,500 mPa·s — significantly higher than Locust Bean Gum (2,500–3,500 mPa·s at 1%, requiring heat) and far exceeding carrageenan (5–100 mPa·s for Lambda type). This exceptional thickening efficiency allows effective formulation at low use concentrations (0.1–1.0%), reducing raw material cost and minimising impact on flavour and texture.',
  },
  {
    title: 'Pseudoplastic (shear-thinning) rheology',
    body: 'Guar Gum solutions are pseudoplastic — viscosity decreases under applied shear (pumping, mixing, chewing) and recovers when shear is removed. This property is exploited in food (easy pour from bottle, full mouthfeel in mouth), oilfield drilling (thin under pump pressure, thick at rest in wellbore to suspend cuttings), and pharmaceutical tablet coating (thin under spray shear, thick coat on tablet surface). Solutions are also thixotropic at concentrations above 1%, slowly recovering full viscosity after shearing.',
  },
  {
    title: 'Cross-linking for oilfield applications',
    body: 'In hydraulic fracturing, Guar Gum base gel is cross-linked with metal cation cross-linkers — borate ions (borax, at pH 8.5–11), zirconate chelates, or titanate chelates — to produce viscoelastic gels with dramatically higher viscosity and proppant-carrying capacity than the base polymer alone. Cross-linked guar gum gels are the dominant fracturing fluid technology globally. After fracturing, enzyme breakers (hemicellulase) or oxidative breakers (persulphate) are used to degrade the polymer and recover well permeability.',
  },
  {
    title: 'Synergy with Xanthan Gum and other hydrocolloids',
    body: "Guar Gum demonstrates a moderate synergistic viscosity enhancement with xanthan gum — blends produce higher combined viscosity than either polymer alone at the same total concentration, attributed to interactions between guar's mannose backbone and xanthan's pyruvate and acetate side chains. This synergy is exploited in salad dressings, sauces, and personal care products to reduce total gum usage and cost. Guar Gum also synergises with Locust Bean Gum in some applications.",
  },
];

// "Viscosity comparison by grade" — vertical bar chart with pointer-following tooltip.
// Solid bars (no faded track — matches the HTML Chart.js bars). Tooltip mirrors
// the HTML callback: ' ~' + value.toLocaleString() + ' mPa·s'.
export const VISC_CHART = {
  title: 'Viscosity range by grade (mPa·s at 1% solution)',
  sub: 'Higher viscosity grades deliver greater thickening efficiency at equivalent concentration',
  axisMax: 6000,
  ticks: [0, 1000, 2000, 3000, 4000, 5000, 6000],
  axisLabel: 'Viscosity (mPa·s at 1% solution, 25°C)',
  note: '* Viscosity values are indicative at 1% aqueous solution, 25°C. Actual viscosity varies with concentration, temperature, hydration time, agitation, pH, and electrolyte content. Oilfield grades are typically tested at 0.48% concentration (Fann-35 viscometer, 300 rpm) per industry convention.',
  bars: [
    { label: 'Food — low viscosity', value: 2000, note: ' ~2,000 mPa·s', color: '#7EC85A' },
    { label: 'Food — standard', value: 3100, note: ' ~3,100 mPa·s', color: '#3A7A14' },
    { label: 'Food — high viscosity', value: 5200, note: ' ~5,200 mPa·s', color: '#2C5F0E' },
    { label: 'Pharma grade', value: 3800, note: ' ~3,800 mPa·s', color: '#85B7EB' },
    { label: 'Oilfield grade', value: 4500, note: ' ~4,500 mPa·s', color: '#E8913A' },
    { label: 'FHG fracturing grade', value: 4200, note: ' ~4,200 mPa·s', color: '#C26A0A' },
  ],
};
