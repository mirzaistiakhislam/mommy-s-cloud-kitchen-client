import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {

    useTitle('Login');

    const { login, googleProviderLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;

                // form.reset();
                const currentUser = {
                    email: user.email
                }
                // console.log(currentUser);

                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        localStorage.setItem('mck-token', data.token);
                        navigate(from, { replace: true });
                    });


            })
            .catch(error => console.error(error));
    }

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                // console.log(currentUser);

                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        localStorage.setItem('mck-token', data.token);
                        navigate(from, { replace: true });
                    });


            })
            .catch(error => console.error(error));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <p className="py-6">For your better experience with Cloud Kitchen</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-10">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>New to Mommy's Cloud Kitchen? <Link className='text-blue-600 font-bold' to="/signup">Sign Up</Link></p>
                    <div className="form-control mt-6 px-8">
                        <button onClick={handleGoogleSignIn} className="btn btn-outline">Login With Google</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;