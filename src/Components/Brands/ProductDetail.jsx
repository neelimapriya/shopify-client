// import { useEffect } from "react";
import { useContext } from "react";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { AiFillStar } from 'react-icons/ai';
import Swal from "sweetalert2";


const ProductDetail = () => {
    const {User}=useContext(AuthContext)
    const email=User?.email;
    // console.log(email)

    const data=useLoaderData()
    // console.log(data)

    const {brand, details, name, photo, price, rating }=data;

    const object ={email, brand, details, name, photo, price, rating,}
    // console.log(object)
    

    const handleAddCart=()=>{
      
        fetch('https://shopify-jet.vercel.app/cart',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(object)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire(
                    'Good job!',
                    'Product added successfully!',
                    'success'
                  )
                 
            }
        })
    }


    
    return (
        <div className="max-w-6xl mx-auto  border mt-40 mb-20">

          <div  className="  grid grid-cols-3  md:grid-cols-12 px-5 ">
          <div className="col-span-4 mt-5    order-2 md:order-1">
            <h2 className="text-2xl underline text-center md:text-start mb-3">Product Details</h2>
                <p className="md:w-52 w-full text-center   md:text-start">{details}</p>
            </div>
            <div className="col-span-5  order-1 md:order-2">
            <img src={photo} alt="" />
            </div>
            <div className="col-span-3 mt-5 text-center space-y-5 md:space-y-8 pl-3  md:text-start order-3">
                <h2 className="text-base text-sky-700 uppercase">{brand}</h2>
                <h2 className="text-xl uppercase underline">  {name}</h2>
                <p className="text-xl">Price: ${price}</p>
                <div className="flex justify-center md:justify-start">
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      Rating:  {rating}/5 
    </p> <AiFillStar className="text-xl text-yellow-500 "></AiFillStar>
    </div>
             
               <button onClick={handleAddCart} className="btn text-sky-600 ">Add to Cart</button>
               
                
              
            </div>
          </div>

           
        </div>
    );
};

export default ProductDetail;