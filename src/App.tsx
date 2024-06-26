import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components";
import { AppRouter } from "./router/AppRouter";

function LegalManagementApp() {
  return (
    <Router>
      <NavBar />
      <AppRouter />
    </Router>
  );
}

export default LegalManagementApp;