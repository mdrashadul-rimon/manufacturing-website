import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import PageTitle from '../../PageTitle/PageTitle';
import Loading from '../../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import useToken from '../../hooks/useToken';
import 'react-toastify/dist/ReactToastify.css';
import '../Login/Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user);
    if (loading || sending) {
        return <Loading></Loading>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-rose-600'>Error: {error?.message}
        </p>
        // toast('Something went wrong')
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('E-mail Sent');
        }
        else {
            toast('please enter your email address');
        }
    }

    return (
        <div className='login-container w-50 mx-auto'>
            <PageTitle title="Login"></PageTitle>
            <h2 className="login-title">Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input ref={emailRef} type="email" placeholder="Enter email" required />
                </div>
                <div className="mb-3">
                    <input ref={passwordRef} type="password" placeholder="Password" required />
                </div>
                <button className="bg-rose-600 w-50 mx-auto mb-2" type="submit">
                    Login
                </button>
            </form>
            {errorElement}
            <p>Don't have an account? <Link to="/register" className='text-blue-600' onClick={navigateRegister}>Register</Link> </p>
            <p>Forget Password? <button onClick={resetPassword}>Reset Password</button> </p>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;