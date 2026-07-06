// HPMC-specific content matching hpmc_VIVINE_international.html
// Industry color tokens (same as in HTML reference)
export const IC = {
  const:  { bg: '#DDF0F4', tx: '#0A4050', border: '#88C8D8' },
  pharma: { bg: '#EEE8F8', tx: '#3A1A80', border: '#C0A8E8' },
  food:   { bg: '#E8F5E4', tx: '#1A5020', border: '#A0D098' },
  paint:  { bg: '#FBF0E4', tx: '#7A3800', border: '#D8B888' },
  care:   { bg: '#F8E8F4', tx: '#701860', border: '#D8A8D0' },
  ceram:  { bg: '#F0EAF8', tx: '#3A1870', border: '#C0A8E0' },
  all:    { bg: '#DDF0F4', tx: '#0C5868' },
};

export const HERO = {
  productTag: 'Cellulose ether · Non-ionic · Construction · Pharma · Food · Broadest application range',
  title: 'HPMC — Hydroxypropyl Methylcellulose',
  cas: 'CAS 9004-65-3 · EC 618-389-7 · Hypromellose (INN) · E464 (food) · Cellulose, 2-hydroxypropyl methyl ether',
  desc: 'Hydroxypropyl Methylcellulose (HPMC), also known as Hypromellose, is a non-ionic cellulose ether produced by the sequential or simultaneous etherification of alkali cellulose with methyl chloride and propylene oxide. The combination of methyl (–OCH₃) and hydroxypropyl (–OCH₂CHOHCH₃) substituents produces a cellulose ether with uniquely broad functionality: cold-water solubility, thermal gelation above a cloud point, excellent film-forming ability, surface activity, and full compatibility across the construction, pharmaceutical, food, and personal care industries. HPMC has the broadest application range of all commercial cellulose Ethers — serving as a critical functional ingredient from dry-mix mortar systems and pharmaceutical tablet coatings to food emulsions and hair care products.',
  statPills: [
    { val: 'CAS 9004-65-3', lbl: 'Chemical identity' },
    { val: 'E464', lbl: 'Food additive number' },
    { val: '6 industries', lbl: 'Broadest CE range' },
    { val: '0.1–2.0%', lbl: 'Typical dosage (w/w)' },
  ],
};

export const HIGHLIGHTS = [
  { icon: '🏗️', val: 'Construction', lbl: 'Largest industrial market' },
  { icon: '💊', val: 'Pharmaceuticals', lbl: 'USP · Ph.Eur. · Hypromellose' },
  { icon: '🍽️', val: 'Food & Beverage', lbl: 'E464 · Thickener · Emulsifier' },
  { icon: '🎨', val: 'Paints & Coatings', lbl: 'Rheology · Water retention' },
  { icon: '🧴', val: 'Personal Care', lbl: 'Shampoos · Gels · Creams' },
  { icon: '🏺', val: 'Ceramics', lbl: 'Binder · Processing aid' },
  { icon: '🌡️', val: 'Thermal gelation', lbl: 'Cloud point 60–90°C' },
  { icon: '🎬', val: 'Film forming', lbl: 'Tablet coating · Barrier films' },
];

export const MARKET_RANK = [
  {
    num: '01',
    name: 'Construction Chemicals',
    apps: 'Tile adhesives, wall putty, skim coat, gypsum plaster, cement renders, EIFS, self-levelling compounds — by far the largest volume segment',
    star: true,
    color: IC.const,
  },
  {
    num: '02',
    name: 'Pharmaceuticals',
    apps: 'Tablet binder, film coating, controlled-release matrix, ophthalmic drops, capsule shell — as Hypromellose per USP / Ph.Eur.',
    color: IC.pharma,
  },
  {
    num: '03',
    name: 'Food & Beverage',
    apps: 'Thickener, stabiliser, emulsifier, fat replacer, gluten-free baking — approved as E464 globally',
    color: IC.food,
  },
  {
    num: '04',
    name: 'Paints & Coatings',
    apps: 'Water-based architectural paints, textured coatings — thickener and water-retention agent',
    color: IC.paint,
  },
  {
    num: '05',
    name: 'Personal Care',
    apps: 'Shampoos, hair gels, face creams, eye gels — thickener, film former, viscosity modifier',
    color: IC.care,
  },
  {
    num: '06',
    name: 'Ceramics',
    apps: 'Tile body binder, glaze binder, spray-drying aid — burnout binder for green-body strength',
    color: IC.ceram,
  },
];

