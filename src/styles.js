const S = {
  // --- NAV ---
  navBar: (isScrolled) => ({
    background: isScrolled ? "var(--cream)" : "rgba(245,238,224,0.92)",
    borderBottom: "1px solid rgba(201,168,76,0.2)",
  }),
  navLink: {
    fontFamily: "'Oswald', sans-serif",
    color: "var(--forest)",
    letterSpacing: "0.12em",
  },
  navMoreBtn: { fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em" },
  navMobileToggle: { color: "var(--forest)" },
  navMobileOverlay: {
    background: "var(--cream)",
    borderLeft: "1px solid rgba(201,168,76,0.2)",
  },
  navMobileLinks: { fontFamily: "'Oswald', sans-serif" },
  navMobileLink: { color: "var(--forest)" },

  // --- PRELOADER ---
  preloaderBg: { background: "var(--cream)" },
  preloaderGlow: {
    background:
      "radial-gradient(ellipse, rgba(201,168,76,0.2) 0%, rgba(44,58,35,0.06) 50%, transparent 70%)",
  },
  preloaderLineBg: { background: "rgba(201,168,76,0.15)" },
  preloaderLineAnim: { background: "var(--gold)" },
  preloaderWord: {
    color: "var(--gold-dark)",
    fontFamily: "'Raleway', sans-serif",
  },

  // --- DEFAULT PAGE ---
  defaultPageBg: { background: "var(--cream)" },
  defaultPageH1: { color: "var(--forest)" },
  defaultPageBody: {
    color: "var(--brown-warm)",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
  },

  // --- HERO ---
  heroH1: {
    fontFamily: "'Oswald', sans-serif",
    color: "var(--cream)",
    fontWeight: 900,
    fontSize: "40px",
    fontStyle: "normal",
    lineHeight: 1.2,
  },
  heroAccent: { color: "var(--gold)", fontStyle: "normal" },
  heroBody: {
    fontFamily: "'Cormorant Garamond', serif",
    color: "var(--cream-dark)",
    fontStyle: "italic",
    fontWeight: 300,
    lineHeight: 1.8,
  },
  heroBtnGold: {
    fontFamily: "'Raleway', sans-serif",
    letterSpacing: "0.15em",
    fontSize: "0.75rem",
  },
  heroBtnOutline: {
    border: "1px solid rgba(201,168,76,0.5)",
    color: "var(--cream)",
    fontFamily: "'Raleway', sans-serif",
    letterSpacing: "0.15em",
    fontSize: "0.75rem",
    background: "transparent",
  },

  // --- GLOBAL LEADER SECTION ---
  globalLeaderSection: {
    background: "var(--cream-dark)",
    borderTop: "1px solid rgba(201,168,76,0.2)",
    borderBottom: "1px solid rgba(201,168,76,0.2)",
  },
  globalLeaderH2: {
    fontFamily: "'Cormorant Garamond', serif",
    color: "var(--forest)",
    fontWeight: 400,
    lineHeight: 1.2,
  },
  globalLeaderAccent: { color: "var(--gold-dark)", fontStyle: "italic" },
  globalLeaderBody: {
    fontFamily: "'Cormorant Garamond', serif",
    color: "var(--brown-warm)",
    fontStyle: "italic",
    fontWeight: 300,
    lineHeight: 1.9,
  },

  // --- CORE VALUES (FEATURE CARDS) ---
  coreSection: { background: "var(--cream)" },
  featureCardPerspective: { perspective: "1000px" },
  featureCardIcon: {
    background: "rgba(201,168,76,0.12)",
    border: "10px solid rgba(201,168,76,0.25)",
  },
  featureCardIconColor: { color: "var(--gold-dark)" },
  featureCardTitle: {
    fontFamily: "'Cinzel', serif",
    fontSize: "0.9rem",
    letterSpacing: "0.1em",
  },
  featureCardDivider: {
    background:
      "linear-gradient(to right, transparent, var(--gold), transparent)",
  },
  featureCardDesc: {
    fontStyle: "italic",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.05rem",
  },

  // --- PRODUCTS SECTION ---
  productsSection: { background: "var(--cream)" },
  productsH2: {
    fontFamily: "'Oswald', sans-serif",
    color: "var(--forest)",
    letterSpacing: "0.08em",
    fontWeight: 900,
    fontStyle: "normal",
    fontSize: "clamp(2rem, 4vw, 2.8rem)",
  },
  productImgBg: { background: "var(--cream-dark)" },
  productBadge: {
    background: "rgba(245,238,224,0.92)",
    color: "var(--forest)",
    fontFamily: "'Raleway', sans-serif",
    letterSpacing: "0.15em",
  },

  // --- VIDEO / ABOUT SECTION ---
  aboutH2: {
    fontFamily: "'Cormorant Garamond', serif",
    color: "var(--cream)",
    fontWeight: 300,
    lineHeight: 1.2,
  },
  aboutAccent: { color: "var(--gold)", fontStyle: "italic" },
  aboutSubtitle: {
    fontFamily: "'Raleway', sans-serif",
    color: "var(--gold)",
    letterSpacing: "0.2em",
    fontSize: "0.7rem",
  },
  aboutIconBox: {
    background: "rgba(201,168,76,0.15)",
    border: "1px solid rgba(201,168,76,0.3)",
  },
  aboutIconColor: { color: "var(--gold)" },
  aboutBody: {
    color: "var(--cream-dark)",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontWeight: 300,
    lineHeight: 1.8,
    opacity: 0.85,
  },
  aboutImgFrame: {
    background: "var(--cream-dark)",
    border: "2px solid rgba(201,168,76,0.25)",
    borderRadius: "1.5rem",
  },

  // --- APPLICATIONS BANNER ---
  appsBannerH2: {
    color: "var(--cream)",
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 300,
  },
  appsBannerBody: {
    color: "var(--cream-dark)",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    opacity: 0.85,
  },

  // --- INQUIRY + VISION SECTION ---
  inquirySection: {
    background: "var(--cream)",
    borderTop: "1px solid rgba(201,168,76,0.2)",
  },
  inquiryEyebrow: { justifyContent: "flex-start" },
  inquiryH2: {
    fontFamily: "'Cormorant Garamond', serif",
    color: "var(--forest)",
    fontWeight: 400,
    lineHeight: 1.2,
  },
  inquiryAccent: { color: "var(--gold-dark)", fontStyle: "italic" },
  inquirySubmitBtn: {
    fontFamily: "'Raleway', sans-serif",
    letterSpacing: "0.15em",
    fontSize: "0.8rem",
  },
  visionH2: {
    fontFamily: "'Oswald', sans-serif",
    color: "var(--forest)",
    fontWeight: 600,
    lineHeight: 1.15,
    letterSpacing: "0.04em",
  },
  visionAccent: { color: "var(--gold)" },
  visionListIcon: { color: "var(--gold-dark)" },
  visionListText: {
    fontFamily: "'Cormorant Garamond', serif",
    color: "var(--forest)",
    fontSize: "1.25rem",
    lineHeight: 1.5,
    fontWeight: 400,
  },
  visionDivider: { borderTop: "1.5px solid var(--gold)", paddingTop: "16px" },
  visionSubscribeText: {
    fontFamily: "'Cinzel', serif",
    color: "var(--forest)",
    fontWeight: 700,
    letterSpacing: "0.06em",
    lineHeight: 1.4,
  },
  visionSubscribeAccent: { color: "var(--gold)" },

  // --- BOTTOM CTA SECTION ---
  ctaSection: { borderTop: "1px solid rgba(201,168,76,0.2)" },
  ctaEyebrow: { color: "var(--gold)", justifyContent: "center" },
  ctaH2: {
    fontFamily: "'Cormorant Garamond', serif",
    color: "var(--cream)",
    fontWeight: 300,
    lineHeight: 1.3,
  },
  ctaAccent: { color: "var(--gold)", fontStyle: "italic" },
  ctaBody: {
    fontFamily: "'Cormorant Garamond', serif",
    color: "var(--cream-dark)",
    fontStyle: "italic",
    fontWeight: 300,
    lineHeight: 1.9,
    opacity: 0.85,
  },
  ctaLink: {
    fontFamily: "'Cinzel', serif",
    letterSpacing: "0.15em",
    fontSize: "0.85rem",
    boxShadow: "0 12px 40px rgba(201,168,76,0.4)",
  },

  // --- PRODUCTS PAGE ---
  productsHero: {
    background: "linear-gradient(135deg, var(--forest) 0%, var(--forest-mid) 100%)",
    minHeight: "350px",
  },
  productsHeroH1: {
    fontFamily: "'Oswald', sans-serif",
    color: "var(--cream)",
    fontWeight: 900,
    lineHeight: 1.1,
  },
  productsHeroSub: {
    fontFamily: "'Cormorant Garamond', serif",
    color: "var(--cream-dark)",
    fontStyle: "italic",
    fontWeight: 300,
    opacity: 0.85,
  },
  productsIntroH2: {
    fontFamily: "'Cormorant Garamond', serif",
    color: "var(--forest)",
    fontWeight: 400,
    lineHeight: 1.2,
  },
  productsIntroAccent: { color: "var(--gold-dark)", fontStyle: "italic" },
  productsIntroBody: {
    fontFamily: "'Cormorant Garamond', serif",
    color: "var(--brown-warm)",
    fontStyle: "italic",
    fontWeight: 300,
    lineHeight: 1.9,
  },
  productsCatIcon: {
    background: "rgba(201,168,76,0.12)",
    border: "1px solid rgba(201,168,76,0.3)",
  },
  productsCatTitle: {
    fontFamily: "'Cinzel', serif",
    letterSpacing: "0.1em",
  },
  productsCatItems: {
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    lineHeight: 1.8,
  },
  productsQuickLink: {
    fontFamily: "'Raleway', sans-serif",
    letterSpacing: "0.08em",
    fontSize: "0.75rem",
  },
  productsSectionH3: {
    fontFamily: "'Cinzel', serif",
    color: "var(--forest)",
    letterSpacing: "0.12em",
  },
  productsCardName: {
    fontFamily: "'Cinzel', serif",
    color: "var(--forest)",
    letterSpacing: "0.1em",
  },
  productsCardDesc: {
    fontFamily: "'Cormorant Garamond', serif",
    color: "var(--brown-warm)",
    fontStyle: "italic",
    lineHeight: 1.7,
  },
  productsSubName: {
    fontFamily: "'Raleway', sans-serif",
    color: "var(--forest)",
    fontWeight: 600,
    fontSize: "0.85rem",
  },
  productsSubDesc: {
    fontFamily: "'Cormorant Garamond', serif",
    color: "var(--brown-warm)",
    fontStyle: "italic",
    fontSize: "0.9rem",
  },
  productsCtaGlow: {
    background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,168,76,0.12) 0%, transparent 70%)",
  },
  productsCtaEyebrow: { color: "var(--gold)" },
  productsCtaH2: {
    fontFamily: "'Cormorant Garamond', serif",
    color: "var(--cream)",
    fontWeight: 300,
    lineHeight: 1.3,
  },
  productsCtaAccent: { color: "var(--gold)", fontStyle: "italic" },
  productsCtaBody: {
    fontFamily: "'Cormorant Garamond', serif",
    color: "var(--cream-dark)",
    fontStyle: "italic",
    opacity: 0.85,
    lineHeight: 1.8,
  },
  productsCtaBtn: {
    fontFamily: "'Cinzel', serif",
    letterSpacing: "0.15em",
    fontSize: "0.8rem",
  },

  // --- PRODUCT DETAIL PAGE ---
  productDetailHero: {
    background: "linear-gradient(135deg, var(--forest) 0%, var(--forest-mid) 100%)",
    minHeight: "340px",
  },
  productDetailBreadcrumb: {
    color: "rgba(245,238,224,0.55)",
    fontFamily: "'Raleway', sans-serif",
    fontSize: "0.75rem",
    letterSpacing: "0.12em",
  },
  productDetailHeroH1: {
    fontFamily: "'Cinzel', serif",
    color: "var(--cream)",
    fontWeight: 700,
    lineHeight: 1.15,
  },
  productDetailTagline: {
    fontFamily: "'Cormorant Garamond', serif",
    color: "var(--cream-dark)",
    fontStyle: "italic",
    fontWeight: 300,
    lineHeight: 1.7,
    opacity: 0.85,
  },
  productDetailOverview: {
    background: "var(--cream)",
    borderBottom: "1px solid rgba(201,168,76,0.15)",
  },
  productDetailDescBody: {
    fontFamily: "'Raleway', sans-serif",
    color: "var(--brown-warm)",
    fontWeight: 400,
    fontSize: "0.95rem",
    lineHeight: 1.85,
  },
  productDetailSpecTable: {
    border: "1px solid rgba(201,168,76,0.2)",
    borderRadius: "0.75rem",
    overflow: "hidden",
  },
  productDetailSpecLabel: {
    color: "var(--brown-warm)",
    fontFamily: "'Raleway', sans-serif",
    fontSize: "0.78rem",
    letterSpacing: "0.06em",
  },
  productDetailSpecValue: {
    color: "var(--forest)",
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 600,
    fontSize: "1rem",
  },
  productDetailSpecRow: { borderBottom: "1px solid rgba(201,168,76,0.12)" },
  productDetailVariantsSection: { background: "var(--cream-dark)" },
  productDetailVariantCard: {
    background: "var(--cream)",
    border: "1px solid rgba(201,168,76,0.2)",
    borderRadius: "0.75rem",
  },
  productDetailVariantName: {
    fontFamily: "'Cinzel', serif",
    color: "var(--forest)",
    letterSpacing: "0.06em",
    fontSize: "0.9rem",
  },
  productDetailVariantDesc: {
    fontFamily: "'Cormorant Garamond', serif",
    color: "var(--brown-warm)",
    fontStyle: "italic",
    lineHeight: 1.6,
  },
  productDetailPropsSection: {
    background: "var(--cream)",
    borderTop: "1px solid rgba(201,168,76,0.15)",
    borderBottom: "1px solid rgba(201,168,76,0.15)",
  },
  productDetailPropItem: {
    fontFamily: "'Cormorant Garamond', serif",
    color: "var(--forest)",
    fontSize: "1rem",
    lineHeight: 1.5,
  },
  productDetailAppsSection: {
    background: "linear-gradient(135deg, var(--forest) 0%, var(--forest-mid) 100%)",
  },
  productDetailAppChip: {
    background: "rgba(201,168,76,0.12)",
    border: "1px solid rgba(201,168,76,0.35)",
    color: "var(--cream)",
    fontFamily: "'Raleway', sans-serif",
    letterSpacing: "0.06em",
    fontSize: "0.78rem",
    borderRadius: "9999px",
  },

  sidebarNav: {
    borderLeft: "1px solid rgba(201,168,76,0.15)",
  },

  // --- FOOTER ---
  footer: { color: "var(--cream-dark)", borderTop: "1px solid rgba(201,168,76,0.2)" },
  footerAboutText: {
    color: "var(--cream-dark)",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    opacity: 0.82,
  },
  footerSocialBtn: {
    background: "rgba(201,168,76,0.1)",
    border: "1px solid rgba(201,168,76,0.3)",
    color: "var(--gold)",
  },
  footerHeading: {
    fontFamily: "'Cinzel', serif",
    color: "var(--gold)",
    fontSize: "0.78rem",
    letterSpacing: "0.22em",
  },
  footerLinks: { color: "rgba(237,224,200,0.72)" },
  footerBottom: {
    borderTop: "1px solid rgba(201,168,76,0.2)",
    color: "rgba(237,224,200,0.5)",
  },
};

export default S;
