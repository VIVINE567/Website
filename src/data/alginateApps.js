export const RANK = [
  {
    num: '01',
    name: 'Food & Beverage',
    apps: 'Spherification, restructured foods, ice cream, sauces, bakery, noodles, fruit analogues, dairy — largest global volume segment',
    star: true,
    bg: '#E7EDDB', border: '#7E9A5A', tx: '#2C3A23',
  },
  {
    num: '02',
    name: 'Textile Printing',
    apps: 'Reactive dye print paste thickener on cotton — global industry standard; >80% market share of reactive print paste thickeners',
    star: true,
    bg: '#F0E3DA', border: '#C0954A', tx: '#8A5A4A',
  },
  {
    num: '03',
    name: 'Pharmaceuticals',
    apps: 'Antacid raft systems, controlled-release beads, wound dressings, dental impressions, tablet binder, ophthalmic gels',
    star: false,
    bg: '#E0E8E2', border: '#5E8472', tx: '#38564A',
  },
  {
    num: '04',
    name: 'Personal Care & Cosmetics',
    apps: 'Peel-off face masks, toothpaste, moisturisers, shampoo, sunscreen, spa & algotherapy',
    star: false,
    bg: '#F1E7CD', border: '#C9A84C', tx: '#9A7A2E',
  },
  {
    num: '05',
    name: 'Animal Nutrition',
    apps: 'Aquaculture pellet binder, wet Animal Nitrition jelly, probiotic encapsulation, veterinary medicated feed',
    star: false,
    bg: '#E9E3D3', border: '#9A8E70', tx: '#6B6450',
  },
];

export const TYPE_CARDS = [
  {
    head: 'High-G Alginate',
    sub: 'Laminaria hyperborea stipes',
    bg: '#E7EDDB', border: '#7E9A5A', tx: '#2C3A23',
    props: [
      ['G content', '>60% guluronate'],
      ['Gel texture', 'Firm, brittle, low syneresis'],
      ['Freeze-thaw', 'Poor (syneresis)'],
      ['Best for', 'Restructured foods, pharma beads, dental impressions, spherification'],
    ],
  },
  {
    head: 'High-M Alginate',
    sub: 'Ascophyllum nodosum · Macrocystis',
    bg: '#F0E3DA', border: '#C0954A', tx: '#8A5A4A',
    props: [
      ['M content', '>55% mannuronate'],
      ['Gel texture', 'Soft, elastic, flexible'],
      ['Freeze-thaw', 'Better than high-G'],
      ['Best for', 'Wound care fibres, textile printing, flexible food gels, cosmetic films'],
    ],
  },
  {
    head: 'Balanced G/M Alginate',
    sub: 'Commercial standard grade · Mixed sources',
    bg: '#F2E7CB', border: '#C9A84C', tx: '#9A7A2E',
    props: [
      ['G/M ratio', '~40–60% each (balanced)'],
      ['Gel texture', 'Medium firm, moderate elasticity'],
      ['Viscosity', 'Available in all grades'],
      ['Best for', 'Food thickening, ice cream, sauces, cosmetics, animal feed — general-purpose'],
    ],
  },
];

export const REG_BADGES = [
  { icon: '🇪🇺', strong: 'E401 — Sodium Alginate', span: 'EU Regulation (EC) No 1333/2008 — food additive' },
  { icon: '🇺🇸', strong: 'GRAS — 21 CFR 184.1724', span: 'US FDA — Generally Recognised As Safe' },
  { icon: '🌐', strong: 'JECFA / INS 401', span: 'FAO/WHO Joint Expert Committee on Food Additives' },
  { icon: '📘', strong: 'Ph.Eur. — Sodium Alginate', span: 'European Pharmacopoeia monograph' },
  { icon: '📗', strong: 'USP-NF — Sodium Alginate', span: 'United States Pharmacopeia & National Formulary' },
  { icon: '📙', strong: 'FCC — Food Chemicals Codex', span: 'Quality standard for food-grade ingredients' },
  { icon: '🧴', strong: 'INCI: Sodium Alginate', span: 'International Nomenclature of Cosmetic Ingredients' },
  { icon: '☪️', strong: 'Halal & Kosher', span: 'Certified — available on request' },
  { icon: '🌿', strong: 'Vegan — 100% seaweed origin', span: 'No animal-derived content' },
];

