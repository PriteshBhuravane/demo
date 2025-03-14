import React from "react";
import car from "../assets/car1.png";
import { Link } from "react-router-dom";
import logo from '../assets/quickride_driver_logo.png'

const Ridding = () => {
  return (
    <div className=" h-screen">
       <div className='fixed p-3 flex top-0 justify-between items-center w-full'>
                <Link to='/home' className="  flex h-10 w-10 bg-white rounded-full items-center justify-center">
              <i className=" font-medium text-lg ri-logout-box-r-line"></i>
              </Link>
              </div>
            <div className=" h-1/2">
            
              <img
                src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                alt="Logo"
                className=" h-full w-full object-cover"
              />
            </div>
            <div className=" h-1/2 p-4">
            
              <div className=" flex items-center justify-between">
                <img className=" h-12" src={car} alt="" />
                <div className=" text-right">
                  <h2 className=" text-lg font-medium">Pritesh Bhuravane</h2>
                  <h4 className=" text-xl font-semibold -mt-1 -mb-1">MH08AN7764</h4>
                  <p className=" text-sm text-gray-600">White Maruti Suzuki Alto</p>
                </div>
              </div>
      
              <div className=" flex justify-between flex-col items-center gap-2">
                <div className=" w-full mt-5">
                  <div className=" flex items-center gap-5 p-3 border-b-1 border-gray-400 ">
                    <i className=" text-xl ri-map-pin-user-fill"></i>
                    <div>
                      <h3 className=" text-lg font-medium">562/11-A</h3>
                      <p className=" text-sm -mt-1 text-gray-600">
                        Finolex Colony, Ratnagiri
                      </p>
                    </div>
                  </div>
      
                  <div className=" flex items-center gap-5 p-3  ">
                    <i className=" text-xl ri-money-rupee-circle-fill"></i>
                    <div>
                      <h3 className=" text-lg font-medium">₹ 193.20</h3>
                      <p className=" text-sm -mt-1 text-gray-600">Cash Cash</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className=" w-full bg-green-600 font-semibold text-white p-2 rounded-lg mt-5">Make a Payment</button>
            </div>
    </div>
  );
};

export default Ridding;
