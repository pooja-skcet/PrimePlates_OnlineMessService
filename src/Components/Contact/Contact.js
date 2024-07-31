import React from 'react';
import './Contact.css';

const reviews = [
  { user: 'John Doe', rating: 5, comment: 'Excellent service and delicious food!' },
  { user: 'Jane Smith', rating: 4, comment: 'Great variety and quality. Highly recommended!' },
  { user: 'Alice Johnson', rating: 5, comment: 'Amazing experience. The food was top-notch!' },
];

const Contact = () => {
  return (
    <div>
    <div>
    <header className="header8">
      <h2>PrimePlates</h2>
      <nav className="navigation8">
      <a href="/Home">Home</a>
      <a href="/AboutUs">About Us</a>
          <a href="/Package">Packages</a>
          
          <a href="/WeekMenu">Our Menu</a>
          <a href="/CustomOrder">Custom Order</a>
      </nav>
    </header>
    </div>
    <div className="contact-page">
    
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>
      <div className="contact-details">
        <div className="address-section">
          <h2>Our Address</h2>
          <p>PrimePlates Food Mess</p>
          <p>123 Culinary Street</p>
          <p>Foodville, FV 56789</p>
        </div>
        <div className="contact-section">
          <h2>Contact Number</h2>
          <p>Phone: +91-1234567890</p>
        </div>
        <div className="map-section">
          <h2>Find Us Here</h2>
          <iframe
            title="Mess Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.467226267483!2d144.96328031531582!3d-37.814563979751575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d22e1a1ecb0b!2s123%20Culinary%20St%2C%20Melbourne%20VIC%203001%2C%20Australia!5e0!3m2!1sen!2sus!4v1648212020616!5m2!1sen!2sus"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="reviews-section">
        <h2>Customer Reviews</h2>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <strong>{review.user}:</strong> {review.comment} ({'⭐'.repeat(review.rating)})
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Contact;
