
import {RiDeleteBin6Line} from "react-icons/ri"
import Swal from "sweetalert2";


const Cart = ({item,datas,setData}) => {
   const {brand,name,photo,price,_id}=item;


   const handleDelete=(_id)=>{

    Swal.fire({
        title: "Are you sure?",
        text: "Your product will be permanently deleted from cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://shopify-jet.vercel.app/cart/${_id}`, {
            method: 'DELETE',
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount >0) {
                Swal.fire("Deleted!", "Your Product has been deleted.", "success");
                const remaining = datas.filter((cart) => cart._id !== _id);
                setData(remaining);
              }
            });
        }
      });
   }

    return (
        <div>
            <div className="relative h-96 flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border mb-10">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white w-5/6  h-[400px]  rounded-xl bg-clip-border ">
    <img
      src={photo}
      className=" w-full h-full"
    />
  </div>
  <div className="p-6">
    
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-sky-600 ">
        {brand}
      </p>
      <h2 className="block font-sans text-xl antialiased font-normal leading-normal text-gray-700 ">
      {name}
    </h2>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed ">
       Price: {price} $
      </p>
    
    
  </div>
  <div className="p-6 pt-0">
    <button onClick={()=>handleDelete(_id)}
      className=" text-3xl w-full text-red-700"
      type="button"
    >
     <RiDeleteBin6Line></RiDeleteBin6Line>
    </button>   
  </div>
</div>
        </div>
    );
};

export default Cart;