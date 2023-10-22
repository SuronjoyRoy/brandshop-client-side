import { useLoaderData } from "react-router-dom";
import { useState } from "react";


const MyCart = () => {
    const cartData = useLoaderData();
    const [carts, setCart] = useState(cartData);

    const handleDelete = id => {
        fetch(`http://localhost:5000/cart/${id}`, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                console.log('deleted successfully');
                
                const reamaningCart= carts.filter(cart => cart._id !==id);
                setCart(reamaningCart);
            } 
        })
    }
    
    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 lg:mx-10">
            {

                cartData.map((cart) =>
                    <div key={cart._id}>
                        <div className="card w-96 h-[80%] bg-base-100 shadow-xl">
                            <figure><img src={cart.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{name}</h2>
                                <p>${cart.price}</p>
                                <p>{cart.type}</p>
                                <p>{cart.brand}</p>
                                <div className="card-actions justify-end">
                                    <button onClick={ ()=> handleDelete(carts._id)} className="btn btn-primary">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default MyCart;