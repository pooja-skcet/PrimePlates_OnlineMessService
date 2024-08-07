import React, { useState } from 'react';
import './CustomOrder.css';
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom';
const CustomOrder = () => {

  const nav=useNavigate();

  
  const handleOrder = () =>{
    nav("/Order")
  }
  
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
      // Process the order submission here
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
    <div>
    <div>
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
    </div>
    <div className="cont1">
    <div className="custom-order-page01">
      <h2>Custom Order Page</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group01">
      <label>Veg/Non-Veg:</label>
      <div>
        <input
          type="radio"
          name="isVeg"
          value="veg"
          checked={order.isVeg === 'veg'}
          onChange={handleChange}
        /> Veg
        <input
          type="radio"
          name="isVeg"
          value="nonVeg"
          checked={order.isVeg === 'nonVeg'}
          onChange={handleChange}
        /> Non-Veg
      </div>
      {errors.isVeg && <span className="error01">{errors.isVeg}</span>}
    </div>
        <div className="form-group01">
          <label>Breakfast:</label>
          <select name="breakfast" value={order.breakfast} onChange={handleChange}>
            <option value="">Select an item</option>
            {getItems('breakfast').map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
          {errors.breakfast && <span className="error01">{errors.breakfast}</span>}
        </div>

        <div className="form-group01">
          <label>Lunch:</label>
          <select name="lunch" value={order.lunch} onChange={handleChange}>
            <option value="">Select an item</option>
            {getItems('lunch').map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
          {errors.lunch && <span className="error01">{errors.lunch}</span>}
        </div>

        <div className="form-group01">
          <label>Dinner:</label>
          <select name="dinner" value={order.dinner} onChange={handleChange}>
            <option value="">Select an item</option>
            {getItems('dinner').map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
          {errors.dinner && <span className="error01">{errors.dinner}</span>}
        </div>

       

        <div className="form-group01">
          <label>Order Count:</label>
          <input
            type="number"
            name="orderCount"
            value={order.orderCount}
            onChange={handleChange}
            min="1"
          />
        </div>

        <div className="form-group01">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={order.address}
            onChange={handleChange}
          />
          {errors.address && <span className="error01">{errors.address}</span>}
        </div>

        <div className="form-group01">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={order.date}
            onChange={handleChange}
          />
          {errors.date && <span className="error01">{errors.date}</span>}
        </div>

        <div className="form-group01">
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={order.time}
            onChange={handleChange}
          />
          {errors.time && <span className="error01">{errors.time}</span>}
        </div>

        <div className="form-group01">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={order.city}
            onChange={handleChange}
          />
          {errors.city && <span className="error01">{errors.city}</span>}
        </div>

        <button type="submit" className="bt01" onClick={handleOrder}>Proceed to Payment</button>
      </form>
    </div>
    </div>
    <div>
    <Footer/>
    </div>
    </div>
  );
};

export default CustomOrder;
