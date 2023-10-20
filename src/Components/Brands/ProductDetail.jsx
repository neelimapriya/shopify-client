// import { useEffect } from "react";
import { useContext } from "react";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const ProductDetail = () => {
    const {User}=useContext(AuthContext)
    const email=User?.email;
    console.log(email)

    const data=useLoaderData()
    console.log(data)

    const {brand, details, name, photo, price, rating }=data;

    const object ={email, brand, details, name, photo, price, rating,}
    console.log(object)
    

    const handleAddCart=()=>{
      
        fetch('http://localhost:5000/cart',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(object)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }


    
    return (
        <div className="max-w-6xl mx-auto border mt-10 mb-20">

          <div  className="  grid grid-cols-12 px-5">
          <div className="col-span-4 mt-5">
            <h2 className="text-2xl underline mb-3">Product Details</h2>
                <p className="w-52">{details}</p>
            </div>
            <div className="col-span-5">
            <img src={photo} alt="" />
            </div>
            <div className="col-span-3 mt-5 text-start space-y-5 md:space-y-8 pl-3">
                <h2 className="text-base text-sky-700 uppercase">{brand}</h2>
                <h2 className="text-xl uppercase underline">  {name}</h2>
                <p className="text-xl">Price: ${price}</p>
                <p className="underline font-semibold">Ratings : {rating}/5</p>
             
               <button onClick={handleAddCart} className="btn text-sky-600 ">Add to Cart</button>
               
                
              
            </div>
          </div>

           
        </div>
    );
};

export default ProductDetail;