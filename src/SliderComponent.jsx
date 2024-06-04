
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import twitter from './assets/twitter.png';
import insta from './assets/insta.png';
import wats from './assets/wats.png';
import './SliderComponent.css';

const SliderComponent = () => {
  return (
    <AwesomeSlider>
      <div className="slide">
        <img src={twitter} alt="Twitter" />
        <h4>Twitter</h4>
        <p>Tweet, reply to tweets, manage DMs, and more in a single dashboard.</p>
      </div>
      <div className="slide">
        <img src={insta} alt="Instagram" />
        <h4>Instagram</h4>
        <p>Post photos, stories, and more in a single dashboard.</p>
      </div>
      <div className="slide">
        <img src={wats} alt="WhatsApp" />
        <h4>WhatsApp</h4>
        <p>Chat, share media, and more in a single dashboard.</p>
      </div>
    </AwesomeSlider>
  );
};

export default SliderComponent;
