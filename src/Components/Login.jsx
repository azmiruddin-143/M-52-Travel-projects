import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from './Home Page/Header';
import { trabelContect } from '../Privet router/Auth';

const Login = () => {
 const {createLogin } = useContext(trabelContect)
    const handleLogin = (e) => {
        e.preventDefault()
        // const name = e.target.name.value
        // const photourl = e.target.photourl.value
        const email = e.target.email.value
        const password = e.target.password.value
        createLogin(email,password)
        .then((result) =>{
           console.log(result.user);
        })
        .then((error) =>{
            console.log("vxvxv",error.message);
        })

    }
    return (
        <div>
            <Header></Header>
            <div className="bg-base-200 min-h-screen">
                <div className="hero-content flex-col mx-auto lg:flex-row-reverse">
                    <div className="card bg-base-100 w-2/4 shrink-0 shadow-2xl my-10">
                        <form onSubmit={handleLogin}  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter your email address" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <h1 className='mt-5 text-center'>Dont’t Have An Account ? <Link className='text-red-700' to="/register">Register</Link></h1>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;