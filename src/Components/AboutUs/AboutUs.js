import React from 'react';
import './AboutUs.css';
import img from '../Home/HomeImages/home.jpg';
import Footer from '../Footer';
const AboutUs = () => {
  return (
    <div>
    <div>
    <header className="header00">
      <h2>PrimePlates</h2>
      <nav className="navigation00">
      <a href="/Home">Home</a>
      <a href="/Package">Packages</a>
      
      <a href="/WeekMenu">Our Menu</a>
      <a href="/CustomOrder">Custom Order</a>
      <a href="/Contact">Contact</a>
      </nav>
    </header>
    </div>
    <div className="about-container" stylr={{color:"#b5b9ba"}}>
      <div className="about">
        <h1 className="about-title">A LITTLE ABOUT US</h1>
        <div className="about-content">
          <div className="about-text">
            <p>
              At PrimePlates, we believe that good food brings people together. Established in 1997, we have been committed to serving wholesome, delicious, and affordable meals to our community. Whether you're a student, a professional, or a visitor, our food mess is your go-to place for a hearty meal.
            </p>
            <p>
              Our mission is to provide high-quality, nutritious, and tasty meals that cater to diverse tastes and dietary needs. We aim to create a welcoming environment where everyone can enjoy great food and feel at home.
            </p>
            <p>
              Our team is a group of passionate food enthusiasts, chefs, and staff dedicated to making your dining experience enjoyable. Our chefs bring their expertise and love for cooking into every dish they prepare, ensuring each meal is flavorful and satisfying.
            </p>
          </div>
          <div className="about-image">
            <img src={img} alt="PrimePlates" />
          </div>
        </div>
      </div>
      <div className="properties">
        <div className="property-box">
          <h2>SATISFACTION</h2>
          <p>We work for customer contentment and not for money. This is the main reason for getting more clients and more events.</p>
        </div>
        <div className="property-box">
          <h2>TRUSTWORTHY</h2>
          <p>We are very reliable to all clients for organizing an event. We also give suggestions for clients in planning the event according to their budget.</p>
        </div>
        <div className="property-box">
          <h2>PLANNING</h2>
          <p>We plan, research, deliver, and evaluate every element of an event. We ensure the client’s opinion at every touch point.</p>
        </div>
      </div>
      <div className="footer">
        <b>
          Address: PrimePlates, BK Pudur, Kuniamuthur, Coimbatore-641008.<br />
          Contact: 987654321, 978665432<br />
          Email: primeplates@gmail.com
        </b>
      </div>
    
    </div>
    <div>
    <Footer/></div>
    </div>
  );
};

export default AboutUs;
