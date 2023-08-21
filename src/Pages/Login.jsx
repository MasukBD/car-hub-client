/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import loginImg from '../assets/images/login/login.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import iconGoogle from '../assets/social-icon/google.png';
import iconfacebook from '../assets/social-icon/facebook.png';
import iconInsta from '../assets/social-icon/github.png';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../hooks/useTitle';

const Login = () => {

    const { signIn, googleLogin } = useContext(AuthContext);
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                toast.success('Login Successfull!');
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message);
            })
    };

    const handleGoogleSingIn = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                toast.success(`Log in Successfully as ${user.displayName}`)
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    useTitle('Login');

    return (
        <div className='flex flex-col lg:flex-row gap-7 my-16'>
            <img className='w-full lg:w-1/2' src={loginImg} alt="" />
            <div className='w-full lg:w-1/2 p-5 border rounded-md lg:mx-10'>
                <h3 className='text-2xl text-center font-bold my-5'>Login</h3>
                <form onSubmit={handleLogin}>
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
                        <label htmlFor="">Remenber Me</label>
                    </div>
                    <div className='text-center my-5'>
                        <input className='btn w-full bg-orange-600 hover:bg-red-700' type="submit" value="Login" />
                    </div>
                </form>
                <p>Don&apos;t have an account? <Link className='btn btn-link' to="/register">Register</Link></p>
                <p className='divider'>OR</p>
                <p className='my-2 text-center'>Continue With</p>
                <div className='flex justify-center gap-8 mt-5'>
                    <button onClick={handleGoogleSingIn}><img className='w-10' src={iconGoogle} alt="" /></button>
                    <button><img className='w-10' src={iconfacebook} alt="" /></button>
                    <button><img className='w-10' src={iconInsta} alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default Login;