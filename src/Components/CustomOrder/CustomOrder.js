import React, { useState } from 'react';
import './CustomOrder.css';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import MealSelection from './MealSelection';

const CustomOrder = () => {
  const nav = useNavigate();

  const handleOrder = () => {
    nav("/Order");
  };

  const [order, setOrder] = useState({
    breakfast: '',
    lunch: '',
    dinner: '',
    isVeg: '',
    orderCount: 1,
    address: '',
    date: '',
    time: '',
    city: ''
  });

  const [errors, setErrors] = useState({});

  const vegItems = {
    breakfast: ['Idli', 'Dosa', 'Poha'],
    lunch: ['Paneer', 'Dal', 'Vegetable Biryani'],
    dinner: ['Roti', 'Sabji', 'Vegetable Pulao']
  };

  const nonVegItems = {
    breakfast: ['Egg Sandwich', 'Chicken Sausage', 'Bacon'],
    lunch: ['Chicken Curry', 'Mutton Biryani', 'Fish Fry'],
    dinner: ['Chicken Roti', 'Mutton Sabji', 'Fish Pulao']
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!order.breakfast) newErrors.breakfast = "Breakfast is required";
    if (!order.lunch) newErrors.lunch = "Lunch is required";
    if (!order.dinner) newErrors.dinner = "Dinner is required";
    if (!order.isVeg) newErrors.isVeg = "Please select Veg/Non-Veg";
    if (!order.address) newErrors.address = "Address is required";
    if (!order.date) newErrors.date = "Date is required";
    if (!order.time) newErrors.time = "Time is required";
    if (!order.city) newErrors.city = "City is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Order submitted:', order);
    }
  };

  const getItems = (meal) => {
    if (order.isVeg === 'veg') {
      return vegItems[meal];
    } else if (order.isVeg === 'nonVeg') {
      return nonVegItems[meal];
    }
    return [];
  };

  return (
    <div className="custom-order-container">
      <header className="header01">
        <h2>PrimePlates</h2>
        <nav className="navigation01">
          <a href="/Home">Home</a>
          <a href="/AboutUs">About Us</a>
          <a href="/Package">Packages</a>
          <a href="/WeekMenu">Our Menu</a>
          <a href="/Contact">Contact</a>
        </nav>
      </header>
      <div className="cont1">
        <div className="custom-order-page01">
          <h2>Custom Order Page</h2>
          <div className="selection-card">
            <h3>Veg or Non-Veg</h3>
            <div className="options">
              <button
                className={`option-btn ${order.isVeg === 'veg' ? 'selected' : ''}`}
                onClick={() => setOrder({ ...order, isVeg: 'veg' })}
              >
                Veg
              </button>
              <button
                className={`option-btn ${order.isVeg === 'nonVeg' ? 'selected' : ''}`}
                onClick={() => setOrder({ ...order, isVeg: 'nonVeg' })}
              >
                Non-Veg
              </button>
            </div>
            {errors.isVeg && <span className="error01">{errors.isVeg}</span>}
          </div>

          <MealSelection meal="Breakfast" items={getItems('breakfast')} selected={order.breakfast} onSelect={(item) => setOrder({ ...order, breakfast: item })} error={errors.breakfast} />
          <MealSelection meal="Lunch" items={getItems('lunch')} selected={order.lunch} onSelect={(item) => setOrder({ ...order, lunch: item })} error={errors.lunch} />
          <MealSelection meal="Dinner" items={getItems('dinner')} selected={order.dinner} onSelect={(item) => setOrder({ ...order, dinner: item })} error={errors.dinner} />

          <div className="selection-card">
            <h3>Order Count</h3>
            <input
              type="number"
              name="orderCount"
              value={order.orderCount}
              onChange={handleChange}
              min="1"
            />
          </div>

          <div className="selection-card">
            <h3>Address</h3>
            <input
              type="text"
              name="address"
              value={order.address}
              onChange={handleChange}
              placeholder="Enter your delivery address"
            />
            {errors.address && <span className="error01">{errors.address}</span>}
          </div>

          <div className="selection-card">
            <h3>Date</h3>
            <input
              type="date"
              name="date"
              value={order.date}
              onChange={handleChange}
            />
            {errors.date && <span className="error01">{errors.date}</span>}
          </div>

          <div className="selection-card">
            <h3>Time</h3>
            <input
              type="time"
              name="time"
              value={order.time}
              onChange={handleChange}
            />
            {errors.time && <span className="error01">{errors.time}</span>}
          </div>

          <div className="selection-card">
            <h3>City</h3>
            <input
              type="text"
              name="city"
              value={order.city}
              onChange={handleChange}
              placeholder="Enter your city"
            />
            {errors.city && <span className="error01">{errors.city}</span>}
          </div>

          <button type="button" className="bt01" onClick={handleSubmit}>Proceed to Payment</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomOrder;
