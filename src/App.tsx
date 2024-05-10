<<<<<<< Updated upstream
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Clients } from "./pages/clients";
import { Lawyers } from "./pages/lawyers";
import { NoMatch } from "./pages/noMatch";
import { Home } from "./pages/home";
function LegalManagementApp() {
  return (
    <>
      <Router>
        <Routes>
          {<Route path="/" element={<Home />} />}
          {<Route path="/clients" element={<Clients />} />}
          {<Route path="/lawyers" element={<Lawyers />} />}
          {<Route path="*" element={<NoMatch />} />}
        </Routes>
      </Router>
=======
import { Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import { LegalCase } from "./pages/legalCase";
import { Login } from "./pages/login";

function LegalManagementApp() {
  return (
    <>
    <div>LegalManagementApp</div>
    <Router>
      <nav style={{ margin: 10 }}>
      <Link to="/" style={{ padding: 5 }}>
          Login
        </Link>
        <Link to="/legalCase" style={{ padding: 5 }}>
          Legal Case Page
        </Link>
      </nav>
        <Routes>
          {<Route path="/" element={<Login />} />}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="*" element={<NoMatch />} /> */}
          {<Route path="/legalCase" element={<LegalCase />} />}
        </Routes>
    </Router>
>>>>>>> Stashed changes
    </>
  );
}

export default LegalManagementApp;
