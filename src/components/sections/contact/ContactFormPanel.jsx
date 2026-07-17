'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Check, Shield } from 'lucide-react';

const INDUSTRIES = [
  'Food & Beverage',
  'Pharmaceutical',
  'Nutraceutical / Dietary Supplements',
  'Cosmetics & Personal Care',
  'Oil & Gas / Oilfield Chemicals',
  'Construction Chemicals',
  'Textile Chemicals',
  'Industrial / Manufacturing',
  'Animal Nutrition',
  'Other',
];

const PRODUCTS = [
  'Carrageenan',
  'Sodium Alginate',
  'PGA',
  'Pectin',
  'Xanthan Gum',
  'Guar Gum',
  'Gellan Gum',
  'Konjac Gum',
  'HPMC',
  'HEC',
  'MHEC',
  'Sodium CMC',
  'PAC',
  'Croscarmellose Sodium (CCS)',
  'Alginic Acid',
  'Locust Bean Gum (LBG)',
  'Cellulose Powder',
  'Modified Starch',
];

const inputBase = {
  width: '100%',
  padding: '10px 13px',
  border: '1px solid rgba(201,168,76,0.3)',
  borderRadius: 6,
  fontFamily: "'Open Sans', sans-serif",
  fontSize: 13.5,
  color: 'var(--forest)',
  background: 'var(--cream)',
  outline: 'none',
  WebkitAppearance: 'none',
};

const Label = ({ children, required }) => (
  <label
    className="block mb-1.5"
    style={{
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--brown-warm)',
      fontFamily: "'Raleway', sans-serif",
    }}
  >
    {children}
    {required && <span style={{ color: 'var(--gold-dark)', marginLeft: 3 }}>*</span>}
  </label>
);

