import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Loading/Loading';
import useToken from '../../hooks/useToken';
import './Register.css';
import { toast } from 'react-toastify';


const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (token) {
        navigate('/');
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        toast('verification E-mail Sent');
        console.log('Updated profile');
        navigate('/');
    }

    return (

        <div className='registration-container'>
            <h2 className='text-center text-2xl text-gray-600 font-bold my-2'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Your Name' required/>

                <input type="email" name="email" placeholder='Email Address' required />

                <input type="password" name="password" placeholder='Password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />

                <label className={`p-2 ${agree ? '' : 'text-rose-600'}`} htmlFor="terms">I Accept Warehouse TechSolution Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='mx-auto bg-green-500 mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-blue-600 px-4' onClick={navigateLogin}>Login</Link> </p>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;