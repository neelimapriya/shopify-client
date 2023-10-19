import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';



const Brands = () => {
const [data, setData]=useState([])

 
  useEffect(() => {
   
    fetch("http://localhost:5000/brand")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
       setData(data); 
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      
      });
  }, []);

  return (
    <div className="mt-20 ">
      <div>
      <h2 className="text-center text-3xl font-bold underline underline-offset-8  mb-5">All Category</h2>
      </div>
     <div  className="grid ml-24 md:grid-cols-2 lg:grid-cols-3 max-w-6xl md:mx-auto gap-10">
     {data.map(item=>
        <div key={item._id} className="relative group w-96 border outline">
        <img data-aos="zoom-in-up" data-aos-duration="1500" src={item.img} alt="Your Image" className="w-full h-auto group-hover:opacity-80" />
        <div className="absolute  inset-0  items-center justify-center  pt-5   opacity-0 group-hover:opacity-100">
            <p className="text-black mb-16 text-4xl font-extrabold text-center">{item.brand}</p> 
            <br />
           <Link className="ml-24" to={`/product/${item.brand}`} >

           <button className= "btn text-center font-bold bg-black text-white hover:bg-slate-600"> View All Product</button>
           </Link>
        </div>
       
        
    </div>)
      }
     </div>
    </div>
  );
};

export default Brands;
