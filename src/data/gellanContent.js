// Gellan Gum content matching "gellan_gum_VIVINE_international.html"
// Industry color tokens (same palette as the HTML reference)
export const IC = {
  food:       { bg: '#E4F4F0', tx: '#0A4A42' },
  dairy:      { bg: '#EAF8F2', tx: '#0A5A38' },
  plantbased: { bg: '#E6F6E6', tx: '#1A5A20' },
  pharma:     { bg: '#EAF0FB', tx: '#1A3A8C' },
  cosmetic:   { bg: '#F8E8F4', tx: '#781A68' },
  all:        { bg: '#E2F2F0', tx: '#0E5E56' },
};

export const HERO = {
  productTag: 'Microbial polysaccharide · Sphingomonas elodea · E418 · GRAS · Low Acyl & High Acyl',
  title: 'Gellan Gum',
  cas: 'CAS 71010-52-1 · E418 · INS 418 · Gellan · Polysaccharide S-60',
  desc: 'Gellan Gum is a high-performance anionic microbial polysaccharide produced by the aerobic fermentation of glucose using Sphingomonas elodea (formerly Pseudomonas elodea). It is produced in two commercially distinct forms: Low Acyl (LA) Gellan — firm, brittle, clear gels formed at very low concentrations (0.05–0.25%), activated by monovalent or divalent cations; and High Acyl (HA) Gellan — soft, elastic, opaque gels with excellent freeze-thaw stability, used in plant-based beverages, dairy alternatives, and premium desserts. Gellan gum’s most significant commercial application is as the suspending agent in plant-based beverages — where at 0.02–0.05% Low Acyl gellan forms a weak gel network that keeps botanicals, vitamins, and mineral particles in suspension, releasing them easily on gentle shaking.',
  statPills: [
    { val: 'E418 / GRAS', lbl: 'Global food approval' },
    { val: 'LA & HA types', lbl: 'Two commercial forms' },
    { val: '0.02–0.5%', lbl: 'Typical use level' },
    { val: '3 industries', lbl: 'Food · Pharma · Cosmetics' },
  ],
};

export const HIGHLIGHTS = [
  { icon: '🧫', val: 'Microbial origin', lbl: 'Sphingomonas elodea' },
  { icon: '🌱', val: 'Plant-based drinks', lbl: 'Largest global application' },
  { icon: '🔬', val: 'Ultra-low use level', lbl: '0.02–0.05% in beverages' },
  { icon: '✨', val: 'Crystal-clear gels (LA)', lbl: 'Transparent gel formation' },
  { icon: '✅', val: 'E418 / GRAS', lbl: 'US · EU · JP · CN approved' },
  { icon: '🌿', val: 'Vegan · Non-GMO', lbl: 'Gluten-free · Clean label' },
  { icon: '💊', val: 'Pharma grade', lbl: 'Ophthalmic · CR tablets' },
  { icon: '💄', val: 'Cosmetic grade', lbl: 'Clear gels · Serums' },
];

// "Two commercial types — Low Acyl (LA) vs High Acyl (HA)" — two-card banner
export const TYPE_COMPARE = [
  {
    name: 'Low Acyl (LA) Gellan Gum',
    sub: 'Deacylated / LA / Low-acyl gellan',
    color: { bg: '#E4F4F0', border: '#7ABCB4', tx: '#0A3A34' },
    props: [
      ['Gel texture', 'Firm, brittle, transparent'],
      ['Gel clarity', 'Crystal-clear (water gels)'],
      ['Activator', 'Mono- or divalent cations (Na⁺, K⁺, Ca²⁺, Mg²⁺)'],
      ['Gel strength', 'High — firm gels at 0.1–0.3%'],
      ['Melting temp.', '~70–120°C (cation-dependent)'],
      ['Heat stability', 'Excellent — gels survive retort'],
      ['Freeze-thaw', 'Poor — syneresis occurs'],
      ['Key applications', 'Plant-based beverages, water gels, desserts, pharma, cosmetics'],
    ],
  },
  {
    name: 'High Acyl (HA) Gellan Gum',
    sub: 'Native / HA / High-acyl gellan',
    color: { bg: '#EAF6F0', border: '#88C4A8', tx: '#0A3A28' },
    props: [
      ['Gel texture', 'Soft, elastic, fluid gel'],
      ['Gel clarity', 'Opaque / hazy (fluid gel)'],
      ['Activator', 'Not cation-dependent — sets on cooling'],
      ['Gel strength', 'Lower — soft body, good mouthfeel'],
      ['Melting temp.', '~65–80°C'],
      ['Heat stability', 'Good — stable during pasteurisation'],
      ['Freeze-thaw', 'Good — less syneresis than LA'],
      ['Key applications', 'Dairy alternatives, desserts, beverages requiring creamy mouthfeel'],
    ],
  },
];

