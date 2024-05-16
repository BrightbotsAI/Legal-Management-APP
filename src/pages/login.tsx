import { FormField } from "../components/FormField";

export const Login = () => {
  return (
    <form className="mt-5">
      <div className="row justify-content-center">
        <div className="col-8">
          <FormField
            label="Email address"
            type="email"
            id="exampleInputEmail1"
            ariaDescribedby="emailHelp"
            helpText="We'll never share your email with anyone else."
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8">
          <FormField
            label="Password"
            type="password"
            id="exampleInputPassword1"
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
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
};

