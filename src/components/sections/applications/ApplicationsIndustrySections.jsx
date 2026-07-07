'use client';

import IndustrySectionBlock from './IndustrySectionBlock';

// ─── All application data from VIVINE-applications.html ──────────────────────

const FOOD_CARDS = [
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783148198/applications/confectionery_ww3woj.png', label: 'Confectionery', desc: 'Gelling and texturising agents for gummies, jellies, marshmallows and sugar-coated products. Carrageenan, alginates.', tag: 'Carrageenan · Gellan Gum · Pectin' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783148092/applications/jelly-pudding_w9yo6p.png', label: 'Jelly & Pudding', desc: 'Precision gelation, heat stability and glossy clarity in dessert gels and pudding systems.', tag: 'Carrageenan · Pectin · Gellan Gum' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783147843/applications/dairy_iag59y.png', label: 'Dairy & Dairy Alternatives', desc: 'Syneresis prevention, body and mouthfeel in yoghurts, cheese, cream and plant-based dairy.', tag: 'Carrageenan · Sodium CMC · Guar Gum' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783148028/applications/frozen-desserts_cor8gf.png', label: 'Frozen Desserts & Ice Cream', desc: 'Ice crystal control, overrun stability, heat-shock resistance and creaminess enhancement.', tag: 'Locust Bean Gum (LBG) · Guar Gum · Carrageenan · Sodium CMC' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783147825/applications/bakery_qnjajg.png', label: 'Bakery', desc: 'Moisture retention, crumb softness, freeze-thaw stability and gluten-free texture systems.', tag: 'Sodium CMC · Xanthan Gum · Guar Gum · HPMC' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783148110/applications/meat-protein_tuwzsc.png', label: 'Meat & Protein', desc: 'Binding, water retention, injection brine stability and texture in processed meats and analogues.', tag: 'Carrageenan · Sodium Alginate · Konjac Gum' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783148135/applications/sauces-dressings_s7i7uu.png', label: 'Sauces & Dressings', desc: 'Emulsion stability, pour-control viscosity and spoonable texture in ambient and refrigerated products.', tag: 'Xanthan Gum · Sodium CMC · Pectin' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783147727/applications/beverages_gqcxiy.png', label: 'Beverages', desc: 'Pulp suspension, foam stabilisation, clarity and mouthfeel in juice, dairy and energy drinks.', tag: 'Sodium CMC · Xanthan Gum · Carrageenan · Pectin' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783147755/applications/beer-brewing_fqtztd.png', label: 'Beer & Brewing', desc: 'Clarification, foam stability, haze prevention and process filtration aids.', tag: 'Carrageenan · Propylene Glycol Alginate (PGA)' },
];

const PHARMA_CARDS = [
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783148142/applications/tablet-excipients_jcoagz.png', label: 'Tablet Excipients', desc: 'Binders, disintegrants and matrix-formers for immediate and controlled-release tablets. HPMC, CMC and alginates.', tag: 'HPMC · Sodium CMC · Croscarmellose Sodium · Sodium Alginate' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783148155/applications/vegan-capsule-shells_bygr9v.png', label: 'Vegan Capsule Shells', desc: 'HPMC-based hard capsule shells as a plant-derived alternative to bovine gelatin — suitable for vegetarian and Halal markets.', tag: 'HPMC' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783148146/applications/wound-care-medical_1_rn9tvr.jpg', label: 'Oral Liquid & Syrup Formulations', desc: 'Suspension stability, viscosity control, mouthfeel enhancement and active ingredient uniformity for oral liquid and syrup formulations.', tag: 'Sodium CMC · HPMC · Xanthan Gum' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783147978/applications/drug-encapsulation_eit3a3.png', label: 'Drug Encapsulation', desc: 'Microencapsulation and nanoparticle matrices for bioavailability enhancement and targeted delivery.', tag: 'Sodium Alginate · Pectin · HPMC' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783148079/applications/nutraceuticals_zkw4fe.png', label: 'Nutraceuticals & Supplements', desc: 'Dietary fibre enrichment, gelling carriers for omega-3 and probiotic encapsulation, and softgel alternatives.', tag: 'Sodium Alginate · Pectin · HPMC' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783147974/applications/dental-impression_bdcudm.png', label: 'Dental & Impression', desc: 'Alginate impression materials for dental prosthetics and orthodontics with controlled setting times.', tag: 'Sodium Alginate' },
];

