// Locust Bean Gum regulatory badges and application deep-dive

// Industry colors - exported for use in other modules
export const IC = {
  food:       { bg: '#FBF4E4', tx: '#6B4A10' },
  dairy:      { bg: '#FEF9EC', tx: '#7A5C00' },
  plantbased: { bg: '#EAF5E8', tx: '#1E6B28' },
  pharma:     { bg: '#EAF0FB', tx: '#1A3A8C' },
  cosmetic:   { bg: '#FAE8F4', tx: '#7A1A6A' },
  petfood:    { bg: '#EDF1F8', tx: '#2A4880' },
  all:        { bg: '#FBF4E4', tx: '#6B4A10' },
};

// "Regulatory approvals & certifications"
export const REGULATORY = [
  { icon: '🇪🇺', title: 'EU E410', sub: 'Regulation (EC) No 1333/2008 (quantum satis)' },
  { icon: '🇺🇸', title: 'FDA GRAS', sub: '21 CFR 184.1343' },
  { icon: '🌍', title: 'JECFA INS 410', sub: 'ADI "not specified"' },
  { icon: '📋', title: 'FCC compliant', sub: 'Food Chemicals Codex' },
  { icon: '🌿', title: 'Non-GMO / Vegan', sub: 'Gluten-free · Natural' },
  { icon: '🕌', title: 'Halal / Kosher', sub: 'Certifiable on request' },
  { icon: '📄', title: 'TDS / SDS / COA', sub: 'Full documentation available' },
];

