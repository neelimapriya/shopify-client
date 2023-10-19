import { useLoaderData } from "react-router-dom";

const Brand = () => {
  const params = useLoaderData();
  console.log(params);
 

  return (
    <div className="grid  gap-10 mt-10 max-w-5xl mx-auto">

        {
            params.length ==0 ?(
                <p className="text-center text-2xl text-sky-600 justify-center">Product of This Brand Is Currently Stock Out !</p>
            )
            :(
                <div>
                     {params.map((item) => (
        <div key={item._id}>
            {/* slider */}
          {/* <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src={item.photo}
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div> */}
          
          {/* product */}
          <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl border border-sky-700  text-gray-700 ">
            <div className="relative w-2/5 m-0 overflow-hidden text-gray-700  rounded-r-none shrink-0 rounded-xl ">
              <img src={item.photo} alt="image" className=" w-full  p-5" />
            </div>
            <div className="p-6">
              <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                {item.type}
              </h6>
              <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {item.name}
              </h4>
              <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                {item.details}
              </p>
              <a className="inline-block" href="#">
                <button
                  className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Learn More
                </button>
              </a>
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