const COSMETICS_CARDS = [
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783148108/applications/skincare-serums_dt1vnl.png', label: 'Skincare & Serums', desc: 'Thickeners, film-formers and moisture-binding agents for creams, serums, sheet masks and gels.', tag: 'HEC · Sodium CMC · Xanthan Gum' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783148016/applications/hair-care_xpl4w4.png', label: 'Hair Care', desc: 'Conditioning, hold polymer and scalp-care systems for shampoos, conditioners and styling gels.', tag: 'HEC · Sodium CMC · Guar Gum' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783148139/applications/toothpaste-oral-care_ms04s9.png', label: 'Toothpaste & Oral Care', desc: 'Binders, rheology modifiers and humectant systems for paste consistency and stability.', tag: 'Sodium CMC · Carrageenan · Xanthan Gum' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783147810/applications/body-bath_pfcucu.png', label: 'Body & Bath', desc: 'Emulsion stabilisers, sensory texture improvers and skin-hydration agents in lotions, gels and washes.', tag: 'Sodium CMC · Xanthan Gum · Sodium Alginate' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783148070/applications/makeup-cosmetics_bveipu.png', label: 'Make-up & Colour Cosmetics', desc: 'Suspension and pigment-distribution aids, film-forming polymers and setting-spray binders.', tag: 'HEC · Xanthan Gum · Sodium CMC' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783148119/applications/soap-cleansers_rmbt5u.png', label: 'Soap & Cleansers', desc: 'Foam boosters, viscosity builders and skin-feel enhancers for syndet bars, liquid soaps and cleansers.', tag: 'HEC · Sodium CMC · Xanthan Gum' },
];

const INDUSTRIAL_CARDS = [
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783147990/applications/gypsum-plaster_nuush0.png', label: 'Gypsum Boards & Plaster', desc: 'Cellulose Ethers as water-retention agents and workability improvers in gypsum board slurries and plasterwork, preventing premature drying and improving adhesion.', tag: 'HPMC · MHEC · HEC · Sodium CMC' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783148240/applications/white-putty-wall-filler_qczawq.png', label: 'White Putty & Wall Filler', desc: 'Rheology modifiers providing sag resistance, open-time control and smooth application in interior and exterior white putty and tile adhesive formulations.', tag: 'HPMC · MHEC · HEC · Sodium CMC' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783148080/applications/paints-coatings_b4qkqn.png', label: 'Paints & Coatings', desc: 'Thickening, sag control, levelling and open-time extension in water-based architectural and industrial paint systems.', tag: 'HEC · MHEC · Sodium CMC · Xanthan Gum' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783148181/applications/textiles_l17g2h.png', label: 'Textiles', desc: 'Warp sizing, print paste thickeners and surface treatment agents for cotton, synthetic and blended fabrics. Excellent film strength and easy washout.', tag: 'Sodium Alginate · Sodium CMC · Guar Gum' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783148093/applications/paper-packaging_wu626v.png', label: 'Paper & Packaging', desc: 'Surface sizing, barrier coatings, starch co-binders and wet-strength improvers for printing and packaging papers.', tag: 'Sodium CMC · Guar Gum' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783147811/applications/ceramics-mining_zi5vbw.png', label: 'Ceramics & Mining', desc: 'Binders, deflocculants and viscosity modifiers for ceramic slurries, sanitaryware casting and mineral processing.', tag: 'Sodium CMC · Sodium Alginate' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783147792/applications/adhesives-binders_nbpmbn.png', label: 'Adhesives & Binders', desc: 'Water-based adhesion, remoistenable label gums and laminating agents for paper, board and label applications.', tag: 'Sodium CMC · Guar Gum' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783147802/applications/air-freshener-gels_b7owpn.png', label: 'Air Freshener Gels', desc: 'Controlled fragrance release and transparent gel-matrix formation for ambient and automotive fresheners.', tag: 'Carrageenan · Sodium CMC' },
];

