/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Carousel/Banner';
import HomeAbout from './HomeAbout';
import ServiceArea from './ServiceArea';
import HomePageContact from './HomePageContact';
import Product from './Product';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <ServiceArea></ServiceArea>
            <HomePageContact></HomePageContact>
            <Product></Product>
        </div>
    );
};

export default Home;