import { useEffect, useState } from "react";
import Banner from "../header/Banner";
import Card from "../header/Card";


const Home = () => {
    const [card, setCard] = useState();
    useEffect(() => {
    fetch('electronic.json')
    .then(res => res.json())
    .then(data => setCard(data))
    },[])
    return (
        <div>
            <Banner></Banner>
            <div className="text-center py-8">
                <h2 className="text-4xl font-medium mb-5">Our Brand Product</h2>
                <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Home;