export const HYDRO_COMPARE = [
  {
    name: 'Sodium Alginate',
    sub: 'Brown seaweed · CAS 9005-38-3 · This product',
    tag: '#1 for thermostable Ca²⁺ gel',
    desc: 'Only hydrocolloid forming irreversible, thermostable (≤150°C) gels with Ca²⁺ in cold water. Industry-standard reactive dye thickener for cotton. Unique encapsulation and spherification platform. Pharma wound dressings and antacid raft systems.',
    bg: '#E7EDDB', border: '#7E9A5A', tx: '#2C3A23',
  },
  {
    name: 'Carrageenan',
    sub: 'Red seaweed · CAS 9000-07-1 · E407',
    tag: '#1 for dairy gelation',
    desc: 'Thermoreversible gel (sets on cooling, melts on heating). Unique casein interaction in dairy — stabilises chocolate milk at 0.01–0.025%. Standard in ice cream, processed meat, Animal Nitrition. Three types (kappa, iota, lambda) with distinct gel profiles.',
    bg: '#E0E8E2', border: '#5E8472', tx: '#38564A',
  },
  {
    name: 'Pectin',
    sub: 'Citrus / Apple peel · CAS 9000-69-5 · E440',
    tag: '#1 for high-sugar fruit gels',
    desc: 'High methoxyl (HM) pectin gels require >55% sugar and pH <3.5 — ideal for jams, jellies, marmalades. Low methoxyl (LM) pectin gels with Ca²⁺ at any pH — used in reduced-sugar and dairy desserts. Does not work as textile thickener or pharmaceutical device.',
    bg: '#F0E3DA', border: '#C0954A', tx: '#8A5A4A',
  },
];

export const REF_COLS = ['Industry / Segment', 'Typical products', 'Recommended grade', 'Function of Sodium Alginate', 'Dosage'];

