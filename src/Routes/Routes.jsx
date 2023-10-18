import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Components/Error/ErrorPage";
import Home from "../Components/Home/Home";
import AddProduct from "../Components/AddProduct/AddProduct";
import MyCart from "../Components/MyCart/MyCart";
import Login from "../Components/Login/Login";
import Adidas from "../Components/BrandCard/Adidas";
import Chanel from "../Components/BrandCard/CHANEL";
import Gucchi from "../Components/BrandCard/Gucchi";
import LouiVutton from "../Components/BrandCard/LouiVutton";
import Nike from "../Components/BrandCard/Nike";
import Zara from "../Components/BrandCard/Zara";
import Register from "../Components/Login/Register";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/addProduct',
            element:<AddProduct></AddProduct>
        },
        {
            path:'/cart',
            element:<MyCart></MyCart>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/adidas',
            element:<Adidas></Adidas>,
            loader:({params})=>fetch(`http://localhost:5000/product/${params.brand}`)
            
        },
        {
            path:'/chanel',
            element:<Chanel></Chanel>,
            loader:()=>fetch("http://localhost:5000/product")
        },
        {
            path:'/gucchi',
            element:<Gucchi></Gucchi>,
            loader:()=>fetch("http://localhost:5000/product")
        },
        {
            path:'/louis',
            element:<LouiVutton></LouiVutton>,
            loader:()=>fetch("http://localhost:5000/product")
        },
        {
            path:'/nike',
            element:<Nike></Nike>,
            loader:()=>fetch("http://localhost:5000/product")
        },
        {
            path:'/zara',
            element:<Zara></Zara>,
            loader:()=>fetch("http://localhost:5000/product")
        },
    ]
  },
]);

export default router;