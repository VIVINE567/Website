'use client';

import IndustrySectionBlock from './IndustrySectionBlock';

// ─── All application data from VIVINE-applications.html ──────────────────────

const FOOD_CARDS = [
  { image: '/applications/confectionery.png', label: 'Confectionery', desc: 'Gelling and texturising agents for gummies, jellies, marshmallows and sugar-coated products. Carrageenan, alginates.', tag: 'Carrageenan · Gellan Gum · Pectin' },
  { image: '/applications/jelly-pudding.png', label: 'Jelly & Pudding', desc: 'Precision gelation, heat stability and glossy clarity in dessert gels and pudding systems.', tag: 'Carrageenan · Pectin · Gellan Gum' },
  { image: '/applications/dairy.png', label: 'Dairy & Dairy Alternatives', desc: 'Syneresis prevention, body and mouthfeel in yoghurts, cheese, cream and plant-based dairy.', tag: 'Carrageenan · Sodium CMC · Guar Gum' },
  { image: '/applications/frozen-desserts.png', label: 'Frozen Desserts & Ice Cream', desc: 'Ice crystal control, overrun stability, heat-shock resistance and creaminess enhancement.', tag: 'Locust Bean Gum (LBG) · Guar Gum · Carrageenan · Sodium CMC' },
  { image: '/applications/bakery.png', label: 'Bakery', desc: 'Moisture retention, crumb softness, freeze-thaw stability and gluten-free texture systems.', tag: 'Sodium CMC · Xanthan Gum · Guar Gum · HPMC' },
  { image: '/applications/meat-protein.png', label: 'Meat & Protein', desc: 'Binding, water retention, injection brine stability and texture in processed meats and analogues.', tag: 'Carrageenan · Sodium Alginate · Konjac Gum' },
  { image: '/applications/sauces-dressings.png', label: 'Sauces & Dressings', desc: 'Emulsion stability, pour-control viscosity and spoonable texture in ambient and refrigerated products.', tag: 'Xanthan Gum · Sodium CMC · Pectin' },
  { image: '/applications/beverages.png', label: 'Beverages', desc: 'Pulp suspension, foam stabilisation, clarity and mouthfeel in juice, dairy and energy drinks.', tag: 'Sodium CMC · Xanthan Gum · Carrageenan · Pectin' },
  { image: '/applications/beer-brewing.png', label: 'Beer & Brewing', desc: 'Clarification, foam stability, haze prevention and process filtration aids.', tag: 'Carrageenan · Propylene Glycol Alginate (PGA)' },
];

const PHARMA_CARDS = [
  { image: '/applications/tablet-excipients.png', label: 'Tablet Excipients', desc: 'Binders, disintegrants and matrix-formers for immediate and controlled-release tablets. HPMC, CMC and alginates.', tag: 'HPMC · Sodium CMC · Croscarmellose Sodium · Sodium Alginate' },
  { image: '/applications/vegan-capsule-shells.png', label: 'Vegan Capsule Shells', desc: 'HPMC-based hard capsule shells as a plant-derived alternative to bovine gelatin — suitable for vegetarian and Halal markets.', tag: 'HPMC' },
  { image: '/applications/wound-care-medical_1.png', label: 'Oral Liquid & Syrup Formulations', desc: 'Suspension stability, viscosity control, mouthfeel enhancement and active ingredient uniformity for oral liquid and syrup formulations.', tag: 'Sodium CMC · HPMC · Xanthan Gum' },
  { image: '/applications/drug-encapsulation.png', label: 'Drug Encapsulation', desc: 'Microencapsulation and nanoparticle matrices for bioavailability enhancement and targeted delivery.', tag: 'Sodium Alginate · Pectin · HPMC' },
  { image: '/applications/nutraceuticals.png', label: 'Nutraceuticals & Supplements', desc: 'Dietary fibre enrichment, gelling carriers for omega-3 and probiotic encapsulation, and softgel alternatives.', tag: 'Sodium Alginate · Pectin · HPMC' },
  { image: '/applications/dental-impression.png', label: 'Dental & Impression', desc: 'Alginate impression materials for dental prosthetics and orthodontics with controlled setting times.', tag: 'Sodium Alginate' },
];

