import { Route, Routes } from "react-router-dom";
import { Lawyers } from "../pages/Lawyers";
import { LegalCase } from "../pages/LegalCase";
import { LegalDocuments } from "../pages/LegalDocuments";
import { Login } from "../pages/Login";
import { NoMatch } from "../pages/NoMatch";
import { Precedents } from "../pages/Precedents";
import { Clients } from "../pages/Clients";

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
