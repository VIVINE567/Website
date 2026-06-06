const modalStyles = {
  modalBg: { background: "var(--cream)" },
  modalGoldBar: {
    background: "linear-gradient(to right, var(--gold), var(--gold-dark))",
  },
  modalDivider: {
    background: "linear-gradient(to right, var(--gold), transparent)",
  },
  modalHeading: { color: "var(--forest)", fontWeight: 700 },
  modalBody: {
    fontSize: "0.88rem",
    color: "var(--brown-warm)",
    lineHeight: 1.6,
  },
  modalInput: {
    fontSize: "0.88rem",
    background: "var(--cream-dark, #f5f0e8)",
    border: "1px solid rgba(201,168,76,0.25)",
    color: "var(--forest)",
    "--tw-ring-color": "rgba(201,168,76,0.4)",
  },
  modalFieldLabel: {
    fontSize: "0.72rem",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--brown-warm)",
  },
  modalSubmitBtn: {
    fontSize: "0.82rem",
    letterSpacing: "0.12em",
    background: "linear-gradient(135deg, var(--gold), var(--gold-dark))",
    color: "var(--forest)",
    boxShadow: "0 4px 14px rgba(201,168,76,0.3)",
  },
};

export default modalStyles;
