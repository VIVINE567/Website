// Carrageenan synergy, application deep-dive, regulatory, SEO
import { IC } from './carrageenanContent';

export const SYNERGY = [
  {
    partners: [
      { label: 'κ-Carrageenan', bg: '#E4EEF8', tx: '#0A3A5A' },
      { label: 'Locust Bean Gum', bg: '#F5EED8', tx: '#6B4A10' },
    ],
    effect: 'Gel firmness up to 5–10× — elastic texture',
    desc: 'LBG intercalates into κ-carrageenan helix junctions, producing elastic, cohesive gels far firmer than carrageenan alone. Key application: processed cheese, dairy desserts, meat analogues, wet Animal Nitrition. Use ratio: κ-carrageenan:LBG 1:1 to 3:1.',
  },
  {
    partners: [
      { label: 'κ-Carrageenan', bg: '#E4EEF8', tx: '#0A3A5A' },
      { label: 'KCl (Potassium Chloride)', bg: '#FEF9EC', tx: '#7A5C00' },
    ],
    effect: 'Increased gel strength, higher melting temperature',
    desc: 'Potassium ions are the primary activator for κ-carrageenan gelation. Adding 0.1–0.3% KCl to kappa systems significantly increases gel strength and raises the gel melting temperature — exploited in processed meat injection brines and Animal Nitrition formulations.',
  },
  {
    partners: [
      { label: 'κ-Carrageenan', bg: '#E4EEF8', tx: '#0A3A5A' },
      { label: 'Casein (milk protein)', bg: '#F0E8F8', tx: '#401A90' },
    ],
    effect: 'Unique dairy stabilisation at 0.01–0.025%',
    desc: "Carrageenan's anionic sulphate groups interact with positively charged casein micelles in milk, forming a weak protein-polysaccharide network. This prevents cocoa particle settling in chocolate milk, improves body and mouthfeel in dairy beverages, and stabilises ice cream against heat shock — at concentrations far below any other hydrocolloid.",
  },
  {
    partners: [
      { label: 'ι-Carrageenan', bg: '#E8F4F8', tx: '#0A3A4A' },
      { label: 'κ-Carrageenan', bg: '#F8E8F2', tx: '#781A60' },
    ],
    effect: 'Tunable gel texture — from firm-brittle to soft-elastic',
    desc: 'Blending kappa and iota carrageenan in varying ratios allows precise tuning of gel texture — from firm, sliceable (high κ) to soft, spoonable (high ι) — and freeze-thaw stability. Used in dairy desserts, flavoured yogurts, and restructured meat products requiring specific rheological targets.',
  },
];

