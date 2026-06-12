// Guar Gum regulatory badges and application deep-dive

// "Regulatory approvals & certifications"
export const REGULATORY = [
  { icon: '🇪🇺', title: 'EU E412', sub: 'EC No 1333/2008 · Regulation (EU) No 231/2012 (specifications)' },
  { icon: '🇺🇸', title: 'FDA 21 CFR 184.1339 / GRAS', sub: 'Generally Recognized As Safe — food & pharmaceutical use' },
  { icon: '🌍', title: 'JECFA / INS 412', sub: 'ADI: Not specified (safe at normal use levels)' },
  { icon: '📋', title: 'FCC (Food Chemicals Codex)', sub: 'Purity & quality specifications' },
  { icon: '💊', title: 'USP / NF (United States Pharmacopeia)', sub: 'Pharmaceutical-grade monograph' },
  { icon: '🇪🇺', title: 'Ph.Eur. (European Pharmacopoeia)', sub: 'Guar galactomannan monograph' },
  { icon: '☪️', title: 'Halal & Kosher', sub: 'Certifiable on request' },
  { icon: '🇮🇳', title: 'FSSAI Approved', sub: 'Food Safety and Standards Authority of India' },
];

// "Application deep-dive by industry". `tag` renders the pill beside the industry title.
export const APP_DETAILS = [
  {
    title: 'Food & Beverage', icon: '🍽️',
    color: { bg: '#EAF5E0', tx: '#2C5F0E' },
    tag: { text: 'Major Application', bg: '#2C5F0E', tx: '#fff' },
    items: [
      { name: 'Sauces, Ketchup, and Salad Dressings', desc: 'Guar Gum at 0.1–0.5% provides viscosity, body, and pseudoplastic flow in pourable sauces, ketchup, and salad dressings. Its shear-thinning behaviour delivers easy pouring from the bottle followed by immediate viscosity recovery on the food, preventing runoff. It suspends herb particles, spice fragments, and vegetable pieces uniformly throughout the product shelf life.' },
      { name: 'Ice Cream and Frozen Desserts', desc: 'Guar Gum at 0.1–0.3% (often combined with locust bean gum or carrageenan) improves the body and chewiness of ice cream, controls ice crystal growth during temperature fluctuations, and improves meltdown resistance. Its water-binding capacity reduces the free water available for ice crystal nucleation, extending smooth texture across the product shelf life.' },
      { name: 'Bakery Products — Bread, Cakes, and Gluten-Free Products', desc: 'Guar Gum at 0.1–0.5% in bread and cake formulations improves dough water retention, increases loaf volume, delays staling, and improves crumb softness. In gluten-free bakery products, Guar Gum at 0.5–1.5% is the primary structure-builder, replacing the viscoelastic network of gluten in rice flour, potato starch, and corn flour-based formulations.' },
      { name: 'Beverages — Juices, Nectars, and Smoothies', desc: 'Guar Gum at 0.05–0.2% improves the mouthfeel and viscosity of beverages, prevents sedimentation of pulp and fruit particles, and provides the body consumers associate with premium, freshly-made juice. It is cold-soluble and does not require heat processing for dispersion, making it compatible with cold-fill and cold-process beverage manufacturing.' },
      { name: 'Dairy Products — Yoghurt, Flavoured Milk, Cheese', desc: 'Guar Gum at 0.05–0.3% in yoghurt and dairy desserts reduces syneresis (whey separation) and improves body and creaminess. In processed cheese and dairy spreads, it acts as a water binder and texture stabiliser. In flavoured milk, it provides a slight viscosity increase that improves mouthfeel perception and particle suspension.' },
      { name: 'Instant Soups, Noodles, and Convenience Foods', desc: 'Guar Gum at 0.1–0.5% in instant soup mixes, cup noodles, and convenience food seasonings provides rapid thickening on reconstitution with hot water, uniform mouth-coating, and particle suspension. Its ability to hydrate quickly in hot water is especially valuable in instant food formats requiring fast preparation times.' },
      { name: 'Meat Products and Processed Foods', desc: 'Guar Gum at 0.1–0.5% in sausages, meat patties, and ready meals improves water retention during cooking, reduces shrinkage and cook-out loss, and provides a softer, juicier texture in the final cooked product. It also improves freeze-thaw stability in pre-cooked frozen meat products.' },
      { name: 'Confectionery and Gummy Products', desc: 'Guar Gum at 0.5–2.0% in gummy confectionery, jelly sweets, and chewy candies contributes to the characteristic chew, water retention, and staling resistance of these products. It extends shelf life by binding free water that would otherwise migrate out of the product and cause surface stickiness or crystallisation.' },
    ],
  },
  {
    title: 'Oil & Gas Drilling', icon: '🛢️',
    color: { bg: '#FBF3E2', tx: '#7C4A0E' },
    tag: { text: 'Largest Volume Application', bg: '#7C4A0E', tx: '#fff' },
    items: [
      { name: 'Water-Based Drilling Fluid Viscosification', desc: 'Guar Gum at 0.5–3.0 pounds per barrel (1.4–8.6 kg/m³) is used as a primary viscosifier in freshwater and low-salinity water-based drilling muds. It provides the yield point and plastic viscosity needed to suspend drill cuttings, lift them to surface, and carry them past restrictions in the annulus. Guar Gum is particularly favoured in shallow to medium-depth wells (below 120°C bottomhole temperature) due to its low cost and easy availability.' },
      { name: 'Hydraulic Fracturing — Base Gel Viscosifier', desc: "Guar Gum is the world's dominant hydraulic fracturing fluid polymer, used at 15–40 pounds per 1,000 gallons (1.8–4.8 kg/m³). The guar base gel suspends proppant (sand or ceramic beads) and transports it into the hydraulic fractures created in the formation, where it holds the fracture open after pressure release. Guar Gum fracturing fluids are used in shale oil and gas, tight gas sands, coalbed methane, and conventional reservoir stimulation globally." },
      { name: 'Cross-Linked Fracturing Fluids', desc: 'For deep, high-temperature wells, Guar Gum base gel is cross-linked with borate (for temperatures below 130°C at pH 8.5–11), zirconate, or titanate cross-linkers to produce viscoelastic gels with 10–50 times the viscosity of the base gel — essential for carrying proppant at pumping rates of 50–150 barrels per minute. After fracturing, enzyme breakers (hemicellulase, galactomannanase) are added to the fluid to degrade the guar polymer and recover formation permeability.' },
      { name: 'Fast Hydrating Guar Gum (FHG) — Fracturing Operations', desc: 'Standard Guar Gum requires 2+ hours for full viscosity development. Fast Hydrating Guar Gum (FHG grade) achieves full viscosity in 5–10 minutes at ambient temperature, enabling real-time mixing in continuous fracturing operations at the wellsite. FHG grade is slurriable in diesel at 50% solids concentration, providing pumpable, fish-eye-free hydration through standard fracturing unit equipment — the preferred format for most commercial fracturing operations.' },
      { name: 'Completion and Workover Fluids', desc: 'Guar Gum at 0.5–2.0 pounds per barrel is used in well completion brine fluids and workover (well-intervention) fluids as a viscosifier to suspend lost circulation material pills, carry gravel packs into perforations, and provide bridging viscosity during drilling-in through productive formations. The polymer is designed to be cleanly degraded by enzyme breakers before the well is put on production, leaving minimal polymer residue in the formation.' },
      { name: 'Guar-Based Lost Circulation Material Pills', desc: 'High-viscosity Guar Gum gel pills at 2–6 pounds per barrel are pumped into the drillstring and spotted across lost circulation zones to provide a temporary viscous plug that reduces fluid loss into highly permeable or fractured formations. The gel breaks cleanly with enzyme breakers after the lost circulation problem is resolved and drilling resumes.' },
    ],
  },
  {
    title: 'Pharmaceuticals', icon: '💊',
    color: { bg: '#EAF0FB', tx: '#1A3A6C' },
    items: [
      { name: 'Tablet Binder and Disintegrant', desc: 'Guar Gum at 2–8% weight/weight serves as a tablet binder in wet granulation, providing good compressibility and binding strength for cohesive, robust tablet formulations. In tablet disintegration, its rapid water absorption and swelling (swelling index 36 mL/g) accelerates tablet breakdown and drug dissolution — particularly useful in immediate-release formulations for poorly soluble active pharmaceutical ingredients.' },
      { name: 'Sustained-Release and Controlled-Release Matrices', desc: 'Guar Gum at 20–60% weight/weight forms the hydrophilic matrix in sustained-release tablet formulations. On contact with gastrointestinal fluid, the guar matrix swells and forms a viscous gel layer (hydrophilic swelling matrix) that controls the rate of drug diffusion from the tablet core, extending release over 8–24 hours. This approach is used for antihypertensives, analgesics, and other drugs requiring once-daily or twice-daily dosing.' },
      { name: 'Oral Suspensions and Syrups — Suspending Agent', desc: 'Guar Gum at 0.1–0.5% in oral liquid pharmaceutical formulations provides viscosity and pseudoplastic flow that maintains uniform suspension of insoluble active pharmaceutical ingredients between doses. Its cold-water solubility enables cold-process manufacturing without high-temperature pasteurisation steps that could degrade heat-sensitive active pharmaceutical ingredients.' },
      { name: 'Laxative and Dietary Fibre Supplement', desc: 'Partially hydrolysed guar gum (PHGG) is a clinically established dietary fibre supplement for the management of constipation, irritable bowel syndrome, and for prebiotic effect in gut microbiome support. PHGG undergoes controlled enzymatic depolymerisation to reduce viscosity to a level that allows easy dissolution in water, while retaining the dietary fibre and prebiotic properties of the parent galactomannan. It is tasteless, odourless, and fully soluble — ideal for powder sachet and ready-to-drink fibre supplement formats.' },
      { name: 'Ophthalmic Solutions and Nasal Preparations', desc: 'Pharmaceutical-grade Guar Gum at 0.1–0.5% provides viscosity enhancement and prolonged contact time in ophthalmic drops and nasal sprays, reducing drainage from the eye or nasal cavity and increasing the bioavailability of the active ingredient. It is non-irritant, biocompatible, and compatible with the major antimicrobial preservatives used in multidose ophthalmic formulations.' },
      { name: 'Capsule Filling and Granulation Binder', desc: 'Guar Gum at 0.5–3.0% in hard gelatin and hydroxypropyl methylcellulose capsule fill formulations acts as a binder in dry granulation (roller compaction) and as a flow aid in powder blend capsule filling, improving the compressibility and uniformity of granule-filled capsule formulations — particularly for high-dose herbal and nutraceutical products.' },
    ],
  },
];
