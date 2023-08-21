/* eslint-disable no-unused-vars */
import React from 'react';
import img from '../assets/images/Error/error.png';
import useTitle from '../hooks/useTitle';

const ErrorPage = () => {
    useTitle('Error');
    return (
        <div className='h-screen flex items-center justify-center'>
            <img src={img} alt="" />
        </div>
    );
};

export default ErrorPage;