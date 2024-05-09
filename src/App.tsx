import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Lawyers } from "./pages/lawyers";
import { NoMatch } from "./pages/noMatch";
import { Home } from "./pages/home";
function LegalManagementApp() {
  return (
    <>
      <Router>
        <Routes>
          {<Route path="/" element={<Home />} />}
          {<Route path="/lawyers" element={<Lawyers />} />}
          {<Route path="*" element={<NoMatch />} />}
        </Routes>
      </Router>
    </>
  );
}

export default LegalManagementApp;
