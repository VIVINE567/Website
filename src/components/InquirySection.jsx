'use client';

import { motion } from 'motion/react';
import { XCircle, Frown, Angry, Layers, ShieldQuestion, Bell } from 'lucide-react';
import S from '../styles/inquiry';
import FormInput from './FormInput';
import { CONTENT } from '../content';

const Ci = CONTENT.inquiry;
const Cv = CONTENT.vision;

const VISION_ICONS = [XCircle, Frown, Angry, Layers, ShieldQuestion, Bell];

const InquirySection = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      formType: 'Quick Inquiry',
      firstName: form.firstName.value,
      lastName:  form.lastName.value,
      email:     form.email.value,
      company:   form.company.value,
      phone:     form.phone.value,
      message:   form.message.value,
    };
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Submitting...';
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok || result.status === 'error') throw new Error(result.message);
      btn.textContent = 'Submitted ✓';
      form.reset();
      setTimeout(() => { btn.textContent = Ci.submitButton; btn.disabled = false; }, 3000);
    } catch (err) {
      btn.textContent = 'Error – Try Again';
      btn.disabled = false;
      console.error('Form submission error:', err);
    }
  };

  return (
    <section data-component="InquirySection" className="py-24 overflow-hidden" style={S.inquirySection}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-eyebrow mb-3" style={S.inquiryEyebrow}>{Ci.eyebrow}</div>
            <h2 style={S.inquiryH2} className="text-2xl md:text-3xl mb-4">
              {Ci.headingPre} <em style={S.inquiryAccent}>{Ci.headingAccent}</em>
            </h2>

            <form className="inquiry-form" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <FormInput type="text" name="firstName" placeholder={Ci.fields.firstName} required />
                <FormInput type="text" name="lastName" placeholder={Ci.fields.lastName} required />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <FormInput type="email" name="email" placeholder={Ci.fields.email} required />
                <FormInput type="text" name="company" placeholder={Ci.fields.company} />
              </div>

              <FormInput type="tel" name="phone" placeholder={Ci.fields.phone} />

              <FormInput as="textarea" name="message" rows="3" placeholder={Ci.fields.message} required />

              <div className="mt-4">
                <button type="submit" className="btn-gold px-8 py-2.5 rounded-md" style={S.inquirySubmitBtn}>
                  {Ci.submitButton}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right: Vision Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:pt-8"
          >
            <h2 style={S.visionH2} className="text-xl md:text-2xl mb-1 uppercase">
              {Cv.heading1Pre}{' '}
              <span className="relative inline-block whitespace-nowrap">
                <span style={S.visionAccent}>{Cv.heading1Accent}</span>
                <motion.svg
                  style={{
                    position: 'absolute',
                    top: '-17px',
                    left: '-8px',
                    width: 'calc(100% + 14px)',
                    height: 'calc(100% + 34px)',
                    pointerEvents: 'none',
                    overflow: 'visible',
                  }}
                  viewBox="0 0 100 40"
                  fill="none"
                >
                  <motion.path
                    d="M 52,2 C 76,1 98,10 98,20 C 98,30 76,39 52,39 C 28,39 2,30 2,20 C 2,10 26,1 52,2"
                    stroke="#e53e3e"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    animate={{
                      pathLength: [0, 1, 1, 1],
                      opacity:    [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 2.4,
                      times: [0, 0.42, 0.72, 1],
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.svg>
              </span>
            </h2>
            <h2 style={S.visionH2} className="text-xl md:text-2xl mb-5 uppercase">
              {Cv.heading2}
            </h2>

            <div className="space-y-3">
              {Cv.items.map((text, idx) => {
                const Icon = VISION_ICONS[idx];
                return (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div className="shrink-0">
                      <Icon className="w-4 h-4" style={{ ...S.visionListIcon, marginTop: '4px' }} />
                    </div>
                    <p style={S.visionListText}>{text}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-6" style={S.visionDivider}>
              <p style={S.visionSubscribeText} className="text-xs md:text-sm uppercase">
                {Cv.subscribePre}{' '}
                <span style={S.visionSubscribeAccent}>{Cv.subscribeAccent}</span>{' '}
                {Cv.subscribePost}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default InquirySection;
