'use client';

import { useState, useLayoutEffect } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ChevronRight, Info } from 'lucide-react';
import S from '../styles';
import ProductSidebar from '../components/ProductSidebar';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

// Industry color palette — distinct chip colors that scan well against cream
const INDUSTRY_COLORS = {
  food:         { bg: "#E8F1DC", tx: "#3E6B1F" },
  pharma:       { bg: "#E2EAF5", tx: "#23507E" },
  cosmetic:     { bg: "#F4E2EB", tx: "#7C2148" },
  construction: { bg: "#F4E6CC", tx: "#7E5310" },
  industrial:   { bg: "#ECE8DE", tx: "#4E4A40" },
  oilfield:     { bg: "#EDE2D0", tx: "#5C3D11" },
  detergent:    { bg: "#E6E8EE", tx: "#3C4868" },
  paper:        { bg: "#EEEAE0", tx: "#5E4A22" },
  textile:      { bg: "#F1E4E0", tx: "#7A3B2B" },
  all:          { bg: "rgba(201,168,76,0.18)", tx: "var(--gold-dark)" },
};

const indColor = (key) => INDUSTRY_COLORS[key] || INDUSTRY_COLORS.industrial;

const INDUSTRY_LABELS = {
  food: "Food",
  pharma: "Pharma",
  cosmetic: "Cosmetics",
  construction: "Construction",
  industrial: "Industrial",
  oilfield: "Oilfield",
  detergent: "Detergent",
  paper: "Paper",
  textile: "Textile",
};

