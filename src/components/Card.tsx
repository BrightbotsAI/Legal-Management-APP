interface CardProps {
    title: string;
    paragraph: string;
  }
  
  export const Card = ({ title, paragraph }: CardProps) => {
    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{paragraph}</p>                   
            </div>
        </div>
    );
  };
  