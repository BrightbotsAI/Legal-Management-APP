import { PrecedentView } from "../components/Precendents/PrecedentView";
import { PrecedentForm } from "../components/Precendents/PrecedentForm";

export const Precedents = () => {
  return (
    <>
      <h5 className="p-2">Precedents</h5>
      <div className="container">
        <div className="row">
          <div className="col">
            <PrecedentView />
          </div>
          <div className="col">
            <PrecedentForm />
          </div>
        </div>
      </div>
    </>
  );
};