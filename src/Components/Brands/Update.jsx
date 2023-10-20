import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const data = useLoaderData();
  console.log(data);
  const { brand, details, name, photo, price, rating, type, _id } = data;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const rating = form.rating.value;
    const updateProduct = { name, brand, type, price, details, photo, rating };
    console.log(updateProduct);

    fetch(`http://localhost:5000/updateProduct/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Good job!", "Product Updated successfully!", "success");
          form.reset();
        }
      });
  };

  return (
    <div className=" max-w-5xl mx-auto mb-10">
      <h2 className="text-4xl font-extrabold text-center">
        Update Your Product Here
      </h2>
      <div className="grid lg:grid-cols-12">
        <div className="mt-5 flex justify-center lg:col-span-6">
          <img
            className="w-72 lg:w-full lg:mt-20"
            defaultValue={photo}
            src={photo}
            alt=""
          />
        </div>
        <div className="lg:col-span-6">
          <form
            onSubmit={handleUpdate}
            className="max-w-2xl mx-auto p-5  bg-transparent pt-20 space-y-5"
          >
            <div>
              {/* form row 1*/}
              <div className="md:flex justify-around md:space-x-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Product Name</span>
                  </label>
                  <label className="input-group">
                    <input
                      defaultValue={name}
                      name="name"
                      type="text"
                      placeholder="Product Name"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Brand Name</span>
                  </label>
                  <label className="input-group">
                    <select
                      defaultValue={brand}
                      name="brand"
                      className="select select-bordered w-full"
                    >
                      <option disabled selected>
                        select Brand Name
                      </option>
                      <option>Adidas</option>
                      <option>Chanel</option>
                      <option>Gucci</option>
                      <option>Louis Vutton</option>
                      <option>Nike</option>
                      <option>Zara</option>
                    </select>
                  </label>
                </div>
              </div>
              {/* form  row 2*/}
              <div className="md:flex mt-5 justify-around md:space-x-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Product Type</span>
                  </label>
                  <label className="input-group">
                    <input
                      defaultValue={type}
                      name="type"
                      type="text"
                      placeholder="Your Product Type"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Product Price</span>
                  </label>
                  <label className="input-group">
                    <input
                      defaultValue={price}
                      type="text"
                      name="price"
                      placeholder="Product Price (usd)"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              {/* form  row 3*/}
              <div className="md:flex mt-5 justify-around md:space-x-4">
                <div className="form-control md:w-1/5">
                  <label className="label">
                    <span className="label-text">Ratings </span>
                  </label>
                  <label className="input-group">
                    <select
                      defaultValue={rating}
                      name="rating"
                      className="select w-full select-bordered"
                    >
                      <option disabled selected>
                        rate
                      </option>
                      <option>1</option>
                      <option>1.5</option>
                      <option>2</option>
                      <option>2.5</option>
                      <option>3</option>
                      <option>3.5</option>
                      <option>4</option>
                      <option>4.5</option>
                      <option>5</option>
                    </select>
                  </label>
                </div>

                <div className="form-control md:w-4/5">
                  <label className="label">
                    <span className="label-text">Your Product Picture</span>
                  </label>
                  <label className="input-group">
                    <input
                      defaultValue={photo}
                      type="text"
                      name="photo"
                      placeholder="Your Product Picture url"
                      className="input input-bordered  w-full"
                    />
                  </label>
                </div>
              </div>
              {/* rating*/}
              <div className="form-control mt-5 ">
                <label className="label">
                  <span className="label-text">Product Details</span>
                </label>
                <label className="input-group ">
                  <textarea
                    defaultValue={details}
                    name="details"
                    type="text"
                    placeholder="Product Details"
                    className="input  input-bordered text-ellipsis w-full   h-40"></textarea>
                  
                </label>
              </div>
            </div>

            <input
              type="submit"
              className="btn btn-block  bg-black text-white"
              value="UPDATE PRODUCT"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
