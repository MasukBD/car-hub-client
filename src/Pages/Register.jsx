/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import loginImg from '../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import iconGoogle from '../assets/social-icon/google.png';
import iconfacebook from '../assets/social-icon/facebook.png';
import iconInsta from '../assets/social-icon/github.png';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';

const Register = () => {

    const { createUserWithEmail } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUserWithEmail(email, password)
            .then(result => {
                const newUser = result.user;
                updateProfile(newUser, {
                    displayName: name,
                });
                sendEmailVerification(newUser)
                    .then(() => {
                        Swal.fire({
                            title: 'Success!',
                            text: 'A Verification link was Sent to Your Email!',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        })
                    })
                form.reset();
            })
            .catch(error => {
                toast.error(error.message);
            })



    }
    return (
        <div className='flex flex-col lg:flex-row gap-7 my-16'>
            <img className='w-full lg:w-1/2' src={loginImg} alt="" />
            <div className='w-full lg:w-1/2 p-5 border rounded-md lg:mx-10'>
                <h3 className='text-2xl text-center font-bold my-5'>Register</h3>
                <form onSubmit={handleRegister}>
                    <div>
                        <label className='font-bold' htmlFor="name">Name</label>
                        <input className='border p-2 rounded w-full my-2' placeholder='Enter Your Name' type="text" name="name" id="name" required />
                    </div>
                    <div>
                        <label className='font-bold' htmlFor="email">Email</label>
                        <input className='border p-2 rounded w-full my-2' placeholder='Enter Your Email' type="email" name="email" id="email" required />
                    </div>
                    <div className='my-3'>
                        <label className='font-bold' htmlFor="password">Password</label>
                        <input className='border p-2 rounded w-full my-2' placeholder='Enter Your Password' type="password" name="password" id="pass" required />
                    </div>
                    <div>
                        <input className='mr-2' type="checkbox" name="checkbox" id="" />
                        <label htmlFor="">Accept Term & Conditions <Link className='btn btn-link'>Learn More</Link></label>
                    </div>
                    <div className='text-center my-3'>
                        <input className='btn w-full bg-orange-600 hover:bg-red-700' type="submit" value="Register" />
                    </div>
                </form>
                <p>Already have an account? <Link className='btn btn-link' to="/login">Login</Link></p>
                <p className='divider'>OR</p>
                <p className='my-2 text-center'>Continue With</p>
                <div className='flex justify-center gap-8 mt-5'>
                    <button><img className='w-10' src={iconGoogle} alt="" /></button>
                    <button><img className='w-10' src={iconfacebook} alt="" /></button>
                    <button><img className='w-10' src={iconInsta} alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default Register;