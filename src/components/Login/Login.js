import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import googleIcon from '../../images/google.svg';

import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        navigate('/shop');
    }
    const handlePasswrordBlur = event => {
        setPassword(event.target.value);
    }
    const handleUserSigIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>LOGIN</h2>
                <form onSubmit={handleUserSigIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="Email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswrordBlur} type="password" name="Password" id="" required />
                    </div>
                    <p style={{ color: 'red', textAlign: 'center' }}>{error?.message}</p>
                    {
                        loading && <p style={{ color: 'green', textAlign: 'center' }}>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='form-link-area'>New to Ema-john? <Link className="form-link" to="/signup">Create New Account</Link></p>
                <div className='or'>
                    <div className='line'></div><span>OR</span> <div className='line'></div>
                </div>
                <button className='google-area' n><img src={googleIcon} alt="" />Continue with Google</button>

            </div>
        </div>
    );
};

export default Login;