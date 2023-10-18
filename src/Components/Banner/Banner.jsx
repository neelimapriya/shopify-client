

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/87wpQLx/shopify-Cover2.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mt-[600px] text-5xl font-bold text-slate-700 ">Shop Your Favourite Brand With <span className="text-lime-600">SHOPIFY</span></h1>
          
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
