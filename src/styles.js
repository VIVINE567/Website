const S = {
  // --- NAV ---
  navBar: (isScrolled) => ({
    background: isScrolled ? "var(--cream)" : "rgba(245,238,224,0.92)",
    borderBottom: "1px solid rgba(201,168,76,0.2)",
  }),
  navLink: {
    fontFamily: "'Raleway', sans-serif",
    color: "var(--forest)",
    letterSpacing: "0.12em",
  },
  navMoreBtn: { fontFamily: "'Raleway', sans-serif", letterSpacing: "0.1em" },
  navMobileToggle: { color: "var(--forest)" },
  navMobileOverlay: {
    background: "var(--cream)",
    borderLeft: "1px solid rgba(201,168,76,0.2)",
  },
  navMobileLinks: { fontFamily: "'Raleway', sans-serif" },
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
    fontSize: "1rem",
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

  // --- FOOTER ---
  footer: { background: "#E2D5C3", color: "var(--forest)" },
  footerAboutText: {
    color: "var(--brown-warm)",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
  },
  footerSocialBtn: {
    background: "rgba(44,58,35,0.08)",
    color: "var(--forest)",
  },
  footerHeading: {
    fontFamily: "'Cinzel', serif",
    color: "var(--gold-dark)",
    fontSize: "0.8rem",
    letterSpacing: "0.2em",
  },
  footerLinks: { color: "var(--brown-warm)" },
  footerBottom: {
    borderTop: "1px solid rgba(154,122,46,0.3)",
    color: "var(--brown-warm)",
  },
};

export default S;
