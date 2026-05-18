const Logo = ({ className = "h-16 md:h-20" }) => (
  <div className={`flex items-center ${className}`}>
    <img
      src="/vivine_logo.png"
      alt="VIVINE International"
      className="h-full w-auto object-contain"
      referrerPolicy="no-referrer"
    />
  </div>
);

export default Logo;
