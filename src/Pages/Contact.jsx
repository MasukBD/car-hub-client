/* eslint-disable no-unused-vars */
import React from 'react';
import useTitle from '../hooks/useTitle';
import HomePageContact from './Home/HomePageContact';

const Contact = () => {
    useTitle('Contact');
    return (
        <div>
            <HomePageContact></HomePageContact>
        </div>
    );
};

export default Contact;