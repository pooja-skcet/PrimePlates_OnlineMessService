import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home/Home'
import Homepage from './Components/Home/Homepage'
import Navigate from './Components/Navigate/Navigate';
import NewHome from './Components/NewHome/NewHome'
import Services from './Components/Services/Services';
import Package from './Components/Package/Package';
import Footer from './Components/Footer'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Navigate/>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
