
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[60%]">
                <div id="slide1" className="carousel-item relative">
                    <img src="https://i.ibb.co/1ZXBDMc/138230199-kitchen-equipment-electronics-appliances-lat.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative">
                    <img src="https://i.ibb.co/yV5GzL9/Electronic-img1.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative">
                    <img src="https://i.ibb.co/1ZXBDMc/138230199-kitchen-equipment-electronics-appliances-lat.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative ">
                    <img src="https://i.ibb.co/1ZXBDMc/138230199-kitchen-equipment-electronics-appliances-lat.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="text-center py-8">
                <h2 className="text-4xl mb-3">Our Services</h2>
                <p className="text-1xl ">We provide our best yoga training and make happy you</p>
            </div>
        </div>
    );
};

export default Banner;