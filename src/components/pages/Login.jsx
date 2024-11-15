import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { userLogin, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const email = form.get('email');
        const password = form.get('password');
        userLogin(email, password)
        .then(result => {
            toast.success('Successfully created!');
            const user = result.user;
            setUser(user);
            navigate(location?.state ? location.state: '/');

        })
        .catch(err => {
            setError({...error, login:err.code})
        })
        // console.log({email, password});
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center'>Register your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Plese enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Please enter your password" className="input input-bordered" required />
                        {
                            error.login && (
                            <label className="label text-red-500">
                                {error.login}
                            </label>)

                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                </form>

                <p className='text-center font-semibold'>Don't Have An Accout ? <Link className='text-red-500' to="/auth/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;