// Carrageenan industry-at-a-glance table + comparison vs other hydrocolloids
import { IC } from './carrageenanContent';

export const INDUSTRY_TABLE = [
  {
    name: 'Food & Beverage', color: IC.food,
    apps: 'Chocolate milk, beverages, desserts, processed foods, sauces, jams',
    type: 'κ, λ (RC)',
    func: 'Particle suspension, thickening, stabilisation, gel texture',
    use: '0.01–0.5%',
  },
  {
    name: 'Dairy & Frozen Desserts', color: IC.dairy,
    apps: 'Ice cream, flavoured milk, yogurt, cream cheese, dairy desserts, infant formula',
    type: 'κ, ι, λ (RC)',
    func: 'Ice crystal control, protein stabilisation, thickening, gelling',
    use: '0.01–0.5%',
  },
  {
    name: 'Meat & Poultry Processing', color: IC.meat,
    apps: 'Cooked ham, sausages, luncheon meat, reformed meat products, poultry rolls',
    type: 'κ (RC & SRC)',
    func: 'Water binding, cook-yield improvement, sliceability, texture',
    use: '0.1–0.5%',
  },
  {
    name: 'Plant-Based Foods', color: IC.plantbased,
    apps: 'Vegan milk alternatives, plant-based meat, vegan cheese, dairy-free desserts',
    type: 'κ, ι (RC)',
    func: 'Texture building, water binding, gel structure, mouthfeel',
    use: '0.02–0.5%',
  },
  {
    name: 'Pharmaceuticals', color: IC.pharma,
    apps: 'Oral suspensions, tablet formulations, controlled-release matrices, mucoadhesive gels',
    type: 'κ, ι, λ (RC, pharma grade)',
    func: 'Suspension stabilisation, binder, controlled drug release, thickening',
    use: '0.1–1.5%',
  },
  {
    name: 'Cosmetics & Personal Care', color: IC.cosmetic,
    apps: 'Toothpaste, creams, lotions, shampoos, body wash, hair conditioners',
    type: 'κ, ι, λ (RC, cosmetic grade)',
    func: 'Thickening, film forming, emulsion stabilisation, smooth skin/hair feel',
    use: '0.1–1.0%',
  },
  {
    name: 'Pet Food & Animal Nutrition', color: IC.petfood,
    apps: 'Wet cat & dog food, canned pet food, pet food pouches, pet treats',
    type: 'κ (SRC/PES, E407a)',
    func: 'Gelling, water binding, retort stability, texture after sterilisation',
    use: '0.1–0.5%',
  },
];

// Carrageenan vs comparable hydrocolloids. Cells are plain strings or
// { t, hl: 'good' | 'neg' } for the highlighted comparison cells.
export const COMPARISON = {
  cols: ['Property', 'Carrageenan (κ/ι)', 'Locust Bean Gum (LBG)', 'Gelatin', 'Agar', 'Pectin (HM)'],
  rows: [
    ['Origin', 'Red seaweed', 'Carob tree seed', 'Animal collagen', 'Red seaweed', 'Citrus / apple peel'],
    ['Vegan / halal',
      { t: '✔ Fully vegan', hl: 'good' }, { t: '✔ Fully vegan', hl: 'good' },
      { t: '✘ Animal origin', hl: 'neg' }, { t: '✔ Fully vegan', hl: 'good' }, { t: '✔ Fully vegan', hl: 'good' }],
    ['Gel type', 'Firm brittle (κ) / soft elastic (ι)', 'No gel alone; synergy gel with κ-carrageenan', 'Soft, elastic thermoreversible gel', 'Firm, brittle, heat-stable gel', 'Gel requires sugar + acid'],
    ['Gel melting temperature', '~60–75°C (κ); ~50–60°C (ι)', 'Synergy gel similar to κ-carrageenan', '~30–35°C (mouthfeel advantage)', '~85–90°C (very high)', '~65–80°C'],
    ['Freeze-thaw stability', 'Poor (κ); Excellent (ι)', 'Excellent (with xanthan)', 'Poor', 'Poor (syneresis)', 'Moderate'],
    ['Protein interaction (dairy)', { t: 'Strong — unique casein interaction', hl: 'good' }, 'Non-ionic — no dairy protein interaction', 'Compatible', 'Limited', 'Moderate'],
    ['Typical use level (gel)', '0.3–1.0%', 'Synergy: 0.05–0.3% with κ-carrageenan', '1.0–3.0%', '0.5–2.0%', '0.3–1.5%'],
    ['Chocolate milk stabilisation', { t: 'Excellent — 0.01–0.025%', hl: 'good' }, 'Not suitable alone', 'Not used', 'Not used', 'Not used'],
    ['Meat water binding', { t: 'Excellent (κ)', hl: 'good' }, 'Moderate', 'Good', 'Poor', 'Not used'],
    ['Pet food gelling', { t: 'Industry standard (κ)', hl: 'good' }, 'With carrageenan', 'Limited (cost)', 'Poor (too firm)', 'Not used'],
  ],
  note: 'Note: Carrageenan is uniquely positioned for dairy stabilisation and meat processing due to its protein interaction and water-binding capabilities. LBG synergy with κ-carrageenan enhances gel elasticity and firmness significantly — these two are frequently used together in commercial stabiliser systems.',
};
