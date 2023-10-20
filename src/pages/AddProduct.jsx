import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAddProduct = event =>{
        event.preventDefault();

        const form = event.target;

        const bname = form.bname.value;
        const pname= form.pname.value;
        const price = form.price.value;
        const quality = form.quality.value;
        const rating = form.rating.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newProduct = {bname, pname, price, quality, rating, details, photo};
        console.log(newProduct);

        // send data to the server

        fetch('http://localhost:5000/products',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire(
            {
            title: "success",
            text: "You have successfully added",
            icon: "success",
            confirmButtonText: "Ok"
            }
          )}

    })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
    
            <form onSubmit={handleAddProduct} className="bg-white p-20">
            <h2 className="text-4xl text-center font-bold mb-5">Add a Product</h2>
                {/* form name and quantity row control */}
                <div className="md:flex mb-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="bname" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="pname" placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier and taste control */}
                <div className="md:flex mb-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Product quality</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quality" placeholder="Product quality" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details control */}
                <div className="md:flex mb-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo control */}
                <div className="mb-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Img</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Enter your img url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                <input type="submit" value="Add Product" className="btn btn-block bg-[#d2b48c]" />
            </form>
        </div>
    );
};

export default AddProduct;