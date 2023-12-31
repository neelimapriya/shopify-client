import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const Brands = () => {
const [data, setData]=useState([])

 
  useEffect(() => {
   
    fetch("https://shopify-jet.vercel.app/brand")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
       setData(data); 
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      
      });
  }, []);

  return (
    <div className="mt-40 mb-20">
      <div className="flex justify-center">
      <h2 className="text-center text-3xl font-bold underline underline-offset-8  mb-10">All Category</h2>
      </div>
     <div  className="grid ml-24 md:grid-cols-2 lg:grid-cols-3  gap-10">
     {data.map(item=>
        <div key={item._id} className="relative group mr-14  border outline">
          
        <img data-aos="zoom-in-up" data-aos-duration="1500" src={item.img} alt="Your Image" className="w-full h-auto group-hover:opacity-80" />
        <div className="absolute  inset-0  items-center justify-center  pt-5   opacity-0 group-hover:opacity-100">
            
        <Link className="ml-24" to={`/product/${item.brand}`} >
           
             
           <p className="text-gray-500 lg:mb-16 text-4xl font-extrabold text-center ">{item.brand}</p>

           </Link>
        </div>
        
        
    </div>)
      }
     </div>
    </div>
  );
};

export default Brands;
