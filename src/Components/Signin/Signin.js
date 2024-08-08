import React from 'react';
import { useState, useEffect } from 'react';
import './Signin.css';
import img from './Image/signin_image.jpg';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signin() {
    const nav = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success,setSuccess]=useState(false);
    const handleSignup = () =>{
      nav("/Signup")
    }
    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent default form submission
  
      try {
        const response = await axios.get('http://localhost:8080/api/users');
        const user = response.data.find((user) => user.username === username);
        if (user) {
          if (user.password === password) {
            nav('/Home'); // Redirect to dashboard on successful login
            setError(false)
          } 
          else {
            setError('Invalid username or password');
            setSuccess(false);
          }
        } else {
          setSuccess(false);
          setError('Invalid username or password');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle other errors if needed
      }
    };
  
  
    
  

   

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="login-box">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <p>Welcome to PrimePlates! Sign up to elevate your daily meals with delicious homemade recipes and seamless food delivery solutions!</p>
                        <input type="text" name="username" placeholder="UserName" value={username} onChange={(e)=>setUsername(e.target.value)} required ></input>
                        <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required ></input>
                        <div className="form-options">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#forgot-password">Forgot Password?</a>
                        </div>
                        {error && <p className="error">{error}</p>}
                        <button type="submit" className="login-button">Login</button>
                    </form>
                    <div className="social-login">
                        <p>Login with:</p>
                        <button className="social-button facebook">F</button>
                        <button className="social-button google">G</button>
                        <button className="social-button twitter">T</button>
                    </div>
                    <Link href="/Signup" variant="body2" onClick={handleSignup}>
                        Already have an account? Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signin;
