export const LegalCase = () => {
  return (
    <div className = "container-xl">
      <div className="row g-3">
      <div className="col-md-7">
        <form className="row g-3 px-2 mt-3">
          <div className="col-md-4">
            <label htmlFor="inputCaseId" className="form-label">Case ID</label>
            <input type="number" className="form-control" id="inputCaseId"/>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputClientId" className="form-label">Client ID</label>
            <input type="number" className="form-control" id="inputClientId"/>
          </div>
          <div className="col-4">
            <label htmlFor="inputLawyerId" className="form-label">Lawyer ID</label>
            <input type="number" className="form-control" id="inputLawyerId"/>
          </div>
          <div className="col-12">
            <label htmlFor="inputCaseTitle" className="form-label">Case Title</label>
            <input type="text" className="form-control" id="inputCaseTitle"/>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCourt" className="form-label">Court</label>
            <input type="text" className="form-control" id="inputCourt"/>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputDateFiled" className="form-label">Date Filed</label>
            <input type="date" className="form-control" id="inputDateFiled"/>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputRelevantStatues" className="form-label">Relevant Statues</label>
            <input type="text" className="form-control" id="inputRelevantStatues"/>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputRelevantStatues" className="form-label">Relevant Statues</label>
            <select id="inpuinputRelevantStatuestState" className="form-select">
              <option selected>Select...</option>
              <option>Statute 1</option>
              <option>Statute 2</option>
              <option>Statute 3</option>
              <option>Statute 4</option>
            </select>
          </div>
          <div className="col-md-12">
            <label htmlFor="inputSummary" className="form-label">Summary</label>
            <input type="text" className="form-control" id="inputSummary"/>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </form>
      </div>
      <div className="col-md-5">
        <table className="table border mt-5">
          <thead>
            <tr>
              <th scope="col">Case ID</th>
              <th scope="col">Case Title</th>
              <th scope="col">Court</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Case 1</td>
              <td>Supreme Court</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Case 2</td>
              <td>Supreme Court</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Case 3</td>
              <td>Supreme Court</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>  
  );
};
