// Konjac Gum content matching "konjac_gum_VIVINE_international.html"
// Industry color tokens (same palette as the HTML reference)
export const IC = {
  food:     { bg: '#EBF5E0', tx: '#3A5C20' },
  pharma:   { bg: '#EAF0FB', tx: '#1A3A8C' },
  cosmetic: { bg: '#FAE8F4', tx: '#7A1A6A' },
  all:      { bg: '#EBF5E0', tx: '#3A5C20' },
};

export const HERO = {
  productTag: 'Glucomannan · Natural hydrocolloid · E425i · E425ii · Vegan gelatin substitute · GRAS',
  title: 'Konjac Gum & Konjac Glucomannan (E425)',
  cas: 'CAS 37220-17-0 · E425i (Konjac Gum) · E425ii (Konjac Glucomannan) · Konnyaku · KGM · INS 425',
  desc: 'Konjac Gum and Konjac Glucomannan (KGM) are high-molecular-weight, water-soluble polysaccharides extracted from the corms (underground bulb-like stems) of Amorphophallus konjac K. Koch, a plant cultivated for over 2,000 years in China, Japan, and Southeast Asia. Composed of D-mannose and D-glucose units at a molar ratio of approximately 1.6:1.0, connected by β-1,4-glycosidic bonds with acetyl group substitutions, Konjac Gum delivers the highest viscosity of any commercially available natural food gum, powerful synergistic gelling with kappa-carrageenan and xanthan gum, a unique alkali-induced irreversible gel, and exceptional prebiotic dietary fibre properties — making it the dominant hydrocolloid in Asian food applications and a growing ingredient in global food, pharmaceutical, and cosmetic markets.',
  statPills: [
    { val: 'E425i / E425ii', lbl: 'EU food approved' },
    { val: 'M:G ≈ 1.6:1', lbl: 'Mannose:Glucose ratio' },
    { val: '5 grades', lbl: 'Available' },
    { val: '15,000–40,000+', lbl: 'mPa·s (1% KGM)' },
  ],
};

export const HIGHLIGHTS = [
  { icon: '🌿', val: 'Natural origin', lbl: 'Konjac corm extract' },
  { icon: '⚡', val: 'Ultra-high viscosity', lbl: 'Highest natural gum' },
  { icon: '🔗', val: 'Synergy partner', lbl: 'κ-Carrageenan · Xanthan · LBG' },
  { icon: '🥗', val: 'Zero calorie', lbl: 'Non-digestible fibre' },
  { icon: '🌱', val: 'Vegan gelatin alt.', lbl: 'Plant-based gel former' },
  { icon: '❤️', val: 'Dietary fibre', lbl: 'EU health claim approved' },
  { icon: '✅', val: 'E425 / GRAS', lbl: 'Global food approval' },
  { icon: '🧪', val: 'Alkali-set gel', lbl: 'Irreversible heat-stable gel' },
];

