'use client';

import IndustrySectionBlock from './IndustrySectionBlock';

// ─── All application data from vivine-applications.html ──────────────────────

const FOOD_CARDS = [
  { emoji: '🍬', label: 'Confectionery', desc: 'Gelling and texturising agents for gummies, jellies, marshmallows and sugar-coated products. Carrageenan, agar and alginates.', tag: 'Carrageenan · Agar · Gellan' },
  { emoji: '🍮', label: 'Jelly & Pudding', desc: 'Precision gelation, heat stability and glossy clarity in dessert gels and pudding systems.', tag: 'Agar · Carrageenan · Pectin' },
  { emoji: '🥛', label: 'Dairy & Dairy Alternatives', desc: 'Syneresis prevention, body and mouthfeel in yoghurts, cheese, cream and plant-based dairy.', tag: 'Carrageenan · CMC · Guar' },
  { emoji: '🍦', label: 'Frozen Desserts & Ice Cream', desc: 'Ice crystal control, overrun stability, heat-shock resistance and creaminess enhancement.', tag: 'LBG · Guar · Carrageenan · CMC' },
  { emoji: '🥐', label: 'Bakery', desc: 'Moisture retention, crumb softness, freeze-thaw stability and gluten-free texture systems.', tag: 'CMC · Xanthan · Guar · HPMC' },
  { emoji: '🥩', label: 'Meat & Protein', desc: 'Binding, water retention, injection brine stability and texture in processed meats and analogues.', tag: 'Carrageenan · Alginate · Konjac' },
  { emoji: '🍶', label: 'Sauces & Dressings', desc: 'Emulsion stability, pour-control viscosity and spoonable texture in ambient and refrigerated products.', tag: 'Xanthan · CMC · Pectin' },
  { emoji: '🧃', label: 'Beverages', desc: 'Pulp suspension, foam stabilisation, clarity and mouthfeel in juice, dairy and energy drinks.', tag: 'CMC · Xanthan · Carrageenan' },
  { emoji: '🍺', label: 'Beer & Brewing', desc: 'Clarification, foam stability, haze prevention and process filtration aids.', tag: 'Carrageenan · Agar' },
];

const PHARMA_CARDS = [
  { emoji: '💊', label: 'Tablet Excipients', desc: 'Binders, disintegrants and matrix-formers for immediate and controlled-release tablets. HPMC, CMC and alginates.', tag: 'HPMC · CMC · MCC · Alginate' },
  { emoji: '🌿', label: 'Vegan Capsule Shells', desc: 'HPMC-based hard capsule shells as a plant-derived alternative to bovine gelatin — suitable for vegetarian and Halal markets.', tag: 'HPMC · Pullulan' },
  { emoji: '🩹', label: 'Wound Care & Medical', desc: 'Alginate and CMC fibres for highly absorbent wound dressings, haemostatic pads and antimicrobial matrices.', tag: 'Calcium Alginate · CMC' },
  { emoji: '🧬', label: 'Drug Encapsulation', desc: 'Microencapsulation and nanoparticle matrices for bioavailability enhancement and targeted delivery.', tag: 'Alginate · Pectin · CMC' },
  { emoji: '🌾', label: 'Nutraceuticals & Supplements', desc: 'Dietary fibre enrichment, gelling carriers for omega-3 and probiotic encapsulation, and softgel alternatives.', tag: 'Alginate · Carrageenan · Agar' },
  { emoji: '🧪', label: 'Dental & Impression', desc: 'Alginate impression materials for dental prosthetics and orthodontics with controlled setting times.', tag: 'Sodium Alginate' },
];

const COSMETICS_CARDS = [
  { emoji: '✨', label: 'Skincare & Serums', desc: 'Thickeners, film-formers and moisture-binding agents for creams, serums, sheet masks and gels.', tag: 'HEC · CMC · Xanthan · Agar' },
  { emoji: '💆', label: 'Hair Care', desc: 'Conditioning, hold polymer and scalp-care systems for shampoos, conditioners and styling gels.', tag: 'HEC · CMC · Guar derivatives' },
  { emoji: '🪥', label: 'Toothpaste & Oral Care', desc: 'Binders, rheology modifiers and humectant systems for paste consistency and stability.', tag: 'CMC · Carrageenan · Xanthan' },
  { emoji: '🧴', label: 'Body & Bath', desc: 'Emulsion stabilisers, sensory texture improvers and skin-hydration agents in lotions, gels and washes.', tag: 'CMC · Xanthan · Alginate' },
  { emoji: '💄', label: 'Make-up & Colour Cosmetics', desc: 'Suspension and pigment-distribution aids, film-forming polymers and setting-spray binders.', tag: 'CMC · HEC · Xanthan' },
  { emoji: '🧼', label: 'Soap & Cleansers', desc: 'Foam boosters, viscosity builders and skin-feel enhancers for syndet bars, liquid soaps and cleansers.', tag: 'CMC · Carrageenan' },
];

