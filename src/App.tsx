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
    </>
  );
}

export default LegalManagementApp;







