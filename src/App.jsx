// import React from 'react';
// import './App.css';
// import avatar  from './assets/avatar.png';
// import SliderComponent from './SliderComponent';


// function App() {
//   return (
//     <div className="left-container">
//       <div className="top">
//         <div className="img-div">
//           <img src={avatar} alt="Avatar" className="img" />
//         </div>
//         <div className="webName">
//           Account io
//         </div>
//         <div className="text">
//           <h1>Manage multiple accounts in one place!</h1>
//         </div>
//       </div>
//       <div className="slider-container">
//         {/* <div className="slider">
//           <div className="slide">
//             <div>
//               <img src={twitter} alt="" />
//               <h4>Twitter</h4>
//               <p>Tweet, reply to tweets, manage DMs, and more in a single dashboard.</p>
//             </div>
//           </div>
         
//         </div>
//         <div className="slider">
//           <div className="slide">
//             <div>
//               <img src={twitter} alt="" />
//               <h4>Twitter</h4>
//               <p>Tweet, reply to tweets, manage DMs, and more in a single dashboard.</p>
//             </div>
//           </div>
//           <div className="slider">
//           <div className="slide">
//             <div>
//               <img src={twitter} alt="" />
//               <h4>Twitter</h4>
//               <p>Tweet, reply to tweets, manage DMs, and more in a single dashboard.</p>
//             </div>
//           </div>
         
//         </div>
//         </div> */}
//         <SliderComponent/>
//       </div>
//       <div className="bottom">
        
//           <li>Policy</li>
//           <li>Terms of Service</li>
        
//       </div>
//     </div>
//   );
// }

// export default App;
// App.js
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
