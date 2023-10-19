import Banner from "../header/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="text-center py-8">
                <h2 className="text-4xl mb-3">Our Services</h2>
                <p className="text-1xl ">We provide our best electronic service and make happy customer</p>
            </div>
        </div>
    );
};

export default Home;