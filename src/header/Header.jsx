import { Link, NavLink } from "react-router-dom";
import logo from'../assets/img/logo.svg';
import img from '../assets/img/user.png';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {

    const {user, logOut} = useContext(AuthContext);

    const handlSingOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>  
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addproduct'>Add Product</NavLink></li>
        <li><NavLink to='/mycart'>My Cart</NavLink></li>
        
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="">
                    <img className="hidden lg:flex" src={logo} alt="" />
                </div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={img} />
                    </div>
                </label>
            
                {
                    user ?
                        <button onClick={handlSingOut} className="btn">Sing Out</button>
                        :
                        <Link to='/login'>
                            <button className="btn">Login</button>
                        </Link>
                }
                    
            </div>
        </div>
    );
};

export default Header;