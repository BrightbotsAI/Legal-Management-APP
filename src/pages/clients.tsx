import { ClientsForm } from "../components/Clients/ClientsForm";
import { ClientsView } from "../components/Clients/ClientsView";

export const Clients = () => {
  return (
    <>
      <h1 className="p-2">Clients</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <ClientsView />
          </div>
          <div className="col">
            <ClientsForm />
          </div>
        </div>
      </div>
    </>
  );
};