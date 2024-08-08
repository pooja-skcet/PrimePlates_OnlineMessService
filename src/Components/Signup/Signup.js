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
        nav("/Home");
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const username = e.target.elements.username.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        if (name && username && email && password) {
            const user = { name, username, email, password };

            try {
                const response = await fetch('http://localhost:8080/api/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user),
                });

                if (response.ok) {
                    console.log('Signup successful');
                    handleHome();
                } else {
                    console.error('Signup failed');
                }
            } catch (error) {
                console.error('Error:', error);
            }
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
                        <button type="submit" className="signup-button">Create Account</button>
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
                        <li>Delicious homemade meals delivered right to your doorstep. Enjoy a variety of dishes, personalized plans, and the convenience of our reliable service. We're thrilled to have you here!!</li>
                        <li>Experience the joy of freshly cooked meals every day with MessWaala. From traditional favorites to healthy options, we've got something for everyone. Let us take care of your daily meals, so you can focus on what you love.</li>
                        <li>At PrimePlates, we believe that good food brings people together. Our mission is to provide you with nutritious, tasty meals that make your life easier and more enjoyable.</li>
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
