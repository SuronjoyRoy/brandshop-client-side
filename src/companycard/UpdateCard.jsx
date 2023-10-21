import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCard = () => {
    const updateData = useLoaderData();
    console.log(updateData);
    // eslint-disable-next-line no-unused-vars
    const { _id, photo, name, price, brand, rating, details, type } = updateData;
    const updateProduct = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const brand = form.brand.value
        const type = form.type.value
        const price = form.price.value
        const rating = form.rating.value
        const details = form.details.value
        const photo = form.photo.value
        form.reset();

        const newProduct = {
            name,
            brand,
            type,
            price,
            rating,
            photo,
            details
        }
        console.log(newProduct);
        fetch(
            `http://localhost:5000/products/${_id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newProduct),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.modifiedCount > 0) {
                Swal("product Updated!", "Your product has been updated.", "success");
              }
              // navigate("/");
            });
    }
    return (
        <div className="bg-[#F4F3F0] p-24">


            {/* <div>
        <h1 className="text-3xl font-bold text-center">Add a Product</h1>
        
      </div> */}
            <form onSubmit={updateProduct} className="bg-white lg:p-20">
                <h1 className="text-3xl mb-4 font-bold text-center">Update a Product</h1>
                {/* form name and quantity row */}
                <div className="md:flex gap-8 mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="name"
                                defaultValue={name}
                                placeholder="Name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <select
                                name="brand"
                                defaultValue={brand}
                                id=""
                                className=" input input-bordered w-full"
                            >
                                <option value="Acer">Acer</option>
                                <option value="Dell">Dell</option>
                                <option value="Apple">Apple</option>
                                <option value="Hp">Hp</option>
                                <option value="Asus">Asus</option>
                                <option value="Lenevo">Lenevo</option>
                            </select>
                        </label>
                    </div>
                </div>

                {/* form supplier test row */}

                <div className="md:flex gap-8 mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Type</span>
                        </label>
                        <label className="input-group">
                            <select
                                name="type"
                                defaultValue={type}
                                id=""
                                className=" input input-bordered w-full"
                            >
                                <option value="Laptop">Laptop</option>
                                <option value="Phone">Phone</option>
                                <option value="Monitor">Monitor</option>
                                <option value="MacBook">MacBook</option>
                                <option value="Ultrabook">Ultrabook</option>
                                <option value="Netbook">Netbook</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <label className="input-group">
                            <input
                                name="price"
                                defaultValue={price}
                                type="text"
                                placeholder="Price"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex gap-8 mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Rating</span>
                        </label>
                        <label className="input-group">

                            <input
                                type="text"
                                name="rating"
                                defaultValue={rating}
                                placeholder="Rating"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Short Details</span>
                        </label>
                        <label className="input-group">
                            <textarea className="textarea  input input-bordered w-full h-[100px]  " name="details"
                                defaultValue={details}
                                placeholder="Bio"></textarea>

                        </label>
                    </div>
                </div>
                {/* form photo url row */}
                <div className="">
                    <div className="form-control md:w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="photo"
                                defaultValue={photo}
                                placeholder="
                Photo URL link"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <input
                    type="submit"
                    value="Add Product"
                    className="btn btn-block bg-black border-none text-white"
                />
            </form>
        </div>
    );
};

export default UpdateCard;