/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';

const ServiceArea = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://car-hub-server-nine.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-10'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-orange-600'>Services</h3>
                <h2 className='text-3xl font-bold'>Our Services Area</h2>
                <p className='w-full lg:w-1/2 mx-auto space-y-3'>the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.slice(0, 6).map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </div>
            <div className='text-center mt-5'>
                <Link to="/service"><button className='btn btn-outline font-bold btn-error'>See More</button></Link>
            </div>
        </div>
    );
};

export default ServiceArea;