const Logo = ({ className = "h-16 md:h-20" }) => (
  <div data-component="Logo" className={`flex items-center ${className}`}>
    <picture>
      <source media="(min-width: 1024px)" srcSet="/VIVINE.svg" type="image/svg+xml" />
      <img
        src="/VIVINE.png"
        alt="VIVINE International"
        className="w-[170px] mt-2 md:w-[180px] lg:w-[240px] h-auto object-contain !max-w-none"
        referrerPolicy="no-referrer"
      />
    </picture>
  </div>
);

export default Logo;