// Locust Bean Gum (E410) content matching "locust_bean_gum_VIVINE_international.html"

export const IC = {
  food:       { bg: '#FBF4E4', tx: '#6B4A10' },
  dairy:      { bg: '#FEF9EC', tx: '#7A5C00' },
  plantbased: { bg: '#EAF5E8', tx: '#1E6B28' },
  pharma:     { bg: '#EAF0FB', tx: '#1A3A8C' },
  cosmetic:   { bg: '#FAE8F4', tx: '#7A1A6A' },
  petfood:    { bg: '#EDF1F8', tx: '#2A4880' },
  all:        { bg: '#FBF4E4', tx: '#6B4A10' },
};

export const HERO = {
  productTag: 'Galactomannan · Natural hydrocolloid · E410 · GRAS',
  title: 'Locust Bean Gum (LBG)',
  cas: 'CAS 9000-40-6 · E410 · Carob Bean Gum · Carobin',
  desc: "Locust Bean Gum (LBG) is a natural galactomannan polysaccharide extracted from the endosperm of carob seeds (Ceratonia siliqua L.). Composed of a mannose backbone with galactose side chains at a mannose-to-galactose ratio (M:G) of approximately 4:1, LBG is cold-water swellable but requires heating (≥ 80 °C) for full dispersion and maximum viscosity development. Its most defining commercial property is powerful synergistic interaction with kappa-carrageenan and xanthan gum — forming elastic, freeze-thaw stable gels at concentrations far below those required by either polymer alone.",
  statPills: [
    { val: 'E410 / GRAS', lbl: 'Food approved globally' },
    { val: 'M:G ≈ 4:1', lbl: 'Mannose:Galactose' },
    { val: '5 grades', lbl: 'Available' },
    { val: '≥ 80 °C', lbl: 'Full hydration temp.' },
  ],
};

export const HIGHLIGHTS = [
  { icon: '🌿', val: 'Natural origin', lbl: 'Carob tree seed' },
  { icon: '❄️', val: 'Ice cream stabilizer', lbl: 'Controls ice crystals' },
  { icon: '🔗', val: 'Synergy partner', lbl: 'κ-Carrageenan · Xanthan' },
  { icon: '✅', val: 'E410 / GRAS', lbl: 'Global food approval' },
  { icon: '🐄', val: 'Dairy & vegan', lbl: 'Dairy & plant-based' },
  { icon: '🌡️', val: 'Freeze-thaw stable', lbl: 'LBG + xanthan blend' },
  { icon: '🔬', val: 'Gluten-free', lbl: 'Celiac-safe ingredient' },
  { icon: '🐾', val: 'Pet food grade', lbl: 'Wet food & treats' },
];

export const INFO_CARDS = [
  {
    title: 'Galactomannan structure — M:G ratio 4:1',
    body: 'LBG consists of a β-1,4-linked mannose backbone with α-1,6-linked galactose side chains at a mannose-to-galactose (M:G) ratio of approximately 4:1. This ratio is critical — fewer galactose branches mean more "bare" mannose regions, enabling stronger intermolecular associations (synergy) with other hydrocolloids. Guar gum (M:G ≈ 2:1) has more galactose branches, giving it higher cold-water solubility but weaker synergistic gelation.',
  },
  {
    title: 'Hot dispersibility — full hydration at ≥ 80 °C',
    body: 'LBG is only partially soluble in cold water (it swells and thickens). Full dispersion and maximum viscosity development requires heating to ≥ 80 °C (176 °F) for at least 10 minutes. This property is advantageous in pasteurized and UHT-processed food systems, as the thermal processing step simultaneously hydrates LBG without requiring additional unit operations. On cooling, viscosity increases further.',
  },
  {
    title: 'Powerful synergy with κ-Carrageenan',
    body: 'The most commercially important property of LBG is its synergistic interaction with kappa-carrageenan. When blended, LBG intercalates into the helical junctions of carrageenan during gelation, producing a gel with up to 5–10× the firmness of carrageenan alone — at the same total hydrocolloid concentration. This synergy reduces total gum usage, improves texture, and produces more elastic, cohesive gels used in processed cheese, dairy desserts, and meat analogues.',
  },
  {
    title: 'Synergy with xanthan gum — freeze-thaw stability',
    body: 'LBG and xanthan gum form a unique synergistic gel — LBG\'s bare mannose regions interact with xanthan\'s side chains to form a soft, elastic, freeze-thaw stable gel. Unlike many gelling systems, LBG-xanthan gels survive multiple freeze-thaw cycles without syneresis (water separation). This property is essential in frozen food applications, plant-based desserts, and sauces that undergo temperature fluctuation in the cold chain.',
  },
  {
    title: 'Ice crystal control in frozen desserts',
    body: 'In ice cream and frozen desserts, LBG (typically 0.1–0.2% with carrageenan) forms a semi-structured network in the aqueous phase that limits ice crystal growth (recrystallisation) during storage and temperature fluctuation. This extends product shelf life, maintains smooth texture, and reduces the sandiness that consumers perceive when ice crystals exceed ~50 µm. LBG also improves overrun stability and body in dairy and non-dairy ice cream systems.',
  },
  {
    title: 'Clean label, non-GMO, gluten-free, vegan',
    body: 'LBG is derived from the carob tree (Ceratonia siliqua), a leguminous tree cultivated primarily in Mediterranean regions. It is non-GMO, vegan, halal, kosher certifiable, and gluten-free — meeting the stringent clean-label, free-from, and natural ingredient positioning demanded by modern food, nutraceutical, cosmetic, and pet food formulations. It carries E410 approval in the EU, GRAS status in the USA, and INS 410 globally.',
  },
];

export const VISC_CHART = {
  title: 'Max viscosity by LBG grade (mPa·s)',
  sub: '1% aqueous solution, 25°C, Brookfield LVT — after full hot hydration',
  axisMax: 5000,
  ticks: [0, 1000, 2000, 3000, 4000, 5000],
  axisLabel: 'Max viscosity (mPa·s)',
  bars: [
    { label: 'Standard food grade', value: 3500, note: 'Up to 3,500 mPa·s (1%, 25°C, fully hydrated)', color: '#C8943A' },
    { label: 'High-viscosity grade', value: 4500, note: 'Up to 4,500 mPa·s (1%, 25°C, fully hydrated)', color: '#E8B840' },
    { label: 'Low-viscosity grade', value: 2000, note: 'Up to 2,000 mPa·s (1%, 25°C, fully hydrated)', color: '#7EAAE8' },
    { label: 'Pharma grade', value: 3500, note: 'Up to 3,500 mPa·s (1%, 25°C, fully hydrated)', color: '#A868C8' },
    { label: 'Cosmetic grade', value: 3500, note: 'Up to 3,500 mPa·s (1%, 25°C, fully hydrated)', color: '#D878B8' },
  ],
  note: 'Viscosity values are indicative at 1% aqueous solution, fully hot-hydrated at 85°C for 15 min then cooled to 25°C, Brookfield LVT Spindle 3, 30 rpm. Actual viscosity depends on processing temperature, shear history, pH, and presence of co-solutes (salt, sugar).',
};