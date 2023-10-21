import { useEffect, useState } from "react";
import Banner from "../header/Banner";
import Card from "../header/Card";


const Home = () => {
    const [card, setCard] = useState();
    useEffect(() => {
        fetch('electronic.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className="text-center py-8">
                <h2 className="text-4xl font-medium mb-5">Our Brand Product</h2>
                <Card card={card}></Card>
            </div>
            {/* home down section */}
            <div className='py-15 my-10 bg-[#69c947]'>
                <div className="flex-col grid grid-cols-1 lg:grid-cols-2 w-fulls">
                    <div className="">
                        <img className='w-full' src="https://i.ibb.co/KqXyzZ3/rev-home8-2.png" data-aos="fade-up"
                            data-aos-duration="3000" alt="testimonial" border="0" />
                    </div>

                    <div className="flex items-center text-white">
                        <p>Laptops typically have a clamshell form factor with a flat panel screen (usually 11–17 in or 280–430 mm in diagonal size) on the inside of the upper lid and an alphanumeric keyboard and pointing device (such as a trackpad and/or trackpoint) on the inside of the lower lid, although 2-in-1 PCs with a detachable keyboard ...</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div>
                            <h1 className="text-5xl font-bold">What is the main use of laptop?</h1>
                            <p className="py-6">
                                The laptops are a quick and easy way to store information, data and multimedia content, upload and download information from the web, scan all types of content across different input devices.</p>
                            {/* <button className="btn btn-primary">Get Started</button> */}
                        </div>
                        <img className="w-[50%]" src="https://i.ibb.co/b24zD0R/Dell-Sept-14.jpg" data-aos="fade-up"
                            data-aos-duration="3000" alt="promo-1" border="0" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;