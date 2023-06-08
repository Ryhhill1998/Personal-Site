import "./Logo.css";

const Logo = ({ handleLogoClick }) => {
  return (
    <div className="logo" onClick={handleLogoClick}>
      <span className="number">25</span>
      <span className="letter">R</span>
    </div>
  );
};

export default Logo;
