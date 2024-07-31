import React from 'react';
import './NewHome.css';
import i1 from './Images/breakfast.jpg'
import i2 from './Images/lunch.avif'
import i3 from './Images/dinner.webp'
import i4 from './Images/platinum.jpeg'
import i5 from './Images/silver.webp'
import i6 from './Images/gold.jpeg'
import { useNavigate } from 'react-router-dom';
const NewHome = () => {
  const nav=useNavigate();

  
  const handleSignin = () =>{
    nav("/GetStarted")
  }
  const handleMenu = () =>{
    nav("/WeekMenu")
  }
  return (
    
    <div>
    <div className="head0">
      <header className="header0">
        <div className="logo0">PrimePlates</div>
        <nav className="nav0">
          <a href="/AboutUs">About Us</a>
          <a href="/Package">Packages</a>
          
          <a href="/WeekMenu">Our Menu</a>
          <a href="/CustomOrder">Custom Order</a>
          <a href="/Contact">Contact</a>
        </nav>
        <button className="btn0" onClick={handleSignin}>Get Started</button>
      </header>
      </div>
      <div className="home-page0">
      <section className="hero0">
        <h1> Every meal is a celebration of flavors!</h1>
        <p>we transform every bite into a memorable experience with our vibrant, mouthwatering Indian dishes. Dive into a world where every meal feels like a festive celebration!</p>
        <button className="btn0" onClick={handleMenu}>View Our Menus</button>
      </section>
      <div className="services-section">
      <h2>SERVICES</h2>
      </div>
      <section className="services0">
      
        <div className="service-card0">
          <img src={i1} alt="Breakfast" className="card-image0"/>
          <h3>Breakfast</h3>
          <p>Kickstart your day with our flavorful Indian breakfast selection, featuring everything from crispy dosas to spicy poha. Each dish is crafted to bring a delicious and energizing start to your morning!</p>
          <a href="/WeekMenu" className="more-info0">More Info</a>
        </div>
        <div className="service-card0">
          <img src={i2} alt="Lunch" className="card-image0"/>
          <h3>Lunch</h3>
          <p>Savor a vibrant lunch at Food Mess with our array of authentic Indian dishes, from rich curries to fragrant biryanis. Each bite is designed to satisfy your hunger and delight your taste buds!</p>
          <a href="/WeekMenu" className="more-info0">More Info</a>
        </div>
        <div className="service-card0">
          <img src={i3} alt="Dinner" className="card-image0"/>
          <h3>Dinner</h3>
          <p>End your day on a high note with our exquisite dinner offerings at Food Mess. Enjoy a diverse menu of delectable Indian dishes, perfect for a comforting and satisfying evening meal.</p>
          <a href="/WeekMenu" className="more-info0">More Info</a>
        </div>
      </section>
      <div className="services-section">
      <h2>OUR PACKAGES</h2>
      </div>
      <section className="packages0">
      
        <div className="package-card0">
          <img src={i4} alt="Package1" className="card-image0"/>
          <h3>Premium Package</h3>
          <p>The Premium Package offers an extravagant dining experience with an exclusive array of the finest Indian cuisine. Enjoy a lavish spread of gourmet dishes, including premium starters, rich curries, and exquisite desserts, all crafted to provide the ultimate indulgence.</p>
          <a href="/Package" className="more-info0">More Info</a>
        </div>
        <div className="package-card0">
          <img src={i5} alt="Package2" className="card-image0"/>
          <h3>Standard Package</h3>
          <p>The Standard Package presents a sumptuous selection of Indian culinary delights, featuring a variety of rich curries, flavorful biryanis, and delectable sides. Ideal for a taste of elegance and comfort in every meal.</p>
          <a href="/Package" className="more-info0">More Info</a>
        </div>
        <div className="package-card0">
          <img src={i6} alt="Package3" className="card-image0"/>
          <h3>Lite Package</h3>
          <p>The Lite Package provides a delightful assortment of popular Indian dishes, including hearty curries, flavorful rice, and fresh naan. A perfect choice for a satisfying and well-rounded meal.</p>
          <a href="/Package" className="more-info0">More Info</a>
        </div>
      </section>
      <footer className="footer0">
        <div className="footer-content0">
          <p>We're ready when you are </p>
          <a href="/Contact" className="footer-contact-button0">Contact Us</a>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default NewHome;
