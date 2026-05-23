const Logo = ({ className = "h-16 md:h-20" }) => (
  <div className={`flex items-center ${className}`}>
    <img
      src="/viv_logo.svg"
      alt="VIVINE International"
      className="w-[140px] md:w-[180px] lg:w-[240px] h-auto object-contain !max-w-none"
      referrerPolicy="no-referrer"
    />
  </div>
);

export default Logo;
