
const Banner = () => {
    return (

        <div className="">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/1ZXBDMc/138230199-kitchen-equipment-electronics-appliances-lat.jpg"
              className="w-full  h-screen "
            />
            {/* <div className="absolute flex justify-center transform -translate-y-1/2 w-full h-full bg-[#0b0b0bb5]   bg-blend-overlay left-[0.2px] right-5 top-1/2"></div> */}
            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
              <div className="text-center ">
                <img
                  className=" justify-center ml-24 mb-4"
                  src=""
                  alt=""
                />
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
  
          {/* carousel 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/rH2hbt7/slider1-1200x480.jpg"
              className="w-full h-screen"
            />
            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
              
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
  
          {/* carousel 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/yV5GzL9/Electronic-img1.png"
              className="w-full h-screen"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
  
          
        </div>
      </div>
       
    );
};

export default Banner;