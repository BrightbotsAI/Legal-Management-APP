import { FormField } from "../common";

export const LegalDocumentsForm = () => {
  return (
    <div className="col-md-6 mt-1">
      <div className="container">
        <div className="row g-2 d-flex justify-content-end">
          <div className="col-md-6">
            <FormField
              label="Case Id"
              type="number"
              id="caseId"
              helpText="The id of related case to the documents and higher that 0"
            />
          </div>
          <div className="col-md-6">
            <FormField
              label="Title"
              type="text"
              id="documentTitle"
              helpText="The title of the document that you will registrate"
            />
          </div>
        </div>
        <div className="row g-2 mt-3 d-flex justify-content-end">
          <div className="col-md-6">
            <FormField label="Case title" type="text" id="caseTitle" />
          </div>
          <div className="col-md-6">
            <FormField label="Date published" type="date" id="datePublished" />
          </div>
        </div>
        <div className="row g-2 mt-3 d-flex justify-content-end">
          <div className="col-md-12">
            <FormField label="Author" type="text" id="documentAuthor" />
          </div>
        </div>
        <div className="row g-2 mt-3 d-flex justify-content-end">
          <div className="col-md-12">
            <FormField label="Content" type="text" id="documentContent" />
          </div>
        </div>
        <div className="row g-2 mt-3 d-flex justify-content-end">
          <label className="row d-flex justify-content-center ms-1">Tags:</label>
          <div className="row d-flex justify-content-end">
            <div className="col-md-3">
              <input type="checkbox" id="tag_legal" value="1" />
              <label htmlFor="tag_legal" className="tagLabel">
                Legal
              </label>
            </div>
            <div className="col-md-3">
              <input type="checkbox" id="tag_medical" value="2" />
              <label htmlFor="tag_medical" className="tagLabel">
                Medical
              </label>
            </div>
            <div className="col-md-3">
              <input type="checkbox" id="tag_financial" value="3" />
              <label htmlFor="tag_financial" className="tagLabel">
                Financial
              </label>
            </div>
            <div className="col-md-3">
              <input type="checkbox" id="tag_other" value="4" />
              <label htmlFor="tag_other" className="tagLabel">
                Other
              </label>
            </div>
          </div>
        </div>
        <div className="row g-2 mt-3 d-flex justify-content-center">
          <button type="submit" className="btn btn-primary col-4">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};