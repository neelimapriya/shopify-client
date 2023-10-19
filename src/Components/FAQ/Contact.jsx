import { MdCall } from 'react-icons/md';

const Contact = () => {
    return (
        <div className='text-center items-center max-w-2xl mt-10 mx-auto'>
            <h2 className='text-xl'>CONTACT US</h2>
            <p className='max-w-lg mx-auto'>Our advisers will give you a personalised welcome and will be delighted to accompany you as you discover the House of Shopify and its products.</p>

            <div className='mt-2 border border-indigo-950 max-w-xl mx-auto'>
            <div className='items-center justify-center flex text-xl pt-2'>
            <MdCall className='mr-2'></MdCall>
                <h2>
                CALL US
                </h2>
            </div>
                <p className='pt-2 px-5'>
                Our Shopify ambassadors would be delighted to assist as you discover the House of Shopify and its products.
                </p>
                <p className='pt-2 px-5'>You may contact our Customer Service by call on +44 (0)20 7216 02 16.</p>
                <p className='pt-2 px-5'>Service available from Monday to Saturday 9am to 8pm. From 9am to 5pm on Sunday November 27th.</p>
            </div>

        </div>
    );
};

export default Contact;