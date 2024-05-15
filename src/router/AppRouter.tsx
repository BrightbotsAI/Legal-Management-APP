import { Route, Routes } from "react-router-dom";
import { LegalDocuments } from "../pages/LegalDocuments";
import { NoMatch } from "../pages/NoMatch";
import { Precedents } from "../pages/Precedents";
import { Clients } from "../pages/clients";
import { Lawyers } from "../pages/lawyers";
import { LegalCase } from "../pages/legalCase";
import { Login } from "../pages/login";

export const AppRouter = () => {
  return (
    <Routes>
      {<Route path="/" element={<Login />} />}
      <Route path="/clients" element={<Clients />} />
      {<Route path="/lawyers" element={<Lawyers />} />}
      {<Route path="/legalCase" element={<LegalCase />} />}
      {<Route path="/legalDocuments" element={<LegalDocuments />} />}
      {<Route path="/precedents" element={<Precedents />} />}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
