import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/87wpQLx/shopify-Cover2.png)",
      }}
    >
      <div className="flex mb-[670px] max-w-3xl">
        <button className="text-xl font-serif border border-sky-600">Available Brands</button>
      <Link to="/brand">
      <Marquee className="text-2xl font-serif mt-2"  pauseOnHover={true} speed={50}>
      Chanel |  Louis Vuitton  | Nike |  Adidas |  Zara  | Gucci
</Marquee></Link>
      </div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mt-[600px] text-5xl font-bold font-serif text-slate-700 ">Shop Your Favourite Brand With <span className="text-lime-600">SHOPIFY</span></h1>
          
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
