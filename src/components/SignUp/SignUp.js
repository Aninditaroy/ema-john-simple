import React from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import googleIcon from '../../images/google.svg';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswrordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    if(user){
        navigate('/');
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('You passwords didn\'t match');
            return;
        }
        if (password.length < 6) {
            setError('Passwords must be in 6 characters or longer');
            return;
        }
        createUserWithEmailAndPassword(email,password);
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Signup</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswrordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Signup" />
                </form>
                <p className='form-link-area'>Already have an account?  <Link className="form-link" to="/login">Login</Link></p>
                <div className='or'>
                    <div className='line'></div><span>OR</span> <div className='line'></div>
                </div>
                <button className='google-area' n><img src={googleIcon} alt="" />Continue with Google</button>

            </div>
        </div>
    );
};

export default SignUp;