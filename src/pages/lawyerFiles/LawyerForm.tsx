import { FormField } from "../../components";

export const LawyerForm = () => {
  return (
    <form className="mt-5 px-5">
        <div className=" row justify-content-center ">
            <div className="col-12 ">
                <FormField
                    label="Name"
                    type="text"
                    id="nameLawyer"
                    ariaDescribedby="insert the lawyer's name"
                    helpText="insert the lawyer's name "
                />
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-12">
                <FormField
                    label="Last Name"
                    type="text"
                    id="lastNameLawyer"
                    ariaDescribedby="insert the lawyer's last name"
                    helpText="insert the lawyer's last name"
                />
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-12">
                <FormField
                    label="Specialization"
                    type="text"
                    id="specializationLawyer"
                    ariaDescribedby="Insert the lawyer's specialization"
                    helpText="Insert the lawyer's specialization"
                />
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-12">
                <FormField
                    label="Contact Info"
                    placeholder="381 2901612"
                    type="number"
                    id="numberLawyer"
                    helpText="Insert the phone number"
                />
            </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-5">
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

