
// import { useLoaderData } from 'react-router-dom';

import { useLoaderData } from 'react-router-dom';
import Cart from './Cart';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const MyCart = () => {
const {User}=useContext(AuthContext)

    const [datas, setData] = useState(null);
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/cart/${encodeURIComponent(User?.email)}`);
        const jsonData = await response.json();
        setData(jsonData);
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [User]);
console.log(datas)
    return (
        <div className='max-w-5xl mx-auto'>
            <h2 className='text-3xl text-center text-gray-700 '>Your Selected products.</h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 mx-4'>
                {
                  datas &&  datas.map(item=><Cart key={item._id} item={item} datas={datas} setData={setData}></Cart>)
                }
            </div>
           
        </div>
    );
};

export default MyCart;