// "How Gellan Gum gels — mechanism of gelation" — numbered step flow
export const MECHANISM = {
  title: 'How Gellan Gum gels — mechanism of gelation',
  steps: [
    { title: 'Hot dispersal', desc: 'Gellan gum disperses in hot water (≥ 70°C) as disordered, random-coil polymer chains. Full hydration requires 75–90°C with agitation for 15–20 minutes.' },
    { title: 'Helix formation (cooling)', desc: 'On cooling below ~40–50°C, gellan chains fold into ordered double helices — the thermodynamic driving force of gel formation.' },
    { title: 'Cation cross-linking (LA)', desc: 'For LA gellan, metal cations (Na⁺, K⁺, Ca²⁺, Mg²⁺) cross-link the helices by salt-bridging the carboxylate groups — forming a 3D gel network. Higher cation levels give firmer gels.' },
    { title: 'Network junction zones', desc: 'Cross-linked helix aggregates form stable junction zones — the structural backbone of the gel. In HA gellan, acyl groups (glyceryl & acetyl) sterically hinder tight helix packing, giving softer, elastic gels.' },
    { title: 'Firm / elastic gel', desc: 'LA gellan: firm, clear, brittle gel with high melting point. HA gellan: soft, elastic, opaque fluid gel. Both are thermoreversible — melt on heating, reset on cooling.' },
  ],
};

// "Key functional properties of Gellan Gum"
export const INFO_CARDS = [
  {
    title: 'Particle suspension at ultra-low concentration (0.02–0.05%)',
    body: 'Low Acyl gellan gum is uniquely effective at suspending particles in beverages at concentrations of 0.02–0.05% — far lower than any other food-approved suspending agent. In plant-based milks (almond, oat, rice, coconut) and fortified beverages, LA gellan forms a weak, thixotropic gel network at rest that keeps mineral particles (CaCO₃, ferric pyrophosphate), fibre, and botanical extracts uniformly suspended — releasing them instantly on shaking. This is gellan’s single most important commercial food application globally.',
  },
  {
    title: 'Crystal-clear gel formation (LA) — unique among biopolymers',
    body: 'Low Acyl gellan produces optically clear, glass-like gels in water — a property no other polysaccharide gel achieves at comparable concentrations. LA gellan gels transmit >90% of visible light (compared to agar ~60%, κ-carrageenan ~40%). This transparency is exploited in premium dessert gels (water jellies, transparent confectionery, clear aspic-style products), scientific media, and pharmaceutical ophthalmic formulations where visual clarity is essential.',
  },
  {
    title: 'Exceptional high-temperature stability (LA)',
    body: 'LA gellan gels (especially those set with divalent cations Ca²⁺, Mg²⁺) exhibit remarkably high gel melting temperatures — up to 120°C+ in high-cation systems. This thermal stability is critical in retorted foods (gels that must survive 121°C sterilisation), high-temperature bakery (bake-stable fillings), and pharmaceutical formulations that undergo autoclaving. Standard κ-carrageenan gels melt at ~55–65°C; LA gellan can exceed 100°C melting point with appropriate cation optimisation.',
  },
  {
    title: 'Excellent flavour release and clean mouthfeel',
    body: 'Because LA gellan gels are brittle and fracture cleanly under shear, they release flavour compounds immediately on bite or swallowing — unlike rubbery gels (iota-carrageenan, konjac) that require sustained chewing force. This "flavour release" property makes LA gellan preferred in premium water-based dessert jellies, fruit gels, and pharmaceutical ophthalmic drops (where clean, non-tacky feel on the eye is critical). HA gellan’s elastic network provides soft mouthfeel and creamy body in dairy and plant-based applications.',
  },
  {
    title: 'pH stability — broad range (3.5–8.0 in food)',
    body: 'Gellan gum maintains gel strength and viscosity across pH 3.5–8.0 — covering acidic fruit beverages and desserts through to neutral dairy and pharmaceutical formulations. Below pH 3.5, acid hydrolysis of the glycosidic bonds can occur over time (shelf life dependent); above pH 8, ionisation of carboxylate groups interferes with cation-mediated gelation. For acidic beverage applications (pH 3.5–4.5), LA gellan at 0.05–0.10% provides excellent particle suspension stable through the product’s shelf life.',
  },
  {
    title: 'Regulatory status — most widely approved microbial gum',
    body: 'Gellan gum (E418) is approved in the EU (Regulation EC 1333/2008, quantum satis in most food categories), as GRAS in the USA (21 CFR 172.665), in Japan (JSFA), China (GB 2760), and by Codex Alimentarius (INS 418, ADI "not specified" JECFA). It is the only microbial polysaccharide approved as a stabiliser in infant formula in the EU and USA — a unique and commercially significant regulatory achievement reflecting its exceptional safety profile.',
  },
];

// "Gel strength comparison" — mirrors the Chart.js bar chart in the HTML.
// Solid bars (no faded styling — the HTML chart uses solid backgroundColor).
export const GEL_CHART = {
  title: 'Gel strength comparison at 0.5% — Gellan LA vs. common gelling agents',
  sub: 'Indicative at 0.5% in water with appropriate cations / activators, 25°C',
  axisLabel: 'Indicative gel strength (g/cm²)',
  bars: [
    { label: 'LA Gellan', sub: '0.5%+Ca²⁺', val: 500, color: '#0E8070' },
    { label: 'LA Gellan', sub: '0.5%+K⁺', val: 280, color: '#28B898' },
    { label: 'κ-Carrageenan', sub: '0.5%', val: 420, color: '#1A7A9A' },
    { label: 'Agar', sub: '0.5%', val: 350, color: '#8060C0' },
    { label: 'LM Pectin', sub: '0.5%+Ca²⁺', val: 180, color: '#C06040' },
  ],
};
