import { Link } from "react-router-dom";

const Brands = () => {
  return (
    <div className="mt-28 grid ml-24 md:grid-cols-2 lg:grid-cols-3 max-w-6xl md:mx-auto gap-10">
      <div className="relative group w-96 border outline">
        <img src="https://i.ibb.co/4RFTxrv/CH.jpg" alt="Your Image" className="w-full h-auto group-hover:opacity-80" />
        <div className="absolute  inset-0  items-center justify-center  pt-5   opacity-0 group-hover:opacity-100">
            <p className="text-black mb-16 text-4xl font-extrabold text-center">CHANEL</p> 
            <br />
           <Link className=" ml-28 " to="/chanel">
           <button className= "btn text-center font-bold bg-black text-white hover:bg-slate-600"> View All Product</button></Link>
        </div>
       
        
    </div>
      <div className="relative group w-96 border outline">
        <img src="https://i.ibb.co/crQmfFt/LV.jpg" alt="Your Image" className="w-full h-auto group-hover:opacity-80" />
        <div className="absolute  inset-0  items-center justify-center  pt-5 space-y-12  opacity-0 group-hover:opacity-100">
            <p className="text-black mb-16 text-4xl font-extrabold text-center">Louis Vuitton</p> 
            <br />
             <Link className=" ml-28 " to="/louis">
           <button className= "btn text-center font-bold bg-black text-white hover:bg-slate-600"> View All Product</button></Link>
        </div>
       
        
    </div>
      <div className="relative group w-96 border outline">
        <img src="https://i.ibb.co/z2c17nZ/nike.jpg" alt="Your Image" className="w-full h-auto group-hover:opacity-80" />
        <div className="absolute  inset-0  items-center justify-center  pt-5 space-y-12  opacity-0 group-hover:opacity-100">
            <p className="text-white text-4xl mb-16 font-extrabold text-center">Nike</p> 
            <br />
             <Link className=" ml-28 " to="/nike">
           <button className= "btn text-center font-bold bg-black text-white hover:bg-slate-600"> View All Product</button></Link>
        </div>
       
        
    </div>
      <div className="relative group w-96 border outline">
        <img src="https://i.ibb.co/brX09VD/adidas.jpg" alt="Your Image" className="w-full h-auto group-hover:opacity-80" />
        <div className="absolute  inset-0  items-center justify-center  pt-5 space-y-12  opacity-0 group-hover:opacity-100">
            <p className="text-white mb-16 text-4xl font-extrabold text-center">Adidas</p> 
            <br />
             <Link className=" ml-28 " to="/adidas">
           <button className= "btn text-center font-bold bg-black text-white hover:bg-slate-600"> View All Product</button></Link>
        </div>
       
        
    </div>
      <div className="relative group w-96 border outline">
        <img src="https://i.ibb.co/807ZVrc/Zara.jpg" alt="Your Image" className="w-full h-auto group-hover:opacity-80" />
        <div className="absolute  inset-0  items-center justify-center  pt-5 space-y-12  opacity-0 group-hover:opacity-100">
            <p className="text-black mb-16 text-4xl font-extrabold text-center">Zara</p> 
            <br />
             <Link className=" ml-28 " to="/zara">
           <button className= "btn text-center font-bold bg-black text-white hover:bg-slate-600"> View All Product</button></Link>
        </div>
       
        
    </div>
      <div className="relative group w-96 border outline">
        <img src="https://i.ibb.co/QjQrZzg/gucchi.jpg" alt="Your Image" className="w-full h-auto group-hover:opacity-80" />
        <div className="absolute  inset-0  items-center justify-center  pt-5 space-y-12  opacity-0 group-hover:opacity-100">
            <p className="text-white mb-16 text-4xl font-extrabold text-center">Gucchi</p> 
            <br />
             <Link className=" ml-28 " to="/gucchi">
           <button className= "btn text-center font-bold bg-black text-white hover:bg-slate-600"> View All Product</button></Link>
        </div>
       
        
    </div>
    </div>
  );
};

export default Brands;
