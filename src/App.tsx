import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import {LegalDocuments} from "./pages/LegalDocuments";
import {Login} from "./pages/Login";

function LegalManagementApp() {
  return (
    <Router>
      <nav>
        <Link to="/LegalDocuments">Legal Documents</Link>
      </nav>
      <nav>
        <Link to="/">Login</Link>
      </nav>
       <Routes>
         <Route path="/" element={<Login />} />
         {/* <Route path="/about" element={<About />} /> */}
         {/* <Route path="*" element={<NoMatch />} /> */}
         <Route path="/LegalDocuments" element={<LegalDocuments />} />
       </Routes>
    </Router>
  );
}

export default LegalManagementApp;