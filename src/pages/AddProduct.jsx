
const AddProduct = () => {
    return (
        <div className="bg-[#F4F3F0] p-24">
            
            
            <form onSubmit='' className="bg-white p-20">
            <h2 className="text-4xl text-center font-bold mb-5">Add a Product</h2>
                {/* form name and quantity row control */}
                <div className="md:flex mb-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Produc Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Avaiable Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Avaiable Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier and taste control */}
                <div className="md:flex mb-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Suppiler</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="suppiler" placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Product quality</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Product quality" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details control */}
                <div className="md:flex mb-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo control */}
                <div className="mb-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Enter your photo url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                <input type="submit" value="Add Product" className="btn btn-block bg-[#d2b48c]" />
            </form>
        </div>
    );
};

export default AddProduct;