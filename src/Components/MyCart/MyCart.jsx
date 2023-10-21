

import { Link } from 'react-router-dom';
import Cart from './Cart';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaArrowLeft } from 'react-icons/fa';


const MyCart = () => {
const {User}=useContext(AuthContext)

    const [datas, setData] = useState(null);
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://shopify-jet.vercel.app/cart/${encodeURIComponent(User?.email)}`);
        const jsonData = await response.json();
        setData(jsonData);
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [User]);
// console.log(datas)
    return (
        <div className='max-w-5xl mx-auto mt-32'>
            <h2 className='text-3xl text-center text-gray-700 '>Your Selected products.</h2>
            {
                datas?.length ==0 &&<> <p className='text-gray-600 text-center text-xl mt-3'>Your cart is empty.</p>
                <div className='flex justify-center mt-5 items-center gap-2 underline underline-offset-1'><FaArrowLeft></FaArrowLeft><Link to='/brand'> You can visit our available brands! </Link></div>
                </>
            }
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 mx-4'>
                {
                  datas &&  datas.map(item=><Cart key={item._id} item={item} datas={datas} setData={setData}></Cart>)
                }
            </div>
           
        </div>
    );
};

export default MyCart;