const COSMETICS_CARDS = [
  { image: '/applications/skincare-serums.png', label: 'Skincare & Serums', desc: 'Thickeners, film-formers and moisture-binding agents for creams, serums, sheet masks and gels.', tag: 'HEC · Sodium CMC · Xanthan Gum' },
  { image: '/applications/hair-care.png', label: 'Hair Care', desc: 'Conditioning, hold polymer and scalp-care systems for shampoos, conditioners and styling gels.', tag: 'HEC · Sodium CMC · Guar Gum' },
  { image: '/applications/toothpaste-oral-care.png', label: 'Toothpaste & Oral Care', desc: 'Binders, rheology modifiers and humectant systems for paste consistency and stability.', tag: 'Sodium CMC · Carrageenan · Xanthan Gum' },
  { image: '/applications/body-bath.png', label: 'Body & Bath', desc: 'Emulsion stabilisers, sensory texture improvers and skin-hydration agents in lotions, gels and washes.', tag: 'Sodium CMC · Xanthan Gum · Sodium Alginate' },
  { image: '/applications/makeup-cosmetics.png', label: 'Make-up & Colour Cosmetics', desc: 'Suspension and pigment-distribution aids, film-forming polymers and setting-spray binders.', tag: 'HEC · Xanthan Gum · Sodium CMC' },
  { image: '/applications/soap-cleansers.png', label: 'Soap & Cleansers', desc: 'Foam boosters, viscosity builders and skin-feel enhancers for syndet bars, liquid soaps and cleansers.', tag: 'HEC · Sodium CMC · Xanthan Gum' },
];

const INDUSTRIAL_CARDS = [
  { image: '/applications/gypsum-plaster.png', label: 'Gypsum Boards & Plaster', desc: 'Cellulose Ethers as water-retention agents and workability improvers in gypsum board slurries and plasterwork, preventing premature drying and improving adhesion.', tag: 'HPMC · MHEC · HEC · Sodium CMC' },
  { image: '/applications/white-putty-wall-filler.png', label: 'White Putty & Wall Filler', desc: 'Rheology modifiers providing sag resistance, open-time control and smooth application in interior and exterior white putty and tile adhesive formulations.', tag: 'HPMC · MHEC · HEC · Sodium CMC' },
  { image: '/applications/paints-coatings.png', label: 'Paints & Coatings', desc: 'Thickening, sag control, levelling and open-time extension in water-based architectural and industrial paint systems.', tag: 'HEC · MHEC · Sodium CMC · Xanthan Gum' },
  { image: '/applications/textiles.png', label: 'Textiles', desc: 'Warp sizing, print paste thickeners and surface treatment agents for cotton, synthetic and blended fabrics. Excellent film strength and easy washout.', tag: 'Sodium Alginate · Sodium CMC · Guar Gum' },
  { image: '/applications/paper-packaging.png', label: 'Paper & Packaging', desc: 'Surface sizing, barrier coatings, starch co-binders and wet-strength improvers for printing and packaging papers.', tag: 'Sodium CMC · Guar Gum' },
  { image: '/applications/ceramics-mining.png', label: 'Ceramics & Mining', desc: 'Binders, deflocculants and viscosity modifiers for ceramic slurries, sanitaryware casting and mineral processing.', tag: 'Sodium CMC · Sodium Alginate' },
  { image: '/applications/adhesives-binders.png', label: 'Adhesives & Binders', desc: 'Water-based adhesion, remoistenable label gums and laminating agents for paper, board and label applications.', tag: 'Sodium CMC · Guar Gum' },
  { image: '/applications/air-freshener-gels.png', label: 'Air Freshener Gels', desc: 'Controlled fragrance release and transparent gel-matrix formation for ambient and automotive fresheners.', tag: 'Carrageenan · Sodium CMC' },
];

const PET_FOOD_CARDS = [
  { image: '/applications/wet-pet-food.jpeg', label: 'Wet Animal Nitrition', desc: 'Gelling and gravy-forming agents for canned and pouched cat and dog food. Improves palatability and texture.', tag: 'Carrageenan · LBG' },
  { image: '/applications/pet-treats.jpeg', label: 'Treats & Semi-moist', desc: 'Moisture retention, binding and chewy texture for snack treats, training rewards and dental sticks.', tag: 'CMC · Guar · Alginate' },
  { image: '/applications/cow_v.png', label: 'Cattle & Buffalo Feed', desc: 'Feed pellet binding, moisture management and ingredient stabilization for cattle, buffalo and dairy nutrition formulations.', tag: 'Sodium CMC · Guar Gum · Xanthan Gum' },
  { image: '/applications/hen_v.png', label: 'Poultry Feed', desc: 'Pellet durability improvement, dust reduction and feed processing enhancement for broiler and layer feed formulations.', tag: 'Sodium CMC · Guar Gum · Sodium Alginate' },
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
