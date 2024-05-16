import { Card } from "../../components/Card";

export const LawyerCard = () => {
  return (
    <div className=" mt-5 container">
        <div className="my-2 row">
            <Card title="Card title 1" paragraph="Sample text 1" />
        </div>
        <div className="my-2 row">
            <Card title="Card title 2" paragraph="Sample text 2" />   
        </div>
        <div className="my-2 row">
            <Card title="Card title 3" paragraph="Sample text 3" />
        </div>
    </div>
  );
};

