/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { HiMagnifyingGlass, HiShoppingBag } from "react-icons/hi2";

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 w-11/12 mx-auto">
                <div className="navbar-start">
                    <Link to="/"><img width={60} src={logo} alt="header-logo" /></Link>
                </div>
                <div className="navbar-center">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36">
                            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'text-error font-bold' : 'text-black font-bold lg:ml-10')}>Home</NavLink></li>
                            <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'text-error font-bold' : 'text-black font-bold lg:ml-10')}>About</NavLink></li>
                            <li><NavLink to="/service" className={({ isActive }) => (isActive ? 'text-error font-bold' : 'text-black font-bold lg:ml-10')}>Service</NavLink></li>
                            <li><NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-error font-bold' : 'text-black font-bold lg:ml-10')}>Blog</NavLink></li>
                            <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-error font-bold' : 'text-black font-bold lg:ml-10')}>Contact</NavLink></li>
                        </ul>
                    </div>
                    <ul className="hidden lg:flex">
                        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'text-error font-bold lg:ml-10' : 'text-black font-bold lg:ml-10')}>Home</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'text-error font-bold lg:ml-10' : 'text-black font-bold lg:ml-10')}>About</NavLink></li>
                        <li><NavLink to="/service" className={({ isActive }) => (isActive ? 'text-error font-bold lg:ml-10' : 'text-black font-bold lg:ml-10')}>Service</NavLink></li>
                        <li><NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-error font-bold lg:ml-10' : 'text-black font-bold lg:ml-10')}>Blog</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-error font-bold lg:ml-10' : 'text-black font-bold lg:ml-10')}>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <span><HiShoppingBag></HiShoppingBag></span>
                    <span className='mx-5'><HiMagnifyingGlass></HiMagnifyingGlass></span>
                    <Link className="btn btn-outline btn-error">Appointment</Link>

                </div>
            </div>
        </div>
    );
};

export default Header;