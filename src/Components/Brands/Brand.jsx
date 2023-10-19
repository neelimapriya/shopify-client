import { useLoaderData, useParams } from "react-router-dom";


const Brand = () => {
    const params =useLoaderData()
    console.log(params)
    
    return (
        <div>
            <h2>Brand</h2>
        </div>
    );
};

export default Brand;