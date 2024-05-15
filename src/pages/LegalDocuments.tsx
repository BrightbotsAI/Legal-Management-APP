import { FormField } from "../components/FormField";
import ColorIcons from "../icons/ColorIcons.svg";
import "../styles/LegalStyles.css";
//import "../styles/LegalDarkStyle.css";
export const LegalDocuments = () =>{
  <ColorIcons />
  return (
<>
  <h1 className="RegisterTitle">Register of legal documents</h1>
  <form className="form">
  <table className="tableCase">
    <div className="divTable">
        <h5 className="titleTable">Case of Mr. Castro</h5>
        <h6 className="subtitleTable">Id: 1</h6>
        <p className="pTable">Este es un caso de abandono y descuido infantil.</p>
    </div>
    <div className="divTable">
        <h5 className="titleTable">Case of Mr. Castro</h5>
        <h6 className="subtitleTable">Id: 1</h6>
        <p className="pTable">Este es un caso de abandono y descuido infantil.</p>
    </div>
    <div className="divTable">
        <h5 className="titleTable">Case of Mr. Castro</h5>
        <h6 className="subtitleTable">Id: 1</h6>
        <p className="pTable">Este es un caso de abandono y descuido infantil.</p>
    </div>
    <div className="divTable">
        <h5 className="titleTable">Case of Mr. Castro</h5>
        <h6 className="subtitleTable">Id: 1</h6>
        <p className="pTable">Este es un caso de abandono y descuido infantil.</p>
    </div>
    </table>
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
            <FormField
              label="Author"
              type="text"
              id="documentAuthor"
            />
          </div>
        </div>
        <div className="primaryDiv" id="divTitleC">
          <div className="formDiv">
            <FormField
              label="Case title"
              type="text"
              id="caseTitle"
            />
          </div>
        </div>
        <div className="primaryDiv" id="divDate">
          <div className="formDiv">
            <FormField
              label="Date published"
              type="date"
              id="datePublished"
            />
          </div>
        </div>
        <div className="primaryDiv">
          <div className="formDiv" id="divContent">
            <FormField
              label="Content"
              type="text"
              id="doumentContent"
            />
          </div>
        </div>
        <div className="primaryDiv">
    <label className="tags">Tags</label>
    <div className="tags">
        <div className="tagsOption">
            <input type="checkbox" id="tag_legal" value="1"/>
            <label htmlFor="tag_legal" className="tagLabel">Legal</label>
        </div>
        <div className="tagsOption">
            <input type="checkbox" id="tag_medical" value="2"/>
            <label htmlFor="tag_medical" className="tagLabel">Medical</label>
        </div>
        <div className="tagsOption">
            <input type="checkbox" id="tag_financial" value="3"/>
            <label htmlFor="tag_financial" className="tagLabel">Financial</label>
        </div>
        <div className="tagsOption">
            <input type="checkbox" id="tag_other" value="4"/>
            <label htmlFor="tag_other" className="tagLabel">Other</label>
        </div>
        </div>
      </div>
      <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
        <button className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center show" id="bd-theme" type="button" aria-expanded="true" data-bs-toggle="dropdown" aria-label="Toggle theme (dark)">
          <svg className="bi my-1 theme-icon-active" width="1em" height="1em"><use href={ColorIcons +"#moon-stars-fill"}></use></svg>
          <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
        </button>
        <ul className="dropdown-menu dropdown-menu-end shadow show position: absolute; inset: auto 0px 0px auto; margin: 0px; transform: translate(0px, -44px);" aria-labelledby="bd-theme-text" data-popper-placement="top-end">
          <li>
            <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
              <svg className="bi me-2 opacity-50" width="1em" height="1em"><use href={ColorIcons +"#sun-fill"}></use></svg>
              Light
              <svg className="bi ms-auto d-none" width="1em" height="1em"><use href={ColorIcons + "#check2"}></use></svg>
            </button>
          </li>
          <li>
            <button type="button" className="dropdown-item d-flex align-items-center active" data-bs-theme-value="dark" aria-pressed="true">
              <svg className="bi me-2 opacity-50" width="1em" height="1em"><use href={ColorIcons + "#moon-stars-fill"}></use></svg>
              Dark
              <svg className="bi ms-auto d-none" width="1em" height="1em"><use href={ColorIcons + "#check2"}></use></svg>
            </button>
          </li>
          <li>
            <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="auto" aria-pressed="false">
              <svg className="bi me-2 opacity-50" width="1em" height="1em"><use href={ColorIcons + "#circle-half"}></use></svg>
              Auto
              <svg className="bi ms-auto d-none" width="1em" height="1em"><use href={ColorIcons + "#check2"}></use></svg>
            </button>
          </li>
        </ul>
      </div>
        <div className="primaryDiv">
            <div className="submitButton">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
        </div>
      </form>

    </>
  );
}