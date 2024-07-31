import React from 'react';
import './Signin.css';
import img from './Image/signin_image.jpg';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

function Signin() {
    const nav = useNavigate();

    const handleSignup = () => {
        nav("/Signup");
    };

    const handleHome = (e) => {
        e.preventDefault();
        // Here you can add any validation or submission logic
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;

        if (username && password) {
            nav("/NewHome");
        } else {
            alert("Please fill in all fields");
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="login-box">
                    <form className="login-form" onSubmit={handleHome}>
                        <h1>Login</h1>
                        <p>Welcome to PrimePlates! Sign up to elevate your events with gourmet recipes and seamless catering solutions!!</p>
                        <input type="text" name="username" placeholder="UserName" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <div className="form-options">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#forgot-password">Forgot Password?</a>
                        </div>
                        <button type="submit" className="login-button">Login</button>
                    </form>
                    <div className="social-login">
                        <p>Login with:</p>
                        <button className="social-button facebook">F</button>
                        <button className="social-button google">G</button>
                        <button className="social-button twitter">T</button>
                    </div>
                    <Link href="#" variant="body2" onClick={handleSignup}>
                        Already have an account? Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signin;
