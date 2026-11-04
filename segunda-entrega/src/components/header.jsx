import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="icon-container">
          <img src="/favicon.ico" alt="icono FINDG" className="icon" />
          <h1 className="header-page-title">FINDG</h1>
        </Link>

        <nav className="nav-menu">
          <NavLink to="/explorar" className="nav-icon">
            EXPLORAR
          </NavLink>
          <NavLink to="/favoritos" className="nav-icon">
            FAVORITOS
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
