import { LawyerCard } from "./lawyerFiles/LawyerCard";
import { LawyerForm } from "./lawyerFiles/LawyerForm";

export const Lawyers = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <LawyerForm />
        </div> 
        <div className="col">
          <LawyerCard />
        </div> 
      </div>
    </div>
  );
};

