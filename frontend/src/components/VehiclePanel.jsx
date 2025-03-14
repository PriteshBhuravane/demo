import React from 'react'
import car from "../assets/car1.png";
import bike from "../assets/bike.png";
import auto from "../assets/auto.png";

const VehiclePanel = (props) => {
  return (
    <div>
        <h5
          onClick={() => {
            props.setVehiclePanel(false);
          }}
          className="  top-0 right-2 absolute text-2xl "
        >
          <i className=" text-2xl text-gray-600 ri-arrow-down-wide-line "></i>
        </h5>
        <h3 className="text-xl font-semibold mb-5">Choose a Vehicle</h3>

        <div onClick={()=>{
          props.setConfirmeRidePanel(true)
        }} className="flex border-2 mb-2 rounded-xl w-full p-3 items-center justify-between cursor-pointer active:border-black border-gray-300">
          <img src={car} alt="" className="h-12 w-20" />
          <div className="w-1/2 -ml-2">
            <h4 className="font-medium text-base">
              Ubergo{" "}
              <span>
                <i className="ri-user-3-fill"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 min away</h5>
            <p className="font-normal text-xs text-gray-500">
              Affordable, compact rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹ 193.20</h2>
        </div>
        <div onClick={()=>{
          props.setConfirmeRidePanel(true)
        }} className="flex border-2 mb-2 rounded-xl w-full p-3 items-center justify-between cursor-pointer active:border-black border-gray-300">
          <img src={bike} alt="" className="h-12 w-20" />
          <div className="w-1/2 -ml-2">
            <h4 className="font-medium text-base">
              Bike{" "}
              <span>
                <i className="ri-user-3-fill"></i>1
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 min away</h5>
            <p className="font-normal text-xs text-gray-500">
              Affordable, compact rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹ 90</h2>
        </div>
        <div onClick={()=>{
          props.setConfirmeRidePanel(true)
        }} className="flex border-2 mb-2 rounded-xl w-full p-3 items-center justify-between cursor-pointer active:border-black border-gray-300">
          <img src={auto} alt="" className="h-12 w-20" />
          <div className="w-1/2 -ml-2">
            <h4 className="font-medium text-base">
              Auto{" "}
              <span>
                <i className="ri-user-3-fill"></i>3
              </span>
            </h4>
            <h5 className="font-medium text-sm">4 min away</h5>
            <p className="font-normal text-xs text-gray-500">
              Affordable, compact rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹ 145.20</h2>
        </div>
    </div>
  )
}

export default VehiclePanel