'use client';

import { motion } from 'motion/react';
import S from '../../../styles/shared';

const SERVICES = [
  {
    num: '01',
    title: 'Price Support & Cost Optimization',
    desc: 'We maintain direct relationships with leading manufacturers of hydrocolloids, cellulose Ethers and alginates worldwide. Leveraging high-volume consolidated purchasing, we negotiate the most competitive prices and pass those savings to you — reducing your procurement cost without compromising quality.',
  },
  {
    num: '02',
    title: 'Flexible Payment Terms',
    desc: 'Cash flow should never be a barrier to business growth. VIVINE International offers a wide range of payment structures including T/T, L/C, D/P, D/A and O/A, designed to fit your operational model and financial preferences. Our terms are transparent, negotiable and tailored to your situation.',
  },
  {
    num: '03',
    title: 'Technical Formulation Support',
    desc: 'Our in-house application specialists provide hands-on technical assistance — from initial grade selection and dosage guidance to full formulation troubleshooting. Whether you are developing a new product or optimizing an existing one, our team is your dedicated technical partner at every stage.',
  },
  {
    num: '04',
    title: 'Global Logistics & Tracking',
    desc: 'We partner exclusively with reputable international freight carriers to ensure your shipments arrive safely and on schedule. From our warehouse to any destination port or direct to your facility, our Full Tracking Service gives you real-time visibility and peace of mind throughout the entire supply chain.',
  },
  {
    num: '05',
    title: 'After-Sale & Ongoing Support',
    desc: "Our relationship with clients doesn't end at delivery. VIVINE's dedicated after-sale team monitors product performance, addresses any technical issues and ensures complete satisfaction. From compliance documentation to application follow-ups, our support is continuous and proactive.",
  },
  {
    num: '06',
    title: 'Customized & OEM Solutions',
    desc: 'Beyond standard grades, VIVINE offers fully customized ingredient solutions — including custom packaging, proprietary blends and tailor-made food stabilizer and hydrocolloid formulations designed to your exact specification. Private labeling and OEM partnerships are available for qualified clients.',
  },
];

const ServicesListSection = () => {
  return (
    <section data-component="ServicesListSection" className="py-24 px-4 md:px-8 relative overflow-hidden" style={S.forestBgSolid}>
      {/* Background Radial Glow */}
      <div
        className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(45,74,53,0.35) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="text-[10px] font-semibold uppercase tracking-widest block mb-2"
            style={{ color: 'var(--gold-light)', fontFamily: "'Raleway', sans-serif" }}
          >
            What We Offer
          </span>
          <h2
            className="text-3xl md:text-4xl font-light text-white"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Our Core Services
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5px] bg-white/10 border border-white/10 rounded-xl overflow-hidden">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.25, delay: i * 0.035 }}
              whileHover={{ backgroundColor: 'rgba(45, 74, 83, 0.25)' }}
              className="bg-[#0e1a14]/90 p-10 relative overflow-hidden flex flex-col justify-between group min-h-[340px] transition-colors duration-300"
            >
              <div>
                {/* Large index indicator */}
                <div
                  className="text-5xl font-light leading-none mb-6 select-none transition-colors duration-300"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: 'rgba(201, 168, 76, 0.16)',
                  }}
                >
                  {svc.num}
                </div>
                <h3
                  className="text-xl font-medium mb-4 text-white tracking-wide"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {svc.title}
                </h3>
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: 'rgba(245, 238, 224, 0.7)', fontFamily: "'Raleway', sans-serif" }}
                >
                  {svc.desc}
                </p>
              </div>

              {/* Interactive golden accent bar */}
              <div
                className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-yellow-600 to-yellow-300 w-0 group-hover:w-full transition-all duration-500 ease-out"
                style={{ background: 'var(--gold)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesListSection;
