import { useEffect, useState } from "react";

const Card = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div className="grid grid-cols-3 gap-5">
        
            {
                products.map(product =>
                    <div key={product._id}>
                        <div >
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure><img className="w-[80%] h-[250px]" src={product.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.bname}</h2>
                            </div>
                        </div>
                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default Card;