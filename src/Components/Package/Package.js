import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Package.css';
import img1 from './PackageImages/paneer-tikka.jpg'
import img2 from './PackageImages/hyderabadibriyani.jpg'
import img3 from './PackageImages/Garlic Naan.avif'
import img4 from './PackageImages/Tandoori Prawns.jpg'
import img5 from './PackageImages/Paneer Lababdar.jpg'
import img6 from './PackageImages/Masala Chai.jpg'
import img7 from './PackageImages/Dal Makhani.webp'
import img8 from './PackageImages/Chicken Tikka.jpg'
import img9 from './PackageImages/Vegetable Korma.jpg'
import img10 from './PackageImages/Jeera Rice.jpeg'
import img11 from './PackageImages/Aloo Tikka.jpg'
import img12 from './PackageImages/Chapati.avif'
import img13 from './PackageImages/Chicken Curry.jpg'
import img14 from './PackageImages/Vegetable Pulao.webp'
import { useNavigate } from 'react-router-dom';
const Package = () => {
  const nav=useNavigate();

  
  const handleMenu = () =>{
    nav("/WeekMenu")
  }
  const [packageMode, setPackageMode] = useState('pack1');
  const [filter, setFilter] = useState('all');

  const menuItems = {
    pack1: [
      { id: 1, name: 'Stuffed Paneer Tikka', description: 'Paneer cubes filled with aromatic herbs and spices, grilled to perfection.', price: 'RS.250', veg: true,  reviews: 50, rating: 4.5, image: img1 },
      { id: 2, name: 'Hyderabadi Biryani', description: 'Fragrant basmati rice layered with flavorful, spiced meat or vegetables.', price: 'RS.300', veg: false,  reviews: 30, rating: 4.0, image: img2 },
      { id: 3, name: 'Garlic Naan', description: 'Soft, leavened bread topped with roasted garlic.', price: 'RS.200', veg: true, reviews: 50, rating: 4.5, image: img3 },
      { id: 4, name: 'Tandoori Prawns', description: 'Juicy prawns marinated in a blend of spices and cooked in a tandoor.', price: 'RS.150', veg: false,  reviews: 30, rating: 4.0, image: img4 },
      { id: 5, name: 'Paneer Lababdar', description: 'Creamy tomato-based curry with succulent paneer cubes.', price: 'RS.150', veg: true,  reviews: 30, rating: 4.0, image: img5 },
      { id: 6, name: 'Dal Makhani', description: 'Rich and creamy black lentils simmered with spices.', price: 'RS.50', veg: true,  reviews: 50, rating: 4.5, image: img7 },
      { id: 7, name: 'Masala Chai', description: 'Spiced tea brewed with aromatic herbs and spices.', price: 'RS.50', veg: true,  reviews: 50, rating: 4.5, image: img6 },

    ],
    pack2: [
      { id: 1, name: 'Chicken Tikka', description: 'Creamy, mildly spiced chicken pieces grilled to perfection.', price: 'RS.250', veg: false,  reviews: 50, rating: 4.5, image: img8 },
      { id: 2, name: 'Vegetable Kurma', description: 'Mixed vegetables cooked in a fragrant, mildly spiced coconut curry.', price: 'RS.300', veg: true,  reviews: 30, rating: 4.0, image: img9 },
      { id: 3, name: 'Garlic Naan', description: 'Soft, leavened bread topped with roasted garlic.', price: 'RS.200', veg: true, reviews: 50, rating: 4.5, image: img3 },
      { id: 4, name: 'Jeera Rice', description: 'Fragrant basmati rice tempered with cumin seeds.', price: 'RS.150', veg: true,  reviews: 30, rating: 4.0, image: img10 },
      { id: 5, name: 'Paneer Lababdar', description: 'Creamy tomato-based curry with succulent paneer cubes.', price: 'RS.150', veg: true,  reviews: 30, rating: 4.0, image: img5 },
      { id: 6, name: 'Dal Makhani', description: 'Rich and creamy black lentils simmered with spices.', price: 'RS.50', veg: true,  reviews: 50, rating: 4.5, image: img7 },
      { id: 7, name: 'Masala Chai', description: 'Spiced tea brewed with aromatic herbs and spices.', price: 'RS.50', veg: true,  reviews: 50, rating: 4.5, image: img6 },

    ],
    pack3: [
      { id: 1, name: 'Aloo Tikka ', description: 'Spiced potato patties served with tangy tamarind chutney.', price: 'RS.250', veg: true,  reviews: 50, rating: 4.5, image: img11 },
      { id: 2, name: 'Vegetable Pulao', description: 'Flavorful rice dish cooked with mixed vegetables and mild spices.', price: 'RS.300', veg: true,  reviews: 30, rating: 4.0, image: img14 },
      { id: 3, name: 'Chapati', description: 'Soft, unleavened whole wheat bread.', price: 'RS.200', veg: true, reviews: 50, rating: 4.5, image: img12 },
      { id: 4, name: 'Chicken Curry', description: 'Classic chicken curry with a blend of aromatic spices.', price: 'RS.150', veg: false,  reviews: 30, rating: 4.0, image: img13 },
      { id: 5, name: 'Paneer Lababdar', description: 'Creamy tomato-based curry with succulent paneer cubes.', price: 'RS.150', veg: true,  reviews: 30, rating: 4.0, image: img1 },
      { id: 6, name: 'Dal Makhani', description: 'Rich and creamy black lentils simmered with spices.', price: 'RS.50', veg: true,  reviews: 50, rating: 4.5, image: img7 },
      { id: 7, name: 'Masala Chai', description: 'Spiced tea brewed with aromatic herbs and spices.', price: 'RS.50', veg: true,  reviews: 50, rating: 4.5, image: img6 },

    ],
   
   

  
  };

  const filteredItems = menuItems[packageMode].filter(item => {
    if (filter === 'all') return true;
    if (filter === 'veg' && item.veg) return true;
    if (filter === 'non-veg' && !item.veg) return true;
  
    if (filter === 'reviews' && item.reviews >= 50) return true;
    if (filter === 'rating' && item.rating >= 4.5) return true;
    return false;
  });

  return (
    <div>
    <div>
    <header className="header2">
      <h2>PrimePlates</h2>
      <nav className="navigation2">
      <a href="/Home">Home</a>
      <a href="/AboutUs">About Us</a>
          
          
          <a href="/WeekMenu">Our Menu</a>
          <a href="/CustomOrder">Custom Order</a>
          <a href="/Contact">Contact</a>

      </nav>
    </header>
    </div>
    <div className="menu-page2">
      <div className="main2">
      <h1 style={{ textAlign: 'center' }}>Packages</h1>
      <div className="package-selector2">
        <button onClick={() => setPackageMode('pack1')} className={packageMode === 'pack1' ? 'active' : ''}>Premium Package</button>
        <button onClick={() => setPackageMode('pack2')} className={packageMode === 'pack2' ? 'active' : ''}>Standard Package</button>
        <button onClick={() => setPackageMode('pack3')} className={packageMode === 'pack3' ? 'active' : ''}>Lite Package</button>
      </div>
      <div className="filter-selector2">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('veg')} className={filter === 'veg' ? 'active' : ''}>Veg</button>
        <button onClick={() => setFilter('non-veg')} className={filter === 'non-veg' ? 'active' : ''}>Non-Veg</button>
        
        <button onClick={() => setFilter('reviews')} className={filter === 'reviews' ? 'active' : ''}>Reviews > 50</button>
        <button onClick={() => setFilter('rating')} className={filter === 'rating' ? 'active' : ''}>Rating > 4.5</button>
      </div>
      <div className="menu-items2">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-item2">
            <Link to={`/menu/${item.id}`}>
              <img src={item.image} alt={item.name} className="menu-item-image2" />
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p className="price2">{item.price}</p>
              
              <p>Reviews: {item.reviews}</p>
              <p>Rating: {item.rating}</p>
            </Link>
          </div>
        ))}
      </div>
      <button onClick={handleMenu} className="btn2">More Details</button>
      </div>
    </div>
    </div>
  );
};

export default Package;