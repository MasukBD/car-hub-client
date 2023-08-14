/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service }) => {

    const { title, img, price } = service;

    return (
        <div className="card w-full bg-base-100 shadow-lg">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body flex flex-row items-center justify-between">
                <div>
                    <h2 className="card-title">{title}</h2>
                    <p className='font-bold text-red-600 py-2'>Price: ${price}</p>
                </div>
                <Link><button className='text-red-600'><FaArrowRight></FaArrowRight></button></Link>
            </div>
        </div>
    );
};

export default ServiceCard;