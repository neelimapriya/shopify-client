const AdidasCard = ({ product, products, setProducts }) => {
  const { _id, name, brand, type, price, details, photo } = product;



 

    // const adidas = products.filter((item) => item.brand == "Adidas");
    // setProducts(adidas);
 
  return (
    <div>
      <div className="card w-96 bg-base-300 shadow-xl ">
        <h2 className="text-center ">adidas</h2>

        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p>{details}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdidasCard;
