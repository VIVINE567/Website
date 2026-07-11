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
  { icon: '🇪🇺', title: 'EU E410', sub: 'Regulation (EC) No 1333/2008' },
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
      { name: 'Bakery Fillings & Fruit Preparations', desc: 'In bake-stable fruit fillings, jams destined for bakery use, and croissant/pastry fillings, LBG combined with pectin or starch provides thermal stability (survives oven temperatures), syneresis resistance, and good mouthfeel. It prevents moisture migration into pastry layers during storage. Typical use: 0.1–0.4%.' },
      { name: 'Confectionery — Gels & Jellies', desc: 'LBG synergy with κ-carrageenan is used in confectionery water gels, jelly confectionery, and gummy products to produce elastic, non-brittle gel textures with improved mouthfeel vs. carrageenan alone. Also used in panning centres and deposited candy centres requiring controlled set times.' },
      { name: 'Beverages — Cloud & Mouthfeel', desc: 'Low-viscosity LBG grades add body and mouthfeel to fruit beverages, reduced-sugar drinks, and functional beverages without imparting gel structure. Processed at UHT temperatures where LBG fully hydrates, it remains stable in the final beverage at pH 3.5–5.0. Typical use: 0.02–0.1%.' },
      { name: 'Soups & Ready Meals', desc: 'In retorted and UHT-processed soups and ready meals, LBG provides viscosity and suspension stability for particulates (vegetable pieces, meat pieces). Its stability under prolonged thermal processing at 121 °C (retort conditions) makes it suitable for canned and pouch-packed ambient ready meal applications.' },
      { name: 'Gluten-Free Bakery Products', desc: 'In gluten-free bread, muffins, and cakes, LBG (0.3–0.8%) partially replaces gluten network functionality — providing dough cohesion, water retention, and crumb structure. Often blended with xanthan gum (LBG:xanthan 3:1 or 2:1) to optimise dough visco-elasticity and bread volume in rice flour and tapioca-based gluten-free formulations.' },
    ],
  },
  {
    title: 'Dairy & Frozen Desserts', icon: '🍦',
    color: { bg: IC.dairy.bg, tx: IC.dairy.tx },
    items: [
      { name: 'Ice Cream & Premium Frozen Desserts', desc: 'LBG is the most widely used ice cream hydrocolloid globally. At 0.1–0.2% with κ-carrageenan (0.01–0.02%), it forms a semi-structured network in the aqueous phase that restricts ice crystal recrystallisation during storage and temperature abuse. Benefits: smooth texture, improved overrun stability, longer heat-shock resistance, reduced sandiness. Standard blend: LBG 0.15% + carrageenan 0.015%.' },
      { name: 'Soft-Serve Ice Cream & Frozen Yogurt', desc: 'In soft-serve systems, LBG (0.05–0.15%) combined with guar gum improves draw temperature stability, body, and resistance to meltdown — allowing consistent dispensing across varying machine temperatures. In frozen yogurt, LBG stabilises the delicate protein-acid system against syneresis and ice crystal growth during freeze-thaw cycling in open-bar conditions.' },
      { name: 'Processed & Cream Cheese', desc: 'LBG + κ-carrageenan synergy is critical in processed cheese slices and blocks — producing firm, sliceable, meltable cheese texture. In cream cheese and spreadable cheese, LBG provides water-binding and body without excessive firmness. Typical blend: LBG 0.1–0.3% + κ-carrageenan 0.1–0.2%. Carrageenan alone gives brittle, spongy texture; LBG synergy produces elastic, smooth mouthfeel.' },
      { name: 'Dairy Desserts & Puddings', desc: 'In cold-set dairy desserts (panna cotta style, set creams, chilled puddings), LBG + carrageenan blends provide textures ranging from soft-set (spoonable) to firm (sliceable). LBG\'s contribution to the synergistic gel improves cohesiveness — the dessert holds shape on a plate without weeping or cracking. Typical total hydrocolloid level: 0.3–0.6%.' },
      { name: 'Yogurt & Fermented Dairy', desc: 'In stirred and set yogurt, LBG (0.05–0.2%) improves viscosity, creaminess, and serum separation resistance. Its non-ionic galactomannan structure is compatible with the acid-protein matrix of fermented dairy without destabilising protein at low pH (3.8–4.5). Used in full-fat and reduced-fat yogurt to compensate for mouthfeel loss when fat is reduced.' },
      { name: 'Whipped Cream & Dairy Toppings', desc: 'LBG stabilises whipped cream and non-dairy whipped toppings by providing a continuous phase viscosity that supports foam bubble stability. In UHT whipping cream, LBG (0.05–0.15%) prevents cream serum separation in the carton during shelf life and improves the overrun and foam stability achieved during whipping.' },
    ],
  },
  {
    title: 'Plant-Based Foods', icon: '🌱',
    color: { bg: IC.plantbased.bg, tx: IC.plantbased.tx },
    items: [
      { name: 'Oat, Almond & Coconut Milk Alternatives', desc: 'LBG (0.02–0.08%) stabilises plant-based milk emulsions against phase separation and adds creamy mouthfeel to thin plant-based beverage bases. Its non-ionic nature is compatible with the variable mineral and pH environment of different plant protein matrices (oat, almond, soy, pea, coconut). Often used with sunflower lecithin and gellan gum in premium plant-based milk formulations.' },
      { name: 'Vegan Ice Cream & Frozen Desserts', desc: 'In non-dairy ice cream (coconut milk, oat milk, pea protein base), LBG + xanthan gum (0.15–0.25% total) replicates the texture and meltdown profile of dairy ice cream. The LBG-xanthan gel matrix controls ice crystal growth, improves scoopability, and provides creamy mouthfeel without milk fat. Outperforms guar gum alone in freeze-thaw stability tests.' },
      { name: 'Plant-Based Yogurt Alternatives', desc: 'In coconut, almond, soy, and oat-based yogurt alternatives, LBG (0.1–0.3%) with pectin or starch provides the thick, spoonable texture consumers expect. LBG\'s water-holding capacity reduces syneresis during storage — a significant formulation challenge in plant-based fermented systems where protein gel networks are weaker than dairy casein.' },
      { name: 'Meat Analogues & Plant-Based Proteins', desc: 'LBG + carrageenan synergy is used in structured meat analogues (burgers, sausages, nuggets) to bind water, provide juiciness on cooking, and contribute to a cohesive bite structure. LBG improves the water retention of texturised vegetable protein (TVP) and soy protein concentrates — reducing cooking loss and improving perceived mouthfeel of vegan meat products.' },
      { name: 'Plant-Based Cheese Alternatives', desc: 'LBG + κ-carrageenan synergy is the primary texturising system for coconut oil-based and cashew-based vegan cheese slices and blocks. At 0.3–0.8% LBG with carrageenan, it produces firm-sliceable, meltable textures that mimic dairy processed cheese — a technically challenging achievement without dairy protein. The synergistic gel provides cohesive elasticity that allows slicing without crumbling.' },
    ],
  },
  {
    title: 'Pharmaceuticals', icon: '💊',
    color: { bg: IC.pharma.bg, tx: IC.pharma.tx },
    items: [
      { name: 'Tablet Binder & Disintegrant Aid', desc: 'LBG functions as a wet binder in granulation and a tablet binder in direct compression formulations. At 2–10% w/w, it provides cohesive binding strength while its hydrophilic galactomannan chains facilitate water uptake for disintegration. Used in tablets where natural/plant-derived excipients are preferred over synthetic binders (e.g. PVP or HPMC).' },
      { name: 'Controlled-Release Matrix', desc: 'LBG forms hydrophilic matrix tablets capable of sustaining drug release over 8–12 hours — the swelling viscous gel layer controls diffusion of soluble drugs. Its non-ionic character makes it compatible with a broad range of APIs across pH 1.2–7.4 (simulated GI conditions). Used as a natural, biodegradable alternative to HPMC in extended-release tablets for BCS Class I and III drugs.' },
      { name: 'Oral Suspensions & Liquid Formulations', desc: 'Low-viscosity LBG grades provide viscosity and suspension stability in oral pharmaceutical suspensions, syrups, and antacid formulations. Its pseudoplastic flow behaviour (shear-thinning) allows easy pouring and dosing. Compatible with common preservatives (sodium benzoate, potassium sorbate) and sweeteners used in oral liquid formulations.' },
      { name: 'Ophthalmic & Topical Formulations', desc: 'High-purity, low-protein LBG grades are evaluated in ophthalmic viscosity-increasing agents and artificial tears, where its mucoadhesive properties extend corneal contact time and improve ocular drug bioavailability. In topical creams and ointments, LBG acts as a thickener and film-former compatible with emollient systems.' },
    ],
  },
  {
    title: 'Cosmetics & Personal Care', icon: '💄',
    color: { bg: IC.cosmetic.bg, tx: IC.cosmetic.tx },
    items: [
      { name: 'Moisturising Creams & Lotions', desc: 'LBG (0.2–0.8%) acts as a thickener and emulsion stabiliser in O/W moisturising creams and body lotions, providing a smooth, non-tacky skin feel and stable emulsion structure. Its natural, plant-derived origin supports "natural" and "clean beauty" label positioning. Compatible with nonionic and anionic emulsifier systems including cetearyl alcohol and glyceryl stearate.' },
      { name: 'Shampoos & Hair Conditioners', desc: 'LBG builds viscosity in shampoo systems and adds conditioning effects in rinse-off conditioners. Its galactomannan film-forming property on hair fibres improves combability (wet and dry) and reduces static. Compatible with sulfate-based and sulfate-free surfactant systems. Typical use: 0.2–0.6% in shampoos, 0.3–0.8% in conditioners.' },
      { name: 'Face Serums & Gel Formulations', desc: 'LBG forms clear-to-slightly-hazy gels at 0.5–1.5% for face serums, eye gels, and aloe-based gel formulations. It provides a film-forming effect on skin that improves moisturisation retention and delivers a silk-like skin feel. Lower viscosity grades (LV) are preferred for lightweight, fast-absorbing serum textures.' },
      { name: 'Sunscreen & SPF Emulsions', desc: 'LBG stabilises mineral (zinc oxide / titanium dioxide) and chemical UV-filter emulsions. Its thickening and film-forming on skin improves the substantivity of UV filters on the skin surface, potentially supporting SPF persistence. Compatible with silicone-based sunscreen formulations when used at 0.2–0.5%.' },
    ],
  },
  {
    title: 'Pet Food & Animal Nutrition', icon: '🐾',
    color: { bg: IC.petfood.bg, tx: IC.petfood.tx },
    items: [
      { name: 'Wet Pet Food — Pâté & Loaf Formats', desc: 'LBG + κ-carrageenan synergistic gel is the industry standard binder in wet cat and dog food pâté and loaf formats. The LBG-carrageenan network binds meat or fish ingredients into a cohesive, sliceable loaf that retains its shape after retort processing (121°C), survives canning/pouch operations, and releases cleanly from the can. Typical use: LBG 0.1–0.3% + carrageenan 0.15–0.3%.' },
      { name: 'Wet Pet Food — Chunk-in-Gravy & Jelly', desc: 'In chunk-in-gravy and chunk-in-jelly wet pet food formats, LBG thickens the surrounding sauce or jelly to provide visual appeal, sauce cling on meat chunks, and a high-moisture product perception. LBG + xanthan provides thixotropic gravy that pours easily from the can but coats chunks in the bowl. Typical use: 0.1–0.4% in gravy systems.' },
      { name: 'Pet Treats & Functional Snacks', desc: 'In semi-moist and soft pet treats (chews, training treats, dental sticks), LBG acts as a binder and humectant-compatible thickener that maintains product softness during shelf life. LBG with glycerol provides water activity control and binder functionality in extruded and deposited soft treat formulations. Typical use: 0.3–0.8%.' },
      { name: 'Animal Feed & Aquaculture Binders', desc: 'LBG is used as a natural binder in pelleted animal feed and aquaculture diets — providing pellet durability, water stability of aquatic feed pellets, and improving the physical quality index (PDI) of feed pellets. At 0.2–0.5%, LBG improves pellet cohesion during extrusion and reduces fines in handling and distribution.' },
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
    desc: 'LBG + xanthan produces a thermoreversible, freeze-thaw stable gel — no syneresis on freeze-thaw cycling. Soft elastic body. Key applications: frozen plant-based products, salad dressings, sauces, pet food gravies, ice cream stabilizer blends.',
  },
  {
    partners: [
      { label: 'LBG', bg: IC.all.bg, tx: IC.all.tx },
      { label: '+', bg: 'transparent', tx: '#9A9488' },
      { label: 'ι-Carrageenan', bg: IC.cosmetic.bg, tx: IC.cosmetic.tx },
    ],
    effect: 'Soft elastic gel, fluid gel',
    desc: 'LBG modifies iota-carrageenan gels to produce softer, more elastic textures with improved freeze-thaw performance. Used in low-fat dairy desserts, plant-based yogurts, and confectionery gels requiring a smooth, non-brittle mouthfeel.',
  },
  {
    partners: [
      { label: 'LBG', bg: IC.all.bg, tx: IC.all.tx },
      { label: '+', bg: 'transparent', tx: '#9A9488' },
      { label: 'Guar Gum', bg: IC.food.bg, tx: IC.food.tx },
    ],
    effect: 'Viscosity enhancement, cost optimisation',
    desc: 'LBG blended with guar gum in varying ratios provides cost-optimised viscosity solutions for dairy, beverages, and ice cream. Guar\'s cold-water solubility compensates for LBG\'s need for hot hydration in formulations processed below 80 °C.',
  },
];

