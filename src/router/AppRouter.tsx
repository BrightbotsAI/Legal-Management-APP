import { Route, Routes } from "react-router-dom";
import { Clients } from "../pages/clients";
import { Lawyers } from "../pages/lawyers";
import { LegalDocuments } from "../pages/LegalDocuments";
import { Login } from "../pages/login";
import { NoMatch } from "../pages/noMatch";
import { Precedents } from "../pages/Precedents";
import { LegalCase } from "../pages/legalCases";

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
