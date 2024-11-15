import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const from = new FormData(event.target);
        const name = from.get('name');
        // if (name.length < 5) {
        //     setError({ ...error, name: "must be more the 5 character long" });
        //     return;
        // }
        const photo = from.get('photo');
        const email = from.get('email');
        const password = from.get('password');
        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                updateUserProfile({displayName: name, photoURL: photo})
                .then( () => {
                    navigate('/');
                }).catch( err => {
                    // console.log(err);
                })
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorCode, errorMessage);
            })
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center'>Login your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>
                    {
                        error.name && (
                            <label className="label text-rose-500 text-sm">
                                {error.name}
                            </label>
                        )
                    }
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo-url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                </form>

                <p className='text-center font-semibold'>Already Have a Account? {" "}<Link className='text-red-500' to="/auth/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;