// "Application deep-dive by industry"
export const APP_DETAILS = [
  {
    title: 'Food & Beverage', icon: '🍽️',
    color: { bg: IC.food.bg, tx: IC.food.tx },
    items: [
      { name: 'Sauces, Gravies & Dressings', desc: 'LBG thickens savoury sauces, cooking sauces, and salad dressings while building a smooth, pourable body. Blended with xanthan gum (typically 1:1 LBG:xanthan), it produces freeze-thaw stable sauce systems that survive the retail cold chain without syneresis. Typical use: 0.05–0.3%.' },
      { name: 'Bakery Fillings & Fruit Preparations', desc: 'In bake-stable fruit fillings, jams destined for bakery use, and croissant/pastry fillings, LBG combined with pectin or starch provides thermal stability and syneresis resistance. It prevents moisture migration into pastry layers during storage. Typical use: 0.1–0.4%.' },
      { name: 'Confectionery — Gels & Jellies', desc: 'LBG synergy with κ-carrageenan is used in confectionery water gels, jelly confectionery, and gummy products to produce elastic, non-brittle gel textures with improved mouthfeel vs. carrageenan alone.' },
      { name: 'Beverages — Cloud & Mouthfeel', desc: 'Low-viscosity LBG grades add body and mouthfeel to fruit beverages, reduced-sugar drinks, and functional beverages without imparting gel structure. Processed at UHT temperatures where LBG fully hydrates. Typical use: 0.02–0.1%.' },
      { name: 'Soups & Ready Meals', desc: 'In retorted and UHT-processed soups and ready meals, LBG provides viscosity and suspension stability for particulates. Its stability under prolonged thermal processing at 121 °C makes it suitable for canned and pouch-packed ambient ready meal applications.' },
      { name: 'Gluten-Free Bakery Products', desc: 'In gluten-free bread, muffins, and cakes, LBG (0.3–0.8%) partially replaces gluten network functionality — providing dough cohesion, water retention, and crumb structure. Often blended with xanthan gum.' },
    ],
  },
  {
    title: 'Dairy & Frozen Desserts', icon: '🍦',
    color: { bg: IC.dairy.bg, tx: IC.dairy.tx },
    items: [
      { name: 'Ice Cream & Premium Frozen Desserts', desc: 'LBG is the most widely used ice cream hydrocolloid globally. At 0.1–0.2% with κ-carrageenan (0.01–0.02%), it forms a semi-structured network in the aqueous phase that restricts ice crystal recrystallisation during storage and temperature abuse. Standard blend: LBG 0.15% + carrageenan 0.015%.' },
      { name: 'Soft-Serve Ice Cream & Frozen Yogurt', desc: 'In soft-serve systems, LBG (0.05–0.15%) combined with guar gum improves draw temperature stability, body, and resistance to meltdown — allowing consistent dispensing across varying machine temperatures.' },
      { name: 'Processed & Cream Cheese', desc: 'LBG + κ-carrageenan synergy is critical in processed cheese slices and blocks — producing firm, sliceable, meltable cheese texture. In cream cheese and spreadable cheese, LBG provides water-binding and body without excessive firmness. Typical blend: LBG 0.1–0.3% + κ-carrageenan 0.1–0.2%.' },
      { name: 'Dairy Desserts & Puddings', desc: 'In cold-set dairy desserts, LBG + carrageenan blends provide textures ranging from soft-set (spoonable) to firm (sliceable). LBG\'s contribution improves cohesiveness — the dessert holds shape on a plate without weeping or cracking. Total hydrocolloid: 0.3–0.6%.' },
      { name: 'Yogurt & Fermented Dairy', desc: 'In stirred and set yogurt, LBG (0.05–0.2%) improves viscosity, creaminess, and serum separation resistance. Its non-ionic galactomannan structure is compatible with the acid-protein matrix of fermented dairy without destabilising protein at low pH.' },
      { name: 'Whipped Cream & Dairy Toppings', desc: 'LBG stabilises whipped cream and non-dairy whipped toppings by providing a continuous phase viscosity that supports foam bubble stability. In UHT whipping cream, LBG (0.05–0.15%) prevents cream serum separation in the carton during shelf life.' },
    ],
  },
  {
    title: 'Plant-Based Foods', icon: '🌱',
    color: { bg: IC.plantbased.bg, tx: IC.plantbased.tx },
    items: [
      { name: 'Oat, Almond & Coconut Milk Alternatives', desc: 'LBG (0.02–0.08%) stabilises plant-based milk emulsions against phase separation and adds creamy mouthfeel to thin plant-based beverage bases. Often used with sunflower lecithin and gellan gum in premium formulations.' },
      { name: 'Vegan Ice Cream & Frozen Desserts', desc: 'In non-dairy ice cream (coconut milk, oat milk, pea protein base), LBG + xanthan gum (0.15–0.25% total) replicates the texture and meltdown profile of dairy ice cream. Outperforms guar gum alone in freeze-thaw stability tests.' },
      { name: 'Plant-Based Yogurt Alternatives', desc: 'In coconut, almond, soy, and oat-based yogurt alternatives, LBG (0.1–0.3%) with pectin or starch provides the thick, spoonable texture consumers expect. Reduces syneresis during storage — a significant formulation challenge.' },
      { name: 'Meat Analogues & Plant-Based Proteins', desc: 'LBG + carrageenan synergy binds water in structured texturised vegetable protein matrices for vegan burgers and sausages. Improves water retention of TVP and soy protein concentrates — reducing cooking loss and improving perceived mouthfeel.' },
      { name: 'Plant-Based Cheese Alternatives', desc: 'LBG + κ-carrageenan synergy is the primary texturising system for coconut oil-based and cashew-based vegan cheese slices and blocks. At 0.3–0.8% LBG with carrageenan, it produces firm-sliceable, meltable textures that mimic dairy processed cheese.' },
    ],
  },
  {
    title: 'Pharmaceuticals', icon: '💊',
    color: { bg: IC.pharma.bg, tx: IC.pharma.tx },
    items: [
      { name: 'Tablet Binder & Disintegrant Aid', desc: 'LBG functions as a wet binder in granulation and a tablet binder in direct compression formulations. At 2–10% w/w, it provides cohesive binding strength while facilitating water uptake for disintegration.' },
      { name: 'Controlled-Release Matrix', desc: 'LBG forms hydrophilic matrix tablets capable of sustaining drug release over 8–12 hours — the swelling viscous gel layer controls diffusion of soluble drugs. Compatible with APIs across pH 1.2–7.4.' },
      { name: 'Oral Suspensions & Liquid Formulations', desc: 'Low-viscosity LBG grades provide viscosity and suspension stability in oral pharmaceutical suspensions, syrups, and antacid formulations. Compatible with common preservatives and sweeteners.' },
      { name: 'Ophthalmic & Topical Formulations', desc: 'High-purity, low-protein LBG grades are used in ophthalmic viscosity-increasing agents and artificial tears, where its mucoadhesive properties extend corneal contact time and improve ocular drug bioavailability.' },
    ],
  },
  {
    title: 'Cosmetics & Personal Care', icon: '💄',
    color: { bg: IC.cosmetic.bg, tx: IC.cosmetic.tx },
    items: [
      { name: 'Moisturising Creams & Lotions', desc: 'LBG (0.2–0.8%) acts as a thickener and emulsion stabiliser in O/W moisturising creams and body lotions, providing a smooth, non-tacky skin feel and stable emulsion structure. INCI compliant.' },
      { name: 'Shampoos & Hair Conditioners', desc: 'LBG builds viscosity in shampoo systems and adds conditioning effects in rinse-off conditioners. Its galactomannan film-forming property on hair fibres improves combability and reduces static.' },
      { name: 'Face Serums & Gel Formulations', desc: 'LBG forms clear-to-slightly-hazy gels at 0.5–1.5% for face serums, eye gels, and aloe-based gel formulations. Lower viscosity grades (LV) are preferred for lightweight, fast-absorbing serum textures.' },
      { name: 'Sunscreen & SPF Emulsions', desc: 'LBG stabilises mineral and chemical UV-filter emulsions. Its thickening and film-forming on skin improves the substantivity of UV filters, potentially supporting SPF persistence. Compatible with silicone-based formulations.' },
    ],
  },
  {
    title: 'Pet Food & Animal Nutrition', icon: '🐾',
    color: { bg: IC.petfood.bg, tx: IC.petfood.tx },
    items: [
      { name: 'Wet Pet Food — Pâté & Loaf Formats', desc: 'LBG + κ-carrageenan synergistic gel is the industry standard binder in wet cat and dog food pâté and loaf formats. The LBG-carrageenan network binds meat or fish ingredients into a cohesive, sliceable loaf that retains shape after retort processing (121°C). Typical use: LBG 0.1–0.3% + carrageenan 0.15–0.3%.' },
      { name: 'Wet Pet Food — Chunk-in-Gravy & Jelly', desc: 'In chunk-in-gravy and chunk-in-jelly wet pet food formats, LBG thickens the surrounding sauce or jelly to provide visual appeal, sauce cling on meat chunks, and a high-moisture product perception. LBG + xanthan provides thixotropic gravy.' },
      { name: 'Pet Treats & Functional Snacks', desc: 'In semi-moist and soft pet treats, LBG acts as a binder and humectant-compatible thickener that maintains product softness during shelf life. Often used with glycerol for water activity control.' },
      { name: 'Animal Feed & Aquaculture Binders', desc: 'LBG is used as a natural binder in pelleted animal feed and aquaculture diets — providing pellet durability and water stability of aquatic feed pellets. At 0.2–0.5%, it improves pellet cohesion and reduces fines during handling.' },
    ],
  },
];

