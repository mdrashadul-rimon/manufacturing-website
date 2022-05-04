import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import useToken from '../../hooks/useToken';


const SocialLogin = () => {
    const [
        signInWithGoogle,
        user,
        loading,
        error
    ] = useSignInWithGoogle(auth);

    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElementDisplay;

    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errorElementDisplay = <p className='text-rose-500'>Error: {error?.message}</p>
    }
    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div className='flex items-center'>
            {errorElementDisplay}
            <button
                onClick={() => signInWithGoogle()}
                className='bg-blue-400 w-50 mx-auto'>
                <span className='px-2'>Google Sign In</span>
            </button>
        </div>
    );
};

export default SocialLogin;