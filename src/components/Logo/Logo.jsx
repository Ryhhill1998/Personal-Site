import "./Logo.css";

const Logo = ({ handleClick }) => {
  return (
    <div className="logo" onClick={handleClick}>
      <span className="number">25</span>
      <span className="letter">R</span>
    </div>
  );
};

export default Logo;
