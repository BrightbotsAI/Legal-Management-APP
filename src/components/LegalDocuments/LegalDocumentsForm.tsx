import { FormField } from "../common";
import "../../styles/LegalStyles.css";

export const LegalDocumentsForm = () => {
  return (
    <div>
      <div className="primaryDiv" id="divCase">
        <div className="formDiv">
          <FormField
            label="Case Id"
            type="number"
            id="caseId"
            helpText="The id of related case to the documents and higher that 0"
          />
        </div>
      </div>
      <div className="primaryDiv" id="divTitle">
        <div className="formDiv">
          <FormField
            label="Title"
            type="text"
            id="documentTitle"
            helpText="The title of the document that you will registrate"
          />
        </div>
      </div>
      <div className="primaryDiv" id="divAuthor">
        <div className="formDiv">
          <FormField label="Author" type="text" id="documentAuthor" />
        </div>
      </div>
      <div className="primaryDiv" id="divTitleC">
        <div className="formDiv">
          <FormField label="Case title" type="text" id="caseTitle" />
        </div>
      </div>
      <div className="primaryDiv" id="divDate">
        <div className="formDiv">
          <FormField label="Date published" type="date" id="datePublished" />
        </div>
      </div>
      <div className="primaryDiv">
        <div className="formDiv" id="divContent">
          <FormField label="Content" type="text" id="doumentContent" />
        </div>
      </div>
      <div className="primaryDiv">
        <label className="tags">Tags</label>
        <div className="tags">
          <div className="tagsOption">
            <input type="checkbox" id="tag_legal" value="1" />
            <label htmlFor="tag_legal" className="tagLabel">
              Legal
            </label>
          </div>
          <div className="tagsOption">
            <input type="checkbox" id="tag_medical" value="2" />
            <label htmlFor="tag_medical" className="tagLabel">
              Medical
            </label>
          </div>
          <div className="tagsOption">
            <input type="checkbox" id="tag_financial" value="3" />
            <label htmlFor="tag_financial" className="tagLabel">
              Financial
            </label>
          </div>
          <div className="tagsOption">
            <input type="checkbox" id="tag_other" value="4" />
            <label htmlFor="tag_other" className="tagLabel">
              Other
            </label>
          </div>
        </div>
      </div>
      <div className="primaryDiv">
        <div className="submitButton">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
