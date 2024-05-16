import { LegalDocumentsForm } from "../components/LegalDocuments/LegalDocumentsForm";
import { LegalDocumentsView } from "../components/LegalDocuments/LegalDocumentsView";

export const LegalDocuments = () => {
  return (
    <div className="container">
      <h1 className="mt-3">Register of legal documents</h1>
      <div className="row">
        <LegalDocumentsView />
        <LegalDocumentsForm />
      </div>
    </div>
  );
};