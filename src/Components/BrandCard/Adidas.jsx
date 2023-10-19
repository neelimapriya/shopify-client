import {  useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AdidasCard from "./adidasCard";

const Adidas = () => {
  // const loadedProducts = useLoaderData();
//   const [products, setProducts] = useState();
// useEffect(() => {
   
//     fetch(`http://localhost:5000/product/${brand}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data); 
        
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
      
//       });
  // }, []);
 

  console.log(products);
  return (
    <div>
      <h2>All Products</h2>
      <h2>products : {products.length}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {/* {products &&
          products.map((product) => (
            <AdidasCard
              key={product._id}
              product={product}
              products={products}
              setProducts={setProducts}
            ></AdidasCard>
          ))} */}
      </div>
    </div>
  );
};

export default Adidas;
