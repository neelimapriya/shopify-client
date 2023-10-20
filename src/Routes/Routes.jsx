import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Components/Error/ErrorPage";
import Home from "../Components/Home/Home";
import AddProduct from "../Components/AddProduct/AddProduct";
import MyCart from "../Components/MyCart/MyCart";
import Login from "../Components/Login/Login";
// import Adidas from "../Components/BrandCard/Adidas";
// import Chanel from "../Components/BrandCard/CHANEL";
// import Gucchi from "../Components/BrandCard/Gucchi";
// import LouiVutton from "../Components/BrandCard/LouiVutton";
// import Nike from "../Components/BrandCard/Nike";
// import Zara from "../Components/BrandCard/Zara";
import Register from "../Components/Login/Register";
import Brands from "../Components/Brands/Brands";
import Brand from "../Components/Brands/brand";
import PrivateRoute from "../AuthProvider/PrivateRoute";
import ProductDetail from "../Components/Brands/ProductDetail";
import Update from "../Components/Brands/Update";
import Cart from "../Components/MyCart/Cart";
// import Cart from "../Components/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
       
       
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/brand",
        element: <Brands></Brands>,
        loader: () => fetch("http://localhost:5000/brand"),
      },
      {
        path: "/product/:brand",
        element: <Brand></Brand>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.brand}`),
      },
      {
        path: "/card/:id",
        element: <PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singleProduct/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singleProduct/${params.id}`),
      },
      {
        path: "/cartProduct/:email",
        element:<Cart></Cart>,
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/cart/${params.email}`),
      },

     
      
    ],
  },
]);

export default router;
