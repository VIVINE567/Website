const sharedStyles = {
  cardBase: {
    background: "var(--cream)",
    border: "1px solid rgba(201,168,76,0.2)",
  },
  cardIconCircle: { background: "rgba(201,168,76,0.12)" },
  textForest: { color: "var(--forest)" },
  textGold: { color: "var(--gold)" },
  textGoldDark: { color: "var(--gold-dark)" },
  textBrown: { color: "var(--brown-warm)" },
  textBrownLight: { color: "var(--brown-warm)", fontWeight: 300 },
  textCream: { color: "var(--cream)" },
  textCreamDark: { color: "var(--cream-dark)" },
  textWhiteMuted: { color: "rgba(255,255,255,0.7)" },
  textWhiteFaint: { color: "rgba(255,255,255,0.28)" },
  textWhiteSoft: { color: "rgba(255,255,255,0.6)" },
  sectionDark: {
    background: "var(--cream-dark)",
    borderTop: "1px solid rgba(201,168,76,0.2)",
  },
  borderGoldLight: { borderColor: "rgba(201,168,76,0.25)" },
  borderGoldMed: { borderLeft: "1px solid rgba(201,168,76,0.3)" },
  tagPill: {
    background: "rgba(201,168,76,0.12)",
    letterSpacing: "0.06em",
  },
  accentItalic: {
    color: "var(--gold-dark)",
    fontFamily: "'Oswald', sans-serif",
    fontStyle: "normal",
    fontWeight: 700,
    textTransform: "inherit",
  },
  timelineDot: {
    background: "var(--gold)",
    borderColor: "var(--cream-dark)",
    boxShadow: "0 0 0 3px rgba(201,168,76,0.2)",
  },
  tabBtn: (isActive) => ({
    fontWeight: isActive ? 500 : 400,
    color: isActive ? "var(--gold)" : "var(--brown-warm)",
    background: "transparent",
  }),
  forestBg: {
    background: "linear-gradient(135deg, var(--forest) 0%, var(--forest-mid) 100%)",
  },
  forestBgSolid: { background: "var(--forest)" },
  goldBorder: { border: "1px solid rgba(201,168,76,0.2)" },
  goldBorderBottom: { borderBottom: "1px solid rgba(201,168,76,0.15)" },
  letterSpaceTight: { letterSpacing: "0.04em" },
  letterSpaceWide: { letterSpacing: "0.1em" },
  letterSpaceExtraWide: { letterSpacing: "0.15em" },
  eyebrowText: { color: "var(--gold)", letterSpacing: "0.18em" },
  whiteOutlineBtn: {
    border: "1px solid rgba(255,255,255,0.2)",
    color: "rgba(255,255,255,0.7)",
  },
  goldGradientBtn: {
    background: "linear-gradient(135deg, var(--gold-light), var(--gold), var(--gold-dark))",
    color: "var(--forest)",
  },
  statsBarBg: {
    background: "rgba(44,58,35,0.03)",
    borderTop: "1px solid rgba(201,168,76,0.15)",
    borderBottom: "1px solid rgba(201,168,76,0.15)",
  },
  goldLine: { background: "var(--gold)", opacity: 0.6 },
  goldDividerThin: { height: 1, background: "rgba(201,168,76,0.15)" },
  goldDividerMed: { height: 1, background: "rgba(201,168,76,0.25)" },
  dotPattern28: {
    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
    backgroundSize: "28px 28px",
  },
  dotPattern30: {
    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
    backgroundSize: "30px 30px",
  },
};

export default sharedStyles;