// "LBG vs. Guar Gum — choosing the right galactomannan"
export const GUAR_COMPARE = {
  cols: ['Property', 'Locust Bean Gum (LBG)', 'Guar Gum'],
  rows: [
    { property: 'Botanical source', lbg: 'Ceratonia siliqua (carob tree) — Mediterranean', guar: 'Cyamopsis tetragonoloba (guar plant) — India/Pakistan' },
    { property: 'E number / regulatory', lbg: 'E410 (EU) · GRAS (USA) · INS 410', guar: 'E412 (EU) · GRAS (USA) · INS 412' },
    { property: 'M:G ratio (mannose:galactose)', lbg: '~4:1 (less branched)', guar: '~2:1 (more branched)' },
    { property: 'Cold-water solubility', lbg: 'Partially swells; full hydration requires ≥ 80 °C', guar: 'Fully soluble in cold water', guarGood: true },
    { property: 'Hot hydration requirement', lbg: '≥ 80 °C for 10 min for full viscosity', guar: 'Cold dispersible; heating increases viscosity' },
    { property: 'Viscosity at 1% (fully hydrated)', lbg: '2,500–4,500 mPa·s (higher than guar)', guar: '2,000–4,000 mPa·s', lbgGood: true },
    { property: 'Synergy with κ-carrageenan', lbg: 'Strong — gel firmness up to 5–10× alone', guar: 'Weaker — less effective synergy due to higher branching', lbgGood: true },
    { property: 'Synergy with xanthan gum', lbg: 'Strong — elastic, freeze-thaw stable gel', guar: 'Moderate — some synergy, less freeze-thaw stable', lbgGood: true },
    { property: 'Freeze-thaw stability', lbg: 'Excellent (with xanthan blend)', guar: 'Moderate — syneresis may occur on freeze-thaw', lbgGood: true },
    { property: 'Ice crystal control (ice cream)', lbg: 'Excellent — industry standard for ice cream', guar: 'Good — often used as lower-cost partial replacement', lbgGood: true },
    { property: 'Texture contribution', lbg: 'Elastic, cohesive — preferred for premium textures', guar: 'Short, smooth flow — preferred for simple thickening' },
    { property: 'Price vs. guar gum', lbg: 'Premium (typically 3–5× guar gum price)', guar: 'Lower cost (higher-volume commodity gum)' },
    { property: 'Best applications', lbg: 'Ice cream, processed cheese, plant-based dairy, pet food loaves, premium sauces', guar: 'Dairy beverages, baked goods, sauces, ice cream (partial), paper, mining' },
  ],
  note: "Note: LBG and guar gum are often blended in commercial stabiliser systems — combining guar's cold-water solubility with LBG's superior synergistic gel properties — for cost-performance optimisation in ice cream, dairy desserts, and sauce applications.",
};