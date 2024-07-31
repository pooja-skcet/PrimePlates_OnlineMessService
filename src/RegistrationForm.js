import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    gender: '',
    email: '',
    program: '',
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>Application Development Course Registration Form</h2>
        <p>Would you like to join our course?</p>
        <div className="form-group">
          <label htmlFor="firstName">Student name:</label>
          <div className="name-inputs">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="FirstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="LastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="### ### ####"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <div className="gender-inputs">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
                required
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === 'Other'}
                onChange={handleChange}
                required
              />
              Other
            </label>
          </div>
        </div>
       
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="program">What program are you planning to enroll with?</label>
          <select
            id="program"
            name="program"
            value={formData.program}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Please select
            </option>
            <option value="Program A">3 month program </option>
            <option value="Program B">6 month program </option>
            <option value="Program C">1 year program </option>
          </select>
        </div>
        
        <button type="submit">SUBMIT FORM</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
