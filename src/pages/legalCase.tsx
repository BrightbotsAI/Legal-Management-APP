export const LegalCase = () => {
  return (
    <div className = "container">
      <form className="row g-3 px-5 mt-3">
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
  );
};
