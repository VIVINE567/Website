// HEC-specific content matching hec_vivine_international.html
// Industry color tokens (same palette as the HTML reference)
export const IC = {
  paint:  { bg: '#FBF0E4', tx: '#7A3800', border: '#D8B888' },
  oil:    { bg: '#F4ECD8', tx: '#604010', border: '#C8A860' },
  const:  { bg: '#EEF4E4', tx: '#2A4A0A', border: '#A8C890' },
  care:   { bg: '#F8E8F4', tx: '#701860', border: '#D8A8D0' },
  deterg: { bg: '#E8F0FB', tx: '#0A2A7A', border: '#A0B8E8' },
  text:   { bg: '#E4F4F8', tx: '#0A4A60', border: '#90C8D8' },
  pharma: { bg: '#EEE8F8', tx: '#3A1A80', border: '#C0A8E8' },
  all:    { bg: '#F4E8D4', tx: '#8A4A00' },
};

export const HIGHLIGHTS = [
  { icon: '🎨', val: 'Paints & Coatings', lbl: 'Largest HEC market' },
  { icon: '⛽', val: 'Oil & Gas Drilling', lbl: 'Fluid loss · Viscosity' },
  { icon: '🏗️', val: 'Construction', lbl: 'Cement · Gypsum · Mortar' },
  { icon: '🧴', val: 'Personal Care', lbl: 'Shampoos · Lotions · Gels' },
  { icon: '🧹', val: 'Detergents', lbl: 'Liquid cleaners · Fabric care' },
  { icon: '🧵', val: 'Textile', lbl: 'Printing pastes · Sizing' },
  { icon: '🌡️', val: 'No thermal gelation', lbl: 'Stable hot & cold' },
  { icon: '⚗️', val: 'Non-ionic', lbl: 'Electrolyte & pH tolerant' },
];

export const MARKET_RANK = [
  {
    num: '01',
    name: 'Paints & Coatings',
    apps: 'Emulsion paints, architectural coatings, exterior renders, industrial coatings — primary thickener and rheology modifier',
    star: true,
    color: { bg: '#FBF0E4', border: '#D4A870', tx: '#7A3800' },
  },
  {
    num: '02',
    name: 'Oil & Gas Drilling',
    apps: 'Water-based drilling fluids, completion fluids, workover fluids — fluid loss control, viscosity building',
    color: { bg: '#F4ECD8', border: '#C8A860', tx: '#604010' },
  },
  {
    num: '03',
    name: 'Construction Chemicals',
    apps: 'Cement-based renders, gypsum plaster, tile adhesives, self-levelling compounds — water retention, workability',
    color: { bg: '#EEF4E4', border: '#A8C890', tx: '#2A4A0A' },
  },
  {
    num: '04',
    name: 'Personal Care & Cosmetics',
    apps: 'Shampoos, conditioners, body wash, lotions, creams, hair gels, toothpaste — thickener, stabiliser',
    color: { bg: '#F8E8F4', border: '#D8A8D0', tx: '#701860' },
  },
  {
    num: '05',
    name: 'Detergents & Cleaners',
    apps: 'Liquid detergents, household cleaners, fabric softeners — thickening, anti-redeposition, cling',
    color: { bg: '#E8F0FB', border: '#A0B8E8', tx: '#0A2A7A' },
  },
  {
    num: '06',
    name: 'Textile Processing',
    apps: 'Reactive dye printing pastes, pigment printing, warp sizing — migration control, colour definition',
    color: { bg: '#E4F4F8', border: '#90C8D8', tx: '#0A4A60' },
  },
];

// HEC vs MHEC vs HPMC — property comparison cards (type-banner in HTML)
export const TYPE_COMPARE = [
  {
    name: 'HEC',
    sub: 'Hydroxyethyl Cellulose · This product',
    color: { bg: '#FBF0E4', border: '#D4A870', tx: '#7A3800' },
    props: [
      ['CAS', '9004-62-0'],
      ['Ion character', 'Non-ionic'],
      ['Thermal gelation', 'None — soluble hot & cold'],
      ['Best for', 'Paints, oilfield, personal care, detergents'],
      ['Salt tolerance', 'Good (non-ionic)'],
      ['pH stability', '2–12'],
    ],
  },
  {
    name: 'MHEC',
    sub: 'Methyl Hydroxyethyl Cellulose',
    color: { bg: '#EAF5E4', border: '#90C878', tx: '#1A4A0A' },
    props: [
      ['CAS', '9032-42-2'],
      ['Ion character', 'Non-ionic'],
      ['Thermal gelation', 'Yes — gels above ~55–75°C'],
      ['Best for', 'Construction dry-mix: tile adhesive, putty, skim coat'],
      ['Water retention', 'Very high (≥ 97–99%)'],
      ['Anti-sag', 'Excellent (thermal gel)'],
    ],
  },
  {
    name: 'HPMC',
    sub: 'Hydroxypropyl Methyl Cellulose',
    color: { bg: '#EEE8F8', border: '#B090D8', tx: '#3A1A80' },
    props: [
      ['CAS', '9004-65-3'],
      ['Ion character', 'Non-ionic'],
      ['Thermal gelation', 'Yes — gels above ~60–90°C'],
      ['Best for', 'Pharmaceuticals, construction, food films'],
      ['Pharma use', 'USP / Ph.Eur. / JP grades available'],
      ['Film forming', 'Excellent — tablet coatings'],
    ],
  },
];

export const INFO_CARDS = [
  {
    title: 'Chemistry & structure',
    body: 'HEC is produced by reacting alkali cellulose (purified wood pulp or cotton linters treated with NaOH) with ethylene oxide (EO). Each anhydroglucose unit of cellulose carries three hydroxyl groups (positions 2, 3, 6); EO reacts with these to introduce hydroxyethyl (–OCH₂CH₂OH) substituents. The molar substitution (MS) of HEC typically ranges from 1.8 to 3.5 — meaning 1.8 to 3.5 moles of EO are added per anhydroglucose unit on average. Higher MS values generally improve cold-water solubility and salt tolerance.',
  },
  {
    title: 'Why non-ionic matters',
    body: 'HEC carries no net charge. Unlike carboxymethyl cellulose (CMC, anionic), it does not precipitate in the presence of Ca²⁺, Mg²⁺, or other divalent cations found in hard water, cement systems, or high-salinity oilfield brines. It is compatible with cationic, anionic, and non-ionic surfactants — a critical property for shampoo, detergent, and drilling fluid formulations where multiple charged ingredients coexist.',
  },
  {
    title: 'No thermal gelation — the key difference from MHEC/HPMC',
    body: 'HEC contains only hydroxyethyl substituents and no methyl groups. The absence of methyl substitution means HEC does not exhibit the inverse-solubility / thermal gelation that characterises MC, MHEC, and HPMC. HEC solutions remain stable and fully liquid from 0°C to above 90°C — making it the correct choice for hot-applied paints, high-temperature drilling operations, and personal care products used under warm water.',
  },
  {
    title: 'Pseudoplastic rheology',
    body: 'HEC solutions exhibit shear-thinning (pseudoplastic) flow behaviour. Viscosity is high at low shear rates (storage, brush-loading, application from a container) and drops significantly at high shear rates (brushing, rolling, spraying). This is the ideal behaviour for architectural paints — the paint flows easily during application but rebuilds viscosity instantly on the wall, preventing drips and sagging. The same mechanism prevents sedimentation of solids in drilling fluids and pigment pastes.',
  },
];
