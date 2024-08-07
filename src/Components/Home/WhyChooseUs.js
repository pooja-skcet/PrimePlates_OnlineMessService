// src/components/WhyChooseUs.js
import React from 'react';
import './WhyChooseUs.css'; // Import the CSS file for styling
import img1 from '../Home/HomeImages/home1.jpeg'
const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h2>Why <span>Choose Us</span></h2>
      <p>The best food for you at affordable prices</p>
      <div className="features">
        <div className="feature">
          <img src={img1} alt="Personalized Plan" />
          <h3>Personalized Plan</h3>
          <p>With our wide Menu and Affordable prices, you can personalize your order.</p>
        </div>
        <div className="feature">
          <img src={img1} alt="Free and on-time Delivery" />
          <h3>Free and on-time Delivery</h3>
          <p>Free delivery services at your doorstep. Choose the time and place of your food delivery.</p>
        </div>
        <div className="feature">
          <img src={img1} alt="Hygienic and Safe Packaging" />
          <h3>Hygienic and Safe Packaging</h3>
          <p>Each food item will have proper packaging to secure the delicacy of the food.</p>
        </div>
        <div className="feature">
          <img src={img1} alt="Add-ons Facility" />
          <h3>Add-ons Facility</h3>
          <p>With Messwaala’s monthly subscription, add delicious dishes to the main menu, as per mood.</p>
        </div>
        <div className="feature">
          <img src={img1} alt="Meals for the Day" />
          <h3>Meals for the Day</h3>
          <p>A single stop for your daily food requirements.</p>
        </div>
        <div className="feature">
          <img src="path/to/easy_app_icon.png" alt="Easy Regulation with App" />
          <h3>Easy Regulation with App</h3>
          <p>Track your orders and subscription with our easy-to-use mobile app.</p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
