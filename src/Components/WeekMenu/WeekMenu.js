import React, { useState } from 'react';
import MenuItem from './MenuItem';
import './WeekMenu.css';
import Footer from '../Footer';

const WeekMenu = () => {
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState('Monday');
  const [selectedCuisine, setSelectedCuisine] = useState('North Indian');
  const [selectedSession, setSelectedSession] = useState('Lunch');
  const [selectedPortion, setSelectedPortion] = useState('Lite');
  const [showFilters, setShowFilters] = useState(false); // State to toggle filters

  const toggleVegOnly = () => {
    setVegOnly(!vegOnly);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const menuItems = {
    Monday: [
      {
        type: 'Lite',
        price: '₹170.00',
        description: 'Plain Chapati, Aloo Matar Rassedar, Kala Jamun',
        cuisine: 'North Indian',
        session: 'Lunch',
        veg: true,
        image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
      },
      // More items...
    ],
    Tuesday: [
      {
        type: 'Lite',
        price: '₹150.00',
        description: 'Plain Dosa, Coconut Chutney, Sambar, Payasam',
        cuisine: 'South Indian',
        session: 'Lunch',
        veg: true,
        image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
      },
      // More items...
    ],
    // More days...
  };

  const filteredItems = menuItems[selectedDayOfWeek]?.filter(item => {
    return (!vegOnly || item.veg) &&
           item.cuisine === selectedCuisine &&
           item.session === selectedSession &&
           item.type === selectedPortion;
  });

  return (
    <div className="menu-page5">
      <div>
        <header className="header5">
          <h2>PrimePlates</h2>
          <nav className="navigation5">
            <a href="/Home">Home</a>
            <a href="/AboutUs">About Us</a>
            <a href="/Package">Packages</a>
            <a href="/CustomOrder">Custom Order</a>
            <a href="Contact">Contact</a>
          </nav>
        </header>
      </div>
      <div className="section5">
        <div className="filters5">
          <button className="filter-button5" onClick={toggleFilters}>
            {showFilters ? 'Hide Filters' : 'Filter By'}
          </button>

          {showFilters && (
            <div className="filter-options5">
              <div className="cuisine-types5">
                <button
                  className={selectedCuisine === 'North Indian' ? 'active' : ''}
                  onClick={() => setSelectedCuisine('North Indian')}
                >
                  North Indian
                </button>
                <button
                  className={selectedCuisine === 'South Indian' ? 'active' : ''}
                  onClick={() => setSelectedCuisine('South Indian')}
                >
                  South Indian
                </button>
              </div>

              <div className="meal-sessions5">
                <button
                  className={selectedSession === 'Breakfast' ? 'active' : ''}
                  onClick={() => setSelectedSession('Breakfast')}
                >
                  Breakfast
                </button>
                <button
                  className={selectedSession === 'Lunch' ? 'active' : ''}
                  onClick={() => setSelectedSession('Lunch')}
                >
                  Lunch
                </button>
                <button
                  className={selectedSession === 'Dinner' ? 'active' : ''}
                  onClick={() => setSelectedSession('Dinner')}
                >
                  Dinner
                </button>
              </div>

              <div className="portion-sizes5">
                <button
                  className={selectedPortion === 'Lite' ? 'active' : ''}
                  onClick={() => setSelectedPortion('Lite')}
                >
                  Lite
                </button>
                <button
                  className={selectedPortion === 'Standard' ? 'active' : ''}
                  onClick={() => setSelectedPortion('Standard')}
                >
                  Standard
                </button>
                <button
                  className={selectedPortion === 'Jumbo' ? 'active' : ''}
                  onClick={() => setSelectedPortion('Jumbo')}
                >
                  Jumbo
                </button>
                <button
                  className={selectedPortion === 'Premium' ? 'active' : ''}
                  onClick={() => setSelectedPortion('Premium')}
                >
                  Premium
                </button>
              </div>

              <div className="veg-toggle5">
                <label htmlFor="veg-only5">Veg</label>
                <input
                  type="checkbox"
                  id="veg-only5"
                  checked={vegOnly}
                  onChange={toggleVegOnly}
                />
              </div>
            </div>
          )}
        </div>
        
        <div className="week-menu5">
          <div className="week-days5">
            <button>&lt;</button>
            <div className="days5">
              {Object.keys(menuItems).map(day => (
                <button
                  key={day}
                  className={selectedDayOfWeek === day ? 'active' : ''}
                  onClick={() => setSelectedDayOfWeek(day)}
                >
                  {day}
                </button>
              ))}
            </div>
            <button>&gt;</button>
          </div>

          <div className="menu-items5">
            {filteredItems && filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))
            ) : (
              <p>No items available for the selected filters.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WeekMenu;
