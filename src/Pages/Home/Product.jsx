/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='my-10'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-orange-600'>Popular Products</h3>
                <h2 className='text-3xl font-bold'>Browse Our Products</h2>
                <p className='w-full lg:w-1/2 mx-auto space-y-3'>the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.  </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 py-5'>
                {
                    products.map(product => <ProductCard product={product} key={product._id}></ProductCard>)
                }
            </div>
            <a href='https://www.alibaba.com/showroom/lamborghini-parts.html' className='text-center block' target="_blank" rel="noreferrer"
            ><button className='btn btn-outline font-bold btn-error mt-5'>See More</button></a>
        </div>
    );
};

export default Product;