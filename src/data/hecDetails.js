// HEC application detail sections, regulatory, SEO
import { IC } from './hecContent';

export const APP_DETAILS = [
  {
    icon: '🎨',
    title: 'Paints & Coatings — Primary Market (Largest Global HEC Consumer)',
    color: IC.paint,
    items: [
      {
        name: 'Emulsion (Latex) Paints',
        desc: 'HEC is the most widely used primary thickener in water-based architectural paints globally. At 0.2–0.5%, it thickens the aqueous phase of emulsion paints to in-can viscosities of 90–130 KU (Krebs Units), preventing pigment settling during storage. Its pseudoplastic (shear-thinning) character allows easy roller and brush application while preventing post-application drips. HEC is compatible with acrylic, vinyl acetate-ethylene (VAE), and styrene-acrylic latex systems and does not interact adversely with biocides, dispersants, or defoamers typically present in modern paint formulations.',
      },
      {
        name: 'Exterior Masonry Paints & Renders',
        desc: 'In exterior coatings applied to porous masonry substrates, HEC provides water retention that slows absorption of the aqueous phase into the substrate, extending open time and improving film formation. High viscosity grades (60,000–100,000 mPa·s) are preferred for textured or high-build exterior coatings where sag resistance and application consistency on vertical surfaces are priorities.',
      },
      {
        name: 'Industrial & Wood Coatings',
        desc: 'In water-borne industrial and wood coatings, HEC at lower viscosity grades (5,000–15,000 mPa·s) contributes rheology control without over-thickening, improving levelling (reduction of brush or roller marks) and compatibility with co-solvents such as glycol Ethers. Its thermal stability (no gelation) is an advantage in oven-cure systems and high-temperature spray application environments.',
      },
    ],
  },
  {
    icon: '⛽',
    title: 'Oil & Gas Drilling — Second Largest Market',
    color: IC.oil,
    items: [
      {
        name: 'Water-Based Drilling Fluids (WBM)',
        desc: 'HEC is the most widely used cellulose ether in water-based mud (WBM) formulations. At 0.3–1.0%, it builds fluid viscosity at low shear rates — essential for transporting drill cuttings to surface during circulation breaks — while remaining pumpable at high shear. Its primary oilfield function is fluid loss control: HEC molecules deposit as part of the filter cake on the permeable borehole wall, limiting the volume of filtrate that invades the reservoir formation. Invasion damage reduces well productivity, so fluid loss control is a critical economic parameter.',
      },
      {
        name: 'Completion & Workover Fluids',
        desc: 'Completion fluids are used during final well preparation before production begins. HEC at 0.5–1.0% in clean brine systems provides fluid loss control without leaving damaging residue in the perforations. Its non-ionic character makes it compatible with high-density brines (NaCl, KCl, CaBr₂, ZnBr₂) used in high-pressure completions. HEC breaks down with oxidative breakers (hypochlorite, persulphate) when wellbore cleanup is required, which is important for production string cleanliness.',
      },
      {
        name: 'High-Salinity & High-Temperature Applications',
        desc: 'HEC\'s non-ionic character provides good tolerance to high concentrations of NaCl, KCl, and CaCl₂ — conditions where anionic polymers like CMC lose viscosity through charge-screening. For ultra-deep or high-temperature wells (above 120–150°C), however, HEC undergoes thermal degradation, and cross-linked HEC or alternative polymers (PAC, xanthan) may be required. The correct grade selection (high MS for maximum salt tolerance) should be confirmed with the VIVINE technical team for specific field conditions.',
      },
    ],
  },
  {
    icon: '🏗️',
    title: 'Construction Chemicals',
    color: IC.const,
    items: [
      {
        name: 'Cement-Based Renders & Plasters',
        desc: 'HEC at 0.1–0.3% improves water retention and workability in cement-sand renders and plasters, preventing premature drying on porous substrates. Unlike MHEC, HEC does not exhibit thermal gelation and thus provides lower anti-sag performance on vertical surfaces. HEC is preferred in grout and joint filler formulations where low viscosity at high shear (injection) combined with gel strength at rest is not required, and where the formulation temperature may rise during setting.',
      },
      {
        name: 'Grouts & Joint Fillers',
        desc: 'In tile grouting compounds and joint filler systems, HEC provides water retention that allows cement hydration to complete properly, reducing shrinkage cracking. Its compatibility with pigments and mineral fillers used in coloured grouts, and its clean dissolution without visible fibre residue, makes it suitable for fine-finish grout formulations in the 5,000–30,000 mPa·s range.',
      },
    ],
  },
  {
    icon: '🧴',
    title: 'Personal Care & Cosmetics',
    color: IC.care,
    items: [
      {
        name: 'Shampoos & Conditioners',
        desc: 'HEC is one of the most widely used thickeners in shampoo formulations globally. At 0.3–1.0%, it thickens high-concentration surfactant (SLES/SLS/betaine) systems to consumer-preferred viscosities of 3,000–8,000 cP, improving pumpability, application to hair, and perceived product quality. Its non-ionic nature is essential — ionic thickeners can precipitate with the cationic conditioning agents (cetrimonium chloride, BTAC) present in conditioning shampoos and 2-in-1 systems.',
      },
      {
        name: 'Lotions, Creams & Moisturisers',
        desc: 'In O/W emulsion creams and body lotions, HEC at 0.5–1.5% builds aqueous phase viscosity, improving emulsion stability and providing a smooth, non-greasy skin feel. High-purity cosmetic grades are used to formulate clear hydrogels (face gels, aloe vera gels) where transparency and clean skin feel are required. Film-forming properties contribute to moisturisation duration on the skin surface.',
      },
      {
        name: 'Hair Styling Products',
        desc: 'In styling gels and setting lotions, HEC provides the hydrogel matrix that imparts hold — higher concentrations (1.0–2.0%) produce stiffer gels (strong hold), lower concentrations (0.5–1.0%) give lighter, flexible hold. HEC gels dry to a clear, non-flaking film without the stickiness associated with synthetic polymer gels, and rinse cleanly with water.',
      },
      {
        name: 'Toothpaste & Oral Care',
        desc: 'HEC at 0.5–1.5% in toothpaste formulations acts as a rheology modifier and binder, ensuring the paste extrudes from the tube in a consistent ribbon and retains shape on the toothbrush without slumping. It is compatible with sodium fluoride, stannous fluoride, calcium carbonate, silica abrasives, and SLS — all standard toothpaste ingredients — and does not affect flavour perception.',
      },
    ],
  },
  {
    icon: '🧹',
    title: 'Detergents & Cleaners',
    color: IC.deterg,
    items: [
      {
        name: 'Liquid Laundry Detergents',
        desc: 'HEC at 0.2–0.6% thickens liquid laundry detergent concentrates to dosing-friendly viscosities of 200–1,000 cP. Its anti-redeposition function is equally important in textile washing: HEC adsorbs onto cotton fibre surfaces and creates a temporary barrier that prevents loosened soil particles from re-depositing onto the fabric during the wash cycle, resulting in brighter, cleaner wash results at equivalent detergent concentrations.',
      },
      {
        name: 'Hard-Surface & Toilet Cleaners',
        desc: 'In toilet rim gels and bathroom surface cleaners, HEC provides the cling thickening that keeps the active cleaning agent in contact with the target surface for longer, improving cleaning efficacy. Acidic toilet cleaners (HCl-based) and alkaline bathroom cleaners both require a thickener with broad pH stability — HEC remains effective across pH 2–12, accommodating the full range of cleaning product chemistry.',
      },
    ],
  },
  {
    icon: '🧵',
    title: 'Textile Processing',
    color: IC.text,
    items: [
      {
        name: 'Reactive & Pigment Dye Printing Pastes',
        desc: 'HEC at 1.0–4.0% concentration in printing paste formulations controls the rheology of the dye-thickener system during screen and rotary printing. The pseudoplastic flow allows the paste to pass through the fine mesh of the printing screen under squeegee pressure, then rapidly rebuild viscosity on the fabric to prevent dye migration and bleeding at pattern edges. HEC washes out of the printed fabric cleanly during the after-treatment wash, leaving no residue that would affect handle or colour fastness.',
      },
      {
        name: 'Warp Sizing',
        desc: 'In warp sizing (slashing), HEC at low concentrations (0.2–0.5%) applied in hot size liquor adds to the film-forming properties of starch or PVA binders, improving adhesion to synthetic fibres (polyester, nylon) and reducing warp yarn breakage on the loom. HEC desizes cleanly in the subsequent scouring process, minimising effluent load compared to starch-based sizing agents.',
      },
    ],
  },
  {
    icon: '💊',
    title: 'Pharmaceuticals (Supplementary)',
    color: IC.pharma,
    items: [
      {
        name: 'Ophthalmic Drops & Artificial Tears',
        desc: 'Pharmaceutical-grade HEC (USP / Ph.Eur. compliant) at 0.5–1.0% is a recognised viscosity agent in ophthalmic preparations. It increases the residence time of artificial tear drops on the ocular surface, providing relief in dry-eye conditions. HEC is well-tolerated by the corneal epithelium and does not blur vision at typical concentrations.',
      },
      {
        name: 'Oral Suspensions & Topical Gels',
        desc: 'HEC at 0.5–2.0% stabilises oral liquid suspensions (preventing sedimentation of insoluble active ingredients) and forms the hydrogel matrix in wound care gels and topical pharmaceutical preparations. Its mucoadhesive properties are useful in nasal and buccal drug delivery systems where extended contact with mucous membranes is required for drug absorption.',
      },
    ],
  },
];

