// Croscarmellose Sodium (CCS) content — mirrors "ccs_croscarmellose_sodium_vivine.html"

export const IC = {
  pharma: { bg: '#EAF0FB', tx: '#1A3A8C' },
  nutri:  { bg: '#EAF5E8', tx: '#1E6B28' },
  otc:    { bg: '#FFF4E8', tx: '#8A4A00' },
  all:    { bg: '#EAEEfA', tx: '#1A3A8C' },
};

export const HERO = {
  productTag: 'Cross-linked Na-CMC · Superdisintegrant · USP/NF · Ph.Eur. · BP · JP',
  title: 'Croscarmellose Sodium (CCS)',
  cas: 'CAS 74811-65-7  ·  USP/NF: Croscarmellose Sodium  ·  Ph.Eur. 9.0  ·  BP  ·  JP XVII',
  desc: 'Croscarmellose Sodium (CCS) is a cross-linked polymer of sodium carboxymethyl cellulose — the gold-standard superdisintegrant in oral solid dosage forms. Its three-dimensional cross-linked network swells up to 4–8 times its original volume in seconds upon contact with aqueous fluid, generating rapid internal wicking and swelling pressure that ruptures compressed tablet matrices. CCS is multi-compendial (USP/NF, Ph.Eur., BP, JP), insoluble in water (ensuring no viscous layer formation), and compatible with a wide range of APIs, fillers, binders, and lubricants. It is the most widely specified tablet and capsule disintegrant in pharmaceutical and nutraceutical manufacturing worldwide.',
  statPills: [
    { val: 'USP/NF', lbl: 'Ph.Eur. · BP · JP' },
    { val: '0.5–5%', lbl: 'Typical use level' },
    { val: '4–8× swelling', lbl: 'Volume expansion' },
    { val: '< 3 min', lbl: 'USP disint. target' },
  ],
};

export const HIGHLIGHTS = [
  { icon: '💊', val: 'Superdisintegrant', lbl: 'Fastest tablet breakup' },
  { icon: '💧', val: '4–8× swelling', lbl: 'Volumetric expansion' },
  { icon: '⚡', val: 'Rapid wicking', lbl: 'Capillary water uptake' },
  { icon: '🔬', val: 'Multi-compendial', lbl: 'USP/NF · Ph.Eur. · BP · JP' },
  { icon: '🧪', val: 'Water-insoluble', lbl: 'No gel layer formation' },
  { icon: '✅', val: '0.5–5% use level', lbl: 'Pharma & nutraceutical' },
  { icon: '🏭', val: 'WG · DC · WC', lbl: 'All tablet processes' },
  { icon: '🌿', val: 'Nutraceutical grade', lbl: 'Vitamins & supplements' },
];

export const MECHANISM = {
  title: 'How Croscarmellose Sodium works — mechanism of disintegration',
  steps: [
    { num: 1, title: 'Water contact', desc: 'Tablet reaches GI fluid. CCS particles rapidly wick water via capillary action through their fibrous, porous structure — faster than simple diffusion.' },
    { num: 2, title: 'Rapid swelling', desc: 'Cross-linked Na-CMC chains hydrate and swell 4–8× in volume within seconds. The cross-linked network prevents dissolution — maintaining structural pressure.' },
    { num: 3, title: 'Swelling pressure', desc: 'Volumetric expansion generates internal hydrostatic pressure within the compacted tablet matrix, overcoming the cohesive binding forces of binders and compaction.' },
    { num: 4, title: 'Matrix rupture', desc: 'Tablet matrix fractures and disintegrates into primary granules or fine particles, maximising surface area exposed to GI fluid for dissolution.' },
    { num: 5, title: 'Drug dissolution', desc: 'Maximised surface area drives rapid API dissolution — improving dissolution rate, Cmax, and oral bioavailability of the active pharmaceutical ingredient.' },
  ],
};

export const INFO_CARDS = [
  {
    title: 'Cross-linked structure — water insoluble, swells rapidly',
    body: 'Unlike sodium CMC, which is soluble in water and forms viscous gels, CCS is cross-linked — making it permanently insoluble. On hydration, it swells 4–8× in volume without dissolving. This means no viscous gel layer forms around the tablet to retard drug release (a common problem with soluble swelling agents like alginates or starch).',
  },
  {
    title: 'Dual mechanism: wicking + swelling',
    body: 'CCS works by two simultaneous mechanisms: (1) capillary wicking — its fibrous structure rapidly draws water by capillary action deep into the tablet core; and (2) volumetric swelling — cross-linked chains swell 4–8× upon hydration, generating internal pressure to rupture the tablet matrix. This dual action makes CCS faster than starch, PVPP, or sodium starch glycolate (SSG) at equivalent concentrations.',
  },
  {
    title: 'Effective at very low concentrations (0.5–2%)',
    body: 'CCS achieves rapid disintegration at 0.5–2% w/w — far lower than conventional disintegrants (e.g. maize starch at 5–20%). Lower use levels reduce tablet weight and cost, allow more API or filler content, and minimise risk of compaction hardness loss. Optimal disintegration is typically achieved at 1–3% in most direct compression and wet granulation formulations.',
  },
  {
    title: 'Compatible with all major tablet manufacturing processes',
    body: 'CCS is suitable for: Wet Granulation (WG) — added intragranularly or extragranularly; Direct Compression (DC) — blended directly with API and excipients; Dry Granulation / Roller Compaction (WC) — added before or after roller compaction. Intragranular + extragranular split addition (50:50) is recommended for optimal performance in wet granulation formulations.',
  },
  {
    title: 'Wide API and excipient compatibility',
    body: 'CCS is chemically inert and compatible with the majority of APIs, fillers (lactose, MCC, DCPA, mannitol), binders (HPMC, PVP, HPC), lubricants (magnesium stearate, stearic acid), and glidants (colloidal silica). Mixing time with magnesium stearate should be minimised to avoid lubricant sensitivity. Not recommended with strongly acidic APIs where sodium salt exchange could reduce pH stability.',
  },
  {
    title: 'Multi-compendial — globally registered excipient',
    body: 'CCS is monographed in USP/NF (United States Pharmacopeia), Ph.Eur. (European Pharmacopoeia), BP (British Pharmacopoeia), and JP (Japanese Pharmacopoeia). This multi-compendial status allows a single CCS grade to support drug registration and batch release in the US, EU, UK, Japan, and ICH-member markets simultaneously — simplifying global regulatory submissions (DMF, EDMF).',
  },
];

// "Disintegrant comparison chart" — LINEAR bar chart, solid bars, hover tooltip
export const DISINT_CHART = {
  header: 'Superdisintegrant performance comparison',
  headerSub: 'Relative disintegration efficiency at equal use levels (% w/w in standard tablet formulation)',
  title: 'Disintegration efficiency index — CCS vs. common disintegrants',
  sub: 'Relative index (100 = fastest); indicative at equivalent 2% use level in direct compression tablet',
  yMax: 110,
  yLabel: 'Relative disintegration efficiency (100 = fastest)',
  bars: [
    { label: 'CCS\n(Croscarmellose Na)', val: 100, color: '#2350B8' },
    { label: 'SSG\n(Na Starch Glycolate)', val: 90, color: '#3AA060' },
    { label: 'Crospovidone\n(PVPP)', val: 88, color: '#C87820' },
    { label: 'Pregelatinised\nStarch', val: 40, color: '#9060C0' },
    { label: 'Maize Starch', val: 22, color: '#B03030' },
  ],
};