const PET_FOOD_CARDS = [
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783148178/applications/wet-pet-food_vdnbwp.jpg', label: 'Wet Animal Nitrition', desc: 'Gelling and gravy-forming agents for canned and pouched cat and dog food. Improves palatability and texture.', tag: 'Carrageenan · LBG' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783148084/applications/pet-treats_t7jxad.jpg', label: 'Treats & Semi-moist', desc: 'Moisture retention, binding and chewy texture for snack treats, training rewards and dental sticks.', tag: 'CMC · Guar · Alginate' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783147823/applications/cow_v_trevfo.png', label: 'Cattle & Buffalo Feed', desc: 'Feed pellet binding, moisture management and ingredient stabilization for cattle, buffalo and dairy nutrition formulations.', tag: 'Sodium CMC · Guar Gum · Xanthan Gum' },
  { image: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783148124/applications/hen_v_mrrcvy.png', label: 'Poultry Feed', desc: 'Pellet durability improvement, dust reduction and feed processing enhancement for broiler and layer feed formulations.', tag: 'Sodium CMC · Guar Gum · Sodium Alginate' },
];


// ─── All six industry sections ────────────────────────────────────────────────

const INDUSTRY_SECTIONS = [
  {
    id: 'applications-food',
    title: 'Food & Beverage',
    desc: 'VIVINE International hydrocolloids and alginates deliver thickening, gelling, emulsification, stabilisation and coating functions across the full spectrum of food and beverage manufacturing. Used at levels from a few ppm to high inclusion rates, our ingredients meet food-grade standards including E-number approvals, GRAS status and Halal/Kosher certification.',
    cards: FOOD_CARDS,
    alt: false,
  },
  {
    id: 'applications-pharma',
    title: 'Pharmaceutical & Nutraceutical',
    desc: 'VIVINE International supplies pharmacopoeial-grade hydrocolloids and cellulose Ethers that meet USP, BP and EP monograph requirements. Our excipients are used in solid dosage forms, controlled-release matrices, wound care and encapsulation across regulated global markets.',
    cards: PHARMA_CARDS,
    alt: true,
  },
  {
    id: 'applications-cosmetics',
    title: 'Cosmetics & Personal Care',
    desc: 'As viscosity-control polymers, film-formers and skin-conditioning agents, VIVINE International hydrocolloids and cellulose Ethers are trusted by cosmetic formulators worldwide. Our grades are COSMOS-compatible and comply with EU and ASEAN cosmetic regulations.',
    cards: COSMETICS_CARDS,
    alt: false,
  },
  {
    id: 'applications-industrial',
    title: 'Technical & Industrial',
    desc: 'VIVINE International industrial-grade hydrocolloids and cellulose Ethers are engineered for demanding technical applications. Their high molecular weight, water-binding capacity and film-forming ability make them essential performance additives in construction, coatings, textiles and beyond.',
    cards: INDUSTRIAL_CARDS,
    alt: true,
  },
  {
    id: 'applications-petfood',
    title: 'Animal Nutrition',
    desc: 'VIVINE International supplies hydrocolloids, alginates and cellulose Ethers for animal nutrition applications, supporting pellet durability, moisture retention, feed binding, texture improvement and processing efficiency across Animal Nitrition, livestock feed and poultry nutrition.',
    cards: PET_FOOD_CARDS,
    alt: false,
  },
];

const ApplicationsIndustrySections = () => (
  <>
    {INDUSTRY_SECTIONS.map((section) => (
      <IndustrySectionBlock key={section.id} {...section} />
    ))}
  </>
);

export default ApplicationsIndustrySections;
