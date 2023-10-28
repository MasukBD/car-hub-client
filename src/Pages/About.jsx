/* eslint-disable no-unused-vars */
import React from 'react';
import useTitle from '../hooks/useTitle';

const About = () => {
    useTitle('About');
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div><h1 className='text-center text-3xl font-semibold'>Oppss! You are Near!</h1><p className='font-semibold text-center'>This Page Is Under Development!</p></div>
        </div>
    );
};

export default About;