// Synergy section data
export const SYNERGY = [
  {
    partners: [
      { label: 'LBG', bg: IC.all.bg, tx: IC.all.tx },
      { label: '+', bg: 'transparent', tx: '#9A9488' },
      { label: 'κ-Carrageenan', bg: IC.all.bg, tx: IC.all.tx },
    ],
    effect: 'Gel firmness up to 5–10×',
    desc: 'LBG dramatically increases gel firmness and elasticity of kappa-carrageenan gels. Enables reduction of total hydrocolloid use while improving texture. Key application: processed cheese, dairy desserts, meat analogue binding, water gels.',
  },
  {
    partners: [
      { label: 'LBG', bg: IC.all.bg, tx: IC.all.tx },
      { label: '+', bg: 'transparent', tx: '#9A9488' },
      { label: 'Xanthan Gum', bg: IC.plantbased.bg, tx: IC.plantbased.tx },
    ],
    effect: 'Freeze-thaw stable elastic gel',
    desc: 'LBG + xanthan produces a soft elastic gel that survives freeze-thaw cycling without syneresis. Soft elastic body. Key applications: frozen plant-based products, salad dressings, sauces, pet food gravies, ice cream stabilizer blends.',
  },
  {
    partners: [
      { label: 'LBG', bg: IC.all.bg, tx: IC.all.tx },
      { label: '+', bg: 'transparent', tx: '#9A9488' },
      { label: 'ι-Carrageenan', bg: IC.cosmetic.bg, tx: IC.cosmetic.tx },
    ],
    effect: 'Soft elastic gel, fluid gel',
    desc: 'LBG modifies iota-carrageenan gels to produce softer, more elastic textures with improved freeze-thaw performance. Used in low-fat dairy desserts, plant-based yogurts, and confectionery gels.',
  },
  {
    partners: [
      { label: 'LBG', bg: IC.all.bg, tx: IC.all.tx },
      { label: '+', bg: 'transparent', tx: '#9A9488' },
      { label: 'Guar Gum', bg: IC.food.bg, tx: IC.food.tx },
    ],
    effect: 'Viscosity enhancement, cost optimisation',
    desc: 'LBG blended with guar gum in varying ratios provides cost-optimised viscosity solutions for dairy, beverages, and ice cream. Guar\'s cold-water solubility compensates for LBG\'s need for hot hydration.',
  },
];