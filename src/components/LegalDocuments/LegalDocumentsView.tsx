export const LegalDocumentsView = () => {
  return (
    <div className="col-md-4 me-5">
      <table className="table border border-3 mt-3 ms-3">
        <caption>Case examples</caption>
        <thead>
          <tr className="border-bottom border-3">
            <th>Case id</th>
            <th className="ms-4">Case title</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-bottom border-3">
            <th className="ms-1">Id: 1</th>
            <td>Case of Mr. Castro</td>
          </tr>
          <tr className="border-bottom border-3">
            <th className="ms-1">Id: 2</th>
            <td>Case of Mrs. Lincon</td>
          </tr>
          <tr className="border-bottom border-3"> 
            <th className="ms-1">Id: 3</th>
            <td>Case of Mr. Mclovin</td>
          </tr>
          <tr className="border-bottom border-3"> 
            <th className="ms-1">Id: 4</th>
            <td>Case of Mr. Choo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