export const CE_COMPARE = [
  {
    name: 'HEC',
    sub: 'Hydroxyethyl Cellulose',
    tag: '#1 in Paints & Coatings',
    desc: 'No thermal gelation — soluble hot and cold. Dominant choice for architectural paints, oilfield drilling fluids, shampoos, and liquid detergents. Broadest surfactant and electrolyte compatibility.',
    bg: '#FBF0E4', border: '#D8B880', tx: '#7A3800',
  },
  {
    name: 'MHEC',
    sub: 'Methyl Hydroxyethyl Cellulose',
    tag: '#1 in Construction Dry-Mix',
    desc: 'Gels above ~55–75°C — strong anti-sag in tile adhesive and skim coat. Highest water retention values. The standard cellulose ether for ready-mix dry mortar (MHEC-RD) systems.',
    bg: '#E8F4E0', border: '#A0C888', tx: '#1A4A0A',
  },
  {
    name: 'HPMC',
    sub: 'Hydroxypropyl Methylcellulose · This product',
    tag: 'Broadest application range',
    desc: 'Gels above ~60–90°C. Construction + Pharma + Food — the only cellulose ether approved across all three sectors. Superior film formation makes it the standard for pharmaceutical tablet coating.',
    bg: '#DDF0F4', border: '#80C0D0', tx: '#0C5868',
  },
];

export const SUBST_TYPES = [
  {
    type: 'HPMC 1828',
    methoxyl: '16.5–20.0%',
    hp: '23.0–32.0%',
    cloud: '~70–90°C',
    apps: 'Pharmaceuticals (tablet coating, ophthalmic drops), food (high HP content improves water solubility and lowers cloud point)',
  },
  {
    type: 'HPMC 2208',
    methoxyl: '19.0–24.0%',
    hp: '4.0–12.0%',
    cloud: '~60–75°C',
    apps: 'Construction (tile adhesive, wall putty), controlled-release tablets (matrix system), paints',
  },
  {
    type: 'HPMC 2906',
    methoxyl: '27.0–30.0%',
    hp: '4.0–7.5%',
    cloud: '~65–80°C',
    apps: 'Construction (gypsum plaster, skim coat), pharmaceuticals (HPMC capsules, coatings)',
  },
  {
    type: 'HPMC 2910',
    methoxyl: '28.0–30.0%',
    hp: '7.0–12.0%',
    cloud: '~58–65°C',
    apps: 'Pharmaceuticals (immediate-release film coating standard), food (E464), personal care',
  },
];

export const SUBST_NOTE = 'USP type codes: first two digits = nominal methoxyl %; last two digits = nominal hydroxypropyl %. Ph.Eur. uses the same classification. Contact VIVINE International to confirm the correct substitution type for your formulation.';

export const INFO_CARDS = [
  {
    title: 'Chemistry & structure',
    body: 'HPMC is manufactured by reacting purified cellulose (wood pulp or cotton linters) with sodium hydroxide to form alkali cellulose, followed by simultaneous or sequential etherification with methyl chloride (introduces –OCH₃ groups, DS = 1.2–2.1) and propylene oxide (introduces –OCH₂CHOHCH₃ groups, MS = 0.02–0.3). The ratio of methyl to hydroxypropyl substitution defines the USP type (1828, 2208, 2906, 2910) and determines cloud point, solubility profile, gel strength, and film properties.',
  },
  {
    title: 'Thermal gelation & cloud point',
    body: 'Like methylcellulose (MC) and MHEC, HPMC forms a thermoreversible gel when heated above its cloud point (typically 60–90°C depending on substitution type and concentration). Below the cloud point, it is fully soluble; above it, hydrophobic methyl groups associate to form a gel network. In construction applications, this provides anti-sag performance on vertical surfaces in warm conditions. In food applications, this thermal gelation is used to create fat analogues and structure in baked goods during oven heating.',
  },
  {
    title: 'Film-forming excellence',
    body: 'HPMC forms flexible, clear, continuous films with excellent adhesion to most substrates — a property that distinguishes it from HEC and MHEC. This makes HPMC the global standard for pharmaceutical immediate-release and modified-release tablet film coatings (Opadry equivalent systems). In construction, it contributes to cohesive mortar films; in food, to edible barrier coatings and encapsulation. Film quality depends on substitution type, molecular weight (viscosity grade), and plasticiser selection.',
  },
  {
    title: 'Surface activity',
    body: 'The amphiphilic character of HPMC — hydrophilic hydroxyl and hydroxypropyl groups alongside hydrophobic methyl groups — gives it mild surface-active properties. In food applications, HPMC stabilises oil-in-water emulsions through adsorption at the oil-water interface, functioning as an emulsifier and fat replacer. In pharmaceutical wet granulation, this surface activity promotes wetting of hydrophobic drug particles and improves granule uniformity and tablet hardness.',
  },
];
