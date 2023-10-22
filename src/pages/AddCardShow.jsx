import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";


const AddCardShow = ({cart}) => {
    const { name, photo, price, brand, _id, type, rating } = cart;
   
    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Delete",
                text: "Deleted successfully",
                icon: "question",
                confirmButtonText: "Done",
              });
            }
          });
      };
    return (
        <div className="md:grid grid-cols-3 rounded-xl my-3 md:my-auto shadow-lg items-center ">
        <div>
          <img
            className="w-full h-[200px] rounded-tr-xl rounded-tl-xl md:rounded-tl-xl md:rounded-bl-xl bg-gray-400"
            src={photo}
            alt=""
          />
        </div>
        <div className="col-span-2 p-4  ">
          <div className="flex">
            <div className="flex-1">
              <p className="font-bold text-xl">{name}</p>
              <p className="font-medium">Brand: {brand}</p>
              <p className="font-medium">Type: {type}</p>
              <div className="">
                <p className="font-medium">
                  Price <span className="text-red-400">{price}</span>
                </p>
                <p className=" font-medium flex items-center">
                  Rating: <span className="text-blue-500"> {rating}</span>
                  <span>
                    <Rating
                      style={{ maxWidth: 100 }}
                      readOnly
                      halfFillMode="svg"
                      value={rating < 4.5 ? Math.floor(rating) : rating}
                    />
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-around items-center">
              <Link>
                <div
                  className="badge badge-outline bg-[#ab1f60] h-8 border-none rounded-md w-20 text-2xl"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Delete!"
                  onClick={() => handleDelete(_id)}
                >
                  <MdDelete />
                </div>
              </Link>
              <Tooltip id="my-tooltip" />
              <Link to={`/companys/${_id}`}>
                <div
                  className="badge badge-outline bg-[#2d97c4] h-8 border-none rounded-md w-20 text-2xl"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="View Details!"
                >
                  <FaEye />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddCardShow;