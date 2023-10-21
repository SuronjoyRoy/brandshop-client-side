import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CompanyCard from "../companycard/CompanyCard";
import ProductDetails from "../companycard/ProductDetails";
import UpdateCard from "../companycard/UpdateCard";


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
                element:<MyCart></MyCart>,
                loader: () => fetch('http://localhost:5000/cart')
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
            path: '/company/:id',
            element:<CompanyCard></CompanyCard>,
            loader: ()=> fetch('/electronic.json')
           },
           {
            path: "companys/:id",
            element: <ProductDetails></ProductDetails>,
            loader: ({ params }) =>
              fetch(
                `http://localhost:5000/products/${params.id}`
              ),
          },
           {
            path: '/update/:id',
            element:<UpdateCard></UpdateCard>,
            loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
           }
        ]
    },
]);

export default router;