export const APP_DETAILS = [
  {
    icon: '🥤', title: 'Food & Beverage', color: IC.food,
    items: [
      { name: 'Chocolate Milk & Flavoured Dairy Beverages', desc: 'Kappa and lambda carrageenan at 0.01–0.025% suspend cocoa particles and prevent fat separation in chocolate milk, strawberry milk, and flavoured dairy beverages through their unique interaction with casein micelles. Carrageenan is unmatched in dairy beverages at these ultra-low concentrations — the gold standard globally for chocolate milk stabilisation.' },
      { name: 'Desserts & Puddings', desc: 'Kappa-carrageenan at 0.3–0.5% forms firm, sliceable, heat-reversible gels for jelly desserts, water gels, aspic, and milk puddings. Iota-carrageenan at 0.2–0.4% produces spoonable dairy desserts and panna cotta-style gels. The κ/ι blend ratio precisely controls texture from pourable (low κ) to sliceable (high κ).' },
      { name: 'Processed Foods & Ready Meals', desc: 'In retorted soups, sauces, and ready meals, carrageenan builds viscosity and suspension stability before and after thermal processing at 121 °C. Its stability under prolonged retort conditions and resistance to acid hydrolysis at neutral-to-alkaline pH makes it compatible with a broad range of UHT and canned food systems.' },
      { name: 'Bakery Fillings & Jams', desc: 'Kappa-carrageenan in combination with sugar and acid provides gel structure in fruit fillings, bakery jams, and confectionery gels — offering a rapid set at higher temperatures than pectin-based systems. Useful in reduced-sugar formulations where pectin requires high sugar/acid conditions that carrageenan does not.' },
      { name: 'Sauces, Dressings & Condiments', desc: 'Lambda-carrageenan builds pseudoplastic viscosity in sauces, salad dressings, and condiments without gelling — providing pour-then-cling rheology for tomato-based sauces, hot sauces, and cream-based dressings. Compatible with the acidic pH (3.5–5) of vinegar-based dressings when used with care and appropriate pH buffering.' },
    ],
  },
  {
    icon: '🍦', title: 'Dairy & Frozen Desserts', color: IC.dairy,
    items: [
      { name: 'Ice Cream & Frozen Desserts', desc: 'Kappa-carrageenan at 0.01–0.025% with LBG (0.1–0.2%) provides the industry-standard stabiliser system for ice cream: protein network stabilisation prevents whey-off during freezing, limits ice crystal recrystallisation on temperature fluctuation, and improves heat-shock resistance. The κ-carrageenan concentration is kept very low (0.01–0.02%) to avoid sandiness from excessive protein interaction.' },
      { name: 'Flavoured Milk & UHT Dairy Beverages', desc: 'Carrageenan (κ or λ, 0.01–0.03%) stabilises flavoured milks against fat separation and protein destabilisation during UHT processing (135–142 °C). In UHT chocolate milk, carrageenan provides the only regulatory-approved, technically effective, low-cost solution for cocoa particle suspension with no effect on heat stability of the milk protein system.' },
      { name: 'Yogurt & Fermented Dairy', desc: 'Iota-carrageenan (0.05–0.2%) improves body, creaminess, and serum separation resistance in stirred yogurt. Its compatibility with the acidic protein matrix (pH 3.8–4.5) of fermented dairy, and its freeze-thaw stability, make it the preferred carrageenan type for yogurt applications — particularly low-fat and reduced-sugar yogurts where texture compensation is needed.' },
      { name: 'Processed & Cream Cheese', desc: 'The κ-carrageenan + LBG synergistic system (0.2–0.5% total) is the core texturising blend for processed cheese slices, cheese blocks, and spreadable cheeses. Carrageenan provides the initial firmness and protein interaction; LBG modifies the gel to be elastic and cohesive — producing sliceable, meltable processed cheese textures that dairy fat and starch alone cannot achieve.' },
      { name: 'Infant Formula', desc: 'Low-molecular-weight, high-purity kappa-carrageenan is used in ready-to-feed (RTF) infant formula at 0.01–0.03% to prevent fat and protein separation during shelf life. Carrageenan used in infant formula must meet strict purity specifications — undegraded, native carrageenan only — and comply with Codex Alimentarius infant formula standards and EU Regulation (EC) No 609/2013.' },
      { name: 'Dairy Desserts, Panna Cotta & Flans', desc: 'Kappa or κ/ι blends at 0.25–0.6% produce dairy desserts ranging from firm, sliceable flans to soft, spoonable set creams. The synergy with milk casein produces smoother, less brittle gels than carrageenan in water alone — reducing syneresis and improving the clean slice/release from moulds that premium dairy desserts require.' },
    ],
  },
  {
    icon: '🥩', title: 'Meat & Poultry Processing', color: IC.meat,
    items: [
      { name: 'Cooked Ham & Injected Whole Muscle Meats', desc: 'Kappa-carrageenan (0.1–0.3% in final product) is injected into whole muscle ham via brine injection. On cooking, carrageenan forms a heat-stable, water-binding gel network within the muscle structure — reducing cook loss from 10–15% (untreated) to 3–8%, improving sliceability, and providing the characteristic moist, cohesive texture of premium cooked ham. Carrageenan is approved in ham in all major markets.' },
      { name: 'Sausages & Emulsified Meat Products', desc: 'In emulsion sausages (frankfurters, bologna, mortadella), kappa-carrageenan (0.2–0.5%) acts as a fat replacer and water binder — providing cook yield improvement, firmer bite, and improved sliceability in reduced-fat formulations. Its gel forms in the sausage matrix during cooking, entrapping water that would otherwise be released as purge during storage and display.' },
      { name: 'Luncheon Meats & Reformed Products', desc: 'In reformed and restructured meat products (luncheon meat, chicken roll, turkey roll), carrageenan binds meat pieces together by forming a gel between muscle pieces during cooking. The carrageenan gel acts as a "meat glue," providing the clean-slice texture and cohesive structure that distinguishes reformed meat from loose-fill products. Typical use: 0.2–0.4% in final product.' },
      { name: 'Marinated & Seasoned Poultry', desc: 'Carrageenan brine injection in seasoned poultry (chicken breast, turkey) improves marinade retention, reduces cook loss, and maintains moisture in the finished product during display and consumer reheating. It also improves the surface appearance of intact poultry products by reducing gel exudate (jelly) formation in the pack. Typical use in injection brine: 0.5–1.5% brine concentration.' },
    ],
  },
  {
    icon: '🌱', title: 'Plant-Based Foods & Beverages', color: IC.plantbased,
    items: [
      { name: 'Oat, Almond, Soy & Coconut Milk Alternatives', desc: 'Lambda and kappa carrageenan (0.02–0.08%) stabilise plant-based milk emulsions against phase separation and fat globule flotation. In oat milk, carrageenan provides creamy mouthfeel and suspension stability for oat particles. In barista-grade plant milks, carrageenan contributes to the foam stability and steam frothing performance that consumers demand for coffee applications.' },
      { name: 'Vegan Cheese & Dairy-Free Cheese Alternatives', desc: 'The κ-carrageenan + LBG synergistic system is the primary texturising blend for coconut oil-based and starch-based vegan cheese slices and blocks. Carrageenan (0.2–0.6%) provides the protein-like network interactions absent in plant-based systems, producing firm, sliceable, and meltable vegan cheese textures. Critical for achieving dairy-equivalent melt behaviour in plant-based cheese for hot food applications.' },
      { name: 'Plant-Based Meat Analogues', desc: 'Kappa-carrageenan (0.1–0.4%) in plant-based burgers, nuggets, and sausages acts as a water binder and gel-former in the texturised vegetable protein (TVP) or pea protein matrix. It reduces cooking loss, improves juiciness perception, and contributes to the cohesive bite structure that consumers compare to animal meat. Also aids in gel binding of multi-component plant protein systems.' },
      { name: 'Plant-Based Yogurt & Dessert Alternatives', desc: 'Iota-carrageenan (0.1–0.3%) with pectin or starch provides spoonable, creamy texture in coconut, soy, and oat-based yogurt alternatives. Carrageenan improves syneresis resistance during storage — a critical challenge in fermented plant-based systems where protein gel networks are weaker than dairy casein. It is compatible with the acidic pH (3.8–4.5) of plant-based fermented products.' },
    ],
  },
  {
    icon: '💊', title: 'Pharmaceuticals', color: IC.pharma,
    items: [
      { name: 'Oral Suspensions & Syrups', desc: 'Lambda and iota carrageenan (0.1–0.5%) provide pseudoplastic viscosity and suspension stability in oral pharmaceutical suspensions — antacids, antibiotic suspensions, and paediatric liquid formulations. The carrageenan viscous network suspends insoluble drug particles at rest while allowing easy pouring and accurate dosing when the product is shaken and poured. Compatible with a wide range of APIs, sweeteners, and preservatives used in oral liquid formulations.' },
      { name: 'Tablet Binder & Controlled-Release Matrix', desc: 'Kappa-carrageenan functions as a hydrophilic matrix polymer in extended-release tablets, forming a gel layer on tablet surface contact with GI fluid — controlling API diffusion over 8–24 hours. Its ionic character (anionic sulphate groups) enables pH-sensitive drug release modulation. Used as a natural, plant-derived alternative to HPMC in sustained-release formulations for BCS Class I and III drugs.' },
      { name: 'Mucoadhesive Gels & Topical Formulations', desc: 'High-purity carrageenan grades form mucoadhesive gels for nasal, vaginal, and ophthalmic drug delivery — the anionic sulphate groups interact with positively charged mucosal glycoproteins, extending drug residence time on mucous membranes. Used in intranasal and intravaginal gel formulations where prolonged contact time improves local drug bioavailability.' },
      { name: 'Pharmaceutical Research & Drug Delivery', desc: 'Carrageenan is used as a standard pro-inflammatory agent in preclinical in vivo models of inflammation (carrageenan-induced paw oedema model in rats) — a key tool in anti-inflammatory drug evaluation. High-purity RC meeting pharmacopoeial specifications is required for these research applications to ensure reproducible inflammatory responses.' },
    ],
  },
  {
    icon: '💄', title: 'Cosmetics & Personal Care', color: IC.cosmetic,
    items: [
      { name: 'Toothpaste & Oral Care Products', desc: 'Lambda-carrageenan is a key binder and thickener in toothpaste formulations — providing the characteristic extrudable, non-slumping rheology that holds toothpaste on the brush. It is compatible with fluoride salts, abrasives (calcium carbonate, silica), humectants (sorbitol, glycerol), and anionic surfactants (SDS) used in standard toothpaste formulations. Typical use: 0.5–1.5% in toothpaste.' },
      { name: 'Creams & Moisturising Lotions', desc: 'Iota and lambda carrageenan (0.1–0.5%) thicken and stabilise O/W emulsions in moisturising creams, body lotions, and hand creams. Its film-forming property on skin provides a smooth, non-greasy afterfeel and contributes to moisturisation by reducing transepidermal water loss. Natural origin supports "natural" and "clean beauty" label positioning. INCI name: Carrageenan.' },
      { name: 'Shampoos & Hair Conditioners', desc: 'Carrageenan builds viscosity in shampoo formulations and imparts a conditioning, de-tangling effect in rinse-off conditioners. Its anionic character interacts with the hair surface (positively charged when damaged), providing a film-forming effect that reduces friction, improves combability, and adds shine. Compatible with sulfate-based and sulfate-free surfactant systems. Typical use: 0.2–0.6%.' },
      { name: 'Body Wash, Shower Gels & Cleansers', desc: 'Lambda-carrageenan builds viscosity in surfactant-based body washes and shower gels, providing a luxurious "creamy" flow profile at low concentrations (0.1–0.3%). Its compatibility with high-surfactant systems (SLES, betaine, sulfosuccinate) and electrolyte tolerance (from carrageenan\'s anionic character) make it more stable than many other natural thickeners in these systems.' },
    ],
  },
  {
    icon: '🐾', title: 'Animal Nitrition & Animal Nutrition', color: IC.petfood,
    items: [
      { name: 'Wet Cat & Dog Food — Pâté & Loaf Formats', desc: 'Kappa-carrageenan (SRC/PES, E407a, 0.2–0.4%) is the industry-standard gelling agent for retorted wet Animal Nitrition in pâté and loaf format. When blended with LBG (0.1–0.3%), it forms the classic pâté gel that binds meat and fish ingredients into a cohesive, sliceable loaf surviving 121°C retort sterilisation — emerging from the can clean-sliced and intact. The κ-carrageenan + LBG system is unrivalled in wet Animal Nitrition manufacture for performance and cost-efficiency.' },
      { name: 'Wet Animal Nitrition — Chunk-in-Jelly & Chunk-in-Gravy', desc: 'In jelly-format wet Animal Nitrition, kappa-carrageenan forms the surrounding jelly that holds meat chunks in suspension — providing visual appeal, moisture, and product integrity in the can. In gravy formats, lower carrageenan levels (0.05–0.15%) with starch or xanthan thicken the sauce and provide cling on meat pieces. Both formats rely on carrageenan\'s retort stability and controlled gel formation on cooling.' },
      { name: 'Pet Treats & Semi-Moist Snacks', desc: 'In semi-moist pet treats and chews, carrageenan (0.2–0.5%) acts as a water binder and texture modifier, maintaining the characteristic soft, chewy texture throughout shelf life. Carrageenan\'s water-holding gel prevents moisture migration and drying out — extending the soft texture that pets and pet owners prefer in treat products.' },
      { name: 'Veterinary Liquid Formulations', desc: 'High-purity carrageenan grades are used in veterinary oral suspensions and liquid animal health products as viscosity builders and suspension agents — particularly for antibiotic and antiparasitic suspensions in companion animal medicine. Functions and specifications mirror pharmaceutical applications in human medicine.' },
    ],
  },
];

