import { LegalDocumentsForm } from "../components/LegalDocuments/LegalDocumentsForm";
import { LegalDocumentsView } from "../components/LegalDocuments/LegalDocumentsView";
import "../styles/LegalStyles.css";

export const LegalDocuments = () => {
  return (
    <>
      <h1 className="RegisterTitle">Register of legal documents</h1>
      {/* <form className="form"> */}
      <LegalDocumentsView />
      <LegalDocumentsForm />
      {/* </form> */}
    </>
  );
};
