/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { HiMagnifyingGlass, HiShoppingBag } from "react-icons/hi2";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setCart(data))
    }, [user]);

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('LogOut Succeessfully!');
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div>
            <div className="navbar bg-base-100 w-11/12 mx-auto">
                <div className="navbar-start">
                    <Link to="/"><img width={60} src={logo} alt="header-logo" /></Link>
                </div>
                <div className="navbar-center ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36">
                            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'text-error font-bold' : 'text-black font-bold')}>Home</NavLink></li>
                            <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'text-error font-bold' : 'text-black font-bold')}>About</NavLink></li>
                            <li><NavLink to="/service" className={({ isActive }) => (isActive ? 'text-error font-bold' : 'text-black font-bold')}>Service</NavLink></li>
                            <li><NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-error font-bold' : 'text-black font-bold')}>Blog</NavLink></li>
                            <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-error font-bold' : 'text-black font-bold')}>Contact</NavLink></li>
                            {
                                user ? <button onClick={handleLogout} className='text-black font-bold'>Log Out</button> : <li><NavLink to="/login" className={({ isActive }) => (isActive ? 'text-error font-bold' : 'text-black font-bold')}>Login</NavLink></li>
                            }
                        </ul>
                    </div>
                    <ul className="hidden lg:flex">
                        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'text-error font-bold ml-10' : 'text-black font-bold ml-10')}>Home</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'text-error font-bold ml-10' : 'text-black font-bold ml-10')}>About</NavLink></li>
                        <li><NavLink to="/service" className={({ isActive }) => (isActive ? 'text-error font-bold ml-10' : 'text-black font-bold ml-10')}>Service</NavLink></li>
                        <li><NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-error font-bold ml-10' : 'text-black font-bold ml-10')}>Blog</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-error font-bold ml-10' : 'text-black font-bold ml-10')}>Contact</NavLink></li>
                        {
                            user ? <button onClick={handleLogout} className='text-black font-bold ml-10 hover:text-error'>Log Out</button> : <li><NavLink to="/login" className={({ isActive }) => (isActive ? 'text-error font-bold ml-10' : 'text-black font-bold ml-10')}>Login</NavLink></li>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className='relative' to="/cartDetails" title='Veiw Cart'><HiShoppingBag></HiShoppingBag><span className='badge text-red-500 font-bold absolute -top-4'>{cart?.length}</span></Link>
                    <span className='mx-5'><HiMagnifyingGlass></HiMagnifyingGlass></span>
                    <Link className="btn btn-outline btn-error">Appointment</Link>

                </div>
            </div>
        </div>
    );
};

export default Header;