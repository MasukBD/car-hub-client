/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/team/1.jpg';
import img2 from '../../assets/images/team/2.jpg';
import img3 from '../../assets/images/team/3.jpg';
import icon1 from '../../assets/social-icon/facebook.png';
import icon2 from '../../assets/social-icon/instagram.png';
import icon3 from '../../assets/social-icon/twitter.png';

const Team = () => {
    return (
        <div className='my-12'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-orange-600'>Team</h3>
                <h2 className='text-3xl font-bold'>Meet Our Team</h2>
                <p className='w-full lg:w-1/2 mx-auto space-y-3'>A mechanic is responsible for inspecting and repairing vehicles, machinery, and light trucks. Also known as service technicians and perform repairs. </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {/* Person 1 */}
                <div className="card w-full bg-base-100 shadow-lg">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="product" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <div className='text-center'>
                            <h2 className="text-2xl font-bold">Diesel mechanic</h2>
                            <p className='font-bold text-red-600 py-2'>Race car mechanics</p>
                            <p className='flex items-center justify-center flex-row gap-4'>
                                <a href=''><img className='w-10' src={icon1} alt="facebook" /></a>
                                <a href=''><img className='w-10' src={icon2} alt="instagram" /></a>
                                <a href=''><img className='w-10' src={icon3} alt="twitter" /></a>

                            </p>
                        </div>
                    </div>
                </div>
                {/* Person 2 */}
                <div className="card w-full bg-base-100 shadow-lg">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="product" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <div className='text-center'>
                            <h2 className="text-2xl font-bold">Auto body mechanics</h2>
                            <p className='font-bold text-red-600 py-2'>Service technicians</p>
                            <p className='flex items-center justify-center flex-row gap-4'>
                                <a href=''><img className='w-10' src={icon1} alt="facebook" /></a>
                                <a href=''><img className='w-10' src={icon2} alt="instagram" /></a>
                                <a href=''><img className='w-10' src={icon3} alt="twitter" /></a>
                            </p>
                        </div>
                    </div>
                </div>
                {/* Person 3 */}
                <div className="card w-full bg-base-100 shadow-lg">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="product" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <div className='text-center'>
                            <h2 className="text-2xl font-bold">Heavy equipment mechanic</h2>
                            <p className='font-bold text-red-600 py-2'>Brake and transmission technicians</p>
                            <p className='flex items-center justify-center flex-row gap-4'>
                                <a href=''><img className='w-10' src={icon1} alt="facebook" /></a>
                                <a href=''><img className='w-10' src={icon2} alt="instagram" /></a>
                                <a href=''><img className='w-10' src={icon3} alt="twitter" /></a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Team;