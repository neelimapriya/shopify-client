import { Link, useLoaderData } from "react-router-dom";
import Carosel from "./Carosel";
import { BiPencil, BiArrowBack } from 'react-icons/bi';

const Brand = () => {
  const params = useLoaderData([]);
  console.log(params);
 

  return (
    <div className=" ">
      <Carosel></Carosel>
      <h2 className="text-center text-3xl underline mt-5 mb-5">Here Is  All Available Products Of <span className="text-sky-600">{params[0].brand}</span></h2>

        {
            params.length ==0 ?(
                <p className="text-center text-2xl text-sky-600 justify-center mt-10 mb-32"> Product of This Brand Is Currently Stock Out !</p>
            )
            :(
                <div className="grid md:grid-cols-2 max-w-6xl mx-auto mt-10  gap-10 ">
                     {params.map((item) => (
        <div className=" " key={item._id}>
           
          
          {/* product */}
          <div className="relative  border-l-4 flex w-full max-w-[48rem] flex-row rounded-xl    text-gray-700 dark:text-white mb-7 gap-5">
  <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 dark:text-white  shrink-0 rounded-xl ">
    <img 
      src={item.photo}
      alt="image"
      className=" w-full h-72"
    />
  </div>
  <div className="p-6 ">
    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-sky-600 uppercase">
      {item.brand}
    </h6>
    <h6 className="block mb-4 font-sans  antialiased font-semibold leading-relaxed text-2xl text-gray-700  tracking-normal uppercase">
      {item.name}
    </h6>
    <h4 className="block mb-2 font-sans  antialiased font-semibold leading-snug tracking-normal text-gray-700 ">
      Type: {item.type}
    </h4>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      Price: $ {item.price}
    </p>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      Rating:  {item.rating}/5
    </p>

    
     <div className="flex justify-around">
     <Link to={`/card/${item._id}`}>
     <button
        className="flex items-center gap-2 px-6 py-3 font-sans text-base font-bold text-center text-gray-700 underline uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-gray-400 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
       <BiArrowBack></BiArrowBack> Details
        
      </button></Link>
     <Link to={`/update/${item._id}`}>
     <button
        className="flex items-center gap-2 px-6 py-3 font-sans text-base font-bold text-center text-gray-700 underline uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-gray-400 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
       <BiPencil></BiPencil> Update
        
      </button></Link>
     </div>
    
  </div>
</div>
        </div>
      ))}
                </div>
            )
        }
     
    </div>
  );
};

export default Brand;
