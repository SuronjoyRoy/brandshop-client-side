import Cards from "./Cards";

const Card = ({card}) => {
    console.log(card)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2 mx-auto p-2">
            {
                card?.map((card) => <Cards key={card.id} card={card}></Cards>)
            }
            
        </div>
    );
};

export default Card;