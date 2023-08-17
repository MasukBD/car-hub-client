/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import coverImg from '../assets/images/checkout/checkout.png';

const Checkout = () => {
    const service = useLoaderData();
    const { _id, title, price, description } = service;
    return (
        <>
            <div className='relative'>
                <img className='w-full' src={coverImg} alt="" />
                <div className='absolute flex justify-start items-center rounded-md pl-10 text-white h-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
                    <h3 className='text-4xl font-bold'>Check Out</h3>
                </div>
            </div>
            <div className='bg-gray-100 my-16 rounded-md p-10'>
                <form>
                    <div>
                        <div className='flex gap-5 flex-col lg:flex-row'>
                            <input required className='w-full p-2 rounded-md' placeholder='Enter Your First Name' type="text" name="firstName" id="firstname" />
                            <input required className='w-full p-2 rounded-md' placeholder='Enter Your First Name' type="text" name="lastName" id="lastname" />
                        </div>
                        <div className='flex gap-5 flex-col lg:flex-row my-5'>
                            <input required className='w-full p-2 rounded-md' placeholder='Enter Your Number' type="number" name="phoneNumber" id="phonenumber" />
                            <input required className='w-full p-2 rounded-md' placeholder='Enter Your Email' type="email" name="email" id="emial" />
                        </div>
                        <div>
                            <textarea required className='w-full p-1' placeholder='Your Message' name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <input className='w-full btn btn-error my-3' type="submit" value="Order Confirm" />
                </form>
            </div>
        </>
    );
};

export default Checkout;