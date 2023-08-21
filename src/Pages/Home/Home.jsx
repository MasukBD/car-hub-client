/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Carousel/Banner';
import HomeAbout from './HomeAbout';
import ServiceArea from './ServiceArea';
import HomePageContact from './HomePageContact';
import Product from './Product';
import Team from './Team';
import Features from './Features';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <ServiceArea></ServiceArea>
            <HomePageContact></HomePageContact>
            <Product></Product>
            <Team></Team>
            <Features></Features>
        </div>
    );
};

export default Home;