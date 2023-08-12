/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../SharedPage/Header';
import Footer from '../SharedPage/Footer';

const Main = () => {
    return (
        <>
            <Header></Header>
            <div className='w-11/12 mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Main;