const INDUSTRIAL_CARDS = [
  { emoji: '🏗️', label: 'Gypsum Boards & Plaster', desc: 'Cellulose ethers as water-retention agents and workability improvers in gypsum board slurries and plasterwork, preventing premature drying and improving adhesion.', tag: 'HPMC · HEC · CMC' },
  { emoji: '🪣', label: 'White Putty & Wall Filler', desc: 'Rheology modifiers providing sag resistance, open-time control and smooth application in interior and exterior white putty and tile adhesive formulations.', tag: 'HPMC · CMC · HEC' },
  { emoji: '🎨', label: 'Paints & Coatings', desc: 'Thickening, sag control, levelling and open-time extension in water-based architectural and industrial paint systems.', tag: 'CMC · HEC · Xanthan' },
  { emoji: '🧵', label: 'Textiles', desc: 'Warp sizing, print paste thickeners and surface treatment agents for cotton, synthetic and blended fabrics. Excellent film strength and easy washout.', tag: 'CMC · Sodium Alginate · Guar' },
  { emoji: '📄', label: 'Paper & Packaging', desc: 'Surface sizing, barrier coatings, starch co-binders and wet-strength improvers for printing and packaging papers.', tag: 'CMC · Carrageenan · Guar' },
  { emoji: '🔩', label: 'Ceramics & Mining', desc: 'Binders, deflocculants and viscosity modifiers for ceramic slurries, sanitaryware casting and mineral processing.', tag: 'CMC · Sodium Alginate' },
  { emoji: '🧪', label: 'Adhesives & Binders', desc: 'Water-based adhesion, remoistenable label gums and laminating agents for paper, board and label applications.', tag: 'CMC · Dextrin · Guar' },
  { emoji: '💨', label: 'Air Freshener Gels', desc: 'Controlled fragrance release and transparent gel-matrix formation for ambient and automotive fresheners.', tag: 'Carrageenan · Agar · CMC' },
];

const PET_FOOD_CARDS = [
  { emoji: '🐾', label: 'Wet Pet Food', desc: 'Gelling and gravy-forming agents for canned and pouched cat and dog food. Improves palatability and texture.', tag: 'Carrageenan · Agar · LBG' },
  { emoji: '🐟', label: 'Treats & Semi-moist', desc: 'Moisture retention, binding and chewy texture for snack treats, training rewards and dental sticks.', tag: 'CMC · Guar · Alginate' },
];

const BIOTECH_CARDS = [
  { emoji: '🔬', label: 'Microbiological Culture', desc: 'Bacteriological agar for nutrient, selective and differential media. Meets ISO and pharmacopoeial purity standards with rigorous inhibitor testing.', tag: 'Bacteriological Agar' },
  { emoji: '🌱', label: 'Plant Tissue Culture', desc: 'High-clarity, low-inhibitor agar grades for Murashige-Skoog and custom propagation media in agricultural biotech.', tag: 'TC-grade Agar' },
  { emoji: '🧫', label: 'Cell Encapsulation', desc: 'Biocompatible alginate beads for cell immobilisation, 3D bioprinting scaffolds and controlled cell-release systems.', tag: 'Sodium Alginate · Agarose' },
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
    desc: 'VIVINE International supplies pharmacopoeial-grade hydrocolloids and cellulose derivatives that meet USP, BP and EP monograph requirements. Our excipients are used in solid dosage forms, controlled-release matrices, wound care and encapsulation across regulated global markets.',
    cards: PHARMA_CARDS,
    alt: true,
  },
  {
    id: 'applications-cosmetics',
    title: 'Cosmetics & Personal Care',
    desc: 'As viscosity-control polymers, film-formers and skin-conditioning agents, VIVINE International hydrocolloids and cellulose derivatives are trusted by cosmetic formulators worldwide. Our grades are COSMOS-compatible and comply with EU and ASEAN cosmetic regulations.',
    cards: COSMETICS_CARDS,
    alt: false,
  },
  {
    id: 'applications-industrial',
    title: 'Technical & Industrial',
    desc: 'VIVINE International industrial-grade hydrocolloids and cellulose ethers are engineered for demanding technical applications. Their high molecular weight, water-binding capacity and film-forming ability make them essential performance additives in construction, coatings, textiles and beyond.',
    cards: INDUSTRIAL_CARDS,
    alt: true,
  },
  {
    id: 'applications-petfood',
    title: 'Pet Food',
    desc: 'VIVINE International supplies feed-grade hydrocolloids for wet and semi-moist pet food formulations, providing texture, palatability and binding performance that keeps nutritious products in prime condition throughout shelf-life.',
    cards: PET_FOOD_CARDS,
    alt: false,
  },
  {
    id: 'applications-biotech',
    title: 'Biotechnology & Life Sciences',
    desc: 'VIVINE International supplies stringently controlled bacteriological and tissue culture grade agars with strict absence of bacterial inhibitors and haemolytic substances — critical requirements for reliable microbiological and botanical research.',
    cards: BIOTECH_CARDS,
    alt: true,
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
