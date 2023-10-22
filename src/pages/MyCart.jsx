import { useLoaderData } from "react-router-dom";
import AddCardShow from "./AddCardShow";


const MyCart = () => {
    const cartData = useLoaderData();
    // const [carts, setCart] = useState(cartData);

    
    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 lg:mx-10">
            {

                cartData.map(cart => <AddCardShow key={cart._id} cart={cart}></AddCardShow>)
                    
            }
        </div>
    );
};

export default MyCart;