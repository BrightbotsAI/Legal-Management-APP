import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Legal Management App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item me-2">
              <NavLink className="nav-link" to="/">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/clients">
                Clients
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/lawyers">
                Lawyers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/legalCase">
                Legal Cases
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/legalDocuments">
                Legal Documents
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/precedents">
                Precedents
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
