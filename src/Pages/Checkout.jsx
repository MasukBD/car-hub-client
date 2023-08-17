/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import coverImg from '../assets/images/checkout/checkout.png';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Checkout = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const { user } = useContext(AuthContext);

    const handleCheckOut = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const Mobile = form.phoneNumber.value;
        const email = form.email.value;

        const orderDetails = {
            customerName: name, date, email, Phone: Mobile, Price: price, ServiceId: _id, ServiceName: title, image: img
        }

        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Order Submitted!',
                        text: 'We will notify You later!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
                form.reset()
            })


    }
    return (
        <>
            <div className='relative'>
                <img className='w-full' src={coverImg} alt="" />
                <div className='absolute flex justify-start items-center rounded-md pl-10 text-white h-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
                    <h3 className='text-4xl font-bold'>Check Out</h3>
                </div>
            </div>
            <div className='bg-gray-100 my-16 rounded-md p-10'>
                <p className='text-center pb-10 font-bold text-2xl'>Checking Out For : {title} Service</p>
                <form onSubmit={handleCheckOut}>
                    <div>
                        <div className='flex gap-5 flex-col lg:flex-row'>
                            <input defaultValue={user?.displayName} required className='w-full p-2 rounded-md' placeholder='Enter Your Name' type="text" name="name" id="name" />
                            <input required className='w-full p-2 rounded-md' placeholder='Enter Date' type="date" name="date" id="date" />
                        </div>
                        <div className='flex gap-5 flex-col lg:flex-row my-5'>
                            <input defaultValue={user?.phoneNumber} required className='w-full p-2 rounded-md' placeholder='Enter Your Number' type="number" name="phoneNumber" id="phonenumber" />
                            <input defaultValue={user?.email} required className='w-full p-2 rounded-md' placeholder='Enter Your Email' type="email" name="email" id="emial" />
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