// CSS-only logarithmic bar chart
const BarChart = ({ labels, values }) => {
  const max = Math.max(...values);
  // Use log scale; minimum value floor at 10 for log calc
  const logMax = Math.log10(max);
  const heightPct = (v) => {
    const safe = Math.max(v, 1);
    return Math.max((Math.log10(safe) / logMax) * 100, 4);
  };

  // Gridlines (log-scaled positions)
  const gridLines = [];
  let g = 10;
  while (g <= max) {
    gridLines.push(g);
    g *= 10;
  }

  const barColors = [
    "var(--gold)",
    "var(--gold-dark)",
    "var(--forest-light)",
    "var(--forest)",
    "var(--brown-warm)",
    "var(--gold)",
    "var(--gold-dark)",
    "var(--forest-light)",
  ];

  return (
    <div style={{ position: 'relative', height: 240, padding: '8px 0 32px 48px' }}>
      {/* Gridlines + Y-axis labels */}
      {gridLines.map((val) => {
        const top = 100 - (Math.log10(val) / logMax) * 100;
        return (
          <div
            key={val}
            style={{
              position: 'absolute',
              left: 48,
              right: 0,
              top: `${top}%`,
              borderTop: '1px dashed rgba(201,168,76,0.2)',
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: -44,
                top: -8,
                ...S.richChartAxisLabel,
              }}
            >
              {val >= 1000 ? `${val / 1000}k` : val}
            </span>
          </div>
        );
      })}

      {/* Bars */}
      <div
        style={{
          position: 'absolute',
          left: 48,
          right: 8,
          top: 0,
          bottom: 32,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-around',
          gap: 8,
        }}
      >
        {labels.map((label, i) => (
          <div
            key={label}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '100%',
              justifyContent: 'flex-end',
              position: 'relative',
            }}
          >
            <div
              title={`${label}: up to ${values[i].toLocaleString()} cps`}
              style={{
                width: '70%',
                maxWidth: 48,
                height: `${heightPct(values[i])}%`,
                background: barColors[i % barColors.length],
                borderRadius: '4px 4px 0 0',
                transition: 'height 0.4s',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: -28,
                left: 0,
                right: 0,
                ...S.richChartBarLabel,
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductDetailRich = ({ slug, product }) => {
  const [filter, setFilter] = useState('all');

  useLayoutEffect(() => { window.scrollTo(0, 0); }, [slug]);

  return (
    <div className="pt-[72px]" style={{ background: 'var(--cream)' }}>

      {/* Hero band — reuses dark gradient */}
      <section
        className="pb-12 pt-20 px-4 md:px-6 overflow-hidden"
        style={S.productDetailHero}
      >
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            {...fadeUp(0)}
            className="flex items-center gap-2 mb-6 uppercase"
            style={S.productDetailBreadcrumb}
          >
            <Link href="/products" className="hover:opacity-80 transition-opacity">Products</Link>
            <ChevronRight className="w-3 h-3" style={{ opacity: 0.5 }} />
            <span>{product.name}</span>
          </motion.div>

          {product.productTag && (
            <motion.div {...fadeUp(0.05)} className="mb-3">
              <span
                style={{
                  ...S.richProductTag,
                  background: 'rgba(201,168,76,0.2)',
                  color: 'var(--gold-light)',
                }}
              >
                {product.productTag}
              </span>
            </motion.div>
          )}

          <motion.h1
            {...fadeUp(0.1)}
            className="text-3xl md:text-4xl lg:text-5xl mb-3"
            style={{ ...S.productDetailHeroH1 }}
          >
            {product.name}
          </motion.h1>

          {(product.casNo || product.eNo || product.synonyms) && (
            <motion.div
              {...fadeUp(0.15)}
              className="mb-5"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.78rem",
                color: "rgba(245,238,224,0.7)",
                letterSpacing: "0.04em",
              }}
            >
              {product.casNo && <>CAS {product.casNo}</>}
              {product.eNo && product.eNo !== '—' && <> &nbsp;·&nbsp; {product.eNo}</>}
              {product.synonyms && <> &nbsp;·&nbsp; {product.synonyms}</>}
            </motion.div>
          )}

          <motion.p
            {...fadeUp(0.2)}
            className="text-sm md:text-base max-w-3xl"
            style={S.productDetailTagline}
          >
            {product.tagline}
          </motion.p>

          {product.statPills && (
            <motion.div {...fadeUp(0.3)} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-2xl">
              {product.statPills.map((pill, i) => (
                <div
                  key={i}
                  style={{
                    ...S.richStatPill,
                    background: "rgba(245,238,224,0.08)",
                    border: "1px solid rgba(201,168,76,0.3)",
                  }}
                >
                  <div style={{ ...S.richStatVal, color: 'var(--cream)' }}>{pill.val}</div>
                  <div style={{ ...S.richStatLbl, color: 'rgba(245,238,224,0.7)' }}>{pill.label}</div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Main content + sidebar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 py-16">

          <ProductSidebar currentSlug={slug} />

          <div className="min-w-0 space-y-14">

            {/* Description paragraphs */}
            {product.description && (
              <section>
                <motion.div {...fadeUp(0)} className="space-y-4 max-w-3xl">
                  {product.description.map((para, i) => (
                    <p key={i} style={S.richHeroDesc}>{para}</p>
                  ))}
                </motion.div>
              </section>
            )}

            {/* Highlights row */}
            {product.highlights && (
              <section>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {product.highlights.map((h, i) => (
                    <motion.div key={i} {...fadeUp(0.04 * i)} style={S.richHlCard}>
                      <div style={S.richHlIcon}>{h.icon}</div>
                      <div style={S.richHlVal}>{h.val}</div>
                      <div style={S.richHlLbl}>{h.lbl}</div>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* Key properties */}
            {product.keyProperties && (
              <section>
                <motion.div {...fadeUp(0)} className="mb-6">
                  <h2 style={S.richSectionHeader}>
                    Key properties of <em style={{ color: 'var(--gold-dark)', fontStyle: 'normal' }}>{product.shortName || product.name.split('(')[0].trim()}</em>
                  </h2>
                  <p style={S.richSectionSub}>What sets it apart in formulations</p>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.keyProperties.map((kp, i) => (
                    <motion.div key={i} {...fadeUp(0.05 * i)} style={S.richInfoCard}>
                      <h3 style={S.richInfoTitle}>{kp.title}</h3>
                      <p style={S.richInfoBody}>{kp.body}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* Technical specifications */}
            {product.specs && (
              <section>
                <motion.div {...fadeUp(0)} className="mb-5">
                  <h2 style={S.richSectionHeader}>Technical specifications</h2>
                </motion.div>
                <div style={S.richSpecTableWrap}>
                  <table className="w-full" style={{ borderCollapse: 'collapse' }}>
                    <tbody>
                      {Object.entries(product.specs).map(([k, v], i, arr) => (
                        <tr key={k} style={i < arr.length - 1 ? S.richSpecRow : {}}>
                          <td className="px-5 py-2.5" style={{ ...S.richSpecKey, width: '42%' }}>{k}</td>
                          <td className="px-5 py-2.5" style={S.richSpecVal}>{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Grade comparison + filter */}
            {product.grades && (
              <section>
                <motion.div {...fadeUp(0)} className="mb-5">
                  <h2 style={S.richSectionHeader}>Grade comparison</h2>
                  <p style={S.richSectionSub}>Select an industry to highlight relevant grades</p>
                </motion.div>

                <div className="flex flex-wrap items-center gap-2 mb-5" style={S.richFilterBar}>
                  <span style={S.richFilterLabel} className="mr-2">Filter by industry:</span>
                  {['all', ...(product.industries || [])].map((ind) => {
                    const active = filter === ind;
                    return (
                      <button
                        key={ind}
                        onClick={() => setFilter(ind)}
                        style={{
                          ...S.richFilterTag,
                          ...(active ? S.richFilterTagActive : {}),
                        }}
                      >
                        {ind === 'all' ? 'All grades' : (INDUSTRY_LABELS[ind] || ind)}
                      </button>
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {product.grades.map((g, i) => {
                    const ok = filter === 'all' || (g.industries || []).includes(filter);
                    return (
                      <motion.div
                        key={g.id}
                        {...fadeUp(0.03 * i)}
                        style={{
                          ...S.richGradeCard,
                          ...(g.featured ? S.richGradeCardFeatured : {}),
                          ...(ok ? {} : S.richGradeCardDim),
                        }}
                      >
                        <div className="flex justify-between items-start gap-2 mb-1.5">
                          <div style={S.richGradeName}>{g.name}</div>
                          {g.badge && (
                            <span
                              style={{
                                ...S.richGradeBadge,
                                background: indColor(g.badge.color).bg,
                                color: indColor(g.badge.color).tx,
                              }}
                            >
                              {g.badge.text}
                            </span>
                          )}
                        </div>
                        <div style={S.richViscRange}>{g.range}</div>
                        <div style={S.richVbarBg} className="mb-3">
                          <div style={{ ...S.richVbarFill, width: `${g.viscPct}%` }} />
                        </div>
                        {g.specs && (
                          <div style={S.richGradeSpecsWrap} className="mb-3">
                            {g.specs.map(([k, v]) => (
                              <div
                                key={k}
                                className="flex justify-between items-baseline gap-2"
                                style={S.richGradeSpecRow}
                              >
                                <span style={S.richGradeSpecKey}>{k}</span>
                                <span style={S.richGradeSpecVal}>{v}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {g.apps && (
                          <>
                            <div style={S.richAppsLbl}>Applications</div>
                            <div className="flex flex-wrap gap-1">
                              {g.apps.map((a) => (
                                <span
                                  key={a.l}
                                  style={{
                                    ...S.richAppTag,
                                    background: indColor(a.i).bg,
                                    color: indColor(a.i).tx,
                                  }}
                                >
                                  {a.l}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Quick reference table */}
            {product.refTable && (
              <section>
                <motion.div {...fadeUp(0)} className="mb-5">
                  <h2 style={S.richSectionHeader}>Quick reference table</h2>
                  <p style={S.richSectionSub}>All grades at a glance</p>
                </motion.div>
                <div style={S.richRefTableWrap} className="overflow-x-auto">
                  <table className="w-full" style={{ borderCollapse: 'collapse', minWidth: 600 }}>
                    <thead style={S.richRefTableHead}>
                      <tr>
                        <th style={S.richRefTableTh}>Grade</th>
                        <th style={S.richRefTableTh}>Viscosity (cps)</th>
                        <th style={S.richRefTableTh}>Standard</th>
                        <th style={S.richRefTableTh}>Key features</th>
                        <th style={S.richRefTableTh}>Applications</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.refTable.map((r, i) => (
                        <tr key={i}>
                          <td style={S.richRefTableTd}>
                            <span
                              style={{
                                ...S.richTGrade,
                                background: indColor(r.color || 'all').bg,
                                color: indColor(r.color || 'all').tx,
                              }}
                            >
                              {r.grade}
                            </span>
                          </td>
                          <td style={{ ...S.richRefTableTd, fontWeight: 500, color: 'var(--forest)' }}>{r.viscosity}</td>
                          <td style={S.richRefTableTd}>{r.standard}</td>
                          <td style={S.richRefTableTd}>{r.features}</td>
                          <td style={S.richRefTableTd}>{r.applications}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* CSS bar chart */}
            {product.chartLabels && product.chartValues && (
              <section>
                <motion.div {...fadeUp(0)} className="mb-5">
                  <h2 style={S.richSectionHeader}>Viscosity comparison</h2>
                  <p style={S.richSectionSub}>Max viscosity at 2% solution, 25°C</p>
                </motion.div>
                <div style={S.richChartCard}>
                  <div className="flex justify-between items-baseline flex-wrap gap-2 mb-2">
                    <span style={S.richChartTitle}>Max viscosity by grade (cps)</span>
                    <span style={S.richChartSub}>Logarithmic scale</span>
                  </div>
                  <BarChart labels={product.chartLabels} values={product.chartValues} />
                </div>
              </section>
            )}

            {/* SEO description */}
            {product.seoDescription && (
              <section>
                <div style={S.richSeoCard}>
                  <h2 style={S.richSeoH2}>Product description</h2>
                  <div
                    style={S.richSeoBody}
                    dangerouslySetInnerHTML={{ __html: product.seoDescription }}
                  />
                </div>
              </section>
            )}

            {/* Footer note */}
            {product.footerNote && (
              <section>
                <div style={S.richFooterNote} className="flex items-start gap-3">
                  <Info className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{product.footerNote}</span>
                </div>
              </section>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailRich;
