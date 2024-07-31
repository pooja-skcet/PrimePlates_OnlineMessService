import React from 'react';
import img from './Images/signup_image.jpg';
import Link from '@mui/material/Link';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const nav = useNavigate();

    const handleSignin = () => {
        nav("/Signin");
    };
    const handleHome = () => {
        nav("/NewHome");
    };


    const handleSignup = (e) => {
        e.preventDefault();
        // Here you can add any validation or submission logic
        const name = e.target.elements.name.value;
        const username = e.target.elements.username.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        if (name && username && email && password) {
            // Perform signup logic here
            console.log('Signup successful');
        } else {
            alert("Please fill in all fields");
        }
    };

    return (
        <div className="signup-wrapper">
            <div className="signup-container">
                <div className="signup-box">
                    <form className="signup-form" onSubmit={handleSignup}>
                        <h1>Create Account</h1>
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="text" name="username" placeholder="UserName" required />
                        <input type="email" name="email" placeholder="Email or Mobile Number" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <button type="submit" className="signup-button" onClick={handleHome}>Create Account</button>
                    </form>
                    <div className="social-login">
                        <p>Join with:</p>
                        <button className="social-button facebook">F</button>
                        <button className="social-button google">G</button>
                        <button className="social-button twitter">T</button>
                    </div>
                </div>
                <div className="info-box">
                    <h2>What you will get?</h2>
                    <ul>
                        <li>Effortlessly plan, organize, and manage your catering events with our user-friendly platform designed to streamline your workflow.</li>
                        <li>Create and customize menus tailored to your clients' needs, ensuring every event is a unique culinary experience.</li>
                        <li>Share recipes and menu plans with your team or clients, making collaboration smooth and efficient.</li>
                    </ul>
                    <Link href="#" variant="body2" onClick={handleSignin}>
                        Already have an account? Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
