'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Check } from 'lucide-react';
import { CONTENT } from '../content';

// Source products from the Products nav dropdown — single source of truth
const PRODUCTS = (CONTENT.nav.links.find((l) => l.label === 'Products')?.subItems || [])
  .map((s) => (typeof s === 'string' ? s : s.label))
  .concat(['Alginic Acid', 'Cellulose Powder', 'Modified Starch']);

const QuoteModal = ({ open, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', requirements: '' });
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const toggleProduct = (p) =>
    setSelectedProducts((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setError('');
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!selectedProducts.length) {
      setError('Please select at least one product.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'Quote Modal Request',
          ...form,
          products: selectedProducts,
        }),
      });
      const result = await res.json().catch(() => ({}));

      if (!res.ok || result.status === 'error') {
        throw new Error(result.message || 'Unable to send your request.');
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', email: '', requirements: '' });
        setSelectedProducts([]);
        onClose();
      }, 2500);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence data-component="QuoteModal">
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
            style={{ background: 'var(--cream)' }}
          >
            {/* Gold top accent bar */}
            <div
              className="h-1.5"
              style={{ background: 'linear-gradient(to right, var(--gold), var(--gold-dark))' }}
            />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full transition-colors hover:bg-black/5"
              style={{ color: 'var(--brown-warm)' }}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10">
              {/* Header */}
              <h3
                className="text-xl md:text-2xl mb-2"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: 'var(--forest)',
                  fontWeight: 700,
                }}
              >
                Contact <span style={{ color: 'var(--gold-dark)' }}>VIVINE</span> to Get Innovative Products and Competitive Prices
              </h3>

              <div
                className="w-14 h-[2px] mb-5"
                style={{ background: 'linear-gradient(to right, var(--gold), transparent)' }}
              />

              <p
                className="mb-8"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '0.88rem',
                  color: 'var(--brown-warm)',
                  lineHeight: 1.6,
                }}
              >
                Ingredients, Formulas, and Insights around the topics you care about...
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-10"
                >
                  <div
                    className="text-4xl mb-4"
                    style={{ color: 'var(--gold-dark)' }}
                  >
                    ✓
                  </div>
                  <p
                    className="text-lg font-semibold"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: 'var(--forest)',
                    }}
                  >
                    Thank you! We'll be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2"
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: '0.88rem',
                        background: 'var(--cream-dark, #f5f0e8)',
                        border: '1px solid rgba(201,168,76,0.25)',
                        color: 'var(--forest)',
                        '--tw-ring-color': 'rgba(201,168,76,0.4)',
                      }}
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2"
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: '0.88rem',
                        background: 'var(--cream-dark, #f5f0e8)',
                        border: '1px solid rgba(201,168,76,0.25)',
                        color: 'var(--forest)',
                        '--tw-ring-color': 'rgba(201,168,76,0.4)',
                      }}
                    />
                  </div>

                  {/* Products of Interest */}
                  <div>
                    <div
                      className="mb-2.5 flex items-center justify-between"
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--brown-warm)',
                      }}
                    >
                      <span>
                        Products of Interest <span style={{ color: 'var(--gold-dark)' }}>*</span>
                      </span>
                      {selectedProducts.length > 0 && (
                        <span style={{ color: 'var(--gold-dark)', fontWeight: 700 }}>
                          {selectedProducts.length} selected
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                      {PRODUCTS.map((p) => {
                        const checked = selectedProducts.includes(p);
                        return (
                          <label
                            key={p}
                            className="flex items-center gap-2 px-2.5 py-2 rounded-md cursor-pointer transition-all"
                            style={{
                              border: `1px solid ${checked ? 'var(--gold)' : 'rgba(201,168,76,0.3)'}`,
                              background: checked ? 'rgba(201,168,76,0.15)' : 'var(--cream-dark, #f5f0e8)',
                            }}
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

                  <div>
                    <textarea
                      name="requirements"
                      placeholder="Tell Us Your Requirements"
                      required
                      rows={5}
                      value={form.requirements}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2 resize-vertical"
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: '0.88rem',
                        background: 'var(--cream-dark, #f5f0e8)',
                        border: '1px solid rgba(201,168,76,0.25)',
                        color: 'var(--forest)',
                        '--tw-ring-color': 'rgba(201,168,76,0.4)',
                      }}
                    />
                  </div>

                  {error && (
                    <p
                      role="alert"
                      style={{
                        color: '#a43422',
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: 12.5,
                        lineHeight: 1.5,
                        marginTop: '-0.5rem',
                      }}
                    >
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-semibold uppercase tracking-wider transition-all active:scale-[0.98] disabled:opacity-60"
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: '0.82rem',
                      letterSpacing: '0.12em',
                      background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
                      color: 'var(--forest)',
                      boxShadow: '0 4px 14px rgba(201,168,76,0.3)',
                    }}
                  >
                    {submitting ? 'Submitting...' : 'Submit Your Request'}
                    {!submitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
