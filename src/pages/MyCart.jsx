import { useLoaderData } from "react-router-dom";


const MyCart = () => {
    const cartData = useLoaderData();
    
    console.log(cartData)
    return (
        <div className="">
            {

                cartData.map((cart) =>
                    <div key={cart._id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={cart.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{name}</h2>
                                <p>${cart.price}</p>
                                <p>{cart.type}</p>
                                <p>{cart.brand}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default MyCart;