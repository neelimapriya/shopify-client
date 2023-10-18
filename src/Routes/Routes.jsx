import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Components/Error/ErrorPage";
import Home from "../Components/Home/Home";
import AddProduct from "../Components/AddProduct/AddProduct";
import MyCart from "../Components/MyCart/MyCart";
import Login from "../Components/Login/Login";



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
        }
    ]
  },
]);

export default router;