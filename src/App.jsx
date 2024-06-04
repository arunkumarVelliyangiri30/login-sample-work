import React from 'react';
import './App.css';
import avatar from './assets/avatar.png';
import SliderComponent from './SliderComponent';

function App() {
  return (
    <div className="left-container">
      <div className="top">
        <div className="img-div">
          <img src={avatar} alt="Avatar" className="img" />
        </div>
        <div className="webName">
          Account io
        </div>
        <div className="text">
          <h1>Manage multiple accounts in one place!</h1>
        </div>
      </div>
      <div className="slider-container">
        <SliderComponent />
      </div>
      <div className="bottom">
        <li>Policy</li>
        <li>Terms of Service</li>
      </div>
    </div>
  );
}

export default App;