const ContactFormPanel = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const toggleProduct = (p) => {
    setSelectedProducts((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!selectedProducts.length) {
      setError('Please select at least one product.');
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      formType: 'Quick Quotes Request',
      name: String(formData.get('name') || '').trim(),
      company: String(formData.get('company') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      industry: String(formData.get('industry') || '').trim(),
      products: selectedProducts,
      message: String(formData.get('message') || '').trim(),
    };

    setSending(true);
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json().catch(() => ({}));

      if (!res.ok || result.status === 'error') {
        throw new Error(result.message || 'Unable to send your inquiry.');
      }

      setSent(true);
      setSelectedProducts([]);
      form.reset();
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.div data-component="ContactFormPanel"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-xl overflow-hidden lg:sticky lg:top-24"
      style={{
        background: 'var(--cream)',
        border: '1px solid rgba(201,168,76,0.25)',
        boxShadow: '0 2px 20px rgba(44,58,35,0.06)',
      }}
    >
      {/* Form Header */}
      <div className="relative overflow-hidden p-6" style={{ background: 'var(--forest)' }}>
        <div
          className="absolute bottom-0 left-0 right-0 h-[3px]"
          style={{ background: 'var(--gold)' }}
        />
        <div
          className="absolute top-0 right-0 w-[120px] h-full opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />
        <h3
          className="text-xl font-black uppercase mb-1 relative"
          style={{ fontFamily: "'Oswald', sans-serif", color: '#fff', letterSpacing: '-0.01em' }}
        >
          Quick Quotes Request
        </h3>
        <p
          className="text-xs relative"
          style={{ color: 'rgba(245,238,224,0.6)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
        >
          Fill in your details and we'll respond within 24 hours
        </p>
      </div>

      {/* Form Body */}
      <form className="p-6" onSubmit={handleSubmit}>
        {/* Name / Company row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div>
            <Label required>Name</Label>
            <input type="text" name="name" placeholder="Your full name" required style={inputBase} />
          </div>
          <div>
            <Label>Company</Label>
            <input type="text" name="company" placeholder="Company name" style={inputBase} />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <Label required>Email</Label>
          <input type="email" name="email" placeholder="your@email.com" required style={inputBase} />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <Label>Phone</Label>
          <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" style={inputBase} />
        </div>

        {/* Industry select */}
        <div className="mb-4">
          <Label>Industry / Application</Label>
          <select
            name="industry"
            defaultValue=""
            style={{
              ...inputBase,
              cursor: 'pointer',
              paddingRight: 34,
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23866E54' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
            }}
          >
            <option value="" disabled>
              Select your industry
            </option>
            {INDUSTRIES.map((ind) => (
              <option key={ind}>{ind}</option>
            ))}
          </select>
        </div>

        {/* Products checkboxes */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2.5">
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--brown-warm)',
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              Products of Interest <span style={{ color: 'var(--gold-dark)' }}>*</span>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {PRODUCTS.map((p) => {
              const checked = selectedProducts.includes(p);
              return (
                <label
                  key={p}
                  className="flex items-center gap-2 px-2.5 py-2 rounded-md cursor-pointer transition-all"
                  style={{
                    border: `1px solid ${checked ? 'var(--gold)' : 'rgba(201,168,76,0.3)'}`,
                    background: checked ? 'rgba(201,168,76,0.15)' : 'transparent',
                  }}
                  onMouseEnter={(e) => { if (!checked) e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)'; }}
                  onMouseLeave={(e) => { if (!checked) e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; }}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleProduct(p)}
                    className="hidden"
                  />
                  <div
                    className="w-4 h-4 rounded-sm flex items-center justify-center shrink-0"
                    style={{
                      border: `1.5px solid ${checked ? 'var(--gold-dark)' : 'rgba(134,110,84,0.5)'}`,
                      background: checked ? 'var(--gold-dark)' : 'var(--cream)',
                    }}
                  >
                    {checked && <Check className="w-3 h-3" style={{ color: '#fff' }} />}
                  </div>
                  <span
                    className="text-xs"
                    style={{
                      color: checked ? 'var(--gold-dark)' : 'var(--brown-warm)',
                      fontWeight: checked ? 600 : 500,
                      fontFamily: "'Open Sans', sans-serif",
                    }}
                  >
                    {p}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Message */}
        <div className="mb-4">
          <Label required>Request / Inquiry Details</Label>
          <textarea
            name="message"
            placeholder="For better quotations, kindly enter your inquiry details such as requirements, application field, order quantity, specification needs, etc."
            required
            rows={4}
            style={{ ...inputBase, minHeight: 100, resize: 'vertical', lineHeight: 1.55 }}
          />
        </div>

        {error && (
          <p
            role="alert"
            className="mb-3"
            style={{
              color: '#a43422',
              fontFamily: "'Open Sans', sans-serif",
              fontSize: 12.5,
              lineHeight: 1.5,
            }}
          >
            {error}
          </p>
        )}

        {/* Submit / Success */}
        {!sent ? (
          <motion.button
            type="submit"
            disabled={sending}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="btn-gold w-full py-3 rounded-md flex items-center justify-center gap-2 text-sm font-semibold"
            style={{
              fontFamily: "'Raleway', sans-serif",
              letterSpacing: '0.05em',
              opacity: sending ? 0.7 : 1,
            }}
          >
            {sending ? (
              'Sending…'
            ) : (
              <>
                <Send className="w-4 h-4" />
                Quick Quotes Now
              </>
            )}
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 p-4 rounded-md"
            style={{
              background: 'rgba(44,58,35,0.08)',
              border: '1px solid var(--forest)',
              color: 'var(--forest)',
              fontFamily: "'Open Sans', sans-serif",
              fontSize: 13.5,
              fontWeight: 500,
            }}
          >
            <Check className="w-5 h-5 shrink-0" />
            Thank you! Your inquiry has been received. Our team will contact you within 24 hours.
          </motion.div>
        )}

        {/* Privacy note */}
        <div
          className="flex items-start gap-2 mt-3 text-center justify-center"
          style={{ fontSize: 10.5, color: 'var(--brown-warm)', fontFamily: "'Open Sans', sans-serif", lineHeight: 1.5 }}
        >
          <Shield className="w-3 h-3 shrink-0 mt-px" />
          <span>Your email information is absolutely safe. We will not disclose it to third parties for any reason.</span>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactFormPanel;
