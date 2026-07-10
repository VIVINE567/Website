const navStyles = {
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
  navMobileLinks: {
  fontFamily: "'Oswald', sans-serif",
  lineHeight: "1.2",
},
  navMobileLink: { color: "var(--forest)" },
};

export default navStyles;
