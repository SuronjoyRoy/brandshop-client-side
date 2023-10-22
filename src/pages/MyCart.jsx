import { useLoaderData } from "react-router-dom";
import AddCardShow from "./AddCardShow";
import { useState } from "react";

const MyCart = () => {
    const cartData = useLoaderData([]);
    const [carts, setCarts] = useState(cartData)
    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 lg:mx-10">
            {

                cartData.map(cart => <AddCardShow 
                    key={cart._id}
                    cart={cart}
                    carts={carts}
                    setCarts={setCarts}
                    >
                    </AddCardShow>)
                    
            }
        </div>
    );
};

export default MyCart;