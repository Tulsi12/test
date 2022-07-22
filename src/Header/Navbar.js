import { NavLink } from "react-router-dom";
import Logo from "../Header/logo.png";

function Header() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navigation-wrap"
        id="navigation-wrap"
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars-staggered navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/plans-and-pricing">
                  Plans
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/trainings">
                  Training
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us">
                  <button className="contact-btn">Contact Sales</button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
