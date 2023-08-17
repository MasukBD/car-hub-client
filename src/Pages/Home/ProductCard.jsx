/* eslint-disable no-unused-vars */
import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalf } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const { _id, name, price, ratings, photo } = product;
    return (
        <Link to="">
            <div className="card w-full bg-base-100 shadow-lg">
                <figure className="px-10 pt-10 h-52">
                    <img src={photo} alt="product" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <div className='text-center'>
                        <p className='font-bold'>Ratings: <Rating className='mx-2'
                            readonly
                            placeholderRating={ratings}
                            emptySymbol={<FaStar></FaStar>}
                            placeholderSymbol={<FaStar className='text-yellow-300'></FaStar>}

                        />
                            {ratings}
                        </p>
                        <h2 className="text-2xl font-bold">{name}</h2>
                        <p className='font-bold text-red-600 py-2'>Price: ${price}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;