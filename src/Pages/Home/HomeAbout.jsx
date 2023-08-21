/* eslint-disable no-unused-vars */
import React from 'react';
import img1 from '../../assets/images/about_us/person.jpg';
import img2 from '../../assets/images/about_us/parts.jpg';
import { Link } from 'react-router-dom';

const HomeAbout = () => {

    return (
        <div className='lg:my-24 my-12 flex flex-col lg:flex-row lg:px-9 gap-10 lg:gap-5'>
            <div className='relative'>
                <img className='w-3/4 rounded-lg' src={img1} alt="" />
                <img className='w-1/2 rounded-md border-4 border-white absolute top-1/2 right-5' src={img2} alt="" />
            </div>
            <div className='space-y-4'>
                <h3 className='font-bold text-orange-600'>About Us</h3>
                <h2 className='text-4xl font-bold'>We are qualified & of experience in this field!</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.</p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                <Link to="/about" className='btn btn-error hover:bg-red-600'><button >Get More Info</button></Link>
            </div>

        </div>
    );
};

export default HomeAbout;