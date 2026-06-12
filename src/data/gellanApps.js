// Gellan Gum industry quick-reference table and gelling-agent comparison

// "Industry applications — at a glance"
export const INDUSTRY_TABLE = [
  {
    name: 'Food & Beverage', tag: 'Largest segment',
    color: { bg: '#E4F4F0', tx: '#0A4A42' },
    apps: 'Plant-based drinks, fruit beverages, dairy products, desserts, confectionery, jams, structured foods',
    type: 'LA (primarily); HA for dairy/desserts',
    func: 'Particle suspension, gelling, stabilisation, texture control',
    use: '0.02–0.5%',
  },
  {
    name: 'Pharmaceuticals',
    color: { bg: '#EAF0FB', tx: '#1A3A8C' },
    apps: 'Ophthalmic drops, oral suspensions, controlled-release tablets, microbiological media',
    type: 'LA (pharma grade)',
    func: 'Gel matrix, suspension, drug delivery, in-situ gelling',
    use: '0.1–1.5%',
  },
  {
    name: 'Cosmetics & Personal Care',
    color: { bg: '#F8E8F4', tx: '#781A68' },
    apps: 'Clear gels, face serums, skincare lotions, body wash, hair care products',
    type: 'LA (cosmetic grade)',
    func: 'Clear gel base, thickening, film forming, skin feel enhancement',
    use: '0.1–0.5%',
  },
];

// "Gellan Gum vs. comparable gelling agents"
// Cell can be a string, or { t, hl: 'good' | 'neg' } for coloured emphasis
export const COMPARISON = {
  cols: ['Property', 'Gellan Gum (LA)', 'κ-Carrageenan', 'Agar', 'Gelatin', 'Low-Methoxyl Pectin'],
  rows: [
    ['Origin', 'Microbial fermentation', 'Red seaweed', 'Red seaweed', 'Animal collagen', 'Citrus / apple peel'],
    ['Vegan / halal', { t: '✔ Fully vegan', hl: 'good' }, { t: '✔ Fully vegan', hl: 'good' }, { t: '✔ Fully vegan', hl: 'good' }, { t: '✘ Animal origin', hl: 'neg' }, { t: '✔ Fully vegan', hl: 'good' }],
    ['Minimum gelling conc.', { t: '~0.05–0.1% (lowest)', hl: 'good' }, '~0.3–0.5%', '~0.5–1.0%', '~1.5–3.0%', '~0.5–1.0%'],
    ['Gel clarity', { t: 'Crystal-clear (unique)', hl: 'good' }, 'Slightly hazy', 'Slightly hazy', 'Clear', 'Hazy to opaque'],
    ['Gel melting temperature', { t: '70–120°C+ (cation-dependent)', hl: 'good' }, '~55–70°C', '~85–90°C', '~30–35°C', '~65–80°C'],
    ['Bake stability', { t: 'Excellent (high Ca²⁺ systems)', hl: 'good' }, 'Poor (melts in oven)', 'Moderate', 'Poor (melts < 40°C)', 'Moderate'],
    ['Infant formula approved', { t: '✔ Yes — unique regulatory status', hl: 'good' }, 'Limited / contested', 'Not approved', 'Not approved', 'Not approved'],
    ['Ophthalmic use', { t: '✔ In-situ gelling gold standard', hl: 'good' }, 'Limited', 'Not used', 'Limited', 'Not used'],
    ['Suspension at very low conc.', { t: 'Excellent — 0.02–0.05%', hl: 'good' }, 'Not suitable', 'Not suitable', 'Not suitable', 'Not suitable'],
    ['Flavour release', { t: 'Excellent (brittle fracture)', hl: 'good' }, 'Moderate', 'Moderate', { t: 'Excellent (melts at mouth temp.)', hl: 'good' }, 'Moderate'],
    ['Natural / clean label', { t: '✔ Microbial, vegan, non-GMO', hl: 'good' }, { t: '✔ Seaweed origin', hl: 'good' }, { t: '✔ Seaweed origin', hl: 'good' }, { t: 'Animal — not vegan', hl: 'neg' }, { t: '✔ Fruit origin', hl: 'good' }],
    ['Typical use level', '0.02–0.5%', '0.1–1.0%', '0.5–2.0%', '1.5–4.0%', '0.5–1.5%'],
  ],
  note: 'LA gellan gum’s unique combination of ultra-low gelling concentration, crystal clarity, high melting temperature, infant formula approval, and ophthalmic in-situ gelling capability positions it as a technically superior but premium-priced gelling agent. It is the first choice where transparency, very low use level, or high thermal stability are required.',
};
