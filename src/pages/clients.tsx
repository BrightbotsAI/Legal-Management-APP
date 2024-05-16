import { FormField } from "../components/FormField";

export function Clients() {
  return (
    <form className="mt-5">
      <div className="row justify-content-center">
        <div className="col-8">
          <FormField
            label="Name"
            type="text"
            id="nameClient"
            ariaDescribedby="nameHelp"
            helpText="Insert your name"
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8">
          <FormField
            label="Email"
            type="email"
            id="emailClient"
            helpText="Insert your email"
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8">
          <FormField
            label="Phone Number"
            type="number"
            id="numberClient"
            helpText="Insert your phone number"
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8">
          <FormField
            label="Address"
            type="text"
            id="addressClient"
            helpText="Insert your address"
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

