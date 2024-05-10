import { Route, Routes } from "react-router-dom";
import { Clients } from "../pages/Clients";
import { Lawyers } from "../pages/Lawyers";
import { LegalDocuments } from "../pages/LegalDocuments";
import { Login } from "../pages/Login";
import { NoMatch } from "../pages/NoMatch";
import { Precedents } from "../pages/Precedents";
import { LegalCase } from "../pages/legalCase";

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
