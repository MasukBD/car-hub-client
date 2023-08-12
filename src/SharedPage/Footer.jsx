/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../assets/logo-footer.png';
import social1 from '../assets/social-icon/facebook.png';
import social2 from '../assets/social-icon/google.png';
import social3 from '../assets/social-icon/instagram.png';
import social4 from '../assets/social-icon/twitter.png';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white font-medium">
            <div>
                <img width={80} src={logo} alt="" />
                <p>Car Hub Mechaniques Ltd.<br />Providing reliable tech since 1992</p>
                <div className='flex'>
                    <a className='mr-5' href=""><img width={30} src={social1} alt="" /></a>
                    <a className='mr-5' href=""><img width={30} src={social2} alt="" /></a>
                    <a className='mr-5' href=""><img width={30} src={social3} alt="" /></a>
                    <a className='mr-5' href=""><img width={30} src={social4} alt="" /></a>
                </div>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;