export const REGULATORY = [
  { icon: '📋', title: 'USP-NF', sub: 'Hydroxyethyl Cellulose monograph' },
  { icon: '📋', title: 'Ph.Eur.', sub: 'European Pharmacopoeia monograph' },
  { icon: '📋', title: 'JP', sub: 'Japanese Pharmacopoeia monograph' },
  { icon: '💄', title: 'INCI: Hydroxyethylcellulose', sub: 'Cosmetics — EU / US / global INCI' },
  { icon: '⚗️', title: 'REACH compliant', sub: 'EU chemical registration, SVHC-free' },
  { icon: '🌿', title: 'Non-hazardous', sub: 'No GHS hazard classification' },
  { icon: '⛽', title: 'API / oilfield grade', sub: 'Available on request for drilling applications' },
];

export const SEO_TITLE = 'HEC — Hydroxyethyl Cellulose: technical overview';
export const SEO_PARAS = [
  '<strong>Hydroxyethyl Cellulose (HEC)</strong> is one of the most industrially versatile water-soluble polymers in use globally. Unlike synthetic thickeners such as carbomers or associative polyurethanes, HEC is derived from cellulose — a renewable natural raw material — and combines broad chemical compatibility with robust, predictable rheological performance across a wide range of pH values, temperatures, and electrolyte environments.',
  'HEC\'s defining property — full water solubility at all temperatures without thermal gelation — distinguishes it from methyl-substituted cellulose Ethers (MC, MHEC, HPMC) and makes it the first choice for applications where solution consistency must be maintained under variable or elevated temperature conditions. Combined with its non-ionic character, this makes HEC uniquely suitable for formulations where anionic and cationic active ingredients coexist, such as shampoos containing anionic surfactants and cationic conditioning agents, or oilfield brines containing multivalent cations.',
  'VIVINE International supplies HEC in a comprehensive viscosity range — from low-viscosity grades (100–1,000 mPa·s) for pharmaceutical and textile applications to high-viscosity grades (30,000–100,000 mPa·s) for architectural paint and oilfield drilling applications. Industrial-grade, cosmetic-grade, and pharmaceutical-grade variants are available with supporting documentation including TDS, SDS, and COA. Samples and technical consultation are available upon request.',
];

export const FOOTER_NOTE = 'All technical data is indicative and based on standard reference conditions (Brookfield 2% solution, 25°C). Actual performance depends on formulation matrix, pH, electrolyte level, process temperature, and co-additives. Contact VIVINE International for application-specific grade recommendations, TDS, and product samples.';