export const REF_TABLE = [
  {
    industry: 'Spherification & Restructured Foods ⭐',
    iStyle: { bg: '#E7EDDB', tx: '#2C3A23' },
    products: 'Juice pearls, caviar spheres, olive stuffings, restructured meat, onion rings, fruit analogues',
    grade: 'Medium–High viscosity, food grade (E401)',
    fn: 'Ionotropic Ca²⁺ gelation for spherification, bead, and restructured product formation; thermostable gel survives retort (121°C) in canned formats; binds meat, fish, and vegetable pieces without additional heat',
    dose: '0.5–2.0% (with Ca²⁺ setting bath)',
  },
  {
    industry: 'Ice Cream & Frozen Desserts',
    iStyle: { bg: '#E7EDDB', tx: '#2C3A23' },
    products: 'Ice cream, frozen yogurt, sorbet, gelato, non-dairy frozen desserts',
    grade: 'Low–Medium viscosity, food grade',
    fn: 'Ice crystal growth inhibition, body and chew improvement, heat-shock resistance, overrun stability, anti-melt delay; used as part of multi-hydrocolloid stabiliser systems (with carrageenan, LBG, or guar)',
    dose: '0.1–0.25%',
  },
  {
    industry: 'Sauces, Dressings & Bakery',
    iStyle: { bg: '#E7EDDB', tx: '#2C3A23' },
    products: 'Ketchup, salad dressings, bakery fillings, glazes, noodles, bakery icings',
    grade: 'Low–Medium viscosity, food grade',
    fn: 'Pseudoplastic thickening, emulsion stabilisation, syneresis prevention, stable across pH 4–8; improves dough elasticity and reduces cooking loss in noodle systems',
    dose: '0.1–0.5%',
  },
  {
    industry: 'Antacid Raft System ⭐',
    iStyle: { bg: '#E0E8E2', tx: '#38564A' },
    products: 'Gaviscon-type antacid products for gastro-oesophageal reflux disease (GERD)',
    grade: 'High viscosity, pharma grade (Ph.Eur./USP-NF) — high-G preferred',
    fn: 'Forms a viscous, buoyant raft on stomach contents with sodium bicarbonate and calcium carbonate — physically prevents acid reflux; higher G-block content produces firmer, more durable rafts with better acid barrier performance',
    dose: '500–1,000 mg per dose',
  },
  {
    industry: 'Controlled-Release Drug Beads',
    iStyle: { bg: '#E0E8E2', tx: '#38564A' },
    products: 'Alginate microbeads for colonic drug delivery, probiotic encapsulation, enzyme protection',
    grade: 'Medium–High viscosity, pharma grade',
    fn: 'Ionotropic Ca²⁺ gelation produces pH-responsive microbeads (50–500 µm) — intact in acidic stomach (pH 1.2), dissolving in intestinal fluid (pH 7.4); encapsulation efficiency >85%; used for 5-ASA (IBD), probiotics, and heat-sensitive actives',
    dose: '1.0–3.0% alginate solution',
  },
  {
    industry: 'Wound Dressings & Dental',
    iStyle: { bg: '#E0E8E2', tx: '#38564A' },
    products: 'Alginate wound dressings (Class II medical device), dental impression materials',
    grade: 'High–VH viscosity, pharma grade — high-M for wound fibre; high-G for dental',
    fn: 'Calcium alginate fibre absorbs up to 20× its weight in wound exudate; maintains moist wound healing environment; dental impression alginate (12–15%) sets in 1–4 minutes providing dimensional accuracy for prosthetics; sterile wound grades are CE-marked / FDA 510(k) cleared',
    dose: '12–15% (dental); fibre form (wound)',
  },
  {
    industry: 'Tablet Binder & Oral Liquids',
    iStyle: { bg: '#E0E8E2', tx: '#38564A' },
    products: 'Compressed tablets, oral suspensions, paediatric liquid medicines',
    grade: 'Low–Medium viscosity, pharma grade',
    fn: 'Binder in tablet granulation (1.5–5%); viscosity builder and suspension agent in oral liquid formulations; stable in the mildly acidic and neutral pH of oral pharmaceutical products',
    dose: '1.5–5% (tablets); 0.5–2.0% (liquids)',
  },
  {
    industry: 'Reactive Dye Print Paste ⭐',
    iStyle: { bg: '#F0E3DA', tx: '#8A5A4A' },
    products: 'Reactive dye printing on cotton, viscose, linen, and cellulosic fibre blends — rotary, flat screen, and digital',
    grade: 'Low / Medium / High viscosity textile grade — by mesh and fabric type',
    fn: 'Industry-standard reactive dye thickener — chemically inert to reactive dyes (does not consume dye fixation sites unlike starch/HEC); pseudoplastic rheology for sharp screen transfer; washes out completely after fixing, leaving no residue; highest colour yield and fastness of any print paste thickener on cotton',
    dose: '3–8% in print paste',
  },
  {
    industry: 'Digital Inkjet Pre-Treatment',
    iStyle: { bg: '#F0E3DA', tx: '#8A5A4A' },
    products: 'Cotton and viscose fabric pre-treatment before reactive inkjet digital printing',
    grade: 'Low viscosity, textile grade',
    fn: 'Thin alginate coating on fabric prevents reactive inkjet ink bleeding and feathering — producing print definition equivalent to screen printing at high DPI (dots per inch); essential for photographic and fine-art textile digital printing',
    dose: '0.5–2.0% pre-treatment solution',
  },
  {
    industry: 'Peel-Off Face Masks ⭐',
    iStyle: { bg: '#F1E7CD', tx: '#9A7A2E' },
    products: 'Calcium alginate peel-off masks (salon and K-beauty), wash-off gel masks, spa facial treatments',
    grade: 'Medium viscosity, food/cosmetic grade (INCI: Sodium Alginate)',
    fn: 'Mixed with calcium salt, sets on skin in 5–10 minutes into firm, flexible gel sheet that lifts cleanly — removing sebum, dead cells, and surface impurities; provides anti-inflammatory, moisturising, and skin-soothing effects; compatible with sensitive skin',
    dose: '1.0–3.0%',
  },
  {
    industry: 'Toothpaste & Oral Care',
    iStyle: { bg: '#F1E7CD', tx: '#9A7A2E' },
    products: 'Fluoride toothpaste, whitening toothpaste, gel toothpaste, dental gels',
    grade: 'Medium viscosity, food/pharma grade',
    fn: 'Binder and thickener providing cohesive paste structure, smooth tube dispensing behaviour, and stability of heterogeneous toothpaste system (abrasive, humectant, fluoride, surfactant); stable at mildly alkaline toothpaste pH (7.0–9.5)',
    dose: '0.5–1.5%',
  },
  {
    industry: 'Skincare & Hair Care',
    iStyle: { bg: '#F1E7CD', tx: '#9A7A2E' },
    products: 'Moisturisers, serums, day creams, shampoos, conditioners, sunscreen, after-sun gels',
    grade: 'Low–Medium viscosity, cosmetic grade',
    fn: 'Film-former reducing transepidermal water loss (TEWL); thickener and emulsion stabiliser; conditioning film on hair; compatible with anionic and non-ionic surfactant systems; provides breathable moisture-retaining skin barrier',
    dose: '0.2–1.0%',
  },
  {
    industry: 'Aquaculture Feed Pellets ⭐',
    iStyle: { bg: '#E9E3D3', tx: '#6B6450' },
    products: 'Fish feed (salmon, tilapia, catfish, sea bream), shrimp feed, prawn pellets',
    grade: 'Medium–High viscosity, food/feed grade',
    fn: 'Water-stable pellet binder — alginate-bound pellets retain shape and nutritional integrity submerged in fresh or salt water for 30–60 minutes, critical for slow-feeding bottom fish and shrimp; reduces feed dissolution and water quality degradation; replaces or supplements wheat gluten at lower cost in some formulations',
    dose: '0.5–2.0%',
  },
  {
    industry: 'Wet Animal Nitrition — Jelly & Gravy',
    iStyle: { bg: '#E9E3D3', tx: '#6B6450' },
    products: 'Cat food pouches, dog food cans and pouches — jelly and gravy formats',
    grade: 'Medium viscosity, food grade',
    fn: 'Ca²⁺ from meat ingredients cross-links alginate to form jelly structure in wet Animal Nitrition — retort-stable at 121°C (does not melt during can sterilisation); produces clean, visually appealing jelly layers; maintains gel integrity through entire shelf life',
    dose: '0.2–0.8%',
  },
  {
    industry: 'Probiotic & Enzyme Encapsulation',
    iStyle: { bg: '#E9E3D3', tx: '#6B6450' },
    products: 'Live probiotic protection in pelleted feed, enzyme microbeads, vitamin encapsulation',
    grade: 'Medium viscosity, food grade',
    fn: 'Calcium alginate microbeads protect live probiotics (Lactobacillus, Bacillus spp.), phytase, protease, and heat-sensitive vitamins through pelleting, extrusion (60–90°C), and storage — with targeted release in the gastrointestinal tract; survival rates 85–95% vs. 30–50% for unprotected probiotics in pelleted feed',
    dose: '1.0–2.5% alginate solution',
  },
];

export const REF_NOTE = 'Note: Grade recommendations are indicative. Optimal viscosity grade and G/M character should be confirmed via formulation trials. Contact VIVINE International for grade selection support, TDS, and samples.';
