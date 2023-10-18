import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
            path:'/add',
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
            path:'/adidas',
            element:<Adidas></Adidas>
        },
        {
            path:'/chanel',
            element:<Chanel></Chanel>
        },
        {
            path:'/gucchi',
            element:<Gucchi></Gucchi>
        },
        {
            path:'/louis',
            element:<LouiVutton></LouiVutton>
        },
        {
            path:'/nike',
            element:<Nike></Nike>
        },
        {
            path:'/zara',
            element:<Zara></Zara>
        },
    ]
  },
]);

export default router;