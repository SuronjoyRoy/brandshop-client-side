import Card from "../Card/Card";
import Banner from "../header/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="text-center py-8">
                <h2 className="text-4xl font-medium mb-5">Our Brand Product</h2>
                <Card></Card>
            </div>
        </div>
    );
};

export default Home;