// "Key functional properties of Konjac Gum"
export const INFO_CARDS = [
  {
    title: 'Glucomannan structure — mannose:glucose 1.6:1',
    body: 'Konjac glucomannan consists of D-mannose and D-glucose units at a molar ratio of approximately 1.6:1, connected by β-1,4-glycosidic bonds. Approximately one in every 19 sugar units carries an O-acetyl substituent on carbon 3 of the mannopyranose units — these acetyl groups are critical: they maintain the polymer in a highly hydrated, extended conformation in solution. Removal of these acetyl groups with alkali triggers irreversible gelation. The very high molecular weight (500,000–2,000,000 Da for KGM) combined with this extended chain conformation produces the highest viscosity of any commercially available food gum.',
  },
  {
    title: 'Ultra-high viscosity — highest of all natural food gums',
    body: 'Konjac Glucomannan (E425ii) produces viscosities of 15,000–40,000 mPa·s at 1% concentration (25°C) — far exceeding all other food gums including Guar Gum (2,700–3,500 mPa·s) and Locust Bean Gum. This exceptional thickening efficiency allows very low use levels (0.1–0.5%) to achieve significant viscosity in food systems. Konjac Gum (E425i) produces somewhat lower viscosity (4,000–20,000 mPa·s) due to lower glucomannan purity but remains one of the most powerful thickeners in the hydrocolloid industry.',
  },
  {
    title: 'Alkali-induced irreversible gel — unique commercial property',
    body: 'When a Konjac Glucomannan solution is heated in the presence of an alkali (typically calcium hydroxide / lime water, or sodium carbonate / potassium carbonate at pH ≥ 11), the acetyl groups are removed (de-acetylation), triggering the formation of an irreversible, thermostable gel that does not melt on heating. This is the basis of traditional Asian konjac foods — konnyaku cake, shirataki noodles, konjac tofu — and is the unique gelling mechanism that allows konjac-based foods to withstand cooking, retort sterilisation, and long-term ambient storage without melting.',
  },
  {
    title: 'Synergy with κ-Carrageenan — firm, elastic gel at low concentration',
    body: 'Konjac Glucomannan exhibits powerful synergistic gelation with kappa-carrageenan. When mixed at an optimal ratio (typically 60:40 to 40:60 KGM:kappa-carrageenan), both polymers form a firm, elastic, thermoreversible gel at concentrations where neither would gel alone. The resulting gel is stronger, more elastic, and more freeze-thaw stable than either polymer alone. This synergy is exploited in vegan jelly products, restructured plant-based foods, and dairy-free desserts as a complete replacement for gelatin — producing gel textures identical to gelatin-set products.',
  },
  {
    title: 'Synergy with xanthan gum — elastic, freeze-thaw stable gel',
    body: 'Like Locust Bean Gum, Konjac Glucomannan forms an elastic, freeze-thaw stable synergistic gel with xanthan gum. The konjac-xanthan gel is soft and cohesive, survives multiple freeze-thaw cycles without syneresis, and sets at ambient temperature without heating — properties that are particularly valuable in frozen food applications, ready-to-eat chilled foods, and plant-based sauces and dressings where thermal processing is minimised.',
  },
  {
    title: 'Prebiotic dietary fibre — EU health claim approved',
    body: 'Konjac Glucomannan is a non-digestible, water-soluble dietary fibre that passes intact through the upper gastrointestinal tract and is fermented by beneficial gut bacteria (Bifidobacterium, Lactobacillus) in the colon. The EU has approved a health claim under Regulation (EU) No 432/2012 that glucomannan contributes to maintaining normal blood cholesterol levels (3 g/day) and to weight management as part of an energy-restricted diet (1 g per meal, three times daily). This makes it one of only a handful of food ingredients in Europe carrying an approved weight management health claim.',
  },
];

