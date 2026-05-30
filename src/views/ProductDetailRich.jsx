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
  // Pectin-specific application segments
  jam:          { bg: "#FFF4E0", tx: "var(--gold-dark)" },
  dairy:        { bg: "rgba(201,168,76,0.1)", tx: "var(--brown-warm)" },
  beverage:     { bg: "rgba(44,58,35,0.1)", tx: "var(--forest)" },
  confectionery:{ bg: "rgba(201,168,76,0.14)", tx: "#7A4A00" },
  bakery:       { bg: "rgba(134,110,84,0.12)", tx: "var(--brown-warm)" },
  lowsugar:     { bg: "rgba(44,74,122,0.1)", tx: "#1A4A7A" },
  // CCS application segments
  nutri:        { bg: "rgba(44,58,35,0.1)", tx: "var(--forest)" },
  otc:          { bg: "rgba(201,168,76,0.14)", tx: "var(--gold-dark)" },
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
  jam: "Jams & Jellies",
  dairy: "Dairy",
  beverage: "Beverages",
  confectionery: "Confectionery",
  bakery: "Bakery",
  lowsugar: "Low-sugar / Diet",
  nutri: "Nutraceutical",
  otc: "OTC / Generic",
};

// CSS-only chart — supports log/linear scale + single bars or floating range bars
const BarChart = ({ labels, values, ranges, unit, scale = 'log', yMax }) => {
  const isRange = Array.isArray(ranges);
  const allVals = isRange ? ranges.flatMap(([lo, hi]) => [lo, hi]) : values;
  const dataMax = yMax || Math.max(...allVals);
  const dataMin = scale === 'linear' ? 0 : 1;
  const linearMax = yMax || Math.ceil(dataMax / 10) * 10;

  const pos = (v) => {
    const safe = Math.max(v, dataMin);
    if (scale === 'log') return (Math.log10(safe) / Math.log10(dataMax)) * 100;
    return (safe / linearMax) * 100;
  };

  // Gridlines
  const gridLines = [];
  if (scale === 'log') {
    let g = 10;
    while (g <= dataMax) { gridLines.push(g); g *= 10; }
  } else {
    const step = linearMax / 5;
    for (let i = 1; i <= 5; i++) gridLines.push(step * i);
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

  const fmt = (v) => {
    if (unit === '%') return `${v}%`;
    return v >= 1000 ? `${v / 1000}k` : v;
  };

  return (
    <div style={{ position: 'relative', height: 260, padding: '8px 0 48px 48px' }}>
      {gridLines.map((val) => {
        const top = 100 - pos(val);
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
            <span style={{ position: 'absolute', left: -44, top: -8, ...S.richChartAxisLabel }}>
              {fmt(val)}
            </span>
          </div>
        );
      })}

      <div
        style={{
          position: 'absolute',
          left: 48,
          right: 8,
          top: 0,
          bottom: 40,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-around',
          gap: 8,
        }}
      >
        {labels.map((label, i) => {
          const color = barColors[i % barColors.length];
          if (isRange) {
            const [lo, hi] = ranges[i];
            const minPct = pos(lo);
            const maxPct = pos(hi);
            const rangeHeight = Math.max(maxPct - minPct, 3);
            return (
              <div key={label} style={{ flex: 1, position: 'relative', height: '100%' }}>
                {/* Light base: 0 → DE min */}
                <div
                  style={{
                    position: 'absolute',
                    left: '15%',
                    right: '15%',
                    bottom: 0,
                    height: `${minPct}%`,
                    background: color,
                    opacity: 0.33,
                    borderRadius: '0 0 4px 4px',
                    transition: 'all 0.4s',
                  }}
                />
                {/* Solid range: DE min → DE max */}
                <div
                  title={`${label}: ${lo}${unit || ''} – ${hi}${unit || ''}`}
                  style={{
                    position: 'absolute',
                    left: '15%',
                    right: '15%',
                    bottom: `${minPct}%`,
                    height: `${rangeHeight}%`,
                    background: color,
                    borderRadius: '4px 4px 0 0',
                    transition: 'all 0.4s',
                  }}
                />
                {/* Min-Max value label above the bar */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: `calc(${maxPct}% + 4px)`,
                    left: 0,
                    right: 0,
                    textAlign: 'center',
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: '0.65rem',
                    fontWeight: 500,
                    color: 'var(--forest)',
                  }}
                >
                  {lo}–{hi}{unit || ''}
                </div>
                {/* X-axis bar label */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: -44,
                    left: 0,
                    right: 0,
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    lineHeight: 1.2,
                    ...S.richChartBarLabel,
                  }}
                >
                  {label}
                </div>
              </div>
            );
          }
          return (
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
                title={`${label}: up to ${values[i].toLocaleString()}${unit ? ' ' + unit : ' cps'}`}
                style={{
                  width: '70%',
                  maxWidth: 48,
                  height: `${pos(values[i])}%`,
                  background: color,
                  borderRadius: '4px 4px 0 0',
                  transition: 'height 0.4s',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: -44,
                  left: 0,
                  right: 0,
                  whiteSpace: 'normal',
                  wordBreak: 'break-word',
                  lineHeight: 1.2,
                  ...S.richChartBarLabel,
                }}
              >
                {label}
              </div>
            </div>
          );
        })}
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

            {/* Mechanism of action — numbered horizontal steps */}
            {product.mechanism && (
              <motion.section {...fadeUp(0)}>
                <div className="mb-5">
                  <h2 style={S.richSectionHeader}>{product.mechanism.title || 'Mechanism of action'}</h2>
                  {product.mechanism.sub && <p style={S.richSectionSub}>{product.mechanism.sub}</p>}
                </div>
                <div className="rounded-2xl p-6 mb-6" style={{ background: 'var(--cream)', border: '1px solid rgba(201,168,76,0.25)' }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 relative">
                    {product.mechanism.steps.map((step, i) => (
                      <div key={i} className="relative pr-3">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center mb-2"
                          style={{ background: 'var(--forest)', color: '#fff', fontFamily: "'Raleway', sans-serif", fontSize: '0.75rem', fontWeight: 600 }}
                        >
                          {i + 1}
                        </div>
                        <div className="text-sm font-medium mb-1" style={{ color: 'var(--forest)', fontFamily: "'Raleway', sans-serif" }}>{step.title}</div>
                        <div className="text-xs leading-relaxed" style={{ color: 'var(--brown-warm)', fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>{step.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>
            )}

            {/* Key properties */}
            {product.keyProperties && (
              <section>
                <motion.div {...fadeUp(0)} className="mb-6">
                  <h2 style={S.richSectionHeader}>
                    Key properties of <em style={{ color: 'var(--gold-dark)', fontStyle: 'normal' }}>{product.shortName || product.name.split('(')[0].trim()}</em>
                  </h2>
                  <p style={S.richSectionSub}>{product.keyPropertiesSub || 'What sets it apart in formulations'}</p>
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
            {(product.specs || product.specRows) && (
              <section>
                <motion.div {...fadeUp(0)} className="mb-5">
                  <h2 style={S.richSectionHeader}>Technical specifications</h2>
                </motion.div>
                <div style={S.richSpecTableWrap}>
                  <table className="w-full" style={{ borderCollapse: 'collapse' }}>
                    <tbody>
                      {product.specRows
                        ? product.specRows.map((row, i) =>
                            row.type === 'section' ? (
                              <tr key={i}>
                                <td
                                  colSpan={2}
                                  className="px-5 py-1.5"
                                  style={{
                                    background: 'var(--cream-dark)',
                                    fontSize: '0.68rem',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.06em',
                                    color: 'var(--brown-warm)',
                                    fontFamily: "'Raleway', sans-serif",
                                    borderBottom: '1px solid rgba(201,168,76,0.15)',
                                  }}
                                >
                                  {row.label}
                                </td>
                              </tr>
                            ) : (
                              <tr key={i} style={i < product.specRows.length - 1 ? S.richSpecRow : {}}>
                                <td className="px-5 py-2.5" style={{ ...S.richSpecKey, width: '42%' }}>{row.key}</td>
                                <td className="px-5 py-2.5" style={S.richSpecVal}>{row.val}</td>
                              </tr>
                            )
                          )
                        : Object.entries(product.specs).map(([k, v], i, arr) => (
                            <tr key={k} style={i < arr.length - 1 ? S.richSpecRow : {}}>
                              <td className="px-5 py-2.5" style={{ ...S.richSpecKey, width: '42%' }}>{k}</td>
                              <td className="px-5 py-2.5" style={S.richSpecVal}>{v}</td>
                            </tr>
                          ))
                      }
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* ── Regulatory approvals ── */}
            {product.regulatoryBadges && (
              <motion.section {...fadeUp(0)}>
                <div style={S.richSectionHeader} className="mb-4">
                  <h2 style={S.richSectionHeader}>{product.regulatoryBadgesTitle || 'Regulatory approvals'}</h2>
                  <p style={S.richSectionSub}>{product.regulatoryBadgesSub || 'Cleared for food, pharmaceutical, and cosmetic use globally'}</p>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  {product.regulatoryBadges.map((b) => (
                    <div
                      key={b.title}
                      className="flex items-center gap-2 rounded-xl px-4 py-2.5"
                      style={{ background: 'var(--cream)', border: '1px solid rgba(201,168,76,0.25)' }}
                    >
                      <span className="text-xl">{b.icon}</span>
                      <div>
                        <div className="text-sm font-medium" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)' }}>{b.title}</div>
                        <div className="text-[11px]" style={{ color: 'var(--brown-warm)', fontFamily: "'Open Sans', sans-serif" }}>{b.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
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

            {/* Comparison table — after grades (optional position) */}
            {product.comparisonAfterGrades && product.comparisonTable && (
              <motion.section {...fadeUp(0)}>
                <div style={S.richSectionHeader} className="mb-1">
                  <h2 style={S.richSectionHeader}>{product.comparisonTable.title}</h2>
                  {product.comparisonTable.sub && <p style={S.richSectionSub}>{product.comparisonTable.sub}</p>}
                </div>
                <div className="rounded-2xl overflow-hidden mb-6" style={{ border: '1px solid rgba(201,168,76,0.2)', background: 'var(--cream)' }}>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                      <thead>
                        <tr style={{ background: 'var(--forest)' }}>
                          {product.comparisonTable.cols.map((col) => (
                            <th key={col} style={{ padding: '10px 14px', textAlign: 'left', fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: "'Raleway', sans-serif", whiteSpace: 'nowrap', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {product.comparisonTable.rows.map((row, ri) => (
                          <tr key={ri} style={{ borderBottom: '1px solid rgba(201,168,76,0.12)', background: ri % 2 === 0 ? 'var(--cream)' : 'var(--cream-dark)' }}>
                            {row.map((cell, ci) => (
                              <td key={ci} style={{ padding: '9px 14px', fontFamily: ci === 0 ? "'Raleway', sans-serif" : "'Open Sans', sans-serif", color: ci === 0 ? 'var(--brown-warm)' : 'var(--forest)', fontWeight: 300, fontSize: '12.5px', verticalAlign: 'top', lineHeight: 1.55 }}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.section>
            )}

            {/* Quick reference table */}
            {product.refTable && (
              <section>
                <motion.div {...fadeUp(0)} className="mb-5">
                  <h2 style={S.richSectionHeader}>Quick reference table</h2>
                  <p style={S.richSectionSub}>{product.refTableSub || 'All grades at a glance'}</p>
                </motion.div>
                <div style={S.richRefTableWrap} className="overflow-x-auto">
                  <table className="w-full" style={{ borderCollapse: 'collapse', minWidth: 600 }}>
                    <thead style={S.richRefTableHead}>
                      <tr>
                        {(product.refTableColumns || [
                          { label: 'Grade', field: 'grade' },
                          { label: 'Viscosity (cps)', field: 'viscosity' },
                          { label: 'Standard', field: 'standard' },
                          { label: 'Key features', field: 'features' },
                          { label: 'Applications', field: 'applications' },
                        ]).map((col) => (
                          <th key={col.label} style={S.richRefTableTh}>{col.label}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {product.refTable.map((r, i) => (
                        <tr key={i}>
                          {(product.refTableColumns || [
                            { label: 'Grade', field: 'grade' },
                            { label: 'Viscosity (cps)', field: 'viscosity' },
                            { label: 'Standard', field: 'standard' },
                            { label: 'Key features', field: 'features' },
                            { label: 'Applications', field: 'applications' },
                          ]).map((col, ci) => (
                            ci === 0 ? (
                              <td key={ci} style={S.richRefTableTd}>
                                <span style={{ ...S.richTGrade, background: indColor(r.color || 'all').bg, color: indColor(r.color || 'all').tx }}>
                                  {r[col.field]}
                                </span>
                              </td>
                            ) : (
                              <td key={ci} style={{ ...S.richRefTableTd, ...(ci === 1 ? { fontWeight: 500, color: 'var(--forest)' } : {}) }}>
                                {r[col.field]}
                              </td>
                            )
                          ))}
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
                  <h2 style={S.richSectionHeader}>{product.chartSectionTitle || 'Viscosity comparison'}</h2>
                  <p style={S.richSectionSub}>{product.chartSectionSub || 'Max viscosity at 2% solution, 25°C'}</p>
                </motion.div>
                <div style={S.richChartCard}>
                  <div className="flex justify-between items-baseline flex-wrap gap-2 mb-2">
                    <span style={S.richChartTitle}>{product.chartCardTitle || 'Max viscosity by grade (cps)'}</span>
                    <span style={S.richChartSub}>{product.chartCardSub || 'Logarithmic scale'}</span>
                  </div>
                  <BarChart
                    labels={product.chartLabels}
                    values={product.chartValues}
                    ranges={product.chartRanges}
                    unit={product.chartUnit}
                    scale={product.chartScale || 'log'}
                    yMax={product.chartYMax}
                  />
                </div>
              </section>
            )}

            {/* ── Application deep-dive ── */}
            {product.appDeepDive && (
              <motion.section {...fadeUp(0)}>
                <div className="rounded-2xl overflow-hidden mb-6" style={{ background: 'var(--cream)', border: '1px solid rgba(201,168,76,0.2)' }}>
                  <div className="px-6 pt-6 pb-4">
                    <h2 style={S.richSectionHeader}>Application deep-dive</h2>
                  </div>
                  {product.appDeepDive.map((ind, idx) => {
                    const colorMap = {
                      food:         { bg: 'rgba(201,168,76,0.12)',  tx: 'var(--gold-dark)' },
                      pharma:       { bg: 'rgba(44,58,35,0.1)',     tx: 'var(--forest)' },
                      cosmetic:     { bg: 'rgba(134,110,84,0.12)',  tx: 'var(--brown-warm)' },
                      oilfield:     { bg: 'rgba(154,122,46,0.15)',  tx: 'var(--gold-dark)' },
                      construction: { bg: 'rgba(92,64,32,0.1)',     tx: 'var(--brown-warm)' },
                      textile:      { bg: 'rgba(44,74,122,0.1)',    tx: '#1A4A7A' },
                      industrial:   { bg: 'rgba(58,74,42,0.12)',    tx: 'var(--forest)' },
                      jam:          { bg: '#FFF4E0',                tx: 'var(--gold-dark)' },
                      dairy:        { bg: 'rgba(201,168,76,0.1)',   tx: 'var(--brown-warm)' },
                      beverage:     { bg: 'rgba(44,58,35,0.1)',     tx: 'var(--forest)' },
                      confectionery:{ bg: 'rgba(201,168,76,0.14)',  tx: '#7A4A00' },
                      bakery:       { bg: 'rgba(134,110,84,0.12)',  tx: 'var(--brown-warm)' },
                      nutri:        { bg: 'rgba(44,58,35,0.1)',     tx: 'var(--forest)' },
                      otc:          { bg: 'rgba(201,168,76,0.14)',  tx: 'var(--gold-dark)' },
                    };
                    const c = colorMap[ind.color] || colorMap.industrial;
                    return (
                      <div key={ind.industry} className={idx > 0 ? 'border-t' : ''} style={{ borderColor: 'rgba(201,168,76,0.15)', padding: '0 1.5rem 1.5rem' }}>
                        {idx > 0 && <div className="pt-5" />}
                        <span
                          className="inline-block text-xs font-medium px-3 py-1 rounded-md mb-4"
                          style={{ background: c.bg, color: c.tx, fontFamily: "'Raleway', sans-serif", letterSpacing: '0.04em' }}
                        >
                          {ind.icon} {ind.industry}
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {ind.items.map((item) => (
                            <div
                              key={item.name}
                              className="rounded-xl p-3"
                              style={{ background: 'var(--cream-dark)', border: '1px solid rgba(201,168,76,0.15)' }}
                            >
                              <div className="text-sm font-medium mb-1" style={{ color: 'var(--forest)', fontFamily: "'Raleway', sans-serif" }}>{item.name}</div>
                              <div className="text-xs leading-relaxed" style={{ color: 'var(--brown-warm)', fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>{item.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.section>
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

            {/* ── Comparison table (end position — skip if already rendered after grades) ── */}
            {product.comparisonTable && !product.comparisonAfterGrades && (
              <motion.section {...fadeUp(0)}>
                <div style={S.richSectionHeader} className="mb-1">
                  <h2 style={S.richSectionHeader}>{product.comparisonTable.title}</h2>
                  {product.comparisonTable.sub && <p style={S.richSectionSub}>{product.comparisonTable.sub}</p>}
                </div>
                <div className="rounded-2xl overflow-hidden mb-6" style={{ border: '1px solid rgba(201,168,76,0.2)', background: 'var(--cream)' }}>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                      <thead>
                        <tr style={{ background: 'var(--forest)' }}>
                          {product.comparisonTable.cols.map((col) => (
                            <th
                              key={col}
                              style={{
                                padding: '10px 14px',
                                textAlign: 'left',
                                fontSize: '11px',
                                fontWeight: 500,
                                color: 'rgba(255,255,255,0.7)',
                                letterSpacing: '0.06em',
                                textTransform: 'uppercase',
                                fontFamily: "'Raleway', sans-serif",
                                whiteSpace: 'nowrap',
                                borderBottom: '1px solid rgba(201,168,76,0.2)',
                              }}
                            >
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {product.comparisonTable.rows.map((row, ri) => {
                          const pgaWins = product.comparisonTable.highlight?.includes(ri);
                          return (
                            <tr
                              key={ri}
                              style={{ borderBottom: '1px solid rgba(201,168,76,0.12)', background: ri % 2 === 0 ? 'var(--cream)' : 'var(--cream-dark)' }}
                            >
                              {row.map((cell, ci) => (
                                <td
                                  key={ci}
                                  style={{
                                    padding: '9px 14px',
                                    fontFamily: ci === 0 ? "'Raleway', sans-serif" : "'Open Sans', sans-serif",
                                    color: ci === 0 ? 'var(--brown-warm)' : pgaWins && ci === 1 ? 'var(--gold-dark)' : 'var(--forest)',
                                    fontWeight: ci === 1 && pgaWins ? 500 : 300,
                                    fontSize: '12.5px',
                                    verticalAlign: 'top',
                                    lineHeight: 1.55,
                                  }}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.section>
            )}

            {/* Formulation guidelines — 6 info cards (CCS-specific) */}
            {product.formulationGuidelines && (
              <motion.section {...fadeUp(0)}>
                <div className="mb-5">
                  <h2 style={S.richSectionHeader}>{product.formulationGuidelines.title || 'Formulation guidelines'}</h2>
                  {product.formulationGuidelines.sub && <p style={S.richSectionSub}>{product.formulationGuidelines.sub}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                  {product.formulationGuidelines.items.map((g, i) => (
                    <motion.div key={i} {...fadeUp(0.05 * i)} style={S.richInfoCard}>
                      <h3 style={S.richInfoTitle}>{g.title}</h3>
                      <p style={S.richInfoBody}>{g.body}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Comparison table note */}
            {product.comparisonTableNote && (
              <p
                className="text-xs italic mb-4 px-2"
                style={{ color: 'var(--brown-warm)', fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}
              >
                {product.comparisonTableNote}
              </p>
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
