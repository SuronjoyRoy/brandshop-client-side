import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Card from "../Card/Card";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addproduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/mycart',
                element:<MyCart></MyCart>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/products',
                element: <Card></Card>
            }
        ]
    },
]);

export default router;