export const REGULATORY = [
  { icon: '🇪🇺', title: 'EU E407 / E407a', sub: 'Regulation (EC) No 1333/2008' },
  { icon: '🇺🇸', title: 'FDA GRAS', sub: '21 CFR 172.620 / 172.655' },
  { icon: '🌍', title: 'JECFA INS 407 / 407a', sub: 'ADI "not specified"' },
  { icon: '📋', title: 'FCC compliant', sub: 'Food Chemicals Codex' },
  { icon: '🌿', title: 'Non-GMO / Vegan', sub: 'Gluten-free · Natural' },
  { icon: '🕌', title: 'Halal / Kosher', sub: 'Certifiable on request' },
  { icon: '📄', title: 'TDS / SDS / COA', sub: 'Full documentation available' },
];

export const SEO_TITLE = 'Product description';
export const SEO_PARAS = [
  '<strong>Carrageenan</strong> (CAS 9000-07-1, E407 / E407a, INS 407 / INS 407a) is a family of natural, high-molecular-weight sulphated polysaccharides extracted from specific species of red seaweed (Rhodophyta) — principally <em>Eucheuma cottonii</em> (primary source of kappa-carrageenan), <em>Eucheuma spinosum</em> (iota-carrageenan), and <em>Chondrus crispus</em> / <em>Gigartina</em> species (lambda-carrageenan and mixed-type extracts). The three commercially important types — kappa (κ), iota (ι), and lambda (λ) — differ in their degree of sulphation, helical conformation, and gelation behaviour, enabling precise functional tuning for each application.',
  '<strong>Kappa-carrageenan</strong> carries approximately 20–25% sulphate and forms firm, brittle, thermoreversible gels activated by potassium ions (K⁺) — gelling at ~40°C and melting at ~60°C. It is the most widely used carrageenan type globally, deployed in dairy products, chocolate milk, processed cheese, ice cream, meat processing, plant-based foods, Animal Nitrition, and cosmetics. <strong>Iota-carrageenan</strong> (28–35% sulphate) forms soft, elastic, freeze-thaw stable gels activated by calcium ions (Ca²⁺) — preferred for dairy desserts, infant formula, cosmetic gels, and applications requiring no syneresis on freeze-thaw cycling. <strong>Lambda-carrageenan</strong> (32–38% sulphate) is the most sulphated type, does not gel under any conditions, and provides cold-process pseudoplastic thickening in dairy beverages, dressings, sauces, and cosmetic formulations. In practice, commercial carrageenan products are often standardised blends of these types to achieve specific gel texture, onset temperature, and rheological targets.',
  'Carrageenan is produced in two commercial forms distinguished by regulatory status: <strong>Refined Carrageenan (RC, E407)</strong> — produced by alcohol or potassium chloride precipitation of hot aqueous seaweed extracts, yielding ≥ 97% carrageenan on a dry basis with acid-insoluble residue (cellulose) ≤ 2%; and <strong>Semi-Refined Carrageenan (SRC) / Processed Eucheuma Seaweed (PES, E407a)</strong> — produced by hot alkali treatment of whole seaweed without full purification, retaining 8–15% cellulose from the seaweed cell wall. RC (E407) is used in food, dairy, pharmaceuticals, and cosmetics; SRC/PES (E407a) is the cost-effective choice for wet Animal Nitrition, processed meat, and industrial food applications.',
  "Carrageenan's defining commercial advantage in the <strong>dairy industry</strong> is its unique electrostatic interaction with casein micelles — enabling stabilisation of chocolate milk at 0.01–0.025%, far below the level of any other hydrocolloid, with no detectable viscosity increase. In ice cream, κ-carrageenan (0.01–0.02%) combined with locust bean gum (0.1–0.2%) provides the industry-standard stabiliser system for ice crystal control, heat-shock resistance, and overrun stability. In <strong>processed meat</strong>, κ-carrageenan at 0.1–0.5% improves cook yield by 5–15% through water binding in ham, sausage, and reformed meat systems. In <strong>plant-based foods</strong>, the κ-carrageenan + LBG synergistic gel system replicates dairy-equivalent textures in vegan cheese and plant-based meat analogues. In <strong>cosmetics</strong>, lambda-carrageenan is the standard thickener and binder in toothpaste globally.",
  '<strong>VIVINE International</strong> supplies Carrageenan in refined food grade (E407), semi-refined / PES grade (E407a), pharma grade, and cosmetic grade — in kappa, iota, lambda, and standardised commercial blend formulations. Full Technical Data Sheets (TDS), Safety Data Sheets (SDS), Certificates of Analysis (COA), and compliance documentation are available on request. Halal and Kosher certification available. Contact VIVINE International for samples, technical consultation, formulation support, and quotation.',
];

export const FOOTER_NOTE = 'Gel strength values are indicative. Actual performance is highly dependent on carrageenan type (κ/ι/λ), grade (RC/SRC), cation concentration (K⁺/Ca²⁺), temperature, pH, and the presence of synergistic hydrocolloids (LBG, xanthan) and proteins (casein, whey). Contact VIVINE International for grade-specific TDS, SDS, COA, samples, and formulation guidance.';
