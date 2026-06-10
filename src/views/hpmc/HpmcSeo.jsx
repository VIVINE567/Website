'use client';

import React from 'react';
import { motion } from 'motion/react';
import S from '../../styles/products';
import { SEO_TITLE } from '../../data/hpmcDetails';

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.1 }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } };

export default function HpmcSeo() {
  return (
    <section className="mb-8">
      <motion.div {...fadeUp} className="rounded-md border p-6" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
        <h2 style={S.richSeoH2}>{SEO_TITLE}</h2>
        <div className="space-y-3.5" style={S.richSeoBody}>
          <p><strong style={{ color: 'var(--forest)' }}>Hydroxypropyl Methylcellulose (HPMC)</strong>, internationally recognised under the INN Hypromellose, is the most versatile cellulose ether commercially available — the only product in its class approved and optimised for simultaneous use in construction chemicals, pharmaceutical formulations, food products, and personal care applications. This breadth of function arises from its dual substitution chemistry: methyl groups (–OCH₃) confer thermal gelation, hydrophobicity, and film-forming character, while hydroxypropyl groups (–OCH₂CHOHCH₃) improve cold-water solubility, lower the cloud point, and broaden compatibility with polar solvents and food matrices.</p>
          <p>In the global construction industry, HPMC is a key functional additive in the dry-mix mortar sector — the fastest-growing segment of construction chemicals driven by urbanisation, prefabricated construction, and the adoption of quality-specified building systems. HPMC in tile adhesives, wall putty, gypsum plasters, and EIFS render systems provides the water retention, workability, and anti-sag performance that separates high-performance product-standard formulations (EN 12004 Class C2, EN 998) from basic site-mixed mortars. This performance cannot be replicated by inorganic water retention agents at equivalent dosage levels.</p>
          <p>In pharmaceutical manufacturing, HPMC (Hypromellose) serves as the backbone of both the tablet coating and the controlled-release tablet industries. The shift from solvent-based shellac and ethylcellulose coatings to aqueous HPMC film coating systems over the past four decades has been one of the defining technical changes in pharmaceutical manufacturing — driven by HPMC&apos;s excellent film properties, regulatory acceptance across all major pharmacopoeias, and environmental (solvent-free) advantages. In controlled-release formulations, HPMC hydrophilic matrix technology continues to be the most prescribed excipient technology globally for once-daily modified-release tablet design.</p>
          <p>VIVINE International supplies construction-grade, food-grade, and pharma-grade HPMC across a comprehensive viscosity range (5 mPa·s to 200,000 mPa·s) with supporting documentation including TDS, SDS, COA, and application-specific grade selection guidance. Contact our technical team for samples, formulation support, and pricing.</p>
        </div>
      </motion.div>
    </section>
  );
}
