import React from 'react';
import logo from '../assets/logo.png';
import onboarding from '../assets/onboarding1.jpg';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div>
        <div 
          className="h-screen w-full pt-6 flex flex-col justify-between bg-cover bg-center"
          style={{ backgroundImage: `url(${onboarding})` }}
        >
          <img src={logo} alt="QuickRide Logo" className="w-20 ml-8" />
          <div className="bg-white pb-7 py-4 px-4">
              <h2 className="text-2xl font-bold ml-2">Get Started with QuickRide</h2>
              <Link to='/login' className="flex items-center justify-center bg-black text-white w-full rounded mt-5 py-3">Continue</Link>
          </div>
        </div>
    </div>
  );
};

export default Start;