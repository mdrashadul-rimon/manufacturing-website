import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
console.log(user);
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center mt-5'>
            <h3 className='text-sky-500 font-semibold text-xl'>Hey, {user?.displayName} your email <span className='bg-rose-600 text-white rounded px-2'>{user?.email}</span> is not verified!!</h3>
            <h4 className='text-green-700'> Please Verify your email address</h4>
            <button className='bg-green-400 rounded px-5 py-2' onClick={async () => {
                    await sendEmailVerification();
                    toast('Verification E-mail sent');
                }}
            >
                Send Verification E-mail Again
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }

    return children;
};

export default RequireAuth;