// "Synergistic combinations with other hydrocolloids" — partner badge cards.
// `partners`: array of { label, color? } (color omitted → rendered as muted plain text)
export const SYNERGY = {
  title: 'Synergistic combinations with other hydrocolloids',
  cards: [
    {
      partners: [
        { label: 'Konjac Glucomannan', color: { bg: '#EBF5E0', tx: '#3A5C20' } },
        { label: 'κ-Carrageenan', color: { bg: '#EAF0FB', tx: '#1A3A8C' } },
      ],
      effect: 'Firm, elastic, thermoreversible gel · Vegan gelatin replacement',
      desc: 'The most commercially important konjac synergy. KGM and kappa-carrageenan form a firm, elastic, thermoreversible gel at concentrations where neither gels alone. Optimal KGM:κ-carrageenan ratio is 40:60 to 60:40. Used at 0.2–1.5% total gum to produce vegan jelly cups, fruit preparations, plant-based desserts, and restructured foods as a complete gelatin substitute. Gel texture, meltpoint, and firmness can be tuned by adjusting the KGM:carrageenan ratio and total gum concentration.',
    },
    {
      partners: [
        { label: 'Konjac Glucomannan', color: { bg: '#EBF5E0', tx: '#3A5C20' } },
        { label: 'Xanthan Gum', color: { bg: '#FBF4E4', tx: '#6B4A10' } },
      ],
      effect: 'Soft, elastic, freeze-thaw stable gel · Cold-set',
      desc: 'KGM and xanthan gum form a soft, cohesive, freeze-thaw stable synergistic gel at ambient temperature — no heating required. The gel is pseudoplastic and self-healing, with excellent syneresis control. Widely used in frozen foods, plant-based sauces, chilled dairy alternatives, and cosmetic gels where a smooth, elastic, stable structure is needed without a thermal gelation step.',
    },
    {
      partners: [
        { label: 'Konjac Glucomannan', color: { bg: '#EBF5E0', tx: '#3A5C20' } },
        { label: 'Locust Bean Gum', color: { bg: '#FEF9EC', tx: '#7A5C00' } },
      ],
      effect: 'Soft, flexible thermoreversible gel · Enhanced viscosity',
      desc: 'KGM and LBG produce soft, flexible, thermoreversible gels. Unlike LBG alone (which is non-gelling), the combination forms a weak, cohesive gel at ambient temperature with improved freeze-thaw stability. Also used to enhance the viscosity of LBG solutions in dairy and frozen dessert applications beyond what LBG alone provides.',
    },
    {
      partners: [
        { label: 'Konjac Glucomannan', color: { bg: '#EBF5E0', tx: '#3A5C20' } },
        { label: 'Calcium hydroxide (alkali)' },
      ],
      effect: 'Irreversible thermostable gel · Alkali de-acetylation',
      desc: 'Addition of calcium hydroxide (lime water) at pH ≥ 11, followed by heating, causes de-acetylation of KGM — producing an irreversible, thermostable gel that does not melt above 100°C. This is the traditional mechanism for konnyaku cake and shirataki noodle production. Commercial food processors use this property for heat-stable konjac products that withstand retort sterilisation, long cooking, and hot-fill processing.',
    },
    {
      partners: [
        { label: 'Konjac Glucomannan', color: { bg: '#EBF5E0', tx: '#3A5C20' } },
        { label: 'Starch', color: { bg: '#F0F5EB', tx: '#3A5C20' } },
      ],
      effect: 'Improved freeze-thaw stability · Reduced retrogradation',
      desc: 'KGM at 0.1–0.5% in starch-based food systems significantly reduces starch retrogradation and syneresis during frozen storage and refrigeration. Used in noodles, rice products, frozen dumplings, and starchy desserts to maintain soft, non-staling texture through freeze-thaw cycles in the cold chain.',
    },
    {
      partners: [
        { label: 'Konjac Glucomannan', color: { bg: '#EBF5E0', tx: '#3A5C20' } },
        { label: 'Guar Gum', color: { bg: '#EAF0FB', tx: '#1A3A8C' } },
      ],
      effect: 'Enhanced viscosity · Improved suspension stability',
      desc: 'KGM and guar gum produce a significant viscosity enhancement (synergistic increase) in combination — blends provide more viscosity than the sum of each polymer alone at the same total concentration. Used in beverages, sauces, and pharmaceutical suspensions to reduce total gum loading while achieving the required viscosity specification.',
    },
  ],
};

// "Viscosity comparison — Konjac Gum grades vs other natural gums"
// Mirrors the Chart.js bar chart (logarithmic y-axis, solid bars, hover tooltip).
export const VISC_CHART = {
  title: 'Viscosity (mPa·s at 1% solution) — Konjac vs other food gums',
  sub: 'Konjac Glucomannan (KGM) delivers the highest viscosity of all natural food gums',
  axisLabel: 'Viscosity (mPa·s) — logarithmic scale',
  // logarithmic axis: domain floor / ceiling and the ticks shown in the HTML
  logMin: 1000,
  logMax: 40000,
  ticks: [1000, 3000, 10000, 30000],
  bars: [
    { label: 'KGM E425ii', sub: 'high visc.', val: 30000, color: '#3A5C20' },
    { label: 'KGM E425ii', sub: 'standard', val: 20000, color: '#5C8C30' },
    { label: 'Konjac Gum', sub: 'E425i', val: 8000, color: '#98C860' },
    { label: 'Guar Gum', sub: 'E412', val: 3100, color: '#E8913A' },
    { label: 'Locust Bean', sub: 'Gum E410', val: 3200, color: '#8A6018' },
  ],
  note: '* Viscosity values are indicative at 1% aqueous solution, 25°C. Actual viscosity varies with hydration time, temperature, agitation, and molecular weight distribution. LBG viscosity is measured post-heating at 80°C and cooling to 25°C. Xanthan viscosity shown at 1% with deionised water.',
};
