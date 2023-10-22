import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardShow from "./CardShow";

const CompanyCard = () => {
    const cardData = useLoaderData();
    // console.log(cardData);
    const { id } = useParams();
  const brandData = cardData.find((brand) => brand?.id == id);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
        .then(res => res.json())
        .then(data => setProducts(data))
}, [])

const companyProducts = products.filter(brandProduct => brandProduct?.brand == brandData?.title)

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={brandData?.ad_img_1}
                        className="w-full h-[450px]"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={brandData?.ad_img_2}
                        className="w-full h-[450px]"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[450px]">
                    <img
                        src=
                        {brandData?.ad_img_3}
                        className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-2 mx-auto p-2">
        {
          companyProducts.map(product => <CardShow key={product._id} product={product}/>)
        }
      </div>
        </div>
    );
};

export default CompanyCard;