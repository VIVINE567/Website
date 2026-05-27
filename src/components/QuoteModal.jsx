'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';

const QuoteModal = ({ open, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', requirements: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', email: '', requirements: '' });
        onClose();
      }, 2500);
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
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
            className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
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
                Contact <span style={{ color: 'var(--gold-dark)' }}>Vivine</span> to Get Innovative Products and Competitive Prices
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
