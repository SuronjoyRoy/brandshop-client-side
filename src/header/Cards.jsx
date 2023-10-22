import { Link } from "react-router-dom";

const Cards = ({ card }) => {
    const {id, image, title } = card;
    
    return (
        <>
            <Link to={`/company/${id}`}>
                <div className="card card-compact bg-base-100 shadow-xl mb-4">
                    <figure>
                        <img src={image} className="w-full h-[200px]" alt="" />
                    </figure>
                    <div className="card-body items-center">
                        <h2 className="card-title ">{title}</h2>
                    </div>
                </div>
            </Link>


        </>
    );
};

export default Cards;