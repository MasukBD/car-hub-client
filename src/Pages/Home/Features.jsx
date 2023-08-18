/* eslint-disable no-unused-vars */
import React from 'react';
import icon1 from '../../assets/icons/group.svg';
import icon2 from '../../assets/icons/deliveryt.svg';
import icon3 from '../../assets/icons/person.svg';
import icon4 from '../../assets/icons/Wrench.svg';
import icon5 from '../../assets/icons/check.svg';
import icon6 from '../../assets/icons/call.png';

const Features = () => {
    return (
        <>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-orange-600'>Core Features</h3>
                <h2 className='text-3xl font-bold'>Why Choose Us</h2>
                <p className='w-full lg:w-1/2 mx-auto space-y-3'>When it comes to teamwork, there’s nothing more powerful than collaboration. After all, “Teamwork makes the dream work.” And while there are many different ways you can go about motivating your team! </p>
            </div>
            <div className='my-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3'>
                <div className='flex flex-col justify-center items-center gap-2 p-3 border rounded-md'>
                    <img className='w-16' src={icon1} alt="" />
                    <h4 className='font-bold'>Expert Team</h4>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 p-3 border rounded-md'>
                    <img className='w-16' src={icon2} alt="" />
                    <h4 className='font-bold'>Timely Delivery</h4>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 p-3 border rounded-md'>
                    <img className='w-16' src={icon3} alt="" />
                    <h4 className='font-bold'>24/7 Support</h4>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 p-3 border rounded-md'>
                    <img className='w-16' src={icon4} alt="" />
                    <h4 className='font-bold'>Best Equipment</h4>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 p-3 border rounded-md'>
                    <img className='w-16' src={icon5} alt="" />
                    <h4 className='font-bold'>100% Guranty</h4>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 p-3 border rounded-md'>
                    <img className='w-16' src={icon6} alt="" />
                    <h4 className='font-bold'>Automatic System</h4>
                </div>
            </div>
        </>
    );
};

export default Features;