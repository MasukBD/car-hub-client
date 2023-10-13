/* eslint-disable no-unused-vars */
import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-md" />
                <div className="absolute lg:right-0 flex rounded-md items-center justify-end h-full lg:bg-gradient-to-l from-[#151515] to-[rgba(21, 21, 21, 0.00)] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='w-full lg:w-1/2 space-y-3 lg:space-y-7 pl-5 text-white'>
                        <h1 className='lg:text-6xl text-3xl font-bold'>Maintenance And Services With Best Price In Dhaka</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form!</p>
                        <div className='flex gap-7'>
                            <Link to="/service"><button className='btn btn-error'>Services</button></Link>
                            <Link to="/contact"><button className='btn btn-outline btn-error'>Contact</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 right-5 lg:right-10 bottom-0 lg:bottom-5">
                    <a href="#slide4" className='text-4xl hover:text-red-500'><FaArrowCircleLeft></FaArrowCircleLeft></a>
                    <a href="#slide2" className='text-4xl hover:text-red-500'><FaArrowCircleRight></FaArrowCircleRight></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-md" />
                <div className="absolute lg:right-0 rounded-md flex items-center justify-end h-full lg:bg-gradient-to-l from-[#151515] to-[rgba(21, 21, 21, 0.00)] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='w-full lg:w-1/2 space-y-3 lg:space-y-7 pl-5 text-white'>
                        <h1 className='lg:text-6xl text-3xl font-bold'>Maintenance And Services With Best Price In Dhaka</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form!</p>
                        <div className='flex gap-7'>
                            <Link to="/service"><button className='btn btn-error'>Services</button></Link>
                            <Link to="/contact"><button className='btn btn-outline btn-error'>Contact</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 right-5 lg:right-10 bottom-0 lg:bottom-5">
                    <a href="#slide1" className='text-4xl hover:text-red-500'><FaArrowCircleLeft></FaArrowCircleLeft></a>
                    <a href="#slide3" className='text-4xl hover:text-red-500'><FaArrowCircleRight></FaArrowCircleRight></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-md" />
                <div className="absolute lg:left-0 rounded-md flex items-center justify-start h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='w-full lg:w-1/2 space-y-3 lg:space-y-7 pl-5 text-white'>
                        <h1 className='lg:text-6xl text-3xl font-bold'>Maintenance And Services With Best Price In Dhaka</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form!</p>
                        <div className='flex gap-7'>
                            <Link to="/service"><button className='btn btn-error'>Services</button></Link>
                            <Link to="/contact"><button className='btn btn-outline btn-error'>Contact</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 right-5 lg:right-10 bottom-0 lg:bottom-5">
                    <a href="#slide2" className='text-4xl hover:text-red-500'><FaArrowCircleLeft></FaArrowCircleLeft></a>
                    <a href="#slide4" className='text-4xl hover:text-red-500'><FaArrowCircleRight></FaArrowCircleRight></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-md" />
                <div className="absolute lg:left-0 rounded-md flex items-center justify-start h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='w-full lg:w-1/2 space-y-3 lg:space-y-7 pl-5 text-white'>
                        <h1 className='lg:text-6xl text-3xl font-bold'>Maintenance And Services With Best Price In Dhaka</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form!</p>
                        <div className='flex gap-7'>
                            <Link to="/service"><button className='btn btn-error'>Services</button></Link>
                            <Link to="/contact"><button className='btn btn-outline btn-error'>Contact</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 right-5 lg:right-10 bottom-0 lg:bottom-5">
                    <a href="#slide3" className='text-4xl hover:text-red-500'><FaArrowCircleLeft></FaArrowCircleLeft></a>
                    <a href="#slide1" className='text-4xl hover:text-red-500'><FaArrowCircleRight></FaArrowCircleRight></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;