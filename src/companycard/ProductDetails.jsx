import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {

  const [myCartCards, setMyCartCards] = useState([]);
  const productDetails = useLoaderData();
  // console.log(productDetails);
  const { name,photo,details,price } = productDetails;

  useEffect(() => {
    fetch('http://localhost:5000/cart')
        .then(res => res.json())
        .then(data => setMyCartCards(data))
}, [myCartCards])

  const handleAddCart = () =>{
    const getMyCartCards = myCartCards || []
    const isExist = getMyCartCards.find(cartCard => cartCard._id === productDetails._id)
    if (!isExist) {
        fetch('http://localhost:5000/cart', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(productDetails)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    return (
                        Swal.fire({
                            title: 'Success!',
                            text: 'Added to Cart Successfully',
                            icon: 'success',
                            confirmButtonText: 'Done'
                        })
                    )
                    
                }
            })
    }
    else{
        return (
            Swal.fire({
                title: 'Error!',
                text: 'Duplicate Item',
                icon: 'error',
                confirmButtonText: 'Go back'
            })
        )
    }
  }
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={photo}
            alt="Shoes"
            className="rounded-xl w-full h-[490px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-4xl">{name}</h2>
          <p className="font-semibold">Price: {price}</p>
          <p>{details}</p>

          <div  className="card-actions">
            <button onClick={handleAddCart} className="btn btn-block">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;