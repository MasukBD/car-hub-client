/* eslint-disable no-unused-vars */
import React from 'react';
import icon1 from '../../assets/icons/calender.png';
import icon2 from '../../assets/icons/call.png';
import icon3 from '../../assets/icons/location.png';

const HomePageContact = () => {
    return (
        <div className='my-10 lg:my-20 bg-black rounded-md text-white px-5 py-16'>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
                <div className='flex gap-4'>
                    <img src={icon1} alt="Calender Icon" />
                    <div>
                        <p>We are open monday-friday!</p>
                        <h3 className='font-bold text-2xl'>9:00 am - 9:00 pm</h3>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <img src={icon2} alt="Calender Icon" />
                    <div>
                        <p>Have a question?</p>
                        <h3 className='font-bold text-2xl'>+8801 751 2658</h3>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <img src={icon3} alt="Calender Icon" />
                    <div>
                        <p>Need a repair? our address</p>
                        <h3 className='font-bold text-2xl'>FirmGate, New York</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageContact;