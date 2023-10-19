import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Banner from "../header/Banner";
import Footer from "../footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;